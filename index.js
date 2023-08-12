var form=document.getElementById('addForm')
form.addEventListener('submit',storeLocal)

function storeLocal(e){
    e.preventDefault();
    localStorage.setItem(document.getElementById('email').value,document.getElementById('name').value)
}
