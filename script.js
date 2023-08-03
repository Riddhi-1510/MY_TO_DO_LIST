const btn = document.getElementById('btn');
const data = document.getElementById('data');
const list_container = document.getElementById('list-container');
function addList(){
    var x = data.value;
    if(x==" " || x==""){
        alert("Somthing Wrong");
    }else{
        var li = document.createElement('li');
        li.innerHTML = x;
        list_container.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    data.value="";
    addLocalStorage();
}

//Add eventlistner

list_container.addEventListener("click",e=>{
    if(e.target.tagName== "LI"){
        e.target.classList.toggle('checked');
        addLocalStorage();
    }
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        addLocalStorage();
    }
});


//Add...Local...Storage

function addLocalStorage(){
    localStorage.setItem("data",list_container.innerHTML);
}


function showData(){
    list_container.innerHTML=localStorage.getItem("data");
}
showData();