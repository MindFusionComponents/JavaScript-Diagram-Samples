/**
 * Copyright (c) 2015-2016, MindFusion LLC - Bulgaria.
 *
 * This source code is provided to you as part of the MindFusion software components
 * package you have purchased. You may use the source code to trace and/or fix
 * problems or customize the library as needed for your application. To get permission
 * to use the source code in any other way, please contact us at support@mindfusion.eu.
 */
 
 /**
* Represents the base class of linear and oval gauges.
*/
interface BaseGauge
{
	/**
	* Registers a single event listener on the element.
	* @param {string} eventName The name of the event. See a list of supported events here.
	* @param {Function} handler Represents the method that will handle the event specified with eventName.
	*/
	addEventListener(eventName: string, handler: any, element?: HTMLCanvasElement | any): void;
	/**
	* Removes a single event listener attached to the element.
	* @param {string} eventName The name of the event. See a list of supported events here.
	* @param {Function} handler Represents the method that handles the event specified with eventName.
	*/
	removeEventListener(eventName: string, handler: any, element?: HTMLCanvasElement): void;
	repaint(): void;
	setWidth(value: number): void;
	setHeight(value: number): void;
	handleMouse(action: MouseAction, point: Point): void;

	/**
	* Returns the VisualElement object corresponding to the specified name.
	* @param {String} name The name of the object to find.
	* @return {VisualElement} The VisualElement object.
	*/
	getElementByName(name: string): VisualElement;

	/**
	* A list of scale objects.
	* @type {MindFusion.Gauges.BaseScale} 
	*/
	scales: BaseScale[];
	stopRepaint: boolean;

	/**
	* Adds a scale to the gauge.
	* @param {MindFusion.Gauges.BaseScale} scale The scale to add.
	*/
	addScale(scale: BaseScale): void;
	/**
	* Removes a scale from the gauge.
	* @param {MindFusion.Gauges.BaseScale} scale The scale to remove.
	*/
	removeScale(scale: BaseScale): void;
}
/**
* Represents a linear gauge control.
*/
interface LinearGauge extends BaseGauge
{
	/**
	* Creates and initializes a new LinearGauge from the specified element. 
	* This method is static and can be called without creating an instance of the class.
	* @param {Object} element The DOM element that the LinearGauge should be attached to.
	* @returns {MindFusion.Gauges.LinearGauge} A LinearGauge object that represents 
	* the newly created gauge.
	*/
	create(element: HTMLCanvasElement, parentEvents: boolean): LinearGauge;
	/**
	* Gets the orientation of the gauge.
	* @returns {MindFusion.Gauges.Orientation} The orientation of the gauge.
	*/
	getOrientation(): Orientation;
	/**
	* Sets the orientation of the gauge.
	* @param {MindFusion.Gauges.Orientation} value The orientation of the gauge.
	*/
	setOrientation(value: Orientation): void;
	/**
	* Returns the specified LinearGauge object. This member is static and can be 
	* invoked without creating an instance of the class.
	* @param {String} id A string that contains the ID of the LinearGauge to find.
	* @param {Object} [parent] The component or element that contains the LinearGauge to find.
	* @returns {MindFusion.Gauges.LinearGauge} A LinearGauge object that contains
	* the gauge requested by id, if found; otherwise, null.
	*/
	find(id: string, parent?: Object): LinearGauge;
}
/**
* Represents a circular gauge control.
*/
interface OvalGauge extends BaseGauge
{
	/**
	* Creates and initializes a new OvalGauge from the specified element. 
	* This method is static and can be called without creating an instance of the class.
	* @param {Object} element The DOM element that the OvalGauge should be attached to.
	* @returns {MindFusion.Gauges.OvalGauge} A OvalGauge object that represents
	* the newly created gauge.
	*/
	create(element: HTMLCanvasElement, parentEvents: boolean): OvalGauge;
	/**
	* Gets the visual style of the gauge.
	* @returns {MindFusion.Gauges.OvalGaugeStyle} The visual style of the gauge.
	*/
	getStyle(): OvalGaugeStyle;
	/**
	* Sets the visual style of the gauge.
	* @param {MindFusion.Gauges.OvalGaugeStyle} value The visual style of the gauge.
	*/
	setStyle(style: OvalGaugeStyle): void;

	/**
	* Returns the specified OvalGauge object. This member is static and can be 
	* invoked without creating an instance of the class.
	* @param {String} id A string that contains the ID of the OvalGauge to find.
	* @param {Object} [parent] The component or element that contains the OvalGauge to find.
	* @returns {MindFusion.Gauges.OvalGauge} A OvalGauge object that contains 
	* the gauge requested by id, if found; otherwise, null.
	*/
	find(id: string, parent?: Object): OvalGauge;
}
/**
* Represents a scale within a gauge control.
*/
interface BaseScale extends VisualElement
{
	/**
	* Adds a Pointer object to the pointers collection.
	* @param {MindFusion.Gauges.Pointer} pointer The pointer to add.
	*/
	addPointer(pointer: Pointer): void;
	/**
	* Removes a Pointer object from the pointers collection.
	* @param {MindFusion.Gauges.Pointer} pointer The pointer to remove.
	*/
	removePointer(pointer: Pointer): void;

	/**
	* Adds a Range object to the ranges collection.
	* @param {MindFusion.Gauges.Range} range The ranges to add.
	*/
	addRange(pointer: Range): void;
	/**
	* Removes a Range object from the ranges collection.
	* @param {MindFusion.Gauges.Range} range The ranges to remove.
	*/
	removeRange(pointer: Range): void;

	/**
	* Gets the settings for the major ticks and their associated labels.
	* @returns {MindFusion.Gauges.MajorTickSettings} The settings for the major ticks and their associated labels.
	*/
	majorTickSettings: TickSettings;
	/**
	* Gets the settings for the middle ticks and their associated labels.
	* @returns {MindFusion.Gauges.MiddleTickSettings} The settings for the middle ticks and their associated labels.
	*/
	middleTickSettings: TickSettings;
	/**
	* Gets the settings for the minor ticks and their associated labels.
	* @returns {MindFusion.Gauges.MinorTickSettings} The settings for the minor ticks and their associated labels.
	*/
	minorTickSettings: TickSettings;

	fill: Object;
	stroke: string;
	/**
	* A list of pointer objects.
	* @type {MindFusion.Gauges.Pointer}
	*/
	pointers: Pointer[];
	/**
	* A list of range objects.
	* @type {MindFusion.Gauges.Range}
	*/
	ranges: Range[];

