

//Calculation Button
document.querySelector('.calculate').addEventListener('click', function()
{
    

    var userInches = document.querySelector('#userInches').value 
    var userFeedback = document.querySelector('#webResultsText')
    var userFeet = document.querySelector('#userFeet').value * 12
    var userWeight = document.querySelector('#userWeight').value 

    let a = 5
    alert(++a)


    var user = document.getElementById('userName').value
    var userResults = Number(userFeet) + Number(userInches);

    var bmi = Math.round((userWeight / Math.pow(userResults, 2)) * 703);

    if(!user)
    {
        alert("Please Enter your name.")
    }
    else if(bmi < 18 )
    {
        document.querySelector('.bmiName').textContent = user + "" + " BMI:" ;
        document.querySelector('.webResults').textContent = bmi
        document.querySelector('.webResultsText').animate([
            {transform: 'translateY(100%)'},
            {transform: 'translateY(0%)'}
        ], {duration: 500})
        document.querySelector('.webResultsText').textContent = "Underweight";



    }
    else if(bmi > 18.5 && bmi < 24.9)
    {
        document.querySelector('.bmiName').textContent = user + "" + " BMI:" ;
        document.querySelector('.webResults').textContent = bmi
        document.querySelector('.webResultsText').textContent = "Normal";
        document.getElementById('webResultsText').style.fontWeight = 'bold'
        document.querySelector('.webResultsText').animate([
            {transform: 'translateY(100%)', opacity: '0%'},
            {transform: 'translateY(0%)', opacity: '100%'}
        ], {duration: 1000})
        document.querySelector('.webResultsText').textContent = "Normal";
    }
    else if(bmi > 25 && bmi < 29.9)
    {
        document.querySelector('.bmiName').textContent = user + "" + " BMI:" ;
        document.querySelector('.webResults').textContent = bmi
        document.querySelector('.webResultsText').textContent = "Overweight";
        document.querySelector('.webResultsText').animate([
            {transform: 'translateY(100%)'},
            {transform: 'translateY(0%)'}
        ], {duration: 500})
    }
    else if(bmi > 30 && bmi < 34.9)
    {
        document.querySelector('.bmiName').textContent = user + "" + " BMI:" ;
        document.querySelector('.webResults').textContent = bmi
        document.querySelector('.webResultsText').textContent = "Obese";
    }
    else if(bmi > 35)
    {
        document.querySelector('.bmiName').textContent = user + "" + " BMI:" ;
        document.querySelector('.webResults').textContent = bmi
        document.querySelector('.webResultsText').textContent = "Extremly Obese";
        $(selector).mousedown(function () { 
            
        });
    }

})



