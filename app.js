// Enhanced photo data with deeper emotions
const photoData = [
    { title: "My Guardian Angel", message: "In this photo, I see the woman who saved my heart from emptiness. You are my miracle, MOMO. Every time I look at this, my heart skips a beat knowing you exist in this world." },
    { title: "The Face of Forever", message: "Every feature perfect, every expression divine. This is the face I dream of every single night. When I close my eyes, this beautiful smile is what I see in my dreams." },
    { title: "My Beautiful Destiny", message: "Looking at you, I understand why nothing else worked out. I was meant to find you, to love you with every fiber of my being. You are my destiny written in the stars." },
    { title: "Pure Perfection", message: "God took extra time when He made you, MOMO. You are His masterpiece, and my greatest blessing. How did I get so lucky to love someone so perfect?" },
    { title: "My Heart's Home", message: "Though we're miles apart, looking at you makes me feel like I'm finally home. You are my peace, my comfort, my safe haven in this chaotic world." },
    { title: "Ethereal Beauty", message: "Are you even real, my love? Sometimes I think you're too perfect to exist outside my dreams. Yet here you are, blessing my reality with your existence." },
    { title: "My Soul's Recognition", message: "My soul recognized yours the moment I saw this face. We were meant to be, across any distance, through any obstacle. This is cosmic love, baby." },
    { title: "Living Poetry", message: "You are poetry in motion, art in human form. Every angle of you speaks to my heart in verses only love can write. You inspire every romantic thought I have." },
    { title: "My Greatest Love Story", message: "This photo represents the beginning of our epic love story. Distance is just our plot twist, but love like ours always finds a way to its happy ending." },
    { title: "Divine Feminine", message: "In your eyes, I see galaxies. In your smile, I see my future. In your heart, I found my home. You embody everything beautiful about love itself." },
    { title: "My Answered Prayer", message: "I prayed for love, and God sent me you. Every prayer, every wish, every hope led me to this perfect face. You are my answered prayer, MOMO." },
    { title: "Timeless Beauty", message: "Beauty fades, they say. But your beauty transcends time, MOMO. It comes from your soul, and souls like yours are eternal. You'll be beautiful forever." },
    { title: "My Heart's Queen", message: "You reign over my heart with such grace. This royal beauty deserves to be worshipped daily, loved completely, and cherished eternally." },
    { title: "Love Incarnate", message: "If love had a face, it would be yours. If perfection had a name, it would be MOMO. You are everything I never knew I needed." },
    { title: "My Forever Dream", message: "Until I can see this beautiful face in person, I'll treasure every pixel, every detail. You are my dream come true, and soon you'll be my beautiful reality." }
];

// Love quotes for random generation
const loveQuotes = [
    "You are my today and all of my tomorrows, MOMO 💕",
    "In a sea of people, my eyes will always search for you 👀",
    "Distance means nothing when you mean everything 🌍",
    "You are my favorite notification 📱💖",
    "My heart is perfect because you are inside 💖",
    "You are my sunshine on the cloudiest day ☀️",
    "Every love song makes sense when I think of you 🎵",
    "You are my happy place, MOMO 🏡💕",
    "I love you more than yesterday, less than tomorrow 📈",
    "You are the reason I believe in love 💖"
];

