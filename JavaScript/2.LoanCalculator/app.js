//Add Event Listener

const submitbtn = document.querySelector('button')
submitbtn.addEventListener('click',function(e){

    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loader').style.display = 'block'
    setTimeout(calculateLoan,2000)
    e.preventDefault()
})

function calculateLoan(){
    //UI var
    const loan_amount = document.querySelector('#amount').value
    const annual_interest = document.querySelector('#interest').value
    const year_repay = document.querySelector('#year').value

    const principal = loan_amount
    const calculatedInterest = annual_interest/100/12
    const calculatedPayments = year_repay * 12

    // Compute monthly payment

    const x = Math.pow(1+calculatedInterest,calculatedPayments)
    const monthly = (principal*x*calculatedInterest)/(x-1)

    if(isFinite(monthly)){
    
        document.querySelector('#monthly-payment').value = monthly.toFixed(2)
        document.querySelector('#total-payment').value = (monthly*calculatedPayments).toFixed(2)
        document.querySelector('#total-interest').value = ((monthly*calculatedPayments)-principal).toFixed(2)
        document.querySelector('#results').style.display = 'block'
        document.querySelector('#loader').style.display = 'none'
    }else{
        showError('Please Check your numbers')
        document.querySelector('#results').style.display = 'none'
        document.querySelector('#loader').style.display = 'none'
        }
}

function showError(error){
    //Create ErrDiv elem
    const errDiv = document.createElement('div')
    //Add Err class
    errDiv.className = 'alert alert-danger'
    //appendChild TextNode
    errDiv.appendChild(document.createTextNode(error))
    //Card Elem
    const cardElem = document.querySelector('.card')
    const headingElem = document.querySelector('.heading')
    //insert errDiv to card Elem
    cardElem.insertBefore(errDiv,headingElem)

    //Clear alert after 3 sec.
    setTimeout(removeAlert,3000)
}

function removeAlert(){
    document.querySelector('.alert').remove()
}