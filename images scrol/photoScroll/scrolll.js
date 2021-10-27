const anim = document.querySelectorAll('.photo');

if (anim.length > 0) {
    window.addEventListener('scroll', animationScroll)
    function animationScroll() {
        for (let index = 0; index < anim.length; index++) {
            const animItem = anim[index]; //елемент массива
            const animItemHeight = animItem.offsetHeight; // высота обЪекта
            const animItemOffset = offset(animItem).top// позиция обЪекта относительно верха
            const animStart = 3; // коофициент регулирования старта анимации

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            // if (animItemHeight > window.innerHeight) {
            //     animItemPoint = window.innerHeight - window.innerHeight / animStart;
            // }

            if (pageYOffset < animItemOffset - animItemPoint) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}