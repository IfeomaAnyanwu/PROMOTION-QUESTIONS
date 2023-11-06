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
    question: "1. Who is the Child of a Public Servant?",
    answer: [
      "a. someone who is under the age of 18 years.",
      "b. the officers biological offspring",
      "c. offspring of a spouse of the officer",
      "d. a child adopted by the officer in accordance with any statutory provision",
      "e. is entirely dependent on the officer.",
    ],
  },
];

questions.push({
  question:
    "2. As a Civil Servant, you are required to be guided by some Ethical Values in the conduct of government business. List any ten (10) of such Values.?",
  answer: [
    "a.Discipline",
    "b. Honesty",
    "c. Confidentiality",
    "d. Courtesy",
    "e. Avoidance of Delay",
    "f. Courage",
    "g. Integrity and Moral Rectitude",
    "h. Loyalty",
    "i. Political Neutrality",
    "j. Modesty",
    "k. Cooperation",
    "l. Industry",
    "m. Probity",
    "n. Accountability",
    "n. Tidiness in Work Environment",
    " o.Efficiency",
    "p. Trust",
    "q. Tact",
  ],
});

questions.push({
  question: "3. What is recruitment?",
  answer: [
    "Recruitment means the filling of vacancies by the appointment of persons not already in the Federal Public Service of the Federal Republic of Nigeria",
  ],
});

questions.push({
  question:
    " 4. Mention five important documents a newly recruited officer should present for documentation?.",
  answer: [
    "a. Letter of Appointment",
    "b. Certificates/Credentials",
    "c. Birth Certificate/Declaration of Age",
    "d. Evidence of State of Origin/Certificate of Local Government",
    "e. Certificate of Medical Fitness",
    "f. Testimonial of good conduct from last employer and last school attended",
  ],
});

questions.push({
  question: " 5. List five types of appointment?",
  answer: [
    " a. Pupil appointment",
    "b. Temporary appointment",
    "c. On probation in temporary post",
    "d. Pensionable and permanent appointment",
    "e. Special appointment",
    "f. Contract appointment",
  ],
});

questions.push({
  question:
    "6. A friend of yours desires to be appointed into the Federal Civil Service. Mention five (5) criteria for appointment into the Federal Public Service?.",
  answer: [
    "a. He must not be less than 18 years and not more than 50 years of age",
    "b. He must possess such minimum qualification as may be specified including computer literacy",
    "c. He must be certified by an authorized healthcare provider as medically fit",
    "d. He must possess a testimonial of good conduct from last employer or from the last school/college attended",
    "e. He must provide evidence of state of origin",
    "f. He must possess requisite qualifications as provided for in the Schemes of Service",
    "g. He must not have been convicted of a criminal charge",
    "h. He must not have been previously employed and dismissed from a Government service",
  ],
});

questions.push({
  question:
    "7. Under which conditions would a candidate not be considered for employment?",
  answer: [
    "a. If he/she has been convicted of a criminal offence.",
    "b. He/she had been previously employed in a government service and been dismissed.",
    "c. If he/she is heavily indebted.",
    "d. If he/she is not medically fit",
  ],
});

questions.push({
  question: "8. What is a contract appointment? A",
  answer: [
    "A contract appointment is a temporary appointment (which does not provide for the payment of a pension) to a post of the level to which an appointment is made by the Federal Civil Service Commission for a specific period.",
  ],
});

questions.push({
  question: "9. What categories of people can be offered contract appointment?",
  answer: [
    "a. Pensioners",
    "b. People that are 50 years of age or over as at the time they are being appointed",
    "c. Expatriates who possess specialized skills or competencies that are not readily available",
    "d. Spouses married to Nigerians",
    "e. People who specifically request to be appointed on contract and it is deemed to be in the best of the service.",
  ],
});

questions.push({
  question:
    "10. Differentiate between contract appointment and pensionable appointment?",
  answer: [
    " a. Pensionable appointment is permanent and pensionabe while contract appointment is temporary",
    "b. Pensionable appointment provides for payment of pension while a contract appointment does not provide for payment of pension",
    "c. An officer on pensionable appointment is entitled to secondment, leave of absence, promotion while an officer on contract cannot enjoy these things",
  ],
});

questions.push({
  question: "11. Under what condition can an Acting Appointment be made?",
  answer: [
    "Acting Appointment is an appointment made when it is necessary that a particular duty post that is temporarily vacant should be filled and no officer of corresponding substantive rank is available.",
  ],
});

questions.push({
  question: "12. Differentiate between secondment and transfer of service.?",

  answer: [
    "SECONDMENT is the temporary release of an officer to the service of another government, approved Body or any recognized International Organization for a specified period. If the secondment is at the instance of the officer, it shall be for a period of two (years) after which the officer can request for extension for another two (2) years, return to his former office or seek for transfer of service. The total period of secondment is four (4) years.If secondment of an officer is in public interest, the period of secondment shall not be limited.While an officer is on secondment, the benefitting Agency shall be responsible for the emoluments and other allowances of the officer ",

    "TRANSFER OF SERVICE is the permanent release of an officer from one scheduled service to another or from one class to another within the same service.",
  ],
});

questions.push({
  question:
    "13. List five (5) documents that must accompany application for transfer of service of an officer?",

  answer: [
    "a. Evidence of Qualifications",
    "b. APER for two years immediately preceding the date of appointment",
    "c. Certified True Copy of officer’s Record of Service (RoS)",
    "d. Evidence of confirmation of Appointment",
    "e. Recommendation from the applicant’s employer including a statement that officer will be released of the application is successful",
    "f. Certificate of Local Government/State of Origin",
  ],
});

questions.push({
  question:
    "14. List five conditions to be met before an officer can transfer his/her service.",

  answer: [
    "a. The appointment of the applicant must have been confirmed",
    "b. He must not have any disciplinary action pending against him",
    "c. Letter of release from the releasing agency",
    "d. There must be willingness by the accepting organization to accept",
    "e. The must be vacancy",
    "f. The contemplated transfer must not jeopardize the promotion prospects of serving officers",
  ],
});

