console.log("form")

let year=document.getElementById("year")
let error_yr=document.getElementById("error_yr")
let modal_text=document.getElementById("modal_text")
let modal_content=document.getElementById("content")
console.log(modal_content);
var form = document.getElementById("myForm");
year.oninput=()=>{
    if(/^0/.test(year.value)||isNaN(year.value)){
        error_yr.innerHTML="year must be a number or cannot start with a zero"
    }else{
        error_yr.innerHTML=""
    }
    
  }
function handleForm(event) { 
    event.preventDefault();
    let YearVal=year.value
    let itIs4digit = /^\d{4}$/.test(YearVal);
    let date=new Date()
    let thisYr=date.getFullYear()
    
    if(isNaN(YearVal) ||!itIs4digit ){
        error_yr.innerHTML="year must be a positive 4 digit number"
       
    }else{
        error_yr.innerHTML="" 
    }
    if(YearVal<1950 || YearVal>thisYr ||isNaN(YearVal) ||!itIs4digit){
        error_yr.innerHTML="invalid Year"
       
    }else{
        
             
      
        modal.style.display = "block"; 
        
        
    }
      
   
} 
form.addEventListener('submit', handleForm);


///modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
