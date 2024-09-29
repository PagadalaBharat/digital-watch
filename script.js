var time = document.getElementsByClassName("time")[0];
var day = document.getElementsByClassName("day")[0];
// console.log(time);
// console.log(day);    
function todaytime() {
  date = new Date();
  newdate = date.toDateString();
  // fullyear = date.getFullYear();
  // month = date.getMonth();
  // day = date.getDate();
  // console.log(date);
  // console.log(fullyear);
  // console.log(month);
  // console.log(day);
  day.innerHTML = newdate;
  // console.log(newdate);

  // newtime=date.toTimeString()
  // console.log(newtime);
  correct_time = date.toLocaleTimeString();
  // console.log(correct_time);
  time.innerHTML = correct_time;
}
setInterval(todaytime,1000)
//   todaytime();