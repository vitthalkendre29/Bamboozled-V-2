// Define problem sets
const paragraphProblems = [
    {
        id: 1,
        title: "Black Holes: Cosmic Mysteries",
        description: "Black holes are extremely dense regions where gravity is so strong that even light can't escape! They form when massive stars collapse under their own gravity. The first real black hole image was captured in 2019. Some theories suggest black holes might be wormholes to other universes. Could they be portals to unknown dimensions?"
    },
    {
        id: 2,
        title: "Quantum Computing Revolution",
        description: "Quantum computers use QUBITS, which can exist in multiple states at once, unlike classical bits. This allows them to solve complex problems much faster than traditional computers. Companies like IBM and Google are racing to make quantum computing practical. However, they could break current encryption, demanding new security methods!"
    },
    {
        id: 3,
        title: "AI Creating Art & Music",
        description: "AI can now generate art, music, and even full movies! Tools like DALL·E and Stable Diffusion create realistic images from text prompts. AI music composers can generate songs in different styles. However, this raises ethical concerns—will AI replace human creativity, or will it enhance it?"
    },
    {
        id: 4,
        title: "5G & 6G: The Speed Race",
        description: "5G delivers ultra-fast internet, reducing latency to just 1 ms. It enables real-time AR, self-driving cars, and smart cities. But 6G, expected by 2030, will be **1000x faster!** Scientists predict 6G will enable instant holographic communication. Imagine video calls with full 3D holograms!"
    },
    {
        id: 5,
        title: "Brain-Computer Interfaces",
        description: "Neuralink is developing brain chips that could let people control devices with their minds! This could help paralyzed patients regain movement. Future BCIs might allow **memory storage and telepathic communication!** However, ethical concerns include privacy risks and potential mind manipulation."
    },
    {
        id: 6,
        title: "The First Aircraft on Mars",
        description: "NASA’s **Ingenuity helicopter** made history as the first aircraft to fly on another planet. Originally designed for 5 flights, it has completed over 70! It helps the Perseverance rover explore Mars. This technology could lead to **flying drones on other planets like Titan!**"
    },
    {
        id: 7,
        title: "Quantum Internet: Unhackable Network",
        description: "The Quantum Internet will use **entangled particles** to make hacking impossible! China’s quantum satellite 'Micius' has already enabled secure communication. This could revolutionize banking, national security, and cybersecurity. In the future, traditional encryption may become obsolete!"
    },
    {
        id: 8,
        title: "Self-Healing Materials",
        description: "Scientists are developing **self-healing** materials that repair themselves when damaged! Inspired by human skin, these materials could revolutionize construction, electronics, and even spacecraft. Imagine smartphones that fix their cracks or aircraft wings that heal in mid-air!"
    },
    {
        id: 9,
        title: "The Search for Alien Life",
        description: "NASA’s **James Webb Space Telescope** is scanning exoplanets for signs of life. Scientists are studying 'biosignatures'—gases like oxygen and methane that indicate life. Some believe Europa and Enceladus, moons of Jupiter and Saturn, may harbor alien microbes in their underground oceans!"
    },
    {
        id: 10,
        title: "The Future of Space Travel",
        description: "SpaceX's **Starship** aims to make human travel to Mars a reality. NASA plans a permanent base on the Moon through **Artemis missions**. Scientists are also exploring **warp drives**—theoretical engines that could make faster-than-light travel possible!"
    },
    {
        id: 11,
        title: "AI-Powered Doctors",
        description: "AI is transforming medicine by diagnosing diseases faster than human doctors. Machine learning models analyze X-rays, detect cancers, and predict patient outcomes. In the future, AI could assist in surgeries and even create personalized treatments based on DNA!"
    },
    {
        id: 12,
        title: "Electric Planes: The Future of Aviation",
        description: "Companies like **Airbus and Boeing** are developing electric planes to reduce carbon emissions! These aircraft use batteries instead of fuel, making air travel **greener**. Future advancements could lead to **silent, zero-emission flights across the world!**"
    },
    {
        id: 13,
        title: "Bioprinting Human Organs",
        description: "Scientists are 3D printing **human tissues and organs!** Using stem cells, they can create skin, cartilage, and even functional kidneys. This technology could end organ donor shortages and **save millions of lives in the future!**"
    },
    {
        id: 14,
        title: "Holographic Displays",
        description: "Forget screens—**holograms** are coming! Researchers are developing true 3D holographic displays, allowing images to float in mid-air. Future smartphones and TVs could be screenless, displaying images in full 3D space!"
    },
    {
        id: 15,
        title: "The Power of CRISPR Gene Editing",
        description: "CRISPR allows scientists to **edit DNA**, potentially curing genetic diseases like sickle cell anemia. It could even eliminate inherited disorders before birth. However, ethical debates arise—should we **design** our future children’s genes?"
    },
    {
        id: 16,
        title: "Teleportation: A Step Closer?",
        description: "Quantum teleportation isn’t science fiction—it’s real! Scientists have successfully **teleported photons** over long distances. While we can't teleport humans yet, quantum teleportation could revolutionize computing and secure communication!"
    },
    {
        id: 17,
        title: "Solar Power from Space",
        description: "Satellites could soon **beam solar energy** from space to Earth using microwaves! Unlike ground solar panels, space-based solar power works 24/7, producing **unlimited clean energy**. This could solve the world's energy crisis!"
    },
    {
        id: 18,
        title: "The Rise of Smart Dust",
        description: "**Smart dust**—tiny, wireless sensors the size of grains of sand—can collect data from anywhere! These microscopic sensors could monitor **pollution, track disease outbreaks, and even spy in military operations!**"
    },
    {
        id: 19,
        title: "AI Chatbots Becoming Sentient?",
        description: "Advanced AI chatbots like **ChatGPT and Google's Bard** can hold conversations like humans! Some experts warn that as AI learns, it might develop emotions and consciousness. Could AI ever gain **self-awareness?**"
    },
    {
        id: 20,
        title: "Underwater Cities of the Future",
        description: "With rising sea levels, architects are designing **underwater cities**! Japan is building **Ocean Spiral**, a city beneath the waves. These futuristic cities could house thousands, using **hydrothermal energy** for power!"
    }
];