	/**
	* Gets the minimal value displayed by the scale.
	* @returns {Number} The minimal value displayed by the scale.
	*/
	getMinValue(): number;
	/**
	* Sets the minimal value displayed by the scale.
	* @param {Number} value The minimal value displayed by the scale.
	*/
	setMinValue(value: number): void;
	/**
	* Gets the maximal value displayed by the scale.
	* @returns {Number} The maximal value displayed by the scale.
	*/
	getMaxValue(): number;
	/**
	* Sets the maximal value displayed by the scale.
	* @param {Number} value The maximal value displayed by the scale.
	*/
	setMaxValue(value: number): void;
	/**
	* Gets the width of the scale at its beginning.
	* @returns {MindFusion.Gauges.Length} The width of the scale at its beginning.
	*/
	getStartWidth(): Length;
	/**
	* Sets the width of the scale at its beginning.
	* @param {MindFusion.Gauges.Length} value The width of the scale at its beginning.
	*/
	setStartWidth(value: Length): void;
	/**
	* Gets the width of the scale at its end.
	* @returns {MindFusion.Gauges.Length} The width of the scale at its end.
	*/
	getEndWidth(): Length;
	/**
	* Sets the width of the scale at its end.
	* @param {MindFusion.Gauges.Length} value The width of the scale at its end.
	*/
	setEndWidth(value: Length): void;
	/**
	* Gets the logarithm base when FunctionType is set to Logarithmic.
	* @returns {Number} The logarithm base when functionType is set to Logarithmic.
	*/
	getLogarithmBase(): number;
	/**
	* Sets the logarithm base when FunctionType is set to Logarithmic.
	* @param {Number} value The logarithm base when functionType is set to Logarithmic.
	*/
	setLogarithmBase(value: number): void;
	/**
	* Gets the type of the function used to calculate the distribution of values along the scale.
	* @returns {MindFusion.Gauges.FunctionType} The type of the function used to calculate the distribution of values along the scale.
	*/
	getFunctionType(): FunctionType;
	/**
	* Sets the type of the function used to calculate the distribution of values along the scale.
	* @param {MindFusion.Gauges.FunctionType} value The type of the function used to calculate the distribution of values along the scale.
	*/
	setFunctionType(value: FunctionType): void;
	/**
	* Gets the argument passed to custom functions.
	* @returns {Number} The argument passed to custom functions.
	*/
	getFunctionArgument(): number;
	/**
	* Sets the argument passed to custom functions.
	* @param {Number} value The argument passed to custom functions.
	*/
	setFunctionArgument(value: number): void;
	/**
	* Gets the function to be used for distribution of values along the scale when functionType is set to Custom.
	* @returns {FunctionDelegate} The function to be used for distribution of values along the scale when functionType is set to Custom.
	*/
	getCustomFunction(): any;
	/**
	* Sets the function to be used for distribution of values along the scale when functionType is set to Custom.
	* @param {FunctionDelegate} value The function to be used for distribution of values along the scale when functionType is set to Custom.
	*/
	setCustomFunction(value: any): void;
	/**
	* Gets the reversed version of the function specified through customFunction.
	* @returns {FunctionDelegate} The reversed version of the function specified through CustomFunction.
	*/
	getReversedCustomFunction(): any;
	/**
	* Sets the reversed version of the function specified through customFunction.
	* @param {FunctionDelegate} value The reversed version of the function specified through CustomFunction.
	*/
	setReversedCustomFunction(value: any): void;

	updateTicksAndLabels(): void;
}
/**
* Represents a linear scale.
*/
interface LinearScale extends BaseScale
{
	/**
	* Creates an instance of LinearScale.
	* @param {MindFusion.Gauges.LinearGauge} [parent] The gauge control this scale belongs to.
	*/
	new (parent?: LinearGauge): LinearScale;
	/**
	* Gets the length of the scale.
	* @returns {MindFusion.Gauges.Length} The length of the scale.
	*/
	getScaleLength(): Length;
	/**
	* Sets the length of the scale.
	* @param {MindFusion.Gauges.Length} value The length of the scale.
	*/
	setScaleLength(value: Length): void;
	/**
	* Gets the alignment of the scale.
	* @returns {MindFusion.Gauges.Alignment} The alignment of the scale.
	* @remarks All Inner* values align a vertical scale to the left side and a horizontal
	* scale to the top side of the control. All Outer* values align a vertical
	* scale to the right side and a horizontal scale to the bottom side of the
	* control. All Center* values center the scale along its length.
	*/
	getScaleAlignment(): Alignment;
	/**
	* Sets the alignment of the scale.
	* @param {MindFusion.Gauges.Alignment} value The alignment of the scale.
	* @remarks All Inner* values align a vertical scale to the left side and a horizontal
	* scale to the top side of the control. All Outer* values align a vertical
	* scale to the right side and a horizontal scale to the bottom side of the
	* control. All Center* values center the scale along its length.
	*/
	setScaleAlignment(value: Alignment): void;
	/**
	* Gets the orientation of the scale.
	* @returns {MindFusion.Gauges.Orientation} The orientation of the scale.
	*/
	getOrientation(): Orientation;
	/**
	* Sets the orientation of the scale.
	* @param {MindFusion.Gauges.Orientation} value The orientation of the scale.
	*/
	setOrientation(value: Orientation): void;
	/**
	* Gets the distance between the left of this scale and the left of its container.
	* @returns {MindFusion.Gauges.Length} The distance between the left of this scale and the left of its container.
	*/
	getLeft(): Length;
	/**
	* Sets the distance between the left of this scale and the left of its container.
	* @param {MindFusion.Gauges.Length} value The distance between the left of this scale and the left of its container.
	*/
	setLeft(value: Length): void;
	/**
	* Gets the distance between the top of this scale and the top of its container.
	* @returns {MindFusion.Gauges.Length} The distance between the top of this scale and the top of its container.
	*/
	getTop(): Length;
	/**
	* Sets the distance between the top of this scale and the top of its container.
	* @param {MindFusion.Gauges.Length} value The distance between the top of this scale and the top of its container.
	*/
	setTop(value: Length): void;
}
/**
* Represents a radial scale.
*/
interface OvalScale extends BaseScale
{
	/**
	* Creates an instance of OvalScale.
	* @param {MindFusion.Gauges.OvalGauge} [parent] The gauge control this scale belongs to.
	*/
	new (parent?: OvalGauge): OvalScale;
	/**
	* Gets the center of the scale relative to the scale bounds.
	* @returns {MindFusion.Drawing.Point} The center of the scale relative to the scale bounds.
	* @remarks A value of (0.5, 0.5) indicates the center of the bounds, a value of (0, 0) indicates the top-left corner.
	*/
	getScaleRelativeCenter(): Point;
	/**
	* Sets the center of the scale relative to the scale bounds.
	* @param {MindFusion.Drawing.Point} value The center of the scale relative to the scale bounds.
	* @remarks A value of (0.5, 0.5) indicates the center of the bounds, a value of (0, 0) indicates the top-left corner.
	*/
	setScaleRelativeCenter(value: Point): void;
	/**
	* Gets the radius of the scale relative to the scale bounds.
	* @returns {Number} The radius of the scale relative to the scale bounds.
	* @remarks A value of 0.5 indicates that the radius is half the size of the scale.
	*/
	getScaleRelativeRadius(): number;
	/**
	* Sets the radius of the scale relative to the scale bounds.
	* @param {Number} value The radius of the scale relative to the scale bounds.
	* @remarks A value of 0.5 indicates that the radius is half the size of the scale.
	*/
	setScaleRelativeRadius(value: number): void;
	/**
	* Gets the start angle of the scale.
	* @returns {Number} The start angle of the scale.
	*/
	getStartAngle(): number;
	/**
	* Sets the start angle of the scale.
	* @param {Number} value The start angle of the scale.
	*/
	setStartAngle(value: number): void;
	/**
	* Gets the end angle of the scale.
	* @returns {Number} The end angle of the scale.
	*/
	getEndAngle(): number;
	/**
	* Sets the end angle of the scale.
	* @param {Number} value The end angle of the scale.
	*/
	setEndAngle(value: number): void;
}
/**
* Provides settings for the ticks and labels in a gauge scale.
*/
interface TickSettings
{
	fill: Object;
	stroke: Object;