questions.push({
  question: "15. What is a Scheduled Service?",

  answer: [
    "A Scheduled Service is a service that is registered under the Pension Act and which allows for transfer within the same service.",
    "CHARACTERISTICS OF A SCHEDULED SERVICE",
    "a. A scheduled service is structured for career progression",
    "b. It is pensionable and permanent",
    "c. It is funded solely by the Government",
    "d. It involves posting of officers",
  ],
});

questions.push({
  question: "16. Differentiate between suspension and interdiction.",

  answer: [
    "a. SUSPENSIONThis is a DISCIPLINARY PROCEDURE applied on an officer when a criminal case has been instituted or is about to be instituted against him/her. The officer shall be suspended from office without salary pending the determination of the case. IF THE OFFICER IS NOT FOUND CULPABLE AND IS DISCHARGED AND ACQUITTED BY THE COURT, HE SHALL BE PAID ARREARS OF HIS FULL SALARY WITH EFFECT FROM THE DATE OF HIS SUSPENSION",
    "b. INTERDICTIONThis is applied on an officer when a serious case that may lead to dismissal has been instituted against him/her. The officer shall be placed on half salary pending the determination of the case. IF THE OFFICER IS NOT FOUND CULPABLE OF THE ALLEGATIONS AGAINST HIM, HE SHALL BE PAID ARREARS OF HIS SALARY WITH EFFECT FROM THE DATE OF HIS INTERDICTION",
    "IT SHOULD BE NOTED THAT QUERY, SUSPENSION AND INTERDICTION ARE NOT DISCIPLINARY MEASURES/ACTIONS THAT COULD BE METED OUT TO ERRING OFFICERS. THEY ARE ONLY DISCIPLINARY PROCEDURES",
  ],
});

questions.push({
  question:
    "17. Outline the obligations of an interdicted/suspended officer to his office",

  answer: [
    "a. He shall keep his office informed of the address at which instructions to him can be delivered",
    "b. He shall notify his office of his intention to leave his station",
    "c. He shall not leave the country without the specific approval of the Head of the Civil Service of the Federation",
    "d. If he fails to comply with instruction delivered to him at such address within seven (7) days of such delivery, he will be regarded as absent from duty without leave",
  ],
});

questions.push({
  question: "18. What is General Inefficiency?",

  answer: [
    "It consists of a series of omissions or incompetence, the cumulative effect of which shows that an officer is not capable of discharging efficiently the duties of the office he holds.",
  ],
});

questions.push({
  question:
    "19. List the procedures for Removing an Officer for General Inefficiency",

  answer: [
    "a. The officer’s attention must be brought to his shortcoming",
    "b. Officer must have been warned on three (3) occasion in writing",
    "c. He must have been given an opportunity to improve himself",
    "d. He must have been placed on alternative schedules",
    "e. He must have suffered loss or deferment of his last increment",
  ],
});

questions.push({
  question: "20. What is misconduct?",

  answer: [
    "Misconduct is a specific act of wrong doing or improper behavior which is inimical to the image of the service and which can be investigated and proved. It can lead to termination of appointment or retirement.",
  ],
});

questions.push({
  question: "21. List acts that constitute misconduct:",

  answer: [
    "i. Scandalous conduct such as:",
    "a. Immoral behaviour",
    "b. Unruly behaviour",
    "c. Drunkenness",
    "d. Foul language",
    "e. Assault",
    "f. Battery",
    "ii. Negligence",
    "iii. Insubordination",
    "iv. Deliberate delay in treating official document",
    "v. Refusal to proceed on transfer or to accept posting",
    "vi. Refusal to take/carry out lawful instruction from superior officers",
    "vii. Habitual lateness to work",
    "viii. Unauthorized removal of public records",
    "ix. Improper dressing while on duty",
    "x. Sleeping on duty",
    "xi. Hawking within the office premises",
    "xii. Membership of cults",
    "xiii. Discourteous behaviour to the public",
  ],
});

questions.push({
  question: "22. What is serious misconduct?",

  answer: [
    "This is a specific act of very serious wrongdoing and improper behavior which is inimical to the image of the service which can be investigated and if proven may lead to dismissal.",
  ],
});

questions.push({
  question: "23. List acts that constitute serious misconduct",

  answer: [
    "a. Falsification of records",
    "b. Suppression of records",
    "c. Engaging in partisan political activities",
    "d. False claims against Government officials",
    "e. Absence from duty without leave",
    "f. Conviction on a criminal charge",
    "g. Unauthorized disclosure of official information",
    "h. Bankruptcy/serious financial Embarrassment",
    "i. Violation of Oath of Secrecy",
    "j. Holding more than one full time paid job",
    "k. Divided loyalty",
    "l. Nepotism",
    "m. Bribery",
    "n. Corruption",
    "o. Embezzlement",
    "p. Sexual harassment",
    "q. Misappropriation",
    "r. Advance fee fraud",
    "s. Sabotage",
  ],
});

questions.push({
  question:
    " 24. A case of serious wrongdoing has been established against an officer in your organization. As the Chief Executive, list the five (5) disciplinary measures/actions that can be taken against the officer. ",

  answer: [
    "a. Dismissal",
    "b. Termination of Appointment",
    "c. Retirement",
    "d. Reduction in Rank",
    "e. Reprimand",
    "f. Surcharge",
    "g. Loss of Pay",
    "h. Withholding of Increment",
    "i. Deferment of Increment",
    "j. Written Warning",
    "k. Verbal Warning",
  ],
});

questions.push({
  question:
    "25. Differentiate between Withheld Increment and Deferred Increment. Withheld Increment and Deferred Increment are both disciplinary measures that can be taken against an officer",

  answer: [
    "WITHHOLDING OF INCREMENT An increment is said to be withheld when it is decided not to grant it and the affected officer remains on the same step until the next incremental date of 1st January",
    "DEFERMENT OF INCREMENT This means that an officer’s increment is postponed from when it is due to another time. Deferment of increment must not be less than three (3) months or more than six (6) months. If the deferred increment is eventually granted, it does not become effective until the day following the expiration of the specific period of deferment",
  ],
});

