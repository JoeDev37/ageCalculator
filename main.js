// const { createElement } = require("react");

console.log('Hello, World!');

const date = document.getElementById('date');
const btn = document.getElementById('btn');

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');

const cDate = new Date();


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

    const ageD = cDate.getDate() - day;
    const ageM = cDate.getMonth() + 1 - month;
    const ageY = cDate.getFullYear() - year;

    days.textContent = ageD;
    months.textContent = ageM;
    years.textContent = ageY; 


    /////////////////////////////////Prevent future dates

    if (newDate > cDate) {

        days.textContent = '';
        months.textContent = '';
        years.textContent = '';

        const popupThing2 = document.createElement('div');
        popupThing2.textContent = "Not Born Yet!!";
        popupThing2.style.backgroundColor = '#f38ba8';
        popupThing2.style.color = '#11111b';
        popupThing2.style.width = '100%';
        popupThing2.style.height = '20px';
        popupThing2.style.textAlign = 'center';
        popupThing2.style.borderRadius = '7px';

        popupThing2.style.position = 'fixed';
        popupThing2.style.top = '20px';
        popupThing2.style.left = '50%';
        popupThing2.style.transform = 'translateX(-50%)';
        popupThing2.style.zIndex = '9999';

        document.body.appendChild(popupThing2);

        setTimeout(() => {
            popupThing2.remove();
        }, 2000);
        
        return;
    }


    /////////////////////////////////Fix negative days/months

    
})