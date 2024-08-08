function add(string) {
    var regex = /(\d)+|((\-|\+)(\d)+)/g;;
    var numbers = string.match(regex);
    var total = 0;
    var negNum = [];
    if(string.trim() == '') {
        return 0;
    }
    for(var i=0; i < numbers.length; i++) {
        var num = parseInt(numbers[i], 10);
        if (num >= 0 && num <= 1000) {
            total += num;
        } else if(num < 0) {
            negNum.push(num);
        }
    }
    //try {
        if(negNum.length) {
            throw new Error(`negative numbers not allowed ${negNum.join(',')}`);
        }
    

    if(!negNum.length){
        // total without negative numbers
        return total;
    }
}

//add("//[*]+++++----9012[%]\n1*2%3-9");

module.exports = add;