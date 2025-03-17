window.addEventListener('load', function() {
    const progressBar = document.querySelector('.progress');
    let progress = 0;

    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                window.location.href = 'loadingwait.html';
            }, 100);
        }
    }, 50);
});