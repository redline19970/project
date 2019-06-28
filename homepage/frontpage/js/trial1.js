function clicked1(){

   alert('Vendosni emrin e biznesit tuaj');
}

function clicked2() {
    alert('Vendosni emrin qe doni per domain te faqes suaj');
}


function hey() {
    const a = document.getElementById('text2');
    if(a.value.length !== 0){
        document.getElementById('sample_id2').classList.remove("disabled");
    }else{
        clicked2();
    }
}

function checkerss() {
    const a = document.getElementById('text1');
    if(a.value.length !== 0){
        document.getElementById('sample_id1').classList.remove("disabled");
    }else{
       clicked1();
    }

}

function overr() {
    const a = document.getElementById('1111');
    a.addEventListener("mouseover", checkerss );
}

function overr1() {
    const a = document.getElementById('11111');
    a.addEventListener("mouseover", hey );
}




