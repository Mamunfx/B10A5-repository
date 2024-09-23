const donation = document.getElementById("donation");
const history = document.getElementById("history");
const donationBtn = document.getElementById("donation_btn");
const hisotryBtn = document.getElementById("hisoty_btn");
const amountBtn1 = document.getElementById("amount_btn");
const amountBtn2 = document.getElementById("amount_btn2");
const amountBtn3 = document.getElementById("amount_btn3");
const donation1 = "BDT Donation for Flood at Noakhali, Bangladesh "
const donation2 = "BDT Donation for Flood Relief in Feni,Bangladesh"
const donation3 = "BDT Donation for Injured in the Quota Movement"

hisotryBtn.addEventListener('click',function(){
    hisotryBtn.classList.add('bg-lime-400');
    donationBtn.classList.remove('bg-lime-400');
    donation.classList.add('hidden');
    history.classList.remove('hidden');
})

donationBtn.addEventListener('click',function(){
    donationBtn.classList.add('bg-lime-400');
    hisotryBtn.classList.remove('bg-lime-400');
    history.classList.add('hidden');
    donation.classList.remove('hidden');
})

amountBtn1.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount","card_bln",donation1);
})

amountBtn2.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount2","card_bln2",donation2);
})

amountBtn3.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount3","card_bln3",donation3);
})
  