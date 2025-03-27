     // Function to create target date in Bulgaria's local time (UTC+2 or UTC+3)
      function getBulgariaTimeDate(year, month, day, hours, minutes, seconds) {
        // Bulgaria is in UTC+2 or UTC+3 (DST), and we need to create the time based on local time
        const date = new Date(Date.UTC(year, month - 1, day, hours - 2, minutes, seconds)); // UTC time shifted by 2 for EET
        return date;
      }
    
      // Set the target date in Bulgaria time (UTC+2 or UTC+3 depending on daylight saving time)
      const targetDate = getBulgariaTimeDate(2025, 4, 12, 11, 35, 0).getTime();
    
      // Start countdown if the target date is in the future
      const countdown = setInterval(() => {
        const now = Date.now(); // Get the current time in milliseconds (UTC)
        const distance = targetDate - now;
    
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Log to check times
        console.log('Current Time:', new Date(now).toLocaleString());
        console.log('Target Time:', new Date(targetDate).toLocaleString());
        console.log("Distance:", distance);
    
        // Display the results
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    
        // If the countdown is finished, stop the interval and display a message in the table
        if (distance < 0) {
          clearInterval(countdown);
          document.getElementById("days").textContent = "00";
          document.getElementById("hours").textContent = "00";
          document.getElementById("minutes").textContent = "00";
          document.getElementById("seconds").textContent = "00";
          document.querySelector(".frame").innerHTML = "<tr><td colspan='7' style='text-align:center;'>Новият IQOS ILUMA i е вече тук!</td></tr>";
          document.querySelector(".tease").innerHTML = "<a style='text-decoration:underline; text-decoration-color:#00d1d2; text-decoration-thickness:2px;' href='https://iqos-bg-next.stage.bylith.com/bg/news/22'>Купи сега!</a>";
        }
      }, 1000);
