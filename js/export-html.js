function downloadCurrentHTML() {
    const doc = document.documentElement.cloneNode(true);
  
    // 불필요한 스크립트 제거
    doc.querySelectorAll("script").forEach(el => el.remove());
  
    // Blob 생성
    const html = "<!DOCTYPE html>\n" + doc.outerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
  
    // 다운로드
    const a = document.createElement("a");
    a.href = url;
    a.download = document.title.replace(/\s+/g, "_") + ".html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const toolbar = document.querySelector(".md-header__inner");
    if (!toolbar) return;
  
    const button = document.createElement("button");
    button.innerText = "📄 HTML로 저장";
    button.className = "md-button";
    button.style.marginLeft = "1rem";
    button.onclick = downloadCurrentHTML;
  
    toolbar.appendChild(button);
  });
  