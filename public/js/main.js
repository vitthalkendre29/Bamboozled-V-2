// Define problem sets
const paragraphProblems =[
    {
      "id": 1,
      "title": "Black Holes: Cosmic Mysteries",
      "description": "Did you know that black holes can 'spaghettify' objects? If you got too close, the intense gravitational pull would stretch you like a noodle! Also, the largest known black hole, TON 618, has a mass of 40 billion suns—big enough to swallow entire solar systems!"
    },
    {
      "id": 2,
      "title": "Quantum Computing Revolution",
      "description": "Quantum computers can solve problems in seconds that would take classical computers millions of years! Google’s quantum computer, Sycamore, once performed a calculation in 200 seconds that the world’s fastest supercomputer would need 10,000 years to complete!"
    },
    {
      "id": 3,
      "title": "AI Creating Art & Music",
      "description": "AI-generated art has sold for millions! In 2018, a painting made by an AI called Edmond de Belamy was auctioned for $432,500. AI can also compose music—Beethoven’s unfinished 10th Symphony was completed by an AI in 2021!"
    },
    {
      "id": 4,
      "title": "5G & 6G: The Speed Race",
      "description": "5G is fast, but 6G could be 100 times faster, allowing holographic calls in real time! Scientists even predict that 6G may use human bodies as antennas, turning us into living signal boosters!"
    },
    {
      "id": 5,
      "title": "The First Aircraft on Mars",
      "description": "NASA’s Ingenuity helicopter flew on Mars using blades that spin 5 times faster than Earth’s helicopters due to the thin atmosphere! If you could run on Mars, you’d jump three times higher than on Earth!"
    },
    {
      "id": 6,
      "title": "The Search for Alien Life",
      "description": "Astronomers have found over 5,000 exoplanets, some in the habitable zone where life might exist! The James Webb Space Telescope is scanning these worlds for biosignatures—gases that hint at alien life!"
    },
    {
      "id": 7,
      "title": "Self-Healing Materials",
      "description": "Scientists have created materials that can repair themselves, much like human skin! Future smartphones could heal their own cracks, and buildings might automatically fix structural damage."
    },
    {
      "id": 8,
      "title": "Electric Planes: The Future of Aviation",
      "description": "Electric planes could reduce carbon emissions from air travel by 90%! NASA is testing the X-57 Maxwell, an all-electric aircraft that runs on batteries instead of jet fuel."
    },
    {
      "id": 9,
      "title": "Holographic Displays",
      "description": "Holograms aren’t just for sci-fi movies! Researchers are developing true 3D holographic displays that don’t need special glasses, revolutionizing entertainment, education, and even medical imaging."
    },
    {
      "id": 10,
      "title": "Quantum Internet: Unhackable Network",
      "description": "China’s Micius satellite has demonstrated quantum communication, making data transmission theoretically unhackable! A future quantum internet could provide total security for banking and government communications."
    },
    {
      "id": 11,
      "title": "AI-Powered Doctors",
      "description": "AI can now diagnose diseases from medical scans with 95% accuracy, sometimes even outperforming human doctors! Could AI-assisted healthcare soon become the norm?"
    },
    {
      "id": 12,
      "title": "Bioprinting Human Organs",
      "description": "Using 3D printing and living cells, scientists are creating human organs like kidneys and hearts! In the future, transplant patients might receive fully lab-grown organs instead of donor ones."
    },
    {
      "id": 13,
      "title": "Brain-Computer Interfaces",
      "description": "Neuralink is working on brain chips that could let people control devices with their thoughts! In the future, BCIs might even allow us to store and replay memories."
    },
    {
      "id": 14,
      "title": "Underwater Cities of the Future",
      "description": "With rising sea levels, architects are designing futuristic underwater cities! These self-sustaining habitats could house thousands of people beneath the ocean’s surface."
    },
    {
      "id": 15,
      "title": "The Future of Space Travel",
      "description": "NASA and SpaceX are working on nuclear-powered spacecraft that could reach Mars in just 45 days! Could interstellar travel be just around the corner?"
    },
    {
      "id": 16,
      "title": "Robotic Swarms",
      "description": "Inspired by ants and bees, robotic swarms can work together to build structures, explore planets, and even assist in disaster rescue operations!"
    },
    {
      "id": 17,
      "title": "Living Robots: Xenobots",
      "description": "Scientists have created tiny living robots called Xenobots from frog cells! These self-healing bio-machines could one day help clean microplastics from oceans or even deliver medicine inside our bodies."
    },
    {
      "id": 18,
      "title": "DNA Data Storage",
      "description": "A single gram of DNA can store **215 petabytes** of data! Future computers may use DNA as a storage medium, making hard drives obsolete!"
    },
    {
      "id": 19,
      "title": "Fusion Power: Unlimited Energy",
      "description": "Nuclear fusion, the process that powers the sun, could provide clean, limitless energy! Scientists have achieved brief fusion reactions—longer ones could revolutionize global energy production."
    },
    {
      "id": 20,
      "title": "Teleportation: Quantum Entanglement",
      "description": "Teleportation isn’t just science fiction! Scientists have successfully 'teleported' quantum particles over 100 kilometers. Could human teleportation become a reality one day?"
    }
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
  const ASCII_SHIFT = randomEquationProblem.answer % 26;

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
