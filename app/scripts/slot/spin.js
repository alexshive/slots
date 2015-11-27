SlotMachine.prototype.spin = function() {

	var parent = this;

	if(!this.ready) {
		this.setupData();
		this.designMachine();
	// } else {
	// 	this.random();
	}

	if(!this.running) {

		this.running = true;
		
		$(this.machine).addClass('spinning');

		$.each(parent.slots, function(divIndex, div) {
			
			parent.slotPosition[divIndex] = 0;
			// $(div).stop().css('top', '0px');

			parent.slotRun[divIndex] = setInterval(function() {
				var $div = $(div);
				var slotItemHeight = $div.height();
				var slotHeight = parent.itemsPerSlot * slotItemHeight;
				var position = parent.slotPosition[divIndex];
				
				if(position < 0) {
					parent.slotIndex[divIndex] -= 1;
					position += slotItemHeight;
					$(div).stop().animate({ top: position + 'px'}, 50);
				} else {
					position = -slotHeight;
					parent.slotIndex[divIndex] = parent.itemsPerSlot;
					$(div).stop().css('top', '-1900px');
				}

				parent.slotPosition[divIndex] = position; // save position

			}, parent.slotSpeed * 1000 );
		});

	}

};

SlotMachine.prototype.stop = function() {
	var parent = this;
	this.running = false;
	$(this.machine).removeClass('spinning');
	$.each(parent.slots, function(divIndex, div) {
		// $(div).removeClass('spinning').removeClass('blur');
		clearInterval(parent.slotRun[divIndex]);
	});
	this.check();
};

// SlotMachine.prototype.random = function() {
// 	// console.debug('random???');
// 	// TODO: cleaner way to reset random elements
// 	for (var i = this.slotData.length - 1; i >= 0; i--) {
// 	    this.slotData[i].sort(function() {
// 		  return .5 - Math.random();
// 		});
// 	}
// 	this.machine.empty();
// 	this.designMachine();
// }