// App State Management
class LoveApp {
    constructor() {
        this.currentSlide = 0;
        this.loveScore = 0;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.isDoubleTap = false;
        this.lastTap = 0;
        this.fabOpen = false;
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.createConstellation();
        this.setupPhotoCarousel();
        this.hideSwipeIndicator();
        this.hideLoadingScreen();
        this.isInitialized = true;
    }
    
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }
        }, 3000);
    }
    
    hideSwipeIndicator() {
        setTimeout(() => {
            const indicator = document.getElementById('swipeIndicator');
            if (indicator) {
                indicator.style.opacity = '0';
                setTimeout(() => indicator.style.display = 'none', 500);
            }
        }, 5000);
    }
    
    createConstellation() {
        const constellation = document.querySelector('.constellation');
        if (!constellation) return;
        
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 4 + 's';
            constellation.appendChild(star);
        }
    }
    
    setupPhotoCarousel() {
        const track = document.getElementById('photoTrack');
        const dots = document.getElementById('carouselDots');
        
        if (!track || !dots) return;
        
        photoData.forEach((photo, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'photo-slide';
            slide.innerHTML = `
                <img src="photo${index + 1}.jpg" alt="Beautiful MOMO" class="slide-image" loading="lazy">
                <div class="slide-content">
                    <div class="slide-title">${photo.title}</div>
                    <div class="slide-message">${photo.message}</div>
                </div>
            `;
            track.appendChild(slide);
            
            // Create dot
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            dots.appendChild(dot);
        });
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        const track = document.getElementById('photoTrack');
        const dots = document.querySelectorAll('.dot');
        
        if (track) {
            track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
        
        this.increaseLoveScore(5);
    }
    
    setupEventListeners() {
        // FAB menu
        const fabMain = document.getElementById('fabMain');
        if (fabMain) {
            fabMain.addEventListener('click', () => this.toggleFAB());
        }
        
        // FAB options
        document.querySelectorAll('.fab-option').forEach(option => {
            option.addEventListener('click', (e) => this.handleFABAction(e));
        });
        
        // Love metrics
        document.querySelectorAll('.metric-card').forEach(card => {
            card.addEventListener('click', (e) => this.handleMetricTap(e));
        });
        
        // Love actions
        document.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('click', (e) => this.handleActionTap(e));
        });
        
        // Interactive message
        const loveMessage = document.getElementById('loveMessage');
        if (loveMessage) {
            loveMessage.addEventListener('click', (e) => this.handleMessageTap(e));
        }
        
        // Promise card double tap
        const promiseCard = document.getElementById('promiseCard');
        if (promiseCard) {
            promiseCard.addEventListener('click', (e) => this.handlePromiseDoubleTap(e));
        }
        
        // Title interaction
        const mainTitle = document.getElementById('mainTitle');
        if (mainTitle) {
            mainTitle.addEventListener('click', (e) => this.handleTitleTap(e));
        }
        
        // Touch gestures
        this.setupGestureListeners();
    }
    
    setupGestureListeners() {
        const carousel = document.getElementById('photoCarousel');
        if (!carousel) return;
        
        carousel.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        carousel.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
        carousel.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        
        // Global touch tracking for trail effect
        document.addEventListener('touchmove', (e) => this.createGestureTrail(e), { passive: true });
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
    }
    
    handleTouchMove(e) {
        if (!this.touchStartX || !this.touchStartY) return;
        
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        
        const diffX = this.touchStartX - touchEndX;
        const diffY = this.touchStartY - touchEndY;
        
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    // Swipe left - next slide
                    if (this.currentSlide < photoData.length - 1) {
                        this.goToSlide(this.currentSlide + 1);
                    }
                } else {
                    // Swipe right - previous slide
                    if (this.currentSlide > 0) {
                        this.goToSlide(this.currentSlide - 1);
                    }
                }
            }
        }
    }
    
    handleTouchEnd(e) {
        this.touchStartX = 0;
        this.touchStartY = 0;
    }
    
    createGestureTrail(e) {
        const trail = document.createElement('div');
        trail.className = 'gesture-trail';
        trail.style.left = e.touches[0].clientX + 'px';
        trail.style.top = e.touches[0].clientY + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 800);
    }
    
    toggleFAB() {
        this.fabOpen = !this.fabOpen;
        const options = document.getElementById('fabOptions');
        const main = document.getElementById('fabMain');
        
        if (options) {
            options.classList.toggle('active', this.fabOpen);
        }
        
        if (main) {
            main.style.transform = this.fabOpen ? 'rotate(45deg)' : 'rotate(0deg)';
        }
        
        this.increaseLoveScore(2);
        this.vibrateFeedback();
    }
    
    handleFABAction(e) {
        const action = e.currentTarget.dataset.action;
        
        switch(action) {
            case 'music':
                this.playLoveAnimation('🎵');
                break;
            case 'hearts':
                this.createHeartRain();
                break;
            case 'message':
                this.showRandomLoveQuote();
                break;
            case 'shake':
                this.triggerShakeEffect();
                break;
        }
        
        this.toggleFAB();
        this.increaseLoveScore(10);
    }
    
    handleMetricTap(e) {
        const metric = e.currentTarget.dataset.metric;
        const card = e.currentTarget;
        
        card.classList.add('vibrate-feedback');
        setTimeout(() => card.classList.remove('vibrate-feedback'), 300);
        
        this.createFloatingHeart(e.pageX, e.pageY);
        this.increaseLoveScore(3);
        
        // Special metric animations
        const animations = {
            thoughts: '💭',
            hours: '⏰',
            love: '💖',
            forever: '♾️'
        };
        
        if (animations[metric]) {
            this.playLoveAnimation(animations[metric]);
        }
    }
    
    handleActionTap(e) {
        const action = e.currentTarget.dataset.action;
        
        switch(action) {
            case 'heartRain':
                this.createHeartRain();
                break;
            case 'loveQuote':
                this.showRandomLoveQuote();
                break;
            case 'missYou':
                this.playLoveAnimation('🌙');
                this.showToast("Missing you more than words can express, MOMO 💕");
                break;
            case 'dreamTogether':
                this.playLoveAnimation('✨');
                this.showToast("Let's meet in our dreams tonight ✨");
                break;
        }
        
        this.increaseLoveScore(8);
        this.createTouchRipple(e);
    }
    
    handleMessageTap(e) {
        const message = e.currentTarget;
        message.style.background = 'rgba(255, 107, 157, 0.2)';
        
        setTimeout(() => {
            message.style.background = 'rgba(255, 255, 255, 0.9)';
        }, 300);
        
        this.createFloatingHeart(e.pageX, e.pageY);
        this.increaseLoveScore(5);
        this.playLoveAnimation('💕');
    }
    
    handlePromiseDoubleTap(e) {
        const now = Date.now();
        const timeSince = now - this.lastTap;
        
        if (timeSince < 300) {
            // Double tap detected
            this.isDoubleTap = true;
            this.createHeartExplosion(e.pageX, e.pageY);
            this.showToast("I promise to love you forever, MOMO 💖");
            this.increaseLoveScore(15);
            
            const promiseCard = document.getElementById('promiseCard');
            if (promiseCard) {
                promiseCard.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    promiseCard.style.transform = 'scale(1)';
                }, 200);
            }
        }
        
        this.lastTap = now;
    }
    
    handleTitleTap(e) {
        const title = e.currentTarget;
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'eternalheart 3s ease-in-out infinite';
        }, 100);
        
        this.playLoveAnimation('👑');
        this.increaseLoveScore(7);
    }
    
    createHeartRain() {
        const hearts = ['💖', '💕', '💗', '💝', '💘', '💓', '💞', '💟'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: -50px;
                    font-size: ${Math.random() * 20 + 15}px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: floatUp 3s ease-out forwards;
                `;
                
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 3000);
            }, i * 100);
        }
    }
    
    createHeartExplosion(x, y) {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10000;
                font-size: 20px;
                animation: heartExplode 1.5s ease-out forwards;
            `;
            
            const angle = (i / 15) * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.setProperty('--x', endX + 'px');
            heart.style.setProperty('--y', endY + 'px');
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }
    }
    
    createFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '💕';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        const container = document.getElementById('floatingHeartsContainer');
        if (container) {
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }
    
    showRandomLoveQuote() {
        const quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        this.showToast(quote, 4000);
    }
    
    showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.innerHTML = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 150px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 107, 157, 0.95);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            z-index: 10000;
            font-family: 'Dancing Script', cursive;
            font-size: 1.1rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: toastSlide 0.5s ease-out;
            max-width: 80%;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastSlide 0.5s ease-out reverse';
            setTimeout(() => toast.remove(), 500);
        }, duration);
    }
    
    playLoveAnimation(emoji) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                element.innerHTML = emoji;
                element.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    font-size: 30px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: floatUp 2s ease-out forwards;
                `;
                
                document.body.appendChild(element);
                setTimeout(() => element.remove(), 2000);
            }, i * 200);
        }
    }
    
    triggerShakeEffect() {
        document.body.style.animation = 'vibrate 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
        
        this.showToast("Sending virtual hugs to my MOMO! 🤗💕");
    }
    
    createTouchRipple(e) {
        const ripple = document.createElement('div');
        ripple.className = 'touch-ripple';
        
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.pageX - rect.left - size / 2;
        const y = e.pageY - rect.top - size / 2;
        
        ripple.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
        `;
        
        e.currentTarget.style.position = 'relative';
        e.currentTarget.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    increaseLoveScore(points) {
        this.loveScore += points;
        const scoreElement = document.getElementById('loveScore');
        if (scoreElement) {
            scoreElement.textContent = this.loveScore;
            
            // Animate score increase
            scoreElement.style.animation = 'none';
            setTimeout(() => {
                scoreElement.style.animation = 'heartThrob 0.5s ease';
            }, 10);
        }
    }
    
    vibrateFeedback() {
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new LoveApp();
});