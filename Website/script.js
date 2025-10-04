const words = ["Java", "JavaScript", "HTML", "CSS"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;
        const speed = 150; // typing speed in ms

        function type() {
            if (i >= words.length) i = 0;
            currentWord = words[i];

            if (!isDeleting) {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 1000); // pause before deleting
                    return;
                }
            } else {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                }
            }
            setTimeout(type, speed);
        }

        type();