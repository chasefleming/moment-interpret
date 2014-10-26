var length,
    type,
    dateTime,
    numbers,
    moment = require('moment'),
    _ = require('lodash');


function respond (input) {

  var formattedInput,
      parseInputForInt;

  formattedInput = input.toLowerCase().replace('-', ' '); // should later remove punctuation and be able to pull time from sentence

  parseInputForInt = parseInt(formattedInput);

  // parseInt() will pull integer out of string if it exists (e.g. "3 days ago" -> 3)
  // if it doesn't, then find the string and convert it
  (!parseInputForInt) ? (length = convertToNumber(formattedInput)) : (length = parseInputForInt);

  type = checkType(formattedInput);

  if (formattedInput.indexOf('ago') !== -1) {

    dateTime = moment().subtract(length, type);

  }
  else if (formattedInput.indexOf('from now')) {

    dateTime = moment().add(length, type);

  }

  return dateTime;
}

function checkType (input) {


  if (input.indexOf('years') !== -1) {
    return 'years';
  }
  else if (input.indexOf('year') !== -1) {
    return 'year';
  }
  else if (input.indexOf('months') !== -1) {
    return 'months';
  }
  else if (input.indexOf('month') !== -1) {
    return 'month';
  }
  else if (input.indexOf('days') !== -1) {
    return 'days';
  }
  else if (input.indexOf('day') !== -1) {
    return 'day';
  }
  else if (input.indexOf('hours') !== -1) {
    return 'hours';
  }
  else if (input.indexOf('hour') !== -1) {
    return 'hour';
  }
  else if (input.indexOf('minutes') !== -1) {
    return 'minutes';
  }
  else if (input.indexOf('minute') !== -1) {
    return 'minute';
  }
  else if (input.indexOf('seconds') !== -1) {
    return 'seconds';
  }
  else if (input.indexOf('second') !== -1) {
    return 'second';
  }

}

function convertToNumber (input) {
  // store index of word in string, then sort, grab word, and join back together

  var foundNumbers = [],
      sortedFoundNumbers,
      convertedNumberArray;

  _(numbers).each(function (number) {
    if (input.indexOf(number.word) !== -1) {
      var numberObj = {};

      numberObj.index = input.indexOf(number.word);
      numberObj.number = number.number;

      foundNumbers.push(numberObj);
    }
  });

  sortedFoundNumbers = _.sortBy(foundNumbers, 'index');

  convertedNumberArray = [];

  _(sortedFoundNumbers).each(function (number) {
    convertedNumberArray.push(number.number);
  });

  convertedNumber = joinNumbers(convertedNumberArray);

  return convertedNumber;

}


function joinNumbers (numbersArray) {

  // TODO: need to make numbers 100 or greater work
  // right now, zero is being removed (e.g. 50 && 4 for 54), but it can't be removed all the time, b/c what about 10000 (ten thousand)?
  // 200000 two hundred thousand
  // 5004 five thousand four || five thousand and four (remove filler words like 'and'?)

  var convertedNumber;

  convertedNumber = numbersArray.join().replace(',', '').replace('0', '');

  return parseInt(convertedNumber); // make sure it's back to an integer
}

// Currently can only support numbers less than 100
numbers = [
  {
    word: 'one',
    number: 1
  },
  {
    word: 'two',
    number: 2
  },
  {
    word: 'three',
    number: 3
  },
  {
    word: 'four',
    number: 4
  },
  {
    word: 'five',
    number: 5
  },
  {
    word: 'six',
    number: 6
  },
  {
    word: 'seven',
    number: 7
  },
  {
    word: 'eight',
    number: 8
  },
  {
    word: 'nine',
    number: 9
  },
  {
    word: 'ten',
    number: 10
  },
  {
    word: 'eleven',
    number: 11
  },
  {
    word: 'twelve',
    number: 12
  },
  {
    word: 'thirteen',
    number: 13
  },
  {
    word: 'fourteen',
    number: 14
  },
  {
    word: 'fifteen',
    number: 15
  },
  {
    word: 'sixteen',
    number: 16
  },
  {
    word: 'seventeen',
    number: 17
  },
  {
    word: 'eighteen',
    number: 18
  },
  {
    word: 'nineteen',
    number: 19
  },
  {
    word: 'twenty',
    number: 20
  },
  {
    word: 'thirty',
    number: 30
  },
  {
    word: 'forty',
    number: 40
  },
  {
    word: 'fifty',
    number: 50
  },
  {
    word: 'sixty',
    number: 60
  },
  {
    word: 'seventy',
    number: 70
  },
  {
    word: 'eighty',
    number: 80
  },
  {
    word: 'ninety',
    number: 90
  } // ,
  // {
  //   word: 'hundred',
  //   number: 00
  // },
  // {
  //   word: 'thousand',
  //   number: 000
  // },
  // {
  //   word: 'million',
  //   number: 000000
  // }
];

module.exports = respond;