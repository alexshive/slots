SlotMachine.prototype.spin = function() {

	var parent = this;

	if(!this.ready) {
		this.setupData();
		this.designMachine();
	} else {
		this.random();
	}

	if(!this.running) {

		this.running = true;

		$.each(parent.slots, function(divIndex, div) {
			parent.slotRun[divIndex] = setInterval(function() {
				var $div = $(div);
				$div.addClass('spinning');
				var slotHeight = $div.height();
				var position = parent.slotPosition[divIndex];
				if(!position) {
					position = -slotHeight;
					parent.slotIndex[divIndex] = parent.itemsPerSlot;
				}
				if(position >= 0) {
					position = -slotHeight;
					parent.slotIndex[divIndex] = parent.itemsPerSlot;
					$(div).css('top', position + 'px');
				} else {
					parent.slotIndex[divIndex] -= 1;
					position += 40;
					$(div).stop().animate({ top: position + 'px'}, 50);
				}
				parent.slotPosition[divIndex] = position; // save position
			}, parent.slotSpeed * 1000 );
		});

	}

};

SlotMachine.prototype.stop = function() {
	var parent = this;
	this.running = false;
	$.each(parent.slots, function(divIndex, div) {
		$(div).removeClass('spinning').removeClass('blur');
		clearInterval(parent.slotRun[divIndex]);
	});
	this.check();
};

SlotMachine.prototype.random = function() {
	// console.debug('random???');
	// TODO: cleaner way to reset random elements
	for (var i = this.slotData.length - 1; i >= 0; i--) {
	    this.slotData[i].sort(function() {
		  return .5 - Math.random();
		});
	}
	this.machine.empty();
	this.designMachine();
}