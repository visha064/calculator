
function clearing(){
    document.querySelector("input").value='';
}

function display(a){
    document.querySelector("input").value+=a;
}
function solve()
{ let a=document.querySelector("input").value;
    let b=eval(a);
    document.querySelector("input").value=b;
}