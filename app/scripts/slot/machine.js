var SlotMachine = function SlotMachine(div) {
	this.machine = $(div);
}
SlotMachine.prototype.startup = function() {
	if(!this.ready) {
		this.setupData();
		this.designMachine();
	}
};