	fontFamily: string;
	fontSize: Length;
	fontStyle: string;

	/**
	* Gets the number of ticks and labels.
	* @returns {Number} The number of ticks and labels.
	* @remarks This property is mutually exclusive with the Step property. If both are specified the Step property will take precedence.
	*/
	getCount(): number;
	/**
	* Sets the number of ticks and labels.
	* @param {Number} value The number of ticks and labels.
	* @remarks This property is mutually exclusive with the Step property. If both are specified the Step property will take precedence.
	*/
	setCount(value: number): void;
	/**
	* Gets the value between adjacent ticks and labels.
	* @returns {Number} The value between adjacent ticks and labels.
	* @remarks This property is mutually exclusive with the Count property. If both are specified the Step property will take precedence.
	*/
	getStep(): number;
	/**
	* Sets the value between adjacent ticks and labels.
	* @param {Number} value The value between adjacent ticks and labels.
	* @remarks This property is mutually exclusive with the Count property. If both are specified the Step property will take precedence.
	*/
	setStep(value: number): void;
	/**
	* Gets the width of a tick.
	* @returns {MindFusion.Gauges.Length} The width of a tick.
	*/
	getTickWidth(): Length;
	/**
	* Sets the width of a tick.
	* @param {MindFusion.Gauges.Length} value The width of a tick.
	*/
	setTickWidth(value: Length): void;
	/**
	* Gets the height of a tick.
	* @returns {MindFusion.Gauges.Length} The height of a tick.
	*/
	getTickHeight(): Length;
	/**
	* Sets the height of a tick.
	* @param {MindFusion.Gauges.Length} value The height of a tick.
	*/
	setTickHeight(value: Length): void;
	/**
	* Gets the fill brush of the ticks.
	* @returns {Object} The fill brush of the ticks.
	*/
	getFill(): Object;
	/**
	* Sets the fill brush of the ticks.
	* @param {Object} value The fill brush of the ticks.
	*/
	setFill(value: Object): void;
	/**
	* Gets the stroke brush of the ticks.
	* @returns {Object} The stroke brush of the ticks.
	*/
	getStroke(): Object;
	/**
	* Sets the stroke brush of the ticks.
	* @param {Object} value The stroke brush of the ticks.
	*/
	setStroke(value: Object): void;
	/**
	* Gets a value indicating whether the ticks are visible.
	* @returns {Boolean} True if ticks are visible, otherwise false.
	*/
	getShowTicks(): boolean;
	/**
	* Sets a value indicating whether the ticks are visible.
	* @param {Boolean} value True if ticks are visible, otherwise false.
	*/
	setShowTicks(value: boolean): void;
	/**
	* Gets a value indicating whether the labels are visible.
	* @returns {Boolean} True if labels are visible, otherwise false.
	*/
	getShowLabels(): boolean;
	/**
	* Sets a value indicating whether the labels are visible.
	* @param {Boolean} value True if labels are visible, otherwise false.
	*/
	setShowLabels(value: boolean): void;
	/**
	* Gets the shape of the ticks.
	* @returns {MindFusion.Gauges.TickShape} The shape of the ticks.
	*/
	getTickShape(): TickShape;
	/**
	* Sets the shape of the ticks.
	* @param {MindFusion.Gauges.TickShape} value The shape of the ticks.
	*/
	setTickShape(value: TickShape): void;
	/**
	* Gets the alignment of the ticks relative to the scale.
	* @returns {MindFusion.Gauges.Alignment} The alignment of the ticks relative to the scale.
	*/
	getTickAlignment(): Alignment;
	/**
	* Sets the alignment of the ticks relative to the scale.
	* @param {MindFusion.Gauges.Alignment} value The alignment of the ticks relative to the scale.
	*/
	setTickAlignment(value: Alignment): void;
	/**
	* Gets the offset of the ticks relative to their calculated position.
	* @returns {MindFusion.Gauges.Length} The offset of the ticks relative to their calculated position.
	*/
	getTickOffset(): Length;
	/**
	* Sets the offset of the ticks relative to their calculated position.
	* @param {MindFusion.Gauges.Length} value The offset of the ticks relative to their calculated position.
	*/
	setTickOffset(value: Length): void;
	/**
	* Gets the alignment of the labels relative to the scale.
	* @returns {MindFusion.Gauges.Alignment} The alignment of the labels relative to the scale.
	*/
	getLabelAlignment(): Alignment;
	/**
	* Sets the alignment of the labels relative to the scale.
	* @param {MindFusion.Gauges.Alignment} value The alignment of the labels relative to the scale.
	*/
	setLabelAlignment(value: Alignment): void;
	/**
	* Gets the offset of the labels relative to their calculated position.
	* @returns {MindFusion.Gauges.Length} The offset of the labels relative to their calculated position.
	*/
	getLabelOffset(): Length;
	/**
	* Sets the offset of the labels relative to their calculated position.
	* @param {MindFusion.Gauges.Length} value The offset of the labels relative to their calculated position.
	*/
	setLabelOffset(value: Length): void;
	/**
	* Gets the rotation mode of the labels.
	* @returns {MindFusion.Gauges.LabelRotation} The rotation mode of the labels.
	*/
	getLabelRotation(): LabelRotation;
	/**
	* Sets the rotation mode of the labels.
	* @param {MindFusion.Gauges.LabelRotation} value The rotation mode of the labels.
	*/
	setLabelRotation(value: LabelRotation): void;
	/**
	* Gets the number recision of the labels.
	* @returns {Number} The number recision of the labels.
	*/
	getNumberPrecision(): number;
	/**
	* Sets the number recision of the labels.
	* @param {Number} value The number recision of the labels.
	*/
	setNumberPrecision(value: number): void;
	/**
	* Gets the font family of the labels.
	* @returns {String} The font family of the labels.
	*/
	getFontFamily(): string;
	/**
	* Sets the font family of the labels.
	* @param {String} value The font family of the labels.
	*/
	setFontFamily(value: string): void;
	/**
	* Gets the font size of the labels.
	* @returns {MindFusion.Gauges.Length} The font size of the labels.
	*/
	getFontSize(): Length;
	/**
	* Sets the font size of the labels.
	* @param {MindFusion.Gauges.Length} value The font size of the labels.
	*/
	setFontSize(value: Length): void;
	/**
	* Gets the font style of the labels.
	* @returns {String} The font style of the labels.
	*/
	getFontStyle(): string;
	/**
	* Sets the font style of the labels.
	* @param {String} value The font style of the labels.
	*/
	setFontStyle(value: string): void;
	/**
	* Gets the brush used to paint label texts.
	* @returns {Object} The brush used to paint label texts.
	*/
	getLabelForeground(): Object;
	/**
	* Sets the brush used to paint label texts.
	* @param {Object} value The brush used to paint label texts.
	*/
	setLabelForeground(value: Object): void;
	/**
	* Gets a value indicating whether to display a tick for the maxValue of the scale.
	* @returns {Boolean} True to display a tick for the maxValue, otherwise false.
	*/
	getShowMaxValueTick(): boolean;
	/**
	* Sets a value indicating whether to display a tick for the maxValue of the scale.
	* @param {Boolean} value True to display a tick for the maxValue, otherwise false.
	*/
	setShowMaxValueTick(value: boolean): void;
	/**
	* Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.
	* @returns {Array<MindFusion.Gauges.CustomInterval>} An array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.
	*/
	getCustomIntervals(): Array<CustomInterval>;
	/**
	* Adds a CustomInterval object to these settings' customIntervals collection.
	* @param {MindFusion.Gauges.CustomInterval} interval The interval to add.
	*/
	addCustomInterval(value: CustomInterval): void;
	/**
	* Removes a CustomInterval object from these settings' customIntervals collection.
	* @param {MindFusion.Gauges.CustomInterval} interval The interval to remove.
	*/
	removeCustomInterval(value: CustomInterval): void;
}
/**
* Represents an object with outline and fill, which can render itself to a canvas.
*/
interface VisualElement
{
	fill: Object;
	stroke: Object;

