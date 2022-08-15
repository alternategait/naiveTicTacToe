const element1 = document.getElementById('1');
const element2 = document.getElementById('2');
const element3 = document.getElementById('3');
const element4 = document.getElementById('4');
const element5 = document.getElementById('5');
const element6 = document.getElementById('6');
const element7 = document.getElementById('7');
const element8 = document.getElementById('8');
const element9 = document.getElementById('9');

elementArr = [element1, element2, element3, element4, element5, element6, element7, element8, element9]

elementArr.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(`${element} was clicked`);
    });
});