const equationProblems = [
    {
        id: 1,
        title: "Linear Equation Solver",
        description: "Write a program to solve a system of linear equations using Cramer's rule: ax + by = c and dx + ey = f.",
        example: "Input: a=2, b=3, c=8, d=1, e=1, f=4 → Output: x=1, y=2"
    },
    {
        id: 2,
        title: "Quadratic Equation Solver",
        description: "Write a program to find the roots of a quadratic equation ax² + bx + c = 0 using the quadratic formula.",
        example: "Input: a=1, b=-5, c=6 → Output: x=2, x=3"
    },
    {
        id: 3,
        title: "Matrix Multiplication",
        description: "Write a program to multiply two matrices A and B and return the resulting matrix C.",
        example: "Input: A=[[1,2],[3,4]], B=[[5,6],[7,8]] → Output: C=[[19,22],[43,50]]"
    },
    {
        id: 4,
        title: "Differential Equation",
        description: "Write a program to solve the first-order ordinary differential equation dy/dx = f(x,y) using the Euler method.",
        example: "Input: dy/dx = x + y, y(0) = 1, step size = 0.1, interval [0,1] → Output: y(1) ≈ 4.7"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("modifiedInput");
    let currentLevel = 1; // Default to level 1
    const ASCII_SHIFT = 1;
    let timeLeft = 20; // 5 minutes in seconds
    let completedtime=timeLeft;
    let downloadAttempted = false;
    let downloadAttemptedandretry = false;
    
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
        <h3>Problem ${randomEquationProblem.id}: ${randomEquationProblem.title}</h3>
        <p>${randomEquationProblem.description}</p>
        <div class="example">
            <p><strong>Example:</strong> ${randomEquationProblem.example}</p>
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

    function download(){
        createFile();
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
        let fileType = document.getElementById("fileType").value;
        let fileContent = "";
        let filename = "solution." + fileType;

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