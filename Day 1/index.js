const countdownDisplay = document.getElementById("countdown-display")

    // Task:
    // - Get today's date (you only need the day).
function getTodaysDate() {
    const todaysDate = new Date();
    const day = todaysDate.getDate();
    const month = todaysDate.getMonth() + 1;
    const year = todaysDate.getFullYear();
    
    return { day, month, year };
}
    // - Calculate remaining days.
 function calculateRemainingDays(day, month, targetDay) {
    let remainingDays = 0;
    if(month === 12 && day <= targetDay) {
        remainingDays = targetDay - day;
    }
    return remainingDays;
}
    // - Display remaining days in countdownDisplay.
  function displayRemainingDays(remainingDays) {
    countdownDisplay.textContent = `${remainingDays}`;
}

function renderCountdown(){
    const christmas = 25;
    
    const { day, month, year } = getTodaysDate();
    
    let remainingDays = calculateRemainingDays(day, month, christmas);
    displayRemainingDays(remainingDays);  
}
 
renderCountdown();