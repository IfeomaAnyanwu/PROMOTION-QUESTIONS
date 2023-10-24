//Dry code

// HIDE INNER COVER AND GENERAL QUESTION ON PAGE LOAD

const innerCover = document.getElementById("inner-cover");
const generalQuestion = document.getElementById("general-question");
const backPage = document.getElementById("back-page");

function hideCoverAndInner() {
  innerCover.style.display = "block";
  backPage.style.display;
  ("none");
  generalQuestion.style.display = "none";
}

// Test script
const questions2 = [
  {
    question: "Child of a civil servant",
    answer: ["a. biological child", "b. Dependant", "c. Step child"],
  },
  { question: "Grade levels", answer: ["1,2,3 to 17"] },
  { question: "Your Office", answer: ["MDCN"] },
];

const questions = [
  {
    question:
      "1. List five ways through which your institution communicates with its clients/customers and the general public, electronically",
    answer: [
      "a. email",
      "b. website",
      "c. web portal",
      "d. text messages",
      "e. phone calls",
      "f. social media platforms: Facebook, WhatsApp, Twitter,  etc",
      "g. video",
      "h. audio/voice messages",
    ],
  },
];

questions.push({
  question: "2. What is Internet?",
  answer: [
    "Internet is a global network of billions of computers and other electronic devices",
    "Internet is a global system of interconnected computer networks.",
    "The means of connecting a computer to any other computer anywhere in the world",
  ],
});

questions.push({
  question: "3. List 5 uses of the internet in an office",
  answer: [
    "a. making online payment",
    "b. sending emails",
    "c. making internet voice calls-VOIP ",
    "d. holding virtual meetings",
    "e. finding information",
    "f. data and file transfers ",
    "g. for social networking",
    "h. business promotion and sensitization",
  ],
});

questions.push({
  question: " 4. List 5 examples internet browsers",
  answer: [
    "a. Google chrome",
    "b. Mozilla Firefox",
    "c. Opera",
    "d. Safari",
    "e. Microsoft Edge ( this replaced Internet Explorer)",
    "f. Slim browser",
    "g. Maxthon",
    "h. K. Meleon",
  ],
});

questions.push({
  question: " 5. List five  basic hardware components of a Personal Computer:",
  answer: [
    "a. Cental Processing unit - CPU",
    "b. Monitor",
    "c. Mouse",
    "d. Keyboard",
    "e. Hard Drive/Disk",
    "f. Read Only Memory - RAM",
    "g. MotherBoard",
    "h. Computer Casing",
    "i. Power supply",
    "j. Peripheral like Printer, Scanner, Speaker, etc",
  ],
});

questions.push({
  question: "6. List five applications in Microsoft Suit",
  answer: [
    "a. Word",
    "b. PowerPoint",
    "c. Excel",
    "d. Access",
    "e. Outlook",
    "f. OneNote",
    "g. OneDrive",
    "h. Skype",
    "h. Project",
    "i. Planner",
    "etc",
  ],
});

questions.push({
  question: "7. What is word processor",
  answer: [
    "a. is a device or computer program that provides for input, editing, formatting, and output of text, often with some additional features.",
  ],
});

questions.push({
  question:
    "8. Word processing transited from mechanical to electronic then to software. List 5 word processing software",
  answer: [
    "a. MS Word",
    "b. Notepad",
    "c. WordPad",
    "d. WordPerfect",
    "e. Google Docs",
    "f. LibreOffice",
    "g. OpenOffice",
    "h. OnlyOffice",
    "i. TextMaker",
    "j. TextEdit",
    "i. WordStar",
    "j. Pages",
    "etc",
  ],
});

questions.push({
  question: "9. List five (5) system software",
  answer: [
    "a. Pensioners",
    "b. People that are 50 years of age or over as at the time they are being appointed",
    "c. Expatriates who possess specialized skills or competencies that are not readily available",
    "d. Spouses married to Nigerians",
    "e. People who specifically request to be appointed on contract and it is deemed to be in the best of the service.",
  ],
});

questions.push({
  question: "10. List Five (5) utility software",
  answer: [
    "a. Antivirus",
    "b. File Management System",
    "c. Disk Management tools",
    "d. Compression tools",
    "e. Disk cleanup tool",
    "f. Disk Defragmenter",
    "g. Backup tools/software",
    "h. WinRAR",
    "i. WinZip",
    "j. Filw Archiver",
    "k. KeyFinder",
    "etc.",
  ],
});

