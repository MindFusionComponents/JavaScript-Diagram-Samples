// Type definitions for MindFusion.Common for JavaScript
// Definitions by: MindFusion <https://www.mindfusion.eu>
// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare namespace MindFusion
{
	/** Provides abstraction to the underlying type system implementation and browser independence support. */
	class AbstractionLayer
	{
		/** Creates a namespace.
		 * @param namespace A string that represents the fully qualified namespace to register.
		*/
		static registerNamespace(namespace: string): void;
		/** Registers a class as defined by a constructor with an optional base type and interface types.
		 * @param type The class to register
		 * @param typeName A string that represents the fully qualified name of the type.
		 * @param baseType The base type.
		 * @param interfaceTypes An unbounded array of interface type definitions that the class implements.
		*/
		static registerClass(type: any, typeName: string, baseType?: any, interfaceTypes?: Array<any>): void;
		/** Initializes the base class and its members in the context of a provided type and instance, which provides the model for inheritance and for initializing base members.
		 * @param type The type to provide context.
		 * @param instance The instance to initialize the base class for. Usually this.
		 * @param baseArguments The arguments for the base constructor.
		*/
		static initializeBase(type: any, instance: any, baseArguments?: Array<any>): void;
		/** Invokes a base method with specified arguments.
		 * @param type The type to provide context.
		 * @param instance The instance whose base method is being called. Usually this.
		 * @param name A string that represents the name of the base method.
		 * @param baseArguments An array of arguments to pass to the base method.
		*/
		static callBaseMethod(type: any, instance: any, name: string, baseArguments?: Array<any>): any;
		/** Returns a value that indicates whether an object is an instance of a specified class or of one of its derived classes.
		 * @param type The type to provide context.
		 * @param instance The object to test.
		 * @return true if instance is an instance of the class; otherwise, false.
		*/
		static isInstanceOfType(type: any, instance: any): boolean;
		/** Determines whether an instance inherits from a specified class.
		 * @param type The type to provide context.
		 * @param baseType The fully qualified name of the class to test as a base class for the current instance.
		 * @return true if the instance inherits from parentType; otherwise, false.
		*/
		static inheritsFrom(type: any, baseType: any): boolean;
		/** Creates and initializes a control of the specified type.
		 * @param type The type of the control to create.
		 * @param properties A JSON object that describes the properties and their values.
		 * @param events A JSON object that describes the events and their handlers.
		 * @param references A JSON object that describes the properties that are references to other controls.
		 * @param element The DOM element that the component should be attached to.
		*/
		static createControl(type: any, properties?: any, events?: any, references?: any, element?: any): any;
		/** Returns the control object with the specified id.
		 * @param id A string that contains the ID of the control to find.
		 * @param parent The component or element that contains the control to find.
		*/
		static findControl(id: string, parent?: any): any;
		/** Creates a delegate function that retains the context first used during an objects creation.
		 * @param instance The object instance that will be the context for the function.
		 * @param method The function from which the delegate is created.
		*/
		static createDelegate(instance: any, method: any): void;
		/** Provides a way to attach an event handler to an object's event.
		 * @param instance The object that exposes the event.
		 * @param eventName The name of the event.
		 * @param handler The client function that is called when the event occurs.
		*/
		static addHandler(instance: any, eventName: string, handler: any): void;
		/** Provides a way to attach an a list of event handlers to an object's events.
		 * @param instance The object that exposes the events.
		 * @param events A comma-separated list of name/value pairs in the format name:value, where name is the name of the DOM event and value is the the name of the handler function.
		*/
		static addHandlers(instance: any, events: any): void;
		/** Converts a JavaScript object graph into a JSON string.
		 * @param value The JavaScript object graph to serialize.
		*/
		static toJson(value: any): string;
		/** Converts a JSON string into a JavaScript object graph.
		 * @param value The JSON string to deserialize.
		*/
		static fromJson(value: string): any;
		/** Attaches a control to the specified DOM element.
		 * @param control The control to attach.
		 * @param element The DOM element that the component should be attached to.
		*/
		static attachControl(control: any, element: any): any;
	}
	/** The base type of classes that define arguments passed to event handler functions. */
	class EventArgs
	{
		/** Empty event args. */
		static Empty: EventArgs;
	}
	/** Provides a value to use with cancellable events. */
	class CancelEventArgs extends EventArgs
	{
		/** Gets or sets a value indicating whether to allow the current operation. */
		cancel: boolean;
	}
}
declare namespace MindFusion.Collections
{
	/** Represents an array of arbitrary objects. */
	class ArrayList
	{
		/** Initializes a new instance of the ArrayList class. */
		constructor();
		indexOf(array: ArrayList, element: any): number;
		add(array: ArrayList, element: any): void;
		insert(array: ArrayList, index: number, element: any): void;
		remove(array: ArrayList, element: any): void;
		removeAt(array: ArrayList, index: number): void;
		contains(array: ArrayList, element: any): boolean;
		forEach(array: ArrayList, func: any, instance: any): void;
		clone(array: ArrayList): ArrayList;
		addRange(array: ArrayList, items: ArrayList): void;
	}
	/** Represents a collection of keys and values. */
	class Dictionary
	{
		/** Initializes a new instance of the Dictionary class. */
		constructor();
		/** Associates the specified value with the specified key within the dictionary.
		 * @param key The key to associate the value with.
		 * @param value The value to associate.
		*/
		set(key: any, value: any): void;
		/** Gets the value associated with the specified key within the dictionary.
		 * @param key The key whose value to get.
		*/
		get(key: any): any;
		/** Determines whether the dictionary contains a specific key.
		 * @param key The key to locate in the dictionary.
		*/
		contains(key: any): boolean;
		/** Removes the element with the specified key from the dictionary.
		 * @param key The key of the element to remove.
		*/
		remove(key: any): any;
		/** Calls a defined callback function for each entry in the dictionary.
		 * @param func A function that accepts three arguments. forEach calls this function one time for each element in the dictionary.
		 * @param thisRef  A value passed as the first parameter of func.
		*/
		forEach(func: any, thisRef: any): void;
		/** Calls a defined callback function for each value in the dictionary.
		 * @param func A function that accepts two arguments. forEachValue calls this function one time for each value in the dictionary.
		 * @param thisRef  A value passed as the first parameter of func.
		*/
		forEachValue(func: any, thisRef: any): void;
		/** Calls a defined callback function for each key in the dictionary.
		 * @param func A function that accepts two arguments. forEachValue calls this function one time for each key in the dictionary.
		 * @param thisRef  A value passed as the first parameter of func.
		*/
		forEachKey(func: any, thisRef: any): void;
		/** Gets an array with all keys in the dictionary. */
		keys(): any;
	}
	/** Represents a collection of key/value pairs that are organized based on the hash code of the key. */
	class HashTable
	{
		/** Initializes a new instance of the HashTable class. */
		constructor();
		/** Adds an element with the specified key into the hashtable.
		 * @param key 
		*/
		add(key: any): void;
		/** Gets the entry associated with the specified key.
		 * @param key 
		*/
		get(key: any): any;
		/** Determines whether the hashtable contains a specific key.
		 * @param key The key to locate in the hashtable.
		*/
		contains(key: any): boolean;
		/** Removes the element with the specified key from the hashtable.
		 * @param key The key of the element to remove.
		*/
		remove(key: any): any;
		/** Calls a defined callback function for each entry in the hashtable.
		 * @param func The callback function.
		*/
		forEach(func: any): void;
	}
	/** Represents a collection that provides notifications when items get added or removed. */
	class ObservableCollection
	{
		/** Initializes a new instance of the ObservableCollection class. */
		constructor();
		/** Adds the specified element to the collection.
		 * @param item The element to add.
		*/
		add(item: any): void;
		/** Registers the specified function as a handler for the itemAdded event.
		 * @param handler The function to be invoked when items are added to the collection.
		*/
		add_itemAdded(handler: any): void;
		/** Unregisters the specified function as a handler for the itemAdded event.
		 * @param handler The function to unregister.
		*/
		remove_itemAdded(handler: any): void;
	}
}
declare namespace MindFusion.Drawing
{
	/** Specifies the alignment of text relative to its layout rectangle. */
	enum Alignment
	{
		/** The text is drawn in the near corner of the layout rectangle. */
		Near = 0,
		/** The text is drawn in the center of the layout rectangle. */
		Center = 1,
		/** The text is drawn in the far corner of the layout rectangle. */
		Far = 2
	}
	/** Specifies visibility for components. */
	enum Visibility
	{
		/** Specifies that the component is hidden, but the space it occupies in the layout is preserved. */
		Hidden = 0,
		/** Specifies that the component is hidden, and the space it occupies in the layout is not preserved. */
		Collapsed = 1,
		/** Specifies that the component is visible. */
		Visible = 2
	}
	/** Represents the base class for layout containers. */
	class Container
	{
	}
	/** Represents components in CompositeNode visual tree. */
	class Component
	{
		/** Initializes a new instance of the Component class. */
		constructor();
		/** Gets or sets the component's visibility */
		visibility: Visibility;
	}
	/** Specifies the position and alignment of a picture in a node, or that of the background image. */
	enum ImageAlign
	{
		/** The image is centered in the node or diagram. */
		Center = 0,
		/** The image is resized to fit the size of the object or the component's client area. */
		Fit = 1,
		/** The image is stretched to fill the object or the component's client area. */
		Stretch = 2,
		/** The image is tiled to cover the node or the diagram. */
		Tile = 3,
		/** The image is aligned to the top left corner of the node or the diagram. */
		TopLeft = 4,
		/** The image is aligned to the bottom left corner of the node or the diagram. */
		BottomLeft = 5,
		/** The image is aligned to the top right corner of the node or the diagram. */
		TopRight = 6,
		/** The image is aligned to the bottom right corner of the node or the diagram. */
		BottomRight = 7,
		/** The image is centered horizontally and aligned to the top side. */
		TopCenter = 8,
		/** The image is centered horizontally and aligned to the bottom side. */
		BottomCenter = 9,
		/** The image is centered vertically and aligned to the left-hand side. */
		MiddleLeft = 10,
		/** The image is centered vertically and aligned to the right-hand side. */
		MiddleRight = 11
	}
	/** Specifies the dash pattern of lines. */
	enum DashStyle
	{
		/** Specifies a solid line. */
		Solid = 0,
		/** Specifies a line consisting of dashes. */
		Dash = 1,
		/** Specifies a line consisting of dots. */
		Dot = 2,
		/** Specifies a dash-dot pattern. */
		DashDot = 3,
		/** Specifies a dash-dot-dot pattern. */
		DashDotDot = 4
	}
	/** Specifies font style attributes. */
	enum FontStyle
	{
		/** Normal text. */
		Regular = 0,
		/** Bold text. */
		Bold = 1,
		/** Italic text. */
		Italic = 2,
		/** Underlined text. */
		Underline = 4
	}
	/** Represents the size of 2D object. */
	class Size
	{
		/** Initializes a new instance of the Size class with the specified width and height.
		 * @param width Specifies object's width.
		 * @param height Specifies object's height.
		*/
		constructor(width: number, height: number);
		/** The object's width. */
		width: number;
		/** The object's height. */
		height: number;
	}
	/** Represents a rectangle. */
	class Rect
	{
		/** Initializes a new instance of the Rect class.
		 * @param x The X-coordinate of the top left corner of the rectangle.
		 * @param y The Y-coordinate of the top left corner of the rectangle.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		*/
		constructor(x: number, y: number, width: number, height: number);
		/** Initializes a new instance of the Rect class.
		 * @param location The location of the top left corner of the rectangle.
		 * @param size The size of the rectangle.
		*/
		constructor(location: Point, size: Size);
		/** Creates a Rect object with the specified edge locations.
		 * @param l The x-coordinate of the top left corner of the rectangle.
		 * @param t The y-coordinate of the top left corner of the rectangle.
		 * @param r The x-coordinate of the lower-right corner of this Rect. 
		 * @param b The y-coordinate of the lower-right corner of this Rect.
		*/
		static fromLTRB(l: number, t: number, r: number, b: number): Rect;
		/** The X-coordinate of the top left corner of the rectangle. */
		x: number;
		/** The Y-coordinate of the top left corner of the rectangle. */
		y: number;
		/** The width of the rectangle. */
		width: number;
		/** The height of the rectangle. */
		height: number;
		/** Returns a new empty Rect instance. */
		static empty: Rect;
		/** Gets the x-coordinate of the left edge of this Rect object.
		 * @return The x-coordinate of the left edge of this Rect object.
		*/
		left(): number;
		/** Gets the y-coordinate of the top edge of this Rect object.
		 * @return The y-coordinate of the top edge of this Rect object.
		*/
		top(): number;
		/** Gets the x-coordinate of the right edge of this Rect object.
		 * @return The x-coordinate of the right edge of this Rect object.
		*/
		right(): number;
		/** Gets the y-coordinate of the bottom edge of this Rect object.
		 * @return The y-coordinate of the bottom edge of this Rect object.
		*/
		bottom(): number;
		/** Gets the center of this Rect object.
		 * @return The center, which is a Point with x that is the sum of x and half of width and with y that is the sum of y and half of height.
		*/
		center(): Point;
		/** Gets the top-left edge of this Rect.
		 * @return The top-left edge of this Rect.
		*/
		topLeft(): Point;
		/** Gets the top-right edge of this Rect.
		 * @return The top-right edge of this Rect.
		*/
		topRight(): Point;
		/** Gets the bottom-left edge of this Rect.
		 * @return The bottom-left edge of this Rect.
		*/
		bottomLeft(): Point;
		/** Gets the bottom-right edge of this Rect.
		 * @return The bottom-right edge of this Rect.
		*/
		bottomRight(): Point;
		/** Checks if this Rect intersects with the specified rect.
		 * @param rect The rect to test.
		*/
		intersectsWith(rect: Rect): boolean;
		/** Determines if the rectangular region represented by rect is entirely contained within this Rect object.
		 * @param rect The rect to test.
		 * @return true if the rectangular region represented by rect is entirely contained within this Rect; otherwise, false.
		*/
		contains(rect: Rect): boolean;
		/** Determines if the specified point is contained within this Rect object.
		 * @param point The point to test.
		 * @return true if point is contained within the Rect; otherwise, false.
		*/
		contains(point: Point): boolean;
		/** Determines if the specified point is contained within this Rect object.
		 * @param point The point to test. 
		 * @return true if point is contained within the Rect; otherwise, false.
		*/
		containsPoint(point: Point): boolean;
		/** Returns a Rect object representing the union of the current rectangle with the specified rectangle.
		 * @param rect The rectangle to union.
		 * @return A Rect object that bounds the union of the two rectangles.
		*/
		union(rect: Rect): Rect;
		/** Returns a Rect object inflated by the specified amount.
		 * @param halfIncrement The increment.
		*/
		inflate(halfIncrement: number): Rect;
		/** Offsets this rect by the specified amount.
		 * @param x The x offset.
		 * @param y The y offset.
		*/
		offset(x: number, y: number): Rect;
		/** Sets the top-left edge of this Rect object.
		 * @param point The top-left edge of the Rect.
		*/
		setLocation(point: Point): void;
		/** Returns the size of this Rect. */
		getSize(): Size;
	}
	/** Represents a point. */
	class Point
	{
		/** Initializes a new instance of the Point class with the specified X and Y coordinates.
		 * @param x The X-coordinate of the Point.
		 * @param y The Y-coordinate of the Point.
		*/
		constructor(x: number, y: number);
		/** The X-coordinate of the Point. */
		x: number;
		/** The Y-coordinate of the Point. */
		y: number;
	}
	/** Represents a font. */
	class Font
	{
		/** Initializes a new instance of the Font class with the specified attributes.
		 * @param name The font name.
		 * @param size The font size.
		 * @param bold true if this font is bold, otherwise false.
		 * @param italic true if this font is italic, otherwise false.
		 * @param underline true if this font is underlined, otherwise false.
		*/
		constructor(name: string, size: number, bold?: boolean, italic?: boolean, underline?: boolean);
		/** Copies the specified font to a new instance.
		 * @param font The font to copy.
		*/
		static copy(font: Font): Font;
		/** The font name. */
		name: string;
		/** The font size. */
		size: number;
		/** true if this font is bold, otherwise false. */
		bold: boolean;
		/** true if this font is italic, otherwise false. */
		italic: boolean;
		/** true if this font is underlined, otherwise false. */
		underline: boolean;
	}
	/** Represents a text container. */
	class Text
	{
		/** Initializes a new instance of the Text class.
		 * @param text The text to be displayed in the container.
		 * @param bounds The bounds of the text container.
		*/
		constructor(text: string, bounds: Rect);
		/** Sets a value indicating the bounding rectangle of the text container.
		 * @param bounds The bounding rectangle.
		 * @param angle The rotation to be applied to the bounding rectangle.
		*/
		setBounds(bounds: Rect, angle?: number): void;
		/** Gets a value indicating the bounding rectangle of the text container. */
		getBounds(): Rect;
		/** Gets a value indicating the rotation of the bounding rectangle of the text container. */
		getRotationAngle(): number;
		getLines(context: any, rect: Rect): Array<string>;
		/** Gets the font of the text. */
		getFont(): Font;
		/** Sets the font of the text. */
		setFont(value: Font): void;
		/** Gets the text to be displayed. */
		getText(): string;
		/** Sets the text to be displayed. */
		setText(value: string): void;
		/** Indicates whether the text should fit inside its bounds. */
		fitInBounds: boolean;
		/** The stroke of the text. */
		pen: any;
		/** The text alignment of the text. */
		textAlignment: Alignment;
		/** The line alignment of the text. */
		lineAlignment: Alignment;
		/** The margin of the text. */
		margin: Thickness;
	}
	/** Describes the thickness of a rectangular frame. */
	class Thickness
	{
		/** Initializes a new instance of the Thickness class with the specified widths.
		 * @param left Specifies the width of the left side of the frame.
		 * @param top Specifies the width of the top side of the frame.
		 * @param right Specifies the width of the right side of the frame.
		 * @param bottom Specifies the width of the bottom side of the frame.
		*/
		constructor(left: number, top: number, right: number, bottom: number);
		/** The width of the left side of the frame. */
		left: number;
		/** The width of the top side of the frame. */
		top: number;
		/** The width of the right side of the frame. */
		right: number;
		/** The width of the bottom side of the frame. */
		bottom: number;
	}
	/** Represents an image. */
	class Image
	{
		/** Initializes a new instance of the Image class.
		 * @param bounds The bounds of the image.
		*/
		constructor(bounds: Rect);
		/** The DOM Image element to be displayed. */
		image: any;
		/** Indicates whether the DOM Image object is loaded and ready to use. */
		loaded: boolean;
		/** The bounds of the image. */
		bounds: Rect;
	}
	/** Represents units of measure. */
	enum GraphicsUnit
	{
		/** Specifies display units (1/100 inch) as the unit of measure. */
		Display = 1,
		/** Specifies device pixels as the unit of measure. */
		Pixel = 2,
		/** Specifies printer's points (1/72 inch) as the unit of measure. */
		Point = 3,
		/** Specifies inches as the unit of measure. */
		Inch = 4,
		/** Specifies document units (1/300 inch) as the unit of measure. */
		Document = 5,
		/** Specifies millimeters as the unit of measure. */
		Millimeter = 6,
		/** Specifies device-independent pixels (1/96 inch) as the unit of measure. */
		WpfPoint = 7,
		/** Specifies percents as the unit of measure. */
		Percent = 8,
		/** Specifies centimeters as the unit of measure. */
		Centimeter = 9
	}
	/** Represents a transformation matrix. */
	class Matrix
	{
		matrix(): Array<number>;
		rotateAt(angle: number, point: Point): void;
		transformRect(rect: Rect): Rect;
		transformPoints(points: Array<Point>): void;
	}
	/** Represents a path. */
	class Path
	{
		/** Initializes a new instance of the Path class.
		 * @param pathString A string representing the path figures.
		*/
		constructor(pathString?: string);
		/** Adds an ellipse figure to the path.
		 * @param x The x-coordinate of the center of the ellipse.
		 * @param y The y-coordinate of the center of the ellipse.
		 * @param width The width of the ellipse.
		 * @param height The height of the ellipse.
		*/
		addEllipse(x: number, y: number, width: number, height: number): void;
		/** Adds a rectangle figure to the path.
		 * @param x The x-coordinate of the rectangle.
		 * @param y The y-coordinate of the rectangle.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		*/
		addRect(x: number, y: number, width: number, height: number): void;
		/** Draws an arc.
		 * @param x The x-coordinate of the center of the circle.
		 * @param y The y-coordinate of the center of the circle.
		 * @param radius The radius of the circle.
		 * @param startAngle The starting angle in radians.
		 * @param endAngle The ending angle in radians.
		 * @param anticlockwise Specifies whether the drawing should be counterclockwise or clockwise.
		*/
		arcTo(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;
		/** Draws a cubic bezier curve.
		 * @param x1 The x-coordinate of the first bezier control point.
		 * @param y1 The y-coordinate of the first bezier control point.
		 * @param x2 The x-coordinate of the second bezier control point.
		 * @param y2 The y-coordinate of the second bezier control point.
		 * @param x3 The x-coordinate of the ending point.
		 * @param y3 The y-coordinate of the ending point.
		*/
		bezierTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
		/** Closes the path. */
		close(): void;
		/** Ends the path definition. */
		done(): void;
		/** Gets a value indicating whether this Path is empty. */
		empty(): boolean;
		/** Gets the bounding rect of the path. */
		getBounds(): Rect;
		/** Begins a path or resets the current path. */
		init(): void;
		/** Draws a line from the current point to the specified location.
		 * @param x The x-coordinate of the point.
		 * @param y The y-coordinate of the point.
		*/
		lineTo(x: number, y: number): void;
		/** Moves the path to the specified location.
		 * @param x The x-coordinate of the point.
		 * @param y The y-coordinate of the point.
		*/
		moveTo(x: number, y: number): void;
		/** Draws a quadratic bezier curve.
		 * @param x1 The x-coordinate of the first bezier control point.
		 * @param y1 The y-coordinate of the bezier control point.
		 * @param x The x-coordinate of the ending point.
		 * @param y The y-coordinate of the ending point.
		*/
		quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
		/** Sets the brush used to fill a closed path.
		 * @param brush The brush.
		*/
		setBrush(brush: any): void;
		/** Sets the pen used to draw the path.
		 * @param pen The pen.
		*/
		setPen(pen: any): void;
		/** Sets the text displayed inside this path.
		 * @param text The text.
		*/
		setText(text: string): void;
	}
	/** The Canvas class wraps the HTML5 Canvas element. */
	class Canvas
	{
		/** Gets the underlying Canvas element's bounds. */
		getBounds(): Rect;
		/** Sets the underlying Canvas element's bounds. */
		setBounds(value: Rect): void;
		/** Gets the unit of measure used for logical coordinates. */
		getMeasureUnit(): GraphicsUnit;
		/** Sets the unit of measure used for logical coordinates. */
		setMeasureUnit(value: GraphicsUnit): void;
		/** Gets the zoom factor. */
		getZoomFactor(): number;
		/** Sets the zoom factor. */
		setZoomFactor(value: number): void;
		/** Gets a threshold value that hides text if scaled font sizes become smaller. */
		getMinVisibleFontSize(): number;
		/** Sets a threshold value that hides text if scaled font sizes become smaller. */
		setMinVisibleFontSize(value: number): void;
		/** Gets the URL of the diagram's license file. */
		getLicenseLocation(): string;
		/** Sets the URL of the diagram's license file. */
		setLicenseLocation(value: string): void;
		/** Transforms a point from client to document coordinates.
		 * @param point The point to transform.
		 * @return The transformed point.
		*/
		clientToDoc(point: Point): Point;
		/** Transforms a point from document to client coordinates.
		 * @param point The point to transform.
		 * @return The transformed point.
		*/
		docToClient(point: Point): Point;
		/** Creates and initializes a new Canvas associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the Canvas should be attached to.
		 * @return A Canvas instance.
		*/
		static create(element: any): Canvas;
		/** Invalidates the canvas or a region of the canvas, causing it to be repainted.
		 * @param rect A Rect instance specifying the region that should be repainted. If not specified, the whole diagram will be repainted.
		*/
		invalidate(rect?: Rect): void;
		scale: number;
		repaint(): void;
		setLicenseKey(licenseKey: string): void;
	}
	/** Represents a vector. */
	class Vector
	{
		/** Initializes a new instance of the Vector class with the specified X and Y coordinates.
		 * @param x The X-coordinate of the Vector.
		 * @param y The Y-coordinate of the Vector.
		*/
		constructor(x: number, y: number);
		/** The X-coordinate of the Vector. */
		x: number;
		/** The Y-coordinate of the Vector. */
		y: number;
		/** Returns the vector length.
		 * @return The length of the vector.
		*/
		length(): number;
		/** Returns the squared length.
		 * @return The squared length.
		*/
		lengthSquared(): number;
		/** Reverses the vector's direction.
		 * @return A vector instance in the reversed direction.
		*/
		negate(): Vector;
		/** Normilizes the vector
		 * @return A normalized vector instance.
		*/
		normalize(): Vector;
		/** Creates a vector instance from the specified points.
		 * @param point1 Origin point of the vector.
		 * @param point2 End point of the vector.
		 * @return The new vector instance.
		*/
		static fromPoints(point1: Point, point2: Point): Vector;
		/** Returns the dot product of two vectors.
		 * @param vector1 The first vector.
		 * @param vector2 The second vector.
		 * @return The dot product.
		*/
		static dot(vector1: Vector, vector2: Vector): number;
		/** Multiplies the specified vector by the specified scalar value.
		 * @param vector The vector to multiply.
		 * @param value The scalar to multipy.
		 * @return The result of multiplying scalar and vector.
		*/
		static multiplyScalar(vector: Vector, value: number): Vector;
		/** Divides the specified vector by the specified scalar value
		 * @param vector The vector to divide.
		 * @param value The scalar to divide.
		 * @return The result of dividing the vector by scalar.
		*/
		static divideScalar(vector: Vector, value: number): Vector;
		/** Adds a vector to another vector.
		 * @param vector1 The first vector to add.
		 * @param vector2 The second vector to add.
		 * @return The sum of the two vectors.
		*/
		static add(vector1: Vector, vector2: Vector): Vector;
		/** Subtracts the specified vector from another specified vector.
		 * @param vector1 The vector from which vector2 is subtracted.
		 * @param vector2 The vector to subtract from.
		 * @return The difference between the two vectors.
		*/
		static sub(vector1: Vector, vector2: Vector): Vector;
	}
	/** A component that displays video stream. */
	class Video
	{
		/** Initializes a new instance of the Video class.
		 * @param bounds The bounds of the Video.
		*/
		constructor(bounds: Rect);
		/** Creates a Video object identical to the current object. */
		clone(): void;
		/** Starts playing the video stream. */
		play(): boolean;
		/** Detects if video is playing. */
		isPlaying(): boolean;
		/** Pauses the video. */
		pause(): void;
		/** Gets the URL of the video stream displayed in this component. */
		getMediaLocation(): string;
		/** Sets the URL of the video stream displayed in this component. */
		setMediaLocation(value: string): void;
		/** The object's bounds. */
		bounds: Rect;
	}
}