questions.push({
  question:
    "26. List five conditions under which an officer may be requested to exit the Federal Public Service",

  answer: [
    "a. If the officer has attained the mandatory retirement age of 60 years or 35 years of service",
    "b. If the officer has committed acts of misconduct",
    "c. If he has committed acts of serious misconduct",
    "d. On grounds of General Inefficiency",
    "e. Failure of promotion examination on three (3) consecutive attempts",
    "f. Failure of combined confirmation examination on three (3) consecutive times",
    "g. If there is reorganization in the establishment",
    "h. If the officer is invalided by a Medical Board",
  ],
});

questions.push({
  question: "27. List five ways an officer can exit the Federal Public Service",

  answer: [
    "a. By Dismissal",
    "b. By Termination of Appointment",
    "c. By Retirement",
    "d. By Death",
    "e. By Withdrawal of Service",
    "f. By Resignation of Appointment",
  ],
});

questions.push({
  question: "28. What is a petition? ",

  answer: [
    "A petition is a formal appeal to ultimate authority for special consideration of a matter affecting an officer personally. Such an authority could be the Head of Government, Chairman of the FCSC or the HCSF.",
  ],
});

questions.push({
  question: "29. List five requirements for a petition to be entertained.",

  answer: [
    "a. It must be routed through the petitioner’s immediate superior and proper Departmental channel",
    "b. It must bear the full name, address and signature of the petitioner(it must not be anonymous)",
    "c. It must not deal with a case that is already in a court of law",
    "d. It must be legible",
    "e. It must not be worded in abusive, improper or foul language",
    "f. It must not be submitted more than six months after the decision complained of has been given",
    "g. It must not repeat the substance of a previous petition",
  ],
});

questions.push({
  question: "30. What is Leave? ",

  answer: [
    "Leave is the AUTHORIZED ABSENCE of an officer from duty for a SPECIFIED PERIOD. An officer shall qualify for annual leave not less than six (6) months after the previous leave within a leave earning service",
  ],
});

questions.push({
  question: "31. List types of Authorized Leave ",

  answer: [
    "a. Annual leave",
    "b. Casual leave",
    "c. Proportional leave",
    "d. Sick leave",
    "e. Maternity leave",
    "f. Study leave with pay",
    "g. Study leave without pay",
    "h. Sabbatical leave",
    "i. Pre-retirement leave",
    "j. Leave of Absence",
    "k. Leave on compassionate grounds",
    "l. Leave for religious purposes",
    "m. Examination leave",
  ],
});

questions.push({
  question: "32. What is maternity Leave? ",

  answer: [
    "Maternity leave is the authorized absence from duty of a serving female officer granted by a superior officer on account of pregnancy covering the prenatal and post natal periods",
  ],
});

questions.push({
  question: "33. What is sick Leave? ",

  answer: [
    "Sick leave is the absence of an officer from duty on account of ill-health as authorized by a healthcare provider",
  ],
});

questions.push({
  question: "34. What is casual leave?",

  answer: [
    "This is the absence of an officer from duty for a short period not exceeding an aggregate of five (5) working days within a leave year as may be authorized by a superior officer. Casual leave shall only be granted where an officer has exhausted his/her annual leave",
  ],
});

questions.push({
  question: "35. What is sabbatical Leave?",

  answer: [
    "Sabbatical leave is the authorized absence of an officer on GL 15 or its equivalent and above from duty for the purpose of research either within or outside Nigeria. This is given for a period of 12 months once in five (5) years.",
  ],
});

questions.push({
  question: "36. What is study leave?",

  answer: [
    " Study leave is the leave granted to a confirmed serving officer to undertake an approved course of study within or outside the country",
  ],
});

questions.push({
  question: "37. What is Proportionate Leave?",

  answer: [
    "Proportionate Leave” (Pro-rata) is a vacation granted to a new or retiring officer in proportion to the number of days he has put into the service. Any period of service under 30 days is not reckonable for Leave. Officers who attend courses of instruction/training over a period of six months shall be entitled to proportionate leave for the period they put in service. An officer who is retiring within the period of Leave-Earning Service shall be entitled to proportionate leave",
  ],
});

questions.push({
  question:
    "38. An officer is ill and is unable to report for duty. List any three documents with which the officer can support his prolonged absence from duty ",

  answer: [
    "a. Excuse Duty Certificate",
    "b. Light Duty Certificate",
    "c. Medical Certificate of treatment duly authorized by a healthcare provider",
  ],
});

questions.push({
  question: "39. Mention three types of study leave",

  answer: [
    "In Service Training: An Officer shall be granted in service training for a period not exceeding two (2) years with normal emoluments, allowances and course fees and the period of study shall count towards gratuity and pension.",
    "Study Leave with Pay: Study leave with pay shall be granted to an officer with normal emoluments and allowances. The duration of study leave with pay shall not exceed two years. If however, an officer has a carry over, the period of extension shall not be more than one year. This period shall also attract pension, right of emoluments and allowances.",
    "Study Leave without Pay: Study leave without pay is granted an officer where the proposed courses of study are not contained in the approved training proposals for the Ministries/Extra Ministerial Offices.",
  ],
});

questions.push({
  question: "40. List the conditions for study leave without pay  ",

  answer: [
    "a. Officers on study leave without pay are not entitled to emoluments and allowances",
    "b. The duration of the study leave without pay shall not be more than four years in the first instance, after which the officer can apply for one year extension if the need arises",
    "c. The period of leave shall not be granted as a break in Service",
  ],
});

questions.push({
  question: "41. List the conditions for study leave with pay  ",

  answer: [
    "a. The officer must not be under any disciplinary action",
    "b. His appointment must have been confirmed",
    "c. He/she must provide evidence of letter of admission",
    "d. Duration of the course must not be more than two years",
    "e. He must prove that the course would enhance his performance and add value to the service",
    "f. The course must be relevant to the officer’s profession",
  ],
});

