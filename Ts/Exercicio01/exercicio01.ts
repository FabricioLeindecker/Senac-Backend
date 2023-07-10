/* JavaScript
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if(a === b && b === c) {
        return "Equilatero";
    }else {
        return "Isósceles"
    }
}
*/
//TypeScript
function checkTriangle(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilatero ";
    } else {
        return "Isósceles";
    }
}