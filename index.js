const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for(let i=0; i < buttonsEl.length ; i ++)
{
    buttonsEl[i].addEventListener("click",()=>{
        
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C")
        {
            clearResult();
        }
        else if(buttonValue === "=")
        {
            calculateResult();
        }
        else if(buttonValue === "<=")
        {
            clearLast();
        }
        else{
            appendValue(buttonValue);
        }
    })
}

function clearResult()
{
    inputFieldEl.value = "";
}

function calculateResult()
{
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue)
{
    inputFieldEl.value += buttonValue;
}

function clearLast()
{
    let str = inputFieldEl.value;
    let newstr = str.slice(0,-1);
    inputFieldEl.value = newstr;
}