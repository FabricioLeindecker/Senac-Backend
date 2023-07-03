"use strict";
function checkUpdateId(birthdayYear, issueYear) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthday = new Date(birthdayYear);
    const issueDate = new Date(issueYear);
    const ageInYears = currentYear - birthday.getFullYear();
    const timeSinceIssue = currentDate.getTime() - issueDate.getTime();
    const yearsSinceIssue = new Date(timeSinceIssue).getFullYear() - 1970;
    if (ageInYears <= 20 || (ageInYears === 21 && birthday > currentDate)) {
        return yearsSinceIssue >= 5;
    }
    else if (ageInYears <= 50 || (ageInYears === 51 && birthday > currentDate)) {
        return yearsSinceIssue >= 10;
    }
    else {
        return yearsSinceIssue >= 15;
    }
}
console.log(checkUpdateId("10/03/1980", "10/03/2010"));
console.log(checkUpdateId("10/03/2000", "10/03/2015"));
//# sourceMappingURL=Exercicio15.js.map