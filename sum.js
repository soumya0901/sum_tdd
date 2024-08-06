function sum(string) {
    var regex = /\d+/g;
    var numbers = string.match(regex);
    console.log(numbers);
}

sum('1,#3');