	/**
	* Gets the name of this element.
	* @returns {String} The name of this element.
	* @remarks The name can be used to obtain a reference to the element through a call to the getElementByName method.
	*/
	getName(): string;
	/**
	* Sets the name of this element.
	* @param {String} value The name of this element.
	* @remarks The name can be used to obtain a reference to the element through a call to the getElementByName method.
	*/
	setName(value: string): void;
	/**
	* Gets the fill of this element.
	* @returns {Object} The fill of this element.
	*/
	getFill(): Object;
	/**
	* Sets the fill of this element.
	* @param {Object} value The fill of this element.
	*/
	setFill(value: Object): void;
	/**
	* Gets the stroke of this element.
	* @returns {Object} The stroke of this element.
	*/
	getStroke(): Object;
	/**
	* Sets the stroke of this element.
	* @param {Object} value The stroke of this element.
	*/
	setStroke(value: Object): void;
	/**
	* Gets a value indicating whether this element is visible.
	* @returns {Boolean} True if the element is visible, otherwise false.
	*/
	getIsVisible(): boolean;
	/**
	* Sets a value indicating whether this element is visible.
	* @param {Boolean} value True if the element is visible, otherwise false.
	*/
	setIsVisible(value: boolean): void;
	/**
	* Gets the margin of this element.
	* @returns {MindFusion.Gauges.Thickness} The margin of this element.
	*/
	getMargin(): Thickness;
	/**
	* Sets the margin of this element.
	* @param {MindFusion.Gauges.Thickness} value The margin of this element.
	*/
	setMargin(value: Thickness): void;
	/**
	* Gets the normalized x position of this element, relative to its parent.
	* @returns {Number} The normalized x position of this element, relative to its parent.
	*/
	getX(): number;
	/**
	* Sets the normalized x position of this element, relative to its parent.
	* @param {Number} value The normalized x position of this element, relative to its parent.
	*/
	setX(value: number): void;
	/**
	* Gets the normalized y position of this element, relative to its parent.
	* @returns {Number} The normalized y position of this element, relative to its parent.
	*/
	getY(): number;
	/**
	* Sets the normalized y position of this element, relative to its parent.
	* @param {Number} value The normalized y position of this element, relative to its parent.
	*/
	setY(value: number): void;
	/**
	* Gets the bounding rectangle of this element.
	* @returns {MindFusion.Drawing.Rect} The bounding rectangle of this element.
	*/
	getBounds(): Rect;
	/**
	* Sets the bounding rectangle of this element.
	* @param {MindFusion.Drawing.Rect} value The bounding rectangle of this element.
	*/
	setBounds(value: Rect): void;
	/**
	* Gets the size of this element.
	* @returns {MindFusion.Drawing.Size} The size of this element.
	*/
	getSize(): Size;
	/**
	* Gets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.
	* @returns {Boolean} True if the metrics are relative, otherwise false.
	*/
	getRelativeCoordinates(): boolean;
	/**
	* Sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.
	* @param {Boolean} value True if the metrics are relative, otherwise false.
	*/
	setRelativeCoordinates(value: boolean): void;
	/**
	* Gets the rendering size of the element.
	* @returns {MindFusion.Drawing.Size} The rendering size of the element.
	*/
	getRenderSize(): Size;
	/**
	* Sets the rendering size of the element.
	* @param {MIndFusion.Drawing.Size} value The rendering size of the element.
	*/
	setRenderSize(value: Size): void;
}
/**
* Represents a needle (or arrow) within a gauge scale.
*/
interface Pointer extends VisualElement
{
	/**
	*  Creates an instance of Pointer class.
	*/
	new (): Pointer;
	isInteractive: boolean;

