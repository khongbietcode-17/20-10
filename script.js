const heartContainer = document.getElementById('heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên
    heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`; // Tốc độ rơi ngẫu nhiên
    heartContainer.appendChild(heart);
    
    // Xóa trái tim sau khi hoàn thành animation
    heart.addEventListener('animationend', () => {
        heartContainer.removeChild(heart);
    });
}

// Tạo trái tim với khoảng thời gian
setInterval(createHeart, 500);
