function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return {
        bar: "hello"
    };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

console.log(0.1 + 0.2);
console.log("0.3");

console.log(0.1 + 0.2 == 0.3);
console.log("0.3");

function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}
console.log("are the numbers almost equal", areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2)
    }, 1000);
    setTimeout(function () {
        console.log(3)
    }, 0);
    console.log(4);
})();

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'