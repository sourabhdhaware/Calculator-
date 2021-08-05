// function assignedvalue(value){
//     // var assignedValue = value.getAttribute("data-value");
//     var assignedValue = value.dataset.value;  
//     var resultField = document.getElementById("resultField").innerHTML;

//     if(assignedValue == null){
//         assignedValue = value.getAttribute("data-op");
//     }
//     var res = resultField.charAt(resultField.length-1);
//     var regx = /['!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~']/;
//     if(regx.test(res) && regx.test(assignedValue)){
//         assignedValue = "";
//     }
    
//     document.getElementById("resultField").innerHTML = resultField + assignedValue;
    
// }
const dispEle1 = document.querySelector('.disp1');
const dispEle2 = document.querySelector('.disp2')
const numberEle = document.querySelectorAll('.allnumbers');
const opeEl = document.querySelectorAll('.alloperations');
const res = document.querySelector('.result');

let num1 ='';
let num2 ='';
let result = null;
let ddot = false;

numberEle.forEach(allnumbers => {
    allnumbers.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !ddot){
            ddot = true;
        }else if(e.target.innerText === '.' && ddot){
            return; 
        }

        num2 += e.target.innerText;
        dispEle2.innerText = num2;
    })
});