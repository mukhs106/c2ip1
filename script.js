document.addEventListener("DOMContentLoaded", function () {
  const titleSpans = document.querySelectorAll("#title span");
  const hindiLetters = ["फ़", "ा", "उ", "ं", "ड", " ", "इ", "न", " ", "ट", "र", "ा", "ं", "स", "ल", "े", "ष", "न"];
  const englishLetters = ["F", "o", "u", "n", "d", " ", "i", "n", " ", "T", "r", "a", "n", "s", "l", "a", "t", "i", "o", "n"];

  function shuffleLetters() {
    titleSpans.forEach((span, i) => {
      let delay = Math.random() * 0.6;
      gsap.to(span, {
        duration: 0.2,
        textContent: hindiLetters[i],
        delay: delay,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(span, {
              duration: 0.2,
              textContent: englishLetters[i],
              delay: delay + 0.2
            });
          }, 200);
        }
      });
    });
  }

  setTimeout(shuffleLetters, 1000); // Start animation 1 sec after load
});
