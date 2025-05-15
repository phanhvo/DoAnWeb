const showtimeData = {
    "p01": ["10:00", "13:30", "17:00", "20:30"], 
    "p02": ["09:45", "12:15", "15:45", "19:15"],
    "p03": ["08:30", "11:00", "14:30", "18:00"],
    "p04": ["11:00", "13:30", "17:00", "20:30"], 
    "p05": ["09:45", "12:15", "15:45", "19:15"],
    "p06": ["08:30", "11:00", "14:30", "18:00"],
    "p07": ["10:30", "11:00", "14:30", "18:00"],
    "p08": ["11:30", "11:00", "14:30", "18:00"]
};
const movieSelect = document.getElementById("movie");
const showtimeSelect = document.getElementById("showtime");
const bookingForm = document.getElementById("booking-form");
const downloadBtn = document.getElementById("download-btn");
const invoice = document.getElementById("invoice");
function updateShowtimes() {
    const selectedMovie = movieSelect.value; // Lấy phim được chọn
    const times = showtimeData[selectedMovie] || []; // Lấy suất chiếu từ dữ liệu

    showtimeSelect.innerHTML = ""; // Xóa các tùy chọn cũ

    if (times.length > 0) {
        // Nếu có suất chiếu, thêm các tùy chọn vào danh sách
        times.forEach((time) => {
            const option = document.createElement("option");
            option.textContent = time;
            option.value = time; // Đảm bảo giá trị được gán đúng
            showtimeSelect.appendChild(option);
        });
    } else {
        // Nếu không có suất chiếu, hiển thị thông báo
        const noOption = document.createElement("option");
        noOption.textContent = "Không có suất chiếu";
        noOption.disabled = true;
        noOption.selected = true;
        showtimeSelect.appendChild(noOption);
    }
}
// Cập nhật suất chiếu khi thay đổi phim
movieSelect.addEventListener("change", updateShowtimes);
// Cập nhật suất chiếu khi trang tải xong
document.addEventListener("DOMContentLoaded", updateShowtimes);
bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const cinema = document.getElementById("cinema").value.trim();
    const movie = movieSelect.options[movieSelect.selectedIndex]?.text || "N/A";
    const showtime = showtimeSelect.value || "N/A";
    const quantity = parseInt(document.getElementById("quantity").value) || 0;

    if (!cinema || quantity <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin và số lượng vé hợp lệ.");
        return;
    }

    const total = quantity * 60000;

    // Hiển thị thông tin hóa đơn
    document.getElementById("inv-cinema").textContent = cinema;
    document.getElementById("inv-movie").textContent = movie;
    document.getElementById("inv-showtime").textContent = showtime;
    document.getElementById("inv-quantity").textContent = quantity;
    document.getElementById("inv-total").textContent = total.toLocaleString();

    invoice.style.display = "block";
    downloadBtn.style.display = "inline-block";
});

downloadBtn.addEventListener("click", function () {
    html2canvas(invoice).then((canvas) => {
        const link = document.createElement("a");
        link.download = "hoa-don.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});

    function dinhDangNgay(date) {
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth()+1).padStart(2, "0")}`;
    }

    ngayChieu.forEach((ngay, index) => {
      const button = document.createElement("button");
      button.textContent = index === 0 ? `Hôm Nay\n${dinhDangNgay(ngay)}` : `Thứ ${["Bảy","CN","Hai","Ba","Tư","Năm","Sáu"][(ngay.getDay()+1)%7]}\n${dinhDangNgay(ngay)}`;
      if(index === 0) button.classList.add("active");
      button.onclick = () => chonNgay(index);
      tabs.appendChild(button);
    });

    function chonNgay(index) {
      [...tabs.children].forEach((btn, i) => btn.classList.toggle("active", i === index));

      // Lấy ID phim từ URL
      const params = new URLSearchParams(window.location.search);
      const idPhim = params.get("id");
      const phim = danhSachPhim.find(p => p.id === idPhim);

      if (!phim || !phim.lichChieu) return;

      const lcNgay = phim.lichChieu[index];
      let html = "";
      for (let rap in lcNgay) {
        html += `<div class='rap-container'>
          <div class='rap-name'>${rap}</div>
          ${Object.entries(lcNgay[rap]).map(([dinhDang, suat]) => `
            <div class='dinhdang'>${dinhDang}</div>
            ${suat.map(gio => `<span class='suatchieu'>${gio}</span>`).join("")}
          `).join("")}
        </div>`;
      }
      noiDung.innerHTML = html;
    }

    chonNgay(0);
