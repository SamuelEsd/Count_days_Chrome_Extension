// get elements from DOM 
let days_elapsed = document.getElementById("days");
let progress_bar = document.getElementById("progress-bar");
let bar = document.querySelector(".progress-bar");

// get dates
let current_date = new Date();
let first_day_date = new Date(current_date.getFullYear(), 0, 1);

// get the values for day and percentage
let difference_of_dates = current_date.getTime() - first_day_date.getTime();
difference_of_dates = Math.floor( difference_of_dates / (1000 * 3600 * 24) );

let percent = difference_of_dates/3.65

// Update text
days_elapsed.innerText = `${difference_of_dates}/365`;

// Update progress bar values
progress_bar.innerText = `${(percent).toFixed(2)}%`; 
progress_bar.ariaValueNow = `${Math.floor(percent)}`;
bar.style.width = Math.floor(percent) + "%";