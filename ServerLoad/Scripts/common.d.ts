/**
 * Copyright (c) 2015-2016, MindFusion LLC - Bulgaria.
 *
 * This source code is provided to you as part of the MindFusion software components
 * package you have purchased. You may use the source code to trace and/or fix
 * problems or customize the library as needed for your application. To get permission
 * to use the source code in any other way, please contact us at support@mindfusion.eu.
 */
 
/**
* Represents a point in 2D space.
*/
interface Point
{
	/**
	* Initializes a new instance of the Point class with the specified X and Y coordinates.
	* @constructor
	* @param {Number} x The X-coordinate of the Point.
	* @param {Number} y The Y-coordinate of the Point.
	*/
	new (x: number, y: number): Point;
	/**
	* The x-coordinate of the point.
	*/
	x: number;
	/**
	* The y-coordinate of the point.
	*/
	y: number;
}

/**
* Represents the size of 2D object.
*/
interface Size
{
	/**
	* Initializes a new instance of the Size class with the specified width and height.
	* @constructor
	* @param {Number} width Specifies width.
	* @param {Number} height Specifies height.
	*/
	new (width: number, height: number): Size;
	/**
	* The object's width.
	*/
	width: number;
	/**
	* The object's height.
	*/
	height: number;
}

/**
* Represents a rectangle.
*/
interface Rect
{
	/**
	* Initializes a new instance of the Rect class.
	* @constructor
	* @param {Number} x The X-coordinate of the top left corner of the rectangle.
	* @param {Number} y The Y-coordinate of the top left corner of the rectangle.
	* @param {Number} width The width of the rectangle.
	* @param {Number} height The height of the rectangle.
	*/
	new (x: number, y: number, width: number, height: number): Rect;

	/**
	* Initializes a new instance of the Rect class.
	* @constructor
	* @param {MindFusion.Drawing.Point} location The top-left corner of the rectangle.
	* @param {MindFusion.Drawing.Size} size The size of the rectangle.
	*/
	new (location: Point, size: Size): Rect;
	/**
	* The x-coordinate of the upper-left corner of the rectangle.
	*/
	x: number;
	/**
	* The y-coordinate of the upper-left corner of the rectangle.
	*/
	y: number;
	/**
	* The width of the rectangle.
	*/
	width: number;
	/**
	* The height of the rectangle.
	*/
	height: number;
	/**
	* Gets the x-coordinate of the left edge of this Rect object.
	* @returns {Number} The x-coordinate of the left edge of this Rect object.
	*/
	left(): number;
	/**
	* Gets the y-coordinate of the top edge of this Rect object.
	* @returns {Number} The y-coordinate of the top edge of this Rect object.
	*/
	top(): number;
	/**
	* Gets the x-coordinate that is the sum of x and width values of this Rect.
	* @returns {Number} The x-coordinate that is the sum of x and width of this rectangle.
	*/
	right(): number;
	/**
	* Gets the y-coordinate that is the sum of the y and height property values of this Rect object.
	* @returns {Number} The y-coordinate that is the sum of y and height of this Rect.
	*/
	bottom(): number;
	/**
	* Gets the top-left edge of this Rect.
	* @returns {MindFusion.Drawing.Point} The top-left edge of this Rect.
	*/
	topLeft(): Point;
	/**
	* Gets the top-right edge of this Rect object.
	* @returns {MindFusion.Drawing.Point} The top-right edge, which is a Point 
	* with x that is the sum of x and width and with y equal to y.
	*/
	topRight(): Point;
	/**
	* Gets the bottom-left edge of this Rect object.
	* @returns {MindFusion.Drawing.Point} The bottom-left edge, which is a Point 
	* with x that is equal to x and with y that is the sum of y and height.
	*/
	bottomLeft(): Point;
	/**
	* Gets the bottom-right edge of this Rect object.
	* @returns {MindFusion.Drawing.Point} The bottom-right edge, which is a Point 
	* with x that is the sum of x and width and with y that is the sum of y and height.
	*/
	bottomRight(): Point;
	/**
	* Gets the center of this Rect object.
	* @returns {MindFusion.Drawing.Point} The center, which is a Point with x that is the sum of x 
	* and half of width and with y that is the sum of y and half of height.
	*/
	center(): Point;
	/**
	* Determines if the rectangular region represented by rect is entirely contained within this Rect object.
	* @param {Rect | Point} rect The Rect to test. 
	* @returns {Boolean} true if the rectangular region represented by rect is entirely contained within this Rect; 
	* otherwise, false.
	*/
	contains(point: Point): boolean;
	/**
	* Returns a copy of the rectangle with width and height increased by the specified value.
	* @param {Number} value The value by which to increase the size.
	* @returns {MindFusion.Drawing.Rect} The inflated rectangle.
	*/
	inflate(value: number): Rect;
	/**
	* Offsets the rectangle location by the specified value.
	* @param {Number} dx The offset along the x-axis.
	* @param {Number} dy The offset along the y-axis.
	*/
	offset(dx: number, dy: number): void;
	/**
	* Checks if this Rect intersects with the specified rect.
	* @param {MindFusion.Drawing.Rect} rect The other Rect.
	* @returns {Boolean} true if this Rect and the specified Rect intersect; otherwise, false.
	*/
	intersectsWith(rect: Rect): boolean;
	/**
	* Returns a Rect object representing the union of the current rectangle with 
	* the specified rectangle.
	* @param {MindFusion.Drawing.Rect} rect The rectangle to union.
	* @returns {MindFusion.Drawing.Rect} A Rect object that bounds the union of the two rectangles.
	*/
	union(rect: Rect): Rect;
	/**
	* Creates a Rect object with the specified edge locations.
	* @param {Number} l The x-coordinate of the upper-left corner of this Rect. 
	* @param {Number} t The y-coordinate of the upper-left corner of this Rect. 
	* @param {Number} r The x-coordinate of the lower-right corner of this Rect. 
	* @param {Number} b The y-coordinate of the lower-right corner of this Rect.
	* @returns {MindFusion.Drawing.Rect} A rectangle with the specified coordinates.
	*/
	fromLTRB(l: number, t: number, r: number, b: number);
	/**
	* Sets the top-left edge of this Rect object.
	* @param {MindFusion.Drawing.Point} point The top-left edge of the Rect.
	*/
	setLocation(point: Point): void;
	/**
	* Gets the size of this Rect object.
	* @returns {MindFusion.Drawing.Size} The size.
	*/
	getSize(): Size;
}

