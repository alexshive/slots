SlotMachine.prototype.designMachine = function() {
	var parent = this;
	this.slots = [];
	if(this.machine) {
		var row = $('<div class="currentRow" />');
		for (var i = 0; i < this.slotData.length; i++) {
			var slot = this.slotData[i];
			var slotDiv = $('<div class="slot col-sm-4" />');
			for (var j = 0; j < slot.length; j++) {
				var currentRowClass = '';
				if(j === slot.length - 1) {
					currentRowClass = 'current';
				}
				var slotItem = $('<span class="col-sm-12 text-center ' + currentRowClass + '"><strong>' + slot[j].name + '</strong></span>');
				slotDiv.append(slotItem);
			}
			row.append(slotDiv);
			this.slots.push(slotDiv[0]);
		}
		this.machine.append(row);

		this.spinButton = $('<button class="btn btn-block btn-primary">SPIN</button>').on('click',function() {
			parent.spin();
			parent.spinButton.hide();
		});

		this.stopButton = $('<button class="btn btn-block btn-default">STOP</button>').on('click',function() {
			parent.stop();
			parent.stopButton.hide();
			parent.spinButton.show();
		});
		this.machine.append(this.stopButton);
		this.machine.append(this.spinButton);
	}

	this.ready = true;

}