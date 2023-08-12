var form=document.getElementById('addForm')
form.addEventListener('submit',storeLocal)

function storeLocal(e){
    e.preventDefault();
    //create object
    let myobj={
        userName:document.getElementById('name').value,
        userEmail: document.getElementById('email').value,
        userNumber:document.getElementById('Mobile').value
    };
    //store as an object
    let myobj_serilized=JSON.stringify(myobj)
    localStorage.setItem('myobj',myobj_serilized)
}
