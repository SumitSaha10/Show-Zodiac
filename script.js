window.addEventListener('load', function () {
    let date = document.getElementById('date');

    let month = document.getElementById('month');
    let name = document.getElementById('user-name');
    let showButton = document.getElementById('btn1');
    let resetButton = document.getElementById('btn2');
    let showZodiac = document.getElementById('showSign');
    let heading = document.getElementById('head2');
    let image = document.getElementById('image');

    showButton.addEventListener('click', () => {
        let name2 = name.value;
        let date2 = date.value;
        let month2 = month.value;

        let showMessge = `Hello ${name2} your zodiac sign is `;
        showZodiac.style.display = 'flex';

        if (date2 >= 21 && month2 == 'March' || date2 <= 19 && month2 == 'April') {
            let zodiac = 'aries';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 20 && month2 == 'April' || date2 <= 20 && month2 == 'May') {
            let zodiac = 'taures';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 21 && month2 == 'May' || date2 <= 21 && month2 == 'June') {
            let zodiac = 'gemini';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 22 && month2 == 'June' || date2 <= 22 && month2 == 'July') {
            let zodiac = 'cancer';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 23 && month2 == 'July' || date2 <= 22 && month2 == 'August') {
            let zodiac = 'leo';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 23 && month2 == 'August' || date2 <= 22 && month2 == 'September') {
            let zodiac = 'virgo';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 23 && month2 == 'September' || date2 <= 23 && month2 == 'October') {
            let zodiac = 'libra';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 24 && month2 == 'October' || date2 <= 21 && month2 == 'November') {
            let zodiac = 'scorpion';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 22 && month2 == 'November' || date2 <= 21 && month2 == 'December') {
            let zodiac = 'sagittarius';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 22 && month2 == 'December' || date2 <= 19 && month2 == 'January') {
            let zodiac = 'capricorn';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 20 && month2 == 'January' || date2 <= 18 && month2 == 'February') {
            let zodiac = 'aquarius';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }
        else if (date2 >= 19 && month2 == 'February' || date2 <= 20 && month2 == 'March') {
            let zodiac = 'pisces';
            showMessge = showMessge + zodiac;
            heading.innerText = showMessge;
            image.src = `images/${zodiac}.jpg`
        }

    })

    resetButton.addEventListener('click', () => {
        showZodiac.style.display = 'none';
    })

})