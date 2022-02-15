
let Save = document.getElementById("save")
let cnt = document.getElementById("counter")
let count=0;
function increment()
{
    count=count+1
    cnt.innerText=count
}
function save()
{
    let countstr=count+" - "
    Save.textContent+=countstr
    count=0
    cnt.innerText=count
}


let name ="Payal"
let greeting ="Hi, my name is "
let mygreeting=greeting + name
console.log(mygreeting) 
