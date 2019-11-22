const btn=document.getElementById('btn');
const items = document.getElementById('items');
const Text =document.getElementById('text');
let div =document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute('style', 'height:400px;width: 400px ;border:2px solid black !important');
btn.onclick=function(){
    let li=document.createElement("li");
    let val =text.value;
    console.log(val);
    let span = document.createElement("span");
        div.appendChild(items);
        items.appendChild(li);
        li.appendChild(span);
        span.innerHTML=val;
        text.value="";
    let del=document.createElement("button");
        del.innerHTML="删除";
        li.appendChild(del);
        del.onclick = function(){
        items.removeChild(li)
    }
    let xg = document.createElement("button");
        li.appendChild(xg);
        xg.innerHTML= "修改";
        xg.onclick= function(){
            span.innerHTML="";
            let model=prompt("输入修改内容");
            span.innerHTML=model;
    
    }
    console.log(xg);
    
}