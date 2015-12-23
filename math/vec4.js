
jshader.vec4 = function ( x, y,z,w ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = ( w !== undefined ) ? w : 1;

};

jshader.vec4 .prototype = {

	constructor: jshader.vec4,


	clone: function () {

		return new this.constructor( this.x, this.y,this.z,this.w );

	},


	add: function ( v ) {
		return new this.constructor(this.x + v.x,this.y + v.y,this.z + v.z,this.w + v.w);
	},

	addScalar: function ( s ) {
		return new this.constructor(this.x + s,this.y + s,this.z + s,this.w + s);
	},

	sub: function ( v ) {
		return new this.constructor(this.x - v.x,this.y - v.y,this.z-v.z,this.w + v.w);

	},

	subScalar: function ( s ) {
		return addScalar(-s);
	},


	multiply: function ( v ) {
		return new this.constructor(this.x * v.x,this.y * v.y,this.z * v.z,this.w * v.w);
	},

	multiplyScalar: function ( scalar ) {
		return new this.constructor(this.x * scalar,this.y * scalar,this.z * scalar,this.w * scalar);
	},

	divide: function ( v ) {
		return new this.constructor(this.x /v.x ,this.y /v.y,this.z/ v.z,this.w /v.w);
	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	negate: function () {
		return multiplyScalar(-1);
	},

	dot: function ( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	},

	lengthSq: function () {

		return this.dot(this)

	},

	length: function () {

		return Math.sqrt( this.lengthSq() );

	},

	normalize: function () {

		return this.divideScalar( this.length() );

	},

	equals: function ( v ) {
		return ( ( v.x === this.x ) && ( v.y === this.y ) &&( v.z === this.z)  && (v.w === this.w));
	}

};