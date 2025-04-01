// Define problem sets
const paragraphProblems = [
  {
    id: 1,
    title: "Black Holes: Cosmic Mysteries",
    description:
      "Black holes are incredibly dense regions of space where gravity is so strong that nothing, not even light, can escape. They typically form when massive stars collapse at the end of their life cycle. The first real image of a black hole was captured in 2019 by the Event Horizon Telescope, a breakthrough that confirmed many long-held theories.",
  },
  {
    id: 2,
    title: "Quantum Computing Revolution",
    description:
      "Quantum computing represents a revolutionary shift in how we process information. Unlike traditional computers, which use binary bits (either 0 or 1), quantum computers use QUBITS, which can exist in multiple states at once due to a property called superposition. This allows quantum computers to solve certain complex problems much faster than classical computers. ",
  },
  {
    id: 3,
    title: "AI Creating Art & Music",
    description:
      "Artificial intelligence has made huge strides in creative fields, with AI now capable of producing stunning visual art, composing music, and even generating entire films. Tools such as DALL·E and Stable Diffusion allow users to create detailed, realistic images from text prompts, while AI music composers can generate entire soundtracks in various styles, mimicking famous artists or creating new genres.",
  },
  {
    id: 4,
    title: "5G & 6G: The Speed Race",
    description:
      "The advent of 5G technology has revolutionized mobile networks, offering ultra-fast internet speeds, low latency, and the ability to connect a massive number of devices. This has enabled advancements such as real-time augmented reality (AR), self-driving cars, and smart cities. But the development doesn't stop with 5G—scientists are already working on 6G, which promises to be up to *1000 times faster* than its predecessor. ",
  },
  {
    id: 5,
    title: "Brain-Computer Interfaces",
    description:
      "Brain-computer interfaces (BCIs) have the potential to drastically change how we interact with technology. Companies like Neuralink are developing brain chips that could allow individuals to control devices with their thoughts, which would be life-changing for people with disabilities, such as paralysis.  Issues like privacy, mental manipulation, and the potential for misuse raise critical questions about how we ensure the responsible use of such groundbreaking innovations.",
  },
  {
    id: 6,
    title: "The First Aircraft on Mars",
    description:
      "In 2021, NASA's *Ingenuity helicopter* made history as the first aircraft to ever fly on another planet—Mars. The success of Ingenuity on Mars could lead to similar technologies being deployed on moons like Titan, Saturn’s largest moon, where flying drones could help explore the thick atmosphere and unknown terrains.",
  },
  {
    id: 7,
    title: "Quantum Internet: Unhackable Network",
    description:
      "The concept of a quantum internet could radically change how we approach online security.China’s successful launch of the 'Micius' satellite, which enabled secure quantum communication, shows the potential of this technology. If developed further, the quantum internet could revolutionize fields like banking, national security, and privacy, offering unbreachable security for sensitive data.",
  },
  {
    id: 8,
    title: "Self-Healing Materials",
    description:
      "Imagine materials that can repair themselves when damaged—this is the promise of self-healing materials. Inspired by natural processes like how human skin heals after an injury, these materials are designed to automatically restore their structure when cracked or broken.As the technology progresses, these materials could lead to a world where objects last longer, waste is reduced, and repair costs are significantly lowered.",
  },
  {
    id: 9,
    title: "The Search for Alien Life",
    description:
      "One of humanity’s most profound questions—are we alone in the universe? NASA’s *James Webb Space Telescope* is helping to answer this by scanning distant exoplanets for signs of life, specifically looking for biosignatures—gases like oxygen and methane, which are often associated with living organisms.The search for alien life could fundamentally change our understanding of life, the universe, and our place within it.",
  },
  {
    id: 10,
    title: "The Future of Space Travel",
    description:
      "The future of space travel is becoming more exciting by the day.  Such technologies could one day make interstellar travel a possibility, allowing us to explore distant star systems and even habitable planets light-years away. The future of space exploration is truly limitless.",
  },
  {
    id: 11,
    title: "AI-Powered Doctors",
    description:
      "Artificial intelligence is transforming the field of healthcare, with AI systems now able to diagnose diseases and analyze medical data faster and more accurately than humans. However, the rise of AI in medicine raises concerns about the role of human doctors, data privacy, and the potential for errors in AI-driven decisions that could impact patient care.",
  },
  {
    id: 12,
    title: "Electric Planes: The Future of Aviation",
    description:
      "Electric aviation is gaining momentum as a solution to reduce the carbon footprint of air travel. Companies like *Airbus* and *Boeing* are developing electric planes that rely on batteries rather than traditional jet fuel. This shift to electric planes could also pave the way for **zero-emission flights*, transforming the global aviation industry and helping to combat climate change.",
  },
  {
    id: 13,
    title: "Bioprinting Human Organs",
    description:
      "Bioprinting is a groundbreaking technology that uses 3D printing to create human tissues and organs. By printing cells layer by layer, scientists are now able to produce functional tissues such as skin, cartilage, and even kidneys. This technology has the potential to *save millions of lives* in the future by providing an endless supply of organs for transplant, as well as creating personalized treatments for various medical conditions.",
  },
  {
    id: 14,
    title: "Holographic Displays",
    description:
      "Holographic displays are set to revolutionize how we interact with digital media. In the future, these displays could replace traditional screens in smartphones, TVs, and even video conferences, offering a more immersive and interactive way to view content. As the technology advances, holograms could become the new standard for everything from entertainment to education and even medical imaging.",
  },
];

