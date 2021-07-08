const  input=document.querySelector('input')
const  duplicateField=document.querySelector('#duplicateField')
const  button=document.querySelector('button')

input.addEventListener('input', updateValue);

function updateValue(e) {
    duplicateField.textContent = e.target.value;
 
     duplicate= e.target.value;
     button.addEventListener('click', removeValue);

  }

  

  function removeValue(e) {
     duplicateField.textContent = '';
   input.value = '';
e.preventDefault();
console.log(duplicate);
}

    