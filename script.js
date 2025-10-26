document.addEventListener("DOMContentLoaded", () => {
  // --- Inisialisasi section fade-in ---
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.add('hidden'));

  // --- Animasi gambar home muncul ---
  const homeImages = document.querySelectorAll(".home-img");
  homeImages.forEach((img, index) => {
    setTimeout(() => img.classList.add("show"), 500 + index * 300);
  });

  // --- Partikel neon posisi acak ---
  const particles = document.querySelectorAll(".particles span");
  particles.forEach(span => {
    span.style.setProperty('--rand1', Math.random());
    span.style.setProperty('--rand2', Math.random());
  });
});

// --- Scroll Animasi ---
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) sec.classList.add('visible');
  });

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('visible');
  });
});

// --- Popup Image Gallery ---
const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.querySelector('.close-btn');

// Ambil semua gambar Home + Gallery
const popupImages = document.querySelectorAll('.home-img, .certificates img');
popupImages.forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
  });
});

// Tutup popup
closeBtn.addEventListener('click', () => popup.style.display = 'none');
popup.addEventListener('click', (e) => { if (e.target === popup) popup.style.display = 'none'; });
