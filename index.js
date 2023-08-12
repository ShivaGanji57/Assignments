var form=document.getElementById('addForm')
form.addEventListener('submit',storeLocal)
form.addEventListener('click',deleteFromLocal)
function storeLocal(e){
    e.preventDefault();
    //create object
    let myobj={
        userName:document.getElementById('name').value,
        userEmail: document.getElementById('email').value,
        userNumber:document.getElementById('Mobile').value
    };
    //store as an object, email is unique so will use email as key
    let myobj_serilized=JSON.stringify(myobj)
    localStorage.setItem(document.getElementById('email').value,myobj_serilized)
}
//delete from local using key
function deleteFromLocal(e){
    e.preventDefault();
    var keyemail=document.getElementById('deleteKey').value
    localStorage.removeItem(keyemail)
}
