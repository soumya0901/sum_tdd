module.exports  = function add(string) {
    var regex = /\d+/g;
    var numbers = string.match(regex);
    console.log(numbers);
    var total = 0;
    for(var i=0; i < numbers.length; i++) {
        total += parseInt(numbers[i]);
    }

    return total;
}