	/**
	* Gets the value this pointer points to.
	* @returns {Number} The value this pointer points to.
	*/
	getValue(): number;
	/**
	* Sets the value this pointer points to.
	* @param {Number} value The value this pointer points to.
	*/
	setValue(value: number): void;
	/**
	* Gets a value indicating whether the pointer position should be affected by user interactions.
	* @returns {Boolean} True if the pointer is interactive, otherwise false.
	*/
	getIsInteractive(): boolean;
	/**
	* Sets a value indicating whether the pointer position should be affected by user interactions.
	* @param {Boolean} value True if the pointer is interactive, otherwise false.
	*/
	setIsInteractive(value: boolean): void;
	/**
	* Gets the width of the pointer.
	* @returns {MindFusion.Gauges.Length} The width of the pointer.
	*/
	getPointerWidth(): Length;
	/**
	* Sets the width of the pointer.
	* @param {MindFusion.Gauges.Length} value The width of the pointer.
	*/
	setPointerWidth(value: Length): void;
	/**
	* Gets the height of the pointer.
	* @returns {MindFusion.Gauges.Length} The height of the pointer.
	*/
	getPointerHeight(): Length;
	/**
	* Sets the height of the pointer.
	* @param {MindFusion.Gauges.Length} value The height of the pointer.
	*/
	setPointerHeight(value: Length): void;
	/**
	* Gets the offset of the pointer along the direction it points to.
	* @returns {MindFusion.Gauges.Length} The offset of the pointer along the direction it points to.
	*/
	getPointerOffset(): Length;
	/**
	* Sets the offset of the pointer along the direction it points to.
	* @param {MindFusion.Gauges.Length} value The offset of the pointer along the direction it points to.
	*/
	setPointerOffset(value: Length): void;
	/**
	* Gets the alignment of the pointer relative to the scale.
	* @returns {MindFusion.Gauges.Alignment} The alignment of the pointer relative to the scale.
	* @remarks This property is ignored in oval gauges where the pointer is always pinned to the center of the gauge.
	*/
	getAlignment(): Alignment;
	/**
	* Sets the alignment of the pointer relative to the scale.
	* @param {MindFusion.Gauges.Alignment} value The alignment of the pointer relative to the scale.
	* @remarks This property is ignored in oval gauges where the pointer is always pinned to the center of the gauge.
	*/
	setAlignment(value: Alignment): void;
	/**
	* Gets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).
	* @returns {Boolean} True if the pointer is discrete, otherwise false.
	*/
	getIsDiscrete(): boolean;
	/**
	* Sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).
	* @param {Boolean} value True if the pointer is discrete, otherwise false.
	*/
	setIsDiscrete(value: boolean): void;
	/**
	* Gets the shape of the pointer.
	* @returns {MindFusion.Gauges.PointerShape} The shape of the pointer.
	*/
	getShape(): PointerShape;
	/**
	* Sets the shape of the pointer.
	* @param {MindFusion.Gauges.PointerShape} value The shape of the pointer.
	*/
	setShape(value: PointerShape): void;
	/**
	* Gets the definition of the pointer shape when Shape is set to Custom.
	* @returns {String} The definition of the pointer shape when Shape is set to Custom.
	*/
	getCustomShape(): string;
	/**
	* Sets the definition of the pointer shape when Shape is set to Custom.
	* @param {String} value The definition of the pointer shape when Shape is set to Custom.
	*/
	setCustomShape(value: string): void;
}
/**
* Represents a range within a gauge scale.
*/
interface Range extends VisualElement
{
	/**
	* Creates an instance of Range class.
	*/
	new (): Range;

