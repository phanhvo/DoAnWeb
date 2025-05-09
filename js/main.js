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

 // Dữ liệu chi tiết phim
 const movieDetails = {
    "Địa đạo: Mặt trời trong bóng tối": {
      title: "Địa đạo: Mặt trời trong bóng tối",
      description: "Thể loại: Lịch sử, Hành động\nThời lượng: 125 phút\nKhởi chiếu: 30.04.2024"
    },
    "Biệt đội sấm sét": {
      title: "Thunderbolts: Biệt đội sấm sét",
      description: "Thể loại: Hành động, Giả tưởng, Phiêu lưu\nThời lượng: 126 phút\nKhởi chiếu: 30.04.2025"
    },
    "Lật mặt 8: Vòng tay nắng": {
      title: "Lật mặt 8: Vòng tay nắng",
      description: "Thể loại: Tâm lý, Tình cảm, Gia đình\nThời lượng: 135 phút\nKhởi chiếu: 27.04.2024"
    },
    "Những Gã Trai Hư: Chơi Hay Bị Xơi": {
      title: "Những Gã Trai Hư: Chơi Hay Bị Xơi",
      description: "Thể loại: Hành động, Hài hước\nThời lượng: 115 phút\nKhởi chiếu: 07/06/2024"
    },
    "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh": {
      title: "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh",
      description: "Thể loại: Kinh dị\nThời lượng: 122 phút\nKhởi chiếu: 07/06/2024"
    },
    "Móng Vuốt": {
      title: "Móng Vuốt",
      description: "Thể loại: Kinh dị\nThời lượng: Chưa công bố\nKhởi chiếu: 07/06/2024"
    }
  };

  // Nút Chi tiết phim
  const detailButtons = document.querySelectorAll(".btn-detail");
  const popup = document.getElementById("popup-detail");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const movieTitle = this.closest(".movie-item").querySelector("h3").innerText;
      const details = movieDetails[movieTitle];

      if (details) {
        popupTitle.innerText = details.title;
        popupDescription.innerText = details.description;
      } else {
        popupTitle.innerText = "Không có thông tin chi tiết";
        popupDescription.innerText = "Không có thông tin cho phim này.";
      }

      popup.style.display = "flex";
    });
  });

  // Đóng popup khi bấm ra ngoài
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

function showMovieDetailsPopup() {
  document.getElementById("movieDetailsPopupOverlay").style.display = "flex";
}

function hideMovieDetailsPopup() {
  document.getElementById("movieDetailsPopupOverlay").style.display = "none";
}

//nut backtotop
const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });