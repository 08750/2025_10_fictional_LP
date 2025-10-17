// ハンバーガーとナビを取得
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".header-nav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    console.log("ハンバーガー押された！"); // ← 確認用
  });
});
