// Define problem sets
const paragraphProblems = [
    {
        id: 1,
        title: "Black Holes: Cosmic Mysteries",
        description: "Black holes are incredibly dense regions of space where gravity is so strong that nothing, not even light, can escape. They typically form when massive stars collapse at the end of their life cycle. The first real image of a black hole was captured in 2019 by the Event Horizon Telescope, a breakthrough that confirmed many long-held theories. Some scientists hypothesize that black holes could act as gateways, or wormholes, to other universes, opening up endless possibilities for understanding parallel worlds or even time travel. While the nature of black holes remains one of the greatest mysteries in astrophysics, ongoing research may soon shed light on their true role in the cosmos."
    },
    {
        id: 2,
        title: "Quantum Computing Revolution",
        description: "Quantum computing represents a revolutionary shift in how we process information. Unlike traditional computers, which use binary bits (either 0 or 1), quantum computers use QUBITS, which can exist in multiple states at once due to a property called superposition. This allows quantum computers to solve certain complex problems much faster than classical computers. Major companies, like IBM and Google, are at the forefront of developing practical quantum computers that could one day revolutionize fields such as cryptography, material science, and artificial intelligence. However, with this power comes the potential to break current encryption systems, meaning quantum computing could require new cybersecurity techniques to protect sensitive information."
    },
    {
        id: 3,
        title: "AI Creating Art & Music",
        description: "Artificial intelligence has made huge strides in creative fields, with AI now capable of producing stunning visual art, composing music, and even generating entire films. Tools such as DALL·E and Stable Diffusion allow users to create detailed, realistic images from text prompts, while AI music composers can generate entire soundtracks in various styles, mimicking famous artists or creating new genres. However, this raises profound ethical questions: if machines can create art and music, what does it mean for human creativity? Will AI enhance the artistic process by providing new tools, or will it replace human artists entirely? As AI continues to evolve, it may fundamentally change how we think about creativity, authorship, and originality."
    },
    {
        id: 4,
        title: "5G & 6G: The Speed Race",
        description: "The advent of 5G technology has revolutionized mobile networks, offering ultra-fast internet speeds, low latency, and the ability to connect a massive number of devices. This has enabled advancements such as real-time augmented reality (AR), self-driving cars, and smart cities. But the development doesn't stop with 5G—scientists are already working on 6G, which promises to be up to *1000 times faster* than its predecessor. 6G will pave the way for technologies such as instant holographic communication, where video calls could become immersive 3D experiences. With the exponential growth of data and the increasing demand for faster connections, 6G could have a transformative impact on industries ranging from healthcare to entertainment, revolutionizing how we interact with technology."
    },
    {
        id: 5,
        title: "Brain-Computer Interfaces",
        description: "Brain-computer interfaces (BCIs) have the potential to drastically change how we interact with technology. Companies like Neuralink are developing brain chips that could allow individuals to control devices with their thoughts, which would be life-changing for people with disabilities, such as paralysis. Imagine a future where BCIs not only help people regain lost abilities, but also enable new forms of communication, such as *telepathic communication, or even the ability to **store memories* digitally. However, this rapidly advancing technology also presents serious ethical concerns. Issues like privacy, mental manipulation, and the potential for misuse raise critical questions about how we ensure the responsible use of such groundbreaking innovations."
    },
    {
        id: 6,
        title: "The First Aircraft on Mars",
        description: "In 2021, NASA's *Ingenuity helicopter* made history as the first aircraft to ever fly on another planet—Mars. Originally designed to complete only five flights, Ingenuity has far surpassed expectations, completing over 70 flights and providing invaluable data to assist the Perseverance rover in its mission to explore the Martian surface. This breakthrough opens the door to aerial exploration on other planets, where flying vehicles could access areas that are difficult for rovers to reach. The success of Ingenuity on Mars could lead to similar technologies being deployed on moons like Titan, Saturn’s largest moon, where flying drones could help explore the thick atmosphere and unknown terrains."
    },
    {
        id: 7,
        title: "Quantum Internet: Unhackable Network",
        description: "The concept of a quantum internet could radically change how we approach online security. Unlike classical encryption, which relies on complex algorithms to protect data, quantum encryption uses *entangled particles* to transmit information. These entangled particles are linked in such a way that any attempt to intercept the data would disturb the particles, making it immediately detectable. This makes quantum communication virtually unhackable. China’s successful launch of the 'Micius' satellite, which enabled secure quantum communication, shows the potential of this technology. If developed further, the quantum internet could revolutionize fields like banking, national security, and privacy, offering unbreachable security for sensitive data."
    },
    {
        id: 8,
        title: "Self-Healing Materials",
        description: "Imagine materials that can repair themselves when damaged—this is the promise of self-healing materials. Inspired by natural processes like how human skin heals after an injury, these materials are designed to automatically restore their structure when cracked or broken. Such materials could revolutionize industries like construction, electronics, and aerospace. For given, self-healing materials could be used in smartphones, repairing their own cracks, or in airplanes, where the wings could regenerate during flight, improving safety and reducing maintenance costs. As the technology progresses, these materials could lead to a world where objects last longer, waste is reduced, and repair costs are significantly lowered."
    },
    {
        id: 9,
        title: "The Search for Alien Life",
        description: "One of humanity’s most profound questions—are we alone in the universe? NASA’s *James Webb Space Telescope* is helping to answer this by scanning distant exoplanets for signs of life, specifically looking for biosignatures—gases like oxygen and methane, which are often associated with living organisms. Scientists are particularly interested in moons such as Europa and Enceladus, which are believed to have subsurface oceans beneath their icy crusts. These moons may harbor microbial life, and studying them could bring us closer to understanding the potential for life beyond Earth. The search for alien life could fundamentally change our understanding of life, the universe, and our place within it."
    },
    {
        id: 10,
        title: "The Future of Space Travel",
        description: "The future of space travel is becoming more exciting by the day. SpaceX’s *Starship* is designed to make human missions to Mars a reality, with the potential for full colonization of the Red Planet. NASA’s *Artemis missions* aim to establish a permanent human presence on the Moon, serving as a stepping stone for further space exploration. Meanwhile, scientists are exploring theoretical concepts like *warp drives*, which could enable faster-than-light travel. Such technologies could one day make interstellar travel a possibility, allowing us to explore distant star systems and even habitable planets light-years away. The future of space exploration is truly limitless."
    },
    {
        id: 11,
        title: "AI-Powered Doctors",
        description: "Artificial intelligence is transforming the field of healthcare, with AI systems now able to diagnose diseases and analyze medical data faster and more accurately than humans. Machine learning algorithms are particularly effective at analyzing medical imaging, detecting signs of cancers, and predicting patient outcomes based on vast amounts of medical data. In the future, AI could assist in surgeries, personalize treatments based on genetic data, and even manage complex healthcare systems. However, the rise of AI in medicine raises concerns about the role of human doctors, data privacy, and the potential for errors in AI-driven decisions that could impact patient care."
    },
    {
        id: 12,
        title: "Electric Planes: The Future of Aviation",
        description: "Electric aviation is gaining momentum as a solution to reduce the carbon footprint of air travel. Companies like *Airbus* and *Boeing* are developing electric planes that rely on batteries rather than traditional jet fuel. These planes promise to be *quieter* and *more environmentally friendly, emitting fewer greenhouse gases. In the near future, short to medium-haul flights could be powered entirely by electricity, drastically reducing aviation’s environmental impact. This shift to electric planes could also pave the way for **zero-emission flights*, transforming the global aviation industry and helping to combat climate change."
    },
    {
        id: 13,
        title: "Bioprinting Human Organs",
        description: "Bioprinting is a groundbreaking technology that uses 3D printing to create human tissues and organs. By printing cells layer by layer, scientists are now able to produce functional tissues such as skin, cartilage, and even kidneys. This innovation could potentially end organ shortages and drastically reduce the need for organ donors. By using a patient’s own cells, bioprinting can create organs that are custom-designed to avoid rejection. This technology has the potential to *save millions of lives* in the future by providing an endless supply of organs for transplant, as well as creating personalized treatments for various medical conditions."
    },
    {
        id: 14,
        title: "Holographic Displays",
        description: "Holographic displays are set to revolutionize how we interact with digital media. Unlike traditional flat-screen displays, holograms project 3D images into space, allowing viewers to experience visuals in three dimensions. Researchers are developing true 3D holographic displays that can be seen from different angles without the need for special glasses or headsets. In the future, these displays could replace traditional screens in smartphones, TVs, and even video conferences, offering a more immersive and interactive way to view content. As the technology advances, holograms could become the new standard for everything from entertainment to education and even medical imaging."
    }
];


