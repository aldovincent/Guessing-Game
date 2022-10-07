let btn=document.getElementById('btn');
let output=document.getElementById('outputtext');
console.log(btn)
let number=[Math.floor(Math.random()*100)]
console.log(number)
var input=0
count=0
btn.addEventListener('click',function(){
     input= parseInt(document.getElementById("userinput").value);
     console.log(typeof(input))
     count++;
    if(count<5){
        if(input==number){
            output.innerHTML ="you guessed right,your number was $(number)"
        }else if(input < number){
            output.innerHTML ="you guessed too low"
        }
        else{
            output.innerHTML="you guessed t00 high"
        }
     
    }
    else{
        output.innerHTML="your limit exceeded" +number
    }
   
});