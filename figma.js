window.onload = () => {
    classAdd();
}
const classAdd = () => {
    const fade = document.getElementsByClassName('header');
    fade[0].classList.add('show');
}   


const modalWrapper = document.querySelector('.modal-wrapper');
const modalWrapper2 = document.querySelector('.modal-wrapper2');
const images = document.querySelectorAll('.image');
const modalImage = document.querySelector('.modal-image');
const modalImage2 = document.querySelector('.modal-image2');

images.forEach(function (image) {
    image.addEventListener('click', function () {
        if (this.classList.contains("cat")) {
            modalWrapper2.classList.add('show2');
            modalImage2.classList.add('show2');
            var imageSrc = image.getAttribute('data-src');
            modalImage2.src = imageSrc;
        } else {
            modalWrapper.classList.add('show');
            modalImage.classList.add('show');
            var imageSrc = image.getAttribute('data-src');
            modalImage.src = imageSrc;
        }
    });
});

modalWrapper.addEventListener('click', function () {
    if (this.classList.contains('show')) {
        this.classList.remove('show');
        modalImage.classList.remove('show');
    }
});


modalWrapper2.addEventListener('click', function () {
    if (this.classList.contains('show2')) {
        this.classList.remove('show2');
        modalImage2.classList.remove('show2');
    }
});