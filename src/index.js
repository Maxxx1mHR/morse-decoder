const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let splitArray = [];
    for (let i = 0; i < expr.length; i += 10) {
        splitArray.push(expr.slice(i, i + 10));
    }

    let arrayMorse = splitArray.map(item => {
        let morse = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item[i] == '1' && item[i + 1] == '1') {
                morse += '-';
            }
            if (item[i] == '1' && item[i + 1] == '0') {
                morse += '.';
            }
        }
         return morse;
    });
    
    let res = arrayMorse.map(item => {
        return item == '' ? ' ' : MORSE_TABLE[item];
    });

    return res.join('');

    
}


module.exports = {
    decode
}

