let v1 = 10;
let v2 = 32;
let op = "+";

switch(op){
    case "+":
        console.log(`${v1} + ${v2} = ${v1 + v2}`);
        break;
    case "-":
        console.log(`${v1} - ${v2} = ${v1 - v2}`);
        break;
    case "*":
        console.log(`${v1} * ${v2} = ${v1 * v2}`);
        break
    case "/":
        console.log(`${v1} / ${v2} = ${v1 / v2}`);
        break;
    case "%":
        console.log(`${v1} % ${v2} = ${v1 % v2}`);
        break;
    default:
        console.log("Operação inválida!");
        break;
}