list = document.getElementById("list")

function addtodo(){
    todo = document.getElementById("todo")

    var li = document.createElement("li")
    var litxt = document.createTextNode(todo.value)
    li.appendChild(litxt)

    var dltbtn = document.createElement("button")
    var dlttxt = document.createTextNode("Delete")
    dltbtn.appendChild(dlttxt)
    dltbtn.setAttribute("onclick","dltitem(this)")
dltbtn.setAttribute("class","dltbtn")

var edtbtn = document.createElement("button")
var edttxt = document.createTextNode("Edit")
edtbtn.appendChild(edttxt)
edtbtn.setAttribute("onclick","edtitem(this)")
edtbtn.setAttribute("class","edtbtn")


    list.appendChild(li)
    li.appendChild(dltbtn)
    li.appendChild(edtbtn)
    todo.value = ""
    console.log(li)

}

function dltitem(e){
    e.parentNode.remove()
}

function edtitem(e){
    var val = prompt("Write your Updated item",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteitem(){
    list.innerHTML = "";
}