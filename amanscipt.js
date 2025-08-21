const targetDate = new Date("2026-01-01T00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
   
    const distance = targetDate - now;
    if (distance<=0) {
        document.getElementById("countdown").innerHTML = "🎉 Time's Up!";
  clearInterval(timer);
  return;
    };
   const day=Math.floor(distance/(1000*60*60*24));
   const hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
   const minutes=Math.floor((distance % (1000 * 60 * 60 )) /(60*1000));
   const seconds=Math.floor((distance%(1000*60))/(1000));
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML =hours ;
    document.getElementById("Minutes").innerHTML =minutes;
    document.getElementById("Seconds").innerHTML =seconds;
}
const timer=setInterval(updateCountdown,1000);