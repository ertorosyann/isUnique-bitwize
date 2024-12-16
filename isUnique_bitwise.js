let str = " @"
let str1 = 'b'

console.log(isUniqe(str1));

function isUniqe(str) {
    let unicode = 155063;
    let arr = new Array(Math.ceil(unicode / 32)).fill(0);
    for (const element of str) {
        let charCode  = element.charCodeAt();
        let position = Math.floor(charCode / 32);
        let bit = Math.floor(charCode % 32);

        if (position && bit == 0) {
            --position;
            bit = 1 << 31;
        } 

        let bit_place = Math.abs(1 << bit);
        if ((arr[position] & bit_place) === bit_place) {
            return false;
        }
        arr[position] |= bit_place;
        // console.log('bitplace  ' + Math.abs(bit_place));
        // console.log("element " +  element);
        // console.log("chaecode " +  charCode);
        // console.log(position, bit);
    }

    return true;
}
