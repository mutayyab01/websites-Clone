var thanosStand=document.getElementById('thanos')
var thanosWidth=thanosStand.style.width;
var JinStand=document.getElementById('jin')
var JinWidth=JinStand.style.width;
var right=0;
var leftjin=0;
console.log(right);
// ---------------------------------------Thanos ----------------------------------------
document.addEventListener('keydown',function(){
if(event.key==='ArrowRight'){
    thanosStand.style.width='25%'
thanosStand.src='images/thanos-walkf.gif';
if (event.key!=='a') {
   thanosStand.style.left =(right+=5) +'px' ;
}}})

document.addEventListener('keyup',function(){
if(event.key==='ArrowRight'){
    //console.log(thanosStand.style.width);
    thanosStand.style.width=thanosWidth

thanosStand.src='images/thanos-msh-stance.gif';
}})



document.addEventListener('keydown',function(){
if(event.key==='ArrowLeft'){
    thanosStand.style.width='25%'

thanosStand.src='images/than-walk-left.gif';
if (event.key!=='a') {
    console.log(thanosStand.style.left =(right-=5) +'px' );
    if (right<0) {
    console.log(thanosStand.style.left =(right+=5) +'px' );
    }}}})
document.addEventListener('keyup',function(){
if(event.key==='ArrowLeft'){
    thanosStand.style.width=thanosWidth

thanosStand.src='images/thanos-msh-stance.gif';
}})




document.addEventListener('keydown',function(){
if(event.key==='ArrowUp'){
    thanosStand.style.width='55%'
    thanosStand.src='images/than-run.gif';
    
}}
)

// ----------------------------------------------Jin-----------------------------------------------

document.addEventListener('keydown',function(){
if(event.key==='a'){
    JinStand.style.width=JinWidth

JinStand.src='images/jin-kisaragi-blazblue-walkforward.gif';
console.log(JinStand.style.right =(leftjin+=5) +'px' );
}
})


document.addEventListener('keyup',function(){
if(event.key==='a'){
    JinStand.style.width=JinWidth

JinStand.src='images/jin-stance.gif';
}

})

document.addEventListener('keydown',function(){
if(event.key==='d'){
    JinStand.style.width=JinWidth

JinStand.src='images/jin-kisaragi-blazblue-walkforward.gif';
console.log(JinStand.style.right =(leftjin-=5) +'px' );
 if (leftjin<0) {
    console.log(JinStand.style.left =(leftjin+=5) +'px' );
    }
}
})


document.addEventListener('keyup',function(){
if(event.key==='d'){
    JinStand.style.width=JinWidth
JinStand.src='images/jin-stance.gif';

}

})


document.addEventListener('keydown',function(){
if(event.key==='w'){
    
    JinStand.style.width='42%'
    JinStand.src='images/jin-kisaragi-blazblue-loop.gif';
}
})

document.addEventListener('keydown',function(){
if(event.key==='s'){
    console.log(JinStand.style.width='14%');
    JinStand.src='images/jin-kisaragi-blazblue-colorswap.gif';
}
})





















