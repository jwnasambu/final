document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthYear = document.getElementById("monthYear");
  const daysContainer = document.querySelector(".days");

  let currentDate = new Date();

  renderCalendar(currentDate);

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  daysContainer.addEventListener("click", (e) => {
    const selectedDay = e.target.textContent;
    if (selectedDay) {
      console.log(`Selected day: ${selectedDay}`);
    }
  });

  function renderCalendar(date) {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    monthYear.textContent = `${month} ${year}`;

    const firstDayOfMonth = new Date(year, date.getMonth(), 1);
    const lastDayOfMonth = new Date(year, date.getMonth() + 1, 0);
    const today = new Date();

    daysContainer.innerHTML = "";

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const day = document.createElement("div");
      day.classList.add("day");
      day.textContent = i;

      if (i === 1) {
        day.style.gridColumnStart = firstDayOfMonth.getDay() + 1;
      }

      if (
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear() &&
        i === today.getDate()
      ) {
        day.classList.add("current-date");
      }

      daysContainer.appendChild(day);
    }
  }
});

window.onload = function () {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("wrapper");

  // Set sidebar height to match content height
  sidebar.style.height = wrapper.offsetHeight + "px";
};

document.getElementById("recordsButton").addEventListener("click", function () {
  // Redirect the user to the desired page
  window.location.href = "/records/record.html";
});
