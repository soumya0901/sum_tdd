function add(string) {
    var regex = /[\d\-]+/g;
    var numbers = string.match(regex);
    var total = 0;
    for(var i=0; i < numbers.length; i++) {
        var num = parseInt(numbers[i], 10);
        console.log(num);
        if (num >= 0) {
            total += num;
        }
    }
    console.log("total: ",total);
    return total;
}

add("//;\n1;2, -3 ' ' ''5");

module.exports = add;