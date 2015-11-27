SlotMachine.prototype.check = function() {
	var slot = this.slotIndex[0];
	var matchingNumber = false;
	for (var i = 0; i < this.slotData.length; i++) {
		var checkNumber = this.slotData[i][slot].id;
		if(matchingNumber) {
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
}