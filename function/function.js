const addBtn=document.getElementsByClassName("add-btn");

for(const btn of addBtn){
    btn.addEventListener("click", function (event) {
        const seat=event.target.parentNode.childNodes[1].innerText;
        const economy=event.target.parentNode.childNodes[3].innerText;
        const price=event.target.parentNode.childNodes[5].innerText;
        
        const selectedContainer=document.getElementById("selected-seats-container");

        event.target.setAttribute("disabled", true);
        event.target.parentNode.style.backgroundColor="green";


    // budget
        
        const budget= getConvertedValue("budget");
        document.getElementById("budget").innerText= budget -1;
        

        // budget

        // selected seat

        const selectedCount= getConvertedValue("selected");
        document.getElementById("selected").innerText= selectedCount +1;

        const firstCartCount= getConvertedValue("selected");
        if(firstCartCount+1>5){
            alert("Cannot select More.");
            return;
        }
        

        // seat

        const seatCount= getConvertedValue("seat");
        document.getElementById("seat").innerText= seatCount +1;


        const div= document.createElement("div");
        div.classList.add("selected-seats")

        
        const p1= document.createElement("p")
        const p2= document.createElement("p")
        const p3= document.createElement("p")

        p1.innerText= seat;
        p2.innerText= economy;
        p3.innerText= price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        
        updateTotalCost(price);
        updateGrandTotal();
       
        

    })
}

// total
function updateTotalCost(price) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const convertedPrice = parseInt(price);
    const sum = convertedTotal + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
  }

//   grandtotal

function updateGrandTotal(control) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    if (control) {
      if (couponCode == "NEW15") {
        const discount = convertedTotal * 0.15;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      } 
      else {
        alert("Invalid Coupon Code No Discount");
        return;
      }
      
    } else {
      document.getElementById("grand-total").innerText = convertedTotal;
    }
  }

  function updateGrandTotal(control) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    if (control) {
      if (couponCode == "Couple 20") {
        const discount = convertedTotal * 0.2;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
    
      } 
      else {
        alert("Invalid Coupon Code No Discount");
        return;
      }
    } else {
      document.getElementById("grand-total").innerText = convertedTotal;
    }
  }


  
   





function getConvertedValue(id){
    const price=document.getElementById(id).innerText;
    const convertPrice= parseInt(price);
    return convertPrice;
}