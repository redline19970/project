function try1() {

    const e = document.getElementById('check_1');
    if (e.checked === true) {
        document.getElementById("check_2").disabled = true;
        document.getElementById("check_3").disabled = true;
        document.getElementById("check_4").disabled = false;
        document.getElementById('sample_id').classList.remove("disabled");
    }else{
        document.getElementById("check_2").disabled = false;
        document.getElementById("check_3").disabled = false;
        document.getElementById("check_4").disabled = true;
        document.getElementById('sample_id').classList.add("disabled");
    }
}

function try2() {

    const e = document.getElementById('check_2');
    if (e.checked === true) {
        document.getElementById("check_1").disabled = true;
        document.getElementById("check_3").disabled = true;
        document.getElementById("check_4").disabled = false;
        document.getElementById('sample_id').classList.remove("disabled");
    }else{
        document.getElementById("check_1").disabled = false;
        document.getElementById("check_3").disabled = false;
        document.getElementById("check_4").disabled = true;
        document.getElementById('sample_id').classList.add("disabled");
    }
}

function try3() {

    const e = document.getElementById('check_3');
    if (e.checked === true) {
        document.getElementById("check_2").disabled = true;
        document.getElementById("check_1").disabled = true;
        document.getElementById("check_4").disabled = false;
        document.getElementById('sample_id').classList.remove("disabled");
    }else{
        document.getElementById("check_2").disabled = false;
        document.getElementById("check_1").disabled = false;
        document.getElementById("check_4").disabled = true;
        document.getElementById('sample_id').classList.add("disabled");
    }
}

