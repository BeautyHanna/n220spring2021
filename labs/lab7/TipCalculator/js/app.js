

let Bill = document.getElementById("Bill");

function CalculateBill() {
    let tipPercentage = 15;
    let NewBill = Bill.value;

    let Tip = NewBill * (tipPercentage/100)

    let TotalBill = (+NewBill + +Tip)
    
    console.log ("Tip:" + " " + "$" + Tip)
    console.log ("Total:" + " " + "$" + TotalBill)
  }