	/**
	* Gets the start value of this range.
	* @returns {Number} The start value of this range.
	*/
	getMinValue(): number;
	/**
	* Sets the start value of this range.
	* @param {Number} value The start value of this range.
	*/
	setMinValue(value: number): void;
	/**
	* Gets the end value of this range.
	* @returns {Number} The end value of this range.
	*/
	getMaxValue(): number;
	/**
	* Sets the end value of this range.
	* @param {Number} value The end value of this range.
	*/
	setMaxValue(value: number): void;
	/**
	* Gets the alignment of this range relative to the scale it is associated with.
	* @returns {MindFusion.Gauges.Alignment} The alignment of this range relative to the scale it is associated with.
	*/
	getAlignment(): Alignment;
	/**
	* Sets the alignment of this range relative to the scale it is associated with.
	* @param {MindFusion.Gauges.Alignment} value The alignment of this range relative to the scale it is associated with.
	*/
	setAlignment(value: Alignment): void;
	/**
	* Gets the width of this range at its start.
	* @returns {MindFusion.Gauges.Length} The width of this range at its start.
	*/
	getStartWidth(): Length;
	/**
	* Sets the width of this range at its start.
	* @param {MindFusion.Gauges.Length} value The width of this range at its start.
	*/
	setStartWidth(value: Length): void;
	/**
	* Gets the width of this range at its end.
	* @returns {MindFusion.Gauges.Length} The width of this range at its end.
	*/
	getEndWidth(): Length;
	/**
	* Sets the width of this range at its end.
	* @param {MindFusion.Gauges.Length} value The width of this range at its end.
	*/
	setEndWidth(value: Length): void;
	/**
	* Gets the offset of the range from the position calculated according to its alignment.
	* @returns {MindFusion.Gauges.Length} The offset of the range from the position calculated according to its alignment.
	*/
	getOffset(): Length;
	/**
	* Sets the offset of the range from the position calculated according to its alignment.
	* @param {MindFusion.Gauges.Length} value The offset of the range from the position calculated according to its alignment.
	*/
	setOffset(value: Length): void;
	/**
	* Gets a value indicating whether to draw a stroke in the beginning of this range.
	* @returns {Boolean} True if there should be a stroke in the beginning of this range, otherwise false.
	*/
	getCapStart(): boolean;
	/**
	* Sets a value indicating whether to draw a stroke in the beginning of this range.
	* @param {Boolean} value True if there should be a stroke in the beginning of this range, otherwise false.
	*/
	setCapStart(value: boolean): void;
	/**
	* Gets a value indicating whether to draw a stroke in the end of this range.
	* @returns {Boolean} True if there should be a stroke in the end of this range, otherwise false.
	*/
	getCapEnd(): boolean;
	/**
	* Sets a value indicating whether to draw a stroke in the end of this range.
	* @param {Boolean} value True if there should be a stroke in the end of this range, otherwise false.
	*/
	setCapEnd(value: boolean): void;
	/**
	* Gets a value indicating whether to draw a stroke at the inside of this range.
	* @returns {Boolean} True if there should be a stroke at the inside of this range, otherwise false.
	*/
	getStrokeInside(): boolean;
	/**
	* Sets a value indicating whether to draw a stroke at the inside of this range.
	* @param {Boolean} value True if there should be a stroke at the inside of this range, otherwise false.
	*/
	setStrokeInside(value: boolean): void;
	/**
	* Gets a value indicating whether to draw a stroke at the outside of this range.
	* @returns {Boolean} True if there should be a stroke at the outside of this range, otherwise false.
	*/
	getStrokeOutside(): boolean;
	/**
	* Sets a value indicating whether to draw a stroke at the outside of this range.
	* @param {Boolean} value True if there should be a stroke at the outside of this range, otherwise false.
	*/
	setStrokeOutside(value: boolean): void;
	/**
	* Gets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.
	* @returns {Boolean} True if the range is autosized, otherwise false.
	* @remarks If this property is set to true the values of startWidth and endWidth properties are ignored.
	*/
	getAutoSize(): boolean;
	/**
	* Sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.
	* @param {Boolean} value True if the range is autosized, otherwise false.
	* @remarks If this property is set to true the values of startWidth and endWidth properties are ignored.
	*/
	setAutoSize(value: boolean): void;
}
/**
* pecifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size.
*/
interface Length
{
	/**
	* Creates an instance of Length class.
	* @param {Number} value A number specifying the initial length value.
	* @param {MindFusion.Gauges.LengthType} [type] A member of the LengthType enumeration specifying the length type.
	*/
	new (value: number, type?: LengthType): Length;
	/**
	* Calculates the absolute length corresponding to the specified argument, relative to the the specified area.
	*/
	getAbsoluteLength(space: number);
	/**
	* Gets the value representing this length.
	* @returns {Number} The value representing this length.
	*/
	getValue(): number;
	/**
	* Sets the value representing this length.
	* @param {Number} value The value representing this length.
	*/
	setValue(value: number): void;
	/**
	* Gets the type of this length.
	* @returns {MindFusion.Gauges.LengthType} The type of this length.
	*/
	getType(): LengthType;
	/**
	* Sets the type of this length.
	* @param {MindFusion.Gauges.LengthType} value The type of this length.
	*/
	setType(value: LengthType): void;
}
/**
* Represents an interval with associated custom values for fill and stroke.
*/
interface CustomInterval
{
	/**
	* Creates an instance of CustomInterval class.
	*/
	new (): CustomInterval;
	/**
	* Checks whether the specified value falls within this interval.
	*/
	contains(value: number): boolean;
	/**
	* Gets the start of this custom interval.
	* @returns {Number} The start of this custom interval.
	*/
	getMinValue(): number;
	/**
	* Sets the start of this custom interval.
	* @param {Number} value The start of this custom interval.
	*/
	setMinValue(value: number): void;
	/**
	* Gets the end of this custom interval.
	* @returns {Number} The end of this custom interval.
	*/
	getMaxValue(): number;
	/**
	* Sets the end of this custom interval.
	* @param {Number} value The end of this custom interval.
	*/
	setMaxValue(value: number): void;
	/**
	* Gets the brush to apply as a background of the elements within the custom interval.
	* @returns {Object} The brush to apply as a background of the elements within the custom interval.
	*/
	getFill(): Object;
	/**
	* Sets the brush to apply as a background of the elements within the custom interval.
	* @param {Object} value The brush to apply as a background of the elements within the custom interval.
	*/
	setFill(value: Object): void;
	/**
	* Gets the brush to apply as an outline of the elements within the custom interval.
	* @returns {Object} The brush to apply as an outline of the elements within the custom interval.
	*/
	getStroke(): Object;
	/**
	* Sets the brush to apply as an outline of the elements within the custom interval.
	* @param {Object} value The brush to apply as an outline of the elements within the custom interval.
	*/
	setStroke(value: Object): void;
	/**
	* Gets the color to apply as a foreground to the elements within this custom interval.
	* @returns {Object} The color to apply as a foreground to the elements within this custom interval.
	*/
	getForeground(): Object;
	/**
	* Sets the color to apply as a foreground to the elements within this custom interval.
	* @param {Object} value The color to apply as a foreground to the elements within this custom interval.
	*/
	setForeground(value: Object): void;
}
/**
* Represents a connected series of geometric segments.
*/
interface PathFigure extends VisualElement
{
	/**
	* Creates an instance of PathFigure class.
	* @param {String} data The path data string.
	*/
	new (data: string): PathFigure;
}
/**
* Represents an intersection of two ellipses.
*/
interface ArcArea extends VisualElement
{
	/**
	* Creates an instance of ArcArea class.
	*/
	new (): ArcArea;
	/**
	* Gets the start angle of the arc.
	* @returns {Number} The start angle of the arc.
	*/
	getStartAngle(): number;
	/**
	* Sets the start angle of the arc.
	* @param {Number} value The start angle of the arc.
	*/
	setStartAngle(value: number): void;
	/**
	* Gets the end angle of the arc.
	* @returns {Number} The end angle of the arc.
	*/
	getEndAngle(): number;
	/**
	* Sets the end angle of the arc.
	* @param {Number} value The end angle of the arc.
	*/
	setEndAngle(value: number): void;
}
/**
* Represents an ellipse visual.
*/
interface Ellipse extends VisualElement
{
	/**
	* Creates an instance of Ellipse class.
	*/
	new (): Ellipse;
}
/**
* Represents a rounded rectangle.
*/
interface RoundRectangle extends VisualElement
{
	/**
	* Creates an instance of RoundRectangle class.
	*/
	new (): RoundRectangle;
	/**
	* Gets the relative roundness of this rectangle's corners.
	* @returns {Number} The relative roundness of this rectangle's corners.
	*/
	getRoundness(): number;
	/**
	* Sets the relative roundness of this rectangle's corners.
	* @param {Number} value The relative roundness of this rectangle's corners.
	*/
	setRoundness(value: number): void;
}
/**
* Describes the thickness on all four sides of a rectangular frame.
*/
interface Thickness
{
	/**
	* Creates an instance of Thickness class.
	* @param {Number} left The width of the left side of the frame.
	* @param {Number} [top] The width of the top side of the frame.
	* @param {Number} [right] The width of the right side of the frame.
	* @param {Number} [bottom] The width of the bottom side of the frame.
	* @param {Boolean} [isRelative] A flag indicating whether the thickness properties are expressed as relative or absolute quantities.
	*/
	new (left: number, top?: number, right?: number, bottom?: number, isRelative?: boolean): Thickness;
	/**
	* Converts the current thickness to absolute value relative to the specified size.
	*/
	toAbsolute(size: Size): Thickness;
	/**
	* Applies the current thickness to the specified rectangle by deflating the rectangle.
	* @param {MindFusion.Drawing.Rect} rect The rectangle to deflate.
	* @returns {MindFusion.Drawing.Rect} The modified rectangle.
	*/
	apply(rect: Rect): Rect;
	/**
	* Gets the width of the left side of the frame.
	* @returns {Number} The width of the left side of the frame.
	*/
	getLeft(): number;
	/**
	* Gets the width of the top side of the frame.
	* @returns {Number} The width of the top side of the frame.
	*/
	getTop(): number;
	/**
	* Gets the width of the right side of the frame.
	* @returns {Number} The width of the right side of the frame.
	*/
	getRight(): number;
	/**
	* Gets the width of the bottom side of the frame.
	* @returns {Number} The width of the bottom side of the frame.
	*/
	getBottom(): number;
}
/**
* Represents a tick mark within a gauge scale.
*/
interface Tick extends VisualElement
{
	/**
	* Creates an instance of Tick class.
	* @param {MindFusion.Gauges.TickSettings} settings The TickSettings object associated with this tick.
	*/
	new (settings: TickSettings): Tick;
	/**
	* Gets the value associated with this tick.
	* @returns {Number} The value associated with this tick.
	*/
	getValue(): number;
	/**
	* Gets the value associated with this tick before it was processed by any value distribution functions.
	* @returns {Number} The value associated with this tick before it was processed by any value distribution functions.
	*/
	getRawValue(): number;
	/**
	* Gets the TickSettings object associated with this tick.
	* @returns {MindFusion.Gauges.TickSettings} The TickSettings object associated with this tick.
	*/
	getSettings(): TickSettings;
}
/**
* Represents a tick label within a gauge scale.
*/
interface TickLabel extends VisualElement
{
	/**
	* Creates an instance of TickLabel class.
	* @param {MindFusion.Gauges.TickSettings} settings The TickSettings object associated with this label.
	*/
	new (settings: TickSettings): TickLabel;
	/**
	* Gets the value associated with this label.
	* @returns {Number} The value associated with this label.
	*/
	getValue(): number;
	/**
	* Gets the value associated with this tick before it was processed by any value distribution functions.
	* @returns {Number} The value associated with this tick before it was processed by any value distribution functions.
	*/
	getRawValue(): number;
	/**
	* Gets the foreground color of this label.
	* @returns {Object} The foreground color of this label.
	*/
	getForeground(): Object;
	/**
	* Gets the TickSettings object associated with this label.
	* @returns {MindFusion.Gauges.TickSettings} The TickSettings object associated with this label.
	*/
	getSettings(): TickSettings;
}
/**
* Indicates the type of the units of a Length object.
*/
interface LengthType
{
	/**
	* Specifies absolute length, expressed in pixels.
	*/
	Absolute;
	/**
	* Specifies relative length, expressed as a percentage of the container's size.
	*/
	Relative;
}
/**
* Specifies the orientation of elements.
*/
interface Orientation
{
	/**
	* The element is oriented horizontally.
	*/
	Horizontal;
	/**
	* The element is oriented vertically.
	*/
	Vertical;
}
/**
* Specifies an action performed with the mouse.
*/
interface MouseAction
{
	/**
	* Indicates the release of a mouse button.
	*/
	Up;
	/**
	* Indicates the press of a mouse button.
	*/
	Down;
	/**
	* Indicates the move of a mouse.
	*/
	Move;
}
/**
* Indicates an alignment of an object relative to the scale. In the descriptions
* below 'outbound' refers to an element's outer outline, 'inbound' refers to an
* element's inner outline and 'center' refers to en element's center, that is,
* the middle of the inbound and outbound.
*/
interface Alignment
{
	/**
	* Specifies that the outbound of an object is aligned with the inbound of the scale.
	*/
	InnerInside;
	/**
	* Specifies that the center of an object is aligned with the inbound of the scale.
	*/
	InnerCenter;
	/**
	* Specifies that the inbound of an object is aligned with the inbound of the scale.
	*/
	InnerOutside;
	/**
	* Specifies that the outbound of an object is aligned with the outbound of the scale.
	*/
	OuterInside;
	/**
	* Specifies that the center of an object is aligned with the outbound of the scale.
	*/
	OuterCenter;
	/**
	* Specifies that the inbound of an object is aligned with the outbound of the scale.
	*/
	OuterOutside;
	/**
	* Specifies that the outbound of an object is aligned with the center of the scale.
	*/
	CenterInside;
	/**
	* Specifies that the center of an object is aligned with the center of the scale.
	*/
	TrueCenter;
	/**
	* Specifies that the inbound of an object is aligned with the center of the scale.
	*/
	CenterOutside;
}
/**
* Indicates the shape of a scale tick.
*/
interface TickShape
{
	/**
	* Specifies an empty shape, that is, the tick is not displayed.
	*/
	None;
	/**
	* Specifies a custom shape.
	*/
	Custom;
	/**
	* Specifies an elliptical shape.
	*/
	Ellipse;
	/**
	* Specifies a rectangular shape.
	*/
	Rectangle;
	/**
	* Specifies a rounded rectangle as a shape.
	*/
	RoundRect;
	/**
	* Specifies a rhombus as a shape.
	*/
	Rhombus;
	/**
	* Specifies a line as a shape.
	*/
	Line;
	/**
	* Specifies a triangular shape.
	*/
	Triangle;
	/**
	* Specifies an arrow shape.
	*/
	Arrow1;
	/**
	* Specifies an arrow shape.
	*/
	Arrow2;
	/**
	* Specifies an arrow shape.
	*/
	Arrow3;
}
/**
* Indicates the rotation of a label within a scale.
*/
interface LabelRotation
{
	/**
	* Specifies no rotation.
	*/
	None;
	/**
	* Specifies that the labels are automatically rotated so that their baseline always points downwards.
	*/
	Auto;
	/**
	* Specifies that the labels are rotated so that their baseline points towards the center of the scale.
	*/
	BaselineToCenter;
	/**
	* Specifies that the labels are rotated so that their baseline points away from the center of the scale.
	*/
	BaselineAwayFromCenter;
	/**
	* Specifies that the labels are aligned sideways to the scale.
	*/
	Sideways;
}
/**
* Specifies that the labels are aligned sideways to the scale.
*/
interface PointerShape
{
	/**
	* Specifies an empty shape, that is, the pointer is not displayed.
	*/
	None;
	/**
	* Specifies a custom shape.
	*/
	Custom;
	/**
	* Specifies a sharp pointer with a circle at its base.
	*/
	Needle;
	/**
	* Specifies a sharp pointer with a circle at its base.
	*/
	Needle2;
	/**
	* Specifies an elliptical shape.
	*/
	Ellipse;
	/**
	* Specifies a rectangular shape.
	*/
	Rectangle;
}
/**
* Specifies the appearance of an oval gauge.
*/
interface OvalGaugeStyle
{
	/**
	* Indicates a regular circular appearance.
	*/
	Circular;
	/**
	* Indicates a quadratic appearance with the scales oriented towards North-East.
	*/
	QuadraticNE;
	/**
	* Indicates a quadratic appearance with the scales oriented towards North-West.
	*/
	QuadraticNW;
	/**
	* Indicates a quadratic appearance with the scales oriented towards South-East.
	*/
	QuadraticSE;
	/**
	* Indicates a quadratic appearance with the scales oriented towards South-West.
	*/
	QuadraticSW;
	/**
	* Indicates a semi-circular appearance with the scales oriented towards North.
	*/
	SemicircleN;
	/**
	* Indicates a semi-circular appearance with the scales oriented towards East.
	*/
	SemicircleE;
	/**
	* Indicates a semi-circular appearance with the scales oriented towards South.
	*/
	SemicircleS;
	/**
	* Indicates a semi-circular appearance with the scales oriented towards West.
	*/
	SemicircleW;
}
/**
* Indicates the type of function that will be used to distribute values along the gauge scale.
*/
interface FunctionType
{
	/**
	* Specifies that the values will be distributed linearly.
	*/
	Linear;
	/**
	* Specifies a logarithmic function with base specified by the LogarithmBase property.
	*/
	Logarithmic;
	/**
	* Specifies a user defined function, which will be supplied by the CustomFunction property.
	*/
	Custom;
}
interface Events 
{
	/**
	*  Raised when the control is loaded.
	*/
	controlLoaded: string;
	prepaint: string;
	/**
	* Raised before the gauge background is painted.
	*/
	prepaintBackground: string
	/**
	* Raised before the gauge foreground is painted.
	*/
	prepaintForeground: string;
	/**
	* Raised before a gauge scale is painted.
	*/
	prepaintScale: string;
	/**
	* Raised before a gauge tick is painted.
	*/
	prepaintTick: string;
	/**
	* Raised before a gauge pointer is painted.
	*/
	prepaintPointer: string;
	paint: string;
	/**
	* Raised when the gauge background is being painted.
	*/
	paintBackground: string;
	/**
	* Raised when the gauge foreground is being painted.
	*/
	paintForeground: string;
	/**
	* Raised when a gauge scale is being painted.
	*/
	paintScale: string;
	/**
	* Raised when a gauge tick is being painted.
	*/
	paintTick: string;
	/**
	* Raised when a gauge pointer is being painted.
	*/
	paintPointer: string;
	/**
	* Raised when the value of a pointer has changed interactively.
	*/
	valueChanging: string;
	/**
	* Raised when the value of a pointer is being changed interactively.
	*/
	valueChanged: string
}
/**
* Provides data for the various custom painting event.
*/
interface PaintEventArgs extends EventArgs
{
	/**
	* Initializes a new instance of the PaintEventArgs class.
	* @param {args} Object An object containing event data.
	*/
	new (args: Object): PaintEventArgs;
	/**
	* Paints the specified visual element to the underlying canvas.
	* @param {VisualElement} element The VisualElement to paint.
	* @param {MindFusion.Drawing.Size} constraint The available size.
	*/
	paintVisualElement(element: VisualElement, constraint: Size): void;
	/**
	* Gets the element being custom drawn.
	* @returns {VisualElement} A VisualElement instance.
	*/
	getElement(): VisualElement;
	/**
	* Sets the element being custom drawn.
	* @param {VisualElement} value A VisualElement instance.
	*/
	setElement(value: VisualElement): void;
	/**
	* Gets the canvas rendering context.
	* @returns {CanvasRenderingContext2D} A rendering context used to draw on the Canvas element.
	*/
	getContext(): CanvasRenderingContext2D;
}
/**
* Provides data for various pre-paint events.
*/
interface PrepaintEventArgs extends PaintEventArgs
{
	/**
	* Initializes a new instance of the PrepaintEventArgs
	* @param {args} Object An object containing event data.
	*/
	new (args: Object): PrepaintEventArgs;
	/**
	* Gets a value indicating whether the default painting of this element should be performed.
	* @returns {Boolean} true if the default painting of this element should be performed; otherwise, false.
	*/
	getCancelDefaultPainting(): boolean;
	/**
	* Sets a value indicating whether the default painting of this element should be performed.
	* @param {Boolean} value true if the default painting of this element should be performed; otherwise, false.
	*/
	setCancelDefaultPainting(value: boolean): void;
}
/**
*  Contains the arguments passed to value changed notification handlers.
*/
interface ValueChangedEventArgs extends EventArgs
{
	/**
	* Initializes a new instance of the ValueChangedEventArgs class.
	* @param {oldValue} Object The previous value of the changed property.
	* @param {newValue} Object The current value of the changed property.
	*/
	new (oldValue: Object, newValue: Object): ValueChangedEventArgs;
	/**
	* Gets the previous value of the changed property.
	* @returns {Object} The previous value of the changed property.
	*/
	getOldValue(): Object;
	/**
	* Gets the new value of the changed property.
	* @returns {Object} The new value of the changed property.
	*/
	getNewValue(): Object;
}
/**
* Contains the arguments passed to value changing notification handlers.
*/
interface ValueChangingEventArgs extends CancelEventArgs
{
	/**
	* Initializes a new instance of the ValueChangingEventArgs class.
	* @param {oldValue} Object The previous value of the changing property.
	* @param {newValue} Object The current value of the changing property.
	*/
	new (oldValue: Object, newValue: Object): ValueChangingEventArgs;
	/**
	* Gets the previous value of the changing property.
	* @returns {Object} The previous value of the changing property.
	*/
	getOldValue(): Object;
	/**
	* Gets the new value of the changing property.
	* @returns {Object} The new value of the changing property.
	*/
	getNewValue(): Object;
}
/**
* Utility methods for the gauge controls.
*/
interface Utils
{
	/**
	* Creates a linear gradient brush with the specified data.
	* @returns {Object} The brush.
	*/
	createLinearGradient(angle: number, params: [any]): Object;
	/**
	* Creates a radial gradient brush with the specified data.
	* @returns {Object} The brush.
	*/
	createRadialGradient(center: Point, radius: number, params: any, center2: Point, radius2: any): Object;
	getBrush(context, brush, bounds, isPen): Object;
}

declare module "MindFusion.Gauges" {
	export = gauge;
}

declare var gauge: {
	LinearGauge: LinearGauge;
	OvalGauge: OvalGauge;
	LinearScale: LinearScale;
	OvalScale: OvalScale;
	VisualElement: VisualElement;
	Pointer: Pointer;
	Range: Range;
	Length: Length;
	LengthType: LengthType;
	Orientation: Orientation;
	MouseAction: MouseAction;
	Alignment: Alignment;
	TickShape: TickShape;
	LabelRotation: LabelRotation;
	PointerShape: PointerShape;
	OvalGaugeStyle: OvalGaugeStyle;
	FunctionType: FunctionType;
	CustomInterval: CustomInterval;
	PathFigure: PathFigure;
	Thickness: Thickness;
	ArcArea: ArcArea;
	Ellipse: Ellipse;
	RoundRectangle: RoundRectangle;
	Tick: Tick;
	TickLabel: TickLabel;
	Events: Events;
	PaintEventArgs: PaintEventArgs;
	PrepaintEventArgs: PrepaintEventArgs;
	ValueChangedEventArgs: ValueChangedEventArgs;
	ValueChangingEventArgs: ValueChangingEventArgs;
	Utils: Utils;
	TickSettings: TickSettings;
}

