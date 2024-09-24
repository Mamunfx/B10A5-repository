function activeStatus(h , d) {
        d.classList.add('hidden');
        h.classList.remove('hidden');
}


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
    p1.innerText = `${donationAmmount} BDT is donated  ${donationName}.`
    const p2 = document.createElement('p');
    const d = new Date();
    p2.innerText = `Date : ${d}`;
    p1.classList.add('font-bold','text-xl')
    div.appendChild(p1);  
    div.appendChild(p2);  
    transiction.appendChild(div);
    div.classList.add('rounded-lg', 'space-y-2','p-6' ,'border','border-gray-300','shadow-lg', 'mt-8')

    // Open modal :
    my_modal_1.showModal();
}


function resetingInput(cardName) {
    document.getElementById(cardName).value = '';
}