const equationProblems = [
  {
    id: 1,
    title: " Find the smallest digit in a number",
    description:
      "Find the smallest digit in a given number and square to that number.",
    given: "Input: n = 295 ",
    answer: 4,
  },
  {
    id: 2,
    title: " Find the largest digit in a number",
    description: "Find the largest digit in a given number.",
    given: "Input: n = 682 ",
    answer: 8,
  },
  {
    id: 3,
    title: " Count the number of digits in a number",
    description: "Count how many digits are in a given number.",
    given: "Input: n = 543278 ",
    answer: 6,
  },
  {
    id: 4,
    title: " Find the sum of the first N natural numbers",
    description: "Find the sum of the first N natural numbers.",
    given: "Input: n = 5 ",
    answer: 15,
  },
  {
    id: 5,
    title: " Find the 3rd multiple of a given number",
    description: "Find the 3rd multiple of the given number.",
    given: "Input: n = 4 ",
    answer: 12,
  },
  {
    id: 6,
    title: " Find the difference between the largest and smallest digit",
    description:
      "Find the difference between the largest and smallest digit in the number.",
    given: "Input: n = 938 ",
    answer: 6,
  },
  {
    id: 7,
    title: " Find the last digit of a number",
    description: "Find the last digit of the given number.",
    given: "Input: n = 987 ",
    answer: 7,
  },
  {
    id: 8,
    title: " Find the first digit of a number",
    description: "Find the first digit of the given number.",
    given: "Input: n = 754 ",
    answer: 7,
  },
  {
    id: 9,
    title: " Count the number of factors of a number",
    description: "Count how many factors the given number has.",
    given: "Input: n = 10 ",
    answer: 4,
  },
  {
    id: 10,
    title: " Find the second largest digit in a number",
    description: "Find the second largest digit in the number.",
    given: "Input: n = 456 ",
    answer: 5,
  },
  {
    id: 11,
    title: " Find the product of the digits of a number",
    description: "Find the product of the digits in the number.",
    given: "Input: n = 234 ",
    answer: 24,
  },
  {
    id: 12,
    title: " Find the sum of even digits in a number",
    description: "Find the sum of all even digits in the number.",
    given: "Input: n = 1234 ",
    answer: 6,
  },
  {
    id: 13,
    title: " Find the sum of odd digits in a number",
    description: "Find the sum of all odd digits in the number.",
    given: "Input: n = 1234 ",
    answer: 4,
  },
  {
    id: 14,
    title: " Count the number of odd digits in a number",
    description:
      "Count how many odd digits are in the number and square to it.",
    given: "Input: n = 13579 ",
    answer: 25,
  },
  {
    id: 15,
    title: " Count the number of even digits in a number",
    description: "Count how many even digits are in the number.",
    given: "Input: n = 2468 ",
    answer: 4,
  },
  {
    id: 16,
    title: " Find the 4th power of a given number",
    description:
      "Find the 4th power of the given number and squareroot of the answer.",
    given: "Input: n = 2 ",
    answer: 4,
  },
  {
    id: 17,
    title: " Find the 3rd power of a given number",
    description: "Find the 3rd power of the given number.",
    given: "Input: n = 3 ",
    answer: 27,
  },
  {
    id: 18,
    title: " Find the sum of the first and last digit",
    description: "Find the sum of the first and last digit of the number.",
    given: "Input: n = 246 ",
    answer: 8,
  },
  {
    id: 19,
    title: " Subtract the last digit from the first digit",
    description: "Subtract the last digit from the first digit of the number.",
    given: "Input: n = 764 ",
    answer: 3,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  let nameofplayer = localStorage.getItem("playername");
  console.log("playername:", nameofplayer);
  const inputField = document.getElementById("modifiedInput");
  let currentLevel = 1; // Default to level 1
  let timeLeft = 60*15; // 5 minutes in seconds
  let completedtime = timeLeft;
  let downloadAttempted = false;
  let downloadAttemptedandretry = false;

  document.getElementById("playerName").innerText = nameofplayer;

  // Function to get a random item from an array
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Select one random problem from each category
  const randomEquationProblem = getRandomItem(equationProblems);
  const randomParagraphProblem = getRandomItem(paragraphProblems);

  randomParagraphProblem;

  // Display the selected random problems
  const problemContainer = document.getElementById("problemContainer");
  problemContainer.innerHTML = "";

  // Create and append equation problem card
  const equationCard = document.createElement("div");
  equationCard.className = "problem-card";
  equationCard.innerHTML = `
        <h3>Clue ${randomEquationProblem.id}: ${randomEquationProblem.title}</h3>
        <p>${randomEquationProblem.description}</p>
        <div class="given">
            <p><strong>Input:</strong> ${randomEquationProblem.given}</p>
        </div>
    `;
  problemContainer.appendChild(equationCard);

  // Create and append paragraph problem card
  const paragraphCard = document.createElement("div");
  paragraphCard.className = "problem-card";
  paragraphCard.innerHTML = `
        <h3>Problem ${randomParagraphProblem.id}: ${randomParagraphProblem.title}</h3>
        <p>${randomParagraphProblem.description}</p>
        
    `;
  problemContainer.appendChild(paragraphCard);

  window.setLevel = function (level) {
    if (level === 1 || level === 2) {
      currentLevel = level;
      console.log(`Level changed to ${level}`);
    } else {
      console.error("Invalid level! Choose 1 or 2.");
    }
  };
  const ASCII_SHIFT = randomEquationProblem.answer;

  function transformCharacter(char, level) {
    if (level === 1) {
      if (char.match(/[a-zA-Z]/)) {
        if (
          char.match(
            new RegExp(
              `[${String.fromCharCode(
                122 - ASCII_SHIFT + 1
              )}-z${String.fromCharCode(90 - ASCII_SHIFT + 1)}-Z]`
            )
          )
        ) {
          return String.fromCharCode(char.charCodeAt(0) - (26 - ASCII_SHIFT));
        }
        return String.fromCharCode(char.charCodeAt(0) + ASCII_SHIFT);
      }
    } else if (level === 2) {
      return String.fromCharCode(char.charCodeAt(0) + ASCII_SHIFT);
    }
    return char;
  }

  inputField.addEventListener("keypress", function (event) {
    event.preventDefault();
    let transformedChar = transformCharacter(event.key, currentLevel);
    this.value += transformedChar;
  });

  function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft === 0) {
      if (!downloadAttempted) {
        disableInputAndDownload();
      } else {
      }
      window.location.href = "/final";
    } else {
      timeLeft--;
      setTimeout(updateTimer, 1000);
    }
  }

  window.addEventListener("beforeunload", function (event) {
    if (timeLeft > 0) {
      event.preventDefault();
      event.returnValue =
        "You have an active session. Are you sure you want to leave?";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
      event.preventDefault();
    }
  });

  window.onload = updateTimer;

  function disableInputAndDownload() {
    inputField.disabled = true;
    document.querySelector("button").disabled = true;
    createFile();
    document.getElementById("modifiedInput").value =
      "Wait till time is up for other players!";
  }

  function handleDownload() {
    if (timeLeft > 0 && !downloadAttempted) {
      let userChoice = confirm(
        "You are downloading before time ends. \nChoose an option:\n\nOK : Try again\nCancel : Completed! Wait until other ends."
      );
      if (!userChoice) {
        downloadAttempted = true;
        disableInputAndDownload();
        return;
      } else {
        downloadAttemptedandretry = true;
      }
    }
    createFile();
  }

  function createFile() {
    let transformedText = inputField.value;
    let filenamechange = nameofplayer || "solution";
    let fileType = document.getElementById("fileType").value;
    let fileContent = "";
    let filename = `${filenamechange}.` + fileType;

    let elapsedTime = completedtime - timeLeft; // Convert back to time elapsed
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    let timestamp = `Time: ${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}\n---\nOriginal:\n${
      randomParagraphProblem.description
    }\n---\nUser:\n`;

    switch (fileType) {
      case "txt":
        fileContent = `${timestamp}${transformedText}`;
        break;
      case "cpp":
        fileContent = `// ${timestamp}\n#include <iostream>\nusing namespace std;\n\n${transformedText}}`;
        break;
      case "java":
        fileContent = `// ${timestamp}\npublic class Solution {\n    public static void main(String[] args) {\n\n${transformedText}`;
        break;
      case "js":
        fileContent = `// ${timestamp}\n\n${transformedText}`;
        break;
      case "py":
        fileContent = `# ${timestamp}\n\n${transformedText}`;
        break;

      default:
        console.error("Invalid file type!");
        return;
    }

    let blob = new Blob([fileContent], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document
    .getElementById("downloadBtn")
    .addEventListener("click", handleDownload);

  document.addEventListener("copy", function (e) {
    e.preventDefault();
  });
  document.addEventListener("cut", function (e) {
    e.preventDefault();
  });
  document.addEventListener("paste", function (e) {
    e.preventDefault();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
      event.preventDefault();
    }
  });
});
