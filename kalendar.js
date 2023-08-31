let month = ['January','February','March','April','May','June',
    'July','August','September', 'October','November','December'];
let weekDays =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
function calendar(){
    let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDateOfMonth = new Date(currentYear, currentMonth, 1);
    let html = "<table class='calendar'>"
    html += `<tr><td colspan="7" class="month">${month[currentMonth]} ${currentYear}</td></tr>`;
    html += "<tr>";
    for (let i = 0; i < weekDays.length; i++){
        html += `<td class="weekDays">${weekDays[i]}</td>`
    }
    html += "</tr>"
    let dayOfWeek = firstDateOfMonth.getDay();
    if(dayOfWeek == 0) dayOfWeek = 7;
    let firstDate = new Date(currentYear, currentMonth, 1 - (dayOfWeek - 1)).getDate();
    let iterations = 0;
    if (dayOfWeek == 1){
        html += "<tr>";
    }else {
        html += "<tr>";
        for (let i = 1; i < dayOfWeek; i++){
            html += `<td class="notCurrent">${firstDate}</td>`;
            firstDate += 1;
            iterations++;
        }
    }
    firstDate = 1;
    while(firstDate <= lastDayOfMonth){
        if(iterations == 7){
            html += "</tr>";
            html += "<tr>"
            iterations = 0;
        }
        if(firstDate == currentDate.getDate() && new Date().getMonth() == currentMonth && new Date().getFullYear() == currentYear){
            html += `<td class="currentDay">${firstDate}</td>`;
            firstDate++;
            iterations++;
        }else {
            html += `<td class="currentMonth">${firstDate}</td>`;
            firstDate++;
            iterations++;
        }
    }
    // console.log(iterations);
    let dateOfNextMonth = 1;
    while(iterations < 7){
        html += `<td class ="notCurrent">${dateOfNextMonth}</td>`;
        dateOfNextMonth++;
        iterations++;
    }
    html += "</table>";
    // console.log(html);
    document.querySelector("#calendar").innerHTML = html;
}

function prevMonth(){
    if (currentMonth == 0){
        currentMonth = 11;
        currentYear = currentYear - 1;
    }else {
        currentMonth = currentMonth - 1;
    }
    calendar();
}

function nextMonth() {
    if (currentMonth == 11){
        currentMonth = 0;
        currentYear = currentYear + 1;
    }else {
        currentMonth = currentMonth + 1;
    }
    calendar();
}

calendar();
document.querySelector("#prev").onclick = prevMonth;
document.querySelector("#next").onclick = nextMonth;