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
    const exprArr = expr.split('');
	let size = 10;
	let letter = [];
	for (i = 0; i < exprArr.length / size; i++) {
		letter[i] = exprArr.slice(i*size, i*size + size)
	}

	let result = letter.map(element => {
		let findingIndex = element.indexOf('1');
		return element.slice(findingIndex);
	})

	let decoding = result.map(element => {
		for (i = 0; i < element.length - 1; i++) {
			if (element[i] === '1' && element[i + 1] === '0') {
				element.splice(i, 2, '.')
			} else {
				element.splice(i, 2, '-')
			}
		}
		return element;
	})

	let finalResult = decoding.map(element => element.join(''));

	for (i = 0; i < finalResult.length; i++) {
		if (finalResult[i] === '*') {
			finalResult[i] = ' ';
		} else {
			finalResult[i] = MORSE_TABLE[finalResult[i]]
		}
	}
	return finalResult.join('');
}

module.exports = {
    decode
}