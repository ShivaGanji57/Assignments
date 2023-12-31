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
        userNumber:document.getElementById('Mobile').value,
        userId:document.getElementById('userId').value
    };
    //store as an object, email is unique so will use email as key
    // let myobj_serilized=JSON.stringify(myobj)
    // localStorage.setItem(document.getElementById('email').value,myobj_serilized)
    axios.
        //post("https://crudcrud.com/api/3c724fbf297646bcad35131c55aa0084/userdata",myobj).
        post("http://localhost:3000/admin/user",myobj).
        then(res=>showUseronScreen(res.data)).
        catch(err=>console.log(err));
    // showUseronScreen(myobj)
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.
    get("http://localhost:3000/admin/user").
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
    li.textContent=obj.id+' - '+obj.name+' - '+obj.mobileNumber+' - '+obj.email;
    var deletebtn=document.createElement('input')
    deletebtn.type='button'
    deletebtn.value='delete'
    var editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='edit'
    editbtn.onclick=() =>{
        // localStorage.removeItem(obj.userEmail)
        parentElem.removeChild(li)
        //li.textContent=obj.userName+' - '+obj.userEmail+' - '+obj.userNumber;
            document.getElementById('name').value=obj.name
            document.getElementById('email').value=obj.email
            document.getElementById('Mobile').value=obj.mobileNumber
            document.getElementById('userId').value=obj.id
            axios.
            delete(`http://localhost:3000/admin/user/${obj.id}`).
            then(result=>console.log(result)).
            catch(err=>console.log(err))
    }
    deletebtn.onclick=() =>{
        // localStorage.removeItem(obj.userEmail)
        axios.
            delete(`http://localhost:3000/admin/user/${obj.id}`).
            then(res=>console.log(res)).
            catch(err=>console.log(err))
        parentElem.removeChild(li)
    }
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    parentElem.appendChild(li)
}
