document.addEventListener('DOMContentLoaded', function() {
    // Set up theme popup functionality
    setupThemePopup();
    
    // Configure the project banner
    configureProjectBanner();
    
    // Load ASCII art if available
    loadAsciiArt();
    
    // Initialize default speed
    updateScrollSpeed();
});

// Theme popup functionality
function setupThemePopup() {
    const openBtn = document.getElementById('openThemeMenu');
    const closeBtn = document.getElementById('closeThemeMenu');
    const themePopup = document.getElementById('themePopup');
    
    const themes = {
        check: 'images/check.png',
        cats: 'images/cats.png',
        stars: 'images/stars.png',
        circuits: 'images/circuits.png',
    };
    
    openBtn.addEventListener('click', () => {
        themePopup.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
        themePopup.style.display = 'none';
    });
    
    themePopup.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const selectedTheme = item.getAttribute('data-theme');
            document.body.style.backgroundImage = `url('${themes[selectedTheme]}')`;
            themePopup.style.display = 'none';
        });
    });
}

// Project banner configuration
function configureProjectBanner() {
    const projectBanner = document.getElementById('project-banner');
    
    // XWM project data
    const xwmProject = {
        title: 'sxwm - simple xorg tiling window manager',
        tagline: 'Lightweight & Easiy Configureable',
        description: 'A simple, customizable window manager for X11 built with efficiency and speed in mind.',
        repoUrl: 'https://github.com/uint23/sxwm',
        imageUrl: 'images/project_pics/xlibwm_1.png'
    };
    
    // Update the banner content with styled HTML
    projectBanner.innerHTML = `
        <div class="project-content">
            <div class="project-info">
                <div>
                    <div class="current-project-indicator">Current Project</div>
                    <h1>${xwmProject.title}</h1>
                    <p class="tagline">${xwmProject.tagline}</p>
                    <p class="description">${xwmProject.description}</p>
                </div>
                <div class="project-actions">
                    <a href="${xwmProject.repoUrl}" class="github-button" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                    <a href="https://github.com/uint23/sxwm/blob/main/README.md" class="learn-more-button">Learn More</a>
                </div>
            </div>
            <div class="project-image">
                <img src="${xwmProject.imageUrl}" alt="${xwmProject.title} screenshot">
            </div>
        </div>
    `;
}

// Load ASCII art if available
function loadAsciiArt() {
    const bannerElement = document.querySelector('.ascii-banner');
    if (bannerElement) {
        fetch('hand_ascii_high_detail.txt')
            .then(response => response.text())
            .then(asciiArt => {
                bannerElement.textContent = asciiArt;
            })
            .catch(error => console.error('Error loading ASCII art:', error));
    }
}

// Update scroll speed and label
function updateScrollSpeed() {
    const scrollSpeedSlider = document.getElementById('scrollSpeed');
    const scrollSpeedLabel = document.getElementById('scrollSpeedLabel');
    
    if (!scrollSpeedSlider || !scrollSpeedLabel) return;
    
    const speed = parseInt(scrollSpeedSlider.value, 10);
    const percentage = Math.round((speed / 50) * 100);
    
    scrollSpeedLabel.textContent = percentage + '%';
    
    const invertedSpeed = speed === 0 ? '0s' : (51 - speed) + 's';
    document.documentElement.style.setProperty('--scroll-speed', invertedSpeed);
    
    scrollSpeedSlider.addEventListener('input', updateScrollSpeed);
}

