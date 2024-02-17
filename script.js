const timeOfDayEl = document.getElementById('time-of-day');
const timeDateEl = document.getElementById('time-date');
const searchBar = document.getElementById('search-bar');
const recommendations = document.getElementById('recommendations');

setTimeOfDayGreeting();
updateDateTime(); 

searchBar.addEventListener('input', updateRecommendations);
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

function updateRecommendations() {
    // Placeholder -  You would likely fetch real recommendations  here
    recommendations.innerHTML = ''; // Clear 
    const sampleSuggestions = ['Trending News', 'Cute kittens', 'Web Development'];
    sampleSuggestions.forEach(suggestion => {
        let item = document.createElement('div');
        item.textContent = suggestion;
        recommendations.appendChild(item);
    });
}

function handleSearch(event) {
    if (event.key === 'Enter'){
        let searchQuery = searchBar.value;
        let searchEngine = prompt("Choose Search Engine (Google, Bing, DuckDuckGo, Yahoo, Kindle):");

        // Handle sending search to different engines (Illustrative)
        if (searchEngine) {
            let searchURL = '';
            switch(searchEngine.toLowerCase()) {
                case 'google': searchURL = 'https://www.google.com/search?q='; break;
                case 'bing': searchURL = 'https://www.bing.com/search?q='; break;
                 // ..and so on...
                default: searchURL =  'https://duckduckgo.com/?q='; 
            }
            window.open(searchURL + searchQuery, '_blank'); 
        } 
    }
}
