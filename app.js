document.getElementById('add').addEventListener('click', function(){
    const text = document.getElementById('text'); 
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class='mr-3'>` + text.value + " " + `<button class='text-white bg-orange-500 p-1 ml-5' onclick='remove(event)'>Delete</button>`;
    li.style.marginTop = "4px";
    const ol = document.getElementById('lists');
    ol.appendChild(li);
    text.value = '';
})

function remove(event){
    const ol = document.getElementById('lists');
    const li = event.target.parentNode;
    ol.removeChild(li);
}
