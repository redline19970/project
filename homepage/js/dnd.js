function drag_drop(event) {
    event.preventDefault();

    alert(event.dataTransfer.files[0].name + " u be upload.");


}