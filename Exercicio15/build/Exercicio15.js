"use strict";
function validationRenovation(dateBirth, dateIssue) {
    const currentDate = new Date();
    const birthdayDate = new Date(dateBirth);
    let dateOfIssue = new Date(dateIssue);
    let birthdayDateTimestamp = birthdayDate.getTime();
    let dateIssueTimestamp = dateOfIssue.getTime();
    let currentDateTimestamp = currentDate.getTime();
    let dateSinceIssue = currentDateTimestamp - dateIssueTimestamp;
    let currentAge = currentDateTimestamp - birthdayDateTimestamp;
    if (currentAge <= 20 && dateSinceIssue >= 5) {
        return true;
    }
    else if ((currentAge < 20 || currentAge <= 50) && dateSinceIssue >= 10) {
        return true;
    }
    else if (currentAge > 50 && dateSinceIssue >= 15) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validationRenovation("24/04/1993", "07/11/2015"));
console.log(validationRenovation("01/01/1971", "01/01/2000"));
//# sourceMappingURL=Exercicio15.js.map