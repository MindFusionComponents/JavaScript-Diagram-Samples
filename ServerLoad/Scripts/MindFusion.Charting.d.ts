/**
 * Copyright (c) 2015-2016, MindFusion LLC - Bulgaria.
 *
 * This source code is provided to you as part of the MindFusion software components
 * package you have purchased. You may use the source code to trace and/or fix
 * problems or customize the library as needed for your application. To get permission
 * to use the source code in any other way, please contact us at support@mindfusion.eu.
 */
 
 export declare module MindFusion.Charting.Common {
    class AnimationTimer {
        constructor(callback: any, autoStart?: boolean);
        stop(): void;
        start(): void;
        repeat(): void;
    }
    /**
    * @class Represents a dispatcher for an generic event.
    */
    interface IEventDispatcher<T extends EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener: (handler: (args: T) => void) => void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener: (handler: (args: T) => void) => void;
    }
    /**
    * @class Represents a dispatcher for an event.
    */
    class EventDispatcher<T extends EventArgs> implements IEventDispatcher<EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener(handler: (args: T) => void): void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener(handler: (args: T) => void): void;
        /**
        * Raises this event.
        */
        raiseEvent(args: T): void;
    }
    /**
    * @class Represents a dispatcher for PropertyChanged events.
    */
    class PropertyChangedEventDispatcher extends EventDispatcher<PropertyChangedEventArgs> {
    }
    /**
    * @class Represents a dispatcher for NotifyCollectionChanged events.
    */
    class NotifyCollectionChangedEventDispatcher extends EventDispatcher<NotifyCollectionChangedEventArgs> {
    }
    /**
    * Describes an action that triggered a INotifyCollectionChanged.collectionChanged event.
    * @enum
    * @name NotifyCollectionChangedAction
    * @param [Add] Item was added to the collection.
    * @param [Remove] One or more items were removed from the collection.
    * @param [Reset] he contents of the collection changed dramatically.
    */
    enum NotifyCollectionChangedAction {
        /**
        * Item was added to the collection.
        */
        Add = 0,
        /**
        * One or more items were removed from the collection.
        */
        Remove = 1,
        /**
        * The contents of the collection changed dramatically.
        */
        Reset = 2,
    }
    class ElapsedEventArgs extends EventArgs {
        /** Initializes a new instance of the ElapsedEventArgs class. */
        constructor();
        signalTime: Date;
    }
    /**
    * @class Provides data for PropertyChanged events.
    */
    class PropertyChangedEventArgs extends EventArgs {
        /** Initializes a new instance of the PropertyChangedEventArgs class. */
        constructor(propertyName: string);
        /**
        * Gets the name of the property that changed.
        * @returns {string} The name of the property.
        */
        propertyName: string;
    }
    /**
    * @class Provides data for CollectionChanged events.
    */
    class NotifyCollectionChangedEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the NotifyCollectionChangedEventArgs class.
        * @param {NotifyCollectionChangedAction} action The action that caused the event.
        * @param {Array} [changes] The items affected by the change.
        * @param {Number} [index] The index where the change occurred.
        */
        constructor(action: NotifyCollectionChangedAction, changes?: Array<any>, index?: number);
        /**
        * Gets the action that caused the vent.
        * @returns {NotifyCollectionChangedAction} The action that caused the event.
        */
        action: NotifyCollectionChangedAction;
        /**
        * Gets a list of the items affected by a Remove action.
        * @returns {Array} The list of affected items.
        */
        oldItems: Array<any>;
        /**
        * Gets the list of new items involved in the change.
        * @returns {Array} The list of involed items.
        */
        newItems: Array<any>;
    }
    /**
    * @class Provides data for PropertyValueChanged events.
    */
    class PropertyEventArgs extends EventArgs {
        /**
        * Initlializes a new instance of the PropertyEventArgs class.
        * @param {String} propertyName The name of the property that changed.
        * @param {Object} oldValue The old value of the property.
        * @param {Object} newValue The new value of the property.
        */
        constructor(propertyName: string, oldValue: any, newValue: any);
        /**
        * Gets the name of the property that changed.
        */
        propertyName: string;
        /**
        * Gets the value of the property before the change.
        */
        oldValue: any;
        /**
        * Gets the current value of the property.
        */
        newValue: any;
    }
    /**
    * @class Notifies clients that a property value has changed.
    */
    interface INotifyPropertyChanged {
        /**
        * Occurs when a property value changes.
        */
        propertyChanged: PropertyChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a collection has changed.
    */
    interface INotifyCollectionChanged {
        /**
        * Occurs when a collection changes.
        */
        collectionChanged: NotifyCollectionChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a property has changed.
    */
    interface INotifyPropertyValueChanged {
        /**
        * Occurs when a property changes.
        */
        propertyValueChanged: EventDispatcher<PropertyEventArgs>;
    }
    class Timer {
        constructor(callback: any, interval?: number, autoRepeat?: boolean);
        start(): void;
        stop(): void;
        interval: number;
    }
}
export declare module MindFusion.Charting.Drawing {
    /**
    * @class Represents a brush.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Brush object.
    */
    class Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} color The color of this brush.
         */
        constructor(color: Color | string);
        /**
         * Creates a copy of this brush.
         * @returns {MindFusion.Charting.Drawing.Brush} The copy of this brush.
         */
        clone(): Brush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a Brush from a JSON object or string describing this brush.
         * @returns {Brush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Brush;
        /**
        * Determines whether the specified object is equal to this Brush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this Brush; otherwise, false.
        */
        equals(obj: any): boolean;        /**
         * Gets the color of this brush.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this brush.
         */
        /**
         * Sets the color of this brush.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this brush.
         */
        color: Color;
    }
    /**
    * @class Represents a linear gradient brush.
    * @property {MindFusion.Charting.Drawing.Color} startColor Gets or sets the start color of the gradient.
    * @property {MindFusion.Charting.Drawing.Color} endColor Gets or sets the end color of the gradient.
    * @property {Number} angle Gets or sets angle of gradient rotation.
    */
    class LinearGradientBrush extends Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} startColor The starting color of the gradient.
         * @param {Color | string} endColor The ending color of the gradient.
         * @param {Number} [angle] The angle of the gradient.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds of the gradient.
         */
        constructor(startColor: Color | string, endColor: Color | string, angle?: number, bounds?: Rect);
        /**
         * Creates a copy of this brush.
         * @returns {LinearGradientBrush} The copy of this brush.
         */
        clone(): LinearGradientBrush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         * @param {MindFusion.Drawing.Rect} bounds The bounds of the gradient.
         */
        apply(context: CanvasRenderingContext2D, bounds: Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a LinearGradientBrush from a JSON object or string describing this brush.
         * @returns {LinearGradientBrush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Brush;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;        /**
         * Gets the starting color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The starting color of the gradient.
         */
        /**
         * Sets the starting color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The starting color of the gradient.
         */
        startColor: Color;        /**
         * Gets the ending color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The ending color of the gradient.
         */
        /**
         * Sets the ending color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The ending color of the gradient.
         */
        endColor: Color;
        /**
         * Gets the angle of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The angle of the gradient.
         */
        /**
         * Sets the angle of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The angle of the gradient.
         */
        angle: number;
    }
    /**
    * @class Represents a color.
    */
    class Color {
        /**
         * Initializes a new instance of the Color class.
         * @param {String} value A string representation of the color.
         */
        constructor(value: string);
        /**
         * Creates a Color instance from alpha, red, green and blue values.
         * @param {Number} alpha The alpha value.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(a: number, r: number, g: number, b: number): Color;
        /**
         * Creates a Color instance from red, green and blue values.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(r: number, g: number, b: number): Color; value: string;
        R: number;
        G: number;
        B: number;
        A: number;
        rgbValue: string;
        /**
         * The list of color names as defined by the CSS specification.
         */
        static knownColors: {
            AliceBlue: string;
            AntiqueWhite: string;
            Aqua: string;
            Aquamarine: string;
            Azure: string;
            Beige: string;
            Bisque: string;
            Black: string;
            BlanchedAlmond: string;
            Blue: string;
            BlueViolet: string;
            Brown: string;
            BurlyWood: string;
            CadetBlue: string;
            Chartreuse: string;
            Chocolate: string;
            Coral: string;
            CornflowerBlue: string;
            Cornsilk: string;
            Crimson: string;
            Cyan: string;
            DarkBlue: string;
            DarkCyan: string;
            DarkGoldenRod: string;
            DarkGray: string;
            DarkGrey: string;
            DarkGreen: string;
            DarkKhaki: string;
            DarkMagenta: string;
            DarkOliveGreen: string;
            DarkOrange: string;
            DarkOrchid: string;
            DarkRed: string;
            DarkSalmon: string;
            DarkSeaGreen: string;
            DarkSlateBlue: string;
            DarkSlateGray: string;
            DarkSlateGrey: string;
            DarkTurquoise: string;
            DarkViolet: string;
            DeepPink: string;
            DeepSkyBlue: string;
            DimGray: string;
            DimGrey: string;
            DodgerBlue: string;
            Feldspar: string;
            FireBrick: string;
            FloralWhite: string;
            ForestGreen: string;
            Fuchsia: string;
            Gainsboro: string;
            GhostWhite: string;
            Gold: string;
            GoldenRod: string;
            Gray: string;
            Grey: string;
            Green: string;
            GreenYellow: string;
            HoneyDew: string;
            HotPink: string;
            IndianRed: string;
            Indigo: string;
            Ivory: string;
            Khaki: string;
            Lavender: string;
            LavenderBlush: string;
            LawnGreen: string;
            LemonChiffon: string;
            LightBlue: string;
            LightCoral: string;
            LightCyan: string;
            LightGoldenRodYellow: string;
            LightGray: string;
            LightGrey: string;
            LightGreen: string;
            LightPink: string;
            LightSalmon: string;
            LightSeaGreen: string;
            LightSkyBlue: string;
            LightSlateBlue: string;
            LightSlateGray: string;
            LightSlateGrey: string;
            LightSteelBlue: string;
            lightyellow: string;
            Lime: string;
            LimeGreen: string;
            Linen: string;
            Magenta: string;
            Maroon: string;
            MediumAquaMarine: string;
            MediumBlue: string;
            MediumOrchid: string;
            MediumPurple: string;
            MediumSeaGreen: string;
            MediumSlateBlue: string;
            MediumSpringGreen: string;
            MediumTurquoise: string;
            MediumVioletRed: string;
            MidnightBlue: string;
            MintCream: string;
            MistyRose: string;
            Moccasin: string;
            NavajoWhite: string;
            Navy: string;
            OldLace: string;
            Olive: string;
            OliveDrab: string;
            Orange: string;
            OrangeRed: string;
            Orchid: string;
            PaleGoldenRod: string;
            PaleGreen: string;
            PaleTurquoise: string;
            PaleVioletRed: string;
            PapayaWhip: string;
            PeachPuff: string;
            Peru: string;
            Pink: string;
            Plum: string;
            PowderBlue: string;
            Purple: string;
            Red: string;
            RosyBrown: string;
            RoyalBlue: string;
            SaddleBrown: string;
            Salmon: string;
            SandyBrown: string;
            SeaGreen: string;
            SeaShell: string;
            Sienna: string;
            Silver: string;
            SkyBlue: string;
            SlateBlue: string;
            SlateGray: string;
            SlateGrey: string;
            Snow: string;
            SpringGreen: string;
            SteelBlue: string;
            Tan: string;
            Teal: string;
            Thistle: string;
            Tomato: string;
            Turquoise: string;
            Violet: string;
            VioletRed: string;
            Wheat: string;
            White: string;
            WhiteSmoke: string;
            Yellow: string;
            YellowGreen: string;
        };
    }
    /**
    * Specifies the dash pattern of lines.
    * @enum
    * @name DashStyle
    * @param [Solid] Specifies a solid line.
    * @param [Dash] Specifies a line consisting of dashes.
    * @param [Dot] Specifies a line consisting of dots.
    * @param [DashDot] Specifies a dash-dot pattern.
    * @param [DashDotDot] Specifies a dash-dot-dot pattern.
    */
    enum DashStyle {
        Solid = 0,
        Dash = 1,
        Dot = 2,
        DashDot = 3,
        DashDotDot = 4,
        Custom = 5,
    }
    /**
    * Specifies font style attributes.
    * @enum
    * @name FontStyle
    * @param [Regular] Normal text.
    * @param [Bold] Bold text.
    * @param [Italic] Italic text.
    * @param [Underline] Underlined text.
    */
    enum FontStyle {
        Regular = 0,
        Bold = 1,
        Italic = 2,
        Underline = 4,
        Strikeout = 8,
    }
    /**
    * Specifies the alignment of a text string relative to its layout rectangle.
    * @enum
    * @name StringAlignment
    * @param [Near] The text is drawn in the near corner of the layout rectangle.
    * @param [Center] The text is drawn in the center of the layout rectangle.
    * @param [Far] The text is drawn in the far corner of the layout rectangle.le.
    */
    enum StringAlignment {
        Near = 0,
        Center = 1,
        Far = 2,
    }
    /**
    * Specifies the position and alignment of a picture in a node, or that of the background image.
    * @enum
    * @name ImageAlign
    * @param [Center] The image is centered in the node or diagram.
    * @param [Fit] The image is resized to fit the size of the object or the component's client area.
    * @param [Stretch] The image is stretched to fill the object or the component's client area.
    * @param [Tile] The image is tiled to cover the node or the diagram.
    * @param [TopLeft] The image is aligned to the top left corner of the node or the diagram.
    * @param [BottomLeft] The image is aligned to the bottom left corner of the node or the diagram.
    * @param [TopRight] The image is aligned to the top right corner of the node or the diagram.
    * @param [BottomRight] The image is aligned to the bottom right corner of the node or the diagram.
    * @param [TopCenter] The image is centered horizontally and aligned to the top side.
    * @param [BottomCenter] The image is centered horizontally and aligned to the bottom side.
    * @param [MiddleLeft] The image is centered vertically and aligned to the left-hand side.
    * @param [MiddleRight] The image is centered vertically and aligned to the right-hand side.
    */
    enum ImageAlign {
        Center = 0,
        Fit = 1,
        Stretch = 2,
        Tile = 3,
        TopLeft = 4,
        BottomLeft = 5,
        TopRight = 6,
        BottomRight = 7,
        TopCenter = 8,
        BottomCenter = 9,
        MiddleLeft = 10,
        MiddleRight = 11,
    }
    /**
    * Specifies how to join consecutive line or curve segments in a figure.
    * @enum
    * @name LineJoin
    * @param [Miter] Produces a sharp corner or a clipped corner, depending on whether the length of the miter exceeds the miter limit.
    * @param [Bevel] Produces a diagonal corner.
    * @param [Round] Produces a smooth, circular arc between the lines.
    */
    enum LineJoin {
        Miter = 0,
        Bevel = 1,
        Round = 2,
    }
    /**
    * @class Encapsulates text layout information.
    * @property {MindFusion.Charting.Drawing.StringAlignment} alignment Gets or sets the horizontal alignment of the text.
    * @property {MindFusion.Charting.Drawing.StringAlignment} lineAlignment Gets or sets the vertical alignment of the text.
    */
    class StringFormat {
        /**
        * Initializes a new instance of the StringFormat class.
        */
        constructor();
        alignment: StringAlignment;
        lineAlignment: StringAlignment;
    }
    /**
    * @class Represents a font.
    * @property {String} name Gets or sets the name of this Font.
    * @property {Number} size Gets or sets the size of this Font.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of this Font.
    */
    class Font {
        /**
        * Initializes a new instance of the Font class with the specified attributes.
        * @param {String} name The font name.
        * @param {Number} size The font size.
        * @param {MindFusion.Charting.Drawing.FontStyle} [fontStyle] The FontStyle
        */
        constructor(name: string, size: number, fontStyle?: FontStyle);
        /**
         * Applies the font properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: Rect): void;
        /**
         * Returns a string representation of this font.
         * @returns {String} The string representation of this font.
         */
        toString(): string;        /**
         * Gets the name of this font.
         * @returns {String} The name of this font.
         */
        /**
         * Sets the name of this font.
         * @param {String} value The name of this font.
         */
        name: string;
        /**
         * Gets the size of this font.
         * @returns {Number} The size of this font.
         */
        /**
         * Sets the size of this font.
         * @param {Number} value The size of this font.
         */
        size: number;
        /**
         * Gets the style of this font.
         * @returns {MindFusion.Charting.Drawing.FontStyle} The style of this font.
         */
        /**
         * Sets the style of this font.
         * @param {MindFusion.Charting.Drawing.FontStyle} value The style of this font.
         */
        fontStyle: FontStyle;
        static defaultFont: Font;
    }
    /**
    * @class Contains helper functions for drawing on a Canvas element.
    * @property {CanvasRenderingContext2D} context Gets or sets the underlying CanvasRenderingContext2D drawing object.
    */
    class Graphics {
        /**
         * Initializes a new instance of the Graphics class.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        constructor(context: CanvasRenderingContext2D);
        /**
         * Clears the canvas.
         */
        clear(): void;
        /**
         * Starts a new figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        beginFigure(pen?: Pen, brush?: Brush, bounds?: Rect): void;
        /**
         * Closes the current figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        closeFigure(pen?: Pen, brush?: Brush, bounds?: Rect): void;
        /**
         * Draws a straight line.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
         * @param {MindFusion.Drawing.Point} point1 The starting point of the line.
         * @param {MindFusion.Drawing.Point} point2 The ending point of the line.
         */
        drawLine(pen: Pen, point1: Point, point2: Point): any;
        /**
        * Draws a straight line.
        * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
        * @param {Number} x1 The X coordinate of the starting point of the line.
        * @param {Number} y1 The Y coordinate of the starting point of the line.
        * @param {Number} x2 The X coordinate of the ending point of the line.
        * @param {Number} y2 The Y coordinate of the ending point of the line.
        */
        drawLine(pen: Pen, x1: number, y1: number, x2: number, y2: number): any;
        /**
         * Draws a series of straight lines.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the lines with.
         * @param {MindFusion.Drawing.Point[]} points The points of the lines to draw.
         */
        drawLines(pen: Pen, points: Point[]): void;
        /**
         * Draws a polygon.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        drawPolygon(pen: Pen, points: Point[]): void;
        /**
         * Fills a polygon.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        fillPolygon(brush: Brush, points: Point[]): void;
        /**
         * Draws a string.
         * @param {String} text The string to draw.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to use.
         * @param {Point|Rect} location The position at which to draw.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] The format to use.
         */
        drawString(text: string, font: Font, brush: Brush, location: Point | Rect, format?: StringFormat): void;
        /**
        * Draws a spline curve.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the curve with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the curve.
        */
        drawCurve(pen: Pen, points: Point[]): void;
        /**
         * Draws a rectangle.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to draw.
         */
        drawRectangle(pen: Pen, rect: Rect): void;
        /**
         * Fills a rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} brush The pen to fill the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to fill.
         */
        fillRectangle(brush: Brush, rect: Rect): void;
        /**
         * Draws an ellipse.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        drawEllipse(pen: Pen, rect: Rect): void;
        /**
         * Fills an ellipse.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        fillEllipse(brush: Brush, rect: Rect): void;
        /**
         * Draws a pie.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        drawPie(pen: Pen, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Fills a pie.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        fillPie(brush: Brush, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Draws an image.
         * @param {HTMLImageElement} image The image to draw.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the image.
         * @param {MindFusion.Charting.Drawing.ImageAlign} align The align to use.
         */
        drawImage(image: HTMLImageElement, rect: Rect, align: ImageAlign): void;
        /**
         * Checks if the given point is within the bounds of the given polygon.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Point[]} poly The points describing the polygon.
         * @returns {boolean] True if the point lies within polygon bounds, otherwise false.
         */
        pointInPoly(point: Point, poly: Point[]): boolean;
        /**
         * Checks if the given point is within the bounds of the given pie.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie is a doughnut, otherwise false.
         * @returns {Boolean} True if the point lies within pie bounds, otherwise false.
         */
        pointInPie(point: Point, rect: Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): boolean;
        /**
         * Saves the current graphics state.
         */
        save(): void;
        /**
         * Restores to a previously saved graphics state.
         */
        restore(): void;
        /**
         * Sets the clip rectangle.
         * @param {MindFusion.Drawing.Rect} rect The clip rectangle
         */
        clip(rect: Rect): void;
        /**
         * Sets a translate transform.
         * @param {Number} x The distance to translate along the x-axis.
         * @param {Number} y The distance to translate along the y-axis.
         */
        translate(x: number, y: number): void;
        /**
         * Sets a transform.
         * @param {MindFusion.Drawing.Matrix} transform The transform matrix.
         */
        setTransform(transform: Matrix): void;
        /**
         * Gets the size of the specified string.
         * @param {String} text The string to measure.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {Number} [width] The maximum width.
         * @returns {MindFusion.Drawing.Size} The size of the given string when drawn with the given font.
         */
        measureString(text: string, font: Font, width?: number): Size;        /**
         * Gets the underlying CanvasRenderingContext2D object.
         * @returns {CanvasRenderingContext2D} The underlying CanvasRenderingContext2D object.
         */
        /**
         * Sets the underlying CanvasRenderingContext2D object.
         * @param {CanvasRenderingContext2D} value The underlying CanvasRenderingContext2D object.
         */
        context: CanvasRenderingContext2D;
    }
    /**
    * @class Represents a pen.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Pen.
    * @property {Number} width Gets or sets the width of this Pen.
    * @property {MindFusion.Charting.Drawing.DashStyle} dashStyle Gets or sets the dash style of this Pen.
    */
    class Pen {
        /**
         * Initializes a new instance of the Pen class.
         * @param {Brush | Color | string} brush The color of this pen.
         * @param {Number} [width] The width of this pen.
         */
        constructor(brush: Brush | Color | string, width?: number);
        /**
         * Applies the pen properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D): void;
        /**
         * Returns a string representation of this pen.
         * @returns {String} The string representation of this pen.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toString(): string;
        /**
         * Returns a Pen from a string describing this pen.
         * @returns {Pen} The pen object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): Pen;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;        /**
         * Gets the color of this pen.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this pen.
         */
        /**
         * Sets the color of this pen.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this pen.
         */
        color: Color;        /**
         * Gets the width of this pen.
         * @returns {Number} The width of this pen.
         */
        /**
         * Sets the width of this pen.
         * @param {Number} value The width of this pen.
         */
        width: number;        /**
         * Gets the dash style of this pen.
         * @returns {MindFusion.Charting.Drawing.DashStyle} The dash style of this pen.
         */
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.DashStyle} value The line join of this pen.
         */
        dashStyle: DashStyle;        /**
         * Gets the line join of this pen.
         * @returns {MindFusion.Charting.Drawing.LineJoin} The line join of this pen.
         */
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.LineJoin} value The line join of this pen.
         */
        lineJoin: LineJoin;
    }
    class Utils {
        static getCursorPos(e: any, element: HTMLElement): Point;
        static getBounds(element: HTMLElement): Rect;
        static getPageScroll(): {
            scrollLeft: number;
            scrollTop: number;
        };
        static cartesianToPolar(coordCenter: Point, point: Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: Point, a: number, r: number): Point;
        static rad(degree: any): number;
        static getBoundingBox(points: Point[]): any;
        static formatString(value: string, params: string[]): string;
    }
}
export declare module MindFusion.Charting.Collections {
    import NotifyCollectionChangedEventArgs = MindFusion.Charting.Common.NotifyCollectionChangedEventArgs;
    import PropertyChangedEventArgs = MindFusion.Charting.Common.PropertyChangedEventArgs;
    import NotifyCollectionChangedEventDispatcher = MindFusion.Charting.Common.NotifyCollectionChangedEventDispatcher;
    import PropertyChangedEventDispatcher = MindFusion.Charting.Common.PropertyChangedEventDispatcher;
    import INotifyCollectionChanged = MindFusion.Charting.Common.INotifyCollectionChanged;
    import INotifyPropertyChanged = MindFusion.Charting.Common.INotifyPropertyChanged;
    /**
     * @class Represents an array of arbitrary objects.
     */
    class IEnumerable<T> {
        /**
         * Initializes a new instance of the IEnumerable class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);        /**
         * Gets the collection as an array.
        * @returns {Array<T>} The underlying array data structure of the collection.
        */
        items(): T[];
        /**
        * Gets the collection as an array in reverse order.
        * @returns {Array<T>} The underlying array data structure of the collection in reverse order.
        */
        reverse(): T[];
        /**
        * Gets the element at the given index.
        * @param {Number} index The index.
        * @returns {T} The element at the given index.
        */
        item(index: number): T;
        /**
        * Gets the number of elements.
        * @returns {Number} The number of elements.
        */
        count(): number;
        /**
        * Checks if the given element is present in the collection.
        * @param {T} item The object to check for.
        * @returns {Boolean} True if the element is found, otherwise false.
        */
        contains(item: T): boolean;
        /**
        * Adds an object to the end of the collection.
        * @param {T} item The object to add.
        */
        add(item: T): void;
        /**
        * Removes an element from the collection.
        * @param {T} item The object to remove.
        */
        remove(item: any): void;
        /**
        * Removes a range of elements starting from the given index.
        * @param {Number} index The starting index of the range.
        * @param {Number} count The length of the range.
        */
        removeRange(index: number, count: number): Array<T>;
        /**
        * Removes the element at the given index.
        * @param {Number} index The index.
        */
        removeAt(itemIndex: number): void;
        /**
        * Clears the collection.
        */
        clear(): void;
        /**
        * Creates a copy of the collection.
        * @returns {IEnumerable<T>} A copy of this collection.
        */
        clone(): IEnumerable<T>;
        /**
        * Copies a range of elements from this collection to a destination collection.
        * @param {IEnumerable<T>} destination The destination collection.
        * @param {Number} length The length of the range to copy.
        * @param {Number} [sourceIndex] The starting index of the range to copy.
        * @param {Number} [destinationIndex] The index at which the range should be copied.
        */
        copyTo(destination: IEnumerable<T>, length: number, sourceIndex?: number, destinationIndex?: number): void;
        /**
        * Sorts the underlying array.
        * @param {Function} [compareFn] The comparing function.
        */
        sort(compareFn?: (a: T, b: T) => number): void;
        /**
        * Gets the index of a given object in a collection.
        * @param {T} obj The object to look for.
        * @param {Number} [fromIndex] The starting index to search from.
        * @returns {Number} The index of the object, or -1 if the object is not present in the collection.
        */
        indexOfItem(obj: T, fromIndex?: number): number;
        /**
        * Adds an element to the collection at the specified index.
        * @param {Number} index The index.
        * @param {T} item The object to add.
        */
        insert(index: number, item: T): void;
        /**
        * Returns a new Object array, containing the contents of the collection.
        * @returns {Array<T>} The array.
        */
        toArray(): Array<T>;
        /**
        * Invokes a transform function on each item and returns the
     * maximum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The maximum number in the sequence.
        */
        max(selector: (item: T) => number): number;
        /**
        * Invokes a transform function on each item and returns the
     * minimum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The minimum number in the sequence.
        */
        min(selector: (item: T) => number): number;
        /**
        * Computes the sum of the sequence of number values that are
     * obtained by invoking a transform function on each element.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The sum of the number values in the sequence.
        */
        sum(selector: (item: T) => number): number;
        /**
        * Projects each element of a sequence into a new form.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {IEnumerable<T>} An collection whose elements are the result
     * of invoking the transform function on each element.
        */
        select(selector: (item: T) => any): IEnumerable<T>;
    }
    /**
     * @class Represents an array of arbitrary objects.
     */
    class List<T> extends IEnumerable<T> {
        /**
         * Initializes a new instance of the List class.
         * @param {Array<T>} [items] The underlying array data structure of the list.
         */
        constructor(items?: Array<T>);
    }
    /**
     * @class Represents a collection of keys and values.
     */
    class Dictionary<TKey, TValue> {
        /**
         * Initializes a new instance of the Dictionary class.
         */
        constructor();
        /**
           * Associates the specified value with the specified key within the dictionary.
        * @param {TKey} key The key to associate the value with.
        * @param {TValue} value The value to associate.
        */
        set(key: TKey, value: TValue): void;
        /**
           * Gets the value associated with the specified key within the dictionary.
        * @param {TKey} key The key whose value to get.
        */
        get(key: TKey): TValue;
        /**
           * Determines whether the dictionary contains a specific key.
        * @param {TKey} key The key to locate in the dictionary.
           * @returns {Boolean} true if the element exists in the collection, otherwise false.
        */
        contains(key: any): boolean;
        /**
           * Removes the element with the specified key from the dictionary.
        * @param {TKey} key The key of the element to remove.
        */
        remove(key: any): void;
        keys: List<TKey>;
        values: List<TValue>;
        /** Gets an array with all keys in the dictionary. */        /** Gets an array with all values in the dictionary. */
    }
    /**
     * @class Represents a collection of arbitrary objects.
     * @property {NotifyCollectionChangedEventDispatcher} collectionChanged Occurs when an item is added, removed, changed, moved, or the entire list is refreshed.
     * @property {PropertyChangedEventDispatcher} propertyChanged Occurs when a property value changes.
     */
    class ObservableCollection<T> extends List<T> implements INotifyPropertyChanged, INotifyCollectionChanged {
        /**
         * Initializes a new instance of the ObservableCollection class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);
        /**
        * Raises the collectionChanged event.
        * @param {NotifyCollectionChangedEventArgs} args An instance of the NotifyCollectionChangedEventArgs class.
        */
        protected onCollectionChanged(args: NotifyCollectionChangedEventArgs): void;
        /**
         * Occurs when an item is added, removed, changed, moved, or the entire list is refreshed.
         */
        collectionChanged: NotifyCollectionChangedEventDispatcher;        /**
        * Raises the propertyChanged event.
        * @param {PropertyChangedEventArgs} args An instance of the PropertyChangedEventArgs class.
        */
        protected onPropertyChanged(args: PropertyChangedEventArgs): void;
        /**
         * Occurs when a property value changes.
         */
        propertyChanged: PropertyChangedEventDispatcher;        /**
         * Adds an object to the collection.
         * @param {T} item The item to add.
         */
        add(item: T): void;
        /**
         * Deletes an object from the collection
         * @param {T} item The item to remove.
         */
        remove(item: T): void;
        /**
         * Deletes a range of elements from the collection
         * @param {Number} index The starting index of the range to remove.
         * @param {Number} count The length of the range to remove.
         */
        removeRange(index: number, count: number): Array<T>;
        /**
         * Delete the element at the specified index.
         * @param {Number} itemIndex The index to remove at.
         */
        removeAt(itemIndex: number): void;
        /**
         * Clears the collection
         */
        clear(): void;
    }
}
export declare module MindFusion.Charting.Commands {
    import EventDispatcher = MindFusion.Charting.Common.EventDispatcher;
    import INotifyPropertyValueChanged = MindFusion.Charting.Common.INotifyPropertyValueChanged;
    import List = MindFusion.Charting.Collections.List;
    /**
     * @class Represents an action that modifies an object and whose effects can be undone.
     */
    abstract class Command {
        /**
         * Initializes a new instance of the Command class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * A shortcut method for executing the command through the undo engine.
         */
        commit(): void;
        /**
         * Carries out an action that changes the workbook in some way.
         */
        abstract execute(): boolean;
        /**
         * Undoes an action, restoring the workbook to the state it was in
         * before carrying out the action.
         */
        abstract undo(): void;
        /**
         * Repeats an action that has been undone.
         */
        abstract redo(): void;
        /**
         * Gets the UndoManager that contains this command.
         */
        /**
         * Sets the UndoManager that contains this command.
         */
        manager: UndoManager;        /**
         * Gets a value indicating whether the command does anything.
         */
        hasEffect: boolean;
    }
    /**
     * @class Represents a command that implements the IDisposable interface.
     */
    abstract class DisposableCommand extends Command {
        /**
         * Initializes a new instance of the DisposableCommand class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * IDisposable.Dispose implementation.
         */
        dispose(): void;
        /**
         * Disposes of this command.
         */
        clean(): void;
        /**
         * Command.Execute override.
         */
        execute(): boolean;
        /**
         * Cancels the command.
         */
        cancel(): void;
        /**
         * Command.Undo override.
         */
        undo(): void;
        /**
         * Command.Redo override.
         */
        redo(): void;
        executed: boolean;
    }
    abstract class ObjectChange {
        abstract apply(): void;
        abstract revert(): void;
    }
    class PropertyChange extends ObjectChange {
        constructor(target: Object, propertyName: string, oldValue: Object, newValue: Object);
        apply(): void;
        revert(): void;
    }
    /**
     * @class Represents a command that can track and undo changes of
     * INotifyPropertyValueChanged objects.
     */
    class TrackChangesCommand extends DisposableCommand {
        constructor(manager: UndoManager, target: INotifyPropertyValueChanged);
        clean(): void; registerChange(change: ObjectChange): void;
        /**
         * DisposableCommand.Undo override.
         */
        undo(): void;
        /**
         * DisposableCommand.Redo override.
         */
        redo(): void;
        /**
         * Called before undoing or redoing the command.
         */
        beginChange(): void;
        /**
         * Called after undoing or redoing the command.
         */
        endChange(): void;
        /**
         * Command.HasEffect override.
         */
        hasEffect: boolean;
    }
    interface ISupportInitialize {
        beginInit(): void;
        endInit(): void;
    }
    /**
     * @class Contains the arguments passed to the ActionUndone and ActionRedone event handlers.
     */
    class UndoEventArgs extends EventArgs {
        /**
         * Initializes a new instance of the UndoEventArgs class.
         * @param {Command} command The Command related to the event.
         */
        constructor(command: Command);
        /**
         * Gets a reference to the Command instance related to the event being handled.
         */
        /**
         * Gets a reference to the Command instance related to the event being handled.
         */
        command: Command;
    }
    class UndoManager {
        constructor();
        executeCommand(command: Command): void; startComposite(): CompositeCommand;
        endComposite(addToHistory?: boolean): void;
        /**
         * Creates a Command object to track subsequent changes on the specified target.
         * @param {INotifyPropertyValueChanged} target The object to track.
         * @returns {TrackChangesCommand} A TrackChangesCommand that is used to track the changes, or null, if undo is disabled.
         *
         */
        startChangeOperation(target: any): TrackChangesCommand;
        /**
         * Stops tracking changes by the specified command and reverts all changes done so far.
         */
        cancelChangeOperation(command: TrackChangesCommand): void;
        /**
         * Stops tracking changes by the specified command and saves the command in the history queue.
         */
        commitChangeOperation(command: TrackChangesCommand): void;
        undo(): void;
        redo(): void;
        raiseActionUndone(c: Command): void;
        raiseActionRedone(c: Command): void;
        onActionUndone(e: UndoEventArgs): void;
        onActionRedone(e: UndoEventArgs): void;
        canUndo: boolean;
        canRedo: boolean;
        actionRedone: EventDispatcher<UndoEventArgs>;
        actionUndone: EventDispatcher<UndoEventArgs>;
    }
    /**
     * @class Represents a set of Command instances as a single operation.
     * Undoing or redoing the composite action, respectively undoes or
     * redoes all its constituent subactions at the same time.
     */
    class CompositeCommand extends DisposableCommand {
        /**
         * Initializes a new instance of the CompositeCommand class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * DisposableCommand.Execute override.
         */
        execute(): boolean;
        /**
         * Command.Undo override.
         */
        undo(): void;
        /**
         * Command.Redo override.
         */
        redo(): void;
        /**
         * Gets a list containing the child Command objects.
         */
        commands: List<Command>;
    }
}
export declare module MindFusion.Charting.Components {
    import FontStyle = MindFusion.Charting.Drawing.FontStyle;
    import ObservableCollection = MindFusion.Charting.Collections.ObservableCollection;
    import List = MindFusion.Charting.Collections.List;
    import ImageAlign = MindFusion.Charting.Drawing.ImageAlign;
    import Brush = MindFusion.Charting.Drawing.Brush;
    import EventDispatcher = MindFusion.Charting.Common.EventDispatcher;
    import Graphics = MindFusion.Charting.Drawing.Graphics;
    interface AutoSize {
        measuredSize(): number;
        relativeSize(): boolean;
        setPos(value: number): void;
    }
    /**
     * @class Contains arguments passed to the CustomDraw event of buttons.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets the Graphics surface where the event handler should draw.
    * @property {MindFusion.Drawing.Rect} clipBounds Gets the current clip rectangle.
     */
    class ButtonDrawEventArgs extends EventArgs {
        constructor(graphics: Graphics, clipBounds: Rect);
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        graphics: Graphics;        /**
         * Gets the current clip rectangle.
         */
        /**
         * Gets the current clip rectangle.
         */
        clipBounds: Rect;
    }
    /**
    * @class Represents a dispatcher for ButtonDraw events.
    */
    class ButtonDrawEventDispatcher extends EventDispatcher<ButtonDrawEventArgs> {
    }
    /**
    * @class Represents a user interface component.
    * @property {Number} desiredWidth Gets a nullable number value specifying the component's desired width. Valid only after calling measure.
    * @property {Number} desiredHeight Gets a nullable number value specifying the component's desired height. Valid only after calling measure.
    * @property {Number} actualWidth Gets a number value specifying the component's assigned width. Valid only after calling arrange.
    * @property {Number} actualHeight Gets a number value specifying the component's assigned height. Valid only after calling arrange.
    * @property {Number} xInParent Gets a number value specifying the component's horizontal position relative to its parent.
    * @property {Number} yInParent Gets a number value specifying the component's vertical position relative to its parent.
    * @property {Number} rectInParent Gets the boundaries of this component relative to its parent.
    * @property {Number} gridRow Gets or sets the row index of this component when placed inside a GridPanel.
    * @property {Number} gridColumn Gets or sets the column index of this component when placed inside a GridPanel.
    * @property {LayoutAlignment} horizontalAlignment Gets or sets the horizontal alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {LayoutAlignment} verticalAlignment Gets or sets the vertical alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {Margins} margin Gets the margin space around this component relative to the layout rectangle allocated by its parent panel.
    * @property {Visibility} visibility Gets or sets the visibility of this component.
    * @property {HitTestVisibility} hitTestVisibility Gets or sets the hit-test visibility of this component.
    * @property {String} toolTip Gets or sets the component's tooltip text.
    * @property {Number} width Gets or sets a fixed width for this component.
    * @property {Number} height Gets or sets a fixed height for this component.
    */
    abstract class Component {
        /**
         * Initializes a new instance of the Component class.
         */
        constructor();
        /**
         * Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Arranges a child component in specified layout rectangle.
         * @param {Component} child A Component instance specifying the child to arrange.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Number} x Layout rectangle's horizontal position.
         * @param {Number} y Layout rectangle's vertical position.
         * @param {Number} w Layout rectangle's width.
         * @param {Number} h Layout rectangle's height.
         */
        arrangeInRect(child: Component, context: RenderContext, x: number, y: number, w: number, h: number): void;
        /**
         * Returns a ComponentController used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        /**
         * Sums specified nullable number values.
         * @param {Number} value1 The first term to sum.
         * @param {Number} value2 The second term to sum.
         * @returns {Number} A nullable number value representing the sum.
         */
        add(value1?: number, value2?: number): number;
        /**
         * Returns the larger of specified values.
         * @param {Number} value1 The first value to compare.
         * @param {Number} value2 The second value to compare.
         * @returns {Number} A nullable number value representing the larger value.
         */
        max(value1?: number, value2?: number): number;
        /**
         * Implements the visitor design pattern.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        localToParent(point: Point): Point;
        parentToLocal(point: Point): Point;
        /**
         * Transforms the specified point to the coordinate system of the root panel.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates local to this component.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates relative to the root panel.
         */
        localToRoot(point: Point): Point;
        /**
         * Transforms the specified point to the coordinate system of this component.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates relative to the root panel.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates local to this component.
         */
        rootToLocal(point: Point): Point;
        /**
         * Invalidates the current layout and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void;
        /**
         * Invalidates the appearance of this component and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A RectD instance specifying the invalid rectangle.
         */
        invalidate(rect?: Rect): void;
        /**
         * Gets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        /**
         * Sets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        desiredWidth: number;        /**
         * Gets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        /**
         * Sets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        desiredHeight: number;        /**
         * TGets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        /**
         * Sets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        actualWidth: number;        /**
         * Gets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        /**
         * Sets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        actualHeight: number;        /**
         * Gets a number value specifying the component's horizontal position relative to its parent.
         */
        /**
         * Sets a number value specifying the component's horizontal position relative to its parent.
         */
        xInParent: number;        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        yInParent: number;        /**
         * Gets the boundaries of this component relative to its parent.
         */
        rectInParent: Rect;        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        gridRow: number;        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        gridColumn: number;
        parent: Component;        /**
         * Gets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        horizontalAlignment: LayoutAlignment;
        /**
         * Gets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        verticalAlignment: LayoutAlignment;
        /**
         * Gets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        margin: Margins;
        /**
         * Gets the visibility of this component.
         */
        /**
         * Sets the visibility of this component.
         */
        visibility: Visibility;
        /**
         * Gets the hit-test visibility of this component.
         */
        /**
         * Sets the hit-test visibility of this component.
         */
        hitTestVisibility: HitTestVisibility;
        /**
         * Gets the component's tooltip text.
         */
        /**
         * Sets the component's tooltip text.
         */
        toolTip: string;        /**
         * Gets a fixed width for this component.
         */
        /**
         * Sets a fixed width for this component.
         */
        width: number;
        /**
         * Gets or sets a fixed height for this component.
         */
        /**
         * Gets or sets a fixed height for this component.
         */
        height: number;
        desiredWidthMargins(): number;
        desiredHeightMargins(): number;
        effectiveMeasuredWidth(): number;
        effectiveMeasuredHeight(): number;
    }
    /**
     * @class Represents an animation.
     */
    interface ComponentAnimation {
        /**
         * Stops this animation.
         */
        stop(): void;
    }
    /**
     * @class Defines the interface that controller classes should implement
     * to get user input from the Dashboard control.
     */
    interface ComponentController {
        /**
         * Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
            * Called when the user scrolls with the middle mouse button.
            * @param {Number} x A number value specifying the horizontal position of mouse pointer.
            * @param {Number} y A number value specifying the vertical position of mouse pointer.
        * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
            */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Draws a representation of the current state of user interaction on specified Graphics surface.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets the component modified by this ComponentController.
         */
        component: Component;
    }
    /**
     * @class Defines the base visitor class for hierarchy of Component objects.
     */
    class ComponentVisitor {
        /**
         * Visits a Panel component.
         * @param panel A Panel instance.
         */
        visitPanel(panel: Panel): void;
        /**
         * Visits a Plot component.
         * @param {Plot} plot A Plot instance.
         */
        visitPlot(plot: Plot): void;
    }
    /**
    * Identifies hit-test visibility of a component.
    * @enum
    * @name HitTestVisibility
    * @param [HitTestVisibility] Do not participate in hit-testing.
    * @param [Children] Only hit-test child components.
    * @param [SelfAndChildren] Hit-test this component and its children.
    */
    enum HitTestVisibility {
        /**
         * Do not participate in hit-testing.
         */
        Hidden = 0,
        /**
         * Only hit-test child components.
         */
        Children = 1,
        /**
         * Hit-test this component and its children.
         */
        SelfAndChildren = 2,
    }
    /**
    * Indicates how child components are aligned within the layout rectangle
    * allocated to them by their parent component.
    * @enum
    * @name LayoutAlignment
    * @param [Near] Align the child component to the left or top side.
    * @param [Center] Center the child component.
    * @param [Far] Align the child component to the right or bottom side.
    * @param [Stretch] Stretch the child component.
    */
    enum LayoutAlignment {
        /**
         * Align the child component to the left or top side.
         */
        Near = 0,
        /**
         * Center the child component.
         */
        Center = 1,
        /**
         * Align the child component to the right or bottom side.
         */
        Far = 2,
        /**
         * Stretch the child component.
         */
        Stretch = 3,
    }
    /**
    * Indicates how GridPanel determines dimensions of its rows and columns.
    * @enum
    * @name LengthType
    * @param [Auto] The row or column is auto-sized to fit its child components.
    * @param [Relative] The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements.
    */
    enum LengthType {
        /**
        * The row or column is auto-sized to fit its child components.
        */
        Auto = 0,
        /**
        * The size of relative elements is calculated from available space in the GridPanel
        * proportionally to the number of other relative elements.
        */
        Relative = 1,
    }
    /**
    * Identifies layout orientation.
    * @enum
    * @name Orientation
    * @param [Horizontal] Horizontal orientation.
    * @param [Vertical] Vertical orientation.
    */
    enum Orientation {
        /**
         * Horizontal orientation.
         */
        Horizontal = 0,
        /**
         * Vertical orientation.
         */
        Vertical = 1,
    }
    /**
     * @class Interface used to communicate with host DOM element.
     */
    interface RootControl {
        /**
         * Invalidates the specified region of a component.
         * @param rect The area to invalidate and redraw.
         * @param panel The reference Component.
         */
        invalidate(rect: Rect, panel: Component): void;
        /**
         * Invalidates layout of specified component.
         * @param panel The component to invalidate.
         */
        invalidateLayout(panel: Component): void;
    }
    /**
    * Identifies visibility of components.
    * @enum
    * @name Visibility
    * @param [Hidden] The component is hidden but participates in layout measurements.c
    * @param [Collapsed] The component is hidden and does not participate in layout measurements.
    * @param [Visible] The component is visible.
    */
    enum Visibility {
        /**
        * The component is hidden but participates in layout measurements.
        */
        Hidden = 0,
        /**
        * The component is hidden and does not participate in layout measurements.
        */
        Collapsed = 1,
        /**
        * The component is visible.
        */
        Visible = 2,
    }
    /**
    * @class Represents a border UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    * @property {Number} borderThickness Gets or sets the border thickness.
    * @property {MindFusion.Charting.Drawing.Brush} borderBrush Gets or sets the Brush used to draw the border outlines.
    */
    class BorderComponent extends Component {
        /**
         * Initializes a new instance of the BorderComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this border and its Content.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this border and arranges its Content.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this border in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the Component displayed inside this border.
         */
        /**
         * Gets or sets the Component displayed inside this border.
         */
        content: Component;
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        padding: number;
        /**
         * Gets or sets the border thickness.
         */
        /**
         * Gets or sets the border thickness.
         */
        borderThickness: number;
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        borderBrush: Brush;
    }
    /**
    * @class Represents a button UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    * @property {EventDispatcher<EventArgs>} clicked Raised when the user clicks on this button.
    * @property {ButtonDrawEventDispatcher} customDraw Raised to let you custom-draw button graphics.
    */
    class ButtonComponent extends Component {
        /**
         * Initializes a new instance of the ButtonComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this button.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this button relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this button in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.CreateController override. Returns a controller used to interact with this button.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        raiseClicked(): void;
        /**
         * Raises the Clicked event.
         * @param {EventArgs} e An instance of the EventArgs class.
         */
        onClicked(e: EventArgs): void;
        /**
         * Raises the CustomDraw event.
         * @param {ButtonDrawEventArgs} e An instance of the ButtonDrawEventArgs class.
         */
        onCustomDraw(e: ButtonDrawEventArgs): void;
        /**
        * Raised when the user clicks on this button.
        */
        clicked: EventDispatcher<EventArgs>;        /**
        * Raised to let you custom-draw button graphics.
        */
        customDraw: ButtonDrawEventDispatcher;        /**
         * Gets or sets the content displayed inside this button.
         */
        /**
         * Gets or sets the content displayed inside this button.
         */
        content: Component;
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        padding: number;
        isPressed: boolean;
    }
    /**
    * @class Represents a column in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the column's sizing mode.
    * @property {Number} width Gets or sets fixed width for this column.
    */
    class GridColumn implements AutoSize {
        /**
         * Returns the column's measured width.
         * @returns {Number} A number value representing the column's width.
         */
        measuredSize(): number;
        /**
         * Sets the column's position.
         * @param {Number} value X coordinate of the column.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the column's sizing mode.
         */
        /**
         * Gets or sets the column's sizing mode.
         */
        lengthType: LengthType;        /**
         * Gets whether the column should be sized relatively to other columns in the grid panel.
         * @returns {Boolean} true to apply relative size to this column, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed width for this column.
         */
        /**
         * Gets or sets fixed width for this column.
         */
        width: number; xInParent: number; measuredWidth: number;
    }
    /**
    * @class Represents a row in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the row's sizing mode.
    * @property {Number} height Gets or sets fixed height for this row.
    */
    class GridRow implements AutoSize {
        /**
         * Returns the row's measured height.
         * @return A number value representing the row's height.
         */
        measuredSize(): number;
        /**
         * Sets the row's position.
         * @param value Y coordinate of the row.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the row's sizing mode.
         */
        /**
         * Gets or sets the row's sizing mode.
         */
        lengthType: LengthType;        /**
         * Gets whether the row should be sized relatively to other rows in the grid panel.
         * @return true to apply relative size to this row, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed height for this row.
         */
        /**
         * Gets or sets fixed height for this row.
         */
        height: number; yInParent: number; measuredHeight: number;
    }
    /**
    * @class Represents a component that draws a bitmap image.
    * @property {String} location Gets or sets Image by its file location.
    * @property {Boolean} autoSize Gets or sets a value indicating whether the component should auto-size to match the dimensions of its Image.
    * @property {MindFusion.Charting.Drawing.ImageAlign} imageAlign Gets or sets the image alignment relative to the component.
    */
    class ImageComponent extends Component {
        /**
         * Initializes a new instance of the ImageComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;        /**
         * Component.Draw override. Draws associated Image in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;        /**
         * Gets or sets Image by its file location.
         */
        /**
         * Gets or sets Image by its file location.
         */
        location: string;        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        autoSize: boolean;        /**
         * Gets or sets the image alignment relative to the component.
         */
        /**
         * Gets or sets the image alignment relative to the component.
         */
        imageAlign: ImageAlign;
    }
    /**
    * @class Represents a component that contains multiple child components and manages their layout.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Component>} children Gets the list of child components of this panel.
    * @property {RootControl} parentControl Gets or sets a reference to the control containing this panel.
    */
    class Panel extends Component {
        /**
         * Initializes a new instance of the Panel class.
         */
        constructor();
        /**
         * Component.Draw override. Draws child components in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Visit override. Implements the visitor design pattern.
         * @param visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Component.HitTest override. Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        /**
         * Component.Invalidate override. Invalidates the appearance
         * of this panel and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A Rect instance specifying the invalid rectangle.
         */
        invalidate(rect?: Rect): void;
        /**
         * Component.InvalidateLayout override. Invalidates the current layout
         * and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void; measureChild(child: Component, maxWidth: number, maxHeight: number, context: RenderContext): Size;
        /**
        * Gets the list of child components of this panel.
        */
        children: ObservableCollection<Component>;        /**
         * Gets or sets a reference to the control containing this panel.
         */
        /**
         * Gets or sets a reference to the control containing this panel.
         */
        parentControl: RootControl;
    }
    /**
    * @class Represents a Component that draws text.
    * @property {String} text Gets or sets the text that should be drawn inside this component.
    * @property {String} fontName Gets or sets the name of the font that should be used to draw the component's text.
    * @property {Number} fontSize Gets or sets the size of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the Brush that should be used to draw the component's text.
    * @property {TextStyleHint} styleHint Gets or sets a value indicating which attribute values this component should inherit from current Theme if its local text appearance properties are not set.
    */
    class TextComponent extends Component {
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws associated Text in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        text: string;        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        fontName: string;        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        fontSize: number;        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        fontStyle: FontStyle;        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        textBrush: Brush;        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        styleHint: TextStyleHint;
    }
    /**
    * @class Represents a layout panel that arranges its child components in a grid.
    * @property {MindFusion.Charting.Collections.List<GridRow>} rows Gets or sets a list of GridRow objects specifying row attributes.
    * @property {MindFusion.Charting.Collections.List<GridColumn>} columns Gets or sets a list of GridColumn objects specifying column attributes.
    */
    class GridPanel extends Panel {
        /**
         * Initializes a new instance of the GridPanel class.
         */
        constructor();
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param x A number value specifying horizontal position.
         * @param y A number value specifying vertical position.
         * @param w A number value specifying the component's width.
         * @param h A number value specifying the component's height.
         * @param context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        rows: List<GridRow>;        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        columns: List<GridColumn>;
    }
    /**
     * @class Represents a layout panel that arranges its child components over each other.
     */
    class SimplePanel extends Panel {
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
    }
    /**
    * @class Represents a layout panel that arranges its child components in a stack.
    * @property {Orientation} orientation Gets or sets the stack orientation.
    */
    class StackPanel extends Panel {
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;        /**
         * Gets or sets the stack orientation.
         */
        /**
         * Gets or sets the stack orientation.
         */
        orientation: Orientation;
    }
}
export declare module MindFusion.Charting.ThreeD {
    import Font = MindFusion.Charting.Drawing.Font;
    import List = MindFusion.Charting.Collections.List;
    import Pen = MindFusion.Charting.Drawing.Pen;
    import Brush = MindFusion.Charting.Drawing.Brush;
    /**
    * @class Represents a a mathematical matrix, specialized in 3D transformations.
    */
    class Matrix3D extends Array {
        /**
         * Initializes a new instance of the Matrix3D class.
         * @param {number} width The width of the matrix.
         * @param {number} height The height of the matrix.
         */
        constructor(width: number, height: number);
        /**
        * Fills the matrix with zeros.
        */
        nullify(): void;
        /**
        * Fills the matrix with an array, starting from the top left, filling horisontally.
        * @param {number[]} array The array to be filled in the matrix.
        */
        fill(array: any): void;
        /**
        * @return {Float32Array} An array version of the matrix staring top left, going horisontally.
        */
        getArray(): Float32Array;
        /**
        * Multiplys 2 matrices.
        * @param {Matrix3D} m The left matrix.
        * @param {Matrix3D} n The right matrix.
        * @return {Matrix3D} The two matrices multiplyed.
        */
        static multiply(m: Matrix3D, n: Matrix3D): Matrix3D;
        /**
        * Multiplys the current matrix times a second matrix.
        * @param {Matrix3D} mat The right matrix.
        */
        multiply(mat: Matrix3D): void;        /**
        * A 4x4 Identety Matrix
        * @return {Matrix3D} Identety Matrix:
        */
        static Identety: () => Matrix3D;
        /**
        * A 4x4 matrix, allowing scaling.
        * @param {number} width The amount of scaling on the X axis in percent/100.
        * @param {number} height The amount of scaling on the Y axis in percent/100.
        * @param {number} depth The amount of scaling on the Z axis in percent/100.
        * @return {Matrix3D} Scale Matrix:
        */
        static Scale: (width: number, height: number, depth: number) => Matrix3D;
        /**
        * A 4x4 matrix, allowing translation.
        * @param {number} x The amount of translation on the X axis.
        * @param {number} y The amount of translation on the Y axis.
        * @param {number} z The amount of translation on the Z axis.
        * @return {Matrix3D} Translate Matrix:
        */
        static Translate(x: number, y: number, z: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing rotation around the X axis.
        * @param {number} angle The amount of rotation around the X axis in radians.
        * @return {Matrix3D} RotateX Matrix:
        */
        static RotateX(angle: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing rotation around the Y axis.
        * @param {number} angle The amount of rotation around the Y axis in radians.
        * @return {Matrix3D} RotateY Matrix:
        */
        static RotateY(angle: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing rotation around the Z axis.
        * @param {number} angle The amount of rotation around the Z axis in radians.
        * @return {Matrix3D} RotateZ Matrix:
        */
        static RotateZ(angle: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing perspective and vercitile coordinates.
        * @param {number} filedOfView The angle of the camera.
        * @param {number} aspectRatio The width devided by height of the viewing window.
        * @param {number} near The nearest coordinate, where the object will still be drawn.
        * @param {number} far The furthest coordinate, where the object will still be drawn.
        * @return {Matrix3D} Perspective Matrix:
        */
        static Perspective(fieldOfView: number, aspectRatio: number, near: number, far: number): Matrix3D; width: number;
        height: number;
    }
    /**
     * @class Represents a three-dimensional model.
     */
    class Model3D {
        /**
         * Initializes a new instance of the Model3D class.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The Brush used to fill this model's projection.
         */
        constructor(brush?: Brush);
        brush: Brush;
    }
    /**
     * @class Defines the interface of 3D model projections.
     */
    interface Projection {
        /**
         * Draws the projections in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: RenderContext): void;
        /**
         * A value by which projections are sorted in depth buffer.
         */
        zSort: number;
    }
    /**
    * @class Represents a 3D scene.
    * @property {MindFusion.Charting.Collections.List<Model3D>} models Gets or sets a list of models in this scene.
    * @property {MindFusion.Charting.Collections.List<Projection>} projections Gets or sets a list of projections in this scene.
    * @property {Point3D} cameraPosition Gets or sets the camera position.
    * @property {Point3D} cameraOrientation Gets or sets the camera orientation.
    * @property {Number} focalLength Gets or sets the camera focal length.
    * @property {MindFusion.Drawing.Point} viewportCenter Gets or sets the viewport center.
    */
    class Scene3D {
        /**
         * Initializes a new instance of the Scene3D class.
         */
        constructor();
        /**
         * Adds a cuboid model to the scene.
         * @param {Point3D} p1 A corner point of the cuboid.
         * @param {Point3D} p2 The diametrically opposite corner of specified point.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         */
        addCuboid(p1: Point3D, p2: Point3D, brush: Brush): void;
        /**
         * Adds a cuboid model to the scene.
         * @param {Number} x1 X coordinate of a corner point of the cuboid.
         * @param {Number} y1 Y coordinate of a corner point of the cuboid.
         * @param {Number} z1 Z coordinate of a corner point of the cuboid.
         * @param {Number} x2 X coordinate of diametrically opposite corner.
         * @param {Number} y2 Y coordinate of diametrically opposite corner.
         * @param {Number} z2 Z coordinate of diametrically opposite corner.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         */
        addCuboid(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, brush: Brush): void;
        /**
         * Creates a cuboid model.
         * @param {Number} x1 X coordinate of a corner point of the cuboid.
         * @param {Number} y1 Y coordinate of a corner point of the cuboid.
         * @param {Number} z1 Z coordinate of a corner point of the cuboid.
         * @param {Number} x2 X coordinate of diametrically opposite corner.
         * @param {Number} y2 Y coordinate of diametrically opposite corner.
         * @param {Number} z2 Z coordinate of diametrically opposite corner.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         * @returns {Mesh3D} A Mesh3D containing the cuboid faces.
         */
        buildCuboid(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, brush: Brush): Mesh3D;
        buildCylinder(x: number, z: number, y: number, rad: number, hei: number, res: number, brush: Brush): Mesh3D;
        /**
         * Draws a projection of this scene in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;        /**
         * Projects specified point on projection plane.
         * @param {Point3D} point A Point3D to project.
         * @returns {Point3D} A Point3D containing projection coordinates.
         */
        project(point: Point3D): Point3D;
        /**
         * Projects specified model on projection plane.
         * @param {Model3D} model A Model3D to project.
         * @returns {IEnumerable<Projection>} Enumeration of Projection objects.
         */
        project(model: Model3D): List<Projection>;
        /**
         * Projects specified polygon on projection plane.
         * @param {Polygon3D} polygon A Polygon3D to project.
         * @returns {Polygon3D} A Polygon3D containing projection coordinates.
         */
        project(polygon: Polygon3D): Polygon3D;
        /**
         * Gets or sets a list of models in this scene.
         */
        /**
         * Gets or sets a list of models in this scene.
         */
        models: List<Model3D>;        /**
         * Gets or sets a list of projections in this scene.
         */
        /**
         * Gets or sets a list of projections in this scene.
         */
        projections: List<Projection>;        /**
         * Gets or sets the camera position.
         */
        /**
         * Gets or sets the camera position.
         */
        cameraPosition: Point3D;        /**
         * Gets or sets the camera orientation.
         */
        /**
         * Gets or sets the camera orientation.
         */
        cameraOrientation: Point3D;        /**
         * Gets or sets the camera focal length.
         */
        /**
         * Gets or sets the camera focal length.
         */
        focalLength: number;        /**
         * Gets or sets the viewport center.
         */
        /**
         * Gets or sets the viewport center.
         */
        viewportCenter: Point;
    }
    /**
    * @class Represents a three-dimensional vector.
    * @property {Number} x Gets or sets the X component of this vector.
    * @property {Number} y Gets or sets the Y component of this vector.
    * @property {Number} z Gets or sets the Z component of this vector.
    */
    class Vector3D {
        /**
         * Initializes a new instance of the Vector3D class.
         */
        constructor();
        /**
         * Initializes a new instance of the Vector3D class.
         * @param {Number} x X component of the vector.
         * @param {Number} y Y component of the vector.
         * @param {Number} z Z component of the vector.
         */
        constructor(x: number, y: number, z: number);
        /**
         * Initializes a new instance of the Vector3D class.
         * @param {Point3D} p1 Start point of the vector.
         * @param {Point3D} p2 End point of the vector.
         */
        constructor(p1: Point3D, p2: Point3D);
        /**
         * Calculates the cross-product of two vectors.
         * @param {Vector3D} a A Vector3D instance.
         * @param {Vector3D} b A Vector3D instance.
         * @returns {Vector3D} A Vector3D representing the cross-product of specified vectors.
         */
        static crossProduct(a: Vector3D, b: Vector3D): Vector3D;
        /**
         * Calculates the length of this vector.
         * @returns {Number} A double value representing the vector length.
         */
        length(): number;
        /**
         * Divides the vector by specified measure.
         * @param {Number} s A double value representing the divisor.
         * @returns {Vector3D} A Vector3D representing the result.
         */
        div(s: number): Vector3D;
        /**
         * Gets or sets the X component of this vector.
         */
        /**
         * Gets or sets the X component of this vector.
         */
        x: number;        /**
         * Gets or sets the Y component of this vector.
         */
        /**
         * Gets or sets the Y component of this vector.
         */
        y: number;        /**
         * Gets or sets the Z component of this vector.
         */
        /**
         * Gets or sets the Z component of this vector.
         */
        z: number;
    }
    /**
    * @class Represents a text label in 3D scene.
    * @property {Point3D} topRight Gets or sets the top-right corner of label's layout rectangle.
    * @property {Point3D} bottomLeft Gets or sets the bottom-left corner of label's layout rectangle.
    * @property {String} text Gets or sets the label's text.
    * @property {MindFusion.Drawing.Font} font Gets or sets the label's font.
    * @property {Number} rotationAngle Gets or sets the label's rotation angle.
    */
    class Label3D extends Model3D {
        /**
         * Gets or sets the top-right corner of label's layout rectangle.
         */
        /**
         * Gets or sets the top-right corner of label's layout rectangle.
         */
        topRight: Point3D;        /**
         * Gets or sets the bottom-left corner of label's layout rectangle.
         */
        /**
         * Gets or sets the bottom-left corner of label's layout rectangle.
         */
        bottomLeft: Point3D;        /**
         * Gets or sets the label's text.
         */
        /**
         * Gets or sets the label's text.
         */
        text: string;        /**
         * Gets or sets the label's font.
         */
        /**
         * Gets or sets the label's font.
         */
        font: Font;        /**
         * Gets or sets the label's rotation angle.
         */
        /**
         * Gets or sets the label's rotation angle.
         */
        rotationAngle: number; drawLabel: DrawLabelDelegate;
    }
    /**
    * Gets or sets the signature of callback methods used to render text at projected point.
    */
    interface DrawLabelDelegate {
        (bounds: Rect): void;
    }
    /**
    * @class Represents the projection of a Label3D on the projection plane.
    * @property {Label3D} label Gets ot sets the projected Label3D.
    * @property {Point3D} projectionTopLeft Gets or sets the projection of top-left corner of label's layout rectangle.
    * @property {Point3D} projectionBottomRight Gets or sets the projection of bottom-right corner of label's layout rectangle.
    * @property {Number} zSort Gets or sets a value by which projections are sorted in depth buffer.
    */
    class LabelProjection implements Projection {
        /**
         * Initializes a new instance of the LabelProjection class.
         * @param {Label3D} label The projected Label3D.
         * @param {Point3D} projTL Projection of top-left corner of Label3D's layout rectangle.
         * @param {Point3D} projBR Projection of bottom-right corner of Label3D's layout rectangle.
         */
        constructor(label: Label3D, projTL: Point3D, projBR: Point3D);
        /**
         * Gets ot sets the projected Label3D.
         */
        /**
         * Gets ot sets the projected Label3D.
         */
        label: Label3D;        /**
         * Gets or sets the projection of top-left corner of label's layout rectangle.
         */
        /**
         * Gets or sets the projection of top-left corner of label's layout rectangle.
         */
        projectionTopLeft: Point3D;        /**
         * Gets or sets the projection of bottom-right corner of label's layout rectangle.
         */
        /**
         * Gets or sets the projection of bottom-right corner of label's layout rectangle.
         */
        projectionBottomRight: Point3D;        /**
         * A value by which projections are sorted in depth buffer.
         */
        /**
         * A value by which projections are sorted in depth buffer.
         */
        zSort: number;
        /**
         * Draws this projection in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: RenderContext): void;
    }
    /**
    * @class Represents a 3D mesh.
    * @property {MindFusion.Charting.Collections.List<Polygon3D>} faces Gets or sets the mesh faces.
    */
    class Mesh3D extends Model3D {
        /**
         * Initializes a new instance of the Mesh3D class.
         * @param {MindFusion.Charting.Collections.List<List<Point3D>>} facePoints Lists of points defining mesh faces.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint this mesh.
         * @param {Array<Array<Vector3D>>} [normals] An array with the normal vectors in each vertex.
         */
        constructor(facePoints: List<List<Point3D>>, brush: Brush, normals?: Vector3D[][]);
        pen: Pen;
        /**
         * Gets or sets the mesh faces.
         */
        /**
         * Gets or sets the mesh faces.
         */
        faces: List<Polygon3D>;
    }
    /**
    * @class Represents a polygon in 3D space.
    * @property {MindFusion.Charting.Collections.List<Point3D>} points Gets or sets the polygon's vertices.
    * @property {Number} zSort Gets or sets a value by which projections are sorted in depth buffer.
    */
    class Polygon3D implements Projection {
        /**
         * Initializes a new instance of the Polygon3D class.
         * @param {IEnumerable<Point3D>} [points] A list of 3D points.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] A Brush used to fill the polygon.
         * @param {Array<Vector3D>} [normals] An array with the normal vectors in each vertex.
         */
        constructor(points?: List<Point3D>, brush?: Brush, normals?: Vector3D[]);
        /**
         * Draws this projection in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: RenderContext): void;        /**
         * Gets the polygon's normal vector.
         * @returns {Vector3D} A Vector3D representing the polygon's normal vector.
         */
        normal(): Vector3D;
        /**
         * Gets the distance from specified point to polygon's plane.
         * @param {Point3D} p A Point3D instance.
         * @returns {Number} A number value representing the distance.
         */
        pointToPlaneDist(p: Point3D): number;
        /**
         * Gets the distance from specified point to specified plane.
         * @param {Point3D} p A Point3D instance.
         * @param {Point3D} planePoint A point from the plane.
         * @param {Vector3D} planeNormal The plane's normal vector.
         * @returns {Number} A number value representing the distance.
         */
        static pointToPlaneDist(p: Point3D, planePoint: Point3D, planeNormal: Vector3D): number;
        /**
         * Returns the polygon's middle point.
         * @returns {Point3D} A Point3D instance representing the middle point.
         */
        midPoint(): Point3D;
        calculateIllumination(): void;        /**
         * Gets or sets the polygon's vertices.
         */
        /**
         * Gets or sets the polygon's vertices.
         */
        points: List<Point3D>; normals: Vector3D[];
        owner: Object;        /**
         * A value by which projections are sorted in depth buffer.
         */
        /**
         * A value by which projections are sorted in depth buffer.
         */
        zSort: number; brush: Brush; pen: Pen;
    }
    class Graphics3D {
        constructor(context: WebGLRenderingContext, flength: number, width: number, height: number); loadObject(poly: Polygon3D): {
            buffer: WebGLBuffer;
            numItems: number;
            itemSize: number;
            normal: any;
            color: Brush;
            model: Matrix3D;
        };
        drawObject(obj: any): void;
        getMatrices(): Matrix3D;
        moveCamera(mat: Matrix3D): void;
        reloadScene(): void; projection: Matrix3D; context: WebGLRenderingContext;
    }
}
export declare module MindFusion.Charting {
    import ComponentVisitor = MindFusion.Charting.Components.ComponentVisitor;
    import Dictionary = MindFusion.Charting.Collections.Dictionary;
    import Mesh3D = MindFusion.Charting.ThreeD.Mesh3D;
    import EventDispatcher = MindFusion.Charting.Common.EventDispatcher;
    import Scene3D = MindFusion.Charting.ThreeD.Scene3D;
    import BiaxialChart = MindFusion.Charting.Controls.BiaxialChart;
    import Graphics = MindFusion.Charting.Drawing.Graphics;
    import ComponentAnimation = MindFusion.Charting.Components.ComponentAnimation;
    import ComponentController = MindFusion.Charting.Components.ComponentController;
    import IEnumerable = MindFusion.Charting.Collections.IEnumerable;
    import StringAlignment = MindFusion.Charting.Drawing.StringAlignment;
    import Component = MindFusion.Charting.Components.Component;
    import ObservableCollection = MindFusion.Charting.Collections.ObservableCollection;
    import List = MindFusion.Charting.Collections.List;
    import FontStyle = MindFusion.Charting.Drawing.FontStyle;
    import StringFormat = MindFusion.Charting.Drawing.StringFormat;
    import DashStyle = MindFusion.Charting.Drawing.DashStyle;
    import Font = MindFusion.Charting.Drawing.Font;
    import Color = MindFusion.Charting.Drawing.Color;
    import Brush = MindFusion.Charting.Drawing.Brush;
    import Pen = MindFusion.Charting.Drawing.Pen;
    import INotifyPropertyChanged = MindFusion.Charting.Common.INotifyPropertyChanged;
    import PropertyChangedEventDispatcher = MindFusion.Charting.Common.PropertyChangedEventDispatcher;
    interface ProcessInterval {
        (value: number, index: number): any;
    }
    /**
    * @class Represents an Axis range.
    * @property {String} title Gets or sets the axis title.
    * @property {Number} minValue Gets or sets the smallest value displayed on this axis.
    * @property {Number} maxValue Gets or sets the largest value displayed on this axis.
    * @property {Number} interval Gets or sets the size of axis intervals.
    * @property {String} numberFormat Gets or sets the number format of coordinate labels.
    * @property {PropertyChangedEventDispatcher} propertyChanged Occurs when a property value changes.
    */
    class Axis implements INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Axis class.
         */
        constructor();
        /**
         * Determines whether specified value is within the axis range.
         * @param {Number} value The number to check.
         * @returns {Boolean} true if value is inside the current axis range, or false otherwise.
         */
        inRange(value: number): boolean;
        inExtendedRange(value: number, margin: number): boolean;
        /**
         * Raises the PropertyChanged event.
         * @param {String} propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        propertyChanged: PropertyChangedEventDispatcher;        /**
         * Gets or sets the axis title.
         */
        /**
         * Gets or sets the axis title.
         */
        title: string;
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        minValue: number;
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        maxValue: number;
        /**
         * Gets or sets the size of axis intervals.
         */
        /**
         * Gets or sets the size of axis intervals.
         */
        interval: number;
        /**
         * Gets or sets the number format of coordinate labels.
         */
        /**
         * Gets or sets the number format of coordinate labels.
         */
        numberFormat: string;
        enumerateIntervals(alignToView: boolean, process: ProcessInterval, partial?: boolean): void; numIntervals(): number;
        measuredMinValue: number; measuredMaxValue: number; effectiveMinValue: number;
        effectiveMaxValue: number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} X coordinate of pixel.
         */
        mapValueToPixelX(value: number, viewSize: number): number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} Y coordinate of pixel.
         */
        mapValueToPixelY(value: number, viewSize: number): number;
    }
    /**
    * @class A base class for components that render Axis ranges.
    * @property {MindFusion.Charting.Axis} axis Gets or sets the Axis that will be drawn by this object.
    * @property {Boolean} pinLabels Gets or sets a value indicating whether coordinate labels should be pinned in place or scroll together with the plot when users pan it.
    * @property {SeriesContainer} labelsSource Gets or sets the object whose Series labels should be rendered along this axis.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
    * @property {Boolean} showSeriesLabels Gets or sets a value indicating whether this AxisRenderer should draw data labels.
    * @property {Boolean} showTicks Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw axis labels.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw axis labels.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw axis labels.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw axis labels.
    * @property {Number} labelPadding Gets or sets the padding space between the axis line and coordinate labels.
    * @property {Number} labelRotationAngle Gets or sets the rotation angle of the labels.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the axis Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the axis Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets the Brush that should be used to draw axis lines.
    * @property {Number} axisStrokeThickness Gets or sets the thickness axis lines should be stroked with.
    * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style axis lines should be stroked with.
    */
    abstract class AxisRenderer extends Component {
        /**
         * Initializes a new instance of the AxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);        /**
         * The Axis that will be drawn by this object.
         */
        /**
         * The Axis that will be drawn by this object.
         */
        axis: Axis;        /**
         * Gets the effective Axis in current context, getting one from Plot2D
         * or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        abstract effectiveAxis(context: RenderContext): Axis;        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinLabels: boolean;
        getLabel(index: number, value: number, context: RenderContext): string;
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        labelsSource: SeriesContainer;        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        showCoordinates: boolean;        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        showSeriesLabels: boolean;        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        showTicks: boolean; tickLength: number;
        /**
         * Gets the Font that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveLabelFont(context: RenderContext): Font;
        /**
         * Gets the Brush that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): Brush;
        /**
         * Gets the Font that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): Font;
        /**
         * Gets the Brush that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): Brush;
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        labelBrush: Brush;
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        labelFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        labelFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        labelFontStyle: FontStyle;
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        labelPadding: number;
        /**
         * Gets or sets the rotation angle of the labels.
         */
        /**
         * Gets or sets the rotation angle of the labels.
         */
        labelRotationAngle: number;
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        titleBrush: Brush;
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        titleFontStyle: FontStyle;        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        axisStroke: Brush;        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        axisStrokeThickness: number;        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        axisStrokeDashStyle: DashStyle;        /**
         * Gets the Pen that should be used to draw axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A System.Pen instance.
         */
        effectivePen(context: RenderContext): Pen;
        /**
         * Gets the Brush that should be used to stroke axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveAxisStroke(context: RenderContext): Brush;
        /**
         * Gets the thickness of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveAxisStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveAxisDashStyle(context: RenderContext): DashStyle;
        dataReader: DataReader;
    }
    /**
     * @class Defines properties common to all bar-chart renderers.
     */
    interface BarContainer {
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        barSpacingRatio: number;
    }
    /**
    * Identifies supported bar placements when rendering multiple series.
    * @enum
    * @name BarLayout
    * @param [SideBySide] Render elements at same index from all series as a group of side-by-side bars.
    * @param [Stack] Render elements at same index from all series as stacked bars.
    * @param [Overlay] Render elements at same index from all series as overlaid bars.
    */
    enum BarLayout {
        /**
        * Render elements at same index from all series as a group of side-by-side bars.
        */
        SideBySide = 0,
        /**
        * Render elements at same index from all series as stacked bars.
        */
        Stack = 1,
        /**
        * Render elements at same index from all series as overlaid bars.
        */
        Overlay = 2,
    }
    /**
    * Identifies supported bar shapes when rendering multiple series.
    * @enum
    * @name BarModel3D
    * @param [Bar] Draw bars as rectangular cuboids.
    * @param [Cylinder] Draw bars as cylinders.
    */
    enum BarModel3D {
        Bar = 0,
        Cylinder = 1,
    }
    class BarSpacing {
        constructor(axis: Axis, barsPerGroup: number, groups: number, dataRange: number, lenPixels: number, sameIndexSpacingRatio: number, barSpacingRatio: number);
        barWidth: number;
        padding: number;
        external: number;
        seriesOffset: number;
    }
    interface AxisData {
        (series: Series, dataIndex: number): number;
    }
    class DataReader {
        constructor();
        domainDimension: number; xData(series: Series, dataIndex: number): number;
        yData(series: Series, dataIndex: number): number;
        xSorted(series: Series): boolean;
        ySorted(series: Series): boolean;
        getMinX(series: Series): number;
        getMaxX(series: Series): number;
        getMinY(series: Series): number;
        getMaxY(series: Series): number;
        getFirstInRange(series: Series, x: Axis, xData: AxisData): number;
        getLastInRange(series: Series, x: Axis, xData: AxisData): number;
    }
    /**
    * Specifies formats for DateTime values.
    * @enum
    * @name DateTimeFormat
    * @param [CustomDateTime] Indicates that the number should be formatted as a DateTime value according to a custom set string.
    * @param [FullDateTime] Indicates that the number should be formatted as a DateTime value with a full date pattern.
    * @param [LongDate] Indicates that the number should be formatted as a DateTime value with a long date pattern.
    * @param [LongTime] Indicates that the number should be formatted as a DateTime value with a long time pattern.
    * @param [MonthDateTime] Indicates that the number should be formatted as a DateTime value with a month day pattern.
    * @param [None] The DateTime value is not formatted
    * @param [ShortDate] Indicates that the number should be formatted as a DateTime value with a short date pattern.
    * @param [ShortTime] Indicates that the number should be formatted as a DateTime value with a short time pattern.
    * @param [YearDateTime] Indicates that the number should be formatted as a DateTime value with a year month date pattern.
    */
    enum DateTimeFormat {
        /**
         * Indicates that the number should be formatted as a DateTime value according to a custom set string.
         */
        CustomDateTime = 0,
        /**
         * Indicates that the number should be formatted as a DateTime value with a full date pattern.
         */
        FullDateTime = 1,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long date pattern.
         */
        LongDate = 2,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long time pattern.
         */
        LongTime = 3,
        /**
         * Indicates that the number should be formatted as a DateTime value with a month day pattern.
         */
        MonthDateTime = 4,
        /**
         * The DateTime value is not formatted
         */
        None = 5,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short date pattern.
         */
        ShortDate = 6,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short time pattern.
         */
        ShortTime = 7,
        /**
         * Indicates that the number should be formatted as a DateTime value with a year month date pattern.
         */
        YearDateTime = 8,
    }
    /**
    * Indicates Plot2D grid type.
    * @enum
    * @name GridType
    * @param [None] Do not draw grid.
    * @param [Horizontal] Draw horizontal stripes.
    * @param [Vertical] Draw vertical stripes.
    * @param [Crossed] Draw crossed stripes.
    */
    enum GridType {
        /**
        * Do not draw grid.
        */
        None = 0,
        /**
        * Draw horizontal stripes.
        */
        Horizontal = 1,
        /**
        * Draw vertical stripes.
        */
        Vertical = 2,
        /**
        * Draw crossed stripes.
        */
        Crossed = 3,
    }
    /**
    * @class Represents the result of a hit-test operation.
    * @property {Plot} plot Gets or sets the Plot that has been hit.
    * @property {SeriesRenderer} renderer Gets or sets the SeriesRenderer that has been hit.
    * @property {Number} index Gets or sets the data item index within its Series.
    * @property {Number} value Gets or sets the data item value.
    * @property {Series} series Gets or sets the Series that has been hit.
    */
    class HitResult extends EventArgs {
        /**
         * Initializes a new instance of the HitResult class.
         * @param {SeriesRenderer} renderer A SeriesRenderer whose data item has been hit.
         * @param {Number} index An integer index of the data item.
         * @param {Number} value The item's vaue.
         * @param {Series} series The Series that contains the found item.
         */
        constructor(renderer: SeriesRenderer, index: number, value: number, series: Series);
        /**
         * Gets the Plot that has been hit.
         */
        /**
         * Gets the Plot that has been hit.
         */
        plot: Plot;        /**
         * Gets the SeriesRenderer that has been hit.
         */
        /**
         * Gets the SeriesRenderer that has been hit.
         */
        renderer: SeriesRenderer;        /**
         * Gets the data item index within its Series.
         */
        /**
         * Gets the data item index within its Series.
         */
        index: number;        /**
         * Gets the data item value.
         */
        /**
         * Gets the data item value.
         */
        value: number;        /**
         * Gets the Series that has been hit.
         */
        /**
         * Gets the Series that has been hit.
         */
        series: Series;
    }
    /**
    * Identifies the various kinds of labels that can be drawn for data items.
    * @enum
    * @name LabelKinds
    * @param [None] Do not draw labels.
    * @param [InnerLabel] Draw inner label in graphic representation of data item.
    * @param [OuterLabel] Draw outer label nearby graphic representation of data item.
    * @param [ToolTip] Show label as a tooltip.
    * @param [XAxisLabel] Draw data label at X axis.
    * @param [YAxisLabel] Draw data label at Y axis.
    * @param [ZAxisLabel] Draw data label at Z axis.
    * @param [All] Draw all labels supported by a series.
    */
    enum LabelKinds {
        /**
        * Do not draw labels.
        */
        None = 0,
        /**
        * Draw inner label in graphic representation of data item.
        */
        InnerLabel = 1,
        /**
        * Draw outer label nearby graphic representation of data item.
        */
        OuterLabel = 2,
        /**
        * Show label as a tooltip.
        */
        ToolTip = 4,
        /**
        * Draw data label at X axis.
        */
        XAxisLabel = 8,
        /**
        * Draw data label at Y axis.
        */
        YAxisLabel = 16,
        /**
        * Draw data label at Z axis.
        */
        ZAxisLabel = 32,
        /**
        * Draw all labels supported by a series.
        */
        All = -1,
    }
    /**
    * @class A component that renders chart legend.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} content Gets or sets a list of SeriesRenderer objects whose Series should be displayed in this legend.
    * @property {String} title Gets or sets the legend's title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the legend's Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the legend's Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the legend's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the legend's Title.
    * @property {Boolean} showTitle Gets or sets a value indicating whether to display the legend title.
    * @property {Number} padding Gets or sets the padding space between content and borders of this legend.
    * @property {Number} spacing Gets or sets the distance between adjacent entries in the legend.
    * @property {Boolean} allowMove Gets or sets a value indicating whether users are allowed to move this legend.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this legend.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this legend.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of legend borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of legend borders.
    */
    class LegendRenderer extends Component {
        /**
         * Initializes a new instance of the LegendRenderer class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of the LegendController class.
         */
        createController(context: RenderContext): ComponentController;        /**
         * Component.Draw override. Draws legend elements in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        content: ObservableCollection<SeriesRenderer>;
        /**
         * Gets or sets the legend's title.
         */
        /**
         * Gets or sets the legend's title.
         */
        title: string;
        /**
         * Gets the Font that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): Font;
        /**
         * Gets the Brush that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): Brush;
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        titleBrush: Brush;
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        titleFontStyle: FontStyle;
        /**
         * Gets a value indicating whether to display the legend title.
         */
        /**
         * Sets a value indicating whether to display the legend title.
         */
        showTitle: boolean;
        /**
         * Gets the padding space between content and borders of this legend.
         */
        /**
         * Sets the padding space between content and borders of this legend.
         */
        padding: number;
        /**
         * Gets the distance between adjacent entries in the legend.
         */
        /**
         * Sets the distance between adjacent entries in the legend.
         */
        spacing: number;
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        allowMove: boolean;
        /**
         * Gets the Brush that should be used to fill the legend background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): Brush;
        /**
         * Gets the Pen that should be used to draw the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorderPen(context: RenderContext): Pen;
        /**
         * Gets the Brush that should be used to stroke the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): DashStyle;        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        background: Brush;        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        borderStroke: Brush;        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        borderStrokeThickness: number;        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        borderStrokeDashStyle: DashStyle;
    }
    /**
    * Identifies how to connect adjacent data points in line and area charts.
    * @enum
    * @name LineType
    * @param [Polyline] Connect points using straight line segments.
    * @param [Step] Connect points using steps.
    * @param [Curve] Connect points using a cardinal spline.
    */
    enum LineType {
        /**
        * Connect points using straight line segments.
        */
        Polyline = 0,
        /**
        * Connect points using steps.
        */
        Step = 1,
        /**
        * Connect points using a cardinal spline.
        */
        Curve = 2,
    }
    /**
    * @class Describes rectangular margins.
    * @property {Number} left Gets or sets the width of the left side of the frame.
    * @property {Number} top Gets or sets the width of the top side of the frame.
    * @property {Number} right Gets or sets the width of the right side of the frame.
    * @property {Number} bottom Gets or sets the width of the bottom side of the frame.
    * @property {Number} width Returns the sum of Left and Right margins.
    * @property {Number} height Returns the sum of Top and Bottom margins.
    */
    class Margins {
        /**
         * Initializes a new instance of the Margins structure.
         */
        constructor(left: number, top?: number, right?: number, bottom?: number);
        /**
         * Gets or sets the width of the left side of the frame.
         */
        /**
         * Gets or sets the width of the left side of the frame.
         */
        left: number;
        /**
         * Gets or sets the width of the top side of the frame.
         */
        /**
         * Gets or sets the width of the top side of the frame.
         */
        top: number;
        /**
         * Gets or sets the width of the right side of the frame.
         */
        /**
         * Gets or sets the width of the right side of the frame.
         */
        right: number;
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        bottom: number;
        /**
         * Returns the sum of Left and Right margins.
         */
        width: number;
        /**
         * Returns the sum of Top and Bottom margins.
         */
        height: number;
    }
    /**
    * @class Contains two values.
    * @property {T1} first Gets or sets the first value.
    * @property {T1} second Gets or sets the second value.
    */
    class Pair<T1, T2> {
        /**
         * Initializes a new instance of the Pair class.
         * @param first The first value.
         * @param second The second value.
         */
        constructor(first?: T1, second?: T2);
        /**
         * Object.ToString override.
         * @return A string representation of the pair.
         */
        toString(): string;
        /**
         * Gets or sets the first value.
         */
        /**
         * Gets or sets the first value.
         */
        first: T1;        /**
         * Gets or sets the second value.
         */
        /**
         * Gets or sets the second value.
         */
        second: T2;
    }
    /**
     * Represents a controller that pans its plot's data range.
     */
    class PanControllerAnimation implements ComponentAnimation {
        constructor(controller: PanController, dir: Vector);
        start(): void;
        stop(): void; setFriction: number;
        getFriction: number;
    }
    /**
     * @class A base class for controllers implementing user interaction with Plot components.
    * @property {Component} component Gets the component controlled by this PlotController.
     */
    class PlotController implements ComponentController {
        /**
         * Initializes a new instance of the PlotController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
        * Implements ComponentController.onMouseWheel. Called when the user scrolls with the middle mouse button.
        * @param {Number} x A number value specifying the horizontal position of mouse pointer.
        * @param {Number} y A number value specifying the vertical position of mouse pointer.
        * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
        */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets the component controlled by this PlotController.
         */
        component: Component;
        protected renderContext: RenderContext;
    }
    /**
    * @class Represents a point in 3D space.
    * @property {Number} x Gets or sets the X coordinate of this point.
    * @property {Number} y Gets or sets the Y coordinate of this point.
    * @property {Number} z Gets or sets the Z coordinate of this point.
    */
    class Point3D {
        /**
         * Initializes a new instance of the Point3D struct.
         * @param {Number} x X coordinate of the point.
         * @param {Number} y Y coordinate of the point.
         * @param {Number} z Z coordinate of the point.
         */
        constructor(x: number, y: number, z: number);
        /**
         * Gets the distance to specified point.
         * @param {Point3D} p A Point3D instance.
         * @returns {Number} A number value representing the distance.
         */
        distance(p: Point3D): number;
        /**
         * Sums two points' coordinates.
         * @param {Point3D} p1 The first point.
         * @param {Point3D} p2 The second point.
         * @returns {Point3D} A Point3D containing sum of coordinates.
         */
        static add(p1: Point3D, p2: Point3D): Point3D;
        /**
         * Scales the point's coordinates by specified scale factor.
         * @param {Number} scale A number value by which to multiply point's coordinates.
         * @returns {Point3D} A Point3D containing scaled coordinates.
         */
        scale(scale: number): Point3D;
        /**
         * Returns a string representation of this point.
         * @returns {String} A string representation of this point.
         */
        toString(): string;
        /**
         * Gets or sets the X coordinate of this point.
         */
        /**
         * Gets or sets the X coordinate of this point.
         */
        x: number;        /**
         * Gets or sets the Y coordinate of this point.
         */
        /**
         * Gets or sets the Y coordinate of this point.
         */
        y: number;        /**
         * Gets or sets the Z coordinate of this point.
         */
        /**
         * Gets or sets the Z coordinate of this point.
         */
        z: number;
    }
    /**
    * Identifies the grid types supported by RadarPlot.
    * @enum
    * @name RadarGridType
    * @param [Spiderweb] Identifies spider-web grid consisting as concentric regular polygons.
    * @param [Radar] Identifies radar grid consisting as concentric circles.
    */
    enum RadarGridType {
        /**
        * Identifies spider-web grid consisting as concentric regular polygons.
        */
        Spiderweb = 0,
        /**
        * Identifies radar grid consisting as concentric circles.
        */
        Radar = 1,
    }
    /**
    * Identifies the type of radar-chart.
    * @enum
    * @name RadarType
    * @param [Polygon] Draw each series as a polygon.
    * @param [Pie] Draw data items as circular sectors.
    */
    enum RadarType {
        /**
         * Draw each series as a polygon.
         */
        Polygon = 0,
        /**
         * Draw data items as circular sectors.
         */
        Pie = 1,
    }
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets or sets the current drawing surface.
    * @property {Component} component Gets or sets the component currently being painted.
    * @property {Component} component Gets or sets the component currently being painted.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {Theme} theme Gets or sets the Theme used to resolve appearance attributes.
    */
    class RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param {Rect} clipRect A Rect specifying the clip rectangle.
         * @param {Theme} theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(clipRect: Rect, theme: Theme);
        /**
         * Gets or sets the current drawing surface.
         */
        /**
         * Gets or sets the current drawing surface.
         */
        graphics: Graphics;        /**
         * Gets or sets the component currently being painted.
         */
        /**
         * Gets or sets the component currently being painted.
         */
        component: Component;        /**
         * Gets the X axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getXAxis(series?: Renderer2D): Axis;
        /**
         * Gets the Y axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getYAxis(series?: Renderer2D): Axis;        /**
         * Gets the chart's XAxis.
         */
        xAxis: Axis;
        /**
         * Gets the chart's YAxis.
         */
        yAxis: Axis;
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        theme: Theme; clipRect: Rect;        /**
         * Gets the clip rectangle relative to specified Component.
         * @param {Component} relativeTo A Component instance.
         * @returns {Rect} A Rect instance.
         */
        getClipRect(relativeTo: Component): Rect;
        /**
         * Gets a TextStyle from current Theme.
         * @param {TextStyleHint} hint A member of the TextStyleHint enumeration.
         * @returns {TextStyle} A TextStyle instance.
         */
        textStyle(hint: TextStyleHint): TextStyle;
        toPoints3D(bounds: Rect, zBottomLeft: number, zTopRight: number): Point3D[];
        highlightPen(): Pen;
    }
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {BiaxialChart} chart Gets the chart.
    */
    class RenderContext2D extends RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param clipRect A RectD specifying the clip rectangle.
         * @param theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(chart: BiaxialChart, clipRect: Rect);
        xAxis: Axis;
        yAxis: Axis;
        chart: BiaxialChart;
    }
    /**
     * @class Defines the interface called by Plot3D to build 3D models.
     */
    interface Renderer3D {
        /**
         * Adds models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: Scene3D, context: RenderContext): void;
    }
    /**
     * Represents a controller that rotates a polar plot by changing its StartAngle.
     */
    class RotationControllerAnimation implements ComponentAnimation {
        constructor(controller: RotationController, dir: number, originPoint: Point, endPoint: Point);
        start(): void;
        stop(): void;
    }
    /**
    * Identifies the shapes rendered by a ScatterRenderer.
    * @enum
    * @name ScatterType
    * @param [None] Do not draw scatter.
    * @param [Circle] Draw circles.
    * @param [Diamond] Draw diamonds.
    * @param [Square] Draw squares.
    * @param [Triangle] Draw triangles.
    */
    enum ScatterType {
        /**
        * Do not draw scatter.
        */
        None = 0,
        /**
        * Draw circles.
        */
        Circle = 1,
        /**
        * Draw diamonds.
        */
        Diamond = 2,
        /**
        * Draw squares.
        */
        Square = 3,
        /**
        * Draw triangles.
        */
        Triangle = 4,
    }
    /**
     * @class Specifies the interface that data providers should implement
     * in order to feed data to SeriesRenderer classes.
     */
    interface Series {
        /**
         * Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Returns a label for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets a value indicating whether the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Gets a value indicating whether the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Gets the number of data items in this series.
         */
        size: number;
        /**
         * Gets the number of values (coordinates) that can be returned by each data item.
         */
        dimensions: number;
        /**
         * Gets the title of this series.
         */
        title: string;
        /**
         * Gets the kind of labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
    }
    /**
     * @class Defines an interface for enumerating all series associated with a component of the dashboard.
     */
    interface SeriesContainer {
        /**
         * Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
        /**
        * Gets the index of the dimension whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
    }
    /**
     * @class Defines appearance attributes of series elements.
     */
    interface SeriesStyle {
        /**
         * Returns a Brush that should be used to fill specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Returns a Brush that should be used to stroke specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Returns the thickness of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Returns the dash style of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
    }
    class ShapeBuilder {
        constructor(scene: Scene3D);
        build(shape: any, p: any, brush: any): Mesh3D;
        scene: Scene3D;
    }
    /**
    * @class Draws text and labels inside chart components.
    * @property {MindFusion.Drawing.Font} labelFont Gets or sets the Font used to draw labels.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the brush used to draw labels.
    */
    class TextRenderer {
        /**
         * Initializes a new instance of the TextRenderer class.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Font} font A Font instance.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         */
        constructor(context: RenderContext, font: Font, textBrush: Brush);
        /**
         * Gets or sets the font used to draw labels.
         */
        /**
         * Gets or sets the font used to draw labels.
         */
        labelFont: Font;
        /**
         * Gets or sets the brush used to draw labels.
         */
        /**
         * Gets or sets the brush used to draw labels.
         */
        textBrush: Brush;        /**
         * Draws the specified label centered at specified location.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelAtPoint(series: Series, index: number, point: Point, labelKind: LabelKinds, format?: StringFormat): void;
        drawLabelAtRadialPoint(label: string, center: Point, radius: number, angle: number): void;
        /**
         * Draws the specified label on the right side of specified point.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRightFromPoint(series: Series, index: number, point: Point, labelKind: LabelKinds): void;
        /**
         * Draws a 90-degree rotated text in specified layout rectangle.
         * @param {String} text A string containing the text to draw.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         * @param {MindFusion.Charting.Drawing.StringAlignment} alignment A member of the StringAlignment enumeration.
         */
        drawRotatedLabelInRect(text: string, bounds: Rect, textBrush: Brush, alignment: StringAlignment): void;
        /**
         * Draws the specified label rotated at 90 degrees in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRotatedLabelInRect(series: Series, index: number, bounds: Rect, labelKind: LabelKinds): void;
        /**
         * Draws the specified label in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelInRect(series: Series, index: number, bounds: Rect, labelKind: LabelKinds, format?: StringFormat): void;
    }
    /**
    * Defines text appearance attributes.
    * @property {String} fontName Gets or sets font name.
    * @property {Number} fontSize Gets or sets font size.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets font style.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets a Brush used to draw text.
    */
    class TextStyle {
        /**
         * Initializes a new instance of the TextStyle class.
         */
        constructor();
        /**
         * Gets or sets font name.
         */
        /**
         * Gets or sets font name.
         */
        fontName: string;        /**
         * Gets or sets font size.
         */
        /**
         * Gets or sets font size.
         */
        fontSize: number;        /**
         * Gets or sets font style.
         */
        /**
         * Gets or sets font style.
         */
        fontStyle: FontStyle;        /**
         * Gets or sets a Brush used to draw text.
         */
        /**
         * Gets or sets a Brush used to draw text.
         */
        textBrush: Brush;
    }
    /**
    * Identifies text styles that can be accessed through RenderContent.
    * @enum
    * @name TextStyleHint
    * @param [Title] Identifies style used to draw chart's title.
    * @param [Subtitle] Identifies style used to draw chart's sub-title.
    * @param [AxisLabels] Identifies style used to draw axis labels.
    * @param [AxisTitle] Identifies style used to draw axis title.
    * @param [DataLabels] Identifies style used to draw data labels.
    * @param [Widget] Identifies style used to draw text in UI widgets.
    * @param [LegendTitle] Identifies style used to draw legend title.
    */
    enum TextStyleHint {
        /**
         * Identifies style used to draw chart's title.
         */
        Title = 0,
        /**
         * Identifies style used to draw chart's sub-title.
         */
        Subtitle = 1,
        /**
         * Identifies style used to draw axis labels.
         */
        AxisLabels = 2,
        /**
         * Identifies style used to draw axis title.
         */
        AxisTitle = 3,
        /**
         * Identifies style used to draw data labels.
         */
        DataLabels = 4,
        /**
         * Identifies style used to draw text in UI widgets.
         */
        Widget = 5,
        /**
         * Identifies style used to draw legend title.
         */
        LegendTitle = 6,
    }
    /**
     * @class Represents a dashboard's theme defining all appearance attributes of its elements.
     * @property {String} titleFontName Gets or sets the name of font used to draw the chart title.
     * @property {Number} titleFontSize Gets or sets the size of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw the chart title.
     * @property {String} subtitleFontName Gets or sets the name of font used to draw the chart sub-title.
     * @property {Number} subtitleFontSize Gets or sets the size of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.FontStyle} subtitleFontStyle Gets or sets the style of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.Brush} subtitleBrush Gets or sets the Brush used to draw the chart sub-title.
     * @property {String} axisLabelsFontName Gets or sets the name of font used to draw axis labels.
     * @property {Number} axisLabelsFontSize Gets or sets the size of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisLabelsFontStyle Gets or sets the style of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.Brush} axisLabelsBrush Gets or sets the Brush used to draw axis labels.
     * @property {String} axisTitleFontName Gets or sets the name of font used to draw axis titles.
     * @property {Number} axisTitleFontSize Gets or sets the size of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisTitleFontStyle Gets or sets the style of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.Brush} axisTitleBrush Gets or sets the Brush used to draw axis titles.
     * @property {String} dataLabelsFontName Gets or sets the name of font used to draw data labels.
     * @property {Number} dataLabelsFontSize Gets or sets the size of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} dataLabelsFontStyle Gets or sets the style of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.Brush} dataLabelsBrush Gets or sets the Brush used to draw data labels.
     * @property {String} widgetFontName Gets or sets the name of font used to draw text in UI widgets.
     * @property {Number} widgetFontSize Gets or sets the size of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.FontStyle} widgetFontStyle Gets or sets the style of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.Brush} widgetBrush Gets or sets the Brush used to draw text in UI widgets.
     * @property {String} legendTitleFontName Gets or sets the name of font used to draw legend titles.
     * @property {Number} legendTitleFontSize Gets or sets the size of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} legendTitleFontStyle Gets or sets the style of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.Brush} legendLabelsBrush Gets or sets the Brush used to draw legend labels.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformSeriesStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformSeriesStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Number>} commonSeriesStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<DashStyle>} commonSeriesStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesFills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesStrokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<number>>} seriesStrokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} seriesStrokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
     * @property {MindFusion.Charting.Drawing.Brush} plotBackground Gets or sets a Brush used to draw the background of plots.
     * @property {MindFusion.Charting.Drawing.Brush} plotBorderStroke Gets or sets a Brush used to stroke plot borders.
     * @property {Number} plotBorderStrokeThickness Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} plotBorderStrokeDashStyle Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.Brush} legendBackground Gets or sets a Brush used to draw legend background.
     * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets a Brush used to stroke highlighted items.
     * @property {Number} highlightStrokeThickness Gets or sets the thickness of highlight strokes.
     * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the dash style of highlight strokes.
     * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets a Brush used to stroke axis lines.
     * @property {Number} axisStrokeThickness Gets or sets the thickness of axis lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style of axis lines.
     * @property {MindFusion.Charting.Drawing.Brush} legendBorderStroke Gets or sets a Brush used to draw legend borders.
     * @property {Number} legendBorderStrokeThickness Gets or sets the thickness of legend borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} legendBorderStrokeDashStyle Gets or sets the dash style of legend borders.
     * @property {MindFusion.Charting.Drawing.Color} gridLineColor Gets or sets the line color of plot grid.
     * @property {Number} gridLineThickness Gets or sets the thickness of plot grid lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} gridLineStyle Gets or sets the style of plot grid lines.
     * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of plot grid.
     * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of plot grid.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeBackground Gets or sets a Brush used to draw gauge backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeStroke Gets or sets a Brush used to stroke gauge borders.
     * @property {Number} gaugeStrokeThickness Gets or sets the thickness of gauge borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeScaleBackground Gets or sets a Brush used to draw gauge scale backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeScaleStroke Gets or sets a Brush used to stroke gauge scale borders.
     * @property {Number} gaugeScaleStrokeThickness Gets or sets the thickness of gauge scale borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugePointerBackground Gets or sets a Brush used to draw gauge pointer backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugePointerStroke Gets or sets a Brush used to stroke gauge pointer borders.
     * @property {Number} gaugePointerStrokeThickness Gets or sets the thickness of gauge pointer borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeTickBackground Gets or sets a Brush used to draw gauge tick backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeTickStroke Gets or sets a Brush used to stroke gauge tick borders.
     * @property {Number} gaugeTickStrokeThickness Gets or sets the thickness of gauge tick borders.
     * @property {String} gaugeFontName Gets or sets the name of font used to draw text in gauges.
     * @property {MindFusion.Charting.Drawing.FontStyle} gaugeFontStyle Gets or sets the style of font used to draw text in gauges.
     * @property {Number} gaugeFontSize Gets or sets the size of font used to draw text in gauges.
     * @property {PropertyChangedEventDispatcher} propertyChanged Occurs when a property value changes.
     */
    class Theme implements INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Theme class.
         * @param {MindFusion.Charting.Drawing.Brush} fill A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} stroke A Brush used to stroke all series elements.
         * @param {Number} strokeThickness Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} strokeDashStyle Uniform dash style of series elements' strokes.
         */
        constructor(fill?: Brush, stroke?: Brush, strokeThickness?: number, strokeDashStyle?: DashStyle);        /**
         * Loads the theme values from an XML file.
         * @param {String} fileUrl The URL of an XML file where the data should be read from.
         */
        loadFrom(fileUrl: string): void;
        /**
        * Saves the theme values to specified file.
        * @param {String} fileUrl The URL where the theme's XML should be posted to.
        */
        saveTo(url: string): void; propertyChanged: PropertyChangedEventDispatcher; seriesStyle: MixedSeriesStyle; titleStyle: TextStyle; subtitleStyle: TextStyle; axisLabelsStyle: TextStyle; axisTitleStyle: TextStyle; dataLabelsStyle: TextStyle; widgetStyle: TextStyle; legendTitleStyle: TextStyle;        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        titleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        titleBrush: Brush;
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        subtitleFontName: string;
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        subtitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        subtitleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        subtitleBrush: Brush;
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        axisLabelsFontName: string;
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        axisLabelsFontSize: number;
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        axisLabelsFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        axisLabelsBrush: Brush;
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        axisTitleFontName: string;
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        axisTitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        axisTitleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        axisTitleBrush: Brush;
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        dataLabelsFontName: string;
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        dataLabelsFontSize: number;
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        dataLabelsFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        dataLabelsBrush: Brush;
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        widgetFontName: string;
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        widgetFontSize: number;
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        widgetFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        widgetBrush: Brush;
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        legendTitleFontName: string;
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        legendTitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        legendTitleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        legendTitleBrush: Brush;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformSeriesFill: Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformSeriesStroke: Brush;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformSeriesStrokeThickness: number;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformSeriesStrokeDashStyle: DashStyle;
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        commonSeriesFills: List<Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        commonSeriesStrokes: List<Brush>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        commonSeriesStrokeThicknesses: List<number>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        commonSeriesStrokeDashStyles: List<DashStyle>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        seriesFills: List<List<Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        seriesStrokes: List<List<Brush>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        seriesStrokeThicknesses: List<List<number>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        seriesStrokeDashStyles: List<List<DashStyle>>;        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        plotBackground: Brush;        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        plotBorderStroke: Brush;        /**
         * Gets or sets the thickness of plot borders.
         */
        /**
         * Gets or sets the thickness of plot borders.
         */
        plotBorderStrokeThickness: number;        /**
         * Gets or sets the dash style of plot borders.
         */
        /**
         * Gets or sets the dash style of plot borders.
         */
        plotBorderStrokeDashStyle: DashStyle;        /**
         * Gets or sets a Brush used to draw legend background.
         */
        /**
         * Gets or sets a Brush used to draw legend background.
         */
        legendBackground: Brush;
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        highlightStroke: Brush;        /**
         * Gets or sets the thickness of highlight strokes.
         */
        /**
         * Gets or sets the thickness of highlight strokes.
         */
        highlightStrokeThickness: number;        /**
         * Gets or sets the dash style of highlight strokes.
         */
        /**
         * Gets or sets the dash style of highlight strokes.
         */
        highlightStrokeDashStyle: DashStyle;        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        axisStroke: Brush;        /**
         * Gets or sets the thickness of axis lines.
         */
        /**
         * Gets or sets the thickness of axis lines.
         */
        axisStrokeThickness: number;        /**
         * Gets or sets the dash style of axis lines.
         */
        /**
         * Gets or sets the dash style of axis lines.
         */
        axisStrokeDashStyle: DashStyle;        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        legendBorderStroke: Brush;        /**
         * Gets or sets the thickness of legend borders.
         */
        /**
         * Gets or sets the thickness of legend borders.
         */
        legendBorderStrokeThickness: number;        /**
         * Gets or sets the dash style of legend borders.
         */
        /**
         * Gets or sets the dash style of legend borders.
         */
        legendBorderStrokeDashStyle: DashStyle;
        /**
        * Gets or sets the line color of plot grid.
        */
        /**
        * Gets or sets the line color of plot grid.
        */
        gridLineColor: Color;        /**
        * Gets or sets the thickness of plot grid lines.
        */
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        gridLineThickness: number;        /**
        * Gets or sets the style of plot grid lines.
        */
        /**
        * Gets or sets the style of plot grid lines.
        */
        gridLineStyle: DashStyle;        /**
         * Gets or sets the main color of plot grid.
         */
        /**
         * Gets or sets the main color of plot grid.
         */
        gridColor1: Color;        /**
         * Gets or sets the alternating color of plot grid.
         */
        /**
         * Gets or sets the alternating color of plot grid.
         */
        gridColor2: Color;        /**
         * Gets or sets a Brush used to draw gauge backgrounds.
         */
        /**
         * Gets or sets a Brush used to draw gauge backgrounds.
         */
        gaugeBackground: Brush;        /**
         * Gets or sets a Brush used to stroke gauge borders.
         */
        /**
         * Gets or sets a Brush used to stroke gauge borders.
         */
        gaugeStroke: Brush;        /**
         * Gets or sets the thickness of gauge borders.
         */
        /**
         * Gets or sets the thickness of gauge borders.
         */
        gaugeStrokeThickness: number;        /**
         * Gets or sets a Brush used to draw the background of gauge scales.
         */
        /**
         * Gets or sets a Brush used to draw the background of gauge scales.
         */
        gaugeScaleBackground: Brush;        /**
         * Gets or sets a Brush used to stroke gauge scales.
         */
        /**
         * Gets or sets a Brush used to stroke gauge scales.
         */
        gaugeScaleStroke: Brush;        /**
         * Gets or sets the thickness of gauge scale strokes.
         */
        /**
         * Gets or sets the thickness of gauge scale strokes.
         */
        gaugeScaleStrokeThickness: number;        /**
         * Gets or sets a Brush used to draw gauge pointer backgrounds.
         */
        /**
         * Gets or sets a Brush used to draw gauge pointer backgrounds.
         */
        gaugePointerBackground: Brush;        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        gaugePointerStroke: Brush;        /**
         * Gets or sets the thickness of gauge pointer strokes.
         */
        /**
         * Gets or sets the thickness of gauge pointer strokes.
         */
        gaugePointerStrokeThickness: number;        /**
         * Gets or sets a Brush used to draw gauge tick backgrounds.
         */
        /**
         * Gets or sets a Brush used to draw gauge tick backgrounds.
         */
        gaugeTickBackground: Brush;        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        gaugeTickStroke: Brush;        /**
         * Gets or sets the thickness of gauge tick strokes.
         */
        /**
         * Gets or sets the thickness of gauge tick strokes.
         */
        gaugeTickStrokeThickness: number;        /**
         * Gets or sets the name of font used to draw text in gauges.
         */
        /**
         * Gets or sets the name of font used to draw text in gauges.
         */
        gaugeFontName: string;        /**
         * Gets or sets the style of font used to draw text in gauges.
         */
        /**
         * Gets or sets the style of font used to draw text in gauges.
         */
        gaugeFontStyle: FontStyle;        /**
         * Gets or sets the size of font used to draw text in gauges.
         */
        /**
         * Gets or sets the size of font used to draw text in gauges.
         */
        gaugeFontSize: number;
        fileVersion: number;
    }
    /**
     * @class Represents current tooltip.
     * @property {String} text Gets or sets the tooltip text.
     * @property {MindFusion.Drawing.Point} position Gets or sets the tooltip position.
     */
    class ToolTip {
        /**
         * Gets or sets the tooltip text.
         */
        /**
         * Gets or sets the tooltip text.
         */
        static text: string;        /**
         * Gets or sets the tooltip position.
         */
        /**
         * Gets or sets the tooltip position.
         */
        static position: Point;
    }
    class Utilities {
        static v: string;
        static rotateRect(rect: Rect, pivot: Point, angle: number): Rect;
        static getCenter(rect: Rect): Point;
        static shellSort(data: number[]): number[];
        static shellSortByX(data: List<Point>): List<Point>;
        static calcCircumferenceCoord(center: Point, radius: number, angleDegrees: number): Point;
        static calcPieBoundingRect(maxLeftLabelWidth: number, maxRightLabelWidth: number, leftLabelAngle: number, rightLabelAngle: number, radius: number): Rect;
        static distance(p1: Point, p2: Point): number;
        static rad(degree: number): number;
        static deg(radians: number): number;
        static rotatePoint(pointToRotate: Point, centerPoint: Point, angleInDegrees: number): Point;
        static opacityBrush(brush: Brush, opacity: number): Brush;
        static getShapePoly(point: Point, shape: ScatterType, shapeSize: number): Point[]; static formatDateTime(ticks: number, dateTimeFormat: DateTimeFormat, customDateTimeFormat: string, labelPrefix: string, labelSuffix: string): string;
        static isInfinity(value: number): boolean;
        static isNullOrEmpty(value: string): boolean;
        static pointInEllipse(pt: Point, rc: Rect): boolean;
        static normalizeRect(rc: Rect): Rect;
        static pointInPolygon(poly: Array<Point>, ptTest: Point): boolean;
        static polyToRect(poly: Array<Point>): Rect;
        static pointInPolyRect(poly: Array<Point>, ptTest: Point, rBound: {
            value: Rect;
        }): boolean;
        static pointInRect(pt: Point, rc: Rect): boolean;
        static pointInSegment(pt: Point, sgm1: Point, sgm2: Point): boolean;
        static intersect(p1: Point, p2: Point, p3: Point, p4: Point): boolean;
        static ccw(p0: Point, p1: Point, p2: Point): number;
        static cartesianToPolar(coordCenter: Point, point: Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: Point, a: number, r: number): Point;
        static cartesianToPolarDegrees(center: any, point: any): {
            a: number;
            r: number;
        };
        static polarToCartesianDegrees(center: any, polar: any): Point;
        static format(str: string, ...replacements: any[]): string;
        static compareTo(num: number, other: number): number;
        static isFloat(n: number): boolean;
        static isInteger(n: number): boolean;
    }
    /**
     * @class Represents a two-dimensional vector.
     * @property {Number} x Gets or sets the X component of this vector.
     * @property {Number} y Gets or sets the Y component of this vector.
     * @property {Number} length Gets the length of this vector.
     * @property {Number} lengthSquared Gets the squared length of this vector.
     */
    class Vector {
        /**
         * Initializes a new instance of the Vector struct.
         * @param {Number} x X component of the vector.
         * @param {Number} y Y component of the vector.
         */
        constructor(x: number, y: number);
        /**
         * Makes this vector a unit vector.
         */
        normalize(): void;
        /**
         * Returns the size of cross-product of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The size of cross-product.
         */
        static crossProduct(vector1: Vector, vector2: Vector): number;
        /**
         * Determines the angle between two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The angle between specified vectors.
         */
        static angleBetween(vector1: Vector, vector2: Vector): number;
        /**
         * Reverses the direction of this vector.
         */
        negate(): void;
        /**
         * Adds two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the sum of specified vectors.
         */
        static add(vector1: Vector, vector2: Vector): Vector;
        /**
         * Translates point by a vector.
         * @param {MindFusion.Charting.Vector} vector The vector to add.
         * @param {MindFusion.Drawing.Point} point The reference point.
         * @returns {MindFusion.Drawing.Point} The translated point.
         */
        static addPoint(vector: Vector, point: Point): Point;
        /**
         * Subtracts two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the difference between specified vectors.
         */
        static subtract(vector1: Vector, vector2: Vector): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyVectorAndScalar(vector: Vector, scalar: number): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {Number} scalar The scalar value.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyScalarAndVector(scalar: number, vector: Vector): Vector;
        /**
     * Returns the dot product of two vectors.
     * @param {MindFusion.Charting.Vector} vector1 The first vector.
     * @param {MindFusion.Charting.Vector} vector2 The second vector.
     * @returns {Number} The dot product.
     */
        static multiply(vector1: Vector, vector2: Vector): number;
        /**
         * Divides a vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to divide.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the division result.
         */
        static divide(vector: Vector, scalar: number): Vector;
        /**
         * Finds the determinant of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The determinant.
         */
        static determinant(vector1: Vector, vector2: Vector): number;
        /**
         * Gets or sets the X component of this vector.
         */
        /**
         * Gets or sets the X component of this vector.
         */
        x: number;
        /**
         * Gets or sets the Y component of this vector.
         */
        /**
         * Gets or sets the Y component of this vector.
         */
        y: number;
        /**
         * Gets the length of this vector.
         */
        length: number;
        /**
         * Gets the squared length of this vector.
         */
        lengthSquared: number;
    }
    class VelocityCalculator {
        constructor(sampleSize?: number);
        reset(): void;
        addSample(movement: Vector, time: number): void;
        calculate(): Vector;
        canCalculate: boolean;
        Epsilon: number;
    }
    /**
     * @class Contains methods that facilitate serializing and deserializing objects to and from XML documents.
    */
    class XmlPersistContext {
        /**
         * Initializes a new instance of the XmlPersistContext class.
         * @param {XMLDocument} document
         * The associated XMLDocument.
         *
         * @param {number} fileVersion
         * Specifies the current file format number.
         *
         */
        constructor(document: Document, fileVersion: number);
        selectSingleNode(elementName: string, parentElement: Element): Element;
        hasValue(value: any): boolean;
        innerText(element: Element): string;
        /**
         * Adds a new child node with the specified name and
         * value to the specified parent node.
         */
        addChildElement(elementName: string, parentElement: Element, innerText?: string): Element;
        /**
         * Writes a string value with the specified name.
         */
        writeString(stringValue: string, elementName: string, parentElement: Element): Element;
        /**
         * Writes a boolean value with the specified name.
         */
        writeBool(boolValue: boolean, elementName: string, parentElement: Element): Element;
        /**
         * Writes an integer value with the specified name.
         */
        writeInt(intValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a float value with the specified name.
         */
        writeFloat(floatValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a reference to the specified brush. The brush
         * is registered within the internal hashtable for
         * subsequent serialization.
         */
        writeBrush(brush: Brush, elementName: string, parentElement: Element): Element;
        /**
         * Writes all currently accumulated brushes.
         */
        writeBrushes(parentElement: Element): void;
        writeBrushContent(brushElement: Element, brush: Brush): void;
        /**
        * Writes a list of brushes.
        */
        writeBrushList(list: List<Brush>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of floating-point numbers.
         */
        writeFloatList(list: List<number>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of colors.
         */
        writeColorList(list: List<Color>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of dash styles.
         */
        writeDashStyleList(list: List<DashStyle>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes the specified enum value.
         */
        writeEnum(enumValue: Object, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified color.
         */
        writeColor(color: Color, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified object under the specified name.
         */        /**
        * Reads a string value with the specified name.
        */
        readString(elementName: string, parentElement: Element, defaultValue?: string): string;
        /**
         * Reads a boolean value with the specified name.
         */
        readBool(elementName: string, parentElement: Element, defaultValue?: boolean): boolean;
        /**
         * Reads an integer value with the specified name.
         */
        readInt(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a float value with the specified name.
         */
        readFloat(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a list of floats.
         */
        readFloatList(elementName: string | Element, subElementName: string, parentElement: Element): List<number>;
        /**
         * Reads a list of dash styles.
         */
        readDashStyleList(elementName: string | Element, subElementName: string, parentElement?: Element): List<DashStyle>;
        /**
         * Reads a MindFusion.Drawing.Brush object with the specified name.
         */
        readBrush(elementName: string | Element, parentElement: Element, defaultValue?: Brush): Brush;
        /**
         * Reads a list of brushes.
         */
        readBrushList(elementName: Element | string, subElementName: string, parentElement: Element): List<Brush>;
        /**
         * Reads all brushes.
         */
        readBrushes(parentElement: Element): void;
        readBrushContent(brushElement: Element): Brush;
        /**
         * Reads an enum value with the specified name.
         */
        readEnum(elementName: string, parentElement: Element, defaultValue?: number): Object;
        /**
         * Reads a color with the specified name.
         */
        readColor(elementName: string, parentElement: Element, defaultValue?: Color): Color;
        /**
         * Reads a StringFormat object with the specified name.
         */
        readStringFormat(elementName: string, parentElement: Element, defultFormat?: StringFormat): StringFormat;
        /**
         * Reads an object with the specified name.
         */
        readObject(elementName: string, parentElement: any): Object;
        /**
         * Gets the underlying XML document.
         */
        xmlDocument: Document;
        /**
         * Gets the format revision number for the file being currently serialized.
         */
        fileVersion: number;
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        inplaceResources: boolean;
        LatestFormat: number;
    }
    class ZoomHistory {
        constructor(parent: Component);
        merge(axes: IEnumerable<Axis>): void;
        register(axes: IEnumerable<Axis>): void;
        restore(): void;
        reset(): void; changed: EventDispatcher<EventArgs>; canRestore: boolean;
        isZoomedOut: boolean;
    }
    /**
    * @class Defines appearance attributes for candlestick charts.
    * @property {MindFusion.Charting.Drawing.Brush} risingBrush Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
    * @property {MindFusion.Charting.Drawing.Brush} fallingBrush Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
    */
    class CandlestickSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of CandlestickSeriesStyle.
         */
        constructor(risingBrush: Brush, fallingBrush: Brush, stroke: Brush, strokeThickness: number, strokeDashStyle: DashStyle, renderer: CandlestickRenderer);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush instance, depending on the series data.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.Stroke.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.StrokeThickness.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
         */
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
         */
        risingBrush: Brush;        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
         */
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
         */
        fallingBrush: Brush;
    }
    /**
    * @class Represents a series whose data items are retrieved from a data source.
    * @property {any} dataSource Gets or sets the data source this series is bound to.
    * @property {String} xDataField Gets or sets the name of X data field in the data source.
    * @property {String} yDataField Gets or sets the name of Y data field in the data source.
    * @property {String} zDataField Gets or sets the name of Z data field in the data source.
    * @property {String} innerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} outerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} toolTipsDataField Gets or sets the name of tooltips data field in the data source.
    * @property {String} xAxisLabelsDataField Gets or sets the name of X axis labels data field in the data source.
    * @property {String} yAxisLabelsDataField Gets or sets the name of Y axis labels data field in the data source.
    * @property {String} zAxisLabelsDataField Gets or sets the name of Z axis labels data field in the data source.
    * @property {Number} size Implements Series.Size. Gets the number of data items in the data source.
    * @property {Number} dimensions Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class DataBoundSeries implements Series {
        /**
         * Initializes a new instance of the DataBoundSeries class.
         * @param { any | Array<any> | IEnumerable<any>} dataSource A reference to the data source object.
         */
        constructor(dataSource: any);
        /**
         * Gets or sets the data source this series is bound to.
         */
        /**
         * Gets or sets the data source this series is bound to.
         */
        dataSource: any; enumerableDataSource: boolean;
        arrayDataSource: boolean;
        /**
         * Gets or sets the name of X data field in the data source.
         */
        /**
         * Gets or sets the name of X data field in the data source.
         */
        xDataField: string;
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        yDataField: string;
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        zDataField: string;
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        innerLabelsDataField: string;
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        outerLabelsDataField: string;
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        toolTipsDataField: string;
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        xAxisLabelsDataField: string;
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        yAxisLabelsDataField: string;
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        zAxisLabelsDataField: string;        /**
         * Implements Series.GetValue. Returns a value for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the data source.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns a label for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. DataBoundSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Gets a value indicating whether
         * the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Gets the number of data items in the data source.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
         */
        dimensions: number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
         * Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
         */
        supportedLabels: LabelKinds;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
    * @class Represents a series that contains Date values as X coordinates and number values as Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements provided in Date list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns LabelKinds.XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<Date>} dates Gets or sets a list of Date values used as X coordinates of this series.
    * @property {Number} minValue Gets or sets the coordinate corresponding to MinDate.
    * @property {Number} maxValue Gets or sets the coordinate corresponding to MaxDate.
    * @property {Date} minDate Gets or sets the start of the time range.
    * @property {Date} maxDate Gets or sets the end of the time range.
    * @property {String} dateTimeFormat Gets or sets a value indicating how to format Date values as labels.
    * @property {String} customDateTimeFormat Gets or sets a custom format string for Date labels.
    * @property {String} labelPrefix Gets or sets a prefix added in front of formatted Date labels.
    * @property {String} labelSuffix Gets or sets a suffix appended to formatted Date labels.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class DateTimeSeries implements Series {
        /**
         * Initializes a new instance of the DateTimeSeries class.
         * @param {MindFusion.Charting.Collections.List<Date>} dates A list of Date values.
         * @param {MindFusion.Charting.Collections.List<Number>} values A list of number values.
         * @param {Date} minDate Identifies the start of the time range.
         * @param {Date} maxDate Identifies the end of the time range.
         */
        constructor(dates: List<Date>, values: List<number>, minDate: Date, maxDate: Date);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns Date value at specified index as an XAxisLabel.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsSorted. DateTimeSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.IsEmphasized. DateTimeSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements provided in Date list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
         * Implements Series.SupportedLabels. Returns LabelKinds.XAxisLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        dates: List<Date>;
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        minValue: number;
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        maxValue: number;
        /**
         * Gets or sets the start of the time range.
         */
        /**
         * Gets or sets the start of the time range.
         */
        minDate: Date;
        /**
         * Gets or sets the end of the time range.
         */
        /**
         * Gets or sets the end of the time range.
         */
        maxDate: Date;
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        dateTimeFormat: DateTimeFormat;
        /**
         * Gets or sets a custom format string for Date labels.
         */
        /**
         * Gets or sets a custom format string for Date labels.
         */
        customDateTimeFormat: string;
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        labelPrefix: string;
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        labelSuffix: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
    * @class Lets users move a legend within the boundaries of its parent Panel.
    */
    class LegendController extends PlotController {
        /**
         * Initializes a new instance of the LegendController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
    }
    /**
    * @class Implements SeriesStyle using mixed per-element and uniform values for attributes.
    * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
    * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
    * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
    * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
    * @property {Number} commonStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Drawing.DashStyle} commonStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class MixedSeriesStyle implements SeriesStyle {
        /**
             * Initializes a new instance of the MixedSeriesStyle class.
             * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
             * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
             * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
             * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
             */
        constructor(fill?: Brush, stroke?: Brush, strokeThickness?: number, strokeDashStyle?: DashStyle);
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Fills, CommonFills or UniformFill properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Strokes, CommonStrokes or UniformStroke properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * StrokeThicknesses, CommonStrokeThicknesses or UniformStrokeThickness properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * StrokeDashStyles, CommonStrokeDashStyles or UniformStrokeDashStyle properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformFill: Brush;        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformStroke: Brush;        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformStrokeThickness: number;        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformStrokeDashStyle: DashStyle;        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        commonFills: List<Brush>;        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        commonStrokes: List<Brush>;        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        commonStrokeThicknesses: List<number>;        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        commonStrokeDashStyles: List<DashStyle>;        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        fills: List<List<Brush>>;        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        strokes: List<List<Brush>>;        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        strokeThicknesses: List<List<number>>;        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        strokeDashStyles: List<List<DashStyle>>;
    }
    /**
    * @class Implements SeriesStyle using different attributes for each data item.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class PerElementSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of PerElementSeriesStyle.
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [fills]
         * A list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [strokes]
         * A list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Number>>} [strokeThicknesses]
         * A list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<DashStyle>>} [strokeDashStyles]
         * A list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         *
         */
        constructor(fills?: List<List<Brush>>, strokes?: List<List<Brush>>, strokeThicknesses?: List<List<number>>, strokeDashStyles?: List<List<DashStyle>>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from the Fills list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        fills: List<List<Brush>>;        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        strokes: List<List<Brush>>;        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        strokeThicknesses: List<List<number>>;        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        strokeDashStyles: List<List<DashStyle>>;
    }
    /**
    * @class Implements SeriesStyle using a different set of attributes for each series,
    * where all elements in a single series have common appearance.
    * @property {MindFusion.Charting.Collections.List<Brush>} fills Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} strokes Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Number>} strokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<DashStyle>} strokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    */
    class PerSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the PerSeriesStyle class.
         * @param {MindFusion.Charting.Collections.List<Brush>} [fills] A list of Brushes, each Brush used to fill all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Brush>} [strokes] A list of Brushes, each Brush used to stroke all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Number>} [strokeThicknesses] A list of stroke thicknesses, each thickness applied to all elements of a series.
         * @param {MindFusion.Charting.Collections.List<DashStyle>} [strokeDashStyles] A list of dash styles, each style applied to all elements of a series.
         */
        constructor(fills?: List<Brush>, strokes?: List<Brush>, strokeThicknesses?: List<number>, strokeDashStyles?: List<DashStyle>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from
         * the Fills list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from
         * the Strokes list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        fills: List<Brush>;        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        strokes: List<Brush>;        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        strokeThicknesses: List<number>;        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        strokeDashStyles: List<DashStyle>;
    }
    /**
    * @class The base class for components used to draw chart graphics.
    * @property {SeriesStyle} seriesStyle Gets or sets a SeriesStyle whose attributes should be used to draw series inside this plot, unless their own renderers have a local SeriesStyle value set for respetive attribute.
    * @property {MindFusion.Charting.HitResult} highlightedItem Gets or sets the data item that should be drawn highlighted.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers Gets or sets the SeriesRenderer objects that should draw inside this plot.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this plot.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this plot.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of plot borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of plot borders.
    * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets the Brush used to stroke highlighted item.
    * @property {Number} highlightStrokeThickness Gets or sets the stroke thickness of highlighted item.
    * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the stroke dash style of highlighted item.
    */
    class Plot extends Component implements SeriesContainer {        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        seriesStyle: SeriesStyle;        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        highlightedItem: HitResult;
        /**
         * Called in the beginning of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Measures data of all SeriesRenderer objects drawn inside this plot.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRanges(context: RenderContext): void;
        /**
         * Called at the end of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRanges(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws a grid and all chart graphics
         * represented by contained SeriesRenderer objects.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws the plot's background and borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawPlot(context: RenderContext): void;
        /**
         * Draws the plot's grid.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        seriesRenderers: ObservableCollection<SeriesRenderer>;        /**
         * Unsubscribes from DataChanged and PropertyChanged events
         * of all SeriesRenderer objects in specified list.
         * @param {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers A list of SeriesRenderer objects.
         */        /**
         * Called when a Series raises its DataChanged event.
         * @param {Object} sender The event sender.
         * @param {EventArgs} e An EventArgs instance.
         */
        onRendererDataChanged(e: EventArgs): void;        /**
         * Implements SeriesContainer.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Gets the Brush that should be used to fill the plot's background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): Brush;
        /**
         * Gets the Pen that should be used to draw the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorder(context: RenderContext): Pen;
        /**
         * Gets the Brush that should be used to stroke the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): DashStyle;        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        background: Brush;        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        borderStroke: Brush;        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        borderStrokeThickness: number;        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        borderStrokeDashStyle: DashStyle;        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        highlightStroke: Brush;        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        highlightStrokeThickness: number;        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        highlightStrokeDashStyle: DashStyle;
        effectiveHighlight(context: RenderContext): Pen;
        effectiveHighlightStroke(context: RenderContext): Brush;
        effectiveHighlightStrokeThickness(context: RenderContext): number;
        effectiveHighlightDashStyle(context: RenderContext): DashStyle;
    }
    /**
    * @class A base class for controllers that let users interact with Plot2D objects.
    * @property {Boolean} vertical Gets or sets a value indicating whether interaction is done along the X or Y axis.
    * @property {Dictionary<Axis, AxisInfo>} axisRanges Contains information about Axis ranges processed by this controller.
    */
    class Plot2DController extends PlotController {
        /**
         * Initializes a new instance of the Plot2DController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        recalculate(): void;
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Converts a plot pixel position to a logical value from specified axis' coordinate system.
         * @param {MindFusion.Charting.Axis} axis The target Axis.
         * @param {Number} value The value to convert.
         * @returns {Number} The converted value.
         */
        plotToAxisValue(axis: Axis, value: number): number;
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        vertical: boolean;        /**
        * Contains information about Axis ranges processed by this controller.
        */
        axisRanges: Dictionary<Axis, AxisInfo>;
    }
    /**
    * @class Stores information about Axis ranges processed by this controller.
    * @property {Number} resolution The axis resolution.
    * @property {Number} origin The axis origin.
    * @property {Number} range The axis range.
    */
    class AxisInfo {
        /**
        * The axis resolution.
        * @type {Number}
        */
        resolution: number;
        /**
        * The axis origin.
        * @type {Number}
        */
        origin: number;
        /**
        * The axis range.
        * @type {Number}
        */
        range: number;
    }
    /**
    * @class Represents a data series defined by a list of Point objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Points list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Point>} points Gets or sets the series' points.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class PointSeries implements Series {
        /**
         * Initializes a new instance of the PointSeries class.
         * @param {MindFusion.Charting.Collections.List<Point>} points A list of points.
         * @param {MindFusion.Charting.Collections.List<String>} labels A list of labels.
         */
        constructor(points: List<Point>, labels: List<string>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. PointSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. PointSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Points list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Returns InnerLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the series' points.
         */
        /**
         * Gets or sets the series' points.
         */
        points: List<Point>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
    * @class Represents a data series defined by a list of Point3D objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Points list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 3.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Point3D>} points Gets or sets the series' points.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class PointSeries3D implements Series {
        /**
         * Initializes a new instance of the PointSeries3D class.
         * @param {MindFusion.Charting.Collections.List<Point3D>} points A list of 3D points.
         * @param {MindFusion.Charting.Collections.List<String>} labels A list of labels.
         */
        constructor(points: List<Point3D>, labels: List<string>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. PointSeries3D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. PointSeries3D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Points list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 3.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Returns InnerLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the series' points.
         */
        /**
         * Gets or sets the series' points.
         */
        points: List<Point3D>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
     * @class Provides properties for customizing axis rendering in radar charts.
     */
    class RadarAxisOptions extends AxisRenderer {
        /**
         * Initializes a new instance of the RadarAxisOptions class.
         */
        constructor(axis: Axis);
        /**
         * AxisRenderer.EffectiveAxis override.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * AxisRenderer.Measure override.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * AxisRenderer.Draw override.
         */
        draw(context: RenderContext): void;
    }
    /**
    * @class Represents a controller that rotates a polar plot by changing its StartAngle.
    * @property {Boolean} enableAnimation Gets or sets whether to enable rotation inertia.
    */
    class RotationController extends PlotController {
        /**
         * Initializes a new instance of the RotationController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dangle: number): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        enableAnimation: boolean;
    }
    /**
    * @class Represents a data series defined by two lists of values containing
    * respectively X and Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements in XData list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Gets or sets the kind of labels reported as supported by this series.
    * @property {MindFusion.Charting.Collections.List<Number>} xData Gets or sets the X coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} yData Gets or sets the Y coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} labels Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class Series2D implements Series {
        /**
         * Initializes a new instance of the Series2D class.
         * @param {MindFusion.Charting.Collections.List<Number>} xValues A list of X coordinates.
         * @param {MindFusion.Charting.Collections.List<Number>} yValues A list of Y coordinates.
         * @param {MindFusion.Charting.Collections.List<Number>} labels A list of labels.
         */
        constructor(xValues: List<number>, yValues: List<number>, labels: List<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Series2D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Series2D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in XData list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the X coordinates of data items.
         */
        /**
         * Gets or sets the X coordinates of data items.
         */
        xData: List<number>;
        /**
         * Gets or sets the Y coordinates of data items.
         */
        /**
         * Gets or sets the Y coordinates of data items.
         */
        yData: List<number>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
    * @class Represents a data series defined by three lists of values containing
    * respectively X, Y and Z coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements in XData list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 3.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Number>} xData Gets or sets the X coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} yData Gets or sets the Y coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} zData Gets or sets the Z coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} labels Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class Series3D implements Series {
        /**
         * Initializes a new instance of the Series3D class.
         * @param {MindFusion.Charting.Collections.List<Number>} xValues A list of X coordinates.
         * @param {MindFusion.Charting.Collections.List<Number>} yValues A list of Y coordinates.
         * @param {MindFusion.Charting.Collections.List<Number>} zValues A list of Z coordinates.
         * @param {MindFusion.Charting.Collections.List<String>} labels A list of labels.
         */
        constructor(xValues: List<number>, yValues: List<number>, zValues: List<number>, labels: List<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Series3D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Series3D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in XData list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 3.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Returns InnerLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the X coordinates of data items.
         */
        /**
         * Gets or sets the X coordinates of data items.
         */
        xData: List<number>;
        /**
         * Gets or sets the Y coordinates of data items.
         */
        /**
         * Gets or sets the Y coordinates of data items.
         */
        yData: List<number>;
        /**
         * Gets or sets the X coordinates of data items.
         */
        /**
         * Gets or sets the X coordinates of data items.
         */
        zData: List<number>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    interface StyleCheck {
        (style: SeriesStyle): any;
    }
    /**
    * @class Base class for renderer objects that draw data series inside a Plot.
    * @property {SeriesStyle} seriesStyle A SeriesStyle instance specifying the appearance of series associated with this renderer.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw labels of data items.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw labels of data items.
    * @property {Boolean} showDataLabels Gets or sets the kind of data labels to draw.
    * @property {Boolean} showHighlight Gets or sets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets or sets a value indicating whether to show tooltips.
    * @property {PropertyChangedEventDispatcher} propertyChanged Occurs when a property value changes.
    */
    abstract class SeriesRenderer implements SeriesContainer, INotifyPropertyChanged {
        /**
         * Initializes a new instance of the SeriesRenderer class.
         */
        constructor();
        dataReader: DataReader;        /**
         * Gets the brush that should be used to fill the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(seriesIndex: number, dataIndex: number, context: RenderContext): Brush;
        /**
         * Gets the brush that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveStroke(seriesIndex: number, dataIndex: number, context: RenderContext): Brush;
        /**
         * Gets the thickness of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveStrokeThickness(seriesIndex: number, dataIndex: number, context: RenderContext): number;
        /**
         * Gets the dash style of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(seriesIndex: number, dataIndex: number, context: RenderContext): DashStyle;
        /**
         * Gets the Pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveStrokePen(seriesIndex: number, dataIndex: number, context: RenderContext): Pen;
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        seriesStyle: SeriesStyle;        /**
         * Returns a SeriesStyle object that meets specified criteria.
         * @param check A StyleCheck delegate that tests SeriesStyle for some criteria.
         * @param context A RenderContext instance used to access styles and theme from the dashboard hierarchy.
         * @returns A SeriesStyle instance, or null if none meets spcified criteria.
         */
        searchStyle(check: StyleCheck, context: RenderContext): SeriesStyle;
        /**
         * Draws the series data in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws highlighted data item in specified RenderContext.
         * @param context A RenderContext instance.
         * @param hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Sets tooltip text and lcoation.
         * @param text A string specifying tooltip text.
         * @param location A Point specifying tooltip location.
         */
        setToolTip(text: string, location: Point): void;
        /**
         * Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Measures the data range of rendered series and assigns it to the
         * associated Axis objects if their MinValue and MaxValue are not set.
         * @param context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Adjusts the data range of associated Axis objects after initial measure pass.
         * @param context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * Called to reset measure accumulators at the beginning of a measure pass.
         * @param context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        labelFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        labelFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        labelFontStyle: FontStyle;
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        labelBrush: Brush;
        /**
         * Gets or sets the kind of data labels to draw.
         */
        /**
         * Gets or sets the kind of data labels to draw.
         */
        showDataLabels: LabelKinds;        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        showHighlight: boolean;
        /**
        * Gets a value indicating whether to show tooltips.
        */
        /**
        * Sets a value indicating whether to show tooltips.
        */
        showToolTips: boolean;
        renderDataLabels(series: Series, kind: LabelKinds): boolean;
        /**
         * Gets the Font that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A Font instance.
         */
        effectiveLabelFont(context: RenderContext): Font;
        /**
         * Gets the System.Drawing.Brush that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A System.Drawing.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): Brush;
        drawIn3DPlot(): boolean;
        getFillAt(index: number): Brush;
        getStrokeAt(index: number): Pen;
        /**
         * Raises the PropertyChanged event.
         * @param propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        propertyChanged: PropertyChangedEventDispatcher;        /**
         * Implements the SeriesContainer interface. Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        abstract enumSeries(): IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Subscribes to the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected subscribe(series: Series): void;
        /**
         * Unsubscribes from the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected unsubscribe(series: Series): void;
        /**
         * Called when Series raise their DataChanged event.
         * @param {Object} sender The Series raising the event.
         * @param {EventArgs} e An EventArgs instance.
         */
        protected onSeriesDataChanged(e: EventArgs): void;
        dataChanged: EventDispatcher<EventArgs>;
    }
    /**
    * @class Represents one-dimensional series defined by e list of data values and a list of labels.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Data list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 1.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Number>} data Gets or sets the data values contained in this series.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class SimpleSeries implements Series {
        /**
         * Initializes a new instance of the SimpleSeries class.
         * @param {MindFusion.Charting.Collections.List<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String>} labels A list of labels.
         */
        constructor(values: List<number>, labels: List<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Gets a value indicating whether
         * the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. SimpleSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Data list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 1.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Returns LabelKinds.InnerLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
         * Gets or sets the data values contained in this series.
         */
        /**
         * Gets or sets the data values contained in this series.
         */
        data: List<number>;
        protected values: List<number>;
        protected labels: List<string>;
        protected emphasizedIndices: List<number>;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
    * @class Represents a data series defined by a list of StockPrice objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Values list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 5.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<StockPrice>} values Gets or sets the series' points.
    * @property {DateTimeFormat} dateTimeFormat Gets or sets a value indicating how to format DateTime values as labels.
    * @property {String} customDateTimeFormat Gets or sets a custom format string for DateTime labels.
    * @property {String} labelPrefix Gets or sets a prefix added in front of formatted DateTime labels.
    * @property {String} labelSuffix Gets or sets a suffix appended to formatted DateTime labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {EventDispatcher<EventArgs>} dataChanged Raised when the values in this series change.
    */
    class StockPriceSeries implements Series {
        /**
         * Initializes a new instance of the StockPriceSeries class.
         * @param {MindFusion.Charting.Collections.List<StockPrice>} values A list of StockPrice objects.
         */
        constructor(values: List<StockPrice>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns DateTime value at specified index as an XAxisLabel.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. StockPriceSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. StockPriceSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Values list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 5.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Returns InnerLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the series' points.
         */
        /**
         * Gets or sets the series' points.
         */
        values: List<StockPrice>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;        /**
         * Gets or sets a value indicating how to format DateTime values as labels.
         */
        /**
         * Gets or sets a value indicating how to format DateTime values as labels.
         */
        dateTimeFormat: DateTimeFormat;
        /**
         * Gets or sets a custom format string for DateTime labels.
         */
        /**
         * Gets or sets a custom format string for DateTime labels.
         */
        customDateTimeFormat: string;
        /**
         * Gets or sets a prefix added in front of formatted DateTime labels.
         */
        /**
         * Gets or sets a prefix added in front of formatted DateTime labels.
         */
        labelPrefix: string;
        /**
         * Gets or sets a suffix appended to formatted DateTime labels.
         */
        /**
         * Gets or sets a suffix appended to formatted DateTime labels.
         */
        labelSuffix: string;        /**
        * Raised when the values in this series change.
        */
        dataChanged: EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
    }
    /**
     * Represents a data object, containing open, close, low and high values for a certain date.
     */
    class StockPrice {
        /**
         * Initializes a new instance of the StockPrice class.
         * @param {Number} open The open value.
         * @param {Number} close The close value.
         * @param {Number} low The low value.
         * @param {Number} high The high value.
         * @param {Date} [date] The corresponding date.
         */
        constructor(open: number, close: number, low: number, high: number, date?: Date);
        /**
         * Gets or sets the open value.
         */
        /**
         * Gets or sets the open value.
         */
        open: number;        /**
         * Gets or sets the close value.
         */
        /**
         * Gets or sets the close value.
         */
        close: number;        /**
         * Gets or sets the low value.
         */
        /**
         * Gets or sets the low value.
         */
        low: number;        /**
         * Gets or sets the high value.
         */
        /**
         * Gets or sets the high value.
         */
        high: number;        /**
         * Gets or sets the date.
         */
        /**
         * Gets or sets the date.
         */
        date: Date;
    }
    /**
     * @class Implements SeriesStyle using uniform attributes for all elements in all series.
     * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     */
    class UniformSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the UniformSeriesStyle class.
         * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
         * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
         */
        constructor(fill?: Brush, stroke?: Brush, strokeThickness?: number, strokeDashStyle?: DashStyle);
        /**
         * Implements SeriesStyle.Fill. Returns UniformFill for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns UniformStroke for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns UniformStrokeThickness for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable double value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns UniformStrokeDashStyle for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformFill: Brush;        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformStroke: Brush;        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformStrokeThickness: number;        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformStrokeDashStyle: DashStyle;
    }
    /**
     * @class A Component that renders horizontal Axis ranges.
     * @property {Boolean} plotBottomSide Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
     */
    class XAxisRenderer extends AxisRenderer {
        /**
         * Initializes a new instance of the XAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);        /**
         * AxisRenderer.effectiveAxis override. Gets the effective horizontal Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        maxLabelHeight: number;        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        plotBottomSide: boolean;
    }
    /**
     * @class A Component that renders vertical Axis ranges.
     * @property {Boolean} plotLeftSide Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
     */
    class YAxisRenderer extends AxisRenderer {        /**
         * Initializes a new instance of the YAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         * @param {MindFusion.Charting.Axis} [xAxis] The Axis used to check data item visibility.
         */
        constructor(axis: Axis, xAxis?: Axis);
        /**
         * AxisRenderer.effectiveAxis override. Gets the effective vertical Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        maxLabelWidth: number;        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        plotLeftSide: boolean;
    }
    /**
    * @class Represents one-dimensional series defined by e list of data values
    * and several lists of labels.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels SimpleSeries.SupportedLabels override. Returns a combination of InnerLabel, OuterLabel and XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<String>} topLabels Gets or sets the top labels.
    * @property {MindFusion.Charting.Collections.List<String>} xAxisLabels Gets or sets the X axis labels.
    */
    class BarSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the BarSeries class.
         * @param {MindFusion.Charting.Collections.List<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String>} [topLabels] A list of top labels.
         * @param {MindFusion.Charting.Collections.List<String>} [xAxisLabels] A list of X axis labels.
         */
        constructor(values: List<number>, innerLabels: List<string>, topLabels?: List<string>, xAxisLabels?: List<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of a labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * SimpleSeries.SupportedLabels override. Returns a combination of
         * InnerLabel, OuterLabel and XAxisLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the inner labels.
         */
        /**
         * Gets or sets the inner labels.
         */
        innerLabels: List<string>;
        /**
         * Gets or sets the top labels.
         */
        /**
         * Gets or sets the top labels.
         */
        topLabels: List<string>;
        /**
         * Gets or sets the X axis labels.
         */
        /**
         * Gets or sets the X axis labels.
         */
        xAxisLabels: List<string>;
    }
    /**
    * @class A SeriesRenderer that is used to represent stages in a sales process
    * and show the amount of potential revenue for each stage.
    * @property {Series} series Gets or sets the Series drawn by this FunnelRenderer.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    * @property {Number} segmentSpacing Gets or sets the spacing between segments.
    * @property {Number} bottomBase Gets or sets the size of the funnel base.
    */
    class FunnelRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the FunnelRenderer class.
         * @param {Series} series The Series that should be rendered as a funnel.
         * @param {Number} [dimension] Specifies the Series dimension index that should be used to access data.
         */
        constructor(series: Series, dimension?: number);
        /**
         * Enumerates the segments of the funnel.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSegment} process A ProcessSegment callback.
         * @remarks The signature of the ProcessSegment delegate is as follows:
         * 'function(dataIndex, points)'.
         * param {Number} dataIndex An integer index of data item in Series.
         * param {MindFusion.Drawing.Point[]} points The defining points of the segment's bounding polygon.
         * @remarks The method is not expected to return a value.
         */
        protected enumSegments(context: RenderContext, process: ProcessSegment): void;        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the slices representing data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a pie slice.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
        */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
        /**
         * Gets or sets the Series drawn by this FunnelRenderer.
         */
        /**
         * Gets or sets the Series drawn by this FunnelRenderer.
         */
        series: Series;
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        dimension: number;
        /**
         * Gets or sets the spacing between segments.
         */
        /**
         * Gets or sets the spacing between segments.
         */
        segmentSpacing: number;
        /**
         * Gets or sets the size of the funnel base.
         */
        /**
         * Gets or sets the size of the funnel base.
         */
        bottomBase: number;
    }
    interface ProcessSegment {
        (dataIndex: number, points: Point[]): any;
    }
    /**
    * @class Represents a controller that pans its plot's data range.
    * @property {Boolean} enableAnimation Gets or sets whether to enable pan inertia.
    */
    class PanController extends Plot2DController {
        /**
         * Initializes a new instance of the PanController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dvalue: Vector): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets or sets whether to enable pan inertia.
         */
        /**
         * Gets or sets whether to enable pan inertia.
         */
        enableAnimation: boolean;
    }
    /**
    * @class A SeriesRenderer that draws pies in its containing plot.
    * @property {Series} series Gets or sets the Series drawn by this PieRenderer.
    * @property {Boolean} doughnut Gets or sets a value indicating whether the pie should be rendered as a doughnut.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    */
    class PieRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the PieRenderer class.
         * @param {Series} series The Series that should be rendered as a pie.
         * @param {Number} [dimension] Specifies the Series dimension index that should be used to access data.
         */
        constructor(series: Series, dimension?: number);
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        series: Series;        /**
         * Enumerates the slices of the pie.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSlice} process A ProcessBars callback.
         * @remarks The signature of the ProcessSlice delegate is as follows:
         * 'function(dataIndex, rect, diameter, startAngle, sweepAngle)'.
         * param {Number} dataIndex An integer index of data item in Series.
         * param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
         * param {Number} diameter The diameter of the pie.
         * param {Number} startAngle The start angle of the slice' sector.
         * param {Number} sweepAngle The sweep angle of the slice' sector.
         * The method is not expected to return a value.
         */
        enumSlices(context: RenderContext, process: ProcessSlice): void;        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        doughnut: boolean;        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        dimension: number;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the slices representing data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a pie slice.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
    }
    /**
    * Defines the signature of delegates called to process pie slices.
    * @param {Number} dataIndex An integer index of data item in Series.
    * @param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
    * @param {Number} diameter The diameter of the pie.
    * @param {Number} startAngle The start angle of the slice' sector.
    * @param {Number} sweepAngle The sweep angle of the slice' sector.
    */
    interface ProcessSlice {
        (dataIndex: number, rect: Rect, diameter: number, startAngle: number, sweepAngle: number): void;
    }
    /**
    * @class Represents one-dimensional series defined by e list of data values and lists of
    * inner and outer labels, convenient for providing data to PieRenderer.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns a combination of InnerLabel and OuterLabel.
    * @property {MindFusion.Charting.Collections.List<String>} outerLabels Gets or sets the outer labels.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<Number>} detachedSlices Gets or sets indices of detached slices.
    */
    class PieSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the PieSeries class.
         * @param {MindFusion.Charting.Collections.List<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String>} outerLabels A list of outer labels.
         */
        constructor(values: List<number>, innerLabels: List<string>, outerLabels: List<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of the inner or outer label lists.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.SupportedLabels. Returns a combination of InnerLabel and OuterLabel.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the outer labels.
         */
        /**
         * Gets or sets the outer labels.
         */
        outerLabels: List<string>;
        /**
         * Gets or sets the inner labels.
         */
        /**
         * Gets or sets the inner labels.
         */
        innerLabels: List<string>;
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        detachedSlices: List<number>;
    }
    /**
    * @class A plot whose series are rendered relatively to a two-dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets default Axis instance used to map X data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets default Axis instance used to map Y data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this plot.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {Boolean} isZoomed Gets or sets a value indicating whether the user has zoomed into this plot.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan this plot.
    * @property {Boolean} verticalScroll Specifies whether the plot should scroll vertically when panned.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    * @property {EventDispatcher<EventArgs>} zoomChanged Raised when the user zooms into this plot's data range.
    */
    class Plot2D extends Plot {
        /**
         * Initializes a new instance of the Plot2D class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the PanController class.
         */
        createController(context: RenderContext): ComponentController;
        getDelta(): number; zoomChanged: EventDispatcher<EventArgs>; xAxes(renderContext: RenderContext): IEnumerable<Axis>;
        yAxes(renderContext: RenderContext): IEnumerable<Axis>;        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        xAxis: Axis;        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        yAxis: Axis;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        gridType: GridType;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinGrid: boolean;
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Plot.DrawGrid override. Draws the grid specified by GridType property.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;        /**
         * Zooms out from current data range.
         * @param {IEnumerable<Axis>} axes The axes whose ranges should be scaled.
         */
        zoomOut(axes: IEnumerable<Axis>): void;
        /**
         * Resets the zoom level to original axis ranges.
         */
        resetZoom(): void;
        /**
         * Gets or sets a value indicating whether the user has zoomed into this plot.
         */
        isZoomed: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        allowPan: boolean;
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        verticalScroll: boolean;        /**
         * Gets or sets the main color of the grid.
         */
        /**
         * Gets or sets the main color of the grid.
         */
        gridColor1: Color;        /**
         * Gets or sets the alternating color of the grid.
         */
        /**
         * Gets or sets the alternating color of the grid.
         */
        gridColor2: Color; zoomHistory: ZoomHistory;
    }
    /**
    * @class A plot used to draw graphics in polar coordinate system.
    * @property {Number} padding Gets or set padding space between the plot's border and series graphics.
    * @property {Number} startAngle Gets or set the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this plot.
    */
    class PolarPlot extends Plot {
        /**
         * Initializes a new instance of the PolarPlot class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the RotationController class.
         */
        createController(context: RenderContext): ComponentController;
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Rotates point around specified rotation center at specified angle.
         * @param {MindFusion.Drawing.Point} pointToRotate The point to rotate.
         * @param {MindFusion.Drawing.Point} centerPoint The rotation center.
         * @param {Number} angleInDegrees The rotation angle.
         * @returns {MindFusion.Drawing.Point}
         */
        rotatePoint(pointToRotate: Point, centerPoint: Point, angleInDegrees: number): Point;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        padding: number;        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        startAngle: number;        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        allowRotate: boolean;
    }
    /**
    * @class A SeriesRenderer that draws series as polygons in polar coordinate system,
    * where adjacent data points are at equal angular distances and radial
    * coordinates correspond to magnitude of data item values.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets a list of Series drawn by this RadarRenderer.
    * @property {Number} areaOpacity Gets or sets the opacity of radar polygons.
    */
    class RadarRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the RadarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Gets or sets a list of Series drawn by this RadarRenderer.
         */
        /**
         * Gets or sets a list of Series drawn by this RadarRenderer.
         */
        series: ObservableCollection<Series>;
        protected m_series: ObservableCollection<Series>;        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessRange} process A ProcessRange callback.
         * @remarks The signature of the ProcessRange delegate is as follows:
         * 'function(seriesIndex, points)'.
         * param {Number} seriesIndexAn integer index of series in Series list.
         * param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates
         * corresponding to data items in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleRanges(context: RenderContext, process: ProcessRange): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Returns the data value of specified series item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        data(seriesIndex: number, dataIndex: number): number;
        /**
         * SeriesRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Implement SeriesContainer.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
        /**
         * Gets the minimum value from all series located at specified index.
         * @param {Number} index An integer index of data element in the series.
         * @returns {Number} A number value representing the smallest data element.
         */
        getMinValue(index: number): number;
        /**
         * Gets the maximum value from all series located at specified index.
         * @param {Number} index An integer index of data element in the series.
         * @returns {Number} A number value representing the largest data element.
         */
        getMaxValue(index: number): number;        /**
         * Gets or sets the opacity of radar polygons.
         */
        /**
         * Gets or sets the opacity of radar polygons.
         */
        areaOpacity: number;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndexAn integer index of series in Series list.
    * @param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates
    * corresponding to data items in currently visible range.
    */
    interface ProcessRange {
        (seriesIndex: number, points: List<Point>): void;
    }
    /**
    * @class A base class for series renderers that draw in two dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets a list of Series drawn by this Renderer2D.
    * @property {MindFusion.Charting.Axis} xAxis Gets the X axis associated with this Renderer2D.
    * @property {MindFusion.Charting.Axis} yAxis Gets the Y axis associated with this Renderer2D.
    */
    class Renderer2D extends SeriesRenderer {
        /**
         * Initializes a new instance of the Renderer2D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        series: ObservableCollection<Series>;        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints1(context: RenderContext, process: ProcessPoint): void;
        domainAxis(context: RenderContext): Axis;
        imageAxis(context: RenderContext): Axis;
        domainSorted(seriesIndex: number): boolean;
        domainMin(s: Series): number;
        domainMax(s: Series): number;
        /**
         * Gets the domain axis coordinate (input value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        domainData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the image axis coordinate (output value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        imageData(seriesIndex: number, dataIndex: number): number;
        yDomain: boolean;
        plotLen(context: RenderContext): number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Boolean} frontToBack true if the series list should be enumerated from front to back, or false otherwise.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints(context: RenderContext, frontToBack: boolean, process: ProcessPoint): void;
        rangeMargin: number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoints} process A ProcessPoints callback.
         * @remarks The signature of the ProcessPoints delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
         * param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePointPairs(context: RenderContext, process: ProcessPoints): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessRange} process A ProcessRange callback.
         * @remarks The signature of the ProcessRange delegate is as follows:
         * 'function(seriesIndex, points)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleRanges(context: RenderContext, process: ProcessRange): void;
        /**
         * SeriesRenderer.StartMeasureData override. Called to reset measure
         * accumulators at the beginning of a measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        findDomainMin(): number;
        findDomainMax(): number;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): IEnumerable<Series>;
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        xAxis: Axis;        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        yAxis: Axis;        /**
         * SeriesRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        fitExponent(range: number): number;
        adjustForNonEmptyBars(context: RenderContext): void;
        /**
         * Gets the X value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        xData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the Y value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        yData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in X dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        xSorted(seriesIndex: number): boolean;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in Y dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        ySorted(seriesIndex: number): boolean;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.Axis} xAxis An Axis reference specifying the X axis.
         * @param {MindFusion.Charting.Axis} yAxis An Axis reference specifying the Y axis.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point} A Point containing Plot2D coordinates corresponding to specified data item.
         */
        getPixel(seriesIndex: number, dataIndex: number, xAxis: Axis, yAxis: Axis, component: Component): Point;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} valueX The X value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} xAxis The X Axis from which logical value is mapped to plot's actual width.
         * @param {Number} valueY The Y value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} yAxis The Y Axis from which logical value is mapped to plot's actual height.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point}
         */
        getPixel1(valueX: number, xAxis: Axis, valueY: number, yAxis: Axis, component: Component): Point;
        /**
         * Gets the maximum sum of X data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxXSum(): number;
        /**
         * Gets the maximum sum of Y data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxYSum(): number;
        /**
         * Gets the index of first data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of first visible data item.
         */
        getFirstInRange(s: number, context: RenderContext): number;
        getFirstInRange(s: number, axis: Axis): number;
        /**
         * Gets the index of last data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of last visible data item.
         */
        getLastInRange(s: number, context: RenderContext): number;
        getLastInRange(s: number, axis: Axis): number;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        midX(rect: Rect): number;
        midY(rect: Rect): number;
    }
    /**
    * Defines the signature of delegates called to process a data point one element at a time.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoint {
        (seriesIndex: number, dataIndex: number, point: Point): any;
    }
    /**
    * Defines the signature of delegates called to process data points in pairs.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
    * @param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoints {
        (seriesIndex: number, dataIndex: number, point1: Point, point2: Point): any;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
    */
    interface ProcessRange {
        (seriesIndex: number, points: List<Point>): any;
    }
    /**
     * @class Represents a controller that zooms into plot's data range.
     */
    class ZoomController extends Plot2DController {
        /**
         * Initializes a new instance of the ZoomController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
            * PlotController.OnMouseWheel override. Called when the user releases a mouse button.
            * @param {Number} x A number value specifying the horizontal position of mouse pointer.
            * @param {Number} y A number value specifying the vertical position of mouse pointer.
        * @param {Number} delta A number value specifying the direction and the amount of scrolling needed.
            */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * PlotController.drawInteraction override. Draws the currently selected data range
         * that that controller will zoom into when the user releases the mouse button.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: Graphics): void;
    }
    /**
     * @class A SeriesRenderer that draws annotations in its containing plot.
     */
    class AnnotationRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the AnnotationRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as annotations.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawIn3DPlot(): boolean;
    }
    /**
    * @class A SeriesRenderer that draws each series as an area in its containing plot.
    * @property {Number} areaOpacity Gets or sets the opacity of area polygons.
    */
    class AreaRenderer extends Renderer2D {
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Initializes a new instance of the AreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as areas.
         */
        constructor(series: ObservableCollection<Series>);        /**
         * Gets or sets the opacity of area polygons.
         */
        /**
         * Gets or sets the opacity of area polygons.
         */
        areaOpacity: number;
    }
    /**
    * @class A SeriesRenderer that draws overlaying bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    */
    class BarOverlayRenderer extends Renderer2D implements BarContainer {
        /**
         * Initializes a new instance of the BarOverlayRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as overlaying bars.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;        /**
         * Gets the ratio between widths of backmost and frontmost bars.
         * @returns {Number} 3
         */
        backToFrontRatio(): number;
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Boolean} frontToBack true to enumerate from front bar to back bar, or false otherwise.
         * @param {ProcessBars} process A ProcessBars callback.
         * @remarks The signature of the ProcessBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleOverlays(context: RenderContext, frontToBack: boolean, process: ProcessBars): void;        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        barSpacingRatio: number;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * seriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: Rect, labelRenderer: TextRenderer): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
    }
    /**
    * Defines the signature of delegates called to process bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
    */
    interface ProcessBars {
        (seriesIndex: number, dataIndex: number, bounds: Rect): void;
    }
    /**
    * @class A SeriesRenderer that draws bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    * @property {Number} sameIndexSpacingRatio Gets or sets the ratio of empty space to occupied space in bar groups drawn for data items as same index in each series.
    */
    class BarRenderer extends Renderer2D implements BarContainer {
        /**
         * Initializes a new instance of the BarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as bars.
         */
        constructor(series: ObservableCollection<Series>);        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessBars} process A ProcessBars callback.
         * @remarks The signature of the ProcessBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleBars(context: RenderContext, process: ProcessBars): void;        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        sameIndexSpacingRatio: number;        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        barSpacingRatio: number;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: Rect, labelRenderer: TextRenderer): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
    }
    /**
    * Defines the signature of delegates called to process bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
    */
    interface ProcessBars {
        (seriesIndex: number, dataIndex: number, bounds: Rect): void;
    }
    /**
    * @class A SeriesRenderer that draws bubbles representing data items in its containing plot.
    * @property {BubbleLabelAlignment} labelAlignment Gets or sets the label alignment.
    */
    class BubbleRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the BubbleRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as bubbles.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws bubbles representing data items in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bubble representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bubble.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bubble in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
        * Gets the label alignment.
        */
        /**
        * Sets the label alignment.
        */
        labelAlignment: BubbleLabelAlignment;
    }
    /**
    * Specifies the alignment of a label relative to its associated bubble.
    */
    enum BubbleLabelAlignment {
        /**
        * Indicates that the label is centered inside the bubble.
        */
        Center = 0,
        /**
        * Indicates that the label is positioned above the bubble.
        */
        Above = 1,
        /**
        * Indicates that the label is positioned below the bubble.
        */
        Below = 2,
        /**
        * Indicates that the label is positioned to the left of the bubble.
        */
        Left = 3,
        /**
        * Indicates that the label is positioned to the right of the bubble.
        */
        Right = 4,
    }
    /**
    * @class A SeriesRenderer that draws candlesticks in its containing plot.
    * @property {Number} openDimension Gets or sets the index of the dimension, containing open values.
    * @property {Number} closeDimension Gets or sets the index of the dimension, containing close values.
    * @property {Number} lowDimension Gets or sets the index of the dimension, containing low values.
    * @property {Number} highDimension Gets or sets the index of the dimension, containing high values.
    * @property {Number} candlestickWidth Gets or sets the width of the candlesticks.
    */
    class CandlestickRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the CandlestickRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Enumerates the candlesticks visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessCandlesticks} process A ProcessBars callback.
         * @remarks The signature of the ProcessCandlesticks delegate is as follows:
         * 'function(seriesIndex, dataIndex, points, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Point[]} points An array of four points containing wick ends' coordinates.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current candlestick.
         * The method is not expected to return a value.
         */
        enumVisibleCandlesticks(context: RenderContext, process: ProcessCandlesticks): void;        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: Rect, labelRenderer: TextRenderer): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a candlestick.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted candlestick in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;        /**
         * Gets or sets the index of the dimension, containing open values.
         */
        /**
         * Gets or sets the index of the dimension, containing open values.
         */
        openDimension: number;        /**
         * Gets or sets the index of the dimension, containing close values.
         */
        /**
         * Gets or sets the index of the dimension, containing close values.
         */
        closeDimension: number;        /**
         * Gets or sets the index of the dimension, containing low values.
         */
        /**
         * Gets or sets the index of the dimension, containing low values.
         */
        lowDimension: number;        /**
         * Gets or sets the index of the dimension, containing high values.
         */
        /**
         * Gets or sets the index of the dimension, containing high values.
         */
        highDimension: number;        /**
         * Gets or sets the width of the candlesticks.
         */
        /**
         * Gets or sets the width of the candlesticks.
         */
        candlestickWidth: number;
        /**
         * Gets the brush that should be used to fill the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(seriesIndex: number, dataIndex: number, context: RenderContext): Brush;
    }
    /**
    * Defines the signature of delegates called to process candlesticks.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Point[]} points An array of four points containing wick ends' coordinates.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current candlestick.
    */
    interface ProcessCandlesticks {
        (seriesIndex: number, dataIndex: number, points: Point[], bounds: Rect): void;
    }
    /**
     * @class A SeriesRenderer that draws series as polylines.
     */
    class LineRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the LineRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as polylines.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
    * @class A SeriesRenderer that draws pie-radars, where data items are represented
    * by circular sectors of equal central angles, and the sector corresponding to a data item has radius proportional to its value.
    * @property {Boolean} alignToAxis Gets or sets a value indicating whether sectors should be aligned to axes in the radar grid or centered around them.
    */
    class PieRadarRenderer extends RadarRenderer {
        /**
         * Initializes a new instance of the PieRadarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * RadarRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Enumerates the pie-radar sectors corresponding to each series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSectors} process A ProcessSectors callback.
         */
        enumSectors(context: RenderContext, process: ProcessSector): void;
        /**
         * RadarRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;        /**
         * Gets or sets a value indicating whether sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        /**
         * Gets or sets a value indicating whether sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        alignToAxis: boolean;
    }
    /**
    * Defines the signature of delegates called to process sectors generated for a series.
    *@param {Number} seriesIndex An integer index of series in Series list.
    *@param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates corresponding to data items.
    *@param {MindFusion.Charting.Collections.List<GraphicsPath>} paths A list of GraphicsPath objects representing pie-radar sectors.
    */
    interface ProcessSector {
        (seriesIndex: number, dataIndex: number, point: Point, rect: Rect, offset: number, startAngle: number, angle: number): void;
    }
    /**
    * @class A plot whose series are rendered relatively to a three-dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Axis} zAxis Gets or sets default Axis instance used to map Z data coordinates of series rendered inside this plot to the plot's pixels.
    */
    class Plot3D extends Plot2D {
        /**
         * Plot.Draw override. Draws a projection of 3D models
         * generated by contained Renderer3D objects.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        getDelta(): number;        /**
         * Gets or sets default Axis instance used to map Z data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        /**
         * Gets or sets default Axis instance used to map Z data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        zAxis: Axis;
    }
    /**
    * @class A plot containing radar-chart graphics.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Axis>} axes Gets the list of Axis objects representing ranges of variables represented in the radar chart.
    * @property {MindFusion.Charting.Axis} defaultAxis ets a default Axis object used when data item index does not have corresponding element in the Axes collection.
    * @property {RadarAxisOptions} axisOptions Gets a RadarAxisOptions object providing properties for customizing axis rendering in radar charts.
    * @property {RadarGridType} gridType Gets or sets the type of grid to draw in this plot.
    * @property {Number} gridDivisions Gets the number of concentric shapes to draw in the grid.
    * @property {Boolean} uniformScale Gets or sets a value indicating whether all axes should display same data range.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether the grid should display axis coordinates.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    */
    class RadarPlot extends PolarPlot {
        /**
         * Initializes a new instance of the RadarPlot class.
         */
        constructor();        /**
         * Gets the list of Axis objects representing ranges
         * of variables represented in the radar chart.
         */
        axes: ObservableCollection<Axis>;
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        defaultAxis: Axis;
        /**
         * Gets a RadarAxisOptions object providing properties for customizing
         * axis rendering in radar charts.
         */
        /**
         * Gets a RadarAxisOptions object providing properties for customizing
         * axis rendering in radar charts.
         */
        axisOptions: RadarAxisOptions;        /**
         * Gets the Axis representing the range for specified data variable index.
         * @param {Number} index An integer index of data items in series.
         * @returns {MindFusion.Charting.Axis} The associated Axis.
         */
        getEffectiveAxis(index: number): Axis;
        getRadius(): {
            coef: number;
            radius: number;
        };
        /**
         * Plot.DrawGrid override. Draws spiderweb ot radial grid.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         * Plot.StartMeasureData override. Called in the beginning of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        gridType: RadarGridType;
        /**
         * Gets the number of concentric shapes to draw in the grid.
         */
        /**
         * Gets the number of concentric shapes to draw in the grid.
         */
        gridDivisions: number;
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        uniformScale: boolean;
        /**
         * Gets or sets a value indicating whether the grid should display axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether the grid should display axis coordinates.
         */
        showCoordinates: boolean;
        /**
         * Gets or sets the main color of the grid.
         */
        /**
         * Gets or sets the main color of the grid.
         */
        gridColor1: Color;        /**
         * Gets or sets the alternating color of the grid.
         */
        /**
         * Gets or sets the alternating color of the grid.
         */
        gridColor2: Color; axesCount: number;
    }
    /**
    * @class A SeriesRenderer that draws scatter in its containing plot.
    * @property {ScatterType} shape Gets or sets the type of scatter shapes.
    * @property {Number} shapeSize Gets or sets the size of scatter shapes.
    */
    class ScatterRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the ScatterRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as scatter.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumPoints(context: RenderContext, process: ProcessPoint): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the scatter representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted shape in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;        /**
         * Gets or sets the size of scatter shapes.
         */
        /**
         * Gets or sets the size of scatter shapes.
         */
        shapeSize: number;        /**
         * Gets or sets the type of scatter shapes.
         */
        /**
         * Gets or sets the type of scatter shapes.
         */
        shape: ScatterType;
        drawIn3DPlot(): boolean;
    }
    /**
     * @class A base SeriesRenderer for stacked graphics.
     */
    class StackRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackPoint} process A ProcessStackPoint callback.
         * @remarks The signature of the ProcessStackPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, stackPoint, prevPoint)'.
         * param {Number} seriesIndexAn integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Point} stackPoint A Point instance containing the Plot2D coordinates corresponding to current data item.
         * param {MindFusion.Drawing.Point} prevPoint A Point instance containing the Plot2D coordinates corresponding to previous data item.
         * The method is not expected to return a value.
         */
        enumVisibleStackPoints(context: RenderContext, process: ProcessStackPoint): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackRange} process A ProcessStackRange callback.
         * @remarks The signature of the ProcessStackRange delegate is as follows:
         * 'function(seriesIndex, points, prevPoints)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the Plot2D coordinates
         * corresponding to data items in currently visible range.
         * param {MindFusion.Charting.Collections.List<Point>} prevPoints A list of Point values containing the Plot2D coordinates
         * corresponding to previous series in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleStackRanges(context: RenderContext, process: ProcessStackRange): void;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.Axis} xAxis An Axis reference specifying the X axis.
         * @param {MindFusion.Charting.Axis} yAxis An Axis reference specifying the Y axis.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point} A Point containing Plot2D coordinates corresponding to specified data item.
         */
        getPixel(seriesIndex: number, dataIndex: number, xAxis: Axis, yAxis: Axis, component: Component): Point;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the stack representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a data point.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
    }
    /**
    * Defines the signature of delegates called to process a data point one element at a time.
    * @param {Number} seriesIndexAn integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Point} stackPoint A Point instance containing the Plot2D coordinates corresponding to current data item.
    * @param {MindFusion.Drawing.Point} prevPoint A Point instance containing the Plot2D coordinates corresponding to previous data item.
    */
    interface ProcessStackPoint {
        (seriesIndex: number, dataIndex: number, stackPoint: Point, prevPoint: Point): void;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the Plot2D coordinates
    * corresponding to data items in currently visible range.
    * @param {MindFusion.Charting.Collections.List<Point>} prevPoints A list of Point values containing the Plot2D coordinates
    * corresponding to previous series in currently visible range.
    */
    interface ProcessStackRange {
        (seriesIndex: number, points: List<Point>, prevPoints: List<Point>): void;
    }
    /**
    * @class A SeriesRenderer that draws series as filled steps between data points.
    * @property {Number} areaOpacity ets or sets the opacity of area polygons.
    */
    class StepAreaRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StepAreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;        /**
         * Gets or sets the opacity of area polygons.
         */
        /**
         * Gets or sets the opacity of area polygons.
         */
        areaOpacity: number;
    }
    /**
     * @class A SeriesRenderer that draws series as steps between data points.
     */
    class StepRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StepRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
     * @class A SeriesRenderer that draws stacked areas in its containing plot.
     */
    class AreaStackRenderer extends StackRenderer {
        /**
         * Initializes a new instance of the AreaStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked areas.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
     * @class A SeriesRenderer that draws a row of 3D bars for each series.
     */
    class BarOverlayRenderer3D extends BarOverlayRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarOverlayRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as rows of bars.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * BarOverlayRenderer.BackToFrontRatio override. Gets the ratio
         * between widths of backmost and frontmost bars.
         * @returns {Number} 1.
         */
        backToFrontRatio(): number;
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
    /**
     * @class A SeriesRenderer that draws 3D bars in its containing plot.
     */
    class BarRenderer3D extends BarRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as 3D bars.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
    /**
    * @class A SeriesRenderer that draws stacked bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    */
    class BarStackRenderer extends StackRenderer implements BarContainer {
        /**
         * Initializes a new instance of the BarStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked bars.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackBars} process A ProcessStackBars callback.
         * @remarks The signature of the ProcessStackBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleStackBars(context: RenderContext, process: ProcessStackBars): void;        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        barSpacingRatio: number;
        /**
         * StackRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: Rect, labelRenderer: TextRenderer): void;
        static offset(rect: Rect, dx: number, dy: number): Rect;
        /**
         * StackRenderer.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
    }
    /**
    * Defines the signature of delegates called to process stacked bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
    */
    interface ProcessStackBars {
        (seriesIndex: number, dataIndex: number, bounds: Rect): void;
    }
    /**
     * @class A SeriesRenderer that draws each series as an area with curved boundaries in its containing plot.
     */
    class CurveAreaRenderer extends AreaRenderer {
        /**
         * Initializes a new instance of the CurveAreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as areas.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * AreaRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
     * @class A SeriesRenderer that draws stacked areas in its containing plot.
     */
    class CurveAreaStackRenderer extends StackRenderer {
        /**
         * Initializes a new instance of the CurveAreaStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked areas.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
     * @class A SeriesRenderer that draws series as a cardinal spline.
     */
    class CurveRenderer extends LineRenderer {
        /**
         * Initializes a new instance of the CurveRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as a cardinal spline.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * LineRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
    /**
     * @class A SeriesRenderer that draws scatter in radar plots.
     */
    class RadarScatterRenderer extends ScatterRenderer {        /**
         * Initializes a new instance of the RadarScatterRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as scatter.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * ScatterRenderer.EnumPoints override. Enumerates the data values
         * of rendered series mapped to plot's 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumPoints(context: RenderContext, process: ProcessPoint): void;
    }
    /**
     * @class A SeriesRenderer that draws stacked 3D bars in its containing plot.
     */
    class BarStackRenderer3D extends BarStackRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarStackRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked bars.
         */
        constructor(series: ObservableCollection<Series>);
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
}
export declare module MindFusion.Charting.Controls {
    import TextComponent = MindFusion.Charting.Components.TextComponent;
    import GridPanel = MindFusion.Charting.Components.GridPanel;
    import Component = MindFusion.Charting.Components.Component;
    import LayoutAlignment = MindFusion.Charting.Components.LayoutAlignment;
    import StackPanel = MindFusion.Charting.Components.StackPanel;
    import Panel = MindFusion.Charting.Components.Panel;
    import RootControl = MindFusion.Charting.Components.RootControl;
    import EventDispatcher = MindFusion.Charting.Common.EventDispatcher;
    import ObservableCollection = MindFusion.Charting.Collections.ObservableCollection;
    import List = MindFusion.Charting.Collections.List;
    import FontStyle = MindFusion.Charting.Drawing.FontStyle;
    import ImageAlign = MindFusion.Charting.Drawing.ImageAlign;
    import Graphics = MindFusion.Charting.Drawing.Graphics;
    import Color = MindFusion.Charting.Drawing.Color;
    import Brush = MindFusion.Charting.Drawing.Brush;
    import Pen = MindFusion.Charting.Drawing.Pen;
    import ComponentVisitor = MindFusion.Charting.Components.ComponentVisitor;
    class AdjustRangesVisitor extends ComponentVisitor {
        constructor(context: RenderContext);
        visitPlot(plot: Plot): void;
    }
    /**
    * @class A control that contains multiple chart plots and gauges and manages their layout.
    * @property {Panel} rootPanel Gets the root Panel in the hierarchy of dashboard components.
    * @property {LayoutBuilder} layoutBuilder Gets a LayoutBuilder instance that provides shortcut methods for building fragments of dashboard's user interface.
    * @property {StackPanel} layoutPanel Gets a Panel containing dashboard components that should participate in layout measurements and be arranged relatively to each other.
    * @property {Theme} theme Gets or sets a Theme specifying appearance of dashboard elements.
    * @property {MindFusion.Charting.Drawing.Color} backColor Gets or sets dashboard's back color.
    * @property {String} backgroundImageLocation Gets or sets dashboard's background image.
    * @property {Boolean} backgroundImageAutoSize Gets or sets whether auto-size mode is enabled for BackgroundImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} backgroundImageAlign Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
    * @property {Boolean} allowZoom Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
    * @property {String} licenseKey Gets or sets the license key of the control.
    * @property {String} licenseLocation Gets or sets the path to the license file.
    * @property {EventDispatcher<HitResult>} dataItemClicked Raised when the user clicks on a data item inside a plot.
    */
    class Dashboard implements RootControl {        /**
        * Initializes a new instance of the Dashboard class.
            * @param {HTMLCanvasElement} element The canvas DOM element to associate this dashboard with.
        */
        constructor(element: HTMLCanvasElement);        /**
        * Gets the root Panel in the hierarchy of dashboard components.
        */
        /**
        * Gets the root Panel in the hierarchy of dashboard components.
        */
        rootPanel: Panel;        /**
        * Gets a LayoutBuilder instance that provides shortcut methods for
        * building fragments of dashboard's user interface.
        */
        /**
        * Gets a LayoutBuilder instance that provides shortcut methods for
        * building fragments of dashboard's user interface.
        */
        layoutBuilder: LayoutBuilder;        /**
        * Gets a Panel containing dashboard components that should participate
        * in layout measurements and be arranged relatively to each other.
        */
        /**
        * Gets a Panel containing dashboard components that should participate
        * in layout measurements and be arranged relatively to each other.
        */
        layoutPanel: StackPanel;
        /**
        * Control.OnResize override. Invalidates the layout of child components and runs a new layout pass.
        * @param {EventArgs} e An EventArgs instance.
        */
        onResize(e: EventArgs): void;
        /**
        * Binds the chart to current DataSource.
        */
        dataBind(): void;
        dataBindInternal(): void;
        onUnbind(): void;
        onBind(): void;
        /**
        * Draws the dashboard on specified Graphics surface.
        * @param {MindFusion.Drawing.Graphics} g A Graphics instance.
        * @param {MindFusion.Drawing.Rect} layoutRect Current layout rectangle.
        * @param {MindFusion.Drawing.Rect} clipRect Current clip rectangle.
        */
        draw(): void;        /**
        * Creates a RenderContext instance.
        * @param {MindFusion.Drawing.Graphics} graphics A Graphics surface where dashboard elements should be rendered.
        * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
        * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
        */
        createRenderContext(graphics: Graphics, clipRect: Rect): RenderContext; dataItemClicked: EventDispatcher<HitResult>;        /**
        * Raises the DataItemClicked event
        * if the user has clicked on data element in a plot.
        * @param {MouseEvent} e A MouseEvent instance.
        */
        protected onClick(e: MouseEvent): void;
        /**
        * Handles the HTMLCanvasElement mousedown event.
        * @param {MouseEvent} e A MouseEvent instance.
        */
        protected onMouseDown(e: MouseEvent): void;        /**
        * Handles the HTMLCanvasElement mousemove event.
        * @param {MouseEvent} e A MouseEvent instance.
        */
        onMouseMove(e: MouseEvent): void; tooltipBrush: Brush;
        tooltipPen: Pen;        /**
        * Handles the HTMLCanvasElement mouseup event.
        * @param {MouseEvent} e A MouseEvent instance.
        */
        onMouseUp(e: MouseEvent): void;
        protected onMouseLeave(e: MouseEvent): void;        /**
        * Implements RootControl.InvalidateLayout. Invalidates layout of specified component.
        * @param {Components.Component} panel The component to invalidate.
        */
        invalidateLayout(panel: Component): void;
        /**
        * Implements RootControl.InvalidateLayout. Invalidates the specified region of a component.
        * @param {RectD} [rect] The area to invalidate and redraw.
        * @param {Components.Component} [panel] The reference Component.
        */
        invalidate(rect?: Rect, panel?: Component): void;        /**
        * Gets or sets a Theme specifying appearance of dashboard elements.
        */
        /**
        * Gets or sets a Theme specifying appearance of dashboard elements.
        */
        theme: Theme;        /**
        * Gets or sets dashboard's back color.
        */
        /**
        * Gets or sets dashboard's back color.
        */
        backColor: Color;        /**
        * Gets or sets dashboard's background image.
        */
        /**
        * Gets or sets dashboard's background image.
        */
        backgroundImageLocation: string;
        /**
        * Gets or sets whether auto-size mode is enabled for BackgroundImage.
        */
        /**
        * Gets or sets whether auto-size mode is enabled for BackgroundImage.
        */
        backgroundImageAutoSize: boolean;
        /**
        * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
        */
        /**
        * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
        */
        backgroundImageAlign: ImageAlign;        /**
        * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
        */
        /**
        * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
        */
        allowZoom: boolean;
        bindingsValid: boolean;
        /**
        * Gets or sets the path to the license file.
        */
        /**
        * Gets or sets the path to the license file.
        */
        licenseLocation: string;        /**
        * Gets or sets the license key of the control.
        */
        /**
        * Gets or sets the license key of the control.
        */
        licenseKey: string;
    }
    /**
    * @class A base class for chart controls.
    * @property {MindFusion.Charting.Components.Panel} plotPanel Gets the Panel that contains the chart's plot and associated elements.
    * @property {MindFusion.Charting.Collections.List<Series>} dataBoundSeries Contains series generated from DataSource data.
    * @property {Plot} plot Gets the chart's Plot component.
    * @property {GridPanel} chartPanel Gets or sets the GridPanel that contains the chart's PlotPanel and axis renderers.
    * @property {String} title Gets or sets the title of this chart.
    * @property {Margins} titleMargin Gets or sets the margin space around Title.
    * @property {String} titleFontName Gets or sets the name of Font used to draw chart's Title.
    * @property {Number} titleFontSize Gets or sets the size of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw chart's Title.
    * @property {String} subtitle Gets or sets the sub-title of this chart.
    * @property {Margins} subtitleMargin Gets or sets the margin space around Subtitle.
    * @property {String} subtitleFontName Gets or sets the name of Font used to draw chart's Subtitle.
    * @property {Number} subtitleFontSize Gets or sets the size of Font used to draw chart's Subtitle.
    * @property {MindFusion.Charting.Drawing.FontStyle} subtitleFontStyle Gets or sets the style of Font used to draw chart's Subtitle.
    * @property {MindFusion.Charting.Drawing.Brush} subtitleBrush Gets or sets the Brush used to draw chart's Subtitle.
    * @property {String} plotImageLocation Gets or sets the Image drawn inside chart's plot area.
    * @property {Boolean} plotImageAutoSize Gets or sets whether auto-size mode is enabled for PlotImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} plotImageAlign Gets or sets the alignment of PlotImage relatively to the plot boundaries.
    * @property {String} legendTitle Gets or sets the legend title.
    * @property {Boolean} showLegendTitle Gets a value indicating whether to display the legend title.
    * @property {Number} legendSpacing Gets the distance between adjacent entries in the legend.
    * @property {LayoutAlignment} legendHorizontalAlignment Gets or sets the horizontal alignment of the legend.
    * @property {LayoutAlignment} legendVerticalAlignment Gets or sets the vertical alignment of the legend.
    * @property {Margins} legendMargin Gets or sets the margin space around the legend.
    * @property {Boolean} showLegend Gets or sets a value indicating whether the chart should draw a legend.
    * @property {LegendRenderer} legendRenderer Gets the LegendRenderer component used to draw the chart's legend.
    * @property {Boolean} showZoomWidgets Gets or sets a value indicating whether the plot should show zoom buttons.
    * @property {Boolean} showDataLabels Gets or sets what kind of labels from data series should be drawn.
    * @property {Boolean} showHighlight Gets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets a value indicating whether to show tooltips.
    * @property {Boolean} allowMoveLegend Gets or sets a value indicating whether users are allowed to move the legend.
    * @property {Object} dataSource Gets or sets the chart's data source.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xDataFields Gets or sets the names of fields in the data source whose values are assigned to X coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yDataFields Gets or sets the names of fields in the data source whose values are assigned to Y coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zDataFields Gets or sets the names of fields in the data source whose values are assigned to Z coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} innerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as inner labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} outerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as outer labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} toolTipsDataFields Gets or sets the names of fields in the data source whose values are shown as tooltips of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as X axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Y axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Z axis labels of rendered graphical elements.
    */
    abstract class Chart extends Dashboard {
        /**
         * Initializes a new instance of the Chart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {SeriesRenderer} [renderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, renderer?: SeriesRenderer);
        /**
         * Gets the chart's Plot component.
         */
        plot: Plot;        /**
         * Gets the Panel that contains the chart's plot and associated elements.
         */
        plotPanel: Panel;        /**
         * Contains series generated from DataSource data.
         */
        /**
         * Contains series generated from DataSource data.
         */
        dataBoundSeries: List<Series>;        /**
         * Gets the GridPanel that contains the chart's PlotPanel and axis renderers.
         */
        /**
         * Gets the GridPanel that contains the chart's PlotPanel and axis renderers.
         */
        chartPanel: GridPanel; titlePanel: TextComponent; subtitlePanel: TextComponent;        /**
         * Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of Plot -derived class.
         */
        createPlot(): Plot;
        /**
         * Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Control.OnPaddingChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onPaddingChanged(e: EventArgs): void;
        /**
         * Control.OnSizeChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onSizeChanged(e: EventArgs): void;        /**
         * Gets or sets the title of this chart.
         */
        /**
         * Gets or sets the title of this chart.
         */
        title: string;
        /**
         * Gets or sets the margin space around Title.
         */
        /**
         * Gets or sets the margin space around Title.
         */
        titleMargin: Margins;
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        titleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        titleBrush: Brush;
        /**
         * Gets or sets the sub-title of this chart.
         */
        /**
         * Gets or sets the sub-title of this chart.
         */
        subtitle: string;
        /**
         * Gets or sets the margin space around Subtitle.
         */
        /**
         * Gets or sets the margin space around Subtitle.
         */
        subtitleMargin: Margins;
        /**
         * Gets or sets the name of Font used to draw chart's Subtitle.
         */
        /**
         * Gets or sets the name of Font used to draw chart's Subtitle.
         */
        subtitleFontName: string;
        /**
         * Gets or sets the size of Font used to draw chart's Subtitle.
         */
        /**
         * Gets or sets the size of Font used to draw chart's Subtitle.
         */
        subtitleFontSize: number;
        /**
         * Gets or sets the style of Font used to draw chart's Subtitle.
         */
        /**
         * Gets or sets the style of Font used to draw chart's Subtitle.
         */
        subtitleFontStyle: FontStyle;
        /**
         * Gets or sets the Brush used to draw chart's Subtitle.
         */
        /**
         * Gets or sets the Brush used to draw chart's Subtitle.
         */
        subtitleBrush: Brush;
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        plotImageLocation: string;
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        plotImageAutoSize: boolean;
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        plotImageAlign: ImageAlign;
        /**
         * Gets the default SeriesRenderer for this chart.
         */
        seriesRenderer: SeriesRenderer;
        protected m_seriesRenderer: SeriesRenderer;
        /**
         * Gets or sets the legend title.
         */
        /**
         * Gets or sets the legend title.
         */
        legendTitle: string;
        /**
        * Gets a value indicating whether to display the legend title.
        */
        /**
        * Sets a value indicating whether to display the legend title.
        */
        showLegendTitle: boolean;
        /**
        * Gets the distance between adjacent entries in the legend.
        */
        /**
        * Sets the distance between adjacent entries in the legend.
        */
        legendSpacing: number;
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        legendHorizontalAlignment: LayoutAlignment;
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        legendVerticalAlignment: LayoutAlignment;
        /**
         * Gets or sets the margin space around the legend.
         */
        /**
         * Gets or sets the margin space around the legend.
         */
        legendMargin: Margins;
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        showLegend: boolean;
        /**
         * Gets the LegendRenderer component used to draw the chart's legend.
         */
        legendRenderer: LegendRenderer;
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        showZoomWidgets: boolean;
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        showDataLabels: LabelKinds;
        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        showHighlight: boolean;
        /**
        * Gets a value indicating whether to show tooltips.
        */
        /**
        * Sets a value indicating whether to show tooltips.
        */
        showToolTips: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        allowMoveLegend: boolean;
        static getField(fields: List<string>, i: number): string;
        dataBindInternal(): void;
        /**
         * Gets or sets the chart's data source.
         */
        /**
         * Gets or sets the chart's data source.
         */
        dataSource: Object;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        xDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        yDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        zDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        innerLabelsDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        outerLabelsDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        toolTipsDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        xAxisLabelsDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        yAxisLabelsDataFields: ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        zAxisLabelsDataFields: ObservableCollection<string>;
    }
    /**
    * @class A control used to draw funnel charts.
    * @property {Series} series Gets or sets the series whose data is drawn in this chart.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    * @property {Number} segmentSpacing Gets or sets the spacing between segments.
    * @property {Number} bottomBase Gets or sets the size of the funnel base.
    */
    class FunnelChart extends Chart {
        /**
         * Initializes a new instance of the FunnelChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {FunnelRenderer} [seriesRenderer] A FunnelRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: FunnelRenderer);
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        series: Series;
        /**
     * Gets or sets the dimension index that should be used to read data from the Series.
     */
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        dimension: number;
        /**
         * Gets or sets the spacing between segments.
         */
        /**
         * Gets or sets the spacing between segments.
         */
        segmentSpacing: number;
        /**
         * Gets or sets the size of the funnel base.
         */
        /**
         * Gets or sets the size of the funnel base.
         */
        bottomBase: number;
    }
    /**
    * @class A control used to draw pie charts.
    * @property {Series} series Gets or sets the series whose data is drawn in this chart.
    * @property {Number} startAngle Gets or sets the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this chart.
    * @property {Number} chartPadding Gets or set padding space between the plot's border and series graphics.
    * @property {Boolean} doughnut Gets or sets a value indicating whether the pie should be rendered as a doughnut.
    * @property {List<Number>} detachedSlices Gets or sets indices of detached slices.
    */
    class PieChart extends Chart {
        /**
         * Initializes a new instance of the PieChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {PieRenderer} [seriesRenderer] A PieRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: PieRenderer);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the PolarPlot class.
         */
        createPlot(): Plot;
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        series: Series;
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        startAngle: number;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        allowRotate: boolean;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        chartPadding: number;
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        doughnut: boolean;
        /**
         * Gets or sets indices of detached slices.
         */
        /**
         * Gets or sets indices of detached slices.
         */
        detachedSlices: List<number>;
    }
    /**
    * @class A base class for charts that display X and Y axes.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets the list of series whose data is drawn in this chart.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this chart.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets an Axis object representing horizontal data range.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets an Axis object representing vertical data range.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} annotations Gets or sets the list of series whose labels are drawn as annotations.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan the chart's plot.
    * @property {Boolean} showScatter Gets or sets a value indicating whether the chart should render scatter shapes.
    * @property {Boolean} showXCoordinates Gets or sets a value indicating whether to show X axis coordinates.
    * @property {Boolean} showYCoordinates Gets or sets a value indicating whether to show Y axis coordinates.
    * @property {Boolean} showXTicks Gets or sets a value indicating whether to show X axis ticks.
    * @property {Boolean} showYTicks Gets or sets a value indicating whether to show Y axis ticks.
    * @property {Number} xAxisTickLength Gets or sets the length of X axis ticks.
    * @property {Number} yAxisTickLength Gets or sets the length of Y axis ticks.
    * @property {Number} xAxisLabelRotationAngle Gets the rotation angle of the X axis labels.
    * @property {Number} yAxisLabelRotationAngle Gets the rotation angle of the Y axis labels.
    */
    abstract class BiaxialChart extends Chart {        /**
         * Initializes a new instance of the BiaxialChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {Renderer2D} [seriesRenderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: Renderer2D);        /**
         * Dashboard.CreateRenderContext override. Creates a RenderContext instance.
         * @param {MindFusion.Drawing.Graphics} graphics An Graphics surface where dashboard elements should be rendered.
         * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
         * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
         */
        createRenderContext(graphics: Graphics, clipRect: Rect): RenderContext2D;
        onUnbind(): void;
        onBind(): void;
        /**
         * Chart.zoomOut override. Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Chart.resetZoom override. Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        gridType: GridType;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinGrid: boolean;
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        xAxis: Axis;
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        yAxis: Axis;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        annotations: ObservableCollection<Series>;
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        showScatter: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        allowPan: boolean;
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        showXCoordinates: boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        showYCoordinates: boolean;
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        showXTicks: boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        showYTicks: boolean;
        /**
        * Gets the length of X axis ticks.
        */
        /**
        * Sets the length of X axis ticks.
        */
        xAxisTickLength: number;
        /**
        * Gets the length of Y axis ticks.
        */
        /**
        * Sets the length of Y axis ticks.
        */
        yAxisTickLength: number;
        /**
         * Gets the rotation angle of the X axis labels.
         */
        /**
         * Sets the rotation angle of the X axis labels.
         */
        xAxisLabelRotationAngle: number;
        /**
         * Gets the rotation angle of the X axis labels.
         */
        /**
         * Sets the rotation angle of the Y axis labels.
         */
        yAxisLabelRotationAngle: number;
    }
    /**
     * @class Provides shortcut methods for building fragments of dashboard's user interface.
     */
    class LayoutBuilder {
        /**
         * Initializes a new instance of the LayoutBuilder class.
         * @param {Dashboard} board A Dashboard instance.
         */
        constructor(board: Dashboard);        /**
         * Creates a two-row stack panel whose second row is a horizontal stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1 The component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd1By2RowLayout(row1: Component, row2col1: Component, row2col2: Component): StackPanel;
        /**
         * Creates a two-row stack panel whose first row is a horizontal stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2 The component on first row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By1RowLayout(row1col1: Component, row1col2: Component, row2: Component): StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} col1row1 The first component in first column.
         * @param {Component} col1row2 The second component in first column.
         * @param {Component} col2 The component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By1ColumnLayout(col1row1: Component, col1row2: Component, col2: Component): StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} col1 The component in first column.
         * @param {Component} col2row1 The first component in second column.
         * @param {Component} col2row2 The second component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd1By2ColumnLayout(col1: Component, col2row1: Component, col2row2: Component): StackPanel;
        /**
         * Creates horizontal stack panels for components on same row
         * and adds them to a vertical stack panel.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By2Layout(row1col1: Component, row1col2: Component, row2col1: Component, row2col2: Component): StackPanel;
        /**
         * Creates horizontal stack panels for components on same row
         * and adds them to a vertical stack panel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By2Layout(row1col1: Component, row1col2: Component, row2col1: Component, row2col2: Component): StackPanel;
        /**
         * Creates a two-row stack panel whose second row is a horizontal stack of two components.
         * @param {Component} row1 The component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create1By2RowLayout(row1: Component, row2col1: Component, row2col2: Component): StackPanel;
        /**
         * Creates a two-row stack panel whose first row is a horizontal stack of two components.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2 The component on first row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By1RowLayout(row1col1: Component, row1col2: Component, row2: Component): StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * @param {Component} col1row1 The first component in first column.
         * @param {Component} col1row2 The second component in first column.
         * @param {Component} col2 The component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By1ColumnLayout(col1row1: Component, col1row2: Component, col2: Component): StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * @param {Component} col1 The component in first column.
         * @param {Component} col2row1 The first component in second column.
         * @param {Component} col2row2 The second component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        create1By2ColumnLayout(col1: Component, col2row1: Component, col2row2: Component): StackPanel;
        /**
         * Creates a StackPanel for each array of components and
         * adds it to a parent StackPanel with opposite orientation.
         * @param {Boolean} horizontal The orientation of the parent panel.
         * @param {Component[]} c1 The first stack of components.
         * @param {Component[]} c2 The second stack of components.
         * @param {Component[]} c3 The third stack of components.
         * @returns {StackPanel} A StackPanel instance.
         */
        createLayout(horizontal: boolean, c1: Component[], c2: Component[], c3: Component[]): StackPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plot.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotAndAxes(plot: Plot2D, top: XAxisRenderer[], left: YAxisRenderer[], bottom: XAxisRenderer[], right: YAxisRenderer[]): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithTopAndLeftAxes(plot: Plot2D, top: XAxisRenderer, left: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithTopAndRightAxes(plot: Plot2D, top: XAxisRenderer, right: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithBottomAndRightAxes(plot: Plot2D, bottom: XAxisRenderer, right: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithBottomAndLeftAxes(plot: Plot2D, bottom: XAxisRenderer, left: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plot.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotAndAxes(plot: Plot2D, top: XAxisRenderer[], left: YAxisRenderer[], bottom: XAxisRenderer[], right: YAxisRenderer[]): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithTopAndLeftAxes(plot: Plot2D, top: XAxisRenderer, left: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithTopAndRightAxes(plot: Plot2D, top: XAxisRenderer, right: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithBottomAndLeftAxes(plot: Plot2D, bottom: XAxisRenderer, left: YAxisRenderer): GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithBottomAndRightAxes(plot: Plot2D, bottom: XAxisRenderer, right: YAxisRenderer): GridPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: XAxisRenderer[], plots: Plot2D[], bottom: XAxisRenderer[]): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: XAxisRenderer, plot1: Plot2D, plot2: Plot2D): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: XAxisRenderer, plots: Plot2D[], bottom: XAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at top side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: XAxisRenderer, plot1: Plot2D, plot2: Plot2D, plot3: Plot2D, bottom: XAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: XAxisRenderer[], plots: Plot2D[], bottom: XAxisRenderer[]): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: XAxisRenderer, plot1: Plot2D, plot2: Plot2D): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at top side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: XAxisRenderer, plot1: Plot2D, plot2: Plot2D, plot3: Plot2D, bottom: XAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: XAxisRenderer, plots: Plot2D[], bottom: XAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: YAxisRenderer[], plots: Plot2D[], right: YAxisRenderer[]): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: YAxisRenderer, plot1: Plot2D, plot2: Plot2D): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: YAxisRenderer, plot1: Plot2D, plot2: Plot2D, plot3: Plot2D, right: YAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns A StackPanel instance.
         */
        createAndAddRowLayout(left: YAxisRenderer, plots: Plot2D[], right: YAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: YAxisRenderer[], plots: Plot2D[], right: YAxisRenderer[]): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: YAxisRenderer, plot1: Plot2D, plot2: Plot2D): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: YAxisRenderer, plot1: Plot2D, plot2: Plot2D, plot3: Plot2D, right: YAxisRenderer): StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: YAxisRenderer, plots: Plot2D[], right: YAxisRenderer): StackPanel;
    }
    /**
    * @class A control used to draw line charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {LineType} lineType Gets or sets what type of line segments to draw between data points.
    */
    class LineChart extends BiaxialChart {
        /**
         * Initializes a new instance of the LineChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {LineRenderer} [seriesRenderer] A LineRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: LineRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        lineType: LineType;
    }
    class MeasureRangesVisitor extends ComponentVisitor {
        constructor(context: RenderContext);
        visitPlot(plot: Plot): void;
    }
    class StartMeasureVisitor extends ComponentVisitor {
        constructor(context: RenderContext);
        visitPlot(plot: Plot): void;
    }
    /**
    * @class A control used to draw bar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BarLayout} barLayout Gets or sets how to arrange bars when rendering multiple series.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between bars to space occupied by bars.
    */
    class BarChart extends BiaxialChart {
        /**
        * Initializes a new instance of the BarChart class.
        * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
        * @param {BarLayout} [barLayout] A member of the BarLayout enumeration.
        * @param {Renderer2D} [seriesRenderer] A Renderer2D used to draw chart's data series.
        */
        constructor(element: HTMLCanvasElement, barLayout?: BarLayout, seriesRenderer?: Renderer2D);
        static createRenderer(series: ObservableCollection<Series>, layout: BarLayout, horizontalBars: boolean): Renderer2D;
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the Plot2D class.
         */
        createPlot(): Plot;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        barLayout: BarLayout;        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        barSpacingRatio: number;
    }
    /**
    * @class A control used to draw bubble charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BubbleLabelAlignment} labelAlignment Gets or sets the alignment of labels relative to their associated bubbles.
    */
    class BubbleChart extends BiaxialChart {
        /**
         * Initializes a new instance of the BubbleChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {BubbleRenderer} [seriesRenderer] A LineRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: BubbleRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
        * Gets the alignment of labels relative to their associated bubbles.
        */
        /**
        * Sets the alignment of labels relative to their associated bubbles.
        */
        labelAlignment: BubbleLabelAlignment;
    }
    /**
    * @class A control used to draw candlestick charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {Number} candlestickWidth Gets or sets the width of the candlesticks.
    */
    class CandlestickChart extends BiaxialChart {
        /**
         * Initializes a new instance of the CandlestickChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {CandlestickRenderer} [seriesRenderer] A CandlestickRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: CandlestickRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets the width of the candlesticks.
         */
        /**
         * Gets or sets the width of the candlesticks.
         */
        candlestickWidth: number;
    }
    /**
    * @class A control used to draw radar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets the list of series whose data is drawn in this chart.
    * @property {Boolean} showScatter Gets or sets a value indicating whether the chart should render scatter shapes.
    * @property {RadarType} radarType Gets or sets the type of radar graphics drawn in this chart.
    * @property {RadarGridType} gridType Gets or sets the type of grid drawn in this chart.
    * @property {MindFusion.Charting.Axis} defaultAxis Gets a default Axis object used when data item index does not have corresponding element in the Axes collection.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Axis>} axes Gets the list of Axis objects representing ranges of variables represented in the radar chart.
    * @property {Number} gridDivisions Gets or sets the number of grid divisions.
    * @property {Boolean} uniformScale Gets or sets a value indicating whether all axes should display same data range.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether the chart should show axis coordinates.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    * @property {Number} areaOpacity Gets or sets the opacity of radar polygons.
    * @property {Boolean} alignToAxis Gets or sets whether pie-radar sectors should be aligned to axes in the radar grid or centered around them.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this chart.
    * @property {Number} startAngle Gets or sets the angle where first data item of series should be drawn.
    * @property {Number} chartPadding Gets or set padding space between the plot's border and series graphics.
    */
    class RadarChart extends Chart {
        /**
         * Initializes a new instance of the RadarChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {RadarRenderer} [seriesRenderer] A RadarRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: RadarRenderer);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the RadarPlot class.
         */
        createPlot(): Plot;
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        showScatter: boolean;
        /**
         * Gets or sets the type of radar graphics drawn in this chart.
         */
        /**
         * Gets or sets the type of radar graphics drawn in this chart.
         */
        radarType: RadarType;
        /**
         * Gets or sets the type of grid drawn in this chart.
         */
        /**
         * Gets or sets the type of grid drawn in this chart.
         */
        gridType: RadarGridType;
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        defaultAxis: Axis;
        /**
         * Gets the list of Axis objects representing ranges
         * of variables represented in the radar chart.
         */
        axes: ObservableCollection<Axis>;
        /**
         * Gets or sets the number of grid divisions.
         */
        /**
         * Gets or sets the number of grid divisions.
         */
        gridDivisions: number;
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        uniformScale: boolean;
        /**
         * Gets or sets a value indicating whether the chart should show axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether the chart should show axis coordinates.
         */
        showCoordinates: boolean;
        /**
         * Gets or sets the main color of the grid.
         */
        /**
         * Gets or sets the main color of the grid.
         */
        gridColor1: Color;
        /**
         * Gets or sets the alternating color of the grid.
         */
        /**
         * Gets or sets the alternating color of the grid.
         */
        gridColor2: Color;
        /**
         * Gets or sets the opacity of radar polygons.
         */
        /**
         * Gets or sets the opacity of radar polygons.
         */
        areaOpacity: number;
        /**
         * Gets or sets whether pie-radar sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        /**
         * Gets or sets whether pie-radar sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        alignToAxis: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        allowRotate: boolean;
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        startAngle: number;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        chartPadding: number;
    }
    /**
    * @class A control used to draw area charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {LineType} lineType Gets or sets what type of line segments to draw between data points.
    * @property {Number} areaOpacity Gets or sets the opacity of area polygons.
    */
    class AreaChart extends BiaxialChart {
        /**
         * Initializes a new instance of the AreaChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {LineType} [lineType] A member of the LineType enumeration.
         * @param {AreaRenderer} [seriesRenderer] An AreaRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, lineType?: LineType, seriesRenderer?: AreaRenderer);
        static createRenderer(series: ObservableCollection<Series>, lineType: LineType): Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        lineType: LineType;
        /**
         * Gets or sets the opacity of area polygons.
         */
        /**
         * Gets or sets the opacity of area polygons.
         */
        areaOpacity: number;
    }
    /**
    * @class A control used to draw scatter charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {ScatterType} shape Gets or sets the type of scatter shapes.
    * @property {Number} shapeSize Gets or sets the size of scatter shapes.
    */
    class ScatterChart extends BiaxialChart {
        /**
         * Initializes a new instance of the ScatterChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {ScatterRenderer} [seriesRenderer] A ScatterRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: ScatterRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets the type of scatter shapes.
         */
        /**
         * Gets or sets the type of scatter shapes.
         */
        shape: ScatterType;
        /**
         * Gets or sets the size of scatter shapes.
         */
        /**
         * Gets or sets the size of scatter shapes.
         */
        shapeSize: number;
    }
    /**
    * @class A control used to draw 3D bar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BarLayout} barLayout Gets or sets how to arrange bars when rendering multiple series.
    * @property {BarModel3D} barModel Gets or sets how to visualize the bars when rendering multiple series.
    */
    class BarChart3D extends BiaxialChart {
        /**
         * Initializes a new instance of the BarChart3D class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {BarLayout} [barLayout] A member of the BarLayout enumeration.
     * @param {BarModel3D} [barModel] A member of the BarModel3D enumeration.
         * @param {Renderer2D} [seriesRenderer] A Renderer2D used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, barLayout?: BarLayout, barModel?: BarModel3D, seriesRenderer?: Renderer2D);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the Plot3D class.
         */
        createPlot(): Plot;
        static createRenderer(series: ObservableCollection<Series>, layout: BarLayout, barModel: BarModel3D): Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: ObservableCollection<Series>;
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        barLayout: BarLayout;
        /**
        * Gets or sets the model to be drawn
        */
        barModel: BarModel3D;
    }
}
export declare module MindFusion.Charting.Gauges {
    import ComponentAnimation = MindFusion.Charting.Components.ComponentAnimation;
    import Graphics = MindFusion.Charting.Drawing.Graphics;
    import ComponentController = MindFusion.Charting.Components.ComponentController;
    import FontStyle = MindFusion.Charting.Drawing.FontStyle;
    import LinearGradientBrush = MindFusion.Charting.Drawing.LinearGradientBrush;
    import Brush = MindFusion.Charting.Drawing.Brush;
    import Pen = MindFusion.Charting.Drawing.Pen;
    import Component = MindFusion.Charting.Components.Component;
    /**
     * @class A Component that renders gauges in the dashboard.
     * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets a Brush used to draw the background of this gauge.
     * @property {MindFusion.Charting.Drawing.Brush} stroke Gets or sets a Brush used to stroke this gauge.
     * @property {Number} strokeThickness Gets or sets the thickness of the Pen used to stroke this gauge.
     * @property {MindFusion.Charting.Drawing.Brush} scaleBackground Gets or sets a Brush used to draw the background of the gauge scales.
     * @property {MindFusion.Charting.Drawing.Brush} scaleStroke Gets or sets a Brush used to stroke the gauge scales.
     * @property {Number} scaleStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge scales.
     * @property {MindFusion.Charting.Drawing.Brush} pointerBackground Gets or sets a Brush used to draw the background of gauge pointers.
     * @property {MindFusion.Charting.Drawing.Brush} pointerStroke Gets or sets a Brush used to stroke gauge pointers.
     * @property {Number} pointerStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge pointers.
     * @property {MindFusion.Charting.Drawing.Brush} tickBackground Gets or sets a Brush used to draw the background of gauge ticks.
     * @property {MindFusion.Charting.Drawing.Brush} tickStroke Gets or sets a Brush used to stroke gauge ticks.
     * @property {Number} tickStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge ticks.
     * @property {String} fontName Gets or sets the name of font used to draw text in this gauge.
     * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of font used to draw text in this gauge.
     * @property {Number} fontSize Gets or sets the size of font used to draw text in this gauge.
     */
    abstract class GaugeRenderer extends Component {
        /**
         * Initializes a new instance of the GaugeRenderer class.
         */
        constructor();
        /**
         * Gets the default pointer fill.
         */
        getDefaultPointerFill(pointer: any): Brush;
        /**
         * Gets the default pointer stroke.
         */
        getDefaultPointerStroke(pointer: any): Pen;
        /**
         * Gets or sets a Brush used to draw the background of this gauge.
         */
        /**
         * Gets or sets a Brush used to draw the background of this gauge.
         */
        background: Brush;
        /**
         * Gets or sets a Brush used to stroke this gauge.
         */
        /**
         * Gets or sets a Brush used to stroke this gauge.
         */
        stroke: Brush;
        /**
         * Gets or sets the thickness of the Pen used to stroke this gauge.
         */
        /**
         * Gets or sets the thickness of the Pen used to stroke this gauge.
         */
        strokeThickness: number;
        /**
         * Gets or sets a Brush used to draw the background of the gauge scales.
         */
        /**
         * Gets or sets a Brush used to draw the background of the gauge scales.
         */
        scaleBackground: Brush;
        /**
         * Gets or sets a Brush used to stroke the gauge scales.
         */
        /**
         * Gets or sets a Brush used to stroke the gauge scales.
         */
        scaleStroke: Brush;
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge scales.
         */
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge scales.
         */
        scaleStrokeThickness: number;
        /**
         * Gets or sets a Brush used to draw the background of gauge pointers.
         */
        /**
         * Gets or sets a Brush used to draw the background of gauge pointers.
         */
        pointerBackground: Brush;
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        pointerStroke: Brush;
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge pointers.
         */
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge pointers.
         */
        pointerStrokeThickness: number;
        /**
         * Gets or sets a Brush used to draw the background of gauge ticks.
         */
        /**
         * Gets or sets a Brush used to draw the background of gauge ticks.
         */
        tickBackground: Brush;
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        tickStroke: Brush;
        /**
         * Gets or sets the thickness of the Pen used to stroke gauge ticks.
         */
        /**
         * Gets or sets the thickness of the Pen used to stroke gauge ticks.
         */
        tickStrokeThickness: number;
        /**
         * Gets or sets the name of font used to draw text in this gauge.
         */
        /**
         * Gets or sets the name of font used to draw text in this gauge.
         */
        fontName: string;
        /**
         * Gets or sets the style of font used to draw text in this gauge.
         */
        /**
         * Gets or sets the style of font used to draw text in this gauge.
         */
        fontStyle: FontStyle;
        /**
         * Gets or sets the size of font used to draw text in this gauge.
         */
        /**
         * Gets or sets the size of font used to draw text in this gauge.
         */
        fontSize: number;
        m_defaultLinearFill: LinearGradientBrush;
        m_defaultPen: Pen;
    }
    /**
     * @class A Component that renders linear gauges in the dashboard.
     * @property {object} gauge Gets or sets the LinearGauge represented by this renderer.
     */
    class LinearGaugeRenderer extends GaugeRenderer {
        /**
         * Initializes a new instance of the LinearGaugeRenderer class.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the LinearGaugeController class.
         */
        createController(context: RenderContext): ComponentController;        /**
         * Gets or sets the LinearGauge represented by this renderer.
         */
        /**
         * Gets or sets the LinearGauge represented by this renderer.
         */
        gauge: LinearGauge;
    }
    /**
     * @class Controls user interaction with linear gauges.
     * @property {Component} component Implements ComponentController.Component. Gets the component modified by this controller.
     */
    class LinearGaugeController implements ComponentController {
        /**
         * Initializes a new instance of the LinearGaugeController class.
         * @param {LinearGaugeRenderer} r A LinearGaugeRenderer instance controlled by this object.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        constructor(r: LinearGaugeRenderer, context: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
        * Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.
        * @param {Number} x A number value specifying the horizontal position of mouse pointer.
        * @param {Number} y A number value specifying the vertical position of mouse pointer.
        * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
        */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Implements ComponentController.Component. Gets the component modified by this controller.
         */
        component: Component;
    }
    /**
     * @class A Component that renders oval gauges in the dashboard.
     * @property {object} gauge Gets or sets the OvalGauge represented by this renderer.
     */
    class OvalGaugeRenderer extends GaugeRenderer {
        /**
         * Initializes a new instance of the OvalGaugeRenderer class.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the OvalGaugeController class.
         */
        createController(context: RenderContext): ComponentController;        /**
         * Gets or sets the OvalGauge represented by this renderer.
         */
        /**
         * Gets or sets the OvalGauge represented by this renderer.
         */
        gauge: OvalGauge;
    }
    /**
     * @class Controls user interaction with oval gauges.
     * @property {Component} component Implements ComponentController.Component. Gets the component modified by this controller.
     */
    class OvalGaugeController implements ComponentController {
        /**
         * Initializes a new instance of the OvalGaugeController class.
         * @param {OvalGaugeRenderer} r An OvalGaugeRenderer instance controlled by this object.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        constructor(r: OvalGaugeRenderer, context: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
        * Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.
        * @param {Number} x A number value specifying the horizontal position of mouse pointer.
        * @param {Number} y A number value specifying the vertical position of mouse pointer.
        * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
        */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Implements ComponentController.Component. Gets the component modified by this controller.
         */
        component: Component;
    }
}
