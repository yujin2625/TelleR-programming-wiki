window.addEventListener("DOMContentLoaded", () => {
    const toolbar = document.querySelector(".md-header__inner");
    if (!toolbar) return;
  
    const button = document.createElement("a");
    button.innerText = "💾 사이트 전체 다운로드";
    button.href = "/assets/export/site.zip";
    button.download = "site.zip";
    button.className = "md-button";
    button.style.marginLeft = "1rem";
  
    toolbar.appendChild(button);
  });
  