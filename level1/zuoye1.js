window.onload=function(){
    let container=document.getElementById('container');
    let btn1 =document.getElementById('btn1');
    // var pText=document.getElementById("pText");
    btn1.addEventListener('click',function(){
        container.setAttribute('style','background-color:blue !important');
    },false)
    let change1 =document.getElementById('change1');
    change1.onclick=function(){
        container.setAttribute('style','font-size:30px !important');
    }
    let change2 =document.getElementById('change2');
    change2.onclick=function(){
        container.setAttribute('style','font-size:10px !important');
    }
    let change3 =document.getElementById('change3');
    change3.addEventListener('click',function(){
        container.setAttribute('style','font-size:40px !important');
    },false)
}
