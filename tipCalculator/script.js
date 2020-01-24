function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numOfPeople = document.getElementById("numOfPeople").value;

    //Validate Input
    if (billAmount === "" || serviceQuality === "0"){
        alert('Enter values');
        return;
    }

    //Check to see if number of people value is less than 1
    if (numOfPeople === "" || numOfPeople <= 1){
        document.getElementById("each").style.display = 'none';
    }   else {
        document.getElementById("each").style.display = 'block'
    }

    //Calculate Tip
    let total = (billAmount * serviceQuality) / numOfPeople;

    //Round up to two decimal places
    total = Math.round (total * 100) / 100;

    //Two digits after the total amount
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;





    
}

//Hide Tip Amount on Load
document.getElementById("totalTip").style.display = 'none';
document.getElementById("each").style.display = 'none';

//Calculate Tip
document.getElementById("calculateTip").onclick = function () {
    calculateTip (); 
};