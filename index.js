const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clrAllE1 = document.querySelector('.all-clear');
const clrlastE1 = document.querySelector('.last-entity-clear');

console.log(clrAllE1);

let dis1Num ='';
let dis2Num ='';
let result=null;
let lastopration ='';
let haveDot = false;
 
// this is the case for checking the "." if it will allready present then it will just return

numbersEl.forEach(number=> {
    number.addEventListener('click',(e) => {
        if(e.target.innerText === '.' && !haveDot){

            haveDot=true;
        } else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText= dis2Num;
    })
});

operationEl.forEach( operation => {
    operation.addEventListener('click',(e)=>{
        if(!dis2Num) return;
        // for evry new number we will add we will set this to false so that we add .vale numbers
        haveDot=false;
        // taking opration
        const  operationName = e.target.innerText;
        // in this 'if' we are cheking that are we have all the values that is  opration and 2 number if not then whatever we have inside the display 2 that will be result
        if(dis1Num && dis2Num && lastopration){
            mathOperation();
        }
        else
        {
            // conveting string to flot
            result =parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastopration = operationName;
        console.log(result);
    })
})
function clearVar(name =''){
    dis1Num += dis2Num + ''+ name+'';
    display1El.innerText=dis1Num;
    display2El.innerText= '';
    dis2Num='';
    tempResultEl.innerText=result
}

function mathOperation(){
    if(lastopration === 'X')
    {
        result= parseFloat(result) * parseFloat(dis2Num)
    } else if(lastopration === '+')
       {
        result= parseFloat(result) + parseFloat(dis2Num)
       }
       else if(lastopration == '%')
       {
        result= parseFloat(result) % parseFloat(dis2Num)
       }
       else if(lastopration === '-'){
        result= parseFloat(result) - parseFloat(dis2Num)
       }
       else if(lastopration === '/')
       {
           result =  result= parseFloat(result) / parseFloat(dis2Num)
       }
}
 equalEl.addEventListener('click' , ()=>{
     // if we have 2 number only then proceed else dont go ahed
     if(!dis1Num || ! dis2Num) return;
     haveDot = false;
     mathOperation();
     clearVar();
     display2El.innerText = result;
     tempResultEl.innerText='';
     dis2Num= result;
     dis1Num='';
 });

 // when we press C (clear button) 
 clrAllE1.addEventListener('click',(e) => {
     display1El.innerText= '0';
     display2El.innerText = '0';
     dis1Num = '';
     dis2Num = '';
     result='';
     tempResultEl='0';
 });

 clrlastE1.addEventListener('click',(e)=>{
     display2El.innerHTML='';
     dis2Num ='';
 })

window.addEventListener('keydown',(e)=>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' )
        {
            clickButtonEl(e.key);
        }
        else if(e.key=== '+' ||
        e.key=== '-' ||
        e.key=== '%' ||
        e.key=== '/'){
            clickOpration(e.key);
        } else if (e.key ==='*'){
            clickOpration('X');
        }
        else if(e.key === 'Enter' || e.key === '='){
            clickEqual();
        }
        
});


function clickButtonEl(key){
    numbersEl.forEach(button => {
        if(button.innerText===key){
            button.click();
        }
    })
}
 
function clickOpration(key){
    operationEl.forEach(button =>{
        if(button.innerText=== key){
            button.click();
        }
    })
}
function clickEqual(){
    equalEl.click();
}