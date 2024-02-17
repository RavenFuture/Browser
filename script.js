const timeOfDayEl = document.getElementById('time-of-day');
const timeDateEl = document.getElementById('time-date');
const searchBar = document.getElementById('search-bar');

setTimeOfDayGreeting();
updateDateTime(); 

searchBar.addEventListener('keydown', handleSearch); 

function setTimeOfDayGreeting() {
    let hours = new Date().getHours();
    let timeOfDay = 'Morning';
    if (hours >= 12 && hours < 17) timeOfDay = 'Afternoon';
    if (hours >= 17) timeOfDay = 'Evening'; 
    timeOfDayEl.textContent = timeOfDay; 
}

function updateDateTime() {
    const date = new Date(); 
    const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const formattedDateTime = date.toLocaleString('en-US', options);
    timeDateEl.textContent = formattedDateTime;
}

function handleSearch(event) {
    if (event.key === 'Enter'){
        let searchQuery = searchBar.value;
        let searchURL = 'https://www.google.com/search?q=' + searchQuery;
        window.open(searchURL, '_blank'); 
    }
}
