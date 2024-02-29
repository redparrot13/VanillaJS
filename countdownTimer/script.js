const currentDate = new Date();

 const targetDate = new Date('2025-01-01T00:00:01');

//console.log(targetDate)
//tests
const difference = targetDate - currentDate;


//console.log(difference);

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;
    const days = Math.floor(difference / ( 1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    /*console log tests: 
    console.log("days: ", days);
    console.log("hours: ", hours);
    console.log("minutes: ", minutes);
    console.log("seconds: ", seconds); 
    */

    if(difference < 0){
        clearInterval(interval);
        document.getElementById("timer").innerText = "HAPPY BIRTHDAY!!!!!"
    }

}

const interval = setInterval(updateCountdown, 1000);


