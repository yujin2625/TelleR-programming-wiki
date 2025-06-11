window.addEventListener("DOMContentLoaded", function () {
    const toolbar = document.querySelector(".md-header__inner");
  
    if (!toolbar) return;
  
    const wrapper = document.createElement("div");
    wrapper.style.marginLeft = "auto";
  
    const buttons = [
      {
        text: "📝 Markdown",
        action: () => {
          const path = window.location.pathname.replace(/\/$/, "");
          const mdFile = path.endsWith("/") ? path + "index.md" : path + ".md";
          window.open("https://github.com/yujin2625/TelleR-programming-wiki/blob/main/docs" + mdFile, "_blank");
        },
      },
      {
        text: "📄 PDF 저장",
        action: () => {
          window.print();
        },
      }
    ];
  
    buttons.forEach(({ text, action }) => {
      const btn = document.createElement("button");
      btn.innerText = text;
      btn.style.marginLeft = "0.5rem";
      btn.onclick = action;
      btn.className = "md-button";
      wrapper.appendChild(btn);
    });
  
    toolbar.appendChild(wrapper);
  });
  