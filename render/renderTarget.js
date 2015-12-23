
jshader.renderTarget = function  (canvas) {
	this.context = canvas.getContext("2d");
	this.width = canvas.attributes.width.value;
	this.height = canvas.attributes.height.value;

};


jshader.renderTarget.prototype = {
	constructor: jshader.renderTarget,
	beginRender : function  () {
		this.context.fillStyle = "rdb(0,0,0)";
		this.context.fillRect(0,0,this.width,this.height);
		this.imgdata = this.context.getImageData(0,0,this.width,this.height)
		return this.imgdata.data;
	},

	endRender : function  () {
		alert(this.imgdata);
		this.context.putImageData(this.imgdata, 0, 0);
	}
};