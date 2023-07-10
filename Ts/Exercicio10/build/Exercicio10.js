"use strict";
var gender;
(function (gender) {
    gender["ACTION"] = "A\u00E7\u00E3o";
    gender["DRAMA"] = "Drama";
    gender["COMEDY"] = "Com\u00E9dia";
    gender["ROMANCE"] = "Romance";
    gender["TERROR"] = "Terror";
})(gender || (gender = {}));
function streaming(name, date, genre, avaliation) {
    console.log(typeof name, typeof date, typeof genre, typeof avaliation);
    console.log("Nome:", name, "\nData de lançamento:", date, "\nGênero:", genre, avaliation !== undefined ? "\nPontuação: " + avaliation : '');
}
streaming("John Wick", 2014, gender.ACTION, 90);
streaming("Exorcista", 1990, gender.TERROR);
//# sourceMappingURL=Exercicio10.js.map