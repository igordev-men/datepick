const date_piker_element = document.querySelector('.date-piker');
const selected_date_element = document.querySelector('.date-piker .select-date'); 
const dates_elements = document.querySelector('.date-piker .dates');
const mth_element =  document.querySelector('.date-piker .dates .month .mth');
const next_mth_element= document.querySelector('.date-piker .dates .month .next-mth');
const prev_mth_element= document.querySelector('.date-piker .dates .month .prev-mth');
const days_elements= document.querySelector('.date-piker .dates .days');
const months_element = ['janeiro','fevereiro','março','abril','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

let date = new Date();
let day =date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate= date;
let selectedDay= day;
let selectedMonth= month;
let selectYear= year;

mth_element.textContent = months_element[month] + '' + year;

/// events listerners
date_piker_element.addEventListener('click', ToggleDatePiker);
next_mth_element.addEventListener('click', goToNextMonth)

/// fuctions
function ToggleDatePiker (e) {
    console.log(e.composedPath());
    if (!checkEventPathForClass(e.composedPath, 'dates')){
    dates_elements.classList.toggle('dates-active')
    }
}

function goToNextMonth (e){
    month++;
    if (month > 11){
        month = 0;
        year++;
    }
    mth_element.textContent = months_element[month] + '' + year;
}
// helper fuction
function checkEventPathForClass ( path, selector ){
    for (let i=0; i < path.length; ++i){
        if(path[i].classList && path[i].classList.contains(selector) ){
            return true;
        }
    }
    return false;

}
