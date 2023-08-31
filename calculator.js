// JavaScript Calculator

var x = parseFloat(prompt("Enter a number: "));
var opp = prompt("Enter an operator: (+,-,*,/,sq,sqrt)");
var ans;
if (opp == "sq" || opp == "sqrt") {

} else {
    var y = parseFloat(prompt("Enter another number number: "));
}

switch (opp) {
    
    case '+':
        ans = (x+y);
        break;
    case '-':
        ans = (x-y);
        break;
    case '*':
        ans = (x*y);
        break;
    case '/':
        ans = (x/y);
        break;
    case 'sq':
        ans = (x*x);
        break;
    case 'sqrt':
        ans = (Math.sqrt(x));
        break;
    default:
        console.log('Invalid operation');
        break;
    
}
console.log("The answer is ", ans);
