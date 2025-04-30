// 頁面滾動動畫效果
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.content-section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.9 && !section.classList.contains('visible')) {
        section.classList.add('visible');
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }
  
  // 添加初始狀態
  sections.forEach(section => {
    if (!section.classList.contains('visible')) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
  });
  
  // 初始檢查
  checkScroll();
  
  // 滾動時檢查
  window.addEventListener('scroll', checkScroll);
});
