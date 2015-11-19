'use strict';

/**
 * @ngdoc function
 * @name slotsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slotsApp
 */
angular.module('slotsApp')
  .controller('MainCtrl', function ($scope) {

  	var machine = $scope;

  	machine.winningNumber = -1;
  	machine.prizes = ['coffee', 'tea', 'espresso'];
	machine.prizeDescription = [['coffee maker', 'coffee filter', 'coffee grounds'],
  								['teapot', 'tea strainer', 'loose tea'],
  								['espresso machine', 'espresso tamper', 'ground espresso beans']];  								

  	machine.slotsData = [
    	[0,1,2],
    	[0,1,2],
    	[0,1,2]
    ];

    machine.spin = function() {

	    for (var i = this.slotsData.length - 1; i >= 0; i--) {
		    this.slotsData[i].sort(function() {
			  return .5 - Math.random();
			});
		}

		this.check();

	};

	machine.check = function() {
		
		var matchingNumber = -1;

		for (var i = 0; i < this.slotsData.length; i++) {
			
			var result = this.slotsData[i][1]; // we choose the middle of the array

		    if(matchingNumber < 0) {
		    	matchingNumber = result;
		    } else {
		    	if(matchingNumber !== result) {
		    		matchingNumber = -1;
		    		break;
		    	}
		    }

		}

		machine.winningNumber = -1;

		if(matchingNumber >= 0) {
			machine.winningNumber = matchingNumber;
		}

	};

	machine.claimPrize = function() {
		machine.winningNumber = -1;
	};

	// uncomment to autospin
	// machine.spin();
   

  });
