let colorBtn = document.querySelector('.color');
let spanColor = colorBtn.querySelectorAll('span');
let productPhoto = document.getElementById('product-photo');

spanColor.forEach(function (elem) {
    elem.addEventListener("click", function () {
        productPhoto.src =
            'https://e-bonus.store/wa-data/public/site/image/home-product/iphone13pro-' + this
            .className + '.png'
    });
});