const currentTime = document.getElementById("current-time");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm");
const statusText = document.getElementById("status");

let alarmTime = null;
let alarmSet = false;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  currentTime.textContent = `${hours}:${minutes}:${seconds}`;

  if (alarmSet && `${hours}:${minutes}` === alarmTime) {
    alert("⏰ Alarm ringing!");
    alarmSet = false;
    statusText.textContent = "Alarm completed!";
  }
}

setAlarmBtn.addEventListener("click", () => {
  alarmTime = alarmTimeInput.value;
  if (alarmTime) {
    alarmSet = true;
    statusText.textContent = `Alarm set for ${alarmTime}`;
  } else {
    statusText.textContent = "Please select a time!";
  }
});

setInterval(updateTime, 1000);
