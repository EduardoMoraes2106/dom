let btn = document.getElementById('btn')
let emoji = "\u{1F60E}"
let mesagem = 'valeu pelo like' + emoji

btn.addEventListener('click', ()=> {
    alert(mesagem)
})