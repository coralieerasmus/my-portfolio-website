document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const player = document.getElementById('player');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let isJumping = false;
    let isFalling = false;
    let position = 0;
    let platforms = [];
    let platformSpeed = 2;

    document.addEventListener('keydown', control);

    function control(e) {
        if (e.key === ' ' || e.key === 'ArrowUp') {
            if (!isJumping && !isFalling) {
                jump();
            }
        }
    }

    function jump() {
        isJumping = true;
        let jumpHeight = 150;
        let jumpSpeed = 20;
        let intervalUp = setInterval(() => {
            if (jumpHeight <= 0) {
                clearInterval(intervalUp);
                isJumping = false;
                fall();
            }
            position += jumpSpeed;
            jumpHeight -= jumpSpeed;
            player.style.bottom = `${position}px`;
        }, 20);
    }

    function fall() {
        isFalling = true;
        let fallSpeed = 20;
        let intervalDown = setInterval(() => {
            if (position <= 0) {
                clearInterval(intervalDown);
                position = 0;
                player.style.bottom = `${position}px`;
                isFalling = false;
            } else if (checkCollisionWithPlatforms()) {
                clearInterval(intervalDown);
                isFalling = false;
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
            } else {
                position -= fallSpeed;
                player.style.bottom = `${position}px`;
            }
        }, 20);
    }

    function createPlatform() {
        const platform = document.createElement('div');
        platform.classList.add('platform');
        platform.style.left = '800px';
        platform.style.bottom = `${Math.random() * 200 + 50}px`;
        gameContainer.appendChild(platform);
        platforms.push(platform);
    }

    function movePlatforms() {
        platforms.forEach(platform => {
            let platformLeft = parseInt(platform.style.left);
            if (platformLeft < -100) {
                platform.remove();
                platforms = platforms.filter(p => p !== platform);
            } else {
                platform.style.left = `${platformLeft - platformSpeed}px`;
            }
        });
    }

    function checkCollisionWithPlatforms() {
        return platforms.some(platform => {
            const playerRect = player.getBoundingClientRect();
            const platformRect = platform.getBoundingClientRect();
            return (
                playerRect.left < platformRect.right &&
                playerRect.right > platformRect.left &&
                playerRect.bottom > platformRect.top &&
                playerRect.top < platformRect.bottom
            );
        });
    }

    function gameLoop() {
        movePlatforms();
        if (Math.random() < 0.02) {
            createPlatform();
        }
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
