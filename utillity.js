function donationCard(donation_ammount,card_bln,donationName) {

    // declraing variables :
    const donationAmmount = parseFloat(document.getElementById(donation_ammount).value);
    const totalBalance = parseFloat(document.getElementById("total_balance").innerText);
    const cardBalance = parseFloat(document.getElementById(card_bln).innerText);
    const transiction = document.getElementById("tansiction");

    //Validating the input :

    let a = "1234567890";
    let b = document.getElementById(donation_ammount).value;
    for (const e of b) {
        if (!a.includes(e)) {
            alert('Please input valid numbers');
            return;
        }
    }
    if (donationAmmount <=0) {
        alert('Please input valid numbers');
        return;
    }
    else if (donationAmmount>totalBalance){
        alert('Amount is less than Balance');
        return;
    }
    else if (document.getElementById(donation_ammount).value == ""){
        alert('Enter a number please !');
        return;
    }

    // calculating the balance :
    let newBalance = parseFloat(totalBalance-donationAmmount);
    document.getElementById("total_balance").innerText = newBalance;
    let newCardBalance = cardBalance+donationAmmount;
    document.getElementById(card_bln).innerText = newCardBalance;  


    // Making history section :
    const div = document.createElement('div')
    const p1 = document.createElement('p');
    p1.innerText = `${donationAmmount} ${donationName}`
    const p2 = document.createElement('p');
    const d = new Date();
    p2.innerText = `${d}`;
    div.appendChild(p1);  
    div.appendChild(p2);  
    transiction.appendChild(div);
    div.classList.add('bg-green-400', 'mt-8')
}

