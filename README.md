# 😄smile-log

### 1. INTRODUCTION

스마일게이트 STOVE DEV CAMP 2기 사전 과제 전형으로 개발하게 된 블로그 smile-log입니다.

매일, 즐거운 개발 기록을 남기고 싶다는 생각이 들어 작명하였습니다.

Smilegate stove를 상징하는 두 가지 색상을 테마로 사용하였고 velog를 참고하여 개발하였습니다.

### 2. 

<메인 페이지>
<img width="960" alt="메인화면" src="https://user-images.githubusercontent.com/38098157/140370538-cb0d2668-c34d-4c01-8107-a850b9e391f0.PNG">

<글목록 삭제 화면>
<img width="960" alt="글목록 삭제 화면" src="https://user-images.githubusercontent.com/38098157/140371260-142da60a-efb5-4d64-901f-8d7a64da2dc6.PNG">

<포스트 화면>
<img width="959" alt="포스트화면" src="https://user-images.githubusercontent.com/38098157/140371767-e4640d49-328f-4006-be85-32ab7ba990aa.PNG">

<포스트 작성 화면>
<img width="958" alt="포스트작성화면" src="https://user-images.githubusercontent.com/38098157/140370899-13a7da36-ca30-46a0-b6b8-458ba34fa74b.PNG">

<포스트 수정 화면>
<img width="958" alt="포스트수정화면" src="https://user-images.githubusercontent.com/38098157/140371066-83cfee4d-8a85-44e5-99c5-a34b447e30a0.PNG">

<댓글 작성 화면>
<img width="960" alt="댓글작성화면" src="https://user-images.githubusercontent.com/38098157/140371514-d8a15c2c-e5a5-48fa-b822-4e3847bbae8d.PNG">

<댓글 삭제 화면>
<img width="960" alt="댓글삭제화면" src="https://user-images.githubusercontent.com/38098157/140372136-3638f724-f1ac-4ab9-abe4-09fa10fb0b42.PNG">

### 3. 요구 SPEC

|필수 SPEC|개발|         
|------|:---:|               
|메인 페이지|o|
|글 쓰기 수정 기능|o|
|글 목록 삭제 기능|o|
|댓글 기능|o|

|옵션 SPEC|개발|
|------|:---:|
|UI 디자인|o|

### 4. 사용기술 stack

- React.js
- Node.js Express
- MySQL
- AWS rds
- Restful Api
- Html, Css

### 5. 프로젝트 구조

📦src
 ┣ 📂components
 ┃ ┣ 📜Comment.js
 ┃ ┣ 📜DeleteComment.js
 ┃ ┣ 📜Pagination.js
 ┃ ┣ 📜Post.js
 ┃ ┣ 📜Profile.js
 ┃ ┗ 📜Title.js
 ┣ 📂containers
 ┃ ┣ 📜CommentList.js
 ┃ ┣ 📜NavigationBar.js
 ┃ ┗ 📜PostList.js
 ┣ 📂pages
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜Readpost.js
 ┃ ┗ 📜WritePost.js
 ┣ 📂styles
 ┃ ┗ 📜common.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js


