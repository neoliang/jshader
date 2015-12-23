
jshader.renderer = function(target,piexelRenderFunc){
	this.target = target;
	this.width = target.width;
	this.height = target.height;
	this.piexelRenderFunc = piexelRenderFunc;
};

jshader.renderer.prototype = {
	constructor: jshader.render,

	renderPixel : function  (x,y) {
		return new jshader.vec4(1,y,x,1);
	},
	render : function  () {
		var pixels = this.target.beginRender();
		var height = this.target.height;
		var width = this.target.width;
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				var color = this.renderPixel(x / width,y/height);
				var index =  4 *(y * width + x) ;
				pixels[index] = color.x * 255;
				pixels[index + 1] = color.y * 255;
				pixels[index + 2] = color.z * 255;
				pixels[index + 3] = color.w * 255;
			};
		};
		this.target.endRender();
	}
};