/**
* Represents a transformation matrix.
*/
interface Matrix
{
	/**
	* Initializes a new instance of the Matrix class.
	* @constructor
	*/
	new (): Matrix;
	/**
	* Gets the matrix elements array.
	* @returns {number[]} The matrix elements array.
	*/
	matrix(): number[];
	/**
	* Applies a rotation transform.
	* @param {Number} angle The rotation angle
	* @param {MindFusion.Drawing.Point} point The center of rotation.
	*/
	rotateAt(angle: number, point: Point): void;
	/**
	* Applies matrix transformations to a set of points.
	* @param {MindFusion.Drawing.Point[]} points The points to transform.
	*/
	transformPoints(points: Point[]): void;
	/**
	* Applies matrix transformations to a given rectangle.
	* @param {MindFusion.Drawing.Rect} rect The rectangle to transform.
	*/
	transformRect(rect: Rect): Rect;
}

/**
* Base events args class.
*/
interface EventArgs
{
	/**
	* Initializes a new instance of the EventArgs class.
	*/
    new (): EventArgs;
	/**
	* Empty event args.
	*/
	Empty: EventArgs;
}
/**
* Contains the arguments passed to handlers of cancellable events.
*/
interface CancelEventArgs extends EventArgs
{
	/**
	* Initializes a new instance of the CancelEventArgs class.
	*/
	new (): CancelEventArgs;
	/**
	* Gets  a value indicating whether the event should be canceled.
	* @returns {Boolean} true if the event should be canceled, otherwise false.
	*/
	get_cancel(): boolean;
	/**
	* Sets  a value indicating whether the event should be canceled.
	* @param {Boolean} value true if the event should be canceled, otherwise false.
	*/
	set_cancel(value: boolean): void;
}

declare var EventArgs: EventArgs;

declare module "MindFusion.Common" {
	export = common;
}

declare var common: {
	Drawing: {
		/**
		* Represents a point in 2D space.
		*/
		Point: Point;
		/**
		* Represents the size of 2D object.
		*/
		Size: Size;
		/**
		* Represents a rectangle.
		*/
		Rect: Rect;
		/**
		* Represents a transformation matrix.
		*/
		Matrix: Matrix;
	};
	/**
	* Base events args class.
	*/
	EventArgs: EventArgs;
	/**
	* Contains the arguments passed to handlers of cancellable events.
	*/
	CancelEventArgs: CancelEventArgs;
}



