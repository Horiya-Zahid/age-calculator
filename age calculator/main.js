// Getting values from the inputs and ensuring they are numbers
var d1 = Number(document.getElementById('date').value);
var d2 = Number(document.getElementById('month').value);
var d3 = Number(document.getElementById('year').value);
function age() {
    // Fetch birth details again inside the function
    var birthDay = Number(document.getElementById('date').value);
    var birthMonth = Number(document.getElementById('month').value);
    var birthYear = Number(document.getElementById('year').value);
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth() + 1; // Month is zero-indexed in JS
    var currentYear = today.getFullYear();
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    var ageDays = currentDay - birthDay;
    var ageMonths = currentMonth - birthMonth;
    var ageYears = currentYear - birthYear;
    // Display the result
    document.getElementById('age').innerText = "Your age is ".concat(ageYears, " years ").concat(ageMonths, " months and ").concat(ageDays, " days.");
}
