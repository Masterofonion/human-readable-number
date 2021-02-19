module.exports = function toReadable (number) {
    var zeroNntn = ['','one','two','three','four', 'five', 'six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var dozens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var zeros = ['hundred', 'thousand', 'million']
    var strNum = '';
    if (number == 0) {
        return 'zero';
    }
    if (number >= 0 && number <= 19) {
        return zeroNntn[number];
    } else {
        number = String(number).split('').map(Number);
        
        while (number.length > 0) {
            if (number.length == 2) {
                if (number[0] < 2) {
                    strNum += ' ' + zeroNntn[Number(number[0]+ '' + number[1])];
                    return strNum.trim();
                } else {
                    strNum += ' ' + dozens[number[0]-2] + ' ' + zeroNntn[number[1]];
                    return strNum.trim();
                }
            } else { 
                strNum += zeroNntn[number[0]] + ' ' + zeros[number.length -3];
                number.shift();
            }
        }
             
        
    }

}






