# lerna

## features
- 다중 패키지의 종속성 관리 및 모듈의 중복성 제거
- 버전 관리

## lerna를 채용한 오픈소스 프로젝트
- babel
- vue-cli
- jest
- nuxt.js
- webdriverio
- create-react-app
- create-nuxt-app
- webpack-cli
- grahpql-server
- typescript-eslint
- react-router

## 주요 기능

### fixed mode
싱글 버전 라인으로 운영 가능

### independent mode
각 패키지마다 독립적으로 버전 관리 가능

### Hositing
[official doc](https://github.com/lerna/lerna/blob/main/doc/hoist.md)

- 공통으로 사용하는 모듈은 top-level(root)에 설치되고, 각 패키지 안의 `node_modules`에서는 생략된다.
- 대부분의 공통 모듈은 호이스트되지만, 다른 버전을 가진 아웃라이어 패키지들은 각 패키지의 `node_moduels`에 포함될 수 있다.
- 공통 패키지들의 실행 파일은 각 패키지의 `node_moduels/.bin` 디렉토리에 symlinked 된다.

## disadvantages

### module resolution
node module resolution algorithm은 재귀적으로 동작한다.

예를 들어보자면, `halmet`이라는 라이브러리를 찾을 경우 `./node_modules/halmet`에서 먼저 찾고, 
이후 `../node_modules/halmet`, `../../node_moduels/halmet`로 로컬에서 점점 전역으로 나아가며 패키지를 탐색한다.

많은 도구들이 이러한 스펙을 따라가고는 있지만, 몇몇 도구들은 이런 스펙에 닫혀있어 현재 디렉토리의 `node_modules`에 모든 의존성들이 있다고 가정하는 경우가 있다. 
(vscode git diff 못 잡는 경우가 간혹 있음)

이런 문제를 해결하기 위해 root에 위치한 모듈들에 symlink를 걸어둔 바이너리 파일을 로컬에 위치한 `node_moduels`에 걸어두기는 하지만 lerna에서는 이를 자동으로 지원해주지 않고 있다고 말한다.

### Commands

**lerna clean**

Root를 제외한 패키지에서 node_modules 제거

```sh
$ lerna clean
```

**lerna bootstrap**

모든 패키지의 node_modules 설치

```sh
$ lerna bootstrap
```

**lerna run [command]**

각 패키지의 package.json에 명시된 script를 실행한다.

```sh
lerna run [command]
```

**lerna publish**

패키지 배포

```sh
$ lerna publish
```

**lerna exec**

각 패키지의 임의의 커맨드 명령어 실행

```sh
lerna exec
```

**공통 모듈 설치**

```sh
$ yarn add [node module] --dev --ignore-workspace-root-check
```

**로컬 패키지 모듈 설치**

```sh
$ lerna add [node module] --scope=[lerna package]

# e.g.
$ lerna add express --scope=server
```


## Setup

### build shared package
```sh
$ lerna build
```

### start server
```sh
$ lerna run --scope server start
```

### start client
```sh
$ lerna run --scope scope start
```

### start client & server
```sh
$ lerna run start
```

## References
- https://kdydesign.github.io/2020/08/25/mono-repo-lerna/