questions.push({
  question: "42. What is Leave of Absence?",

  answer: [
    "Leave of absence is the absence of an officer from duty authorized on grounds of public policy.",
    "Leave of absence on grounds of public policy is approved by the Head of the Civil Service of the Federation on the recommendation of the Permanent Secretary/Head of Extra Ministerial Office. ",
    "AN OFFICER ON LEAVE OF ABSENCE SHALL NOT ACCEPT ANY PAID APPOINTMENT WITHOUT PREVIOUSLY OBTAINING APPROVAL OF THE OFFICE OF ESTABLISHMENTS AND PENSION (PSR 030429)",
  ],
});

questions.push({
  question: "43. List five types of Leave of Absence?",

  answer: [
    "a. Leave of absence to join spouse on course of instruction of not less than 9 months duration abroad",
    "b. Special Leave of absence to join spouse on grounds of public policy",
    "c. Leave of Absence for Technical Aid Corps Programme",
    "d. Leave of absence for Special/Personal Assistants",
    "e. Leave of absence for spouses of Presidents; Vice Presidents, Governors, Deputy Governors on grounds of public policy",
  ],
});

questions.push({
  question: "44.What is an Allowance? ",

  answer: [
    "This is a monetary benefit other than salary granted to an officer for a specific purpose.",
  ],
});

questions.push({
  question: "45. List five types of Allowances",

  answer: [
    "a. Resettlement Allowance",
    "b. Duty Tour Allowance",
    "c. Estacode Allowance",
    "d. Overtime Allowance",
    "e. Books Allowance",
    "f. Call Duty Allowance",
    "g. Disengagement Allowance",
    "h. Acting Allowance",
    "i. Transport and Local Running",
    "j. Project Allowance",
    "k. Uniform Allowance",
    "l. Teaching Allowance",
  ],
});

questions.push({
  question: "46. Estacode Allowance for the following category of officers  ",

  answer: [
    "i. Ministers/HoS/Executive Chairmen of Government Agencies - US$900",
    "ii. Permanent Secretaries/CEOs - US$600",
    "iii. GL 15 - 17 or its equivalent - US$425",
    "iv. GL 07 - 14 or its equivalent - US$381",
    "v. GL 01 - 06 or its equivalent - US$206",
  ],
});

questions.push({
  question:
    "47.  Duty Tour Allowances for the following category of officers: ",

  answer: [
    "i. GL 01 - 04 or its equivalent - N10,000",
    "ii. GL 5 - 6 or its equivalent - N15,000",
    "iii. 07 - 10 or its equivalent - N17,500",
    "iv. GL 12 - 13 or its equivalent - N20,000",
    "v. GL 14 - 15 or its equivalent - N25,000",
    "vi. GL 16 - 17 or its equivalent - N37,500",
    "vii. Permanent Secretary or equivalent - N70,000",
    "viii. HOCSF/SGF/Chairmen of Government Agencies or equivalent - N80,000",
  ],
});

questions.push({
  question: "48. What is Overtime?",

  answer: [
    "Overtime is the additional time spent outside the approved time of work. Overtime allowance shall be paid to officers on GL. 14 and below. In computing overtime allowance, the normal approved working time per week shall be from 8:00 am to 4:00 pm from Monday to Friday. This excludes Saturdays, Sundays and Public holidays. Payment of overtime shall be made for time worked in excess of the normal working hours.",
  ],
});

questions.push({
  question: "49. State five circumstances in which officers can work overtime",

  answer: [
    "a. Officers attached to top management/officials",
    "b. On special assignments",
    "c. Period of budgetary preparations",
    "d. Period of closing of annual accounts",
    "e. Any other assignment as may be approved by the Director General/Chief Executive and above",
  ],
});

questions.push({
  question:
    "50. List five (5) important items that can be found on the Nominal Roll/seniority list of a government establishment.",

  answer: [
    "a. Name of Officer",
    "b. Date of Birth",
    "c. Sex",
    "d. State of Origin/LGA",
    "e. Qualifications",
    "f. Date of 1st Appointment",
    "j. Rank",
    "h. Grade Level",
    "i. Date of Present Appointment",
    "j. Location",
  ],
});

questions.push({
  question:
    "51. You have been requested to forward your vacancy returns to the OHCSF. In what ways are vacancies created in the Federal Public Service:  ",

  answer: [
    "a. When an officer is promoted",
    "b. When an officer retires",
    "c. When an officer dies",
    "d. When an officer is dismissed",
    "e. When an officer’s appointment is terminated",
    "f. When an officer resigns his appointment",
  ],
});

questions.push({
  question:
    "52. Your agency is seeking to recruit essential staff to fill the available vacancies. Mention five (5) documents that would be required to enable the Ministry process a request for waiver from the OHCSF:",

  answer: [
    "a. Request letter for Waiver",
    "b. Current Nominal Roll of the Organization",
    "c. List of exited staff",
    "d. Authorized Establishment from the OHCSF",
    "e. Budget Appropriation for the exercise",
    "f. List of categories and number of vacancies to be filled",
    "g. Financial Implication for appointing the new Officers",
  ],
});

questions.push({
  question:
    "53. An officer has informed you that he/she would proceed to the United States for a medical checkup. List the categories of officers that require the approval of the President to proceed for medical treatment abroad.",

  answer: [
    "a. Members of the Federal Executive Council",
    "b. Inspector General of Police and his Deputies",
    "c. Chairman of the Federal Civil Service Commission and full time Chairmen of Government Establishments",
    "d. Secretary to the Government of the Federation",
    "e. Head of the Civil Service of the Federation",
    "f. Permanent Secretaries/DGs/CEOs",
    "g. Auditor General for the Federation",
    "h. Accountant General of the Federation",
    "i. Officers of the Armed Forces from the rank of Brigadier General (or its equivalent) and above",
  ],
});

questions.push({
  question:
    "54. The following officers are to only inform the President when proceeding for medical treatment abroad.",

  answer: [
    "a. Senate President",
    "b. Speaker of the House of Representatives",
    "c. Chief Justice of Nigeria",
    "d. Justices of the Supreme Court",
    "e. Justices of the Court of Appeal",
    "f. Members of the National Assembly",
  ],
});

questions.push({
  question: "55. List five sources of Information in the Public Service.",

  answer: [
    "a. Public Service Rules",
    "b. Financial Regulations",
    "c. Civil Service Handbook",
    "d. Circulars and Circular letters",
    "e. Official Gazettes",
    "f. Treasury Circulars",
    "g. Government White Papers",
    "h. Laws of the Federation",
    "i. Constitution of the Federal Republic of Nigeria",
  ],
});

questions.push({
  question:
    "56. List four (4) means of official communication In the Federal Public Service",

  answer: [
    "a. Circular and Circular Letters",
    "b. Memos",
    "c. Briefs",
    "d. File Notes",
    "e. Email",
    "f. Handover Notes",
  ],
});

questions.push({
  question:
    "57. List four (4) Institutional Frameworks responsible for Appointment, Promotion and Discipline in the Federal Public Service",

  answer: [
    "a. Federal Civil Service Commission",
    "b. Senior Staff Committee (Pool)",
    "c. Junior Staff Committee (Headquartres)",
    "d. Junior Staff Committee (Pool)",
    "e. Federal Service Management Committee",
  ],
});

questions.push({
  question: "58. State the composition of the Senior Staff Committee",

  answer: [
    "a. All Directors in the Ministry are members",
    "b. The Permanent Secretary is the Chairman",
    "c. The Director, Human Resource management is a Member/Secretary",
    "d. A Commissioner from the Federal Civil Service shall be in attendance as Observer",
    "e. Quorum is simple majority provided that a Commissioner from the FCSC is in attendance",
    "ABSENCE OF A COMMISSIONER FROM THE FCSC SHALL RENDER DECISIONS TAKEN BY THE SSC NULL AND VOID",
  ],
});

questions.push({
  question: "59. State the composition of the Junior Staff Committee (Local)",

  answer: [
    "a. Membership: Not less than 7 and not more than 9 senior officers on SGL 12",
    "b. Director, Human Resource Management is the Chairman",
    "c. Quorum is five (5) members including the Chairman",
  ],
});

questions.push({
  question:
    "60. State the composition of the Junior Staff Committee (Headquartres)",

  answer: [
    " i. Membership: Not less than 7 and not more than 9 senior officers of the Ministry in the State who are not below SGL 08. The Chairman of the State Civil Service shall attend the meeting for appointment matters as Observer",
    "ii. Director, Human Resource Management is the Chairman",
    "iii. Quorum is five (5) members including the Chairman",
  ],
});

questions.push({
  question: [
    "61. Write Short Notes on the following:",
    " a. Promotion",
    " b. Conversion",
    " c. Advancement",
    " d. Upgrading",
  ],

  answer: [
    "a. PROMOTION is the elevation of an officer from a lower rank to a higher rank having fulfilled the conditions for promotion as stated below:",
    " i. The officer must not have any disciplinary action pending against him",
    "ii. His appointment must have been confirmed",
    "iii. He must have spent the required number of years on post (maturity)",
    "• GL 06 & below - 2 years",
    "• GL 07-14 - 3 years",
    "• GL 15-17 - 4 years",
    "iv. He must possess satisfactory APER for three (3) years",
    "v. He must participate in the promotion examination and score at least 60% of the total score",
    "vi. There must be vacancy",
    "b. CONVERSION is the elevation or movement of an officer from an inferior cadre to a superior cadre, or from one cadre to another having obtained the required additional qualification(s) for the post eg conversion from Executive to Administrative cadre. This is always considered by the SSC and approved by the FCSC.",
    "c. ADVANCEMENT is the elevation of an officer from a lower grade to a higher grade level having passed the prescribed confirmation examination as specified in the Schemes of Service",
    "d. UPGRADING is the elevation of an officer to a higher grade level WITHIN THE SAME CADRE having obtained additional qualifications",
  ],
});

questions.push({
  question:
    "62.Outline the responsibilities/obligations of Government when a pensionable officer dies in the service of Government",

  answer: [
    "i. Payment of the cost of burial expenses including preparation of the body and embalmment, settlement of mortuary bills and provision of casket subject to the following maximum amount:",
    "a. GL 01 - 06 - N100,000",
    "b. GL 07 - 14 - N200,000",
    "c. GL 15 - 17 - N300,000",
    "d. Consolidated- N500,000",
    "ii. Payment to the family of the deceased, the cost of one full page advertisement in one national newspaper for publication of obituary at the prevailing rates",
    "iii. Transportation of corpse to officer’s home town at reasonable cost",
  ],
});

questions.push({
  question:
    "63. Outline the responsibilities of Government when a pensionable officer dies abroad while on official duty or course of instruction",

  answer: [
    "i. Repatriation of the corpse at the request of the deceased’s family;",
    "ii. Preparation of the body (embalmment)",
    "iii. Purchase of a reasonable priced coffin or casket as stipulated by airline regulations",
    "iv. Transportation of corpse to officer’s home town at reasonable cost",
    "v. Payment to the family of the deceased, the cost of one full page advertisement in one national newspaper for publication of obituary at the prevailing rates",
  ],
});

questions.push({
  question: "64. What is serious financial embarrassment?",

  answer: [
    "Serious financial embarrassment is the state of an officer’s indebtedness which is causing him serious financial hardship. An officer is said to have serious financial hardship:",
    "i. When his total debt is more than three (3) times his monthly emoluments",
    "ii. When a court of competent jurisdiction gives ruling that he is a judgement debtor",
    "iii. When he is adjudged bankrupt or an insolvent wage earner",
    "THE PUNISHMENT FOR SERIOUS FINANCIAL EMBARASSMENT IS DISMISSAL",
  ],
});

