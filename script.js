document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Navigation System
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Dynamic Header Scrolling Core
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'bg-neutral-950/90', 'border-cyan-500/20');
            header.classList.remove('py-4', 'bg-neutral-950/70', 'border-cyan-500/10');
        } else {
            header.classList.add('py-4', 'bg-neutral-950/70', 'border-cyan-500/10');
            header.classList.remove('py-2', 'bg-neutral-950/90', 'border-cyan-500/20');
        }
    });

    // Handle CV Alert placeholders until link is provided later
    const cvAlert = (e) => {
        e.preventDefault();
        alert("CV Database Sync pending. Under active update sequence.");
    };
    const cvMain = document.getElementById('cv-btn-main');
    const cvMobile = document.getElementById('cv-btn-mobile');
    if(cvMain) cvMain.addEventListener('click', cvAlert);
    if(cvMobile) cvMobile.addEventListener('click', cvAlert);

    // Matrix Digital Rain Architecture Layer
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const alphabet = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ🤖💻⚡&<>_';
    const fontSize = 14;
    const columns = width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1);

    let matrixColor = '#06b6d4'; 

    const drawMatrix = () => {
        if (document.getElementById('body-node').classList.contains('pure-light-bg')) {
            ctx.fillStyle = 'rgba(248, 250, 252, 0.08)';
        } else {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        }
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = matrixColor;
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    let matrixInterval = setInterval(drawMatrix, 30);
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // --- AUTO-TYPING TERMINAL SUBTITLE SUBSYSTEM ---
    const words = ["Data Science & AI/ML Developer", "Full-Stack Software Engineer", "Competitive Programmer"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                const el = document.getElementById('type-engine');
                if(el) el.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                const el = document.getElementById('type-engine');
                if(el) el.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 60);
        };
        loopDeleting();
    }

    typingEffect(); 

    // --- INFINITE BASH TERMINAL MONITOR SIMULATION LOGS LOOP ---
    const terminalScreen = document.getElementById('terminal-screen');
    const logMessages = [
        "&gt; fetching user profiles...",
        "&gt; matching skill matrices: Java, C++, Python, Kotlin verified.",
        "&gt; testing AeroMetrics core neural nodes... Status: stable",
        "&gt; reading on-device ML Kit OCR engines from VyFocusX...",
        "&gt; DataSentinal schema automations loaded seamlessly.",
        "&gt; parsing financial database records for Banking BI Hub...",
        "&gt; status: 0 errors detected. Port 8080 active.",
        "&gt; clearing cache clusters... matrix optimization online.",
        "&gt; listening for inbound recruiter connection relays..."
    ];
    let logCounter = 0;

    setInterval(() => {
        if(terminalScreen) {
            if (logCounter >= logMessages.length) {
                logCounter = 0;
                terminalScreen.innerHTML = '<div class="text-neutral-500">&gt; Refreshing pipeline handshake parameters...</div>';
            }
            const el = document.createElement('div');
            el.className = "text-neutral-400 text-[11px]";
            el.innerHTML = logMessages[logCounter];
            terminalScreen.appendChild(el);
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
            logCounter++;
        }
    }, 2500);

    // --- DAY & NIGHT ENGINE THEME CONTROLLER MODULE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    const executeThemeToggle = () => {
        const bodyNode = document.getElementById('body-node');
        const heroTitle = document.getElementById('hero-title');
        
        bodyNode.classList.toggle('pure-light-bg');
        header.classList.toggle('pure-light-header');
        
        if(heroTitle) {
            heroTitle.classList.toggle('pure-light-text');
        }

        const cardNodes = document.querySelectorAll('.card-node');
        const contentTexts = document.querySelectorAll('.content-text');
        const titleNodes = document.querySelectorAll('.title-node');
        const labelTexts = document.querySelectorAll('.label-text');
        const trackingBoxes = document.querySelectorAll('.tracking-box');
        const headerNodes = document.querySelectorAll('.header-node');

        cardNodes.forEach(node => node.classList.toggle('pure-light-card'));
        contentTexts.forEach(node => node.classList.toggle('pure-light-muted'));
        titleNodes.forEach(node => node.classList.toggle('pure-light-text'));
        labelTexts.forEach(node => node.classList.toggle('pure-light-text'));
        trackingBoxes.forEach(node => node.classList.toggle('pure-light-box'));
        headerNodes.forEach(node => node.style.backgroundColor = bodyNode.classList.contains('pure-light-bg') ? '#f1f5f9' : '#171717');

        if (bodyNode.classList.contains('pure-light-bg')) {
            if(lightIcon) lightIcon.classList.remove('hidden');
            if(darkIcon) darkIcon.classList.add('hidden');
            matrixColor = '#0284c7'; 
            localStorage.setItem('vishal-theme', 'light');
        } else {
            if(lightIcon) lightIcon.classList.add('hidden');
            if(darkIcon) darkIcon.classList.remove('hidden');
            matrixColor = '#06b6d4'; 
            localStorage.setItem('vishal-theme', 'dark');
        }
    };

    if(themeToggleBtn) themeToggleBtn.addEventListener('click', executeThemeToggle);
    if(mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', executeThemeToggle);

    if (localStorage.getItem('vishal-theme') === 'light') {
        executeThemeToggle();
    }

    // --- ULTRA FLUID INTEL OBSERVER ENGINE LAYER ---
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cyber-animate-entry');
                entry.target.style.opacity = "1";
                observer.unobserve(entry.target); 
            }
        });
    };

    const revealOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollObserver = new IntersectionObserver(revealCallback, revealOptions);
    const targets = document.querySelectorAll('.custom-scroll-reveal, .project-card');
    targets.forEach(target => {
        target.style.opacity = "0"; 
        scrollObserver.observe(target);
    });
});
