let elinp = document.querySelector('.inp');
let form = document.querySelector('.form');
let elh1 = document.querySelector('.h1');
let elh2 = document.querySelector('.h2');

form.addEventListener('submit',(e)=>{
e.preventDefault();
    let val =elinp.value;
    let splt = val.split('');
    const countArr = [];
    const indexArr = [];
    splt.forEach((e,b)=>{
        if(e === e.toUpperCase() && e != ' '){
            indexArr.push(splt.indexOf(e,b))
            countArr.push(e)
            console.log(e);
        }
    });
    elh1.textContent = countArr.length + ' ta katta harif bor'
    elh2.textContent = indexArr + ' chi indexda'
    console.log(countArr.length + ' ta katta harif bor');
    console.log(indexArr);
})


