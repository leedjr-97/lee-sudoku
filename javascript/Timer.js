class Timer {
  constructor() {
    const startingTime = new Date().getTime();
    document.getElementById("timer").innerHTML = `<h2>00:00</h2>`;
    this.count = "00:00";
    this.interval = setInterval(
      function () {
        const now = new Date().getTime();
        const difference = now - startingTime;

        if (difference === 0) {
          document.getElementById("timer").innerHTML = `<h2>00:00</h2>`;
          return;
        }

        const hourCalc = Math.floor(difference / 3600000);
        const hours =
          hourCalc > 0 ? `${hourCalc < 10 ? 0 : ""}${hourCalc}:` : "";

        const minuteCalcCheck = Math.floor(difference / 60000);
        const minuteCalc =
          minuteCalcCheck > 59 ? minuteCalcCheck % 60 : minuteCalcCheck;
        const minutes =
          difference / 60000 > 1
            ? `${minuteCalc < 10 ? 0 : ""}${minuteCalc}`
            : "00";

        const smallSecondCheck = Math.floor(difference / 1000);
        const largeSecondCheck = Math.floor((difference % 60000) / 1000);
        const seconds =
          difference < 60000
            ? `${smallSecondCheck < 10 ? "0" : ""}${smallSecondCheck}`
            : `${largeSecondCheck < 10 ? "0" : ""}${largeSecondCheck}`;

        this.count = `${hours}${minutes}:${seconds}`;

        document.getElementById(
          "timer"
        ).innerHTML = `<h2>${hours}${minutes}:${seconds}</h2>`;
      }.bind(this),
      1000
    );
  }

  removeInterval() {
    clearInterval(this.interval);
  }

  getTime() {
    return this.count;
  }
}
