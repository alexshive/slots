SlotMachine.prototype.designMachine = function() {
	var _this = this;
	this.slots = [];
	if(this.machine) {
		var row = $('<div class="row currentRow" />');
		for (var i = 0; i < this.slotData.length; i++) {
			var slot = this.slotData[i];
			var slotDiv = $('<div class="slot col-sm-4" />');
			for (var j = 0; j < slot.length; j++) {
				var currentRowClass = '';
				if(j === slot.length - 1) {
					currentRowClass = 'current';
				}
				var slotItem = $('<span class="col-sm-12 text-center ' + currentRowClass + '">' + slot[j].name + '</span>');
				slotDiv.append(slotItem);
			}
			row.append(slotDiv);
			this.slots.push(slotDiv[0]);
		}
		this.machine.append(row);

		this.spinButton = $('<button class="btn btn-primary">SPIN</button>').on('click',function() {
			_this.spin();
		});
		this.machine.append(this.spinButton);

		this.stopButton = $('<button class="btn btn-default">STOP</button>').on('click',function() {
			_this.stop();
		});
		this.machine.append(this.stopButton);
	}

	this.ready = true;

}