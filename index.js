const pwEl=document.getElementById("pw");
const copyEl=document.getElementById("copy");
const lenEl=document.getElementById("len");
const upperEl=document.getElementById("upper");
const lowerEl=document.getElementById("lower");
const numberEl=document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPRSTUWYXZ";
const lowerLetters = "abcdefghijklmnoprstuwyxz";

const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-";

function GetDuzeLitery(){
return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function GetMaleLitery(){
return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];

}

function GetNumery(){
return numbers[Math.floor(Math.random()*numbers.length)];

}

function GetSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];

}

function generatePassword(){
    const len = lenEl.value;

    let password = '';

    for(let i = 0; i<len;i++ ){
        const x = wygeneruj();
        password+=x;
    }
    pwEl.innerText = password;


}

function wygeneruj(){
const xs = [];
if(upperEl.checked){
    xs.push(GetDuzeLitery())
}

if(lowerEl.checked){
    xs.push(GetMaleLitery())
}

if(numberEl.checked){
    xs.push(GetNumery())
}
if(symbolEl.checked)
{
    xs.push(GetSymbol())
}
if(xs.length===0){return "";}
return xs[Math.floor(Math.random()*xs.length)];

}

generateEl.addEventListener('click',generatePassword);

copyEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password){return;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Hasło zostało skopiowane");




})