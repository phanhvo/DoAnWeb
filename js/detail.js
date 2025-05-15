// Lấy tham số id từ URL (vd: chitietphim.html?id=p01)
const urlParams = new URLSearchParams(window.location.search);
const phimId = urlParams.get("id");

// Tìm phim theo id trong danh sách
const phim = phimList.find(p => p.id === phimId);

// Hiển thị dữ liệu
if (phim) {
  document.getElementById("ten-phim").textContent = phim.ten;
  document.getElementById("anh-phim").src = phim.anh;
  document.getElementById("theloai").textContent = phim.theloai;
  document.getElementById("thoiluong").textContent = phim.thoiluong;
  document.getElementById("daodien").textContent = phim.daodien;
  document.getElementById("dienvien").textContent = phim.dienvien;
  document.getElementById("mota").textContent = phim.mota;
} else {
  document.getElementById("phim-container").innerHTML = "<p>Phim không tồn tại.</p>";
}

function quayLai() {
    window.location.href = "index.html";
}
// function quayLai() {
//     const scrollY = sessionStorage.getItem('scrollPosition') || 0;
//     window.location.href = `index.html#scroll-${scrollY}`;
// }

// // Khi trang chủ load lại → cuộn về đúng vị trí
// if (window.location.hash.startsWith("#scroll-")) {
//     const y = parseInt(window.location.hash.replace("#scroll-", ""));
//     window.scrollTo(0, y);
// }

// // Lấy id từ URL
// function layIdPhim() {
//   const params = new URLSearchParams(window.location.search);
//   return params.get("id");
// }

// // Tìm phim theo id
// function timPhimTheoId(id) {
//   const allPhim = [...phimList.dangchieu, ...phimList.sapchieu];
//   return allPhim.find(phim => phim.id === id);
// }

// // Hiển thị thông tin phim
// function hienChiTietPhim() {
//   const id = layIdPhim();
//   const phim = timPhimTheoId(id);

//   const container = document.getElementById("phim-container");

//   if (!phim) {
//     container.innerHTML = "<p>Không tìm thấy phim.</p>";
//     return;
//   }

//   container.innerHTML = `
//     <h1>${phim.ten}</h1>
//     <img src="${phim.anh}" alt="${phim.ten}" style="max-width:300px;">
//     <p>${phim.theloai}</p>
//     <p>${phim.thoiluong}</p>
//     <p>${phim.daodien}</p>
//     <p>${phim.dienvien}</p>
//     <p>${phim.mota}</p>
//     <a href="index.html" class="button">Quay về</a>
//   `;
// }

// document.addEventListener("DOMContentLoaded", hienChiTietPhim);

// function getFilmById(id) {
//     const allFilms = [...dangChieu, ...sapChieu];
//     return allFilms.find(film => film.id === id);
// }

// function renderDetail(film) {
//     if (!film) {
//         document.getElementById("phim-container").innerHTML = "<p>Phim không tồn tại</p>";
//         return;
//     }

//     document.getElementById("phim-container").innerHTML = `
//         <h1>${film.title}</h1>
//         <img src="${film.image}" alt="${film.title}" style="width:300px;" />
//         <p>${film.theloai}</p>
//         <p>${film.thoiluong}</p>
//         <p>${film.daodien}</p>
//         <p>${film.dienvien}</p>
//         <p>${film.mota}</p>
//         <a href="index.html">← Quay lại</a>
//     `;
// }

// const params = new URLSearchParams(window.location.search);
// const filmId = params.get("id");
// const film = getFilmById(filmId);
// renderDetail(film);
