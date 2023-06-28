"use strict";
var GENDER;
(function (GENDER) {
    GENDER["ACTION"] = "A\u00E7\u00E3o";
    GENDER["DRAMA"] = "Drama";
    GENDER["COMEDY"] = "Com\u00E9dia";
    GENDER["ROMANCE"] = "Romance";
    GENDER["TERROR"] = "Terror";
})(GENDER || (GENDER = {}));
function streaming(name, date, gender, avaliation) {
    console.log(typeof name, typeof date, typeof gender, typeof avaliation);
    console.log("Nome:", name, "Data de lançamento:", date, " Gênero:", gender, avaliation || '');
}
streaming("John Wick", 2014, GENDER.ACTION, 90);
streaming("Exorcista", 1990, GENDER.TERROR);
//# sourceMappingURL=Exercicio10.js.map