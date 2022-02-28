# npm-workspace
- [specifities of how Node.js handles module resolution](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_all_together)


## requirements
- npm@7 or later


## Setup

```sh
$ npm run build --workspaces
$ npm run start --workspaces
```


## Commands

**Add a new workspace**

```sh
$ npm init -w [workspace-path]
```

**Add a package into specific workspace**

```sh
$ npm i [package] -w [workspace]
```

**Run Commands**

```sh
$ npm run [command] -w=[workspace]
```