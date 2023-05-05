// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//First declare an array with top mailadres

let emails = ["n.eeken@novi-education.nl","t.mellink@novi.nl", "a.wiersma@outlook.com" ];

//second declare function with emails as parameter

function getEmailDomains(emails){

//inside the function we declare empty array to store domain names

    let domainNames = [];

//use for loop to iterate trough emails array

    for (let i = 0; i < emails.length; i++ ){

// split domain part of emails then store it in a variable

        let domainPartOfEmail  = emails[i].split('@');
        let domain = domainPartOfEmail[1];

// add domainPartOfEmails in empty array domainNames

        domainNames.push(domain);
    }
    return domainNames
}

let domainNames = getEmailDomains(emails);
console.log(domainNames);



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com")  geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emails){
//    add novi.nlaapjesk@outlook.com in previously declared array: let emails = [...]
    emails.push("novi.nlaapjesk@outlook.com");
//    loop trough array emails and set up if else structure to check whether teacher, student or external
    for (let i = 0; i < emails.length; i++){
        //after looping put results in new variable
        let email = emails[i];

        if (email.includes ("@novi.nl")){
            console.log(email + " is a teacher email");
        } else if (email.includes ("@novi-education.nl")){
            console.log(email + " is a student email")
        } else {
            console.log(email + " is an external email");
        }
    }
}
//call function to show results
typeOfEmail(emails);





/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

emails.push("novi.nlaapjesk@outlook.com", "n.eeken@novinl.","tessmellink@novi,nl");

function checkEmailValidity(emails){
    for (let i = 0; i < emails.length; i++) {
        let checkedEmail = emails[i];
        let isValid = true;

        // Check validity based on parameters
        if (!checkedEmail.includes('@') ||
            checkedEmail.includes(',') ||
            checkedEmail.endsWith('.')) {
            isValid = false;
        }
        console.log(`${checkedEmail} is ${isValid ? 'valid' : 'invalid'}`);

    }
}

checkEmailValidity(emails);

