console.log("is this working?");
function calculate(){
    let income = 0;
    let expenses = 0;
   
    
    expenses = document.getElementById("expenses").value;
    income = document.getElementById("income").value;
    var result = parseFloat(expenses)*25;
   
    if(!isNaN(result))
    {
        document.getElementById("retirement").innerHTML = result;
    }
    console.log(result);

}

function test(){
    alert("Test");
    console.log("is this also working?");
}
