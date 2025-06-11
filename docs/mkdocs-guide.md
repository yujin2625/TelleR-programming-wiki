# 팀원용 Git 협업 가이드 (TelleR Programming Wiki)

이 문서는 **TelleR VR 방탈출 게임 프로젝트**의 MkDocs 위키 문서를 팀원들이 GitHub를 통해 협업할 수 있도록 안내하는 가이드입니다.

---

## 1. Git 환경 준비

### 1.1 Git 설치

* 공식 사이트: [https://git-scm.com](https://git-scm.com)
* 설치 시 기본 설정 사용

### 1.2 GitHub 계정 생성

* [https://github.com](https://github.com) 에서 계정 생성 및 로그인

### 1.3 SSH 키 등록 (선택)

* Git 인증 생략하고 싶을 경우 SSH 키 등록 권장
* 안내: [https://docs.github.com/en/authentication/connecting-to-github-with-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## 2. 프로젝트 복제 (Clone)

```bash
git clone https://github.com/yujin2625/TelleR-programming-wiki.git
cd TelleR-programming-wiki
```

---

## 3. MkDocs 로컬 실행 준비

### 3.1 Python 설치 확인

```bash
python --version
```

### 3.2 MkDocs 및 플러그인 설치

```bash
python -m pip install mkdocs mkdocs-material
python -m pip install mkdocs-git-revision-date-localized-plugin pymdown-extensions
```

### 3.3 로컬 서버 실행

```bash
mkdocs serve
```

→ 브라우저에서 `http://127.0.0.1:8000` 접속

---

## 4. 문서 편집 규칙

| 항목     | 규칙                                               |
| -------- | -------------------------------------------------- |
| 포맷     | `.md` 파일 (Markdown)                              |
| 위치     | `docs/` 폴더 내부에 작성                           |
| 툴       | VS Code 권장 (테마 설정 가능)                      |
| 이름     | `snake-case` 파일명 사용 (예: `asset-pipeline.md`) |
| 이미지   | `docs/assets/` 폴더에 저장                         |
| 미리보기 | `mkdocs serve` 로 확인                             |

---

## 5. Git 사용법

### 5.1 기본 커밋

```bash
git add .
git commit -m "docs: 문서 추가 또는 수정"
git push origin main
```

### 5.2 기능 브랜치 사용 (선택)

```bash
git checkout -b feature/섹션이름
# 작업 후
git push origin feature/섹션이름
```

→ GitHub에서 Pull Request 생성 후 병합

---

## 6. 충돌 방지

* 문서 작업 전 항상 최신 코드 받아오기:

```bash
git pull origin main
```

* 충돌 발생 시 직접 수정 후 커밋
* `push --force` 금지

---

## 7. GitHub Pages 배포 확인

* 자동으로 `https://teller.churu.dev`에 배포됨
* 별도의 수동 배포 필요 없음

---

## 📁 전체 폴더 구조

```
TelleR-programming-wiki/
├── docs/
│   ├── index.md
│   ├── overview.md
│   ├── game-design.md
│   ├── vr-interaction.md
│   ├── network-architecture.md
│   ├── asset-pipeline.md
│   ├── troubleshooting.md
│   └── assets/
│       └── (이미지, 첨부 파일 등)
├── mkdocs.yml
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ✅ 유의사항 요약

* `docs/` 내부만 편집
* 작업 전 `git pull`
* GitHub 푸시 전 커밋 메시지 명확히 작성
* MkDocs 로컬 서버로 미리보기 필수

---

문의 사항은 관리자 또는 GitHub 이슈 페이지를 통해 공유해주세요.
