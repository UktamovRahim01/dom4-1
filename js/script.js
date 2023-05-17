let header__right_block = document.querySelectorAll(`[data-modal]`)
let modal = document.querySelector(`.modal`)
let modal__close = document.querySelector(`.modal__close`)


function modals(arr, bnm) {
    arr.forEach(mod_btn => {
        mod_btn.onclick = () => {
            modal.classList.toggle(bnm + ``)
            modal.classList.add(`fade`)
            document.body.classList.toggle(`bnm_body`)
        }
    })
}
modals(header__right_block, `show`)




let otp = document.querySelector('[data-us]');
otp.onclick = () => {
    let form = document.querySelector('#myForm');
    let name = form.elements['name'].value;
    let phone = form.elements['phone'].value;
    let inf = {
        name: name,
        phone: phone
    };
    modal.classList.toggle(`show`)
    document.body.classList.toggle(`bnm_body`)
    console.log(inf);

    let nameInput = document.querySelector('input[name="name"]');
    let phoneInput = document.querySelector('input[name="phone"]');
    nameInput.value = '';
    phoneInput.value = '';
};



let otpn = document.querySelector('[data-usn]');
otpn.onclick = () => {
    let form = document.querySelector('#myFormn');
    let name = form.elements['name'].value;
    let phone = form.elements['phone'].value;
    let inf = {
        name: name,
        phone: phone
    };
    console.log(inf);

    let nameInput = document.querySelector('input[name="name"]');
    let phoneInput = document.querySelector('input[name="phone"]');
    nameInput.value = '';
    phoneInput.value = '';
};



let nmi = true
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && nmi) {
        modal.classList.toggle(`show`)
        modal.classList.add(`fade`)
        document.body.classList.toggle(`bnm_body`)

        nmi= false
    }
});












let tabcontent = document.querySelectorAll(`.tabcontent`)
let tabheader__item = document.querySelectorAll(`.tabheader__item`)

hide(tabcontent)

function hide(arr) {
    arr.forEach(tabc => tabc.classList.add(`hide`))
    arr[0].classList.remove(`hide`)
}

tabheader__item.forEach((tabc, indx) => {

    tabc.onclick = () => {
        tabheader__item.forEach(tabc => tabc.classList.remove(`tabheader__item_active`))
        tabc.classList.add(`tabheader__item_active`)
        tabcontent.forEach(tab => tab.classList.add(`hide`))
        tabcontent[indx].classList.remove(`hide`)
    }
})















let offer__slider_prev = document.querySelector('.offer__slider-prev')
let offer__slider_next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')

let total = document.querySelector(`#total`)
let current = document.querySelector(`#current`)



let slideIndex = 0
total.innerHTML = numb(slides.length)
current.innerHTML = numb(slideIndex + 1)


showSlides(slideIndex)

function showSlides(n) {

    if (n > slides.length - 1) {
        slideIndex = 0
    }
    else if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
}

function numb(bnm) {
    if (bnm < 10) {
        return `0` + bnm
    }
    return bnm
}

offer__slider_next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
    current.innerHTML = numb(slideIndex + 1)
}
offer__slider_prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
    current.innerHTML = numb(slideIndex + 1)
}









