const date_piker_element = document.querySelector('.date-piker');
const selected_date_element = document.querySelector('.date-piker .select-date'); 
const dates_elements = document.querySelector('.date-piker .dates');
const mth_element = document.querySelector('.date-piker .dates .month .mth');
const next_mth_element = document.querySelector('.date-piker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-piker .dates .month .prev-mth');
const days_elements = document.querySelector('.date-piker .dates .days');
const months_element = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectYear = year;

mth_element.textContent = months_element[month] + ' ' + year;
selected_date_element.textContent = formatDate(date);

// Event Listeners
date_piker_element.addEventListener('click', ToggleDatePiker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// Funções
function ToggleDatePiker(e) {
    if (!checkEventPathForClass(e.composedPath(), 'dates')) {
        dates_elements.classList.toggle('dates-active');
    }
}

function goToNextMonth(e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months_element[month] + ' ' + year;
    populateDates();
}

function goToPrevMonth(e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months_element[month] + ' ' + year;
    populateDates();
}
function populateDates() {
    days_elements.innerHTML = '';
    let amounth_days;
    if (month == 1) {
        amounth_days = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    } else if ([3, 5, 8, 10].includes(month)) {
        amounth_days = 30;
    } else {
        amounth_days = 31;
    }

    for (let i = 0; i < amounth_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;
        day_element.addEventListener('click', function (e) {
            selectDay(e, i + 1);
        });

        days_elements.appendChild(day_element);
    }
}
function selectDay(event, day) {
    selectedDate = new Date(year, month, day);
    selectedDay = day;
    selectedMonth = month;
    selectYear = year;
    selected_date_element.textContent = formatDate(selectedDate);
    const days = document.querySelectorAll('.date-piker .dates .day');
    days.forEach(d => d.classList.remove('selected'));
    event.target.classList.add('selected');
}
function checkEventPathForClass(path, selector) {
    for (let i = 0; i < path.length; ++i) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}
function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = d.getFullYear();
    return day + ' / ' + month + ' / ' + year;
}
populateDates();
