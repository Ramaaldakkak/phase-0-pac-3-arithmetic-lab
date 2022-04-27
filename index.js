function add(a,b) {
    const result = a + b;
    return result;
}
 
function subtract(a,b) {
    const result = a - b;
    return result;
}
 
function multiply(a,b) {
    const result = a * b;
    return result;
}
 
function divide(a,b) {
    const result = a / b;
    return result;
}
 
function increment(n) {
    const result = ++n;
    return result;
}
 
function decrement(n) {
    const result = --n;
    return result;
}
 
function makeInt(n, base=10) {
    return (parseInt(n, base))
}
 
function preserveDecimal(n) {
    return (parseFloat(n))
}
