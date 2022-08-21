function init() {
    document.querySelector(".num-row").addEventListener("click", function(event) {
      selected(event.target.innerText);
    });
  }
init();
let btn = document.querySelector(".submit").addEventListener("click",function() {
    selected();
    document.getElementById("original").className = "main-card hidden";
    document.getElementById("thanksCard").className = "second";
    
});
function addnewtext(n){
    const newNode = document.querySelector(".selecte");
    const textNode = document.createTextNode(n);
    newNode.appendChild(textNode);
}

function selected(x){
    switch(parseInt(x)){
        case 1: addnewtext(1);
        break;
        case 2: addnewtext(2);
        break;
        case 3: addnewtext(3);
        break;
        case 4: addnewtext(4);
        break;
        case 5: addnewtext(5);
        break;

    }
}
