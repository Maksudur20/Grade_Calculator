// Your solution goes here.
// Hints:


//now we get the form and grade value in here 
const form = document.getElementById('iits-formSubmit');
const A = document.getElementById('iits-a_count');
const B_Plus = document.getElementById('iits-bp_count');
const B = document.getElementById('iits-b_count');
const B_Minus = document.getElementById('iits-bm_count');
const C = document.getElementById('iits-c_count');
const F = document.getElementById('iits-f_count');

//add event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const input = document.getElementById('iits-inp');
  const inputValue = parseInt(input.value);

  //calculation in grade system

if(inputValue < 0 || inputValue > 100)
   {alert('Please input 1 to 100 marks');}
else if (inputValue >= 81 && inputValue <= 100) 
   {A.textContent = parseInt(A.textContent) + 1;} 
else if (inputValue >= 71 && inputValue <= 80) 
   {B_Plus.textContent = parseInt(B_Plus.textContent) + 1;} 
else if (inputValue >= 61 && inputValue <= 70) 
   {B.textContent = parseInt(B.textContent) + 1;} 
else if (inputValue >= 51 && inputValue <= 60) 
   {B_Minus.textContent = parseInt(B_Minus.textContent) + 1;} 
else if (inputValue >= 40 && inputValue <= 50)
   {C.textContent = parseInt(C.textContent) + 1;} 
else if (inputValue < 40 &&  inputValue >=0) 
   {F.textContent = parseInt(F.textContent) + 1;}

 //after calculation done the user number will remove 
  form.reset();
});
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission