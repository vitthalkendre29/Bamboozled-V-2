import { equationProblems } from './equation.js';
import { paragraphProblems } from './paragraph.js';

console.log(equationProblems, paragraphProblems);


document.addEventListener("DOMContentLoaded", function () {
    let nameofplayer = localStorage.getItem("playername");
    console.log("playername:", nameofplayer);
    const inputField = document.getElementById("modifiedInput");
    let currentLevel = 1; // Default to level 1
    const ASCII_SHIFT = 3;
    let timeLeft = 30; // 5 minutes in seconds
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
        let filenamestring=nameofplayer || "solution"
        let transformedText = inputField.value;
        let fileType = document.getElementById("fileType").value;
        let fileContent = "";
        let filename = `${filenamestring}.` + fileType;

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