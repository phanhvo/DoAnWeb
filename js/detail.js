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
