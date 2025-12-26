
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
        const popupThing = document.createElement('div');
        popupThing.textContent = 'Select first';
        popupThing.style.backgroundColor = '#f38ba8';
        popupThing.style.color = '#11111b';
        popupThing.style.width = '100%';
        popupThing.style.height = '20px';
        popupThing.style.textAlign = 'center';
        popupThing.style.borderRadius = '7px';

        popupThing.style.position = 'fixed';
        popupThing.style.top = '20px';
        popupThing.style.left = '50%';
        popupThing.style.transform = 'translateX(-50%)';
        popupThing.style.zIndex = '9999';

        document.body.appendChild(popupThing)

        setTimeout(() => {
            popupThing.remove();
        }, 2000);

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