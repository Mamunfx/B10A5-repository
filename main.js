const donation = document.getElementById("donation");
const history = document.getElementById("history");
const donationBtn = document.getElementById("donation_btn");
const hisotryBtn = document.getElementById("hisoty_btn");
const amountBtn1 = document.getElementById("amount_btn");
const amountBtn2 = document.getElementById("amount_btn2");
const amountBtn3 = document.getElementById("amount_btn3");
const donation1 = " for Flood at Noakhali, Bangladesh "
const donation2 = " for Flood Relief in Feni,Bangladesh"
const donation3 = " for Injured in the Quota Movement"

hisotryBtn.addEventListener('click',function(){
    activeStatus(history,donation);
    hisotryBtn.classList.add("bg-lime-400");
    donationBtn.classList.remove("bg-lime-400");
})

donationBtn.addEventListener('click',function(){
    activeStatus(donation , history);
    donationBtn.classList.add("bg-lime-400");
    hisotryBtn.classList.remove("bg-lime-400");
})


amountBtn1.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount","card_bln",donation1);
    resetingInput("donation_ammount");
})

amountBtn2.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount2","card_bln2",donation2);
    resetingInput("donation_ammount2");
})

amountBtn3.addEventListener('click',function (event) {
    event.preventDefault();
    donationCard("donation_ammount3","card_bln3",donation3);
    resetingInput("donation_ammount3");
})
  