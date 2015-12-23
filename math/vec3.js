
jshader.vec3 = function ( x, y,z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

};

jshader.vec3 .prototype = {

	constructor: jshader.vec3,


	clone: function () {

		return new this.constructor( this.x, this.y,this.z );

	},


	add: function ( v ) {
		return new this.constructor(this.x + v.x,this.y + v.y,this.z + v.z);
	},

	addScalar: function ( s ) {
		return new this.constructor(this.x + s,this.y + s,this.z + s);
	},

	sub: function ( v ) {
		return new this.constructor(this.x - v.x,this.y - v.y,this.z-v.z);

	},

	subScalar: function ( s ) {
		return addScalar(-s);
	},


	multiply: function ( v ) {
		return new this.constructor(this.x * v.x,this.y * v.y,this.z * v.z);
	},

	multiplyScalar: function ( scalar ) {
		return new this.constructor(this.x * scalar,this.y * scalar,this.z * scalar);
	},

	divide: function ( v ) {
		return new this.constructor(this.x /v.x ,this.y /v.y,this.z/ v.z);
	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	negate: function () {
		return multiplyScalar(-1);
	},

	dot: function ( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},

	lengthSq: function () {

		return this.dot(this); 

	},

	length: function () {

		return Math.sqrt( this.lengthSq() );

	},

	normalize: function () {

		return this.divideScalar( this.length() );

	},

	equals: function ( v ) {
		return ( ( v.x === this.x ) && ( v.y === this.y ) &&( v.z === this.z) );
	}

};