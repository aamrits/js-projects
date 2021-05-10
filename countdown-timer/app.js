const countDown = () => {
  const targetDate = new Date("June 30, 2021 00:00:00").getTime();
  const dateNow = new Date().getTime();

  const gap = targetDate - dateNow;

  if (gap < 0) {
    document.querySelector('.container-timer').style.display = 'none';
    document.querySelector('.title').innerHTML = 'The website has launched.';
  }

  // Get Time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const getDays = Math.floor(gap / day);
  const getHours = Math.floor((gap % day) / hour);
  const getMinutes = Math.floor((gap % hour) / minute);
  const getSeconds = Math.floor((gap % minute) / second);

  document.querySelector('#day').innerHTML = getDays;
  document.querySelector('#hour').innerHTML = getHours;
  document.querySelector('#minute').innerHTML = getMinutes;
  document.querySelector('#second').innerHTML = getSeconds;

}

setInterval(countDown, 1000);
