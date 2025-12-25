
console.log('Hello, World!');

const date = document.getElementById('date');
const btn = document.getElementById('btn');

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');

const today = new Date();


btn.addEventListener('click', () => {
    
    const value = date.value;

    if(!value) {
        console.log('Selecte A Date');
        return;
    };

    const newDate = new Date(value);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    // console.log('Day: ' + day);
    // console.log('Month: ' + month);
    // console.log('Year: ' + year);


    const ageD = today.getDate() - day;
    const ageM = today.getMonth() + 1 - month;
    const ageY = today.getFullYear() - year;




    days.textContent = ageD;
    months.textContent = ageM;
    years.textContent = ageY; 
})