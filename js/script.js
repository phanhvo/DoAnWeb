import { films } from "./datafilm.js";

// hiện danh sách sản phẩm
const filmList = document.querySelector(".list-film");
films.forEach((film) => {
  const filmItem = document.createElement("div");
  filmItem.classList.add("item");
  filmItem.innerHTML = `
        <img src="${film.img}" alt="${film.name}">
        <div class="film-content">
            <h3>${film.name}</h3>
            <p>${film.description}</p>
            
            <a href='detail.html?id=${
                film.id
            }' class="button">Go to detail</a>
        </div>
       
    `;
    filmList.appendChild(filmItem);
});