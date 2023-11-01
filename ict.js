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
      "1. List five ways through which your organization communicates with its clients/customers and the general public, electronically",
    answer: [
      "a. email",
      "b. website",
      "c. web portal",
      "d. text messages",
      "e. phone calls/VOIP call",
      "f. social media platforms: Facebook, WhatsApp, Twitter, etc",
      "g. video messages",
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
  question: " 4. List 5 examples of internet browsers",
  answer: [
    "a. Google chrome",
    "b. Mozilla Firefox",
    "c. Opera",
    "d. Safari",
    "e. Microsoft Edge ( this replaced Internet Explorer)",
    "f. Slim browser",
    "g. Maxthon",
    "h. K. Meleon",
    "i. UC Browser",
    "j. Netscape",
    "k. OminWeb",
    "l. NetFront",
    "m. Camino",
    "n. Midori",
    "o. Rocat Browser",
    "p. Rekong",
    "q. Conqueror",
    "r. Bold",
    "s. Arora",
    "t. uzbl",
    "u. QtWeb",
    "v. Mosaic",
    "w. Shirra",
    "x. Flock",
    "y. iCab",
    "z. Surf",
    "etc",
  ],
});

questions.push({
  question: " 5. List five basic hardware components of a Personal Computer:",
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
    "etc.",
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
  question: "9. List any five (5) application software",
  answer: [
    "a. Microsoft Word",
    "b. Spreadsheets",
    "c. Media player",
    "d. Browsers like Firefox or Google Chrome",
    "e. Accounting applications",
    "f. Photo editor",
    "g. Mobile apps such as video games, Whatsapp, etc.",
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
  question: "12.  What is a computer",

  answer: [
    "A computer is a machine or electronic device that has the ability to accept data (input), process, store, and output data.",
    "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically",
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
    "Digitization is the act of converting physical documents or paperwork into digital documents.",
    "It is the process of converting information into a computer-readable format",
    "Scanning a paper invoice and uploading it as a PDF is an example of digitization",
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
  question: "16. What is a Computer Peripheral device",

  answer: [
    "A peripheral device or peripheral is an auxiliary hardware device used to transfer information into and out of a computer.",
    "The term peripheral device refers to all hardware components that are attached to a computer and are controlled by the computer system, but they are not the core components of the computer.",
    "Peripherals are commonly divided into three kinds: input devices, output devices, and storage devices.",
  ],
});

questions.push({
  question: "17. List five computer Peripheral devices",

  answer: [
    "a. mouse",
    "b. keyboard",
    "c. monitor or display unit",
    "d. printer",
    "e. speaker",
    "f. scanner",
    "g. webcam",
    "h. flash drive",
    "i. external hard drive",
    "j. table pen",
    "k. media card readers",
    "etc",
  ],
});

questions.push({
  question: "18. What computer software",

  answer: [
    "Software is a set of instructions, data or programs used to operate computers and execute specific tasks",
    "It is a set of instructions and documentation that tells a computer what to do or how to perform a task.",
  ],
});

questions.push({
  question: "19. Name two major types of computer software ",

  answer: [
    "a. System software:",
    "System software is software designed to provide a platform for other software",
    "System software is a program designed to run a computer's hardware and applications and manage its resources",

    "b. Application software:",
    "Application software is a kind of software that performs specific functions for the end user by interacting directly with it",
    "It is a type of computer program that performs a specific personal, educational, and business function.",
  ],
});

questions.push({
  question: "20. Write short note five system software",

  answer: [
    "a. Operating System:",
    "An operating system is a software that controls how your hardware works, it manages the computer's memory, processes, and all of its software and hardware.",

    "b.Device Drivers: ",
    "Device drivers are programs that enable a computer to communicate with its hardware devices, such as printers, scanners, and keyboards.",
    "Without device drivers, the hardware you connect to your computer will not be working properly.",
    "Device manufacturers provide most device drivers, but Microsoft also provides some generic ones.",

    "c. Firmware:",
    "Firmware is a type of software that is embedded in a hardware device. It controls the device and performs its essential functions",
    "Firmware is usually stored in read-only memory (ROM), which means it cannot be modified or deleted.",
    "some devices have firmware that can be updated. Firmware updates can be downloaded from the manufacturer's website or installed from a CD or other storage drive.",

    "d. BIOS (basic input/output system) is the program a computer's microprocessor uses to start the computer system after it is powered on",
    "It performs a power-on self-test (POST) and initializes the computer before loading the operating system.",
    "The BIOS is stored in a ROM (read-only memory) chip on the motherboard.",

    "e. UEFI: ",
    "UEFI (unified extensible firmware interface) is a newer type of firmware that offers more features than BIOS.",
    " UEFI is designed to be platform-independent and can be used with a variety of operating systems.",

    "f. Utilities:",
    "Utilities are programs that help maintain and optimize a computer's performance.",
    "Utility programs are usually bundled with the operating system or can be downloaded from the internet. ",

    "g. Programming Language Translator",
    "A translator or programming language processor is a computer program that converts the programming instructions written in human convenient form into machine language codes that the computers understand and process.",
    "Programming language translators are programs that convert code written in one programming language into another programming language.",
  ],
});

questions.push({
  question: "21. What is BIOS",

  answer: [
    "BIOS (basic input/output system) is the program a computer's microprocessor uses to start the computer system after it is powered on",
  ],
});

questions.push({
  question: "22. What is a computer hardware port",

  answer: [
    "A Computer hardware port is an interface or a point of connection between the computer and its peripheral devices. ",
  ],
});

questions.push({
  question: "23. list five (5) kinds of computer hardware ports",

  answer: [
    "a. USB - Universal Serial Bus ",
    "b. RJ-45 - Registered Jack-45",
    "c. RJ-11 - Registered Jack -11",
    "d. HDMI - High Definition Media Interface",
    "e. DVI- Digital Visual/Video Interface",
    "f. VGA - Video Graphics Array",
    "i. Audio ports ",
    "j. PS/2 - Personal System 2",
    "k. e-SATA - External Serial Adanvce Attachment",
    "l. RCA - Radio Corporation of America",
  ],
});

questions.push({
  question: "24. Write HTTP in full ",

  answer: ["HyperText Transfer Protocol"],
});

questions.push({
  question: "25. What is HTTP used for? ",

  answer: [
    "HTTP is a protocol through which Servers or Computers, Applications, Websites, Networks etc communicate with each other on the internet.",
  ],
});

questions.push({
  question: "26. Write FTP in full ",

  answer: ["File Transfer Protocol"],
});

questions.push({
  question: "27. What is FTP used for ?",

  answer: [
    " FTP is a standard network protocol used for the transfer of files from one host to another over a TCP-based network, such as the Internet.",
    "FTP is a way to download, upload, and transfer files from one location to another on the Internet and between computer systems. ",
  ],
});

questions.push({
  question: "28. Write TCP/IP in full",

  answer: ["Transmission Control Protocol/Internet Protocol"],
});

questions.push({
  question: "29. What is TCP/IP used for? ",

  answer: [
    "TCP/IP is a suite of communication protocols used to interconnect network devices on the internet. ",
    "TCP/IP allows computers on the same network to identify and communicate with each other.",
    "TCP/IP is also used as a communications protocol in a private computer network (an intranet or extranet).",
  ],
});

questions.push({
  question: "30. Write UDP/IP in full ",

  answer: ["User Datagram Protocol/Internet Protocol"],
});

questions.push({
  question: "31. What is UDP/IP used for? ",

  answer: [
    "a. User Datagram Protocol (UDP) is a connectionless communication protocol for transporting packets across networks.",
    "UDP does not require prior communication to set up communication channels or data paths.",
    " It is specifically chosen for time-sensitive applications like gaming, playing videos, or Domain Name System (DNS) lookups.",
  ],
});

questions.push({
  question: "32. What is the major difference between TCP/IP and UDP/IP? ",

  answer: [
    "The main difference between TCP (transmission control protocol) and UDP (user datagram protocol) is that TCP is a connection-based protocol and UDP is connectionless. ",
    "While TCP is more reliable, it transfers data more slowly. UDP is less reliable but works more quickly.",
  ],
});

questions.push({
  question: "33. What is Internet Protocol ",

  answer: [
    "The Internet Protocol (IP) is a protocol, or set of rules, for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination. ",
    "Data traversing the Internet is divided into smaller pieces, called packets.",
  ],
});

questions.push({
  question: "34. Mention five protocols in use on the internet  ",

  answer: [
    "a. TCP/IP(Transmission Control Protocol/ Internet Protocol",
    "b. SMTP(Simple Mail Transfer Protocol",
    "c. PPP(Point-to-Point Protocol",
    "d. FTP (File Transfer Protocol",
    "e. SFTP(Secure File Transfer Protocol",
    "f. HTTP(Hyper Text Transfer Protocol",
    "g. HTTPS(HyperText Transfer Protocol Secure",
    "h. TELNET(Terminal Network",
    "i. UDP/IP (User Datagram Protocol/Internet Protocol",
    "etc",
  ],
});

questions.push({
  question:
    "35. What is the major difference between  HTTP and HTTPS Protocols",

  answer: [
    "The major difference is that HTTP is not secured and HTTPS is secured",
  ],
});

questions.push({
  question: "36. What is SFTP Protocol ",

  answer: ["a. Secure File Transfer Protocol"],
});

questions.push({
  question: "37. What is the full meaning of URL? ",

  answer: [
    "URL is an acronym for Uniform Resource Locator and is a reference (an address) to a resource on the Internet.",
  ],
});

questions.push({
  question: "38. What is a web browser   ",

  answer: [
    " A Web browser is basically the software that we use for browsing/surfing/searching  the internet and displaying pages.",
  ],
});

questions.push({
  question: "39. What is a website ",

  answer: [
    "A Website is a set of related web pages and related content located under a single domain name",
    "A website is a collection of linked web pages under the same domain name.",
    "It is typically produced by a single person or organization.",
    "Any website depends on the three components: site files, domain name, and web host",
  ],
});

questions.push({
  question: "40. What is a web Server ",

  answer: [
    "A web server refers to the software that provides its users with the documents (web pages) they request via their web browsers.",
  ],
});

questions.push({
  question: "41. What is a web page",

  answer: [
    "A web page is a document on the World Wide Web with its own address",
  ],
});

questions.push({
  question: "42. What is a domain name",

  answer: [
    "A domain name (often simply called a domain) is an easy-to-remember name that's associated with a physical IP address on the Internet. ",
    "It's the unique name that appears after the @ sign in email addresses, and after www. in web addresses.",
  ],
});

questions.push({
  question: "43. What is a router",

  answer: [
    "A router is a networking device that forwards data packets between computer networks. ",
    "Routers perform the traffic directing functions between networks and on the global Internet.",
  ],
});

questions.push({
  question: "44. What is a Resource in computing",

  answer: [
    "Computer resource means all computer hardware, software, communications devices, facilities, equipment, networks, passwords, licensing and attendant policies, manuals and guides etc.",
    " A resouce is any physical, virtual (soft) or connected devices in a computer system.",
    "All connected devices and internal system components are resources.",
  ],
});

questions.push({
  question: "45. What is a Network Switch",

  answer: [
    "A network switch connects devices in a network to each other, enabling them to talk by exchanging data packets.",
    "Switches can be hardware devices that manage physical networks or software-based virtual devices.",
  ],
});

questions.push({
  question: "46. Mention five domain name extension types  ",

  answer: [
    "a. .com – commercial business (the most common TLD)",
    "b. .org – organizations (typically, nonprofit)",
    "c. .gov – government agencies.",
    "d. .edu – educational institutions.",
    "e. .net – network organizations.",
    "f. .mil – military.",
    "etc",
  ],
});

questions.push({
  question: "47. What is a web Portal",

  answer: [
    "A web portal is a specially designed website that brings information from diverse sources, like emails, online forums and search engines, together in a uniform way.",
  ],
});

questions.push({
  question: "48. What is data",

  answer: [
    "Data are facts and values collected together for reference or analysis.",
    " Data can also be defined as unprocessed information",
  ],
});

questions.push({
  question: "49. What is a database",

  answer: [
    "Database is an electronic file that contains a structured set of data held in a computer, especially one that is accessible in various ways.",
  ],
});

questions.push({
  question: "50. What is a Database Management System",

  answer: [
    "Database Management System (DBMS) is a software system used to store, retrieve, modify and run queries on data held in a databases",
    "A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database ",
  ],
});

questions.push({
  question: "51. Define the term Computer Network",

  answer: [
    "A computer network is a collection of computers, servers, mainframes, network devices, peripherals, or other devices connected to one another to allow the sharing of data.",
  ],
});

questions.push({
  question: "52. What is IoT?",

  answer: [
    "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.",
  ],
});

questions.push({
  question: "53. list 10 network devices ",

  answer: [
    "a. Hub",
    "b. Repeater",
    "c. Bridge ",
    "d. Switch",
    "e. Router",
    "f. Gateways",
    "g. Computer",
    "h. Modem",
    "i. Firewall",
    "j. Wireless Access Point",
    "k. Brouter",
    "l. Tranceiver",
    "m. Smartphone",
    "etc",
  ],
});

questions.push({
  question: "54. Write the following in full: LAN, WAN, MAN, WLAN, VPN",

  answer: [
    "a. LAN- Local Area Network",
    "b. WAN - Wide Area Network",
    "c. MAN - Metroplitan Area Network",
    "d. WLAN - Wireles Local Area Network",
    "e. VPN - Virtual Private Network",
  ],
});

questions.push({
  question: "55. Who is a data subject",

  answer: [
    "Data subject refers to any individual person who can be identified, directly or indirectly, via an identifier such as a name, an ID number, location data, or via factors specific to the person's physical, physiological, genetic, mental, economic, cultural or social identity.",
  ],
});

questions.push({
  question: "56. Who is a data Processor",

  answer: [
    "A data processor is a natural person, agency, public authority, or any other body that holds or processes personal data on behalf of a controller or another data processor.",
  ],
});

questions.push({
  question: "57. Who is a data controller",

  answer: [
    " Data controller is an individual, private entity, public commission, agency, or any other body who (alone or jointly with others) determines the purposes and means of processing of personal data.",
  ],
});

questions.push({
  question: "58. Define data capture",

  answer: [
    "Data capture is the process of extracting information from any type of document or object and converting it into a format readable by a computer.",
    "Data capture can also refers to the method of automatically identifying objects, collecting data about them, and entering them directly into computer systems, without human involvement. Documents come in different formats such as invoices, receipts, questionnaires, videos and images.",
  ],
});

questions.push({
  question: "59. Who is a data subject",

  answer: [
    "Data subject refers to any individual person who can be identified, directly or indirectly, via an identifier such as a name, an ID number, location data, or via factors specific to the person's physical, physiological, genetic, mental, economic, cultural or social identity.",
  ],
});

questions.push({
  question: "60. Define the term Digitalization",

  answer: [
    "In simple terms, digitalization is all about developing processes and changing workflows to improve manual systems using digital technologies.",
  ],
});

questions.push({
  question: "61. Define the term Digitization",

  answer: [
    "Digitization is the act of converting physical documents or paperwork into digital documents.",
    "It is the process of converting information into a computer-readable format",
  ],
});

questions.push({
  question: "62. What is Digital transformation",

  answer: [
    "Digital transformation is the process of adoption and implementation of digital technology by an organization in order to create new or modify existing products, services and operations by the means of translating business processes into a digital format.",
  ],
});

questions.push({
  question: "63. What is Data Protection",

  answer: [
    "Data protection is a strategy set to secure privacy, availability, & integrity of data.",
  ],
});

questions.push({
  question: "64. What is Data intergrity",

  answer: [
    "Data integrity is the maintenance of, and the assurance of, data accuracy and consistency over its entire life-cycle.",
  ],
});

questions.push({
  question: "65. What is Web hosting",

  answer: [
    "A web hosting service is a type of Internet hosting service that hosts websites for clients, i.e. it offers the facilities required for them to create and maintain a site and makes it accessible on the World Wide Web.",
  ],
});

questions.push({
  question: "66. List equipment found in automated office ",

  answer: [
    "a. Document scanners",
    "b. Photocopiers ",
    "c. Label printers",
    "d. Telephone switchboards",
    "e. Desktop and laptop computers",
    "f. Tablets",
    "g. Smartphones ",
    "h. Biometric access scanners",
    "i. Computer servers",
    "etc",
  ],
});

questions.push({
  question: "67. What is automation of office",

  answer: [
    "Office automation refers to the use of varied computer machinery (hardware) and software to digitally create, collect, store, manipulate, and relay office information needed for accomplishing basic tasks",
    "Automating is about establishing and implementing automated workflows and processes",
  ],
});

questions.push({
  question: "68. List 10 benefits of office automation ",

  answer: [
    "a. Saves time Efficiency",
    "b.	Increased Productivity",
    "c.	Cost Savings",
    "d.	Improves Compliance",
    "e.	Reduced human Errors",
    "f.	Customer Satisfaction",
    "g.	Increasing Employee Satisfaction and Retention",
    "h.	Eliminate Paper-Based Processes",
    "i.	Standardization and Cleaner Data",
    "j.	Scalable Processes",
    "k.	Accuracy",
    "l.	Reducing manual intervention",
    "m.	Faster, easier and more consistent work",
    "n.	Help with data backup and recovery solutions",
    "o.	Provides security from any internal or external threats",
    "p.	Provides timely analysis and reporting",
    "etc",
  ],
});

questions.push({
  question: "69. List the office areas / sections that can be automated",

  answer: [
    "a.	Finance and Budgeting",
    "b.	Recruitment",
    "c.	Cloud Infrastructure Automation",
    "d.	Security",
    "e.	Task/Project Management",
    "f.	Procurement",
    "g.	SaaS Management",
    "h.	Back-office Automation",
    "i.	Front desk Automation",
    "j.	Communication",
    "k.	Facilities",
    "l.	Analytics and Reporting",
    "m.	Remote Workforce",
    "n.	eSignature Solution",
    "etc",
  ],
});

questions.push({
  question:
    "70. Give example of software that can be used in office automation.",

  answer: [
    "a.	Finance and Budgeting: Some budgeting, planning, and forecasting automation solutions are:  Float, FreshBooks, PlanGuru, Scoro, Xero",
    "b.	Recruitment: 5 office automation software to help you with recruitment and selection process are Beamery, HireHive, Indeed, Recruiterbox, Zoho Recruit",
    "c.	Cloud Infrastructure Automation: e.g Ansible, Appcore, AWS CloudFormation, Kubernetes, Puppet",
    "d.	Security: Inernal and External security can be Duo, Intruder, Kali Linux, SolarWinds Security Event Manager, Splunk are examples security software",
    "e.	Task/Project Management: how team is performing on their individual jobs can be monitored by the following tools-ClickUp, Flow,Com, Trello, Zapier",
    "f.	Procurement: examples of procurement software are Coupa, e-Procure, Precoro, Procurify, Tradogram",
    "g.	SaaS Management: e.g Torii, Blissfully, BetterCloud, Alpin, CloudExchange",
    "h.	Back-office Automation: Examples of Off-self software for storage and documents access to your teams include - Best Back-Office Automation includes:Another Monday, Automation Anywhere, Blue Prism, Linx, UiPath, backend of every betspoke/customized or tailor-made apps developed by your organization",
    "i.	Front desk Automation: help-desk and call-center management, Salesforce can be managed using the following software- Envoy, LobbyGuard, Sine, SwipedOn, Welkio",
    "j.	Communication: To create a digital workplace environment, you can use: 8×8, Slack, Uberconference, Workplace, Yarooms",
    "k.	Facilities: Employ technology for general facility offerings and management for employees, inventory  etc. with the following software: Azzier, Corrigo CMMS, FMX, Hippo, Stockpile",
    "l.	Analytics and Reporting: e.g Zoho Analytics, Tableau, Answer rocket, SAP Crystal, Izenda Reports",
    "m.	Remote Workforce: - examples : BaseCamp, Google Drive, KissFlow, ProofHub, Zapier",
    "n.	eSignature Solution e.g Adobe Sign, DocuSign, HelloSign, Secured Signing, SignEasy etc",
    "etc",
  ],
});

questions.push({
  question: "71. What is SMTP and its use",

  answer: [
    "The Simple Mail Transfer Protocol (SMTP) is used to deliver e-mail messages over the Internet",
  ],
});

questions.push({
  question: "72. What do you mean by TELNET Protocol",

  answer: [
    "Telnet short form for - Teletype Network is a client/server application protocol that provides access to virtual terminals of remote systems on local area networks or the Internet.",
    "TELNET is commonly used by terminal emulation programs that allow you to log into a remote host.",
    "TELNET can be used for terminal-to-terminal communication and interprocess communication.",
    "TELNET is also used by other protocols (for example, FTP) for establishing a protocol control channel.",
  ],
});

questions.push({
  question: "73. What is Web Application",

  answer: [
    "A web application is application software that is accessed using a web browser",
    "Web applications are delivered on the World Wide Web to users with an active internet connection",
  ],
});

questions.push({
  question: "74. What is Mobile Application",

  answer: [
    "A mobile application is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    "Mobile apps are downloadable by a user to a mobile device and can be used without active internet connection",
  ],
});

questions.push({
  question: "75. list 5 External Storage devices ",

  answer: [
    "a. External Hard Drive",
    "b. USB Flash Drive ",
    "c. Compac Disk - CD/ Digital Video or Versatile Disk - DVD",
    "d. Secure Digital Memory Card- SD-Card",
    "e. Memory Card",
    "f. Solid State drive",
    "g. Magnetic Tape ",
    "h. Floopy Disk",
    "i. Blue ray disk",
    "etc",
  ],
});

//=====================================================================================
//END OF questions
//======================================================================================//

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
document.getElementById(
  "total-question"
).innerHTML = ` ${total} Questions. Update continues.... `;
