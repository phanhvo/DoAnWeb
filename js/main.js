const mainMenu = document.getElementById('mainMenu');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống
    mainMenu.classList.add('hidden');
  } else {
    // Cuộn lên
    mainMenu.classList.remove('hidden');
  }
  lastScrollTop = scrollTop;
});

const images = document.querySelectorAll('.fade-banner img');
let currentIndex = 0;
        
function nextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
        
setInterval(nextImage, 3000); // Chuyển đổi ảnh sau mỗi 3 giây

// Hiển thị nút khi cuộn xuống 200px
window.onscroll = function () {
  const btn = document.getElementById("btnTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
// Khi click nút
function cuonLenDauTrang() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//khi bam quay lai trang chu thi tro ve ngay dung vi tri poster vua chon
document.querySelectorAll('.chi-tiet').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        sessionStorage.setItem('scrollPosition', window.scrollY); // lưu vị trí cuộn
        window.location.href = `detail.html?id=${id}`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollY = sessionStorage.getItem('scrollPosition');
    if (scrollY !== null) {
        window.scrollTo(0, parseInt(scrollY));
        sessionStorage.removeItem('scrollPosition'); // Xoá để tránh scroll lại sau đó
    }
});

