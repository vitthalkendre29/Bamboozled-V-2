// Define problem sets
const paragraphProblems = [
    {
        id: 5,
        title: "Text Analysis",
        description: "Write a program that analyzes a text passage to count the frequency of each word, identify the most common words, and calculate the average word length. The program should be case-insensitive and ignore punctuation. Additionally, implement a feature to identify sentences with more than 20 words, as these may be candidates for simplification. Your solution should efficiently handle large texts and provide a summary report with the following metrics: total word count, unique word count, average word length, most frequent words (top 5), longest word, and a list of potentially complex sentences.",
    },
    {
        id: 6,
        title: "Data Compression Algorithm",
        description: "Design and implement a lossless data compression algorithm that can efficiently compress and decompress text files. Your algorithm should achieve a balance between compression ratio and processing speed. The implementation should include both compression and decompression functions, handle various types of input texts (including binary data represented as text), and provide metrics about the compression performance. Documentation should explain the approach, the time and space complexity of your algorithm, and compare its performance against standard compression algorithms like Huffman coding or LZW compression. Bonus points for implementing multiple compression techniques and allowing the user to choose between them based on their priorities.",
    },
    {
        id: 7,
        title: "Path Finding Algorithm",
        description: "Implement a pathfinding algorithm to find the shortest path between two points in a 2D grid that contains obstacles. The grid is represented as a matrix where 0 indicates a free cell and 1 indicates an obstacle. The algorithm should efficiently find the shortest path from a starting position to a target position, avoiding all obstacles. Your implementation should include at least two different pathfinding algorithms (e.g., A*, Dijkstra's, BFS) and compare their performance in terms of execution time and path optimality. The solution should visualize the grid, the obstacles, and the computed path. Additionally, implement a feature that allows for diagonal movement with a customizable cost factor.",
    },
    {
        id: 8,
        title: "Natural Language Processing",
        description: "Develop a program that performs sentiment analysis on text input, classifying it as positive, negative, or neutral. Your solution should use a combination of lexicon-based approaches and basic machine learning techniques. The program should preprocess the text (removing stopwords, stemming, tokenization), extract relevant features, and apply a classification algorithm. Include a training mode where the system can learn from labeled examples and improve its accuracy over time. Your implementation should provide not just the overall sentiment score but also identify the most influential words or phrases that contributed to the classification. Additionally, create a simple mechanism to handle negations and intensifiers in the text, as they can significantly alter the sentiment.",
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
    let downloadAttempted = false;

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const randomEquationProblem = getRandomItem(equationProblems);
    const randomParagraphProblem = getRandomItem(paragraphProblems);

    const problemContainer = document.getElementById('problemContainer');
    problemContainer.innerHTML = '';

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
            disableInputAndDownload();
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
        document.querySelector("#downloadBtn").disabled = true;
        createFile();
        document.getElementById("modifiedInput").value = "Wait till time is up for other players!";
    }

    function handleDownload() {
        if (timeLeft > 0 && !downloadAttempted) {
            let userChoice = confirm("You are downloading before time ends. \nChoose an option:\n\nOK : Try again\nCancel : Completed! Wait until other ends.");

            if (!userChoice) {
                downloadAttempted = true;
                disableInputAndDownload();  
                return;
            }
        }

        createFile();
    }

    function createFile() {
        let transformedText = inputField.value;
        let fileType = document.getElementById("fileType").value;
        let fileContent = "";
        let filename = "solution." + fileType;

        let elapsedTime = 300 - timeLeft; 
        let minutes = Math.floor(elapsedTime / 60);
        let seconds = elapsedTime % 60;
        let timestamp = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}\n---\nOriginal:\n${randomParagraphProblem.description}\n---\nUser:\n`;

        switch (fileType) {
            case "txt":
                fileContent = `${timestamp}${transformedText}`;
                break;
            case "cpp":
                fileContent = `// ${timestamp}\n#include <iostream>\nusing namespace std;\n\n${transformedText}`;
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

    document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey || e.metaKey) && ["c", "v", "x"].includes(e.key)) {
            e.preventDefault();
        }
    });
});

