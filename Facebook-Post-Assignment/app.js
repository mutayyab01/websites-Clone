// ---------------------------------------------------------------Replace A Word By Another Word

// var comment = prompt().toLocaleLowerCase()
// var Replace = ["dog", "pig", "disgusting"]
// var ToReplace = ["cat", "animal", "horrible"]
// for (let i = 0; i < Replace.length; i++) {
//    for (let j = 0; j < comment.length; j++) {
//       if (comment.slice(j, j + Replace[i].length) === Replace[i]) {
//          var comment = comment.slice(0, j) + ToReplace[i] + comment.slice(j + Replace[i].length)
//       }
//    }
// }
// console.log(comment);


// ---------------------------------------------------------------Check a Word Is Palindrome Or Not
// var word=prompt("Enter A word")
// var revese=word.split("").reverse().join("");
// console.log(revese);
// if (word===revese) {
//     console.log("Its A palindrome Word");
// }else  {
//     console.log("Its Not A palindrome Word");

// }


// -----------------------------------------------------------------Captilize Each Word OF  string
// var text=prompt("ENter Your Name")
// var arr=text.split(" ");


// for (let i = 0; i < arr.length; i++) {

//     arr[i]=arr[i][0].toUpperCase()+ arr[i].slice(1);
// }
// var updatetext=arr.join(" ")
// console.log(updatetext);





// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// var Dare;
// var allPost = document.getElementById('addPost');
// window.onload=function(){
//    const rtf1 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

//    setInterval(function(){

//       if (allPost.getElementsByClassName('span')) {
//          var span = allPost.getElementsByTagName('span')

//          for (let index = 0; index < span.length; index++) {
//             if (span[index].className === "moment") {
//                console.log(Dare);
//                console.log(span[index].innerText = moment(Dare, "YYYYMMDD").fromNow());   
// }            
//          }


// }

      
//    },1000)
// }
var TextArea=document.getElementById('txtArea').innerText="";
var back=document.getElementById('back-series')
var DisplayBack=true;
var TextAreaUpdated=document.getElementById('txtArea');

