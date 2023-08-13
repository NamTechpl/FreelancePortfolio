const darkModeBtn = document.querySelector('.dark-mode-btn');


// 1. Proverka temniy teme na urovnya sistemnoy nastroyk.

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    darkModeBtn.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
}

// 2. Proverka teme na LocalStorage.

if (localStorage.getItem('darkMode')  === 'dark'){
    darkModeBtn.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode')  === 'light'){
    darkModeBtn.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark')
}

// 3. Yesli menyayetsya sistemniy nastroyki menayem temu.

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark'){
        darkModeBtn.classList.add('dark-mode-btn__active')
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')

    } else {
        darkModeBtn.classList.remove('dark-mode-btn__active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')

    }
})

// Vklucheniya nochnogo rejima po knopke.

darkModeBtn.onclick = () => {
    darkModeBtn.classList.toggle('dark-mode-btn__active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark){
        localStorage.setItem('darkMode', 'dark')
    } else{
        localStorage.setItem('darkMode', 'light')

    }
}