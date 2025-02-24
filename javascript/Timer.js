class Timer {
  constructor() {
    const startingTime = new Date().getTime();
    document.getElementById("timer").innerHTML = `<h2>00:00</h2>`;

    setInterval(function () {
      const now = new Date().getTime();
      const difference = now - startingTime;

      if (difference === 0) {
        document.getElementById("timer").innerHTML = `<h2>00:00</h2>`;
        return;
      }

      const hourCalc = Math.floor(difference / 1440000);
      const hours =
        difference / 1440000 > 1 ? `${hourCalc < 10 ? 0 : ""}:` : "";

      const minuteCalc = Math.floor(difference / 60000);
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
    }, 1000);
  }
}
