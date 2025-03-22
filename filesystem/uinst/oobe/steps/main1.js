let languages = [
    "Welcome to VovanchikOS",
    "Добро пожаловать в VovanchikOS",
    "Ласкаво просимо до VovanchikOS",
    "Benvenuti a VovanchikOS",
    "欢迎来到 VovanchikOS",
    "VovanchikOSへようこそ"
];

let currentLanguageIndex = 0;

function changeLanguage() {
    document.getElementById("welcome").innerText = languages[currentLanguageIndex];
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
}
changeLanguage();
setInterval(changeLanguage, 2000);

setTimeout(() => {
    window.location.href = "../../../../login.html"
}, 200);