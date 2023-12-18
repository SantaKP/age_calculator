function outputYears(){


	var outputYear = inputYear()
	return outputYear
}

function formTodaysDate(){
  
    const d = new Date ()
 
let day = String(d.getDate()).padStart(2, '0')
  
let month =  String(d.getMonth()+1).padStart(2,"0");
  
let year =  d.getUTCFullYear()

let todaysDate = `${day}-${month}-${year}`
  
  

return todaysDate

 
}


function usersBirthDate(){

  var inputYear = document.getElementById('input_year').value
  var inputDay = document.getElementById('input_day').value
  var inputMonth = document.getElementById('input_month').value

  var usersBirthDate = `${inputDay}-${inputMonth}-${inputYear}`

return usersBirthDate

}


  const d = new Date ()
 
  let day = String(d.getDate()).padStart(2, '0')
    
  let month =  String(d.getMonth()+1).padStart(2,"0");
    
  let year =  d.getUTCFullYear()
  
  var inputYear = document.getElementById('input_year').value
  var inputDay = document.getElementById('input_day').value
  var inputMonth = document.getElementById('input_month').value
  
  
  
  

function notValidDay(){
    var validDay = "Must be a valid day"
    not_valid_day.textContent =  validDay
    return validDay
  }


  
function daysCalculation(){

  var inputDay = parseInt(document.getElementById('input_day').value)
  var inputMonth = parseInt(document.getElementById('input_month').value)
  var day = new Date().getDate()
if (inputDay > 31 ){
      notValidDay()
  }
   else if (inputMonth === 4 || 6 || 9 || 11)
  var days = 30 - inputDay
    else if (inputMonth === 1|| 3 ||5 ||7 ||8 ||10 ||12 ) 
  var days = 31 - inputDay
   else if (inputMonth === 2 )//need alsoi somethng about long and short years )
  {
      var days = 28 - inputDay
  }
  else if (inputMonth === month) {

    var days = day - inputDay
  }
  else if (inputDay >= day){
var days = day
  }


   return days 
}



function notValidMonth(){
  var validMonth = "Must be a valid month"
  not_valid_month.textContent =  validMonth
  return validMonth
}



function monthCalculation(){ 

  var inputMonth = parseInt(document.getElementById('input_month').value)
  let month = new Date().getMonth() + 1
 
     if (month >= inputMonth) {
      howManyMonthsOld =    month - inputMonth
    return howManyMonthsOld
     } 
     
       else if ( inputMonth < 1 || inputMonth > 12 ){
      notValidMonth()
   } 
   else if ( month < inputMonth)
   { howManyMonthsOld = 12 - (inputMonth - month )
     return howManyMonthsOld
   }
 else { return alert('hello')}
 
 }
 

 
 function notValidYear(){
  var validYear = "Must be in the past"
  not_valid_year.textContent =  validYear
  return validYear
}

function yearsCalculation(){//shows as undefined
  var inputYear = parseInt(document.getElementById('input_year').value)
  var inputMonth = parseInt(document.getElementById('input_month').value)
  let year =  d.getUTCFullYear()

  if (inputYear > year || inputYear < 1920){

     notValidYear()
  }
  else if (inputMonth > month )
  {
 howManyYearsOld = (year - 1) - inputYear 
  
    return howManyYearsOld
  }
 
// need to write what else happens if year is valid




  else if (inputMonth <= month) {
  howManyYearsOld = year  - inputYear 
   
  }
 
    return howManyYearsOld 

}


function outputTest(){
var yearsAndMonths = `${daysCalculation()}-${monthCalculation()}-${yearsCalculation()}`
return yearsAndMonths
}



document.addEventListener("keydown", function(event) {
	// Check if the pressed key is the desired key
	if (event.key === "Enter") {
		
	  // Call your specific function
	  //myFunction();
    resultYears()
    resultMonths()
    resultDays()
	}
  });


function resultYears() {
 
var resultYears = yearsCalculation().toString()

output_years.textContent =  resultYears
return resultYears

}

function resultMonths() {
var resultMonths = monthCalculation().toString()
output_months.textContent = resultMonths 
return resultMonths
}

function resultDays() {
  var resultDays = daysCalculation().toString()
  output_days.textContent = resultDays 
  return resultDays
}







// var ageYearResult = myAgeYear().toString()

// function myFunction() {
// var y = myAgeYear().toString()
// var z = y.value
// output.textContent = y + ' Years'
// ageYearResult.value = ''
// return y

// }
// gets that calculated value to output
