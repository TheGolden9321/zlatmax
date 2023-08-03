const openPhones = document.querySelector('.phones__open');
openPhones.addEventListener('click', () => {
    document.querySelector('.phones').classList.toggle('active');
    if(document.querySelector('.phones').classList.contains('active')){
        document.addEventListener('keyup', (event) => {
            if(event.code === "Escape"){
                document.querySelector('.phones').classList.remove('active')
            }
        })
    }
});
const buttons = document.querySelectorAll('.catalog__open');
const menus = document.querySelectorAll('.submenu-catalog');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const activeMenu = document.getElementById(button.dataset.open);
        if(activeMenu){
            e.preventDefault;
            if(button.classList.contains('active')){
                buttons.forEach(btn => {
                    btn.classList.remove('active')
                });
                document.querySelector('.catalog__body').classList.remove('active');
                button.classList.remove("active");
                activeMenu.classList.remove('active')
            }else{
                buttons.forEach(btn => {
                    btn.classList.remove('active')
                });
                menus.forEach(menu => {
                    menu.classList.remove('active')
                })
                document.querySelector('.catalog__body').classList.add('active');
                button.classList.add("active");
                activeMenu.classList.add('active');
                if(window.innerWidth<991.98){
                    document.documentElement.classList.add('menuOpened')
                }
            }
        }
    },)
})
document.querySelector('.hidden__search input').addEventListener('focus', function(){
    document.querySelector('.hidden__search label').style.display = "none";
});
document.querySelector('.hidden__search input').addEventListener('blur', function(){
    document.querySelector('.hidden__search label').style.display = "block";
});
const body = document.querySelector('.catalog__body')
document.addEventListener('click', (e) => {
    if(e.target.closest('.burger__icon')){
        document.documentElement.classList.toggle('burgered');
        document.body.classList.toggle('locked');
        if(document.documentElement.classList.contains('catalogOpened')){
            document.documentElement.classList.remove('catalogOpened');
            menus.forEach(menu => {
                menu.classList.remove('active')
            })
            if(body.classList.contains('active')){
                body.classList.remove('active');
            }
        }
    }
    else if(e.target.closest('.menu__link.full')){
        document.documentElement.classList.add('catalogOpened');
    }
    else if(e.target.closest('.catalog__back')){
        document.documentElement.classList.remove('catalogOpened');
    }
    else if(e.target.closest('.submenu-catalog__back')){
        menus.forEach(menu => {
            menu.classList.remove('active');
        });
        body.classList.remove('active');
        document.documentElement.classList.remove('menuOpened')
        buttons.forEach(btn => {
            btn.classList.remove('active')
        });
    }
})
window.addEventListener('resize', () => {
    if(window.innerWidth>991.98){
        document.body.classList.remove('locked');
        document.documentElement.classList.remove('burgered');
        document.documentElement.classList.remove('catalogOpened');
        window.addEventListener('resize', () => {
            if(window.innerWidth<991.98 && body.classList.contains('active')){
                document.documentElement.classList.add('burgered');
                document.documentElement.classList.add('catalogOpened');
            }
        })
    }
});

let hitsSlider = new Swiper('.hits__slider', {
    wrapperClass: "hits__sliderwrapper", 
    slideClass: "hits__card",
    direction: "horizontal",
    speed: 600,
    init: false,
    slidesPerView: "auto",
    pagination: {
        el: ".hits__pagination",
        bulletClass: "hits__bullet",
        bulletActiveClass: "hits__bulletactive",
        clickable: true,
        type: "bullets",
    },
});
let newSlider = new Swiper('.new__slider', {
    wrapperClass: "new__sliderwrapper", 
    slideClass: "new__column",
    direction: "horizontal",
    speed: 600,
    init: false,
    slidesPerView: "auto",
    pagination: {
        el: ".new__pagination",
        bulletClass: "new__bullet",
        bulletActiveClass: "new__bulletactive",
        clickable: true,
        type: "bullets",
    },
});
hitsSlider.init()
newSlider.init();

