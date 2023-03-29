const dates = document.querySelectorAll(".date");
const time = new Date().toDateString();
Array.from(dates).map((date) => {
  console.log(date);
  date.textContent = time;
});
