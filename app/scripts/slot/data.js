SlotMachine.prototype.getData = function() {
	this.winningNumber = 0; // id of prize
	this.prizes = ['coffee', 'tea', 'espresso'];
	this.itemsPerSlot = 20;
	this.numberOfSlots = 3;

	this.slotPosition = [];
	this.slotRun = [];

	this.slotsItem = [
		{ id: 1, slotId: 1, name: 'coffee maker' }, 
		{ id: 1, slotId: 2, name: 'coffee filter' }, 
		{ id: 1, slotId: 3, name: 'coffee grounds' }, 
		{ id: 2, slotId: 1, name: 'teapot' }, 
		{ id: 2, slotId: 2, name: 'tea strainer' }, 
		{ id: 2, slotId: 3, name: 'loose tea' }, 
		{ id: 3, slotId: 1, name: 'espresso machine' }, 
		{ id: 3, slotId: 2, name: 'espresso tamper' }, 
		{ id: 3, slotId: 3, name: 'ground espresso beans' }
	];

	this.slotData = [];
}

SlotMachine.prototype.setupData = function() {

	this.getData();

	for (var slotID = 1; slotID <= this.numberOfSlots; slotID++) {
	
		var currentSlot = [];
		var slotIndex = 0;

		while (currentSlot.length < this.itemsPerSlot) {
			
			var slot = this.slotsItem[slotIndex];

			if(slot) {
				if(slotID === slot.slotId) {
					currentSlot.push(slot);
				}
			}
			
			slotIndex++;

			if(slotIndex >= this.slotsItem.length) {
				slotIndex = 0;
			}

			if( slotIndex > (this.numberOfSlots * this.itemsPerSlot) ) {
				break;
			}

		}
		this.slotData.push(currentSlot);
	}
}