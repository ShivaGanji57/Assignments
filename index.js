var form=document.getElementById('addForm')
//var edit=document.getElementById("edit")
form.addEventListener('submit',storeLocal)
//form.addEventListener('click',deleteFromLocal)
//edit.addEventListener('click',editLocal)
function storeLocal(e){
    e.preventDefault();
    //create object
    let myobj={
        userName:document.getElementById('name').value,
        userEmail: document.getElementById('email').value,
        userNumber:document.getElementById('Mobile').value
    };
    //store as an object, email is unique so will use email as key
    // let myobj_serilized=JSON.stringify(myobj)
    // localStorage.setItem(document.getElementById('email').value,myobj_serilized)
    axios.
        post("https://crudcrud.com/api/3c724fbf297646bcad35131c55aa0084/userdata",myobj).
        then(res=>showUseronScreen(res.data)).
        catch(err=>console.log(err));
    // showUseronScreen(myobj)
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.
    get("https://crudcrud.com/api/3c724fbf297646bcad35131c55aa0084/userdata").
    then(res=>{
        for(var i=0;i<res.data.length;i++){
            showUseronScreen(res.data[i])
        }
    }).
    catch(err=>console.log(err))
})
function showUseronScreen(obj){
    const parentElem=document.getElementById('list-items')
    var li=document.createElement('li')
    li.textContent=obj.userName+' - '+obj.userEmail+' - '+obj.userNumber;
    var deletebtn=document.createElement('input')
    deletebtn.type='button'
    deletebtn.value='delete'
    var editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='edit'
    editbtn.onclick=() =>{
        localStorage.removeItem(obj.userEmail)
        parentElem.removeChild(li)
        li.textContent=obj.userName+' - '+obj.userEmail+' - '+obj.userNumber;
    }
    deletebtn.onclick=() =>{
        // localStorage.removeItem(obj.userEmail)
        axios.
            delete(`https://crudcrud.com/api/3c724fbf297646bcad35131c55aa0084/userdata/${obj._id}`).
            then(res=>console.log(res)).
            catch(err=>console.log(err))
        parentElem.removeChild(li)
    }
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    parentElem.appendChild(li)
}
