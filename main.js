const date_piker_element = document.querySelector('.date-piker');
const selected_date_element = document.querySelector('.date-piker .select-date'); 
const dates_elements = document.querySelector('.date-piker .dates');
/// events listerners
date_piker_element.addEventListener('click', ToggleDatePiker)

/// fuctions
function ToggleDatePiker (e) {
    console.log("clique detectado!");
    
    console.log(e.composedPath());
    if (!checkEventPathForClass(e.composedPath, 'dates')){
    dates_elements.classList.toggle('dates-active')
    }
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
