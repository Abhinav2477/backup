        let doomsday = new Date('2024-09-25T11:45:00'); // Set the exact date & time

        // Get the current time
        let currentTime = new Date();

        // Compare current time with doomsday time
        if (currentTime >= doomsday) {
            // If the current time is past the doomsday, apply the CSS class
            document.body.style.pointerEvents = "none";
        }
