//変数hum_menuに.hum_menuを取得して代入
const hum_menu = document.querySelector('.hum_menu');
const target = document.querySelector('header');

//.hum_menuをクリックしたら・・・・
hum_menu.addEventListener('click', () => {
    // console.log('クリック');
    //変数targetにheaderタグを取得
    //targetに.onを付加したり消したり
    target.classList.toggle('on');
});

//画面サイズが変わったら
window.addEventListener('resize', () => {
    console.log('リサイズ');
    //headerタグから、.onを外す


    target.classList.remove('on');
});
