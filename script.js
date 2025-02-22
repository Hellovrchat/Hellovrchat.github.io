document.addEventListener("DOMContentLoaded", function() {
  /* ------------------------------
     Galeri Navigasyonu
  ------------------------------ */
  let currentIndex = 0;
  const images = [
    "files/18.png",
    "files/1.png",
    "files/2.png"
  ];

  function updateGallery() {
    document.getElementById("leftImage").src =
      images[(currentIndex - 1 + images.length) % images.length];
    document.getElementById("centerImage").src = images[currentIndex];
    document.getElementById("rightImage").src =
      images[(currentIndex + 1) % images.length];
  }

  document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });

  // İlk galeri güncellemesi
  updateGallery();

  /* ------------------------------
     Tema Toggle ve Nav Butonları
  ------------------------------ */
  const themeToggleButton = document.getElementById("themeToggleButton");
  const moonIcon = document.querySelector(".moon-icon");

  // Tema Toggle
  themeToggleButton.addEventListener("click", function() {
    document.body.classList.toggle("light");
    // Ay/Güneş ikonu değiştirelim
    if (document.body.classList.contains("light")) {
      moonIcon.textContent = "🌞";
    } else {
      moonIcon.textContent = "🌙";
    }
  });

  // Home Butonu
  document.getElementById("homeBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Key Features Butonu
  document.getElementById("featuresBtn").addEventListener("click", function() {
    const featuresSection = document.getElementById("features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });

  // Download Butonu
  document.getElementById("downloadBtn").addEventListener("click", function() {
    const downloadSection = document.getElementById("get-started");
    downloadSection.scrollIntoView({ behavior: "smooth" });
  });

  // Disclaimers & Safety Butonu
  document.getElementById("disclaimersBtn").addEventListener("click", function() {
    const disclaimersSection = document.getElementById("disclaimers");
    disclaimersSection.scrollIntoView({ behavior: "smooth" });
  });

  /* ------------------------------
     NumLock Kombinasyonları ile Animasyon (Örnek)
  ------------------------------ */
  let pressedKeys = [];
  document.addEventListener("keydown", function(e) {
    // Sadece NumLock açıksa ve Numpad tuşlarına basıldıysa
    if (e.getModifierState("NumLock") && e.code.startsWith("Numpad")) {
      // Basılan tuşu kaydediyoruz
      pressedKeys.push(e.code);
      // Çok uzamasın diye en fazla 3 tuşu tut
      if (pressedKeys.length > 3) {
        pressedKeys.shift();
      }
      // Basit bir örnek: "Numpad4" ve "Numpad6" aynı anda (veya art arda)
      if (pressedKeys.includes("Numpad4") && pressedKeys.includes("Numpad6")) {
        // Shake animasyonunu body'ye ekleyelim
        document.body.classList.add("shake");
        setTimeout(() => {
          document.body.classList.remove("shake");
        }, 500);
      }
    }
  });

  /* ------------------------------
     Scroll Reveal (Intersection Observer)
  ------------------------------ */
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1, // Elemanın %10’u görünür olduğunda tetiklenir
    }
  );

  revealElements.forEach((el) => {
    observer.observe(el);
  });

  /* ------------------------------
     FEEDBACK MODAL VE MAILTO
  ------------------------------ */
  const feedbackBtn = document.getElementById("feedbackBtn");
  const feedbackModal = document.getElementById("feedbackModal");
  const closeFeedbackBtn = document.getElementById("closeFeedbackBtn");
  const sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
  const feedbackText = document.getElementById("feedbackText");

  // Modal aç
  feedbackBtn.addEventListener("click", () => {
    feedbackModal.classList.add("open");
  });

  // Modal kapat
  closeFeedbackBtn.addEventListener("click", () => {
    feedbackModal.classList.remove("open");
  });

  // "Send" butonuna basınca mailto linki
  sendFeedbackBtn.addEventListener("click", () => {
    const bugDetails = feedbackText.value.trim();
    if (bugDetails) {
      // Kullanıcı bir şey yazdıysa mailto linkiyle mail istemcisini açalım
      window.location.href = `mailto:hellovrchat11@gmail.com?subject=Bug%20Report&body=${encodeURIComponent(
        bugDetails
      )}`;
    }
    // Gönderim sonrası modalı kapatalım ve metni sıfırlayalım
    feedbackModal.classList.remove("open");
    feedbackText.value = "";
  });
});
