<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 이 프로젝트의 규칙

수업 실습으로 만드는 **개인 홈페이지**입니다. 사용자가 말하는 것을 하나씩 반영합니다.

- **새 라이브러리를 설치하지 않습니다.** 이미 있는 Next.js·React·Tailwind 로만 만듭니다.
- 데이터베이스와 백엔드 API 를 쓰지 않습니다. 데이터는 코드 안의 상수와 `public/` 의 파일뿐입니다.
- 이미지는 `public/` 에 실제로 있는 파일만 씁니다. **없는 경로를 지어내지 않습니다** —
  사진이 없으면 색 블록으로 자리를 잡습니다.
- 요청받은 부분만 고칩니다. 다른 부분은 건드리지 않습니다.
- 화면 폭 390px 에서 가로 스크롤이 생기지 않게 합니다. 이미지에는 `alt` 를 답니다.
- 이 사이트는 **공개 URL 로 배포**됩니다. 실명 전체·학번·연락처·집 주소·학교 이름을
  코드나 화면에 넣지 않습니다.
