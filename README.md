# monorepo


## pros
- 공통 항목 단일화 (eslint, build, unit test 등)
- 쉬운 Package 공유 (중복 제거)
- 단일 이슈 트래킹 (client, server 작업을 묶어 처리 가능)
- 효율적인 의존성 관리

## cons
- Repository 거대화
- 느린 CI Build -> 해결 방법이 있지 않을까?
- 무분별한 의존성
- Dev Tools의 인덱싱 저하

## monorepo를 적용하기 좋은 상황
- 서로 다른 패키지가 연간 관계를 가질 경우
- N개의 패키지의 형태와 목적이 유사한 경우
- N개의 패키지 중 배포되어야 할 패키지의 비중이 큰 경우

## References
- https://kdydesign.github.io/2020/08/25/mono-repo-lerna/