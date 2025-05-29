## repicka-web

에프기210도7분 화이띵

### 커밋 컨벤션

- feat: 설명설명
- fix: 설명설명

| 커밋 유형 | 의미                                                         |
| --------- | ------------------------------------------------------------ |
| feat      | 새로운 기능 추가                                             |
| fix       | 버그, 코드 수정 / (mod, design ...)                          |
| style     | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| refactor  | 코드 리팩토링                                                |
| docs      | 문서 수정                                                    |
| revert    | commit revert                                                |
| chore     | 그 외 기타 수정 모두 다                                      |

- [참고 링크](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

### 부랜치 컨벤션

- dev :: 기본 브랜치 (데브 서버)
- main :: 배포 나가있는 브랜치
- feat/#[이슈 번호]/[기능 이름] :: 특정 기능 개발 브랜치
  - feat/[세부 기능] :: 특정 기능 개발 서브 브랜치 (바로 dev ㄴㄴ, 위에 꺼에 머지)
- fix/#[이슈 번호]/[버그 이름] :: 특정 버그 수정 브랜치