questions.push({
  question:
    "65. From whom/where can an officer in the Federal Public Service borrow money from?",

  answer: [
    "An officer may borrow money from:",
    "i. the bank, insurance companies, cooperative societies",
    "ii. incur debts through acquiring goods in terms hire purchase provided the aggregate of his debts is not likely to cause him serious financial embarrassment",
  ],
});

questions.push({
  question:
    "66. From whom/where is an officer prohibited from borrowing money?",

  answer: [
    "i. a person who is directly or indirectly subject to his/her official authority",
    "ii. someone who resides, possesses land or carries on business within the local limit of his official authority",
    "iii. someone with whom the officer has or is likely to have official dealings; or",
    "iv. a person who is a registered money lender",
  ],
});

questions.push({
  question:
    "67. Mr. Tony Adama, Deputy Director, Staff Welfare/Training was recently posted from Federal Ministry of Works to Federal Ministry of Women Affairs. The Director, Human Resource Management reminded him to prepare his hand over note for his successor before leaving the Ministry. List any five (5) features expected in the handing over note:",

  answer: [
    "a. It must contain the schedule of duties of the office or post",
    "b. Inventory of the office",
    "c. Useful references that will aid the officer taking over",
    "d. It must detail unfinished matters, eg new policies",
    "e. Replies to important letters, inquiries",
    "f. Files marked B.U (bring up)",
    "g. Dates of impending meetings",
    "h. Matters being KIV (kept in view)",
    "i. Peculiar problems relating to the schedule which may be looked into by an officer taking over",
  ],
});

questions.push({
  question: "68. List five classified documents in the Federal Public Service:",

  answer: [
    "a. Restricted Documents",
    "b. Staff Confidential Documents",
    "c. Confidential Documents",
    "d. Secret Documents",
    "e. Top Secret Document",
  ],
});

questions.push({
  question: "69. List five documents of the Federal Executive Council (FEC)",

  answer: [
    "a. Council Agenda",
    "b. Council Memorandum",
    "c. Council Note",
    "d. Council Conclusion",
    "e. Council Extract",
  ],
});

questions.push({
  question: "70. What is a Brief?",

  answer: [
    "A Brief is a summary of the facts of a case or matter drawn up for a superior officer",
  ],
});

questions.push({
  question: "71. List Features of  a Brief?",

  answer: [
    "a. It must have a good heading which gives an idea of the contents of the brief",
    "b. It must have an introduction which summarizes the subject matter",
    "c. It must contain a clear analysis of the of the issues at stake",
    "d. It must contain a specific recommendation or suggestion",
    "e. It must be concise and constructive",
  ],
});

questions.push({
  question: "72. Give the full meaning of the following acronyms:",

  answer: [
    "a. OBE - OVERTAKEN BY EVENT",
    "b. KIV - KEEP IN VIEW",
    "c. BU - BRING UP",
    "d. IPPIS - INTEGRATED PAYROLL AND PERSONNEL INFORMATION SYSTEM",
    "e. GIFMIS - GOVERNMENT INTEGRATED FINANCIAL MANAGEMENT INFORMATION SYSTEM",
    "f. LEAD P - LEADERSHIP ENHANCEMENT AND DEVELOPMENT PROGRAMME",
    "g. SMAT P - STRUCTURED MANDATORY ASSESMENT BASED TRAINING PROGRAMME",
    "h. FCCSIP - FEDERAL CIVIL SERVICE STRATEGY AND IMPLEMENTATION PLAN",
    "i. LPC - LAST PAY CERTIFICATE",
    "j. FNA - FOR NECESSARY ACTION",
    "k. PA - PUT AWAY",
    "l. PV - PAYMENT VOUNCHER",
    "m. FYI - FOR YOUR INFORMATION",
    "n. SRV - STORES RECEIPT VOUCHER",
    "o. ROS - RECORD OF SERVICE",
    "p. LPO - LOCAL PURCHASE ORDER",
    "q. FYC - FOR YOUR CONSIDERATION",
  ],
});

questions.push({
  question: "73. List five responsibilities of an Accounting Officer",

  answer: [
    "a. Ensuring that proper budgetary and accounting systems are established and maintained to enhance internal control, accountability and transparency",
    "b. Ensuring that the essential management control tools are put in place to minimize waste and fraud",
    "c. Rendering monthly and other accounting returns and transcript to the Accountant General of the Federation as required by the Financial Regulations",
    "d. Ensuring the safety and proper maintenance of all government assets under his care",
    "e. Ensuring personal appearance before the Public Accounts Committee to answer audit queries to ministry/extra ministerial department or agency",
    "f. Ensuring accurate collection and accounting for all public monies received and expended",
    "g. Ensuring prudence in the expenditure of public funds",
    "h. Ensuring proper assessments, fees, rates and charges are made where necessary",
  ],
});

questions.push({
  question: "74. What is Budgeting? ",

  answer: [
    "A budget is a financial plan for a defined period, often one year. It is the sum of finances allocated for a particular purpose and the summary of intended expenditures and income. It also involves proposals for how to meet them",
  ],
});

questions.push({
  question: "75. List five types of Budget. ",

  answer: [
    "a. Capital Budget",
    "b. Zero Based Budget",
    "c. Cash Budget",
    "d. Surplus Budget",
    "e. Supplementary Budget",
    "f. Deficit Budget",
  ],
});

questions.push({
  question: "76. List five (steps) to Budgeting ",

  answer: [
    "a. Budget Formulation",
    "b. Budget Approval",
    "c. Budget Implementation/Execution",
    "d. Budget Monitoring",
  ],
});

questions.push({
  question: "77. List five Approving Authorities for procurement",

  answer: [
    "a. Federal Executive Council",
    "b. Ministerial Tenders Board",
    "c. Permanent Secretary (Accounting Officer)",
    "d. Parastatal Tenders Board",
    "e. Director General/CEO (Accounting Officer)",
  ],
});

