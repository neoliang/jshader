
jshader.vec2 = function ( x, y ) {

	this.x = x || 0;
	this.y = y || 0;

};

jshader.vec2 .prototype = {

	constructor: jshader.vec2,

	clone: function () {

		return new this.constructor( this.x, this.y );

	},


	add: function ( v ) {
		return new this.constructor(this.x + v.x,this.y + v.y);
	},

	addScalar: function ( s ) {
		return new this.constructor(this.x + s,this.y + s);
	},

	sub: function ( v ) {
		return new this.constructor(this.x - v.x,this.y - v.y);

	},

	subScalar: function ( s ) {
		return new this.constructor(this.x - s,this.y - s);
	},



	multiply: function ( v ) {
		return new this.constructor(this.x * v.x,this.y * v.y);
	},

	multiplyScalar: function ( scalar ) {
		return new this.constructor(this.x * scalar,this.y * scalar);
	},

	divide: function ( v ) {
		return new this.constructor(this.x /v.x ,this.y /v.y);
	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	negate: function () {

		return multiplyScalar(-1);
	},

	dot: function ( v ) {
		return this.x * v.x + this.y * v.y;
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
		return ( ( v.x === this.x ) && ( v.y === this.y ) );
	}

};