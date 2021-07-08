const textField=document.querySelector('#textField')
textField.addEventListener('click',function(event){
    const text =prompt("Введите текст")

    this.textContent=text;
    event.preventDefault();
})