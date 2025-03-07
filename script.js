
function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var interest = principal * years * rate /100;

/*this calculates the estimated year */
var year = new Date().getFullYear()+parseInt(years);

/*this calculates the interest */
var compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))


/*this checks for amount validation */
if(principal == "" || principal<= "0" ){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
}

document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,
<br>at an interest rate of <mark>${rate}</mark>.
<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,
<br>in the year <mark>${year}</mark>
<br>
<br>With monthly compounded interest your balance would instead be <mark>${compounded.toFixed(2)}</mark>`;
}


/*this dynamics the range number */

function updateRate() 
{
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval + " %";
}

