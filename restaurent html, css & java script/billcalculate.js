// Define the prices for each item
const prices = {
    idli: 30,
    dosa: 40,
    vada: 50,
    bajji:45,
    fullmeal: 120,
    minimeal: 85,
    vegbiryani: 240,
    chickenbiryani: 300,
    muttonbiryani: 400,
    noodles: 140,
    manchuriya: 180,
    friedrice: 130,
    icecream: 100,
    cake: 90
  };
  /*
  window.onload = () =>
    
    {
        
        document.querySelector('#submit').onclick = validateForm;
	
		document.querySelector('#item').oninput = calculateTotal;
    }
  
  */
  // Get the form elements
  const orderForm = document.querySelector('#formcalculate');
 /* const itemSelect = document.getElementById("item");
 const quantity= document.getElementById("quantity");
 const selectitem= document.getElementById("item");*/

 // const totalOutput = document.getElementById("total");

  /*  orderForm.addEventListener('submit', e => {
        e.preventDefault();
        if(validateForm()) {
          alert('Order submitted successfully!');
          calculateTotal();
        }
      });*/
      
    
    
   // quantityInput.addEventListener("input", calculateTotal);
  
 
  
  
  function validate_CalBill() {
    // Validate name, phone, and address fields
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const quantityInput= document.getElementById('quantity');
    const selectitem= document.getElementById("item");
  
    //const totalOutput = document.getElementById("total");
    if(!nameInput.value) {
      alert('Please enter your name.....');
      nameInput.focus();
      return false;
    }
  
    if(!phoneInput.value) {
      alert('Please enter your phone number');
      phoneInput.focus();
      return false;
    }
  
    if(!addressInput.value) {
      alert('Please enter your address');
      addressInput.focus();
      return false;
    }
  
    // Validate item and quantity fields
    if(selectitem.selectedOption.length === 0) {
      alert('Please select at least one item');
      itemSelect.focus();
      return false;
    }
  
    if(quantityInput.value < 1) {
      alert('Please enter a valid quantity');
      quantityInput.focus();
      return false;
    }
    
   
      const item =selectitem.value;
      const quantity1 = parseInt(uantityInput.value);
    
      // Calculate the total amount
      let total = 0;
      for (const i of prices) {
        if(i===item)
        total = prices[item] ;
      }
      total *= quantity1;
      alert("total bill"+total);
    
      document.getElementById('bill').value=total;
    return true;
  }
  
 

  