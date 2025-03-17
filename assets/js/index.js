let vovanchikos_ascii =
`
██╗   ██╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗ ██████╗██╗  ██╗██╗██╗  ██╗ ██████╗ ███████╗
██║   ██║██╔═══██╗██║   ██║██╔══██╗████╗  ██║██╔════╝██║  ██║██║██║ ██╔╝██╔═══██╗██╔════╝
██║   ██║██║   ██║██║   ██║███████║██╔██╗ ██║██║     ███████║██║█████╔╝ ██║   ██║███████╗
╚██╗ ██╔╝██║   ██║╚██╗ ██╔╝██╔══██║██║╚██╗██║██║     ██╔══██║██║██╔═██╗ ██║   ██║╚════██║
 ╚████╔╝ ╚██████╔╝ ╚████╔╝ ██║  ██║██║ ╚████║╚██████╗██║  ██║██║██║  ██╗╚██████╔╝███████║
  ╚═══╝   ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                                                                                        0.0.1 бета
`
let warnmsg =
`
ВНИМАНИЕ: Этот проект находится в бета-тестировании и может содержать ошибки.
Пожалуйста, сообщайте об ошибках в репозиторий проекта: https://github.com/ImVovanchik/VovanchikOS

Ещё, если вы где-то купили этот продукт, то вас обманули. Этот продукт бесплатный и всегда будет бесплатным, так как у этого проекта всегда есть открытый исходный код на Github.
Платные версии этого продукта, сделанные мошенниками, можно репортнуть мне на почту: e7ycm77x@duck.com
`

function welcome() {
    console.log(vovanchikos_ascii);
    console.warn(warnmsg);
}
onload = welcome;

/*
 * Отловка ошибок
 * Есть небольшие недороботки, но в целом работает.
 * Если хотите помочь с этим, то форкните репозиторий и сделайте пулл-реквест: https://github.com/ImVovanchik/VovanchikOS
*/
window.addEventListener('error', function(event) {
    const errorMessage = `
Что-то пошло не так!
Ошибка: ${event.error.message}
Файл: ${event.filename}
Строка: ${event.lineno}
Стак кода:\n${event.error.stack}

Сообщите нам об этой ошибке в: https://github.com/ImVovanchik/VovanchikOS/issues/new
    `;
    console.error(errorMessage);
    alert(errorMessage);
});
function quit() {
    console.debug("[DEBUG] Закрывается сессия VovanchikOS...");
    window.close();
}
function toggleMenu() {
    let menu = document.getElementById("menuElement");
    
    if (menu.style.display === "flex") {
        menu.classList.remove("show");
        menu.classList.add("hide");
        
        setTimeout(() => {
            menu.style.display = "none";
            console.debug("[DEBUG] Меню закрыто.");
        }, 300);
    } else {
        menu.style.display = "flex";
        menu.classList.remove("hide");
        menu.classList.add("show");
        
        console.debug("[DEBUG] Меню открыто.");
    }
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
}
window.addEventListener('load', function() {
    updateTime();
});
setInterval(updateTime, 1000);