questions.push({
  question: "78. Approval threshold for the following category of officers",

  answer: [
    "a. Permanent Secretary Goods - Less than N20M",
    "b. Permanent Secretary Works - Less than N30M",
    "c. Ministerial Tenders Board Goods - N20M & above but less than N300M",
    "d. Ministerial Tenders Board Works - N30M & above but less than N1.5B",
    "e. DG/CE Goods - Less than N10M",
    "f. DG/CE Works - Less than N20M",
    "g. Parastatal Tenders Board Goods - N10M & above but less than N100M",
    "h. Parastatal Tenders Board Works - N20M & above but less than N500M",
  ],
});

questions.push({
  question:
    "79. The civil service is a body or organ which enjoys continuity of existence. Mention 10 qualities that can help to improve the image of the service",

  answer: [
    "a.Discipline",
    "b. Honesty",
    "c. Confidentiality",
    "d. Courtesy",
    "e. Avoidance of Delay",
    "f. Courage",
    "g. Integrity and Moral Rectitude",
    "h. Loyalty",
    "i. Political Neutrality",
    "j. Modesty",
    "k. Cooperation",
    "l. Industry",
    "m. Probity",
    "n. Accountability",
    "n. Tidiness in Work Environment",
    " o.Efficiency",
    "p. Trust",
    "q. Tact",
  ],
});

questions.push({
  question:
    "80. The federal service is guided by extant rules and regulations that must be strictly adhere to in the conduct of government business at all times. Failure to comply will be seen as act of gross misconduct mention at least 5 acts that can be termed as gross misconduct that you know. ",

  answer: [
    "1. Falsification of records",
    "2. Suppression of records",
    "3. Withholding of files",
    "4.Conviction on a criminal charge",
    "5.Absence from duty without leave",
    "6. False claims against Government",
    "7. Engaging in partisan political activities",
    "8. Bankcruptcy/serious financial embarrassment",
    "9.Bribery ",
    "10. Corruption",
    "11. Embezzlement",
    "12. Misappropriation",
    "13. Willful damage of public property",
  ],
});

questions.push({
  question: "81. Mention 10 types of leave in the public service   ",

  answer: [
    "1.Annual leave",
    "2.Proportionate",
    "3.Deferred",
    "4.Casual",
    "5.Sick",
    "6.Maternity",
    "7.Examination",
    "8.Sabbatical",
    "9.Study leave with pay",
    "10.Study leave without pay",
    "11.Leave on compassionate ground",
    "12. Pre-retirement leave",
    "13.Leave of absence",
    "14.Leave on compassionate ground",
    "15.Pre-retirement leave",
    "16.Leave of absence",
    "17.Leave on grounds of urgent private affairs",
    "18.Leave for cultural and sporting activities",
    "19.Leave to take part in Trade Union activities",
  ],
});

questions.push({
  question:
    "82. When an Officer dies in service what are his or her entitlements ",

  answer: [
    "1.Group life issurance benefit from the Retirement Savings Account",
    "2.Publication of obituary",
    "3.Settlement of mortuary bills",
    "4.Provision of casket",
    "5.Repatriation of corpse to the deceased home town",
  ],
});

questions.push({
  question:
    "83. Mention seven (7) ways by which an officer can exit the service ",

  answer: [
    "1.Resignation",
    "2.Withdrawal of service",
    "3.Voluntary retirement",
    "4.Statutory retirement",
    "5.Termination of appointment",
    "6.Death",
    "7.Dismissal",
    "8.Compulsory retirement",
  ],
});

questions.push({
  question:
    "84. You have just been appointed to a new office.What is the important document that must be received from the outgoing officer",

  answer: ["Handing over note"],
});

questions.push({
  question: "85. List 4 features of Hand over note",

  answer: [
    "1.Name of the handing over officer",
    "2.Name of the officer  taking over ",
    "3.Date of Handing over",
    "4.Job title and functions/descriptions",
    "5.Outstanding job you are handing over",
    "6.Official documents  of the office",
    "7.Status of recent and current project/reports/meetings",
    "8.Supervisors and reporting procedures.",
    "9. Where find files (hard copies/soft copies)",
    "10.Key documents/reference materials (attached when possible).",
    "11. Contact information after departure",
    "12. Signature and date of both officer",
  ],
});

questions.push({
  question:
    "86. List any 6 items that can be found in the seniority list of staff nominal Roll",
  answer: [
    "a. Qualification and subjects",
    "b. Rank and Salary Grade level",
    "c. Sex and Date of birth",
    "d. State of origin",
    "e. Local Government Area",
    "f. Date of confirmation of appointment",
    "g. Date of first appointment",
    "h. Date of present appointment",
  ],
});

questions.push({
  question:
    "87. Identify the authority responsible for appointment, promotion and discipline of officers in the Service",

  answer: [
    "For those of Grade level, 01 to 06: the Junior Staff Committee of the relevant Ministry shall make the appointment. To be represented in that setting are the FCSC and OHCSF, and final approval comes from the Permanent Secretary of the particular Ministry. Their promotions are also likely conducted by the Ministry: Extra Ministerial Department.",

    "For Grade levels, 07 to 10: This is by Federal Civil Service Commission through an annual entry competitive Public/Civil Service Examination conducted by the Federal Civil Service Commission in conjunction with Office of the Head of the Civil Service of the Federation (OHCSF), Administrative Staff College of Nigeria (ASCON), and Public Service Institute of Nigeria (PSIN)",

    "For Grade levels 12 to 14: This is by the Federal Civil Service Commission after due advertisement.The recommendation of the extra ministerial Department or the relevant cadre pool through the Office of the Head of Service of the Federation.",

    "For Grade levels, 15 to 17: The applications for these appointments are to be routed through the Head of Service while the examination/interview and other appointment processes will be handled by the Federal Civil Service Commission.The promotion here is also done by the Federal Civil Service Commission on the recommendation of the Extra Ministerial Department or the relevant cadre pool through the Office of the Head of Service of the Federation.",

    "The disciplinary power over officers of the federal  service is vested on the federal civil service commission . This power can be delegated to any member of the commission or an officer of the  service",
    "The federal civil service commission has delegated this disciplinary action to the permanent secretaries and the heads of extra ministerial departments for officers on grade levels 01 to 13 with the exception of power for dismissal which is only limited to grade levels 01 to 06.",
  ],
});

