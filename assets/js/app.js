let logo = document.getElementsByClassName('logo')[0];
logo.addEventListener('mouseover', (e) => {
    e.target.classList.add('-animate');    
    setTimeout(() => {
        e.target.classList.remove('-animate');
    }, 2300)
});