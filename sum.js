function add(string) {
    var regex = /(\d|((\-|\+)(?=\d)))+/g;
    var numbers = string.match(regex);
    var total = 0;
    console.log(numbers);
    var negNum = [];
    for(var i=0; i < numbers.length; i++) {
        var num = parseInt(numbers[i], 10);
        if (num >= 0) {
            total += num;
        } else {
            negNum.push(num);
        }
    }

    try {
        if(negNum.length) {
            throw new Error(`negative numbers not allowed ${negNum.join(',')}`);
        }
    } catch (error) {
        console.log(error.message);
    }
    console.log("total: ", total);
    return total;
}

add("//;\n1111;2,--3 ++2 \' \' ''5");

module.exports = add;