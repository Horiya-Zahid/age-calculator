// Getting values from the inputs and ensuring they are numbers
const d1 = Number((document.getElementById('date') as HTMLInputElement).value);
const d2 = Number((document.getElementById('month') as HTMLInputElement).value);
const d3 = Number((document.getElementById('year') as HTMLInputElement).value);

function age(): void {
    // Fetch birth details again inside the function
    const birthDay = Number((document.getElementById('date') as HTMLInputElement).value);
    const birthMonth = Number((document.getElementById('month') as HTMLInputElement).value);
    const birthYear = Number((document.getElementById('year') as HTMLInputElement).value);
    
    const today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1; // Month is zero-indexed in JS
    let currentYear = today.getFullYear();
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust if the birth day is greater than the current day
    if (birthDay > currentDay) {
        currentDay += monthDays[currentMonth - 1];
        currentMonth--;
    }

    // Adjust if the birth month is greater than the current month
    if (birthMonth > currentMonth) {
        currentMonth += 12;
        currentYear--;
    }

    // Calculate age in years, months, and days
    const ageDays = currentDay - birthDay;
    const ageMonths = currentMonth - birthMonth;
    const ageYears = currentYear - birthYear;

    // Display the result
    (document.getElementById('age') as HTMLElement).innerText = `Your age is ${ageYears} years ${ageMonths} months and ${ageDays} days.`;
}
