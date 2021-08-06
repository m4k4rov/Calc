//income inputs
const incomeSalary=document.getElementById("income-salary"),
    incomeFreelance=document.getElementById("income-freelance"),
    incomeExtra1=document.getElementById("income-extra-1"),
    incomeExtra2=document.getElementById("income-extra-2");

//costs inputs
const costsFlat=document.getElementById("costs-flat"),
    costsHouseServices=document.getElementById("costs-house-services"),
    costsTransport=document.getElementById("costs-transport"),
    costsCredit=document.getElementById("costs-credit");

//total inputs
const totalMonthInput=document.getElementById("total-month"),
    totalDayInput=document.getElementById("total-day"),
    totalYearInput=document.getElementById("total-year");

let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange=document.getElementById("money-box-range"),
    accumulationInput=document.getElementById("accumulation"),
    spendInput=document.getElementById("spend");

let accumulation=0;  //Накопления
let totalPrecents=0; //Проценты накоплений

const inputs=document.querySelectorAll(".input");

for(input of inputs){
    input.addEventListener('input',()=>{
        availableMoney();
        calculationPrecents();
    })
};

const strToNum = (str) => str.value ? parseInt(str.value) : 0;

const availableMoney=()=>{
    const totalPerMonth = strToNum(incomeSalary)+strToNum(incomeFreelance)+strToNum(incomeExtra1)+strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat)+strToNum(costsHouseServices)+strToNum(costsTransport)+strToNum(costsCredit);
    totalMonth=totalPerMonth-totalCosts;
    totalMonthInput.value=totalMonth;
};

moneyBoxRange.addEventListener('input',e=>{
    const totalPracentEl=document.getElementById("total-precents");
    totalPrecents=e.target.value;
    totalPracentEl.innerHTML=totalPrecents;
    calculationPrecents();
});

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation>0 ? accumulation : 0;
    totalDay=((totalMonth-accumulation)/30).toFixed();
    totalDayInput.value = totalDay>0 ? totalDay : 0;
    totalYear=accumulation>0 ? accumulation*12 : 0;
    totalYearInput.value=totalYear;
    spendInput.value=totalMonth>0 ? totalMonth-accumulation : 0;
};