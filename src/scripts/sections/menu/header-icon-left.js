let plus = document.querySelector('.nav__tablet--item__icon i');
let minus = document.querySelectorAll('.nav__tablet--item__icon i');

class iconHeaderTabletLeft {
    constructor() {
        this.init();
    }

    init() {
        this.showIcon();
    }

    showIcon() {
        let liTag = document.querySelectorAll('.nav__tablet--item');
        liTag[0].addEventListener('click', () => {
            liTag[0].classList.toggle("nav__tablet--item-click");
        
            plus.classList.toggle('rotatePlus');
        
            minus[1].classList.toggle('rotateMinus')
        });
    }
}

export default iconHeaderTabletLeft;