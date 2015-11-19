SlotMachine.prototype.spin = function() {

	var parent = this;

	if(!this.ready) {
		this.setupData();
		this.designMachine();
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
				}
				if(position >= 0) {
					position = -slotHeight;
					$(div).css('top', position + 'px');
				} else {
					position += 40;
					$(div).stop().animate({ top: position + 'px'}, 50);
				}
				parent.slotPosition[divIndex] = position; // save position
			}, 50 );
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
};