const equationProblems = [
    {
      "id": 1,
      "title": " Find the smallest digit in a number",
      "description": "Find the smallest digit in a given number and square to that number.",
      "given": "Input: n = 295 ",
      "answer": 4
    },
    {
      "id": 2,
      "title": " Find the largest digit in a number",
      "description": "Find the largest digit in a given number.",
      "given": "Input: n = 682 ",
      "answer": 8
    },
    {
      "id": 3,
      "title": " Count the number of digits in a number",
      "description": "Count how many digits are in a given number.",
      "given": "Input: n = 543278 ",
      "answer": 6
    },
    {
      "id": 4,
      "title": " Find the sum of the first N natural numbers",
      "description": "Find the sum of the first N natural numbers.",
      "given": "Input: n = 5 ",
      "answer": 15
    },
    {
      "id": 5,
      "title": " Find the 3rd multiple of a given number",
      "description": "Find the 3rd multiple of the given number.",
      "given": "Input: n = 4 ",
      "answer": 12
    },
    {
      "id": 6,
      "title": " Find the difference between the largest and smallest digit",
      "description": "Find the difference between the largest and smallest digit in the number.",
      "given": "Input: n = 938 ",
      "answer": 6
    },
    {
      "id": 7,
      "title": " Find the last digit of a number",
      "description": "Find the last digit of the given number.",
      "given": "Input: n = 987 ",
      "answer": 7
    },
    {
      "id": 8,
      "title": " Find the first digit of a number",
      "description": "Find the first digit of the given number.",
      "given": "Input: n = 754 ",
      "answer": 7
    },
    {
      "id": 9,
      "title": " Count the number of factors of a number",
      "description": "Count how many factors the given number has.",
      "given": "Input: n = 10 ",
      "answer": 4
    },
    {
      "id": 10,
      "title": " Find the second largest digit in a number",
      "description": "Find the second largest digit in the number.",
      "given": "Input: n = 456 ",
      "answer": 5
    },
    {
      "id": 11,
      "title": " Find the product of the digits of a number",
      "description": "Find the product of the digits in the number.",
      "given": "Input: n = 234 ",
      "answer": 24
    },
    {
      "id": 12,
      "title": " Find the sum of even digits in a number",
      "description": "Find the sum of all even digits in the number.",
      "given": "Input: n = 1234 ",
      "answer": 6
    },
    {
      "id": 13,
      "title": " Find the sum of odd digits in a number",
      "description": "Find the sum of all odd digits in the number.",
      "given": "Input: n = 1234 ",
      "answer": 4
    },
    {
      "id": 14,
      "title": " Count the number of odd digits in a number",
      "description": "Count how many odd digits are in the number and square to it.",
      "given": "Input: n = 13579 ",
      "answer": 25
    },
    {
      "id": 15,
      "title": " Count the number of even digits in a number",
      "description": "Count how many even digits are in the number.",
      "given": "Input: n = 2468 ",
      "answer": 4
    },
    {
      "id": 16,
      "title": " Find the 4th power of a given number",
      "description": "Find the 4th power of the given number and squareroot of the answer.",
      "given": "Input: n = 2 ",
      "answer": 4
    },
    {
      "id": 17,
      "title": " Find the 3rd power of a given number",
      "description": "Find the 3rd power of the given number.",
      "given": "Input: n = 3 ",
      "answer": 27
    },
    {
      "id": 18,
      "title": " Find the sum of the first and last digit",
      "description": "Find the sum of the first and last digit of the number.",
      "given": "Input: n = 246 ",
      "answer": 8
    },
    {
      "id": 19,
      "title": " Subtract the last digit from the first digit",
      "description": "Subtract the last digit from the first digit of the number.",
      "given": "Input: n = 764 ",
      "answer": 3
    }
];
document.addEventListener("DOMContentLoaded", function () {
    let nameofplayer = localStorage.getItem("playername");
    console.log("playername:", nameofplayer);
    const inputField = document.getElementById("modifiedInput");
    let currentLevel = 1; // Default to level 1
    let timeLeft = 120; // 5 minutes in seconds
    let completedtime=timeLeft;
    let downloadAttempted = false;
    let downloadAttemptedandretry=false;
    
    // Function to get a random item from an array
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    // Select one random problem from each category
    const randomEquationProblem = getRandomItem(equationProblems);
    const randomParagraphProblem = getRandomItem(paragraphProblems);

    randomParagraphProblem
    
    // Display the selected random problems
    const problemContainer = document.getElementById('problemContainer');
    problemContainer.innerHTML = '';
    
    // Create and append equation problem card
    const equationCard = document.createElement('div');
    equationCard.className = 'problem-card';
    equationCard.innerHTML = `
        <h3>Clue ${randomEquationProblem.id}: ${randomEquationProblem.title}</h3>
        <p>${randomEquationProblem.description}</p>
        <div class="given">
            <p><strong>Input:</strong> ${randomEquationProblem.given}</p>
        </div>
    `;
    problemContainer.appendChild(equationCard);
    
    // Create and append paragraph problem card
    const paragraphCard = document.createElement('div');
    paragraphCard.className = 'problem-card';
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
                if (char.match(new RegExp(`[${String.fromCharCode(122 - ASCII_SHIFT + 1)}-z${String.fromCharCode(90 - ASCII_SHIFT + 1)}-Z]`))) {
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
        document.getElementById("timer").innerText = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft === 0) {
            if(!downloadAttempted){
                disableInputAndDownload();
            }else{
                
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
            event.returnValue = "You have an active session. Are you sure you want to leave?";
        }
    });

    document.addEventListener("keydown", function (event) {
        if ((event.key === "F5") || (event.ctrlKey && event.key === "r")) {
            event.preventDefault();
        }
    });

    window.onload = updateTimer;

    function disableInputAndDownload() {
        inputField.disabled = true;
        document.querySelector("button").disabled = true;
        createFile();
        document.getElementById("modifiedInput").value = "Wait till time is up for other players!";
    }



    function handleDownload() {
        if (timeLeft > 0 && !downloadAttempted) {
            let userChoice = confirm("You are downloading before time ends. \nChoose an option:\n\nOK : Try again\nCancel : Completed! Wait until other ends.");
            if (!userChoice) {
                downloadAttempted= true;
                disableInputAndDownload();  
                return;
            }else{
                downloadAttemptedandretry=true;
            }
        }
        createFile();
    }
    


    function createFile() {
        let transformedText = inputField.value;
        let filenamechange=nameofplayer || "solution"
        let fileType = document.getElementById("fileType").value;
        let fileContent = "";
        let filename = `${filenamechange}.` + fileType;

        let elapsedTime = completedtime - timeLeft; // Convert back to time elapsed
        let minutes = Math.floor(elapsedTime / 60);
        let seconds = elapsedTime % 60;
        let timestamp = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}\n---\nOriginal:\n${randomParagraphProblem.description}\n---\nUser:\n`;


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

    document.getElementById("downloadBtn").addEventListener("click", handleDownload);

    document.addEventListener("copy", function(e) { e.preventDefault(); });
    document.addEventListener("cut", function(e) { e.preventDefault(); });
    document.addEventListener("paste", function(e) { e.preventDefault(); });
    document.addEventListener("keydown", function (event) {
        if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
            event.preventDefault();
        }
    });    
});