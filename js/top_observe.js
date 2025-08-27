// 背景のオブザーバー

const bg_ob_func = (entries) => {
    for (entry of entries) {
        //.bgを取得
        const bg = document.querySelector('.bg');
        if (entry.isIntersecting) {
            //.bgに、.onを付加
            bg.classList.add('on');
        } else {
            bg.classList.remove('on');
        }
    }
}

const bg_ob_param = {
    rootMargin: '100px'
}

const bg_ob = new IntersectionObserver(bg_ob_func, bg_ob_param);
bg_ob.observe(document.querySelector('.bg_placeholder'));


//タイトルのオブザーバー
const title_ob_func = (entries) => {
    for (entry of entries) {
        if (entry.isIntersecting) {
            // const target = document.querySelector('#sp_title_menu');
            // target.setAttribute('src', 'img/title_menu_sp.svg');
            entry.target.setAttribute('src', entry.target.dataset.src);
        }
    }
}

const title_ob_param = {
    rootMargin: '-100px'
};



const title_ob = new IntersectionObserver(title_ob_func);
// title_ob.observe(document.querySelector('#sp_title_menu'));
const titles = document.querySelectorAll('.contents_title');
for (title of titles) {
    title_ob.observe(title);
}
