describe('PigLatin AngularJS App Test Suite', function() {
	
	beforeEach(module('PigLatinApp'));

	describe('Tests for PigLatin AngularJS controller', function() {

		var scope = {};
		var ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('PigLatinController', {$scope:scope})
		}));

		it('should initialise title in scope', function() {
			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Pig Latin Translator');
		});

		it('words that begin with vowel sounds should have way added to the end', function() {
			scope.phrase = "eat";
			scope.convert();
			expect(scope.result).toBeDefined();
			expect(scope.result).toBe('eatway ');
		});

		it('words that begin with consonants, all letters before the initial vowel are placed at the end of the word sequence, then ay', function() {
			scope.phrase = "Pig";
			scope.convert();
			expect(scope.result).toBeDefined();
			expect(scope.result).toBe('igpay ');
		});

		it('should convert a full sentance', function() {
			scope.phrase = "This is a test sentance";
			scope.convert();
			expect(scope.result).toBeDefined();
			expect(scope.result).toBe('isthay isway away esttay entancesay ');
		});

		it('should display an error on incorrect form input', function() {
			scope.phrase = "This is a b4d test sentance";
			scope.convert();
			expect(scope.error).toBeDefined();
			expect(scope.error).toBe('* There was an error with one or more of the words in the sentance, please check and try again');
		});

		it('it should handle words without vowels', function() {
			scope.phrase = "This is a gym";
			scope.convert();
			expect(scope.result).toBeDefined();
			expect(scope.result).toBe('isthay isway away ymgay ');
		});

	});

});