var lists = document.getElementsByTagName('li');
var listArray = Array.from(lists);


function addItem(){
 var list = document.getElementById('todoItems');
 var values = document.getElementById('item').value;
 if(values==''){
  alert('Enter a Value')
 } else{
   var entry = document.createElement('li');
   entry.appendChild(document.createTextNode(values));
   list.appendChild(entry);
   document.getElementById('item').value='';
 }
 deleteList();
 modifyList();
}

document.getElementById('item').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addItem();
    }
});

function deleteList(){
  for (const ele of lists){
    ele.addEventListener('dblclick', function(){
      console.log(ele);
      ele.parentNode.removeChild(ele);
    })
  }
}

deleteList();

function modifyList(){
    for (const ele of lists){
    ele.addEventListener('click', function(){
      console.log(ele);
      ele.classList.add('linethrough');
    })
  }
}

modifyList();