questions.push({
  question: "88. What is the difference between ministry and parastatal?",

  answer: [
    "The Federal Ministries of Nigeria are civil service departments that are responsible for delivering various types of government services. Each ministry is headed by a Permanent Secretary who reports to a Minister in the Federal Cabinet.",

    "Some government functions are provided by commissions or parastatals (government-owned corporations) that may be independent or associated with a ministry.",
  ],
});

questions.push({
  question: "89. What is an extra-ministerial department",

  answer: [
    "Extra-ministerial department is a unit of government which function is independent of any ministerial oversight. In some cases, an extra-ministerial body performs a function that overlaps many ministries e.g Office of Auditor General of the Federation which is sometimes not put under the Ministry of Finance. In some countries, the office of the Chief of Staff to the President and the Secretary to the Government of the Federation are extra-ministerial bodies which head take part in cabinet meetings, manage budgets but are only answerable to the President",
  ],
});

questions.push({
  question: "90. What is the latest/current edition of the PRS and when ",

  answer: ["2021 Edition, It took effect on 27th, July 2023."],
});

questions.push({
  question: "91. List the continents of the world ",

  answer: [
    "Africa",
    "Asia",
    "Antarctica",
    "Australia/Oceania",
    "Europe",
    "North America",
    "South America",
  ],
});

questions.push({
  question: "92. Mention five items found in record of service",

  answer: [
    "1.Full name ",
    "2.Date of Birth",
    "3.State/LGA of Origin",
    "4.Record of Career Progression",
    "5.Record of leave",
    "6.Record of Additional qualifications obtained ",
    "7.Record of Commendations",
    "8.Record of Sanctions",
    "9. Record of 1st Appointment",
  ],
});

questions.push({
  question: "93. What is Minute? ",

  answer: [
    "A Minute may be defined as a communication in writing, usually in files between two or more officials",
    "Minutes are normally used to consider and settle matters or to direct what action May be taken in a given. circumstance. ",
    "Minuting is the act of writing a minute.",
  ],
});

questions.push({
  question: "94. What is Circular? ",

  answer: [
    "Circular is a document usually prepared by a higher authority and passover to those concern for compliance",
    "Circular mostly has to do with government policies.",
  ],
});

questions.push({
  question: "95. What is Memorandum? ",

  answer: [
    "Memorandum is a policy proposal for tabling at a meeting ",
    "It can be a proposal for presenting to a higher authority",
    "It could also be from a superior officer to his subordinate  directing for an appropriate   action to be taken on a particular issue",
  ],
});

questions.push({
  question: "96. What is Report? ",

  answer: [
    "Report is details of the facts of a matter drawn up for a superior officer or a committee,",
  ],
});

questions.push({
  question: "97. What is a Brief?",

  answer: [
    "A Brief is a summary of the facts of a case or matter drawn up for a superior officer",
  ],
});

questions.push({
  question: "98. What is a Letter?",

  answer: [
    "A letter is a formal communication between two people or institutions and it must carry the address of the sender and the receiver",
  ],
});

questions.push({
  question: "99. What is a Endorsement?",

  answer: [
    "Endorsement is appending of signature of the author of a document or message. ",
  ],
});

questions.push({
  question:
    "100. List the Grade levels of the Executive Cadre in Public Service",

  answer: [
    "14 - Chief Executive Officer ",
    "13 -Assistant Chief Executive Officer",
    "12 - Principal Executive Officer I",
    "10 - Principal Executive Officer II",
    "9 - Senior Executive Officer",
    "8 - Higher Executive Officer",
    "7 - Executive Officer",
    "6 - Assistant Executive Officer",
  ],
});

questions.push({
  question:
    "101. List the Grade levels of the Administrative Cadre in Public Service",

  answer: [
    "17 - Director",
    "16 - Deputy Director",
    "15 - Assistant Director",
    "14 - Chief Administrative Officer ",
    "13 - Assistant Chief Administrative Officer",
    "12 - Senior Administrative Officer ",
    "10 - Principal Administrative Officer",
    "9 -  Administrative Officer I",
    "8 -  Administrative Officer II",
  ],
});

questions.push({
  question: "102. List the criteria for promotion in Public Service",

  answer: [
    "1.You must have completed the required minimum years required to be spent on a post according to your grade level - maturity",
    "2.You must have satisfactory work performance records in lower grade.",
    "3.You must sit for and pass promotion examination",
    "4.You must not be under disciplinary action ",
    "5.You must have the ability and competence (potential) to perform the responsibilities of the higher post efficiently",
    "6.There must be vacancy ",
  ],
});

questions.push({
  question: "103. Whose picture is on the following Naira Note",

  answer: [
    "i	N5 – Tafawa Balewa",
    "ii.	N10 - Alvan Ikonu",
    "iii.	N20 - Ladi Kwali",
    "iv. N50 - Fishermen (WaZoBia)",
    "v.	N100 - Obafemi Awolowo",
    "vi.	N200 - Sir Ahmadu Ibrahim Bello",
    "vii.	N500 – Dr. Nnamdi Azikiwe",
    "viii.	N1000 - Dr. Clement Isong and Alh. Aliyu Mai Bornu",
  ],
});

questions.push({
  question: "104. List 5 ways of derterminin seniority in service",

  answer: [
    "i	Date of assumption of duty",
    "ii.	Date of letter of Appointment",
    "iii.	Date officer attains higher rank",
    "iv. Grade Level",
    "v.	N100 - Obafemi Awolowo",
    "vi.	N200 - Sir Ahmadu Ibrahim Bello",
    "vii.	N500 – Dr. Nnamdi Azikiwe",
    "viii.	N1000 - Dr. Clement Isong and Alh. Aliyu Mai Bornu",
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
).innerHTML = ` ${total} Questions. Update continues....`;
