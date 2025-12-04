
console.log('Hello, World!');

const date = document.getElementById('date');
const btn = document.getElementById('btn');

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');


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

    console.log('Day: ' + day);
    console.log('Month: ' + month);
    console.log('Year: ' + year);



    days.textContent = day;
    months.textContent = month;
    years.textContent = year; 
})