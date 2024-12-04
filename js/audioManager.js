const themeMusic = document.querySelector('#themeMusic');
const themeSFX = document.querySelector('#themeSFX');

const theme_Music = new Audio('audio/theme.mp3');
const gameOver_SFX = new Audio('audio/gameOver.mp3')
const answerGood_SFX = new Audio('audio/answerGood.mp3');
const answerBad_SFX = new Audio('audio/answerBad.mp3')

theme_Music.loop = true;
theme_Music.volume = 0.1;

document.addEventListener('click', () => {
    theme_Music.play().catch(error => {
        console.error('Nie można odtworzyć dźwięku:', error);
    });
});

themeMusic.addEventListener('click', () => {
    if (theme_Music.muted) {
        theme_Music.muted = false;
        themeMusic.textContent = '🔊';
    } else {
        theme_Music.muted = true;
        themeMusic.textContent = '🔇';
    }
});

themeSFX.addEventListener('click', () => {
    if (answerGood_SFX.muted) {
        gameOver_SFX.muted = false;
        answerGood_SFX.muted = false;
        answerBad_SFX.muted = false;
        themeSFX.textContent = '🔊';
    } else {
        gameOver_SFX.muted = true;
        answerGood_SFX.muted = true;
        answerBad_SFX.muted = true;
        themeSFX.textContent = '🔇';
    }
});