var app = angular.module('PigLatinApp', [])
app.controller('PigLatinController', function($scope) {

	$scope.title = "Pig Latin Translator";

    $scope.convert = function() {

    	$scope.result = "";
	   	$scope.error = "";

	   	var content = $scope.phrase;
		var words = content.split(" ");
	   	var convertedWords = [];

	   	for (var i = 0; i < words.length; i++) {
		    convertedWords[i] = convertWord(words[i]);
		    if (convertedWords[i] == null) {
				$scope.error = '* There was an error with one or more of the words in the sentance, please check and try again';
			} else {
				convertedWords[i] = convertedWords[i] + " ";
				$scope.result = $scope.result + convertedWords[i];
			}
		}
	};

	function convertWord(word) {
	   	var convertedWord;
	   	var letters = /^[A-Za-z]+$/;  
	   	word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	   	word = word.toLowerCase();
		if(word.match(letters))  {  
			var firstLetter = word.substring(0,1);
			var restOfInput = word.substring(1);
			var vowels = "aeiou";
			if (vowels.indexOf(firstLetter) > -1) {
				convertedWord = word + 'way';
				return convertedWord;
			} else {
				var firstVowel;
				var firstVowelPos;
				for(var i = 0; i < word.length; i++) {
					firstVowel = word.charAt(i);
					//include y as a vowel as per pig latin rules, e.g. gym turns into gymay
					if (firstVowel == 'a' || firstVowel == 'e' || firstVowel == 'i' || firstVowel == 'o' || firstVowel == 'u' || firstVowel == 'y') {
						firstVowelPos = i;
						break;
					}
				}
				if (firstVowelPos > 0) {
					var beforeVowel = word.substring(0, firstVowelPos);
					var afterVowel = word.substring(firstVowelPos);
					convertedWord = afterVowel + beforeVowel + "ay";
				} else {
					//word contains no vowels so just add 'ay' on the end
					convertedWord = word + "ay";
				}
				return convertedWord;
			}
		}
	}
});