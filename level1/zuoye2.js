// const container = document.getElementById('container');
// const container = document.getElementById('wrapper');
// const item1 =document.getElementsByClassName('item')[0];
// item1.addEventListener('click',function(){

// 



(function(){
    // let color_list = document.getElementsByTagName('li')[0];
    // color_list.addEventListener('click',Cons,false);
    // function Cons(e){
    //     var x = e.target;
    //     console.log(x.innerText)
    // }
    let lis =document.getElementsByTagName('li');
    let lisCount=lis.length;
    for(let i=0;i<lisCount; i++){
            lis[i].addEventListener('click',function Cons(e){
                    var x = e.target;
                    console.log(x.innerText)
                },false)   
    }
})();    
    // let lis =document.getElementsByTagName('li');
    // let lisCount=lis.length;
    // for(let i=0;i<lisCount; i++){
    //     (function(j){
    //         lis[i].addEventListener('click',function(){
    //             console.log(j+1);
    //         },false)
    //     }(i))
    // }
const btn =document.getElementById('btn');
btn.onclick=function (){
var Lis = document.querySelectorAll("li");
	for(var k = 0;k< 4;k++){
		if(k% 2!=0){
			Lis[k].style.backgroundColor="red";
		}else{
            Lis[k].style.backgroundColor="green";
		}
    }   
}    
