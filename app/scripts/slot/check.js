SlotMachine.prototype.check = function() {
	var slot = this.slotIndex[0];
	// console.debug(slot);
	var matchingNumber = false;
	for (var i = 0; i < this.slotData.length; i++) {
		var checkNumber = this.slotData[i][slot].id;
		if(matchingNumber) {
			// console.debug(matchingNumber + ' = ' + checkNumber);
			if(matchingNumber !== checkNumber) {
				matchingNumber = false;
				break;
			}
		} else {
			matchingNumber = checkNumber;
		}
	}
	if(matchingNumber) {
		var prize = this.prizes[matchingNumber - 1];
		var prizeDiv = $('<div class="alert bg-success text-center">You won ' + prize + '!</div>');
		this.machine.append(prizeDiv);
	}
	// console.debug(this.slotData[0][slot]);
	// console.debug(this.slotData[1][slot]);
	// console.debug(this.slotData[2][slot]);
}