questions.push({
  question: "11. What is utility software",
  answer: [
    "Utility software includes all systems and programs on a computer system that maintain its functionality.",
    "A computer's utility software includes components that assist the operating system to optimize, maintain, organize and manage how it functions in all situations.",
  ],
});

questions.push({
  question:
    "12.  What is the difference between Digitized file and Electronic file",

  answer: [
    "Digital Records: They can be easily accessed, viewed, and shared, regardless of the device used. They are usually portable and flexible for use.",

    "Electronic Records: These often require specific software or systems to access and utilize, and are less easily portable outside of those systems.",
  ],
});

questions.push({
  question:
    "13. Mention hardware and software that can be used to digitize an office?",

  answer: [
    "a. Scanners",
    "b. Digital Storage devices ",
    "c. Image software",
    "d. Document software",
    "e. Video software",
    "f. Audio software",
    "g. OCR software",
    "h. Bulk renaming software",
    "i. Checksum software",
    "etc",
  ],
});

questions.push({
  question: "14. What is digitization of office?.",

  answer: [
    "Digitization is the act of converting physical documents or paperwork into digital documents. Scanning a paper invoice and uploading it as a PDF is an example of digitization",
    "Digitization is the process of changing from analog to digital form",
  ],
});

questions.push({
  question: "15. List five (5) advantages of digitizing an office?",

  answer: [
    "a. Faster access to information.",
    "b. Improved customer experience.",
    "c. Improved Productivity and Efficiency",
    "d. Increased Performance.",
    "e. Increased Revenue.",
    "f. Increased Flexibility.",
    "g. Reduced Operational Costs.",
    "h. Enhanced Communication and Innovation",
    "i. Lower operational costs.",
    "j. Improved decision making.",
    "k. Improved security.",
    "l. Disaster Recovery ",
  ],
});

questions.push({
  question: "16. ",

  answer: [],
});

questions.push({
  question: "17. ",

  answer: [""],
});

questions.push({
  question: "18. ",

  answer: [""],
});

questions.push({
  question: "19. ",

  answer: [" "],
});

questions.push({
  question: "20. ",

  answer: [""],
});

console.log(questions); // log array on console

//Display on Browser

// question
quest = 0;
function askedQuestions() {
  if (quest < questions.length) {
    document.getElementById("displayQuestion").innerHTML =
      questions[quest].question;
    quest++;
  } else {
    document.getElementById("displayQuestion").innerHTML =
      " End of Available Questions. Refresh to start afresh !";
  }
  return;
}

// answer
answ = 0;
function answersToQuestions() {
  if (answ < questions.length) {
    document.getElementById("displayAnswer").innerHTML =
      questions[answ].answer.join("<br><br>");
    answ++;
  } else {
    document.getElementById("displayAnswer").innerHTML =
      " No more answer to show !";
  }
  return;
}

//Hide answer when question loads
function buttonAtLoad() {
  document.getElementById("hide-answ").style.display = "none";
  document.getElementById("displayAnswer").style.display = "none";
}

//Shoowing answer
function showAnswer() {
  document.getElementById("displayAnswer").style.display = "block";
  document.getElementById("show-answ").style.display = "none";
  document.getElementById("hide-answ").style.display = "block";
}

// Hiding answer
function hideAnswer() {
  document.getElementById("displayAnswer").style.display = "none";
  document.getElementById("show-answ").style.display = "block";
  document.getElementById("hide-answ").style.display = "none";
}

//prev question
function prevAskedQuestion() {
  if (quest >= 1) {
    document.getElementById("displayQuestion").innerHTML =
      questions[quest - 1].question;
    quest--;
  } else {
    document.getElementById("displayQuestion").innerHTML =
      " You are on the 1st question, Can't go back !";
  }
  return;
}

//prev answer

function prevAnswersToQuestions() {
  if (answ >= 1) {
    document.getElementById("displayAnswer").innerHTML =
      questions[answ - 1].answer.join("<br><br>");
    answ--;
  } else {
    document.getElementById("displayAnswer").innerHTML = " No answer to show !";
  }
  return;
}

// Display Total questions
var total = questions.length;
document.getElementById("total-question").innerHTML = ` ${total} Questions. `;
