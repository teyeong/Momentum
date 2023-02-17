const date = document.querySelector("h2#date");
const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function getD() {
    const dateObj = new Date();
    const year = String(dateObj.getFullYear());
    const month = String(dateObj.getMonth()).padStart(2, "0");
    const real_date = String(dateObj.getDate()).padStart(2, "0");
    const day = String(dateObj.getDay());
    const real_day = week[day];
    date.innerText = `${year}/${month}/${real_date}/${real_day}`;
}

getD();
setInterval(getD, 1000);