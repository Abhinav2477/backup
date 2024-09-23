      // Time period in milliseconds (2 days = 2 * 24 * 60 * 60 * 1000)
     // const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
      const twoDaysInMs = 1 * 60 * 1000;
      // Get the current time
      const currentTime = new Date().getTime();

      // Function to apply the CSS change
      function applyCSSChange() {
        body.style.pointerEvents = "none";
      }

      // Check if the initial time is already stored in localStorage
      let initialTime = localStorage.getItem('initialTime');

      if (initialTime) {
          // If it's already stored, compare it with the current time
          initialTime = parseInt(initialTime, 10);  // Convert string to number
          const timeElapsed = currentTime - initialTime;
            

          // If two days have passed, apply the CSS change
          if (timeElapsed >= twoDaysInMs) {
              applyCSSChange();
          }
      } else {
          // If it's not stored, save the current time as the initial time
          localStorage.setItem('initialTime', currentTime);
      }