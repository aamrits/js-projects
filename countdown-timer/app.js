const GET_YEAR = "June 30, 2021"; 

const countDown = () => {
  const targetDate = new Date(GET_YEAR);
  const dateNow = new Date();

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
  document.querySelector('#hour').innerHTML = formatTime(getHours);
  document.querySelector('#minute').innerHTML = formatTime(getMinutes);
  document.querySelector('#second').innerHTML = formatTime(getSeconds);

}

const formatTime = (time) => {
  return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000);


