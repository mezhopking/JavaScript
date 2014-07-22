$(document).ready(function($) {
	// console.log(my_max([1,56,2,3,-1,0]));
	// $('.vowelCount').find('em').text(vowel_count(prompt("How many vowels in this text:", " ")));
	// $(".reverseString").find('em').text(string_reverser(prompt("Text to reverse:", "Here...")));
});


// Math.max.apply finds largest number in an array. The null (or Math) is required.
function my_max(input) {
	return Math.max.apply(null, input);
};

// Count the number of vowels in a given string (quite inefficient with ||. Will optimise when update to compare against an array)
function vowel_count(analyseMe) {
	var text = analyseMe,
		upperCase = text.toUpperCase(),
		textSplit = upperCase.split(""),
		// vowels = ["A", "E", "I", "O", "U"],
		numVowels = 0;
		
	for (var i = 0; i < textSplit.length; i++) {
		if (textSplit[i] == "A" || textSplit[i] == "E" || textSplit[i] == "I" || textSplit[i] == "O" || textSplit[i] == "U") {
			numVowels++;
		}
	}	
	return numVowels;
};

function string_reverser(reverseMe) {
	var tempArray = [];

	for (var i = 0, strLength = reverseMe.length; i <= strLength; i ++) {
		tempArray.push(reverseMe.charAt(strLength - i));
	}
	return tempArray.join('');
};


// Setup basic mathematic functions
var Math = {
	add: function(num1, num2) {
		return num1 + num2;
	},
	subtract: function(num1, num2) {
		return num1 - num2;
	},
	multiply: function(num1, num2) {
		return num1 * num2;
	},
	divide: function(num1, num2) {
		return num1 / num2;
	}
}

// Make the calculator!!
var calculator = {
	operatorPress: [],
	operatorStore: [],
	operandPress: [],
	operandStore: [],
	calcDisplay: 0,

	// Reset calculator (clear arrays etc)
	reset: function() {
		calculator.operatorPress = [];
		calculator.operatorStore = [];
		calculator.operandPress = [];
		calculator.operandStore = [];
		calculator.calcDisplay = 0;
	},
	equals: function() {
		// calculator.operandPress[0] = result;
		calculator.operatorPress = [];
	},
	cheapEquals: function() {
		var cheapResult = eval(calculator.operandPress.join(''));
		return cheapResult;
	},
	clearAndStore: function() {

	},
	buttonNumber: function(number) {
		calculator.operandPress.push(number);
		calculator.calcDisplay = calculator.operandPress.join('');
		return calculator.calcDisplay;
	},
	buttonAction: function(action) {
		calculator.operatorPress.push(action);
		calculator.calcDisplay = calculator.operatorPress.join('');
		return calculator.calcDisplay;
	}
}

$(document).ready(function() {
	// $(".operand").on("click", function() {
	// 	var $operand = $(this).text().trim();
	// 	$('#calcScreen').val(calculator.operandPush($operand));
	// });
	$(".operand").on("click", function() {
		var $operand = $(this).text().trim();
		$('#calcScreen').val(calculator.buttonNumber($operand));
	});
	$(".operator").on("click", function() {
		var $operator = $(this).text().trim();
		// Utilising same array to perform cheap eval() method.
		// Next stage to perform calculation without eval(join(''))
		$('#calcScreen').val(calculator.buttonNumber($operator));
	});
	$(".reset").on("click", function() {
		$('#calcScreen').val(calculator.reset());
	});
	$(".equals").on("click", function() {
		$('#calcScreen').val(calculator.cheapEquals());
	});
});