function DisplayBackground(){
if (DisplayBack) {
   console.log(back.innerHTML=`
            <button href=""><img  src="image/background-1.jpg" id="btn1" onclick="btnOne()"  alt="" ></button>
           <button href=""><img  src="image/background-2.jpg" id="btn2" onclick="btnTwo()" alt="" ></button>
           <button href=""><img  src="image/background-3.jpg" id="btn3" onclick="btnThree()"  alt="" ></button>
           <button href=""><img  src="image/background-4.jpg" id="btn4" onclick="btnFour()"  alt="" ></button>
           <button href=""><img  src="image/background-5.jpg" id="btn5" onclick="btnFive()"  alt=""  ></button>
           <button href=""><img  src="image/background-6.jpg" id="btn6"  onclick="btnSix()"  alt="" ></button>
           <button href=""><img  src="image/background-7.jpg" id="btn7"  onclick="btnSeven()"  alt="" ></button>
           <button href=""><img  src="image/background-8.jpg" id="btn8" onclick="btnEight()"  alt="" ></button>
           <button href=""><img  src="image/background-9.jpg" id="btn9" onclick="btnNine()"  alt="" ></button>
           <button href=""><img  src="image/background-10.jpg" id="btn10" onclick="btnTen()"  alt="" ></button>
           <button href=""><img  src="image/background-11.jpg" id="btn11" onclick="btnEleven()"  alt="" ></button>
           <button href=""><img  src="image/background-12.jpg" id="btn12" onclick="btnTwelve()"  alt="" ></button>
           <button href=""><img  src="image/background-13.jpg" id="btn13" onclick="btnThirteen()"  alt="" ></button>
           <button href=""><img  src="image/background-14.jpg" id="btn14" onclick="btnFourteen()"  alt="" ></button>
        `);
        DisplayBack=false;
      }else{
   back.innerHTML='';
DisplayBack=true;

}
}
     function btnOne(){
        var backgroundImage=document.getElementById('btn1').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='#d4482b'
      
     }
     function btnTwo(){
        var backgroundImage=document.getElementById('btn2').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnThree(){
        var backgroundImage=document.getElementById('btn3').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnFour(){
        var backgroundImage=document.getElementById('btn4').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnFive(){
        var backgroundImage=document.getElementById('btn5').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnSix(){
        var backgroundImage=document.getElementById('btn6').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnSeven(){
        var backgroundImage=document.getElementById('btn7').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnEight(){
        var backgroundImage=document.getElementById('btn8').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='white'
      
     }
     function btnNine(){
        var backgroundImage=document.getElementById('btn9').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='white'
      
     }
     function btnTen(){
        var backgroundImage=document.getElementById('btn10').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnEleven(){
        var backgroundImage=document.getElementById('btn11').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnTwelve(){
        var backgroundImage=document.getElementById('btn12').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='black'
      
     }
     function btnThirteen(){
        var backgroundImage=document.getElementById('btn13').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='white'
      
     }
     function btnFourteen(){
        var backgroundImage=document.getElementById('btn14').src
        var input=document.getElementById('txtArea')
        input.style.backgroundImage = 'url(' + backgroundImage + ')';
        input.style.color='white'
      
     }


   
     function Add(){
      var Postbtn=document.getElementById('post')
var text1 = document.getElementById('txtArea').value;
var addpost=document.getElementById('addPost')
if (text1.trim()!=="") {
   
if (Postbtn.innerText==="Post") {
   console.log(`${text1}`);
   console.log(addpost.innerHTML+=`
                <div > 
                   <p>  ${text1}   </p>     <small> <span id="time" class="moment" > Time </span></small>
                   <button class="custom-btn btn-9" onclick="EditPost(this)" style="width: max-content;" >Edit</button>
                   <button class="custom-btn btn-12" onclick="DeletePost(this)" ><span  >Delete</span><span  >Delete</span></button>  
                </div>
   `);
var time=document.getElementById('time')
   
   text1.value   =""
   document.getElementById('txtArea').value="";
   document.getElementById('txtArea').style.backgroundImage = 'url(' + '' + ')';
   document.getElementById('txtArea').style.color='black';
   document.getElementById('txtArea').style.height='73px';

   console.log(time.innerText = moment(new Date(), "YYYYMMDD").fromNow());
   document.getElementById('time').id='';

}else{
   let random=document.getElementById('random');
console.log(random);
console.log(random.innerText=text1);
     Postbtn.innerText="Post"
   document.getElementById('txtArea').value="";
   document.getElementById('txtArea').style.height='73px';
   document.getElementById('txtArea').style.backgroundImage = 'url(' + '' + ')';
   document.getElementById('txtArea').style.color='black';
}
}else{
   swal("Please Write Post First", "", "warning");
}
}


     function DeletePost(e){
if (event.target.parentNode.parentNode.id==='addPost') {
event.target.parentNode.remove();
document.getElementById('txtArea').value="";
document.getElementById('post').innerText="Post"
document.getElementById('temp').parentElement.id='random'
}else{
event.target.parentNode.parentNode.remove();
   document.getElementById('txtArea').value="";
document.getElementById('post').innerText="Post"
document.getElementById('temp').parentElement.id='random'

}}

function EditPost(e){
   let random=document.getElementById('random').id;
   document.getElementById('random').id="";
   let TextAreaBox=document.getElementById('txtArea');
   let Update=document.getElementById('post')
   console.log(e.previousElementSibling.previousElementSibling);
console.log(e.previousElementSibling.previousElementSibling.id=random);
   Update.innerText="Update"
   console.log(TextAreaBox.value=e.previousElementSibling.previousElementSibling.innerText);



}


