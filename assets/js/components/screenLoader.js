export default function screenLoader() {
    const screenLoader = document.getElementById('screen-loader');
    const container = document.getElementsByClassName('container')[0];

    function loadContent() {
        let count = 161.8;
        for (let i = 0, y = container.children.length; i < y; i++) {
            if (container.children[i].tagName !== 'SCRIPT') {
                setTimeout(function () {
                    container.children[i].classList.add('-loading');
                }, count * (i + 1));
            }
        }
    }
    if (screenLoader) {
        screenLoader.classList.add('-loading');
        setTimeout(() => {
            screenLoader.classList.remove('-loading');
            screenLoader.classList.add('-loaded');
            loadContent();
        }, 2000);
    } else {
        loadContent();
    }
}