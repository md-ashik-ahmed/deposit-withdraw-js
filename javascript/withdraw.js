// add event handler with the withdraw button

const loginSubmit = document.getElementById('login-submit');

loginSubmit.addEventListener('submit', function (e) {
    //stop whole site reloding for clicking submit button
    e.preventDefault();

    // Step-2
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');

    //step-3
    if (userName.value === 'ashikahmed@gmail.com' && password.value === 'Ashik') {
        //Select login page and dashboard page
        const login = document.getElementById('login');
        const dashboard = document.getElementById('dashboard');

        login.classList.add('hidden');
        dashboard.classList.add('block')
    } else {
        document.getElementById('warning').innerText = '⚠ Invalid Username or Password '
    }

})

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
     // step-3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

     // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     // step-6:
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;


     // step-7: clear the deposit field
     withdrawField.value = "";
})