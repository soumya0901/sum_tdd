function add(string) {
    var regex = /(\d|((\-|\+)(?=\d)))+/g;
    var numbers = string.match(regex);
    var total = 0;
    console.log(numbers);
    for(var i=0; i < numbers.length; i++) {
        var num = parseInt(numbers[i], 10);
        if (num >= 0) {
            total += num;
        }
    }
    console.log("total: ", total);
    return total;
}

add("//;\n1111;2,--3 ++2 \' \' ''5");

module.exports = add;