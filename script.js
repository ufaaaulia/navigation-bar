// ==============================================
// 🌸 SCRIPT.JS — Pastel Flower Garden
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌷 Blossom — Pastel Flower Garden loaded!');
    
    // === 1. Efek Bunga Mengambang di Latar Belakang ===
    createFloatingFlowers();

    // === 2. Animasi Scroll Halus untuk Navbar ===
    window.addEventListener('scroll', navbarScrollEffect);

    // === 3. Efek Hover Interaktif pada Tombol ===
    addButtonRippleEffect();

    // === 4. Fade-In Animasi Saat Halaman Dimuat ===
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // === 5. Efek Parallax pada Elemen Hiasan ===
    window.addEventListener('mousemove', parallaxEffect);
});

// ==============================================
// 🌷 FUNGSI 1 — Bunga Melayang Otomatis
// ==============================================
function createFloatingFlowers() {
    const flowerEmojis = ['🌸', '🌷', '🌼', '💐', '🌺', '🌻', '🍃', '✨'];
    const container = document.body;
    const flowerCount = 15; // Jumlah bunga

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        
        // Style bunga
        flower.style.position = 'fixed';
        flower.style.zIndex = '-1';
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${Math.random() * 100}vh`;
        flower.style.fontSize = `${15 + Math.random() * 25}px`;
        flower.style.opacity = 0.3 + Math.random() * 0.4;
        flower.style.pointerEvents = 'none';
        flower.style.transition = 'all 3s ease';
        
        // Isi bunga acak
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        
        // Tambahkan ke halaman
        container.appendChild(flower);

        // Animasi melayang terus
        animateFlower(flower);
    }
}

// Animasi gerak bunga
function animateFlower(element) {
    const duration = 8000 + Math.random() * 12000;
    const xMove = -50 + Math.random() * 100;
    const yMove = -50 + Math.random() * 100;

    element.animate([
        { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: 0.3
        },
        { 
            transform: `translate(${xMove}px, ${yMove}px) rotate(180deg)`,
            opacity: 0.6
        },
        { 
            transform: 'translate(0, 0) rotate(360deg)',
            opacity: 0.3
        }
    ], {
        duration: duration,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

// ==============================================
// 🌿 FUNGSI 2 — Efek Navbar Saat Di-scroll
// ==============================================
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 230, 242, 0.85)';
        navbar.style.backdropFilter = 'blur(30px) saturate(180%)';
        navbar.style.boxShadow = '0 4px 30px rgba(244, 114, 182, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.boxShadow = '0 8px 32px rgba(244, 114, 182, 0.15)';
    }
}

// ==============================================
// 💧 FUNGSI 3 — Efek Ripple pada Tombol Saat Diklik
// ==============================================
function addButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Hapus ripple lama
            const oldRipple = this.querySelector('.ripple');
            if (oldRipple) oldRipple.remove();

            // Buat elemen ripple baru
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Posisi klik
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            // Style ripple
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-animate 0.6s ease-out forwards';
            ripple.style.pointerEvents = 'none';

            // Pastikan tombol punya position relative
            this.style.position = 'relative';
            this.style.overflow = 'hidden';

            this.appendChild(ripple);
        });
    });

    // Tambahkan keyframes ripple ke head
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animate {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==============================================
// 🌸 FUNGSI 4 — Efek Parallax Saat Mouse Bergerak
// ==============================================
function parallaxEffect(e) {
    const decoElements = document.querySelectorAll('.deco-circle-1, .deco-circle-2, .deco-blob');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    decoElements.forEach((el, index) => {
        const speed = (index + 1) * 15;
        el.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
}

// ==============================================
// 🌼 FUNGSI 5 — Tambahkan Bunga Saat Diklik Halaman
// ==============================================
document.addEventListener('click', function(e) {
    const flowers = ['🌸', '🌷', '🌼', '✨', '🌺', '💖'];
    const flower = document.createElement('div');
    
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.position = 'fixed';
    flower.style.left = `${e.clientX}px`;
    flower.style.top = `${e.clientY}px`;
    flower.style.fontSize = '24px';
    flower.style.pointerEvents = 'none';
    flower.style.zIndex = '9999';
    flower.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(flower);

    // Animasi naik & hilang
    flower.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: 'translate(-50%, -150%) scale(0.5)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => flower.remove();
});
