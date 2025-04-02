// Define problem sets
const paragraphProblems =[
  {
    "id": 1,
    "title": "Bl@ck H0l3s: C0$mic Myst3r!es",
    "description": "Did y0u kn0w th@t bl@ck h0les c@N 'sp@gh3tt!fy' 0bjects? If y0u g0t t00 cl0se, the intense gr@v!t@t!0n@l pull w0uld str3tch y0u like @ n00dle! The l@rgest kn0wn bl@ck h0le, T0N 618, h@s @ m@$$ 0f 40 B!LL!0N suns. Th3se c0smic d3v0urers @ls0 em!t H@wk!ng r@d!@t!0n, sl0wly ev@p0r@t!ng 0ver tr!ll!0ns 0f y3@rs. S0me bl@ck h0l3s @re @ctu@lly 'qu!3t' wh!le 0th3rs @re 'f33d!ng', cre@t!ng br!ll!@nt qu@s@rs v!s!bl3 @cr0ss the un!v3rs3."
  },
  {
    "id": 2,
    "title": "Qu@ntum C0mput!ng Rev0luti0n",
    "description": "Qu@ntum c0mputers c@n s0lve pr0blems in s3c0nds th@t w0uld t@ke cl@ssic@l c0mputers m!ll!0ns 0f y3ars! G00gle's Qu@ntum C0mputer, Sycam0re, perf0rmed @ c@lcul@t!0n in 200 sec0nds th@t w0uld t@ke @ superc0mputer 10,000 y3ars! Qu@ntum b!ts 0r 'qub!ts' c@n ex!st !n mult!ple st@tes s!mult@ne0usly, un!lke cl@ss!c@l b!ts. Sc!ent!sts @re r@c!ng t0 bu!ld m0re st@ble qu@ntum syst3ms th@t c0uld rev0lut!0n!ze crypt0gr@phy, drug d!sc0very, @nd cl!m@te m0del!ng."
  },
  {
    "id": 3,
    "title": "AI Cr3@t!ng @rt & Mus!c",
    "description": "AI-gener@ted @rt h@s s0ld f0r m!ll!0ns! In 2018, @ p@int!ng by @N AI c@lled Edm0nd de Bel@my w@s @uct!0ned f0r $432,500. AI @lso c0mp0sed B3eth0ven's unf!n!shed 10th Symph0ny. The l@test AI m0d3ls c@n n0w gen3r@te @m@z!ng @rt fr0m s!mple t3xt descr!pt!0ns, bl3nd!ng styl3s @nd c0nc3pts !n w@ys n3v3r s33n b3f0re. M@ny @rt!sts @re c0ll@b0r@t!ng w!th th3se AI syst3ms t0 cre@te hypr!d w0rks th@t push cr3@t!ve b0und@r!es."
  },
  {
    "id": 4,
    "title": "5G & 6G: The Sp33d R@c3",
    "description": "5G !s f@st, but 6G c0uld b3 100 t!m3s f@st3r! It c0uld @ll0w h0l0gr@ph!c c@lls in r3@l t!me. Sc!ent!sts even pr3d!ct th@t 6G m@y use hum@n b0d!es @s @ntenna$. Th!s next-gen3r@t!0n n3tw0rk c0uld 0p3r@te @t ter@h3rtz fr3qu3nc!es, en@bl!ng b@ndw!dth th@t m@kes t0d@y's f@st3st c0nn3cti0ns s33m l!ke d!@l-up. 6G c0uld un!fy c0mput!ng, c0mmun!c@t!0ns, sens!ng, @nd AI !nt0 0ne s3@ml3ss exp3r!enc3."
  },
  {
    "id": 5,
    "title": "The F!rst A!rcraft 0n M@rs",
    "description": "NASA's Ing3nu!ty h3l!c0pt3r fl3w 0n M@rs w!th bl@d3s th@t sp!n 5 t!m3s f@st3r du3 t0 the th!n @tm0sph3re. If y0u c0uld run 0n M@rs, y0u'd jump 3X h!gh3r! Ing3nu!ty h@s f@r exc33d3d !ts pl@nn3d m!ss!0n dur@t!0n, c0nt!nu!ng t0 fl0@t @b0ve the r3d pl@n3t's surf@ce f0r re35@rch @nd exp1or@t!0n. Its succ3ss h@s sp@wn pl@ns f0r m0re @dv@nc3d fly!ng m@ch!n3s 0n futur3 M@rt!@n m!ss!0ns."
  },
  {
    "id": 6,
    "title": "The S3@rch f0r @l!en L!fe",
    "description": "Astr0n0mers h@ve f0und 5,000+ ex0pl@nets! The J@mes Webb T3l3sc0pe is sc@nn!ng f0r b!0s!gn@tures—g@s3s th@t m@y h!nt @t extr@t3rrestr!@l l!fe. G@s3s l!k3 m3th@ne, 0xygen, @nd c@rb0n d!0x!de !n sp3c!f!c c0mb!n@t!0ns c0uld !nd!c@te b!0l0g!c@l pr0cesses. The m0st pr0m!s!ng c@nd!d@t3s f0r l!fe @r3 w@tery w0rlds 0rb!t!ng !n the 'h@b!t@ble z0ne' 0f th3!r st@rs."
  },
  {
    "id": 7,
    "title": "S3lf-H3@l!ng M@ter!@ls",
    "description": "Sc!ent!sts h@ve dev3l0p3d m@ter!@ls th@t rep@!r thems3lves—l!ke hum@n sk!n! Futur3 sm@rtph0nes m@y he@l th3!r 0wn scr@tches. Th3se !nn0v@t!ve m@t3r!@ls c0nt@!n m!cr0c@psules f!ll3d w!th he@l!ng @g3nts th@t r3le@se wh3n d@m@ge 0ccurs. S0me s3lf-he@l!ng c0ncr3te c0nt@!ns b@ct3r!@ th@t pr0duc3 l!mestone wh3n exp0s3d t0 w@t3r, f!ll!ng !n cr@cks @ut0m@t!c@lly."
  },
  {
    "id": 8,
    "title": "El3ctr!c Pl@nes: The Futur3",
    "description": "El3ctr!c pl@nes c0uld r3duc3 @!r tr@vel em!ss!0ns by 90%! NASA's X-57 M@xw3ll runs 0n b@tt3r!3s inste@d 0f j3t fu3l. M@j0r @!rl!ne m@nuf@ctur3rs @re @lre@dy t3st!ng hybr!d-3lectr!c pr0t0typ3s f0r sh0rt-h@ul fl!ghts. S0l!d-st@te b@tt3ry t3chn0l0gy !s th3 k3y t0 m@k!ng l0ng3r-r@ng3 3lectr!c fl!ghts p0ss!ble, p0t3nt!@lly tr@nsf0rm!ng the 3nt!re @vi@t!0n !ndustry."
  },
  {
    "id": 9,
    "title": "H0l0gr@ph!c D!spl@ys",
    "description": "H0l0gr@ms @ren't just sc!-f!. Res3@rch3rs @re dev3l0p!ng r3@l 3D h0l0gr@ph!c d!spl@ys—n0 gl@ss3s needed. Thes3 d!spl@ys use l!ght f!3ld t3chn0l0gy t0 pr0j3ct !m@g3s th@t @pp3@r t0 fl0@t !n sp@c3 @nd c@n b3 v!3wed fr0m mult!ple @ngles. Future @ppl!c@t!0ns !nclude med!c@l !m@g!ng f0r surg3ry, !mm3rs!ve g@m!ng, @nd t3lec0nf3r3nc!ng wh3re p@rt!c!p@nts @pp3@r t0 b3 !n th3 s@me r00m."
  },
  {
    "id": 10,
    "title": "Qu@ntum !nt3rn3t: Unh@ck@bl3 N3tw0rk",
    "description": "Ch!n@'s M!c!us s@t3ll!t3 h@s d3m0nstr@ted qu@ntum c0mmun!c@t!0n. A futur3 qu@ntum !nt3rn3t c0uld m3@n t0t@l d@t@ s3cur!ty! Th!s n3tw0rk w0uld us3 qu@ntum 3nt@ngl3m3nt t0 d3t3ct @ny @tt3mpt t0 !nt3rc3pt d@t@, m@k!ng !t the0r3t!c@lly !mp0ss!ble t0 h@ck. Qu@ntum r3p3@t3rs @r3 b3!ng d3v3l0p3d t0 3xt3nd the r@ng3 0f th3se s3cur3 c0mmun!c@t!0ns @cr0ss c0nt!n3nts."
  },
  {
    "id": 11,
    "title": "N3ur0m0rph!c C0mput!ng Adv@nc3s",
    "description": "N3ur0m0rph!c ch!ps, !nsp!r3d by th3 hum@n br@!n, @r3 r3sh@p!ng AI pr0c3ss!ng. Th3s3 ch!ps c@n pr0c3ss d@t@ m0r3 eff!c!3ntly, l3@d!ng t0 f@st3r @nd m0r3 p0w3r-eff!c!3nt AI syst3ms. Unl!ke tr@d!t!0n@l c0mput3rs, n3ur0m0rph!c ch!ps us3 sp!ke-b@s3d c0mmun!c@t!0n s!m!l@r t0 n3ur0ns, r3qu!r!ng up t0 1000x l3ss p0w3r. Th3y exc3l @t r3@l-t!me pr0c3ss!ng 0f s3ns0ry d@t@ l!k3 v!s!0n @nd sp33ch, m@k!ng th3m !d3@l f0r 3dge d3v!c3s."
  },
  {
    "id": 12,
    "title": "P0st-Qu@ntum Crypt0gr@phy",
    "description": "W!th qu@ntum c0mput3rs p0s!ng @ thr3@t t0 tr@d!t!0n@l encrypt!0n, p0st-qu@ntum crypt0gr@phy @!ms t0 d3v3l0p secur3 c0mmun!c@t!0n m3th0ds th@t c@n w!thst@nd qu@ntum @tt@cks. NIST h@s s3l3ct3d s3v3r@l pr0m!s!ng @lg0r!thms b@s3d 0n l@tt!c3s, h@sh-b@s3d, @nd m!x3d syst3ms f0r st@nd@rd!z@t!0n. G0v3rnm3nts @nd c0mp@n!es @r3 @lr3@dy pl@nn!ng 'crypt0gr@ph!c @g!l!ty' t0 3nsur3 @ sm00th tr@ns!t!0n wh3n qu@ntum c0mput3rs b3c0me m0r3 p0w3rful."
  },
  {
    "id": 13,
    "title": "Sp@t!@l C0mput!ng Tr@nsf0rm@t!0n",
    "description": "Sp@t!@l c0mput!ng m3rg3s d!g!t@l @nd phys!c@l w0rlds, @ll0w!ng us3rs t0 !nt3r@ct w!th d!g!t@l c0nt3nt !n r3@l sp@c3, r3v0lut!0n!z!ng f!3lds l!k3 g@m!ng, educ@t!0n, @nd d3s!gn. W3@r@ble d3v!c3s w!th @dv@nc3d s3ns0rs c@n m@p y0ur surr0und!ngs @nd 0v3rl@y d!g!t@l 0bj3cts th@t !nt3r@ct w!th the phys!c@l 3nv!r0nm3nt. Th!s t3chn0l0gy w!ll ch@ng3 h0w w3 sh0p, l3@rn, @nd c0ll@b0r@t3, cr3@t!ng @ s3@ml3ss m3sh 0f v!rtu@l @nd r3@l w0rlds."
  },
  {
    "id": 14,
    "title": "Adv@nc3s !n Fusi0n En3rgy",
    "description": "R3c3nt br3@kthr0ughs !n fusi0n t3chn0l0gy br!ng us cl0s3r t0 h@rn3ss!ng cl3@n, unl!m!t3d p0w3r, m!m!ck!ng th3 pr0c3ss th@t p0w3rs th3 sun. B0th publ!c @nd pr!v@te l@bs h@ve @ch!3v3d 'n3t 3n3rgy g@!n' wh3r3 fus!0n r3@ct!0ns pr0duc3 m0r3 3n3rgy th@n w@s us3d t0 st@rt th3m. H!gh-t3mp3r@tur3 sup3rc0nduct0rs @r3 3n@bl!ng str0ng3r m@gn3t!c f!3lds f0r c0nf!n!ng the sup3rh3@t3d pl@sm@ n33d3d f0r fus!0n."
  },
  {
    "id": 15,
    "title": "Br@!n-Comput3r Int3rf@c3s Adv@nc3",
    "description": "Br@!n-Comput3r Int3rf@c3s (BCIs) @r3 d3v3l0p!ng t0 @ll0w d!r3ct c0mmun!c@t!0n b3tw33n th3 br@!n @nd d3v!c3s, p0t3nt!@lly r3st0r!ng funct!0n@l!ty f0r p@t!3nts w!th n3ur0l0g!c@l d!s0rd3rs. N0n-!nv@s!v3 BCIs us!ng EEG c@n @lr3@dy c0ntr0l c0mput3rs @nd pr0sth3t!cs thr0ugh 'th0ught' @l0n3. M0r3 @dv@nc3d !mpl@nt@bl3 d3v!c3s w!th th0us@nds 0f t!ny 3l3ctr0d3s c@n r3@d @nd st!mul@t3 !nd!v!du@l n3ur0ns, 0p3n!ng n3w p0ss!b!l!t!es f0r tr3@t!ng c0nd!t!0ns l!k3 P@rk!ns0n's @nd 3p!l3psy."
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
  let timeLeft = 60*20; // 5 minutes in seconds
  let completedtime = timeLeft;
  let downloadAttempted = false;
  let downloadAttemptedandretry = false;
  const MIN_ASCII = 32; // Minimum printable ASCII character
  const MAX_ASCII = 126

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
        <h3>Paragraph ${randomParagraphProblem.id}: ${randomParagraphProblem.title}</h3>
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
    

        if (char === " " || char === "Backspace" || char === "Shift") {
            return char;
          }
          // Apply ASCII shift only in the range 32 to 126 and loop within that range
          let newCharCode = char.charCodeAt(0) + ASCII_SHIFT;
          if (newCharCode > MAX_ASCII) {
            newCharCode = MIN_ASCII + (newCharCode - MAX_ASCII - 1);
          }
      
          return String.fromCharCode(newCharCode);
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
