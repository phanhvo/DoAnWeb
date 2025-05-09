import { films } from "./datafilm.js";

// Lấy id sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const filmId = parseInt(urlParams.get("id"), 10);
const film = films.find((p) => p.id === filmId);

//tìm thấy sản phẩm thì hiển thị chi tiết sản phẩm
if (film) {
  const filmDetail = document.querySelector(".film-detail");
  filmDetail.innerHTML = `
        <img src="${film.img}" alt="${film.name}">
        <div class="film-content">
            <h3>${film.name}</h3>
            <p>${film.description}</p>
            
        </div>
    `;
} else {
  const filmDetail = document.querySelector(".film-detail");
  filmDetail.innerHTML = `<p>Khong tim thay phim</p>`;
}