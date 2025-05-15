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


// //hien thi danh sach phim dang chieu / sap chieu
// function hienDanhSachPhim(loai) {
//   const danhSach = phimList[loai];
//   const table = document.getElementById("poster-table");
//   table.innerHTML = ""; // xóa nội dung cũ

//   for (let i = 0; i < danhSach.length; i += 4) {
//     const row = document.createElement("tr");
//     for (let j = i; j < i + 4 && j < danhSach.length; j++) {
//       const phim = danhSach[j];
//       const cell = document.createElement("td");
//       cell.className = "poster-cell";
//       const linkChiTiet = phim.id ? `detail.html?id=${phim.id}` : "#";

//       cell.innerHTML = `
//         <div class="poster-container">
//           <img src="${phim.anh}" alt="Poster Phim" class="poster" />
//           <div class="overlay">
//               <a href="#" class="button">Đặt vé</a>
//               <a href="${linkChiTiet}" class="button">Chi tiết</a>
//           </div>
//         </div>
//         <div class="film-title">${phim.ten}</div>
//       `;

//       row.appendChild(cell);
//     } 
//     table.appendChild(row);
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   // Gán sự kiện click cho menu
//   document.getElementById("menu-dang").addEventListener("click", (e) => {
//     e.preventDefault();
//     hienDanhSachPhim("dangchieu");
//   });

//   document.getElementById("menu-sap").addEventListener("click", (e) => {
//     e.preventDefault();
//     hienDanhSachPhim("sapchieu");
//   });
//   // Mặc định hiển thị phim đang chiếu
//   hienDanhSachPhim("dangchieu");
// });

// //hien thi phim dang chieu / sap chieu
// function createPosterHTML(film) {
//     return `
//         <td class="poster-cell">
//             <div class="poster-container">
//                 <img src="${film.image}" alt="${film.title}" class="poster" />
//                 <div class="overlay">
//                     <a href="#" class="button">Đặt vé</a>
//                     <a href="detail.html?id=${film.id}" class="button">Chi tiết</a>
//                 </div>
//             </div>
//             <div class="film-title">${film.title}</div>
//         </td>
//     `;
// }

// function renderFilms(films) {
//     const rows = [];
//     for (let i = 0; i < films.length; i += 4) {
//         const row = films.slice(i, i + 4).map(createPosterHTML).join('');
//         rows.push(`<tr>${row}</tr>`);
//     }
//     document.getElementById("poster-table-container").innerHTML = `
//         <table class="poster-table">${rows.join('')}</table>
//     `;
// }

// document.getElementById("menu-dang").addEventListener("click", (e) => {
//     e.preventDefault();
//     renderFilms(dangChieu);
// });
// document.getElementById("menu-sap").addEventListener("click", (e) => {
//     e.preventDefault();
//     renderFilms(sapChieu);
// });
// // Mặc định hiển thị phim đang chiếu
// renderFilms(dangChieu);

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

