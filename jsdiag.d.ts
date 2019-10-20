/// <reference path="./jscommon.d.ts" />

// Type definitions for MindFusion.Diagramming for JavaScript
// Project: https://www.mindfusion.eu/javascript-diagram.html
// Definitions by: MindFusion <http://www.mindfusion.eu>

// Copyright (c) 2018-2019, MindFusion LLC - Bulgaria.

declare module "diagram-library"
{
export = MindFusion;
}

declare namespace MindFusion.Animations
{
	/** Specifies the animation function used by an Animation object. */
	enum AnimationType
	{
		/** Represents an animation that accelerates/deccelerates using a linear function. */
		Linear = 0,
		/** Represents an animation that accelerates/deccelerates through exponentiation formula - x^n where n can be set through the Animation's param property. The default exponent equals 2. */
		Power = 1,
		/** Represents an animation that accelerates/deccelerates using an exponential function. The exponent can be set through the Animation's param property. The default exponent equals 10. */
		Exponential = 2,
		/** Represents an animation that accelerates/deccelerates using a circular function. */
		Circular = 3,
		/** Represents an effect that simulates a retraction in the motion of the animation. The amplitude of the retraction can be controlled through the Animation's param property. The default param value is 1.5; */
		BackBow = 4,
		/** Represents a bouncing effect animation. */
		Bounce = 5,
		/** Represents an oscillating effect animation. The oscillation frequency can be controlled through the Animation's param property. The default param value is 0.5; */
		Elastic = 6,
		/** Specifies a user-set function. When this value is used the actual animation function must be set through the Animation's custom function callback. */
		Custom = 7
	}
	/** Specifies the easing applied to an animation. */
	enum EasingType
	{
		/** Follows the animation function associated with the Animation. */
		EaseIn = 0,
		/** Inverses the animation function associated with the Animation. */
		EaseOut = 1,
		/** Uses EaseIn for the first half the the Animation's duration and EaseOut for the second half. */
		EaseInOut = 2,
		/** Uses EaseOut for the first half the the Animation's duration and EaseIn for the second half. */
		EaseOutIn = 3
	}
	/** Defines all events raised in the Animations namespace. */
	class Events
	{
		/** Raised when an Animation is complete. */
		static animationComplete: string;
	}
	/** Represents an object that is used to animate diagram items on the canvas. */
	class Animation
	{
		/** Initializes a new instance of the Animation class.
		 * @param item The diagram item to animate.
		 * @param options An object used to specify various property values for the animation.
		 * @param onUpdateCallback A callback function called on every animation tick.
		 * @param onCustomFunctionCallback An object used to specify various property values for the animation.
		*/
		constructor(item: MindFusion.Diagramming.DiagramItem, options?: any, onUpdateCallback?: any, onCustomFunctionCallback?: any);
		/** Starts or resumes the animation. */
		start(): void;
		/** Starts or resumes the animation. */
		stop(): void;
		/** Indicates whether the animation is currently running. */
		isRunning(): boolean;
		/**  Registers a single event listener on the Animation.
		 * @param eventName The name of the event.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		addEventListener(eventName: string, handler: any): void;
		/**  Removes a single event listener on the Animation.
		 * @param eventName The name of the event.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		removeEventListener(eventName: string, handler: any): void;
		/** Gets the duration of the animation function in milliseconds. */
		getDuration(): number;
		/** Sets the duration of the animation function in milliseconds. */
		setDuration(value: number): void;
		/** Gets the initial value of the property that will be animated. */
		getFromValue(): any;
		/** Sets the initial value of the property that will be animated. */
		setFromValue(value: any): void;
		/** Gets the target value of the property that will be animated. */
		getToValue(): any;
		/** Sets the target value of the property that will be animated. */
		setToValue(value: any): void;
		/** Gets the type of the animation. */
		getAnimationType(): AnimationType;
		/** Sets the type of the animation. */
		setAnimationType(value: AnimationType): void;
		/** Gets the easing type of the animation. */
		getEasingType(): EasingType;
		/** Sets the easing type of the animation. */
		setEasingType(value: EasingType): void;
		/** Gets the optional parameter to use in the animation function. */
		getParam(): any;
		/** Sets the optional parameter to use in the animation function. */
		setParam(value: any): void;
		/** Gets a value indicating whether to restart the animation after it completes. */
		getRepeat(): boolean;
		/** Sets a value indicating whether to restart the animation after it completes. */
		setRepeat(value: boolean): void;
		/** Gets a value indicating whether to swap the from and to values after the animation completes. */
		getReverse(): boolean;
		/** Sets a value indicating whether to swap the from and to values after the animation completes. */
		setReverse(value: boolean): void;
		/** The DiagramItem associated with this animation. */
		item: MindFusion.Diagramming.DiagramItem;
	}
}
declare namespace MindFusion.Graphs
{
	/** Defines values that specify how automatic layout algorithms align links to anchor points. */
	enum Anchoring
	{
		/** Anchor points are ignored. */
		Ignore = 0,
		/** Links are aligned to their original anchor points. */
		Keep = 1,
		/** Links are aligned to new anchor points, depending on the positions of graph nodes after a layout is applied. */
		Reassign = 2
	}
	/** Specifies placement of graph connected components relatively to each other. */
	enum MultipleGraphsPlacement
	{
		/** Indicates that subgraphs should be placed in a column. */
		Vertical = 0,
		/** Indicates that subgraphs should be placed in a row. */
		Horizontal = 1
	}
	/** Specifies in what direction to place nodes processed by a layout algorithm. */
	enum LayoutDirection
	{
		/** Indicates a top-to-bottom layout direction. */
		TopToBottom = 0,
		/** Indicates a left-to-right layout direction. */
		LeftToRight = 1,
		/** Indicates a bottom-to-top layout direction. */
		BottomToTop = 2,
		/** Indicates a right-to-left layout direction. */
		RightToLeft = 3
	}
	/** Specifies general layout orientation. */
	enum Orientation
	{
		/** Specifies vertical orientation. */
		Vertical = 0,
		/** Specifies horizonal orientation. */
		Horizontal = 1
	}
	/** Specifies the shape of the diagram links after they are laid out. */
	enum TreeLayoutLinkType
	{
		/** Indicates that links will be arranged to point to the centers of the related nodes. */
		Default = 0,
		/** Indicates that links will be attached to the middles of the adjoining node sides. */
		Straight = 1,
		/** Indicates that links will be arranged as cascading and attached to the middles of the adjoining node sides. */
		Cascading = 2
	}
	/** Base class for automatic layout algorithms. */
	class Layout
	{
		/** Indicates how to align links to the anchor points of nodes. */
		anchoring: Anchoring;
		/** Indicates whether to treat each Group of nodes as a single vertex in the arranged graph. */
		keepGroupLayout: boolean;
		/** Indicates how multiple independent graphs in the diagram should be positioned relatively to each other. */
		multipleGraphsPlacement: MultipleGraphsPlacement;
	}
	/** Implements algorithms for arranging tree structures. */
	class TreeLayout extends Layout
	{
		/** Initializes a new instance of the TreeLayout class. */
		constructor();
		/** The space to leave between adjacent levels of the tree. */
		levelDistance: number;
		/** The space to leave between adjacent nodes on the same level. */
		nodeDistance: number;
		/** Indicates whether to keep the root node at its original position. */
		keepRootPosition: boolean;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The type of the links in the arranged tree. */
		linkType: TreeLayoutLinkType;
		/** Indicates whether the 'assistant' trait is regarded when performing the layout. */
		enableAssistants: boolean;
		/** Indicates whether 'assistant' nodes on the same side of a single parent are arranged as close to each other as possible. */
		compactAssistants: boolean;
		/** Returns a builder object, associated with this TreeLayout instance.
		 * @return A Builder instance.
		*/
		init(): TreeLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): TreeLayoutBuilder;
	}
	/** Implements algorithms for arranging tree structures. */
	class BorderedTreeLayout extends Layout
	{
		/** Initializes a new instance of the BorderedTreeLayout class. */
		constructor();
		/** The space to leave between adjacent levels of the tree. */
		levelDistance: number;
		/** The space to leave between adjacent nodes on the same level. */
		nodeDistance: number;
		/** Indicates whether to keep the root node at its original position. */
		keepRootPosition: boolean;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The type of the links in the arranged tree. */
		linkType: TreeLayoutLinkType;
		/** Returns a builder object, associated with this BorderedTreeLayout instance.
		 * @return A Builder instance.
		*/
		init(): BorderedTreeLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): BorderedTreeLayoutBuilder;
	}
	/** This algorithm assigns diagram nodes to distinct horizontal or vertical layers. */
	class LayeredLayout extends Layout
	{
		/** Initializes a new instance of the LayeredLayout class. */
		constructor();
		/** The desired distance between layer axis lines. */
		layerDistance: number;
		/** The desired distance between adjacent nodes in a layer. */
		nodeDistance: number;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The number of iterations to perform when untwining the layout. */
		siftingRounds: number;
		/** Returns a builder object, associated with this LayeredLayout instance.
		 * @return A Builder instance.
		*/
		init(): LayeredLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): LayeredLayoutBuilder;
	}
	/** Implements the Spring-Embedder graph layout algorithm. */
	class SpringLayout extends Layout
	{
		/** Initializes a new instance of the SpringLayout class. */
		constructor();
		/** The desired distance between nodes. */
		nodeDistance: number;
		/** The number of iterations to run the layout routine. */
		iterations: number;
		/** Returns a builder object, associated with this SpringLayout instance.
		 * @return A Builder instance.
		*/
		init(): SpringLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): SpringLayoutBuilder;
	}
	/** FractalLayout is a tree layout algorithm that places child nodes symmetrically around their parent node. */
	class FractalLayout extends Layout
	{
		/** Initializes a new instance of the FractalLayout class. */
		constructor();
		/** Indicates how to align links to the anchor points of nodes. */
		anchoring: Anchoring;
		/** Indicates whether to treat each Group of nodes as a single vertex in the arranged graph. */
		keepGroupLayout: boolean;
		/** Specifies the node that should be placed at the center of the tree. */
		root: MindFusion.Diagramming.DiagramNode;
		/** Indicates how multiple independent graphs in the diagram should be positioned relatively to each other. */
		multipleGraphsPlacement: MultipleGraphsPlacement;
		/** Returns a builder object, associated with this FractalLayout instance.
		 * @return A Builder instance.
		*/
		init(): FractalLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): FractalLayoutBuilder;
	}
	/** Performs tree-map layout on a graph. */
	class TreeMapLayout extends Layout
	{
		/** Initializes a new instance of the TreeMapLayout class. */
		constructor();
		/** Indicates whether the layout should attempt to keep the dimension ratio of nodes closer to 1. */
		squarify: boolean;
		/** The distance between adjacent nodes. */
		padding: number;
		/** The padding inside containers. */
		containerPadding: number;
		/** The rectangle in which the layout will try to arrange nodes. */
		layoutArea: MindFusion.Drawing.Rect;
		/** Returns a builder object, associated with this TreeMapLayout instance.
		 * @return A Builder instance.
		*/
		init(): TreeMapLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): TreeMapLayoutBuilder;
	}
	/** Implements a layered graph layout algorithm.o */
	class FlowchartLayout extends Layout
	{
		/** Initializes a new instance of the FlowchartLayout class. */
		constructor();
		/** Gets the distance between consecutive nodes in the flowchart. */
		getNodeDistance(): number;
		/** Sets the distance between consecutive nodes in the flowchart. */
		setNodeDistance(value: number): void;
		/** Gets a value indicating how to align links to the anchor points of nodes. */
		getAnchoring(): Anchoring;
		/** Sets a value indicating how to align links to the anchor points of nodes. */
		setAnchoring(value: Anchoring): void;
		/** Gets how much space to leave between adjacent decision branches in the flowchart. */
		getBranchPadding(): number;
		/** Sets how much space to leave between adjacent decision branches in the flowchart. */
		setBranchPadding(value: number): void;
		/** Gets how much space to leave between adjacent back links designating nested loops. */
		getLinkPadding(): number;
		/** Sets how much space to leave between adjacent back links designating nested loops. */
		setLinkPadding(value: number): void;
		/** Gets the orientation of the arranged graph. */
		getOrientation(): Orientation;
		/** Sets the orientation of the arranged graph. */
		setOrientation(value: Orientation): void;
		/** Gets a value indicating whether to treat each Group of nodes as a single vertex in the arranged graph. */
		getKeepGroupLayout(): boolean;
		/** Sets a value indicating whether to treat each Group of nodes as a single vertex in the arranged graph. */
		setKeepGroupLayout(value: boolean): void;
		/** Gets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other. */
		getMultipleGraphsPlacement(): MultipleGraphsPlacement;
		/** Sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other. */
		setMultipleGraphsPlacement(value: MultipleGraphsPlacement): void;
		/** Returns a builder object, associated with this FlowchartLayout instance.
		 * @return A Builder instance.
		*/
		init(): FlowchartLayoutBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): FlowchartLayoutBuilder;
	}
	/** A builder class for the TreeLayout class. */
	class TreeLayoutBuilder
	{
		/** Creates a new TreeLayout instance with the specified properties.
		 * @return A TreeLayout instance.
		*/
		create(): TreeLayout;
		/** Sets The space to leave between adjacent levels of the tree.
		 * @param value 
		*/
		levelDistance(value: number): TreeLayoutBuilder;
		/** Sets The space to leave between adjacent nodes on the same level.
		 * @param value 
		*/
		nodeDistance(value: number): TreeLayoutBuilder;
		/** Sets Indicates whether to keep the root node at its original position.
		 * @param value 
		*/
		keepRootPosition(value: boolean): TreeLayoutBuilder;
		/** Sets The orientation of the arranged graph.
		 * @param value 
		*/
		direction(value: LayoutDirection): TreeLayoutBuilder;
		/** Sets The type of the links in the arranged tree.
		 * @param value 
		*/
		linkType(value: TreeLayoutLinkType): TreeLayoutBuilder;
		/** Sets Indicates whether the 'assistant' trait is regarded when performing the layout.
		 * @param value 
		*/
		enableAssistants(value: boolean): TreeLayoutBuilder;
		/** Sets Indicates whether 'assistant' nodes on the same side of a single parent are arranged as close to each other as possible.
		 * @param value 
		*/
		compactAssistants(value: boolean): TreeLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): TreeLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): TreeLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): TreeLayoutBuilder;
	}
	/** A builder class for the BorderedTreeLayout class. */
	class BorderedTreeLayoutBuilder
	{
		/** Creates a new BorderedTreeLayout instance with the specified properties.
		 * @return A BorderedTreeLayout instance.
		*/
		create(): BorderedTreeLayout;
		/** Sets The space to leave between adjacent levels of the tree.
		 * @param value 
		*/
		levelDistance(value: number): BorderedTreeLayoutBuilder;
		/** Sets The space to leave between adjacent nodes on the same level.
		 * @param value 
		*/
		nodeDistance(value: number): BorderedTreeLayoutBuilder;
		/** Sets Indicates whether to keep the root node at its original position.
		 * @param value 
		*/
		keepRootPosition(value: boolean): BorderedTreeLayoutBuilder;
		/** Sets The orientation of the arranged graph.
		 * @param value 
		*/
		direction(value: LayoutDirection): BorderedTreeLayoutBuilder;
		/** Sets The type of the links in the arranged tree.
		 * @param value 
		*/
		linkType(value: TreeLayoutLinkType): BorderedTreeLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): BorderedTreeLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): BorderedTreeLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): BorderedTreeLayoutBuilder;
	}
	/** A builder class for the LayeredLayout class. */
	class LayeredLayoutBuilder
	{
		/** Creates a new LayeredLayout instance with the specified properties.
		 * @return A LayeredLayout instance.
		*/
		create(): LayeredLayout;
		/** Sets The desired distance between layer axis lines.
		 * @param value 
		*/
		layerDistance(value: number): LayeredLayoutBuilder;
		/** Sets The desired distance between adjacent nodes in a layer.
		 * @param value 
		*/
		nodeDistance(value: number): LayeredLayoutBuilder;
		/** Sets The orientation of the arranged graph.
		 * @param value 
		*/
		direction(value: LayoutDirection): LayeredLayoutBuilder;
		/** Sets The number of iterations to perform when untwining the layout.
		 * @param value 
		*/
		siftingRounds(value: number): LayeredLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): LayeredLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): LayeredLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): LayeredLayoutBuilder;
	}
	/** A builder class for the SpringLayout class. */
	class SpringLayoutBuilder
	{
		/** Creates a new SpringLayout instance with the specified properties.
		 * @return A SpringLayout instance.
		*/
		create(): SpringLayout;
		/** Sets The desired distance between nodes.
		 * @param value 
		*/
		nodeDistance(value: number): SpringLayoutBuilder;
		/** Sets The number of iterations to run the layout routine.
		 * @param value 
		*/
		iterations(value: number): SpringLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): SpringLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): SpringLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): SpringLayoutBuilder;
	}
	/** A builder class for the FractalLayout class. */
	class FractalLayoutBuilder
	{
		/** Creates a new FractalLayout instance with the specified properties.
		 * @return A FractalLayout instance.
		*/
		create(): FractalLayout;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): FractalLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): FractalLayoutBuilder;
		/** Sets Specifies the node that should be placed at the center of the tree.
		 * @param value 
		*/
		root(value: MindFusion.Diagramming.DiagramNode): FractalLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): FractalLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): FractalLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): FractalLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): FractalLayoutBuilder;
	}
	/** A builder class for the TreeMapLayout class. */
	class TreeMapLayoutBuilder
	{
		/** Creates a new TreeMapLayout instance with the specified properties.
		 * @return A TreeMapLayout instance.
		*/
		create(): TreeMapLayout;
		/** Sets Indicates whether the layout should attempt to keep the dimension ratio of nodes closer to 1.
		 * @param value 
		*/
		squarify(value: boolean): TreeMapLayoutBuilder;
		/** Sets The distance between adjacent nodes.
		 * @param value 
		*/
		padding(value: number): TreeMapLayoutBuilder;
		/** Sets The padding inside containers.
		 * @param value 
		*/
		containerPadding(value: number): TreeMapLayoutBuilder;
		/** Sets The rectangle in which the layout will try to arrange nodes.
		 * @param value 
		*/
		layoutArea(value: MindFusion.Drawing.Rect): TreeMapLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): TreeMapLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): TreeMapLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): TreeMapLayoutBuilder;
	}
	/** A builder class for the FlowchartLayout class. */
	class FlowchartLayoutBuilder
	{
		/** Creates a new FlowchartLayout instance with the specified properties.
		 * @return A FlowchartLayout instance.
		*/
		create(): FlowchartLayout;
		/** Sets the distance between consecutive nodes in the flowchart.
		 * @param value 
		*/
		nodeDistance(value: number): FlowchartLayoutBuilder;
		/** Sets a value indicating how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): FlowchartLayoutBuilder;
		/** Sets how much space to leave between adjacent decision branches in the flowchart.
		 * @param value 
		*/
		branchPadding(value: number): FlowchartLayoutBuilder;
		/** Sets how much space to leave between adjacent back links designating nested loops.
		 * @param value 
		*/
		linkPadding(value: number): FlowchartLayoutBuilder;
		/** Sets the orientation of the arranged graph.
		 * @param value 
		*/
		orientation(value: Orientation): FlowchartLayoutBuilder;
		/** Sets a value indicating whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): FlowchartLayoutBuilder;
		/** Sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): FlowchartLayoutBuilder;
		/** Sets Indicates how to align links to the anchor points of nodes.
		 * @param value 
		*/
		anchoring(value: Anchoring): FlowchartLayoutBuilder;
		/** Sets Indicates whether to treat each Group of nodes as a single vertex in the arranged graph.
		 * @param value 
		*/
		keepGroupLayout(value: boolean): FlowchartLayoutBuilder;
		/** Sets Indicates how multiple independent graphs in the diagram should be positioned relatively to each other.
		 * @param value 
		*/
		multipleGraphsPlacement(value: MultipleGraphsPlacement): FlowchartLayoutBuilder;
	}
}
declare namespace MindFusion.Diagramming
{
	/** Represents an item in the diagram document. All classes representing diagram elements derive from DiagramItem. */
	class DiagramItem
	{
		constructor(parent: Diagram);
		/** Serializes this item into a JSON string.
		 * @return A string containing the item's JSON representation.
		*/
		toJson(): string;
		/** Deserializes this item from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Loads property values from specified XML element.
		 * @param xmlElement An XML DOM element that contains the item's serialized content.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		loadFromXml(xmlElement: any, context: XmlPersistContext): void;
		/** Gets the parent diagram.
		 * @return Gets the Diagram this DiagramItem belongs to.
		*/
		getParent(): Diagram;
		/** Gets the Text object instance that is used as a container for the item's text. */
		getTextComponent(): MindFusion.Drawing.Text;
		/** Repaints the DiagramItem. */
		invalidate(): void;
		/** Gets a string containing the DiagramItem's text. */
		getText(): string;
		/** Sets a string containing the DiagramItem's text. */
		setText(value: string): void;
		/** Gets a string specifying the color of the text of this item. */
		getTextColor(): string;
		/** Sets a string specifying the color of the text of this item. */
		setTextColor(value: string): void;
		/** Gets a string specifying the color of the text outline of this item. */
		getTextStroke(): string;
		/** Sets a string specifying the color of the text outline of this item. */
		setTextStroke(value: string): void;
		/** Gets the width of the text outline of this item. */
		getTextStrokeThickness(): number;
		/** Sets the width of the text outline of this item. */
		setTextStrokeThickness(value: number): void;
		/** Gets the spacing between the item boundaries and its text. */
		getTextPadding(): MindFusion.Drawing.Thickness;
		/** Sets the spacing between the item boundaries and its text. */
		setTextPadding(value: MindFusion.Drawing.Thickness): void;
		/** Gets the font used to render this item's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this item's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets an object that specifies how to paint the interior of the DiagramItem. */
		getBrush(): any;
		/** Sets an object that specifies how to paint the interior of the DiagramItem. */
		setBrush(value: any): void;
		/** Gets a string specifying the color used to stroke the item's frame. */
		getStroke(): string;
		/** Sets a string specifying the color used to stroke the item's frame. */
		setStroke(value: string): void;
		/** Gets the line width applied when stroking the item's frame. */
		getStrokeThickness(): number;
		/** Sets the line width applied when stroking the item's frame. */
		setStrokeThickness(value: number): void;
		/** Gets the line dash pattern applied when stroking the item's frame. */
		getStrokeDashStyle(): MindFusion.Drawing.DashStyle;
		/** Sets the line dash pattern applied when stroking the item's frame. */
		setStrokeDashStyle(value: MindFusion.Drawing.DashStyle): void;
		/** Gets a custom value associated with this item. */
		getTag(): any;
		/** Sets a custom value associated with this item. */
		setTag(value: any): void;
		/** Gets a custom value associated with this item. */
		getId(): any;
		/** Sets a custom value associated with this item. */
		setId(value: any): void;
		/** Gets the tooltip text that should be displayed when the mouse hovers over this item. */
		getTooltip(): string;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item. */
		setTooltip(value: string): void;
		/** Gets a weight value used in layout and path-finding algorithms. */
		getWeight(): number;
		/** Sets a weight value used in layout and path-finding algorithms. */
		setWeight(value: number): void;
		/** Gets a value indicating whether the position of this item should not be changed by automatic layout methods. */
		getIgnoreLayout(): boolean;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods. */
		setIgnoreLayout(value: boolean): void;
		/** Gets an object containing properties of the node, used by some layout algorithms.
		 * @return An object containing the layout properties.
		*/
		getLayoutTraits(): any;
		/** Gets the z-order position of the object. */
		getZIndex(): number;
		/** Sets the z-order position of the object. */
		setZIndex(value: number): void;
		/** Gets a value indicating whether a diagram item is selected. */
		getSelected(): boolean;
		/** Sets a value indicating whether a diagram item is selected. */
		setSelected(value: boolean): void;
		/** Gets the hyperlink associated with this diagram item. */
		getHyperLink(): string;
		/** Sets the hyperlink associated with this diagram item. */
		setHyperLink(value: string): void;
		/** Gets a value indicating whether this item is visible. */
		getVisible(): boolean;
		/** Sets a value indicating whether this item is visible. */
		setVisible(value: boolean): void;
		/** Gets a value indicating whether users are allowed to modify this item. */
		getLocked(): boolean;
		/** Sets a value indicating whether users are allowed to modify this item. */
		setLocked(value: boolean): void;
		/** Gets the color used to draw the shadow of this item. */
		getShadowColor(): string;
		/** Sets the color used to draw the shadow of this item. */
		setShadowColor(value: string): void;
		/** Gets the horizontal offset of the item's shadow. */
		getShadowOffsetX(): number;
		/** Sets the horizontal offset of the item's shadow. */
		setShadowOffsetX(value: number): void;
		/** Gets the vertical offset of the item's shadow. */
		getShadowOffsetY(): number;
		/** Sets the vertical offset of the item's shadow. */
		setShadowOffsetY(value: number): void;
		/** Gets the style associated with this item. */
		getStyle(): Style;
		/** Sets the style associated with this item. */
		setStyle(value: Style): void;
		/** Gets how the text should be aligned inside the ShapeNode's bounding rectangle. */
		getTextAlignment(): Alignment;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle. */
		setTextAlignment(value: Alignment): void;
		/** Gets how the text should be vertically aligned inside the ShapeNode's bounding rectangle. */
		getLineAlignment(): Alignment;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle. */
		setLineAlignment(value: Alignment): void;
		/** Gets the effective font that should be used to render this item's text. */
		getEffectiveFont(): MindFusion.Drawing.Font;
		/** A function to call when repainting the item, to use for custom drawing. */
		onUpdateVisuals: UpdateVisualsDelegate;
		/** The bounds of the item. */
		bounds: MindFusion.Drawing.Rect;
		/** Returns the array with visual elements that are used to represent this item on the canvas. */
		getGraphicsContent(): Array<any>;
		/** Gets the parent container node of this item. */
		getContainer(): any;
		/** Gets the repaint bounding rectangle of this item. */
		getRepaintBounds(): MindFusion.Drawing.Rect;
	}
	/** DiagramNode is an abstract base class from which the ShapeNode, TableNode and ControlNode classes derive. DiagramNode instances can represent graph vertices, nodes in organizational or flow diagrams, entities in ER diagrams, and so on. */
	class DiagramNode extends DiagramItem
	{
		/** Initializes a new instance of the DiagramNode class.
		 * @param parent A Diagram instance whose default node attributes are copied to this node.
		*/
		constructor(parent: Diagram);
		/** Gets the incoming links collection of this node.
		 * @return An array containing incoming DiagramLink objects.
		*/
		getIncomingLinks(): Array<DiagramLink>;
		/** Gets the outgoing links collection of this node.
		 * @return An array containing outgoing DiagramLink objects.
		*/
		getOutgoingLinks(): Array<DiagramLink>;
		/** Gets a value indicating whether users are allowed to draw incoming links to this node. */
		getAllowIncomingLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node. */
		setAllowIncomingLinks(value: boolean): void;
		/** Gets a value indicating whether users are allowed to draw outgoing links from this node. */
		getAllowOutgoingLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node. */
		setAllowOutgoingLinks(value: boolean): void;
		/** Gets the angle at which this node is rotated. */
		getRotationAngle(): number;
		/** Sets the angle at which this node is rotated. */
		setRotationAngle(value: number): void;
		/** Gets the kinds of modifications that end-users are permitted to perform on the node. */
		getEnabledHandles(): AdjustmentHandles;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node. */
		setEnabledHandles(value: AdjustmentHandles): void;
		/** Gets a value indicating how the node adjustment handles behave and what do they look like. */
		getHandlesStyle(): HandlesStyle;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like. */
		setHandlesStyle(value: HandlesStyle): void;
		/** Gets a value indicating whether this node is considered an obstacle by the link-routing algorithm. */
		getObstacle(): boolean;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm. */
		setObstacle(value: boolean): void;
		/** Gets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node. */
		getExpandable(): boolean;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node. */
		setExpandable(value: boolean): void;
		/** Gets a value indicating whether the tree branch that starts at this node is expanded or collapsed. */
		getExpanded(): boolean;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed. */
		setExpanded(value: boolean): void;
		/** Gets the anchor points to which links are attached when connected to the node. */
		getAnchorPattern(): AnchorPattern;
		/** Sets the anchor points to which links are attached when connected to the node. */
		setAnchorPattern(value: AnchorPattern): void;
		/** Attaches this node to the specified master node so that when the master is moved, the attached node follows it.
		 * @param node A DiagramNode instance specifying the master node.
		*/
		attachTo(node: DiagramNode): void;
		/** Detaches this node from its current master node. */
		detach(): void;
		/** Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it.
		 * @param subordinate A DiagramNode instance specifying the node that should be attached.
		*/
		attach(subordinate: DiagramNode): void;
		/** Returns the node to which this node is attached.
		 * @return A DiagramNode reference specifying the node to which this node has been previously attached via the attach or attachTo method.
		*/
		getMasterNode(): DiagramNode;
		/** Returns the nodes attached to this node.
		 * @return An array of nodes attached to this node via the attach or attachTo methods.
		*/
		getAttachedNodes(): Array<DiagramNode>;
		/** Gets an array containing all effects applied to this node.
		 * @return An array containing all node effects.
		*/
		getEffects(): Array<NodeEffect>;
		/** Gets a value indicating whether this node displays a delete button. */
		getShowDeleteButton(): boolean;
		/** Sets a value indicating whether this node displays a delete button. */
		setShowDeleteButton(value: boolean): void;
		/** Gets the rectangle that defines the position of the diagram node. */
		getBounds(): MindFusion.Drawing.Rect;
		/** Sets the rectangle that defines the position of the diagram node.
		 * @param value The node's bounding rectangle
		 * @param updateDependencies true if links and attachments must be updated too, or false otherwise.
		*/
		setBounds(value: MindFusion.Drawing.Rect, updateDependencies?: boolean): void;
		/** Determines whether a manipulator object of this item is located at the specified point.
		 * @param mousePosition A Point value specifying where to look for a manipulator object.
		 * @return Returns a Manipulator instance representing the manipulator object found at the specified location, or null if there is none.
		*/
		hitTestManipulators(mousePosition: MindFusion.Drawing.Point): Manipulator;
		createAnchorPointVisual(point: AnchorPoint): MindFusion.Drawing.Path;
	}
	/** Represents a link between two diagram nodes. */
	class DiagramLink extends DiagramItem
	{
		/** Initializes a new instance of the DiagramLink class between the specified nodes using the specified diagram link as a prototype.
		 * @param parent The Diagram from which to obtain default values for the link properties.
		 * @param origin The origin node of the new link.
		 * @param destination The destination node of the new link.
		*/
		constructor(parent: Diagram, origin: DiagramNode, destination: DiagramNode);
		/** Initializes a new instance of the DiagramLink class between the specified points using the specified diagram link as a prototype.
		 * @param parent The Diagram from which to obtain default values for the link properties.
		 * @param originPoint The origin point of the new link.
		 * @param destinationPoint The destination point of the new link.
		*/
		constructor(parent: Diagram, originPoint: MindFusion.Drawing.Point, destinationPoint: MindFusion.Drawing.Point);
		/** Gets the type of link segments and how they are positioned relatively to each other. */
		getShape(): LinkShape;
		/** Sets the type of link segments and how they are positioned relatively to each other. */
		setShape(value: LinkShape): void;
		/** Gets the control points of this link. */
		getControlPoints(): Array<MindFusion.Drawing.Point>;
		/** Sets the control points of this link. */
		setControlPoints(value: Array<MindFusion.Drawing.Point>): void;
		/** Gets the link's text placement and orientation. */
		getTextStyle(): LinkTextStyle;
		/** Sets the link's text placement and orientation. */
		setTextStyle(value: LinkTextStyle): void;
		/** Gets the link's text alignment. */
		getTextAlignment(): Alignment;
		/** Sets the link's text alignment. */
		setTextAlignment(value: Alignment): void;
		/** Gets the origin node of this DiagramLink. */
		getOrigin(): DiagramNode;
		/** Sets the origin node of this DiagramLink. */
		setOrigin(value: DiagramNode): void;
		/** Gets the destination node of this DiagramLink. */
		getDestination(): DiagramNode;
		/** Sets the destination node of this DiagramLink. */
		setDestination(value: DiagramNode): void;
		/** Gets the anchor point to which a link is connected at its origin. */
		getOriginAnchor(): number;
		/** Sets the anchor point to which a link is connected at its origin. */
		setOriginAnchor(value: number): void;
		/** Gets the anchor point to which a link is connected at its destination. */
		getDestinationAnchor(): number;
		/** Sets the anchor point to which a link is connected at its destination. */
		setDestinationAnchor(value: number): void;
		/** Gets the origin table row of this DiagramLink. */
		getOriginIndex(): number;
		/** Sets the origin table row of this DiagramLink. */
		setOriginIndex(value: number): void;
		/** Gets the destination table row of this DiagramLink. */
		getDestinationIndex(): number;
		/** Sets the destination table row of this DiagramLink. */
		setDestinationIndex(value: number): void;
		/** Updates the link's internal state after the link's control points have been changed. */
		updateFromPoints(): void;
		/** Gets the first control point of this link. */
		getStartPoint(): MindFusion.Drawing.Point;
		/** Sets the first control point of this link. */
		setStartPoint(value: MindFusion.Drawing.Point): void;
		/** Gets the last control point of this link. */
		getEndPoint(): MindFusion.Drawing.Point;
		/** Sets the last control point of this link. */
		setEndPoint(value: MindFusion.Drawing.Point): void;
		/** Gets the shape to display at the beginning of this link. */
		getBaseShape(): Shape;
		/** Sets the shape to display at the beginning of this link. */
		setBaseShape(value: Shape): void;
		/** Gets the size of the shape displayed at the beginning of this link. */
		getBaseShapeSize(): number;
		/** Sets the size of the shape displayed at the beginning of this link. */
		setBaseShapeSize(value: number): void;
		/** Gets the shape to display at the end of this link. */
		getHeadShape(): Shape;
		/** Sets the shape to display at the end of this link. */
		setHeadShape(value: Shape): void;
		/** Gets the size of the shape displayed at the end of this link. */
		getHeadShapeSize(): number;
		/** Sets the size of the shape displayed at the end of this link. */
		setHeadShapeSize(value: number): void;
		/** Gets an object that specifies how to paint the interior of the link's base shape. */
		getBaseBrush(): any;
		/** Sets an object that specifies how to paint the interior of the link's base shape. */
		setBaseBrush(value: any): void;
		/** Gets an object that specifies how to paint the interior of the link's arrowhead shape. */
		getHeadBrush(): any;
		/** Sets an object that specifies how to paint the interior of the link's arrowhead shape. */
		setHeadBrush(value: any): void;
		/** Routes this link, regardless of whether the link's AutoRoute flag is enabled. */
		route(): void;
		/** Gets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes. */
		getAutoRoute(): boolean;
		/** Sets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes. */
		setAutoRoute(value: boolean): void;
		/** Gets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects. */
		getDynamic(): boolean;
		/** Sets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects. */
		setDynamic(value: boolean): void;
		/** Adds a new label to this link.
		 * @param text The label's text.
		 * @return A LinkLabel instance.
		*/
		addLabel(text: string): LinkLabel;
		/** Removes the specified label from this link.
		 * @param label A LinkLabel instance.
		*/
		removeLabel(label: LinkLabel): void;
		/** Returns a builder object, associated with this DiagramLink instance.
		 * @return A Builder instance.
		*/
		init(): DiagramLinkBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): DiagramLinkBuilder;
		/** Gets the color of arrowhead outlines. */
		getHeadStroke(): string;
		/** Sets the color of arrowhead outlines. */
		setHeadStroke(value: string): void;
		/** Gets the line width of arrowhead outlines. */
		getHeadStrokeThickness(): number;
		/** Sets the line width of arrowhead outlines. */
		setHeadStrokeThickness(value: number): void;
		/** Gets the dash pattern of arrowhead outlines. */
		getHeadStrokeDashStyle(): MindFusion.Drawing.DashStyle;
		/** Sets the dash pattern of arrowhead outlines. */
		setHeadStrokeDashStyle(value: MindFusion.Drawing.DashStyle): void;
		/** Returns a point lying on a polyline that is positioned at a relative position along the polyline's length.
		 * @param lengthFactor A value from 0 to 1 specifying a portion of link's length.
		 * @param segments A list of points specifying the polyline segments.
		*/
		pointAlongLenght(lengthFactor: number, segments?: Array<MindFusion.Drawing.Point>): MindFusion.Drawing.Point;
		/** Gets the length of the links. If the link's Shape is set to Bezier, an approximate length is calculated.
		 * @param segments A list of points specifying the polyline segments.
		 * @return The sum of the lengths of the line's segments.
		*/
		getLength(segments?: Array<MindFusion.Drawing.Point>): number;
	}
	/** ShapeNode instances are diagram nodes that represent geometric shapes. */
	class ShapeNode extends DiagramNode
	{
		/** Initializes a new instance of the ShapeNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Gets a value indicating whether text is rotated when the node is rotated. */
		getRotateText(): boolean;
		/** Sets a value indicating whether text is rotated when the node is rotated. */
		setRotateText(value: boolean): void;
		/** Gets a value indicating whether the image is rotated when the node is rotated. */
		getRotateImage(): boolean;
		/** Sets a value indicating whether the image is rotated when the node is rotated. */
		setRotateImage(value: boolean): void;
		/** Gets the HTMLImageElement displayed inside this node. */
		getImage(): any;
		/** Sets the HTMLImageElement displayed inside this node. */
		setImage(value: any): void;
		/** Gets the alignment for the image of this node. */
		getImageAlign(): MindFusion.Drawing.ImageAlign;
		/** Sets the alignment for the image of this node. */
		setImageAlign(value: MindFusion.Drawing.ImageAlign): void;
		/** Gets the padding distance between node borders and image. */
		getImagePadding(): MindFusion.Drawing.Thickness;
		/** Sets the padding distance between node borders and image. */
		setImagePadding(value: MindFusion.Drawing.Thickness): void;
		/** Gets a value indicating whether this shape node is transparent. */
		getTransparent(): boolean;
		/** Sets a value indicating whether this shape node is transparent. */
		setTransparent(value: boolean): void;
		/** Gets a reference to the node's geometric shape definition. */
		getShape(): Shape;
		/** Sets a reference to the node's geometric shape definition. */
		setShape(value: Shape): void;
		/** Gets the URL of the image displayed in this ShapeNode. */
		getImageLocation(): string;
		/** Sets the URL of the image displayed in this ShapeNode. */
		setImageLocation(value: string): void;
		/** Gets the Base64-encoded data of the image displayed in this ShapeNode. */
		getImageContent(): string;
		/** Sets the Base64-encoded data of the image displayed in this ShapeNode. */
		setImageContent(value: string): void;
		/** Gets a value indicating whether styled text rendering is enabled. */
		getEnableStyledText(): boolean;
		/** Sets a value indicating whether styled text rendering is enabled. */
		setEnableStyledText(value: boolean): void;
		/** Gets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge. */
		getAllowFlip(): boolean;
		/** Sets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge. */
		setAllowFlip(value: boolean): void;
		/** Gets a value indicating whether the node's shape is flipped horizontally. */
		getFlipX(): boolean;
		/** Sets a value indicating whether the node's shape is flipped horizontally. */
		setFlipX(value: boolean): void;
		/** Gets a value indicating whether the node's shape is flipped vertically. */
		getFlipY(): boolean;
		/** Sets a value indicating whether the node's shape is flipped vertically. */
		setFlipY(value: boolean): void;
		/** Makes the shape node big enough to display its text without clipping.
		 * @param fit One of the FitSize enumeration values.
		 * @return true if the node is resized successfully; otherwise, false.
		*/
		resizeToFitText(fit: FitSize): boolean;
		/** Returns a builder object, associated with this ShapeNode instance.
		 * @return A Builder instance.
		*/
		init(): ShapeNodeBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): ShapeNodeBuilder;
	}
	/** Represents a set of items selected in the diagram document. */
	class Selection
	{
		/** A list of all selected diagram items. */
		items: Array<DiagramItem>;
		/** A list of selected nodes. */
		nodes: Array<DiagramNode>;
		/** A list of selected links. */
		links: Array<DiagramLink>;
		/** A value indicating whether more than one items can be selected simultaneously. */
		allowMultipleSelection: boolean;
		/** Adds an item to this Selection.
		 * @param item The item to add.
		*/
		addItem(item: DiagramItem): void;
		/** Removes an item from this Selection.
		 * @param item The item to remove.
		 * @return true if the item was found and removed from selection, or false otherwise.
		*/
		removeItem(item: DiagramItem): boolean;
		/** Removes all items from the selection. */
		clear(): void;
	}
	/** Represents a cell of a TableNode. */
	class Cell
	{
		/** Initializes a new instance of the Cell class. */
		constructor();
		/** Gets a string containing the cell's text. */
		getText(): string;
		/** Sets a string containing the cell's text. */
		setText(value: string): void;
		/** Gets how the text should be aligned inside the cell's bounding rectangle. */
		getTextAlignment(): Alignment;
		/** Sets how the text should be aligned inside the cell's bounding rectangle. */
		setTextAlignment(value: Alignment): void;
		/** Gets how the text should be vertically aligned inside the cell's bounding rectangle. */
		getLineAlignment(): Alignment;
		/** Sets how the text should be vertically aligned inside the cell's bounding rectangle. */
		setLineAlignment(value: Alignment): void;
		/** Gets the HTMLImageElement displayed inside this cell. */
		getImage(): any;
		/** Sets the HTMLImageElement displayed inside this cell. */
		setImage(value: any): void;
		/** Gets the alignment for the image of this cell. */
		getImageAlign(): MindFusion.Drawing.ImageAlign;
		/** Sets the alignment for the image of this cell. */
		setImageAlign(value: MindFusion.Drawing.ImageAlign): void;
		/** Gets the padding distance between cell borders and image. */
		getImagePadding(): MindFusion.Drawing.Thickness;
		/** Sets the padding distance between cell borders and image. */
		setImagePadding(value: MindFusion.Drawing.Thickness): void;
		/** Gets the URL of the image displayed inside this cell. */
		getImageLocation(): string;
		/** Sets the URL of the image displayed inside this cell. */
		setImageLocation(value: string): void;
		/** Gets the Base64-encoded data of the image displayed inside this cell. */
		getImageContent(): string;
		/** Sets the Base64-encoded data of the image displayed inside this cell. */
		setImageContent(value: string): void;
		/** Gets the font used to render this cell's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this cell's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets an object that specifies how to paint the interior of this cell. */
		getBrush(): any;
		/** Sets an object that specifies how to paint the interior of this cell. */
		setBrush(value: any): void;
		/** Gets A string value identifying the color of the text. */
		getTextColor(): string;
		/** Sets A string value identifying the color of the text. */
		setTextColor(value: string): void;
		/** Gets the number of columns spanned by this cell. */
		getColumnSpan(): number;
		/** Sets the number of columns spanned by this cell. */
		setColumnSpan(value: number): void;
		/** Gets the number of rows spanned by this cell. */
		getRowSpan(): number;
		/** Sets the number of rows spanned by this cell. */
		setRowSpan(value: number): void;
		/** Gets the tooltip text that should be displayed when the mouse hovers over this table cell. */
		getTooltip(): string;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this table cell. */
		setTooltip(value: string): void;
	}
	/** TableNode instances are diagram nodes that can be used to display tabular or list data. */
	class TableNode extends DiagramNode
	{
		/** Initializes a new instance of the TableNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Returns a reference to the cell located at the specified column and row of this table.
		 * @param col An integer value specifying the index of a table's column.
		 * @param row An integer value specifying the index of a table's row.
		 * @return A Cell instance representing the specified cell.
		*/
		getCell(col: number, row: number): Cell;
		/** Returns a reference to the column with specified index
		 * @param col An integer value specifying the index of a table's column.
		 * @return A Column instance representing the specified cell.
		*/
		getColumn(col: number): Column;
		/** Returns a reference to the row with specified index
		 * @param row An integer value specifying the index of a table's row.
		 * @return A Row instance representing the specified cell.
		*/
		getRow(row: number): Row;
		/** Sets the height of specified row.
		 * @param row An integer value specifying the index of a table's row.
		 * @param value The row's height.
		*/
		setRowHeight(row: number, value: number): void;
		/** Sets the width of specified column.
		 * @param col An integer value specifying the index of a table's column.
		 * @param value The column's width.
		*/
		setColumnWidth(col: number, value: number): void;
		/** Resizes the columns and rows so that the cells are large enough to fit their text. */
		resizeToFitText(): void;
		/** Gets the shape of the table's outline. */
		getShape(): SimpleShape;
		/** Sets the shape of the table's outline. */
		setShape(value: SimpleShape): void;
		/** Gets the height of the table's caption area. */
		getCaptionHeight(): number;
		/** Sets the height of the table's caption area. */
		setCaptionHeight(value: number): void;
		/** Gets the style of the cell frame lines. */
		getCellFrameStyle(): CellFrameStyle;
		/** Sets the style of the cell frame lines. */
		setCellFrameStyle(value: CellFrameStyle): void;
		/** Gets a value indicating whether drawing a link from/to this table should connect a row of the table, or the whole table as an integral entity. */
		getConnectionStyle(): ConnectionStyle;
		/** Sets a value indicating whether drawing a link from/to this table should connect a row of the table, or the whole table as an integral entity. */
		setConnectionStyle(value: ConnectionStyle): void;
		/** Gets the number of rows in the table. */
		getRowCount(): number;
		/** Sets the number of rows in the table. */
		setRowCount(value: number): void;
		/** Gets the number of columns in the table. */
		getColumnCount(): number;
		/** Sets the number of columns in the table. */
		setColumnCount(value: number): void;
		/** Changes the number of columns and rows in this table.
		 * @param columns An integer value specifying the new number of columns.
		 * @param rows An integer value specifying the new number of rows.
		*/
		redimTable(columns: number, rows: number): void;
		/** Returns the cell that contains the specified point.
		 * @param point A Point instance.
		 * @return A JavaScript object representing the specified cell.
		*/
		cellFromPoint(point: MindFusion.Drawing.Point): Cell;
		/** Deletes the specified column.
		 * @param col An integer value specifying which column to delete.
		*/
		deleteColumn(col: number): void;
		/** Inserts a new column at the specified position.
		 * @param col An integer value specifying the position within the table's list of columns where the new column should be inserted.
		*/
		insertColumn(col: number): void;
		/** Deletes the specified row.
		 * @param row An integer value specifying which row to delete.
		*/
		deleteRow(row: number): void;
		/** Inserts a new row at the specified position.
		 * @param row Inserts a new row at the specified position.
		*/
		insertRow(row: number): void;
		/** Adds a new column to the table. */
		addColumn(): any;
		/** Adds a new row to the table. */
		addRow(): any;
		/** Gets a value indicating whether the user is allowed to scroll the table rows. */
		getScrollable(): boolean;
		/** Sets a value indicating whether the user is allowed to scroll the table rows. */
		setScrollable(value: boolean): void;
		/** Gets an object that specifies how to fill the caption bar. */
		getCaptionBackBrush(): any;
		/** Sets an object that specifies how to fill the caption bar. */
		setCaptionBackBrush(value: any): void;
		/** Gets the font used to render the table's caption text. */
		getCaptionFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render the table's caption text. */
		setCaptionFont(value: MindFusion.Drawing.Font): void;
		/** Gets a value indicating whether styled text rendering is enabled. */
		getEnableStyledText(): boolean;
		/** Sets a value indicating whether styled text rendering is enabled. */
		setEnableStyledText(value: boolean): void;
		/** Gets a value indicating whether users are allowed to resize table columns. */
		getAllowResizeColumns(): boolean;
		/** Sets a value indicating whether users are allowed to resize table columns. */
		setAllowResizeColumns(value: boolean): void;
		/** Gets a value indicating whether users are allowed to resize table rows. */
		getAllowResizeRows(): boolean;
		/** Sets a value indicating whether users are allowed to resize table rows. */
		setAllowResizeRows(value: boolean): void;
		/** Gets the table's current scroll position. */
		getCurrentScrollRow(): number;
		/** Sets the table's current scroll position. */
		setCurrentScrollRow(value: number): void;
		/** Set this flag to show full scrollbars for scrollable tables instead of up/down buttons in captions. */
		useScrollBars: boolean;
		/** Returns a builder object, associated with this TableNode instance.
		 * @return A Builder instance.
		*/
		init(): TableNodeBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): TableNodeBuilder;
	}
	/** SvgContent represents the markup code of an SVG drawing. */
	class SvgContent
	{
		/** Initializes a new instance of the SvgContent class. */
		constructor();
		/** Loads SVG code from the specified file.
		 * @param url A string specifying the SVG file location.
		*/
		parse(url: string): void;
		/** Loads SVG code from the specified string.
		 * @param svg A string containing the SVG markup code.
		*/
		parseSvg(svg: string): void;
	}
	/** SvgNode instances are diagram nodes that can render SVG drawings. */
	class SvgNode extends ShapeNode
	{
		/** Initializes a new instance of the SvgNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Gets an SvgContent instance representing the SVG drawing rendered in this node. */
		getContent(): SvgContent;
		/** Sets an SvgContent instance representing the SVG drawing rendered in this node. */
		setContent(value: SvgContent): void;
		/** Returns a builder object, associated with this SvgNode instance.
		 * @return A Builder instance.
		*/
		init(): SvgNodeBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): SvgNodeBuilder;
	}
	/** ContainerNode instances are diagram nodes that can contain other nodes. */
	class ContainerNode extends DiagramNode
	{
		/** Initializes a new instance of the ContainerNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Adds a node to this container.
		 * @param node The node that should be added to this container.
		*/
		add(node: DiagramNode): void;
		/** Removes a node from this container.
		 * @param node The node that should be removed from this container.
		*/
		remove(node: DiagramNode): void;
		/** Gets a value indicating whether child items should be clipped by container boundaries. */
		getClipChildren(): boolean;
		/** Sets a value indicating whether child items should be clipped by container boundaries. */
		setClipChildren(value: boolean): void;
		/** Gets the shape of the container's outline. */
		getShape(): SimpleShape;
		/** Sets the shape of the container's outline. */
		setShape(value: SimpleShape): void;
		/** Gets the height of the container's caption area. */
		getCaptionHeight(): number;
		/** Sets the height of the container's caption area. */
		setCaptionHeight(value: number): void;
		/** Resizes the container making it big enough to contain its child nodes.
		 * @param allowShrink true to allow setting smaller size than current one, or false otherwise.
		 * @param margin Specifies the size of margin space around child nodes.
		*/
		resizeToFitChildren(allowShrink: boolean, margin: number): void;
		/** Makes the container node caption big enough to display its text without clipping.
		 * @param fit One of the FitSize enumeration values.
		 * @param fixPosition Fix the position of the container to the original location. The default is false.
		 * @param foldBtnWidth The width of the folder button, if it's not provided, the value from FoldIconSize is used.
		 * @return true if the caption is resized successfully; otherwise, false.
		*/
		resizeToFitText(fit?: FitSize, fixPosition?: boolean, foldBtnWidth?: number): boolean;
		/** Gets a value indicating whether users are allowed to fold this container. */
		getFoldable(): boolean;
		/** Sets a value indicating whether users are allowed to fold this container. */
		setFoldable(value: boolean): void;
		/** Gets a value indicating whether the container is folded. */
		getFolded(): boolean;
		/** Sets a value indicating whether the container is folded. */
		setFolded(value: boolean): void;
		/** Gets a value indicating the size of the fold/unfold icon. */
		getFoldIconSize(): number;
		/** Sets a value indicating the size of the fold/unfold icon. */
		setFoldIconSize(value: number): void;
		/** Gets a value indicating whether users are allowed to add child nodes to this container. */
		getAllowAddChildren(): boolean;
		/** Sets a value indicating whether users are allowed to add child nodes to this container. */
		setAllowAddChildren(value: boolean): void;
		/** Gets a value indicating whether users are allowed to remove child nodes from the container. */
		getAllowRemoveChildren(): boolean;
		/** Sets a value indicating whether users are allowed to remove child nodes from the container. */
		setAllowRemoveChildren(value: boolean): void;
		/** Gets an object that specifies how to fill the caption bar. */
		getCaptionBackBrush(): any;
		/** Sets an object that specifies how to fill the caption bar. */
		setCaptionBackBrush(value: any): void;
		/** Gets a value indicating whether styled caption text rendering is enabled. */
		getEnableStyledText(): boolean;
		/** Sets a value indicating whether styled caption text rendering is enabled. */
		setEnableStyledText(value: boolean): void;
		/** Gets the size of the container in unfolded state.
		 * @return The size of the container in unfolded state.
		*/
		getUnfoldedSize(): MindFusion.Drawing.Size;
		/** Arranges the container's children using the specified layout algorithm.
		 * @param layout An instance of Layout -derived class representing the algorithm to apply.
		*/
		arrange(layout: MindFusion.Graphs.Layout): void;
		/** Arranges the container's children using the specified layout algorithm, while applying animation to the items.
		 * @param layout An instance of Layout -derived class representing the algorithm to apply.
		 * @param duration An integer, specifying the duration of the animation in milliseconds.
		 * @param animationType A member of the AnimationType enumeration, specifying the animation type to use.
		 * @param easingType A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.
		*/
		arrangeAnimated(layout: MindFusion.Graphs.Layout, duration?: number, animationType?: MindFusion.Animations.AnimationType, easingType?: MindFusion.Animations.EasingType): void;
		/** Gets the child nodes of this container.
		 * @return An array containing the child nodes of this container.
		*/
		getChildren(): Array<DiagramItem>;
		/** Returns a builder object, associated with this ContainerNode instance.
		 * @return A Builder instance.
		*/
		init(): ContainerNodeBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): ContainerNodeBuilder;
	}
	/** A FreeFormNode collects all points from users' mouse or touch input and displays them as node's outline. */
	class FreeFormNode extends DiagramNode
	{
		/** Initializes a new instance of the FreeFormNode class.
		 * @param parent A Diagram instance whose default node attributes are copied to this node.
		*/
		constructor(parent: Diagram);
		/** Gets a value indicating whether the node's shape is closed. */
		getClosed(): boolean;
		/** Sets a value indicating whether the node's shape is closed. */
		setClosed(value: boolean): void;
		/** Gets the node's outline points. */
		getPoints(): Array<MindFusion.Drawing.Point>;
		/** Sets the node's outline points. */
		setPoints(value: Array<MindFusion.Drawing.Point>): void;
		/** Returns a builder object, associated with this FreeFormNode instance.
		 * @return A Builder instance.
		*/
		init(): FreeFormNodeBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): FreeFormNodeBuilder;
	}
	/** CompositeNode implements nodes whose appearance can be defined via composition of components and layout containers. */
	class CompositeNode extends DiagramNode
	{
		/** Initializes a new instance of the CompositeNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent?: Diagram);
		/** Generates a node class whose appearance and properties are defined using JSON template.
		 * @param className Fully qualified name of the class to generate.
		 * @param jsonTemplate A JavaScript object literal containing template of node's component hierarchy.
		 * @return A constructor function that creates instances of the new class.
		*/
		static classFromTemplate(className: string, jsonTemplate: any): any;
		/** Load a JSON template defining node's appearance.
		 * @param jsonTemplate A JavaScript object literal containing template of node's component hierarchy.
		*/
		loadTemplate(jsonTemplate: any): void;
		/** Returns the component created for the template element with specified name.
		 * @param name A string specifying the value of the name attribute in node's template.
		 * @return The component created for specified element in the template.
		*/
		getComponent(name: string): MindFusion.Drawing.Component;
	}
	/** Represents an action that changes the diagram and whose effects can be undone. */
	class Command
	{
		/** Initializes a new instance of the Command class.
		 * @param diagram The Diagram modified by this command.
		*/
		constructor(diagram: Diagram);
		/** The Diagram modified by this command. */
		diagram: Diagram;
		/** Carries out an action that changes the diagram or a diagram item. */
		execute(): void;
		/** Undoes an action, restoring the diagram to the state it was in before carrying out the action. */
		undo(): void;
		/** Repeats an action that has been undone. */
		redo(): void;
	}
	/** Represents a set of Command instances as a single operation. Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time. */
	class CompositeCommand extends Command
	{
		/** Initializes a new instance of the CompositeCommand class.
		 * @param diagram The Diagram modified by this command.
		*/
		constructor(diagram: Diagram);
		/** Gets a list containing the child Command objects.
		 * @return The list of child Command objects.
		*/
		getCommands(): Array<Command>;
	}
	/** Implements creation of new diagram items. */
	class AddItemCommand extends Command
	{
		/** Initializes a new instance of the AddItemCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param item A new DiagramItem that should be added to the Diagram.
		*/
		constructor(diagram: Diagram, item: DiagramItem);
		/** A new DiagramItem that should be added to the Diagram. */
		item: DiagramItem;
	}
	/** Handles undo / redo of property changes. */
	class ChangeItemCommand extends Command
	{
		/** Initializes a new instance of the ChangeItemCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param item The DiagramItem that will be modified.
		*/
		constructor(diagram: Diagram, item: DiagramItem);
		/** The DiagramItem that will be modified. */
		item: DiagramItem;
	}
	/** Implements deletion of diagram items. */
	class RemoveItemCommand extends Command
	{
		/** Initializes a new instance of the RemoveItemCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param item A DiagramItem that should be removed from the Diagram.
		*/
		constructor(diagram: Diagram, item: DiagramItem);
		/** A DiagramItem that should be removed from the Diagram. */
		item: DiagramItem;
	}
	/** Handles undo / redo of container folding. */
	class FoldContainerCommand extends Command
	{
		/** Initializes a new instance of the FoldContainerCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param container The ContainerNode instance that will be modified.
		*/
		constructor(diagram: Diagram, container: ContainerNode);
		/** The ContainerNode instance that will be modified. */
		container: ContainerNode;
	}
	/** Implements resizing of table's columns. */
	class ResizeTableColumnCommand extends Command
	{
		/** Initializes a new instance of the ResizeTableColumnCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param table The TableNode instance that will be modified.
		 * @param column The column object that will be resized.
		*/
		constructor(diagram: Diagram, table: TableNode, column: any);
		/** The TableNode instance that will be modified. */
		table: TableNode;
		/** The column object that will be resized. */
		column: any;
	}
	/** Implements resizing of table's rows. */
	class ResizeTableRowCommand extends Command
	{
		/** Initializes a new instance of the ResizeTableRowCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param table The TableNode instance that will be modified.
		 * @param row The row object that will be resized.
		*/
		constructor(diagram: Diagram, table: TableNode, row: any);
		/** The TableNode instance that will be modified. */
		table: TableNode;
		/** The row object that will be resized. */
		row: any;
	}
	/** Handles undo / redo of table scrolling. */
	class ScrollTableCommand extends Command
	{
		/** Initializes a new instance of the ScrollTableCommand class.
		 * @param diagram The Diagram modified by this command.
		 * @param table The TableNode instance that will be modified.
		*/
		constructor(diagram: Diagram, table: TableNode);
		/** The TableNode instance that will be modified. */
		table: TableNode;
	}
	/** The Diagram class represents a flow diagram. */
	class Diagram extends MindFusion.Drawing.Canvas
	{
		/** Initializes a new instance of the Diagram class.
		 * @param element The Canvas DOM Element this Diagram is associated with.
		*/
		constructor(element: any);
		/** Creates and initializes a new Diagram associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the Diagram should be attached to.
		 * @return A Diagram instance.
		*/
		static create(element: any): Diagram;
		/** Returns the specified Diagram object. This member is static and can be invoked without creating an instance of the class.
		 * @param id A string that contains the ID of the diagram to find.
		 * @param parent The component or element that contains the diagram to find.
		 * @return A Diagram object that contains the diagram requested by id, if found; otherwise, null.
		*/
		static find(id: string, parent?: any): Diagram;
		/** Registers a diagram item class for serialization support.
		 * @param itemClass An object identifying the item class.
		 * @param classId A class identifier to use when saving and loading items of the specified type.
		 * @param classVersion A revision number of the item's class serialization format.
		*/
		static registerItemClass(itemClass: any, classId: string, classVersion: number): void;
		/** Gets a Factory instance that lets you add programmatically new items to the diagram.
		 * @return A Factory instance
		*/
		getFactory(): Factory;
		/** Registers a single event listener with the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		addEventListener(eventName: string, handler: any): void;
		/** Removes a single event listener attached to the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		removeEventListener(eventName: string, handler: any): void;
		/** Gets a value indicating whether in-place editing of the text of objects is enabled. */
		getAllowInplaceEdit(): boolean;
		/** Sets a value indicating whether in-place editing of the text of objects is enabled. */
		setAllowInplaceEdit(value: boolean): void;
		/** Gets a value that specifies what action should be performed when the user hits the Del key. */
		getDelKeyAction(): DelKeyAction;
		/** Sets a value that specifies what action should be performed when the user hits the Del key. */
		setDelKeyAction(value: DelKeyAction): void;
		/** Gets The object used for painting the background. */
		getBackBrush(): any;
		/** Sets The object used for painting the background. */
		setBackBrush(value: any): void;
		/** Gets the default shape of shape nodes. */
		getDefaultShape(): Shape;
		/** Sets the default shape of shape nodes. */
		setDefaultShape(value: Shape): void;
		/** Gets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes. */
		getFreeFormTargets(): Array<Shape>;
		/** Sets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes. */
		setFreeFormTargets(value: Array<Shape>): void;
		/** Gets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically. */
		getAutoCloseDistance(): number;
		/** Sets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically. */
		setAutoCloseDistance(value: number): void;
		/** Gets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too. */
		getFreeFormAttractDistance(): number;
		/** Sets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too. */
		setFreeFormAttractDistance(value: number): void;
		/** Gets the default fill of shape nodes. */
		getShapeBrush(): any;
		/** Sets the default fill of shape nodes. */
		setShapeBrush(value: any): void;
		/** Gets the default fill of links. */
		getLinkBrush(): any;
		/** Sets the default fill of links. */
		setLinkBrush(value: any): void;
		/** Gets the initial shape assigned to new links. */
		getLinkShape(): LinkShape;
		/** Sets the initial shape assigned to new links. */
		setLinkShape(value: LinkShape): void;
		/** Gets the shape displayed as head of new links. */
		getLinkHeadShape(): Shape;
		/** Sets the shape displayed as head of new links. */
		setLinkHeadShape(value: Shape): void;
		/** Gets the shape displayed at the base of new links. */
		getLinkBaseShape(): Shape;
		/** Sets the shape displayed at the base of new links. */
		setLinkBaseShape(value: Shape): void;
		/** Gets the default size of arrowheads. */
		getLinkHeadShapeSize(): number;
		/** Sets the default size of arrowheads. */
		setLinkHeadShapeSize(value: number): void;
		/** Gets the default size of the base shape of new links. */
		getLinkBaseShapeSize(): number;
		/** Sets the default size of the base shape of new links. */
		setLinkBaseShapeSize(value: number): void;
		/** Gets the default number of arrow segments. */
		getLinkSegments(): number;
		/** Sets the default number of arrow segments. */
		setLinkSegments(value: number): void;
		/** Gets a value indicating how the background image is positioned relatively to diagram's boundaries. */
		getBackgroundImageAlign(): MindFusion.Drawing.ImageAlign;
		/** Sets a value indicating how the background image is positioned relatively to diagram's boundaries. */
		setBackgroundImageAlign(value: MindFusion.Drawing.ImageAlign): void;
		/** Gets the URL of the Image painted as diagram's background. */
		getBackgroundImageUrl(): string;
		/** Sets the URL of the Image painted as diagram's background. */
		setBackgroundImageUrl(value: string): void;
		/** Gets the Base64-encoded data of the background image. */
		getBackgroundImageContent(): string;
		/** Sets the Base64-encoded data of the background image. */
		setBackgroundImageContent(value: string): void;
		/** Gets a value indicating whether handling of mouse events is enabled. */
		getEnabled(): boolean;
		/** Sets a value indicating whether handling of mouse events is enabled. */
		setEnabled(value: boolean): void;
		/** Begins in-place editing of the specified object.
		 * @param item The Diagram element whose text should be edited.
		 * @param point A Point specifying where the in-place edit box should appear.
		*/
		beginEdit(item: any, point: MindFusion.Drawing.Point): void;
		/** Exits the in-place editing mode and either accepts or rejects the changes made to the item's text.
		 * @param accept true to accept changes made to text; false to reject them.
		*/
		endEdit(accept: boolean): void;
		/** Returns the array of all items in this diagram.
		 * @return Array of all DiagramItem instances in the diagram.
		*/
		getItems(): Array<DiagramItem>;
		/** Returns the array of all nodes in this diagram.
		 * @return Array of all DiagramNode instances in the diagram.
		*/
		getNodes(): Array<DiagramNode>;
		/** Returns the array of all links in this diagram.
		 * @return Array of all DiagramLink instances in the diagram.
		*/
		getLinks(): Array<DiagramLink>;
		/** Removes all items from the diagram. */
		clearAll(): void;
		/** Adds an item to the Diagram.
		 * @param item The item to add.
		*/
		addItem(item: DiagramItem): void;
		/** Removes the specified item from the Diagram.
		 * @param item The item to be removed.
		*/
		removeItem(item: DiagramItem): void;
		/** Returns an array of all diagram items found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramItems found at the given location, or null if no items have been found. The items are sorted according to their Z-index.
		*/
		getItemsAt(point: MindFusion.Drawing.Point): Array<DiagramItem>;
		/** Returns an array of all DiagramNodes found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramNodes found at the given location, or null if no nodes have been found. The returned nodes are sorted according to their Z-index.
		*/
		getNodesAt(point: MindFusion.Drawing.Point): Array<DiagramNode>;
		/** Returns an array of all DiagramLinks found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramLinks found at the given location, or null if no links have been found. The returned links are sorted according to their Z-index.
		*/
		getLinksAt(point: MindFusion.Drawing.Point): Array<DiagramLink>;
		/** Finds and returns the topmost DiagramItem found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramItem found at the given location or null if no DiagramItem has been found.
		*/
		getItemAt(point: MindFusion.Drawing.Point): DiagramItem;
		/** Finds and returns the topmost DiagramNode found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramNode found at the given location or null if no DiagramNode has been found.
		*/
		getNodeAt(point: MindFusion.Drawing.Point): DiagramNode;
		/** Finds and returns the topmost DiagramLink found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramLink found at the given location or null if no DiagramLink has been found.
		*/
		getLinkAt(point: MindFusion.Drawing.Point): DiagramLink;
		/** Returns the node nearest to the specified point.
		 * @param point A point in the diagram.
		 * @param maxDistance The maximum distance from the point at which to look for nodes.
		 * @param ignored A node that should be ignored.
		 * @return The DiagramNode nearest to the specified point.
		*/
		getNearestNode(point: MindFusion.Drawing.Point, maxDistance: number, ignored: DiagramNode): DiagramNode;
		/** Serializes the diagram into a JSON string.
		 * @return A string containing the diagram's JSON representation.
		*/
		toJson(): string;
		/** Deserializes the diagram from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Saves the diagram to an XML file.
		 * @param url A URL specifying where the diagram's XML should be posted to.
		*/
		saveToXml(url: string): void;
		/** Loads the diagram from an XML file.
		 * @param fileUrl The URL of an XML file where the data should be read from.
		*/
		loadFromXml(fileUrl: string): void;
		/** Encodes the diagram contents into an XML or JSON string.
		 * @param format A member of the SaveToStringFormat enumeration.
		 * @return A string containing the diagram's serialized representation.
		*/
		saveToString(format: SaveToStringFormat): string;
		/** Loads diagram contents from specified XML or JSON string.
		 * @param str A string containing the serialized diagram contents.
		*/
		loadFromString(str: string): void;
		/** Gets a value indicating whether the diagram has changed since loading it. */
		getDirty(): boolean;
		/** Sets a value indicating whether the diagram has changed since loading it. */
		setDirty(value: boolean): void;
		/** Copies the current selection of items to the clipboard.
		 * @param systemClipboard true to copy to the system clipboard, or false otherwise. The default value is false.
		*/
		copyToClipboard(systemClipboard: boolean): void;
		/** Pastes diagram items from the clipboard.
		 * @param offsetX Horizontal offset of pasted items from their original positions.
		 * @param offsetY Vertical offset of pasted items from their original positions.
		 * @param systemClipboard true to paste from the system clipboard, or false otherwise. The default value is false.
		 * @param unconnectedLinks true to allow pasting arrows whose origin or destination node has not been copied; otherwise, false. The default value is false.
		*/
		pasteFromClipboard(offsetX: number, offsetY: number, systemClipboard: boolean, unconnectedLinks: boolean): void;
		/** Cuts the currently selected items to the clipboard.
		 * @param systemClipboard true to copy to the system clipboard, or false otherwise. The default value is false.
		*/
		cutToClipboard(systemClipboard: boolean): void;
		/** Gets the font for text displayed by diagram items. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font for text displayed by diagram items. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Resizes the document scrollable area so that it fits all diagram items.
		 * @param margin Resizes the document scrollable area so that it fits all diagram items.
		*/
		resizeToFitItems(margin: number): void;
		/** Resize the document extents so that the specified item is contained within.
		 * @param item The item to be contained.
		*/
		resizeToFitItem(item: DiagramItem): void;
		/** Returns the smallest rectangle that bounds all diagram items.
		 * @return A Rect instance specifying the smallest rectangle that bounds all diagram items.
		*/
		getContentBounds(): MindFusion.Drawing.Rect;
		/** Scrolls the diagram to the specified point.
		 * @param x A number specifying the new horizontal scroll position in the current unit of measure.
		 * @param y A number specifying the new vertical scroll position in the current unit of measure.
		*/
		scrollTo(x: number, y: number): void;
		/** Gets the diagram's horizontal scroll position. */
		getScrollX(): number;
		/** Sets the diagram's horizontal scroll position. */
		setScrollX(value: number): void;
		/** Gets the diagram's vertical scroll position. */
		getScrollY(): number;
		/** Sets the diagram's vertical scroll position. */
		setScrollY(value: number): void;
		/** Returns the visible portion of the diagram area.
		 * @return A Rect instance specifying the viewport coordinates.
		*/
		getViewport(): MindFusion.Drawing.Rect;
		/** Sets the zoom factor, preserving the on-screen position of the specified diagram point.
		 * @param zoomFactor The new zoom factor.
		 * @param pivotPoint A Point instance specifying the zoom center.
		*/
		setZoomFactorPivot(zoomFactor: number, pivotPoint: MindFusion.Drawing.Point): void;
		/** Zooms and scrolls the view to fit the specified document rectangle in the Diagram's visible area.
		 * @param rect A Rect instance specifying the viewport position and size.
		*/
		zoomToRect(rect: MindFusion.Drawing.Rect): void;
		/** Zooms the view to fit the document contents in the Diagram client area. */
		zoomToFit(): void;
		/** Gets the default value for the Dynamic property of new links. */
		getDynamicLinks(): boolean;
		/** Sets the default value for the Dynamic property of new links. */
		setDynamicLinks(value: boolean): void;
		/** Gets the active diagram element.
		 * @return The active item; null if no item is active.
		*/
		getActiveItem(): DiagramItem;
		/** Gets how users can start modifying diagram items. */
		getModificationStart(): ModificationStart;
		/** Sets how users can start modifying diagram items. */
		setModificationStart(value: ModificationStart): void;
		/** Gets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes. */
		getRouteLinks(): boolean;
		/** Sets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes. */
		setRouteLinks(value: boolean): void;
		/** Gets the minimal distance between nodes and auto-routed links. */
		getRouteMargin(): number;
		/** Sets the minimal distance between nodes and auto-routed links. */
		setRouteMargin(value: number): void;
		/** Routes all links in the diagram in such a way they do not cross nodes. */
		routeAllLinks(): void;
		/** Gets a Selection instance that represents the selection of items in this diagram.
		 * @return An instance of the Selection class representing the current selection.
		*/
		getSelection(): Selection;
		/** Gets a value indicating whether multiple selected nodes can be resized simultaneously. */
		getAllowMultipleResize(): boolean;
		/** Sets a value indicating whether multiple selected nodes can be resized simultaneously. */
		setAllowMultipleResize(value: boolean): void;
		/** Gets a value indicating whether users are allowed to draw links that are not connected to any node. */
		getAllowUnconnectedLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw links that are not connected to any node. */
		setAllowUnconnectedLinks(value: boolean): void;
		/** Gets the default placement and orientation for links' text. */
		getLinkTextStyle(): LinkTextStyle;
		/** Sets the default placement and orientation for links' text. */
		setLinkTextStyle(value: LinkTextStyle): void;
		/** Gets the size of adjustment handles that appear around selected items. */
		getAdjustmentHandlesSize(): number;
		/** Sets the size of adjustment handles that appear around selected items. */
		setAdjustmentHandlesSize(value: number): void;
		/** Gets a value indicating whether adjustment handles are painted when they are disabled. */
		getShowDisabledHandles(): boolean;
		/** Sets a value indicating whether adjustment handles are painted when they are disabled. */
		setShowDisabledHandles(value: boolean): void;
		/** Gets a value indicating whether and when anchor point marks are displayed. */
		getShowAnchors(): ShowAnchors;
		/** Sets a value indicating whether and when anchor point marks are displayed. */
		setShowAnchors(value: ShowAnchors): void;
		/** Gets a value indicating how the control responds to user actions. */
		getBehavior(): Behavior;
		/** Sets a value indicating how the control responds to user actions. */
		setBehavior(value: Behavior): void;
		/** Gets a value indicating whether the alignment grid is visible. */
		getShowGrid(): boolean;
		/** Sets a value indicating whether the alignment grid is visible. */
		setShowGrid(value: boolean): void;
		/** Gets a value indicating whether the diagram items should be aligned to a grid. */
		getAlignToGrid(): boolean;
		/** Sets a value indicating whether the diagram items should be aligned to a grid. */
		setAlignToGrid(value: boolean): void;
		/** Gets the color of the grid points. */
		getGridColor(): string;
		/** Sets the color of the grid points. */
		setGridColor(value: string): void;
		/** Gets the horizontal distance between adjacent grid points. */
		getGridSizeX(): number;
		/** Sets the horizontal distance between adjacent grid points. */
		setGridSizeX(value: number): void;
		/** Gets the vertical distance between adjacent grid points. */
		getGridSizeY(): number;
		/** Sets the vertical distance between adjacent grid points. */
		setGridSizeY(value: number): void;
		/** Gets the horizontal offset of the first point of the alignment grid. */
		getGridOffsetX(): number;
		/** Sets the horizontal offset of the first point of the alignment grid. */
		setGridOffsetX(value: number): void;
		/** Gets the vertical offset of the first point of the alignment grid. */
		getGridOffsetY(): number;
		/** Sets the vertical offset of the first point of the alignment grid. */
		setGridOffsetY(value: number): void;
		/** Gets the visual style of the alignment grid. */
		getGridStyle(): GridStyle;
		/** Sets the visual style of the alignment grid. */
		setGridStyle(value: GridStyle): void;
		/** Gets the size of shapes used to represent grid points. */
		getGridPointSize(): number;
		/** Sets the size of shapes used to represent grid points. */
		setGridPointSize(value: number): void;
		/** Returns a point of the alignment grid nearest to the one passed as an argument.
		 * @param point A point specified in diagram coordinates.
		 * @return A point from the alignment grid.
		*/
		alignPointToGrid(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
		/** Gets a value indicating whether the lane grid is visible. */
		getShowLaneGrid(): boolean;
		/** Sets a value indicating whether the lane grid is visible. */
		setShowLaneGrid(value: boolean): void;
		/** Gets the lane grid.
		 * @return An instance of the MindFusion.Diagramming.Lanes.Grid class.
		*/
		getLaneGrid(): MindFusion.Diagramming.Lanes.Grid;
		/** Gets a value indicating the link direction in which tree branches are expanded. */
		getExpandOnIncoming(): boolean;
		/** Sets a value indicating the link direction in which tree branches are expanded. */
		setExpandOnIncoming(value: boolean): void;
		/** Gets a value indicating whether newly created nodes can be collapsed and expanded by users. */
		getNodesExpandable(): boolean;
		/** Sets a value indicating whether newly created nodes can be collapsed and expanded by users. */
		setNodesExpandable(value: boolean): void;
		/** Gets the style associated with this diagram. */
		getStyle(): Style;
		/** Sets the style associated with this diagram. */
		setStyle(value: Style): void;
		/** Gets the theme associated with this diagram. */
		getTheme(): Theme;
		/** Sets the theme associated with this diagram. */
		setTheme(value: Theme): void;
		/** Gets custom data associated with this diagram. */
		getTag(): any;
		/** Sets custom data associated with this diagram. */
		setTag(value: any): void;
		/** Gets a value indicating whether virtual scroll mode is enabled. */
		getVirtualScroll(): boolean;
		/** Sets a value indicating whether virtual scroll mode is enabled. */
		setVirtualScroll(value: boolean): void;
		/** Gets the delay in milliseconds before a tooltip is shown. */
		getTooltipDelay(): number;
		/** Sets the delay in milliseconds before a tooltip is shown. */
		setTooltipDelay(value: number): void;
		/** Gets a value specifying how far from a link a click is still considered a hit. */
		getLinkHitDistance(): number;
		/** Sets a value specifying how far from a link a click is still considered a hit. */
		setLinkHitDistance(value: number): void;
		/** Gets a value indicating how to render the intersection points where two links cross each other. */
		getLinkCrossings(): LinkCrossings;
		/** Sets a value indicating how to render the intersection points where two links cross each other. */
		setLinkCrossings(value: LinkCrossings): void;
		/** Gets the radius length of decorations displayed at link intersection points. */
		getCrossingRadius(): number;
		/** Sets the radius length of decorations displayed at link intersection points. */
		setCrossingRadius(value: number): void;
		/** Gets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded. */
		getRoundedLinks(): boolean;
		/** Sets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded. */
		setRoundedLinks(value: boolean): void;
		/** Gets the radius of joint arcs of rounded links' segments. */
		getRoundedLinksRadius(): number;
		/** Sets the radius of joint arcs of rounded links' segments. */
		setRoundedLinksRadius(value: number): void;
		/** Gets a value indicating whether the document area should be resized automatically so it fits the diagram contents. */
		getAutoResize(): AutoResize;
		/** Sets a value indicating whether the document area should be resized automatically so it fits the diagram contents. */
		setAutoResize(value: AutoResize): void;
		/** Gets a value indicating whether auto scrolling of the document area is enabled. */
		getAutoScroll(): boolean;
		/** Sets a value indicating whether auto scrolling of the document area is enabled. */
		setAutoScroll(value: boolean): void;
		/** Gets the size of the auto scroll zone near the edges of the control. */
		getScrollZoneSize(): number;
		/** Sets the size of the auto scroll zone near the edges of the control. */
		setScrollZoneSize(value: number): void;
		/** Gets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		getAutoScrollAmount(): number;
		/** Sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		setAutoScrollAmount(value: number): void;
		/** Gets a value indicating whether the magnifier tool is currently enabled. */
		getMagnifierEnabled(): boolean;
		/** Sets a value indicating whether the magnifier tool is currently enabled. */
		setMagnifierEnabled(value: boolean): void;
		/** Gets the zoom factor of the magnifier tool. */
		getMagnifierFactor(): number;
		/** Sets the zoom factor of the magnifier tool. */
		setMagnifierFactor(value: number): void;
		/** Gets the width of the magnifier tool. */
		getMagnifierWidth(): number;
		/** Sets the width of the magnifier tool. */
		setMagnifierWidth(value: number): void;
		/** Gets the height of the magnifier tool. */
		getMagnifierHeight(): number;
		/** Sets the height of the magnifier tool. */
		setMagnifierHeight(value: number): void;
		/** Gets the thickness of the magnifier frame. */
		getMagnifierFrameThickness(): number;
		/** Sets the thickness of the magnifier frame. */
		setMagnifierFrameThickness(value: number): void;
		/** Gets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading. */
		getMagnifierShading(): boolean;
		/** Sets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading. */
		setMagnifierShading(value: boolean): void;
		/** Gets a reference to the geometric shape definition of the magnifier tool. */
		getMagnifierShape(): Shape;
		/** Sets a reference to the geometric shape definition of the magnifier tool. */
		setMagnifierShape(value: Shape): void;
		/** Gets the color of the magnifier tool's frame. */
		getMagnifierFrameColor(): string;
		/** Sets the color of the magnifier tool's frame. */
		setMagnifierFrameColor(value: string): void;
		/** Gets the color of the magnifier tool's secondary frame. */
		getMagnifierSecondaryFrameColor(): string;
		/** Sets the color of the magnifier tool's secondary frame. */
		setMagnifierSecondaryFrameColor(value: string): void;
		/** Gets an object that allows changing the function of keyboard modifier keys such as Ctrl and Alt.
		 * @return An instance of the ModifierKeyActions class.
		*/
		getModifierKeyActions(): ModifierKeyActions;
		/** Gets a combination of flags that specify what actions can be performed via the left mouse button. */
		getLeftButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the left mouse button. */
		setLeftButtonActions(value: MouseButtonActions): void;
		/** Gets a combination of flags that specify what actions can be performed via the middle mouse button. */
		getMiddleButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the middle mouse button. */
		setMiddleButtonActions(value: MouseButtonActions): void;
		/** Gets a combination of flags that specify what actions can be performed via the right mouse button. */
		getRightButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the right mouse button. */
		setRightButtonActions(value: MouseButtonActions): void;
		/** Gets true if undo is enabled, otherwise false. */
		getUndoEnabled(): boolean;
		/** Sets true if undo is enabled, otherwise false. */
		setUndoEnabled(value: boolean): void;
		/** Gets the horizontal offset of diagram items' shadows. */
		getShadowOffsetX(): number;
		/** Sets the horizontal offset of diagram items' shadows. */
		setShadowOffsetX(value: number): void;
		/** Gets the vertical offset of diagram items' shadows. */
		getShadowOffsetY(): number;
		/** Sets the vertical offset of diagram items' shadows. */
		setShadowOffsetY(value: number): void;
		/** Gets a value specifying how diagram items' shadows should be rendered. */
		getShadowsStyle(): ShadowsStyle;
		/** Sets a value specifying how diagram items' shadows should be rendered. */
		setShadowsStyle(value: ShadowsStyle): void;
		/** Gets the location of a shape library file containing custom shape definitions. */
		getShapeLibraryLocation(): string;
		/** Sets the location of a shape library file containing custom shape definitions. */
		setShapeLibraryLocation(value: string): void;
		/** Gets the type of a MindFusion.Diagramming.DiagramNode derived class whose instance should be created when a user starts drawing. */
		getCustomNodeType(): any;
		/** Sets the type of a MindFusion.Diagramming.DiagramNode derived class whose instance should be created when a user starts drawing. */
		setCustomNodeType(value: any): void;
		/** Rearranges link labels whose AutoArrange property is enabled. */
		arrangeLinkLabels(): void;
		/** Undoes an action saved in the command history. */
		undo(): void;
		/** Executes again an action saved in the command history. */
		redo(): void;
		/** Starts recording undo/redo commands into a CompositeCommand. */
		startCompositeOperation(): void;
		/** Stops recording undo/redo commands into a CompositeCommand and saves the composite in the history queue. */
		commitCompositeOperation(): void;
		/** Stops recording undo/redo commands into a CompositeCommand and discards the records created so far. */
		cancelCompositeOperation(): void;
		/** Executes the specified command on this diagram.
		 * @param command The Command to execute.
		*/
		executeCommand(command: Command): void;
		/** Gets an array containing all effects applied to the nodes of this diagram.
		 * @return An array containing all node effects.
		*/
		getNodeEffects(): Array<NodeEffect>;
		/** Arranges the diagram using the specified layout algorithm.
		 * @param layout An instance of Layout -derived class representing the algorithm to apply.
		*/
		arrange(layout: MindFusion.Graphs.Layout): void;
		/** Arranges the diagram using the given layout, and animates items moving to their new positions.
		 * @param layout The layout algorithm to apply.
		 * @param duration An integer, specifying the duration of the animation in milliseconds.
		 * @param animationType A member of the AnimationType enumeration, specifying the animation type to use.
		 * @param easingType A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.
		*/
		arrangeAnimated(layout: MindFusion.Graphs.Layout, duration?: number, animationType?: MindFusion.Animations.AnimationType, easingType?: MindFusion.Animations.EasingType): void;
		/** Gets the object used to find paths for auto-routed links when diagram nodes are added or their positions change. */
		getLinkRouter(): Router;
		/** Sets the object used to find paths for auto-routed links when diagram nodes are added or their positions change. */
		setLinkRouter(value: Router): void;
		/** Gets a value indicating whether users are allowed to draw reflexive links. */
		getAllowSelfLoops(): boolean;
		/** Sets a value indicating whether users are allowed to draw reflexive links. */
		setAllowSelfLoops(value: boolean): void;
		/** Determines whether a manipulator object of an item is located at the specified point.
		 * @param mousePosition A Point value specifying where to look for a manipulator object.
		 * @return Returns a Manipulator instance representing the manipulator object found at the specified location, or null if there is none.
		*/
		hitTestManipulators(mousePosition: MindFusion.Drawing.Point): Manipulator;
		record(): void;
		/** Stops recording mouse and keyboard events.
		 * @return An array of event records representing user's input.
		*/
		stopRecording(): Array<any>;
		/** Replays a sequence of recorded mouse and keyboard events created by record and stopRecording methods.
		 * @param recording An array of event records returned by stopRecording.
		 * @param timer true to replay records using a timer, preserving their original relative timing, or false to replay them immediately.
		 * @param savedState A diagram JSON string that should be loaded before replaying recorded events.
		*/
		replay(recording: Array<any>, timer: boolean, savedState?: string): void;
		/** Set this flag to true to suppress changes of the Dirty property. */
		static suppressSetDirty: boolean;
		/** Forces the removal of any created tooltips from the diagram canvas. */
		clearTooltip(): void;
	}
	/** Identifies the adjustment handles of a node. */
	enum AdjustmentHandles
	{
		/** Specifies that none of the selection handles can be used to modify a node. */
		None = 0,
		/** The top-left handle is enabled and can be used to resize the node. */
		ResizeTopLeft = 1,
		/** The top-right handle is enabled and can be used to resize the node. */
		ResizeTopRight = 2,
		/** The bottom-right handle is enabled and can be used to resize the node. */
		ResizeBottomRight = 4,
		/** The bottom-left handle is enabled and can be used to resize the node. */
		ResizeBottomLeft = 8,
		/** The top-center handle is enabled and can be used to resize the node vertically. */
		ResizeTopCenter = 16,
		/** The middle-right handle is enabled and can be used to resize the node horizontally. */
		ResizeMiddleRight = 32,
		/** The bottom-center handle is enabled and can be used to resize the node vertically. */
		ResizeBottomCenter = 64,
		/** The middle-left handle is enabled and can be used to resize the node horizontally. */
		ResizeMiddleLeft = 128,
		/** The center selection handle is enabled and can be used to move the node. */
		Move = 256,
		/** The rotation handle is enabled and can be used to rotate the node. */
		Rotate = 512,
		/** All selection handles are enabled and can be used to modify the node. */
		All = 1023
	}
	/** Defines values that specify how the component responds to actions performed by the user. */
	enum Behavior
	{
		/** Objects can be selected and modified. New objects cannot be created. */
		Modify = 0,
		/** Drawing with the mouse creates ShapeNode instances. */
		DrawShapes = 1,
		/** Drawing started over a node creates a DiagramLink. Otherwise a lasso rectangle is displayed allowing the selection of items. */
		DrawLinks = 2,
		/** A mode that is suitable for creating flowcharts and process diagrams. Drawing over empty document area creates a ShapeNode instance. Drawing started over a node creates a DiagramLink. */
		LinkShapes = 3,
		/** A mode that is suitable for creating entity-relationship diagrams. Drawing over empty document area creates a TableNode instance. Drawing started over a node creates a DiagramLink. */
		LinkTables = 4,
		/** Drawing with the mouse creates TableNode instances. */
		DrawTables = 5,
		/** The control ignores users actions with the mouse, but raises the appropriate mouse events. This mode allows applications to implement their own mouse-drawing behavior, disabling the default response to users actions. */
		DoNothing = 8,
		/** Drawing with the mouse creates instances of the type assigned to CustomNodeType. */
		Custom = 9,
		/** Drawing with the mouse creates ContainerNode instances. */
		DrawContainers = 10,
		/** Drawing over empty document area creates a ContainerNode instance. Drawing started over a node creates a DiagramLink. */
		LinkContainers = 11,
		/** Dragging with depressed mouse button pans the view. */
		Pan = 12,
		/** Drawing with the mouse creates SvgNode instances. */
		DrawSvgNodes = 15,
		/** Drawing over empty document area creates an SvgNode instance. Drawing started over a node creates a DiagramLink. */
		LinkSvgNodes = 16,
		/** Allow only selection of existing items. Modifying them or drawing new ones is disabled. */
		SelectOnly = 17
	}
	/** Specifies whether links should connect to a node or its rows. */
	enum ConnectionStyle
	{
		/** Links should connect to the table node when drawn interactively. */
		Node = 0,
		/** Links should connect to one of the table's rows when drawn interactively. */
		Rows = 1
	}
	/** Specifies the type of action performed when the user presses the DEL key. */
	enum DelKeyAction
	{
		/** Indicates that nothing happens. */
		None = 0,
		/** Indicates that only the ActiveItem is deleted. */
		DeleteActiveItem = 1,
		/** Indicates that all selected items are deleted. */
		DeleteSelectedItems = 2
	}
	/** Enumerates possible shadows-drawing styles. */
	enum ShadowsStyle
	{
		/** There are no shadows drawn. */
		None = 0,
		/** All shadows are drawn at the lowest z-level, and appear to be on one level. */
		OneLevel = 1,
		/** Every shadows is drawn just under its object, possibly covering other objects. */
		ZOrder = 2
	}
	/** Defines the possible values for Shape property of tables and containers. */
	enum SimpleShape
	{
		/** Node's shape is a rectangle. */
		Rectangle = 0,
		/** Node's shape is a rounded rectangle. */
		RoundedRectangle = 1
	}
	/** Specifies the style of the cells' frame lines. */
	enum CellFrameStyle
	{
		/** Table cells have no border. */
		None = 0,
		/** The border of table cells is a simple line. */
		Simple = 1,
		/** The border has 3D appearance. */
		System3D = 2
	}
	/** Identifies the visual style of frames and handles drawn around selected nodes. */
	enum HandlesStyle
	{
		/** There is no visible difference between selected and unselected node. */
		Invisible = 0,
		/** If selected, the node is drawn with square modification handles. */
		SquareHandles = 1,
		/** If selected, a node is drawn with a dashed frame. The frame enables resizing the node. The center of the node allows moving it and the edge area enables creating links. */
		DashFrame = 2,
		/** If selected, the item is drawn with hatched frame. Modifications can be done as with DashFrame. */
		HatchFrame = 3,
		/** If selected, a node is drawn with both hatched frame and modification handles. The frame enable moving the node, and the handles enable resizing. Links are created from any point of the interior. */
		HatchHandles = 4,
		/** Looks like HatchHandles, but allows moving the node from the interior area. Links are created from the points near the edge. */
		HatchHandles2 = 5,
		/** Behaves like HatchHandles2, but paints the selection frame using a denser brush pattern. */
		HatchHandles3 = 6,
		/** If a node is selected, it can be only moved. Best used with ModificationStart set to AutoHandles. */
		MoveOnly = 7,
		/** Any point of the interior of a node enables moving the node, except a small area in the center that allows creating links. Best used with ModificationStart set to AutoHandles. */
		EasyMove = 8,
		/** Square resize handles are drawn around a selected node. There isn't a move handle in the center as with the SquareHandles style, but nodes can be moved by dragging their interior or caption areas. Links can be created by drawing from near the edges of a node. */
		SquareHandles2 = 9,
		/** The control raises the drawAdjustmentHandles and hitTestAdjustmentHandles events to let your application perform custom drawing and hit testing of selection handles. */
		Custom = 10,
		/** There aren't any selection handles displayed. The selected node can be only moved, but not resized. */
		InvisibleMove = 11,
		/** Corner resize handles are round, remaining handles are square. */
		RoundAndSquare = 12,
		/** Corner resize handles are round, remaining handles are square. In addition, there is a dashed frame drawn around selected nodes. */
		RoundAndSquare2 = 13
	}
	/** Specifies available styles for the segments of links. */
	enum LinkShape
	{
		/** The segments of a link are Bézier curves. */
		Bezier = 0,
		/** The segments of a link are straight lines. */
		Polyline = 1,
		/** The segments of a link are alternating horizontal and vertical lines, orthogonal to each other. */
		Cascading = 2,
		/** The segments of a link are curves forming an interpolating spline that passes through all control points. */
		Spline = 3
	}
	/** Specifies the position and alignment of links' labels. */
	enum LinkTextStyle
	{
		/** The text is displayed horizontally above the middle link segment or control point, depending on whether there are an odd or even number of segments. */
		Center = 0,
		/** The text is displayed rotated at the same angle as the segment where the text is placed. A long enough segment from the middle link segments is chosen for that purpose. */
		Rotate = 1,
		/** The text follows the longest link segment and is displayed centered at the segment's middle point. */
		OverLongestSegment = 2,
		/** The label text starts from the first point of the link and follows the path defined by the link segments. This style is useful for displaying long text. */
		Follow = 3,
		/** The text is displayed horizontally above the middle link segment. If there are an even number of segments, the label is drawn over the longer from the two segments adjacent to the middle control point. */
		MiddleSegment = 4,
		/** The text is displayed rotated at the same angle as the segment where the text is placed. A long enough segment from the middle link segments is chosen for that purpose. */
		MiddleSegmentRotated = 5
	}
	/** Specifies what actions can be associated with the middle and right mouse buttons. */
	enum MouseButtonActions
	{
		/** Do not associate any action with the button. */
		None = 0,
		/** Pans the view if the mouse is dragged while the button is pressed down. */
		Pan = 1,
		/** Cancels the current drawing operation. */
		Cancel = 2,
		/** Starts a multiple selection operation. */
		Select = 4,
		/** Draw new items or modify existing items. */
		Draw = 8,
		/** Magnifies the items under the mouse while the button is pressed down. */
		Magnify = 16
	}
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
	/** Specifies the orientation of user interface elements. */
	enum Orientation
	{
		/** Select orientation automatically. */
		Auto = 0,
		/** Specifies horizonal orientation. */
		Horizontal = 1,
		/** Specifies vertical orientation. */
		Vertical = 2
	}
	/** Defines values that indicate how to render link intersection points. */
	enum LinkCrossings
	{
		/** No special indication for link intersection points. */
		Straight = 0,
		/** An arc is drawn at the intersection point of two links. It connects the segments of the link at higher Z position and goes over the link at lower Z. */
		Arcs = 1,
		/** The intersection segments of links at lower Z position are cut by links at higher Z position. */
		Cut = 2
	}
	/** Specifies how the user can start modifying an item. */
	enum ModificationStart
	{
		/** Only selected objects can be modified. */
		SelectedOnly = 0,
		/** Adjustment handles appear automatically around the object under mouse pointer letting users start modification without selecting it first. */
		AutoHandles = 1
	}
	/** Defines in which directions automatic resizing can enlarge the diagram scrollable area. */
	enum AutoResize
	{
		/** Do not enlarge the diagram area automatically. */
		None = 0,
		/** Enlarge the diagram area to the right and down if an item is moved outside the boundaries in these directions. */
		RightAndDown = 1,
		/** Enlarge the diagram area in any direction if an item is moved outside the boundaries. */
		AllDirections = 2
	}
	/** Defines the actions that can be assigned to a modifier key such as CTRL or ALT. */
	enum ModifierKeyAction
	{
		/** Specifies that a modifier key does not have any specific function assigned to it. */
		None = 0,
		/** Pan the view if the mouse is dragged while the modifier key is pressed down. */
		Pan = 1,
		/** Start drawing a selection rectangle if the mouse is dragged while a modifier key is pressed down. Toggle the selection if an item is clicked while the key is down. */
		Select = 2,
		/** While the modifier key is pressed down, dragging the mouse starts creating a new item or drawing a selection rectangle instead of modifying a selected item. Otherwise, dragging the mouse could start modification of the selected item. */
		OverrideBehavior = 3,
		/** Magnifies the diagram objects under the mouse while the modifier key is pressed down. */
		Magnify = 4
	}
	/** Specifies in what format to save the diagram when generating a string using the saveToString method. */
	enum SaveToStringFormat
	{
		/** Indicates JSON format. */
		Json = 0,
		/** Indicates XML format. */
		Xml = 1
	}
	/** Maps keyboard modifier keys to special actions in MindFusion.Diagramming such as panning and drawing selection rectangle. */
	class ModifierKeyActions
	{
		/** Gets the action triggered by the CTRL key. */
		getControl(): ModifierKeyAction;
		/** Sets the action triggered by the CTRL key. */
		setControl(value: ModifierKeyAction): void;
		/** Gets the action triggered by the SHIFT key. */
		getShift(): ModifierKeyAction;
		/** Sets the action triggered by the SHIFT key. */
		setShift(value: ModifierKeyAction): void;
		/** Gets the action triggered by the ALT key. */
		getAlt(): ModifierKeyAction;
		/** Sets the action triggered by the ALT key. */
		setAlt(value: ModifierKeyAction): void;
	}
	class XmlPersistContext
	{
	}
	/** Provides shortcut methods for creating and adding instances of the standard item types. */
	class Factory
	{
		/** Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created ShapeNode instance.
		*/
		createShapeNode(x: number, y: number, width: number, height: number): ShapeNode;
		/** Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param bounds The bounding rectangle of the new node.
		 * @return The newly created ShapeNode instance.
		*/
		createShapeNode(bounds: MindFusion.Drawing.Rect): ShapeNode;
		/** Creates a new TableNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created TableNode instance.
		*/
		createTableNode(x: number, y: number, width: number, height: number): TableNode;
		/** Creates a new ContainerNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created ContainerNode instance.
		*/
		createContainerNode(x: number, y: number, width: number, height: number): ContainerNode;
		/** Creates a new SvgNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created SvgNode instance.
		*/
		createSvgNode(x: number, y: number, width: number, height: number): SvgNode;
		/** Creates a new DiagramLink instance between the specified nodes and adds it to the links collection of the underlying diagram.
		 * @param origin The origin node.
		 * @param destination The destination node.
		 * @return The newly created DiagramLink instance.
		*/
		createDiagramLink(origin: DiagramNode, destination: DiagramNode): DiagramLink;
	}
	/** Represents a set of appearance properties whose values can be inherited from parent objects if not set locally for an item. */
	class Style
	{
		/** Initializes a new instance of the Style class. */
		constructor();
		/** Gets the brush used to fill the interior of diagram items. */
		getBrush(): any;
		/** Sets the brush used to fill the interior of diagram items. */
		setBrush(value: any): void;
		/** Gets the brush used to fill the diagram background. */
		getBackBrush(): any;
		/** Sets the brush used to fill the diagram background. */
		setBackBrush(value: any): void;
		/** Gets the color used to stroke the frame of diagram items. */
		getStroke(): string;
		/** Sets the color used to stroke the frame of diagram items. */
		setStroke(value: string): void;
		/** Gets the line width applied when stroking the frame of diagram items. */
		getStrokeThickness(): number;
		/** Sets the line width applied when stroking the frame of diagram items. */
		setStrokeThickness(value: number): void;
		/** Gets the line dash pattern applied when stroking the frame of diagram items. */
		getStrokeDashStyle(): MindFusion.Drawing.DashStyle;
		/** Sets the line dash pattern applied when stroking the frame of diagram items. */
		setStrokeDashStyle(value: MindFusion.Drawing.DashStyle): void;
		/** Gets the color used to draw text of diagram items. */
		getTextColor(): string;
		/** Sets the color used to draw text of diagram items. */
		setTextColor(value: string): void;
		/** Gets the name of the font used to draw text of diagram items. */
		getFontName(): string;
		/** Sets the name of the font used to draw text of diagram items. */
		setFontName(value: string): void;
		/** Gets the size of the font used to draw text of diagram items. */
		getFontSize(): number;
		/** Sets the size of the font used to draw text of diagram items. */
		setFontSize(value: number): void;
		/** Gets the style of the font used to draw text of diagram items. */
		getFontStyle(): MindFusion.Drawing.FontStyle;
		/** Sets the style of the font used to draw text of diagram items. */
		setFontStyle(value: MindFusion.Drawing.FontStyle): void;
		/** Gets the color used to draw shadows of diagram items. */
		getShadowColor(): string;
		/** Sets the color used to draw shadows of diagram items. */
		setShadowColor(value: string): void;
		/** Gets a list containing all effects applied to the nodes of this diagram. */
		getNodeEffects(): Array<NodeEffect>;
		/** Sets a list containing all effects applied to the nodes of this diagram. */
		setNodeEffects(value: Array<NodeEffect>): void;
		/** Returns a builder object, associated with this Style instance.
		 * @return A Builder instance.
		*/
		init(): StyleBuilder;
		/** Returns a builder object.
		 * @return A Builder instance.
		*/
		static With(): StyleBuilder;
	}
	/** Represents a set of Style objects whose properties are used to render items of a specific type in the current diagram. */
	class Theme
	{
		/** Initializes a new instance of the Theme class. */
		constructor();
		/** A dictionary object that maps item type identifiers to Style objects. */
		styles: any;
	}
	/** Represents geometric shapes defined via series of arc, line and Bezier segments. */
	class Shape
	{
		/** Initializes a new instance of the Shape class.
		 * @param params An object containing the shape definitions and properties.
		*/
		constructor(params: any);
		/** Gets the id of this Shape.
		 * @return The id.
		*/
		getId(): string;
		/** Returns a reference to the shape with the specified string identifier.
		 * @param id The identifier of the shape to return.
		 * @return A reference to the Shape with the specified identifier or a null if there is no such shape.
		*/
		static fromId(id: string): Shape;
		static shapes: Array<any>;
		/** Creates a shape component.
		 * @param id The identifier of the shape.
		 * @param isOutline A value indicating whether this shape defines the outline of its host node.
		 * @param node The host node of this component.
		 * @return A reference to a Shape component with the specified identifier.
		*/
		static component(id: string, isOutline?: boolean, node?: CompositeNode): Shape;
		/** Gets an object that specifies how to paint the interior of the Shape. */
		getBrush(): any;
		/** Sets an object that specifies how to paint the interior of the Shape. */
		setBrush(value: any): void;
		/** Gets an object used to paint the frame of the Shape. */
		getPen(): string;
		/** Sets an object used to paint the frame of the Shape. */
		setPen(value: string): void;
	}
	/** Represents a label displayed by a DiagramLink. New labels can be added to a link by calling its addLabel method. */
	class LinkLabel
	{
		/** Initializes a new instance of the LinkLabel class.
		 * @param link The DiagramLink that displays this label.
		 * @param text The label's text.
		*/
		constructor(link: DiagramLink, text: string);
		/** Positions this label relatively to the specified link segment.
		 * @param segment The segment index.
		 * @param dx Horizontal offset from the segment center.
		 * @param dy Vertical offset from the segment center.
		*/
		setSegmentPosition(segment: number, dx: number, dy: number): void;
		/** Positions this label relatively to the specified control point.
		 * @param controlPoint The control point index.
		 * @param dx Horizontal offset from the control point.
		 * @param dy Vertical offset from the control point.
		*/
		setControlPointPosition(controlPoint: number, dx: number, dy: number): void;
		/** Positions this label relatively to the link length.
		 * @param lengthFactor A value between 0 and 1 specifying the position of the label relatively to the link's length.
		*/
		setLinkLengthPosition(lengthFactor: number): void;
		/** Gets a value indicating whether the label can be auto arranged. */
		getAutoArrange(): boolean;
		/** Sets a value indicating whether the label can be auto arranged. */
		setAutoArrange(value: boolean): void;
		/** Gets a string specifying the color of this label's text. */
		getTextColor(): string;
		/** Sets a string specifying the color of this label's text. */
		setTextColor(value: string): void;
		/** Gets the font used to render this label's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this label's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets the label's text. */
		getText(): string;
		/** Sets the label's text. */
		setText(value: string): void;
		/** Gets the label's horizontal alignment. */
		getHorizontalAlign(): Alignment;
		/** Sets the label's horizontal alignment. */
		setHorizontalAlign(value: Alignment): void;
		/** Gets the label's vertical alignment. */
		getVerticalAlign(): Alignment;
		/** Sets the label's vertical alignment. */
		setVerticalAlign(value: Alignment): void;
		/** Gets the label's margin. */
		getMargin(): MindFusion.Drawing.Thickness;
		/** Sets the label's margin. */
		setMargin(value: MindFusion.Drawing.Thickness): void;
		/** Gets the brush used to draw the label's background. */
		getBrush(): any;
		/** Sets the brush used to draw the label's background. */
		setBrush(value: any): void;
	}
	/** Represents a set of anchor points, which specify the exact locations where links are allowed to connect to nodes. */
	class AnchorPattern
	{
		/** Initializes a new instance of the AnchorPattern class.
		 * @param points Contains the initial set of AnchorPoint instances for the new pattern.
		 * @param patternId A unique identifier for this anchor pattern.
		*/
		constructor(points: Array<AnchorPoint>, patternId?: string);
		/** Gets the collection of anchor points in this pattern. */
		getPoints(): Array<AnchorPoint>;
		/** Sets the collection of anchor points in this pattern. */
		setPoints(value: Array<AnchorPoint>): void;
		/** Gets the AnchorPattern's unique identifier.
		 * @return The AnchorPattern id.
		*/
		getId(): string;
		/** Returns a reference to the anchor pattern with the specified string identifier.
		 * @param id A string identifying an AnchorPattern instance.
		 * @return The AnchorPattern object whose Id is equal to the id parameter.
		*/
		static fromId(id: string): AnchorPattern;
		/** Incoming links can connect with the top and left middle points; outgoing links can start from the right and bottom middle points. */
		static decision2In2Out: AnchorPattern;
		/** Incoming links connect to the top middle point; outgoing links can start from the other middle points. */
		static decision1In3Out: AnchorPattern;
		/** The middle point of a node's bounding rectangle left side is anchor for incoming links; that on the right side - for outgoing ones. */
		static leftInRightOut: AnchorPattern;
		/** The middle point of a node's bounding rectangle top side is anchor for incoming links; that on the bottom - for outgoing ones. */
		static topInBottomOut: AnchorPattern;
	}
	/** Specifies how the ResizeToFitText method should resize a node. */
	enum FitSize
	{
		/** The original width of the node should remain intact. */
		KeepWidth = 0,
		/** The original height of the node should remain intact. */
		KeepHeight = 1,
		/** Allow changing both the width and height of a node, but keep the original width/height ratio if possible. */
		KeepRatio = 2
	}
	/** Defines values that specify the visual style of the alignment grid. */
	enum GridStyle
	{
		/** The grid is painted as a matrix of points. */
		Points = 0,
		/** The grid is represented as a series of crossing horizontal and vertical lines. */
		Lines = 1,
		/** The grid is painted as a matrix of crosses. */
		Crosses = 2
	}
	/** Specifies how table columns' width is set. */
	enum ColumnStyle
	{
		/** The column has fixed unchangeable width. */
		FixedWidth = 0,
		/** The column's width changes when the table is resized. */
		AutoWidth = 1
	}
	/** Represents a row of a TableNode. */
	class Row
	{
		height: number;
	}
	/** Represents a column of a TableNode. */
	class Column
	{
		width: number;
		columnStyle: ColumnStyle;
	}
	/** Specifies the visual style of anchor point marks. */
	enum MarkStyle
	{
		/** No visual indication for the anchor point. */
		None = 0,
		/** Anchor point marked with a cross. */
		Cross = 1,
		/** Anchor point marked with an 'X'. */
		X = 2,
		/** Anchor point marked with a circle. */
		Circle = 3,
		/** Anchor point marked with a rectangle. */
		Rectangle = 4
	}
	/** Specifies when anchors points should be displayed. */
	enum ShowAnchors
	{
		/** Anchor point marks are always painted. */
		Always = 0,
		/** Anchor point marks are never painted. */
		Never = 1,
		/** Anchor point marks are shown for the node under the mouse cursor. */
		Auto = 2,
		/** Anchor point marks are painted for the selected node. */
		Selected = 4
	}
	/** Represents a location in a node to which links are allowed to connect. */
	class AnchorPoint
	{
		/** Initializes a new instance of the AnchorPoint class.
		 * @param x The horizontal position of the anchor point expressed as percentage of node's width.
		 * @param y The vertical position of the anchor point expressed as percentage of node's height.
		 * @param allowIncoming Specifies whether incoming links can anchor to this point.
		 * @param allowOutgoing Specifies whether outgoing links can anchor to this point.
		 * @param style Defines how the anchor point is marked visually.
		 * @param color Defines the color with which the anchor mark is painted.
		 * @param size Defines the size of the anchor mark.
		*/
		constructor(x: number, y: number, allowIncoming: boolean, allowOutgoing: boolean, style?: MarkStyle, color?: string, size?: number);
		/** Gets the horizontal position of this point expressed as percentage of a node's width. */
		getX(): number;
		/** Sets the horizontal position of this point expressed as percentage of a node's width. */
		setX(value: number): void;
		/** Gets the vertical position of this point expressed as percentage of a node's height. */
		getY(): number;
		/** Sets the vertical position of this point expressed as percentage of a node's height. */
		setY(value: number): void;
		/** Gets the column index of a cell with which this anchor point is associated. */
		getColumn(): number;
		/** Sets the column index of a cell with which this anchor point is associated. */
		setColumn(value: number): void;
		/** Gets whether incoming links can be connected to this point. */
		getAllowIncoming(): boolean;
		/** Sets whether incoming links can be connected to this point. */
		setAllowIncoming(value: boolean): void;
		/** Gets whether this point accepts outgoing connections. */
		getAllowOutgoing(): boolean;
		/** Sets whether this point accepts outgoing connections. */
		setAllowOutgoing(value: boolean): void;
		/** Gets the appearance of the anchor point mark. */
		getMarkStyle(): MarkStyle;
		/** Sets the appearance of the anchor point mark. */
		setMarkStyle(value: MarkStyle): void;
		/** Gets the color of the anchor point mark. */
		getColor(): string;
		/** Sets the color of the anchor point mark. */
		setColor(value: string): void;
		/** Gets user-defined data associated with the anchor point. */
		getTag(): any;
		/** Sets user-defined data associated with the anchor point. */
		setTag(value: any): void;
		/** Gets tooltip text that should be displayed when the mouse hovers over an anchor point mark. */
		getToolTip(): string;
		/** Sets tooltip text that should be displayed when the mouse hovers over an anchor point mark. */
		setToolTip(value: string): void;
		/** Gets the size of the anchor point mark. */
		getSize(): number;
		/** Sets the size of the anchor point mark. */
		setSize(value: number): void;
	}
	/** Represents the base class of all visual effects that can be applied to the nodes in a Diagram. */
	class NodeEffect
	{
	}
	/** Represents a glass-like visual effect. */
	class GlassEffect extends NodeEffect
	{
		/** Initializes a new instance of the GlassEffect class. */
		constructor();
		/** Gets the type of the glass effect. */
		getType(): GlassEffectType;
		/** Sets the type of the glass effect. */
		setType(value: GlassEffectType): void;
		/** Gets a string specifying the glow color name or hexadecimal value. The default value is white. */
		getGlowColor(): string;
		/** Sets a string specifying the glow color name or hexadecimal value. The default value is white. */
		setGlowColor(value: string): void;
		/** Gets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node. */
		getUsePenAsGlow(): boolean;
		/** Sets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node. */
		setUsePenAsGlow(value: boolean): void;
		/** Gets a string specifying the reflection color name or hexadecimal value. The default value is white. */
		getReflectionColor(): string;
		/** Sets a string specifying the reflection color name or hexadecimal value. The default value is white. */
		setReflectionColor(value: string): void;
	}
	/** Adds semitransparency to the node and emphasizes its outline by adding a shade and an inner stroke. */
	class AeroEffect extends NodeEffect
	{
		/** Initializes a new instance of the AeroEffect class. */
		constructor();
		/** Gets the opacity to apply to the node's background. A floating point value between 0 and 1. */
		getOpacity(): number;
		/** Sets the opacity to apply to the node's background. A floating point value between 0 and 1. */
		setOpacity(value: number): void;
		/** Gets A string specifying the shade color name or hexadecimal value. The default value is black. */
		getShadeColor(): string;
		/** Sets A string specifying the shade color name or hexadecimal value. The default value is black. */
		setShadeColor(value: string): void;
		/** Gets A string specifying the inner outline's color name or hexadecimal value. The default value is white. */
		getInnerOutlineColor(): string;
		/** Sets A string specifying the inner outline's color name or hexadecimal value. The default value is white. */
		setInnerOutlineColor(value: string): void;
	}
	/** Specifies the type of a GlassEffect node effect. */
	enum GlassEffectType
	{
		/** Indicates a glass effect with soft radial glow at the bottom and a sharp reflection at the top. */
		Type1 = 0,
		/** Indicates a glass effect with linear glow at the bottom and sharp reflection at the top. */
		Type2 = 1,
		/** Indicates a glass effect with radial glow at the bottom and smooth reflection and emphasized outline at the top. */
		Type3 = 2,
		/** Indicates a glass effect with sharp reflection at the top and soft glow at the left and right sides. */
		Type4 = 3
	}
	/** Defines all events raised by the Diagram component. */
	class Events
	{
		/** Raised when the user starts drawing a new link, just after the DiagramLink instance is created. */
		static initializeLink: string;
		/** Raised when the user starts drawing a new node, just after the DiagramNode instance is created. */
		static initializeNode: string;
		/** Raised when the user clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkClicked: string;
		/** Raised when the user draws a new link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkCreated: string;
		/** Raised when a link is deleted, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeleted: string;
		/** Raised when the user double-clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDoubleClicked: string;
		/** Raised when the user moves any control point of a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkModified: string;
		/** Raised when the mouse pointer hovers over a link. Event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkPointed: string;
		/** Raised when the user edits the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkTextEdited: string;
		/** Raised when the user clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeClicked: string;
		/** Raised when the user draws a new node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeCreated: string;
		/** Raised when a node is deleted, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeleted: string;
		/** Raised when the user double-clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDoubleClicked: string;
		/** Raised when the user moves or resizes a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeModified: string;
		/** Raised when the mouse pointer hovers over a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodePointed: string;
		/** Raised when the user edits the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeTextEdited: string;
		/** A validation event raised while the user is drawing a new link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkCreating: string;
		/** Raised when the user tries to delete a link, this event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeleting: string;
		/** A validation event raised while the user is modifying a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkModifying: string;
		/** A validation event raised while the user is drawing a new node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeCreating: string;
		/** Raised when the user tries to delete a node, this event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeleting: string;
		/** A validation event raised while the user is moving or resizing a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeModifying: string;
		/** Raised when the user adds a node to a ContainerNode. */
		static containerChildAdded: string;
		/** A validation event raised to let you prevent users from adding child nodes to a container. */
		static containerChildAdding: string;
		/** A validation event raised to let you prevent users from removing child nodes from a container. */
		static containerChildRemoving: string;
		/** Raised when the user removes a node from a ContainerNode. */
		static containerChildRemoved: string;
		/** Raised when the user folds a container by clicking the arrow-up button in the container's caption area. */
		static containerFolded: string;
		/** Raised when the user unfolds a container by clicking the arrow-down button in the container's caption area. */
		static containerUnfolded: string;
		/** Raised when a user expands a tree branch by clicking the [+] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static treeExpanded: string;
		/** Raised when a user collapses a tree branch by clicking the [-] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static treeCollapsed: string;
		/** A validation event raised while the user is moving or resizing multiple items. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static selectionModifying: string;
		/** Raised when the diagram has been repainted. */
		static repaint: string;
		/** Raised when the size of the diagram canvas has changed. */
		static sizeChanged: string;
		/** Raised when a node is selected, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeSelected: string;
		/** Raised when a node is deselected, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeselected: string;
		/** Raised when a link is selected, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkSelected: string;
		/** Raised when a link is deselected, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeselected: string;
		/** Raised when the control is loaded. */
		static controlLoaded: string;
		/** Raised to hit-test custom adjustment handles. */
		static hitTestAdjustmentHandles: string;
		/** Raised to draw custom adjustment handles. */
		static drawAdjustmentHandles: string;
		/** Raised when the user clicks the diagram at a point where no items are located. Event handlers get a DiagramEventArgs instance that contains data about this event. */
		static clicked: string;
		/** Raised when entering inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static enterInplaceEditMode: string;
		/** Raised when leaving inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static leaveInplaceEditMode: string;
		/** Raised to let you create a custom inplace editor control. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static createEditControl: string;
		/** Raised when the user edits the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event. */
		static cellTextEdited: string;
		/** Raised when the used edits the text of a grid cell. The event handlers get a CellEventArgs instance that contains data about this event. */
		static laneGridCellTextEdited: string;
		/** Raised when the Tag or Id of a diagram item must be deserialized from XML format. */
		static deserializeTag: string;
		/** Raised when the user resizes a column in a table interactively. */
		static tableColumnResizing: string;
		/** Raised when the user finishes resizing a column in a table. */
		static tableColumnResized: string;
		/** Raised when the user resizes a row in a table interactively. */
		static tableRowResizing: string;
		/** Raised when the user finishes resizing a row in a table. */
		static tableRowResized: string;
		/** Raised when a node has been pasted from the clipboard. */
		static nodePasted: string;
		/** Raised when a link has been pasted from the clipboard. */
		static linkPasted: string;
		/** Raised when the user starts resizing a header. */
		static headerStartResizing: string;
		/** Raised when the user finished resizing a header. */
		static headerResized: string;
		/** Raised when an item is added to the diagram. */
		static itemAdded: string;
		/** Raised when an item is removed from the diagram. */
		static itemRemoved: string;
		/** Raised when the user clicks a hyperlink inside a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static hyperlinkClicked: string;
	}
	/** The base type of event-arguments objects passed to DiagramItem -related events. */
	class ItemEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
		/** Get the adjustment handle being moved by the user.
		 * @return One of the AdjustmentHandles enumeration values.
		*/
		getAdjustmentHandle(): AdjustmentHandles;
		/** Gets the text that has just been entered by the user.
		 * @return A string specifying the new text of the node.
		*/
		getNewText(): string;
		/** Gets the original text of the node.
		 * @return A string specifying the old text of the node.
		*/
		getOldText(): string;
		/** Gets the canvas rendering context.
		 * @return A CanvasRenderingContext2D used to draw on the Canvas element.
		*/
		getContext(): any;
		/** Gets a value indicating whether the event has been handled. */
		getHandled(): boolean;
		/** Sets a value indicating whether the event has been handled. */
		setHandled(value: boolean): void;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
		/** Immediately cancels current user interaction. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to handlers of node-related events. */
	class NodeEventArgs extends ItemEventArgs
	{
		/** Gets the node for which the event was raised.
		 * @return An instance of the DiagramNode class.
		*/
		getNode(): DiagramNode;
		/** Gets the container a node has been added to or removed from.
		 * @return A ContainerNode instance.
		*/
		getContainer(): ContainerNode;
		/** Gets the hyperlink that was clicked inside a node.
		 * @return The hyperlink that was clicked.
		*/
		getHyperlink(): string;
	}
	/** Contains the arguments passed to handlers of link-related events. */
	class LinkEventArgs extends ItemEventArgs
	{
		/** Gets the link for which the event was raised.
		 * @return A DiagramLink instance.
		*/
		getLink(): DiagramLink;
		/** Gets the link label for which the event was raised.
		 * @return A LinkLabel instance.
		*/
		getLabel(): LinkLabel;
	}
	/** Contains the arguments passed to handlers of selection-related events. */
	class SelectionEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Get the adjustment handle being moved by the user.
		 * @return One of the AdjustmentHandles enumeration values.
		*/
		getAdjustmentHandle(): AdjustmentHandles;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
		/** Immediately cancels current user interaction. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to handlers of global diagram events such as clicked. */
	class DiagramEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
	}
	/** Contains the arguments passed to handlers of inplace edit -related events. */
	class InplaceEditEventArgs extends MindFusion.EventArgs
	{
		/** Gets a reference to the item being edited.
		 * @return A DiagramItem instance.
		*/
		getItem(): DiagramItem;
		/** Gets the DOM Element used to edit the item's text. */
		getControl(): any;
		/** Sets the DOM Element used to edit the item's text. */
		setControl(value: any): void;
		/** Gets the bounds of the item being edited.
		 * @return A Rect instance.
		*/
		getBounds(): MindFusion.Drawing.Rect;
	}
	/** Contains the arguments passed to handlers of table cell -related events. */
	class CellEventArgs extends MindFusion.EventArgs
	{
		/** Gets the cell related to the event.
		 * @return A Cell instance.
		*/
		getCell(): Cell;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
		/** Gets the text that has just been entered by the user.
		 * @return A string specifying the new text of the cell.
		*/
		getNewText(): string;
		/** Gets the original text of the cell.
		 * @return A string specifying the old text of the cell.
		*/
		getOldText(): string;
		/** Gets the canvas rendering context.
		 * @return A CanvasRenderingContext2D used to draw on the Canvas element.
		*/
		getContext(): any;
		/** Gets a value indicating whether the event has been handled. */
		getHandled(): boolean;
		/** Sets a value indicating whether the event has been handled. */
		setHandled(value: boolean): void;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
	}
	/** Contains the arguments passed to handlers of table row and column resizing -related events. */
	class CellValidationEventArgs extends CellEventArgs
	{
		/** Cancels the resize of the table's row or column. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to the serializeTag and deserializeTag event handlers. */
	class SerializeTagEventArgs extends MindFusion.EventArgs
	{
		/** Gets the object whose property is being serialized or deserialized. */
		getObject(): any;
		/** Gets the tag value being serialized or deserialized. */
		getTag(): any;
		/** Sets the tag value being serialized or deserialized. */
		setTag(value: any): void;
		/** Gets the XML element where the tag value should be serialized to or deserialized from. */
		getElement(): any;
		/** Gets an XmlPersistContext object providing helper read and write methods for various value types. */
		getContext(): XmlPersistContext;
		/** Gets the name of the property being serialized. */
		getPropertyName(): string;
		/** Gets a value indicating whether the event has been handled. */
		getHandled(): boolean;
		/** Sets a value indicating whether the event has been handled. */
		setHandled(value: boolean): void;
	}
	/** A list-box control that hosts DiagramNodes and supports dragging them to the Diagram control. */
	class NodeListView extends MindFusion.Drawing.Canvas
	{
		/** Initializes a new instance of the NodeListView class.
		 * @param element The Canvas DOM Element this NodeListView is associated with.
		*/
		constructor(element: any);
		/** Creates and initializes a new NodeListView associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the NodeListView should be attached to.
		 * @return A NodeListView instance.
		*/
		static create(element: any): NodeListView;
		/** Removes all items from the NodeListView. */
		clearAll(): void;
		/** Adds a node to the NodeListView.
		 * @param node The node to add.
		 * @param caption The caption to display for the node.
		*/
		addNode(node: DiagramNode, caption: string): void;
		/** Gets the nodes contained in this NodeListView.
		 * @return An array of all DiagramNodes in this NodeListView.
		*/
		getNodes(): Array<DiagramNode>;
		/** Gets the default size of the nodes in the list view. */
		getDefaultNodeSize(): MindFusion.Drawing.Size;
		/** Sets the default size of the nodes in the list view. */
		setDefaultNodeSize(value: MindFusion.Drawing.Size): void;
		/** Gets the default size of the icons in the list view. */
		getIconSize(): MindFusion.Drawing.Size;
		/** Sets the default size of the icons in the list view. */
		setIconSize(value: MindFusion.Drawing.Size): void;
		/** Gets the orientation of the nodes' layout. */
		getOrientation(): Orientation;
		/** Sets the orientation of the nodes' layout. */
		setOrientation(value: Orientation): void;
		/** Gets the space left between NodeListView borders and its contents. */
		getPadding(): number;
		/** Sets the space left between NodeListView borders and its contents. */
		setPadding(value: number): void;
		/** Gets the location of a shape library file containing custom shape definitions. */
		getShapeLibraryLocation(): string;
		/** Sets the location of a shape library file containing custom shape definitions. */
		setShapeLibraryLocation(value: string): void;
		/** Gets the currently dragged from the node list diagram node.
		 * @return The dragged diagram node.
		*/
		getDraggedNode(): DiagramNode;
	}
	/** The Overview control provides a scaled-down view of Diagram's contents and allows scrolling and zooming the diagram with the mouse. */
	class Overview extends MindFusion.Drawing.Canvas
	{
		/** Initializes a new instance of the Overview class.
		 * @param element The Canvas DOM Element this Overview is associated with.
		*/
		constructor(element: any);
		/** Creates and initializes a new Overview associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the Overview should be attached to.
		 * @return An Overview instance.
		*/
		static create(element: any): Overview;
		/** Sets the Diagram shown by this Overview.
		 * @param diagram The Diagram shown by the overview.
		*/
		setDiagram(diagram: Diagram): void;
		/** Returns the visible portion of the diagram area.
		 * @return A Rect instance specifying the viewport coordinates.
		*/
		getViewport(): MindFusion.Drawing.Rect;
		/** Gets whether mouse events are enabled */
		getEnabled(): boolean;
		/** Sets whether mouse events are enabled */
		setEnabled(value: boolean): void;
		/** Gets a value indicating whether to fit the whole diagram inside the overview control. */
		getScaleMode(): ScaleMode;
		/** Sets a value indicating whether to fit the whole diagram inside the overview control. */
		setScaleMode(value: ScaleMode): void;
		/** Gets a fixed scale factor to be used when FitAll is disabled. */
		getScaleFactor(): number;
		/** Sets a fixed scale factor to be used when FitAll is disabled. */
		setScaleFactor(value: number): void;
		/** Gets a value indicating whether users are allowed to zoom the diagram by resizing the overview's viewport tracker rectangle. */
		getAllowZoom(): boolean;
		/** Sets a value indicating whether users are allowed to zoom the diagram by resizing the overview's viewport tracker rectangle. */
		setAllowZoom(value: boolean): void;
		/** Gets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		getAutoScrollAmount(): number;
		/** Sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		setAutoScrollAmount(value: number): void;
	}
	/** A builder class for the DiagramLink class. */
	class DiagramLinkBuilder
	{
		/** Creates a new DiagramLink instance with the specified properties.
		 * @return A DiagramLink instance.
		*/
		create(): DiagramLink;
		/** Sets the type of link segments and how they are positioned relatively to each other.
		 * @param value 
		*/
		shape(value: LinkShape): DiagramLinkBuilder;
		/** Sets the control points of this link.
		 * @param value 
		*/
		controlPoints(value: Array<MindFusion.Drawing.Point>): DiagramLinkBuilder;
		/** Sets the link's text placement and orientation.
		 * @param value 
		*/
		textStyle(value: LinkTextStyle): DiagramLinkBuilder;
		/** Sets the link's text alignment.
		 * @param value 
		*/
		textAlignment(value: Alignment): DiagramLinkBuilder;
		/** Sets the origin node of this DiagramLink.
		 * @param value 
		*/
		origin(value: DiagramNode): DiagramLinkBuilder;
		/** Sets the destination node of this DiagramLink.
		 * @param value 
		*/
		destination(value: DiagramNode): DiagramLinkBuilder;
		/** Sets the anchor point to which a link is connected at its origin.
		 * @param value 
		*/
		originAnchor(value: number): DiagramLinkBuilder;
		/** Sets the anchor point to which a link is connected at its destination.
		 * @param value 
		*/
		destinationAnchor(value: number): DiagramLinkBuilder;
		/** Sets the origin table row of this DiagramLink.
		 * @param value 
		*/
		originIndex(value: number): DiagramLinkBuilder;
		/** Sets the destination table row of this DiagramLink.
		 * @param value 
		*/
		destinationIndex(value: number): DiagramLinkBuilder;
		/** Sets the first control point of this link.
		 * @param value 
		*/
		startPoint(value: MindFusion.Drawing.Point): DiagramLinkBuilder;
		/** Sets the last control point of this link.
		 * @param value 
		*/
		endPoint(value: MindFusion.Drawing.Point): DiagramLinkBuilder;
		/** Sets the shape to display at the beginning of this link.
		 * @param value 
		*/
		baseShape(value: Shape): DiagramLinkBuilder;
		/** Sets the size of the shape displayed at the beginning of this link.
		 * @param value 
		*/
		baseShapeSize(value: number): DiagramLinkBuilder;
		/** Sets the shape to display at the end of this link.
		 * @param value 
		*/
		headShape(value: Shape): DiagramLinkBuilder;
		/** Sets the size of the shape displayed at the end of this link.
		 * @param value 
		*/
		headShapeSize(value: number): DiagramLinkBuilder;
		/** Sets an object that specifies how to paint the interior of the link's base shape.
		 * @param value 
		*/
		baseBrush(value: any): DiagramLinkBuilder;
		/** Sets an object that specifies how to paint the interior of the link's arrowhead shape.
		 * @param value 
		*/
		headBrush(value: any): DiagramLinkBuilder;
		/** Sets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes.
		 * @param value 
		*/
		autoRoute(value: boolean): DiagramLinkBuilder;
		/** Sets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects.
		 * @param value 
		*/
		dynamic(value: boolean): DiagramLinkBuilder;
		/** Sets the color of arrowhead outlines.
		 * @param value 
		*/
		headStroke(value: string): DiagramLinkBuilder;
		/** Sets the line width of arrowhead outlines.
		 * @param value 
		*/
		headStrokeThickness(value: number): DiagramLinkBuilder;
		/** Sets the dash pattern of arrowhead outlines.
		 * @param value 
		*/
		headStrokeDashStyle(value: MindFusion.Drawing.DashStyle): DiagramLinkBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): DiagramLinkBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): DiagramLinkBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): DiagramLinkBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): DiagramLinkBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): DiagramLinkBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): DiagramLinkBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): DiagramLinkBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): DiagramLinkBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): DiagramLinkBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): DiagramLinkBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): DiagramLinkBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): DiagramLinkBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): DiagramLinkBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): DiagramLinkBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): DiagramLinkBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): DiagramLinkBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): DiagramLinkBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): DiagramLinkBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): DiagramLinkBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): DiagramLinkBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): DiagramLinkBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): DiagramLinkBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): DiagramLinkBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): DiagramLinkBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): DiagramLinkBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): DiagramLinkBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): DiagramLinkBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): DiagramLinkBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): DiagramLinkBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): DiagramLinkBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): DiagramLinkBuilder;
	}
	/** A builder class for the ShapeNode class. */
	class ShapeNodeBuilder
	{
		/** Creates a new ShapeNode instance with the specified properties.
		 * @return A ShapeNode instance.
		*/
		create(): ShapeNode;
		/** Sets a value indicating whether text is rotated when the node is rotated.
		 * @param value 
		*/
		rotateText(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether the image is rotated when the node is rotated.
		 * @param value 
		*/
		rotateImage(value: boolean): ShapeNodeBuilder;
		/** Sets the HTMLImageElement displayed inside this node.
		 * @param value 
		*/
		image(value: any): ShapeNodeBuilder;
		/** Sets the alignment for the image of this node.
		 * @param value 
		*/
		imageAlign(value: MindFusion.Drawing.ImageAlign): ShapeNodeBuilder;
		/** Sets the padding distance between node borders and image.
		 * @param value 
		*/
		imagePadding(value: MindFusion.Drawing.Thickness): ShapeNodeBuilder;
		/** Sets a value indicating whether this shape node is transparent.
		 * @param value 
		*/
		transparent(value: boolean): ShapeNodeBuilder;
		/** Sets a reference to the node's geometric shape definition.
		 * @param value 
		*/
		shape(value: Shape): ShapeNodeBuilder;
		/** Sets the URL of the image displayed in this ShapeNode.
		 * @param value 
		*/
		imageLocation(value: string): ShapeNodeBuilder;
		/** Sets the Base64-encoded data of the image displayed in this ShapeNode.
		 * @param value 
		*/
		imageContent(value: string): ShapeNodeBuilder;
		/** Sets a value indicating whether styled text rendering is enabled.
		 * @param value 
		*/
		enableStyledText(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge.
		 * @param value 
		*/
		allowFlip(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether the node's shape is flipped horizontally.
		 * @param value 
		*/
		flipX(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether the node's shape is flipped vertically.
		 * @param value 
		*/
		flipY(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node.
		 * @param value 
		*/
		allowIncomingLinks(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node.
		 * @param value 
		*/
		allowOutgoingLinks(value: boolean): ShapeNodeBuilder;
		/** Sets the angle at which this node is rotated.
		 * @param value 
		*/
		rotationAngle(value: number): ShapeNodeBuilder;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node.
		 * @param value 
		*/
		enabledHandles(value: AdjustmentHandles): ShapeNodeBuilder;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like.
		 * @param value 
		*/
		handlesStyle(value: HandlesStyle): ShapeNodeBuilder;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.
		 * @param value 
		*/
		obstacle(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.
		 * @param value 
		*/
		expandable(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed.
		 * @param value 
		*/
		expanded(value: boolean): ShapeNodeBuilder;
		/** Sets the anchor points to which links are attached when connected to the node.
		 * @param value 
		*/
		anchorPattern(value: AnchorPattern): ShapeNodeBuilder;
		/** Sets a value indicating whether this node displays a delete button.
		 * @param value 
		*/
		showDeleteButton(value: boolean): ShapeNodeBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): ShapeNodeBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): ShapeNodeBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): ShapeNodeBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): ShapeNodeBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): ShapeNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): ShapeNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): ShapeNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): ShapeNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): ShapeNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): ShapeNodeBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): ShapeNodeBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): ShapeNodeBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): ShapeNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): ShapeNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): ShapeNodeBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): ShapeNodeBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): ShapeNodeBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): ShapeNodeBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): ShapeNodeBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): ShapeNodeBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): ShapeNodeBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): ShapeNodeBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): ShapeNodeBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): ShapeNodeBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): ShapeNodeBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): ShapeNodeBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): ShapeNodeBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): ShapeNodeBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): ShapeNodeBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): ShapeNodeBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): ShapeNodeBuilder;
	}
	/** A builder class for the TableNode class. */
	class TableNodeBuilder
	{
		/** Creates a new TableNode instance with the specified properties.
		 * @return A TableNode instance.
		*/
		create(): TableNode;
		/** Sets the shape of the table's outline.
		 * @param value 
		*/
		shape(value: SimpleShape): TableNodeBuilder;
		/** Sets the height of the table's caption area.
		 * @param value 
		*/
		captionHeight(value: number): TableNodeBuilder;
		/** Sets the style of the cell frame lines.
		 * @param value 
		*/
		cellFrameStyle(value: CellFrameStyle): TableNodeBuilder;
		/** Sets a value indicating whether drawing a link from/to this table should connect a row of the table, or the whole table as an integral entity.
		 * @param value 
		*/
		connectionStyle(value: ConnectionStyle): TableNodeBuilder;
		/** Sets the number of rows in the table.
		 * @param value 
		*/
		rowCount(value: number): TableNodeBuilder;
		/** Sets the number of columns in the table.
		 * @param value 
		*/
		columnCount(value: number): TableNodeBuilder;
		/** Sets a value indicating whether the user is allowed to scroll the table rows.
		 * @param value 
		*/
		scrollable(value: boolean): TableNodeBuilder;
		/** Sets an object that specifies how to fill the caption bar.
		 * @param value 
		*/
		captionBackBrush(value: any): TableNodeBuilder;
		/** Sets the font used to render the table's caption text.
		 * @param value 
		*/
		captionFont(value: MindFusion.Drawing.Font): TableNodeBuilder;
		/** Sets a value indicating whether styled text rendering is enabled.
		 * @param value 
		*/
		enableStyledText(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to resize table columns.
		 * @param value 
		*/
		allowResizeColumns(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to resize table rows.
		 * @param value 
		*/
		allowResizeRows(value: boolean): TableNodeBuilder;
		/** Sets the table's current scroll position.
		 * @param value 
		*/
		currentScrollRow(value: number): TableNodeBuilder;
		/** Sets Set this flag to show full scrollbars for scrollable tables instead of up/down buttons in captions.
		 * @param value 
		*/
		useScrollBars(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node.
		 * @param value 
		*/
		allowIncomingLinks(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node.
		 * @param value 
		*/
		allowOutgoingLinks(value: boolean): TableNodeBuilder;
		/** Sets the angle at which this node is rotated.
		 * @param value 
		*/
		rotationAngle(value: number): TableNodeBuilder;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node.
		 * @param value 
		*/
		enabledHandles(value: AdjustmentHandles): TableNodeBuilder;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like.
		 * @param value 
		*/
		handlesStyle(value: HandlesStyle): TableNodeBuilder;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.
		 * @param value 
		*/
		obstacle(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.
		 * @param value 
		*/
		expandable(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed.
		 * @param value 
		*/
		expanded(value: boolean): TableNodeBuilder;
		/** Sets the anchor points to which links are attached when connected to the node.
		 * @param value 
		*/
		anchorPattern(value: AnchorPattern): TableNodeBuilder;
		/** Sets a value indicating whether this node displays a delete button.
		 * @param value 
		*/
		showDeleteButton(value: boolean): TableNodeBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): TableNodeBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): TableNodeBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): TableNodeBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): TableNodeBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): TableNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): TableNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): TableNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): TableNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): TableNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): TableNodeBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): TableNodeBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): TableNodeBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): TableNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): TableNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): TableNodeBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): TableNodeBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): TableNodeBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): TableNodeBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): TableNodeBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): TableNodeBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): TableNodeBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): TableNodeBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): TableNodeBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): TableNodeBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): TableNodeBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): TableNodeBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): TableNodeBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): TableNodeBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): TableNodeBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): TableNodeBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): TableNodeBuilder;
	}
	/** A builder class for the ContainerNode class. */
	class ContainerNodeBuilder
	{
		/** Creates a new ContainerNode instance with the specified properties.
		 * @return A ContainerNode instance.
		*/
		create(): ContainerNode;
		/** Sets a value indicating whether child items should be clipped by container boundaries.
		 * @param value 
		*/
		clipChildren(value: boolean): ContainerNodeBuilder;
		/** Sets the shape of the container's outline.
		 * @param value 
		*/
		shape(value: SimpleShape): ContainerNodeBuilder;
		/** Sets the height of the container's caption area.
		 * @param value 
		*/
		captionHeight(value: number): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to fold this container.
		 * @param value 
		*/
		foldable(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether the container is folded.
		 * @param value 
		*/
		folded(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating the size of the fold/unfold icon.
		 * @param value 
		*/
		foldIconSize(value: number): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to add child nodes to this container.
		 * @param value 
		*/
		allowAddChildren(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to remove child nodes from the container.
		 * @param value 
		*/
		allowRemoveChildren(value: boolean): ContainerNodeBuilder;
		/** Sets an object that specifies how to fill the caption bar.
		 * @param value 
		*/
		captionBackBrush(value: any): ContainerNodeBuilder;
		/** Sets a value indicating whether styled caption text rendering is enabled.
		 * @param value 
		*/
		enableStyledText(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node.
		 * @param value 
		*/
		allowIncomingLinks(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node.
		 * @param value 
		*/
		allowOutgoingLinks(value: boolean): ContainerNodeBuilder;
		/** Sets the angle at which this node is rotated.
		 * @param value 
		*/
		rotationAngle(value: number): ContainerNodeBuilder;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node.
		 * @param value 
		*/
		enabledHandles(value: AdjustmentHandles): ContainerNodeBuilder;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like.
		 * @param value 
		*/
		handlesStyle(value: HandlesStyle): ContainerNodeBuilder;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.
		 * @param value 
		*/
		obstacle(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.
		 * @param value 
		*/
		expandable(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed.
		 * @param value 
		*/
		expanded(value: boolean): ContainerNodeBuilder;
		/** Sets the anchor points to which links are attached when connected to the node.
		 * @param value 
		*/
		anchorPattern(value: AnchorPattern): ContainerNodeBuilder;
		/** Sets a value indicating whether this node displays a delete button.
		 * @param value 
		*/
		showDeleteButton(value: boolean): ContainerNodeBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): ContainerNodeBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): ContainerNodeBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): ContainerNodeBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): ContainerNodeBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): ContainerNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): ContainerNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): ContainerNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): ContainerNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): ContainerNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): ContainerNodeBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): ContainerNodeBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): ContainerNodeBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): ContainerNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): ContainerNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): ContainerNodeBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): ContainerNodeBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): ContainerNodeBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): ContainerNodeBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): ContainerNodeBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): ContainerNodeBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): ContainerNodeBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): ContainerNodeBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): ContainerNodeBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): ContainerNodeBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): ContainerNodeBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): ContainerNodeBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): ContainerNodeBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): ContainerNodeBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): ContainerNodeBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): ContainerNodeBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): ContainerNodeBuilder;
	}
	/** A builder class for the SvgNode class. */
	class SvgNodeBuilder
	{
		/** Creates a new SvgNode instance with the specified properties.
		 * @return A SvgNode instance.
		*/
		create(): SvgNode;
		/** Sets an SvgContent instance representing the SVG drawing rendered in this node.
		 * @param value 
		*/
		content(value: SvgContent): SvgNodeBuilder;
		/** Sets a value indicating whether text is rotated when the node is rotated.
		 * @param value 
		*/
		rotateText(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether the image is rotated when the node is rotated.
		 * @param value 
		*/
		rotateImage(value: boolean): SvgNodeBuilder;
		/** Sets the HTMLImageElement displayed inside this node.
		 * @param value 
		*/
		image(value: any): SvgNodeBuilder;
		/** Sets the alignment for the image of this node.
		 * @param value 
		*/
		imageAlign(value: MindFusion.Drawing.ImageAlign): SvgNodeBuilder;
		/** Sets the padding distance between node borders and image.
		 * @param value 
		*/
		imagePadding(value: MindFusion.Drawing.Thickness): SvgNodeBuilder;
		/** Sets a value indicating whether this shape node is transparent.
		 * @param value 
		*/
		transparent(value: boolean): SvgNodeBuilder;
		/** Sets a reference to the node's geometric shape definition.
		 * @param value 
		*/
		shape(value: Shape): SvgNodeBuilder;
		/** Sets the URL of the image displayed in this ShapeNode.
		 * @param value 
		*/
		imageLocation(value: string): SvgNodeBuilder;
		/** Sets the Base64-encoded data of the image displayed in this ShapeNode.
		 * @param value 
		*/
		imageContent(value: string): SvgNodeBuilder;
		/** Sets a value indicating whether styled text rendering is enabled.
		 * @param value 
		*/
		enableStyledText(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge.
		 * @param value 
		*/
		allowFlip(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether the node's shape is flipped horizontally.
		 * @param value 
		*/
		flipX(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether the node's shape is flipped vertically.
		 * @param value 
		*/
		flipY(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node.
		 * @param value 
		*/
		allowIncomingLinks(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node.
		 * @param value 
		*/
		allowOutgoingLinks(value: boolean): SvgNodeBuilder;
		/** Sets the angle at which this node is rotated.
		 * @param value 
		*/
		rotationAngle(value: number): SvgNodeBuilder;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node.
		 * @param value 
		*/
		enabledHandles(value: AdjustmentHandles): SvgNodeBuilder;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like.
		 * @param value 
		*/
		handlesStyle(value: HandlesStyle): SvgNodeBuilder;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.
		 * @param value 
		*/
		obstacle(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.
		 * @param value 
		*/
		expandable(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed.
		 * @param value 
		*/
		expanded(value: boolean): SvgNodeBuilder;
		/** Sets the anchor points to which links are attached when connected to the node.
		 * @param value 
		*/
		anchorPattern(value: AnchorPattern): SvgNodeBuilder;
		/** Sets a value indicating whether this node displays a delete button.
		 * @param value 
		*/
		showDeleteButton(value: boolean): SvgNodeBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): SvgNodeBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): SvgNodeBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): SvgNodeBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): SvgNodeBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): SvgNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): SvgNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): SvgNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): SvgNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): SvgNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): SvgNodeBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): SvgNodeBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): SvgNodeBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): SvgNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): SvgNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): SvgNodeBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): SvgNodeBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): SvgNodeBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): SvgNodeBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): SvgNodeBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): SvgNodeBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): SvgNodeBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): SvgNodeBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): SvgNodeBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): SvgNodeBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): SvgNodeBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): SvgNodeBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): SvgNodeBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): SvgNodeBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): SvgNodeBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): SvgNodeBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): SvgNodeBuilder;
	}
	/** A builder class for the FreeFormNode class. */
	class FreeFormNodeBuilder
	{
		/** Creates a new FreeFormNode instance with the specified properties.
		 * @return A FreeFormNode instance.
		*/
		create(): FreeFormNode;
		/** Sets a value indicating whether the node's shape is closed.
		 * @param value 
		*/
		closed(value: boolean): FreeFormNodeBuilder;
		/** Sets the node's outline points.
		 * @param value 
		*/
		points(value: Array<MindFusion.Drawing.Point>): FreeFormNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node.
		 * @param value 
		*/
		allowIncomingLinks(value: boolean): FreeFormNodeBuilder;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node.
		 * @param value 
		*/
		allowOutgoingLinks(value: boolean): FreeFormNodeBuilder;
		/** Sets the angle at which this node is rotated.
		 * @param value 
		*/
		rotationAngle(value: number): FreeFormNodeBuilder;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node.
		 * @param value 
		*/
		enabledHandles(value: AdjustmentHandles): FreeFormNodeBuilder;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like.
		 * @param value 
		*/
		handlesStyle(value: HandlesStyle): FreeFormNodeBuilder;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.
		 * @param value 
		*/
		obstacle(value: boolean): FreeFormNodeBuilder;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.
		 * @param value 
		*/
		expandable(value: boolean): FreeFormNodeBuilder;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed.
		 * @param value 
		*/
		expanded(value: boolean): FreeFormNodeBuilder;
		/** Sets the anchor points to which links are attached when connected to the node.
		 * @param value 
		*/
		anchorPattern(value: AnchorPattern): FreeFormNodeBuilder;
		/** Sets a value indicating whether this node displays a delete button.
		 * @param value 
		*/
		showDeleteButton(value: boolean): FreeFormNodeBuilder;
		/** Sets a string containing the DiagramItem's text.
		 * @param value 
		*/
		text(value: string): FreeFormNodeBuilder;
		/** Sets a string specifying the color of the text of this item.
		 * @param value 
		*/
		textColor(value: string): FreeFormNodeBuilder;
		/** Sets a string specifying the color of the text outline of this item.
		 * @param value 
		*/
		textStroke(value: string): FreeFormNodeBuilder;
		/** Sets the width of the text outline of this item.
		 * @param value 
		*/
		textStrokeThickness(value: number): FreeFormNodeBuilder;
		/** Sets the spacing between the item boundaries and its text.
		 * @param value 
		*/
		textPadding(value: MindFusion.Drawing.Thickness): FreeFormNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param value 
		*/
		font(value: MindFusion.Drawing.Font): FreeFormNodeBuilder;
		/** Sets the font used to render this item's text.
		 * @param name the font's name.
		 * @param size the font's size.
		*/
		font(name: string, size: number): FreeFormNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param value 
		*/
		brush(value: any): FreeFormNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): FreeFormNodeBuilder;
		/** Sets an object that specifies how to paint the interior of the DiagramItem.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): FreeFormNodeBuilder;
		/** Sets a string specifying the color used to stroke the item's frame.
		 * @param value 
		*/
		stroke(value: string): FreeFormNodeBuilder;
		/** Sets the line width applied when stroking the item's frame.
		 * @param value 
		*/
		strokeThickness(value: number): FreeFormNodeBuilder;
		/** Sets the line dash pattern applied when stroking the item's frame.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): FreeFormNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		tag(value: any): FreeFormNodeBuilder;
		/** Sets a custom value associated with this item.
		 * @param value 
		*/
		id(value: any): FreeFormNodeBuilder;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item.
		 * @param value 
		*/
		tooltip(value: string): FreeFormNodeBuilder;
		/** Sets a weight value used in layout and path-finding algorithms.
		 * @param value 
		*/
		weight(value: number): FreeFormNodeBuilder;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods.
		 * @param value 
		*/
		ignoreLayout(value: boolean): FreeFormNodeBuilder;
		/** Sets the z-order position of the object.
		 * @param value 
		*/
		zIndex(value: number): FreeFormNodeBuilder;
		/** Sets a value indicating whether a diagram item is selected.
		 * @param value 
		*/
		selected(value: boolean): FreeFormNodeBuilder;
		/** Sets the hyperlink associated with this diagram item.
		 * @param value 
		*/
		hyperLink(value: string): FreeFormNodeBuilder;
		/** Sets a value indicating whether this item is visible.
		 * @param value 
		*/
		visible(value: boolean): FreeFormNodeBuilder;
		/** Sets a value indicating whether users are allowed to modify this item.
		 * @param value 
		*/
		locked(value: boolean): FreeFormNodeBuilder;
		/** Sets the color used to draw the shadow of this item.
		 * @param value 
		*/
		shadowColor(value: string): FreeFormNodeBuilder;
		/** Sets the horizontal offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetX(value: number): FreeFormNodeBuilder;
		/** Sets the vertical offset of the item's shadow.
		 * @param value 
		*/
		shadowOffsetY(value: number): FreeFormNodeBuilder;
		/** Sets the style associated with this item.
		 * @param value 
		*/
		style(value: Style): FreeFormNodeBuilder;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		textAlignment(value: Alignment): FreeFormNodeBuilder;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle.
		 * @param value 
		*/
		lineAlignment(value: Alignment): FreeFormNodeBuilder;
		/** Sets A function to call when repainting the item, to use for custom drawing.
		 * @param value 
		*/
		onUpdateVisuals(value: UpdateVisualsDelegate): FreeFormNodeBuilder;
		/** Sets The bounds of the item.
		 * @param value 
		*/
		bounds(value: MindFusion.Drawing.Rect): FreeFormNodeBuilder;
	}
	/** A builder class for the Style class. */
	class StyleBuilder
	{
		/** Creates a new Style instance with the specified properties.
		 * @return A Style instance.
		*/
		create(): Style;
		/** Sets the brush used to fill the interior of diagram items.
		 * @param value 
		*/
		brush(value: any): StyleBuilder;
		/** Sets the brush used to fill the interior of diagram items.
		 * @param color1 The starting color of the linear gradient brush.
		 * @param color2 The ending color of the linear gradient brush.
		 * @param angle The angle of the linear gradient brush.
		*/
		brush(color1: string, color2: string, angle: number): StyleBuilder;
		/** Sets the brush used to fill the interior of diagram items.
		 * @param color1 The starting color of the radial gradient brush.
		 * @param color2 The ending color of the radial gradient brush.
		 * @param radius1 The inner radius of the radial gradient brush.
		 * @param radius2 The outer radius of the radial gradient brush.
		*/
		brush(color1: string, color2: string, radius1: number, radius2: number): StyleBuilder;
		/** Sets the brush used to fill the diagram background.
		 * @param value 
		*/
		backBrush(value: any): StyleBuilder;
		/** Sets the color used to stroke the frame of diagram items.
		 * @param value 
		*/
		stroke(value: string): StyleBuilder;
		/** Sets the line width applied when stroking the frame of diagram items.
		 * @param value 
		*/
		strokeThickness(value: number): StyleBuilder;
		/** Sets the line dash pattern applied when stroking the frame of diagram items.
		 * @param value 
		*/
		strokeDashStyle(value: MindFusion.Drawing.DashStyle): StyleBuilder;
		/** Sets the color used to draw text of diagram items.
		 * @param value 
		*/
		textColor(value: string): StyleBuilder;
		/** Sets the name of the font used to draw text of diagram items.
		 * @param value 
		*/
		fontName(value: string): StyleBuilder;
		/** Sets the size of the font used to draw text of diagram items.
		 * @param value 
		*/
		fontSize(value: number): StyleBuilder;
		/** Sets the style of the font used to draw text of diagram items.
		 * @param value 
		*/
		fontStyle(value: MindFusion.Drawing.FontStyle): StyleBuilder;
		/** Sets the color used to draw shadows of diagram items.
		 * @param value 
		*/
		shadowColor(value: string): StyleBuilder;
		/** Sets a list containing all effects applied to the nodes of this diagram.
		 * @param value 
		*/
		nodeEffects(value: Array<NodeEffect>): StyleBuilder;
	}
	interface UpdateVisualsDelegate
	{
		(item: DiagramItem): void;
	}
	/** The Ruler control provides horizontal and vertical scales that help users measure and align diagram items. */
	class Ruler
	{
		/** Initializes a new instance of the Ruler class.
		 * @param element The Canvas DOM Element this Ruler is associated with.
		*/
		constructor(element: any);
		/** Gets the measure units displayed in the ruler scales. */
		getUnit(): MindFusion.Drawing.GraphicsUnit;
		/** Sets the measure units displayed in the ruler scales. */
		setUnit(value: MindFusion.Drawing.GraphicsUnit): void;
		/** Gets the background color of the control. */
		getBackColor(): string;
		/** Sets the background color of the control. */
		setBackColor(value: string): void;
		/** Gets the foreground color of the control. */
		getForeColor(): string;
		/** Sets the foreground color of the control. */
		setForeColor(value: string): void;
		/** Gets the color used to paint the projection of the active node. */
		getProjectionColor(): string;
		/** Sets the color used to paint the projection of the active node. */
		setProjectionColor(value: string): void;
		/** Gets the color of the alignment guide lines. */
		getGuideColor(): string;
		/** Sets the color of the alignment guide lines. */
		setGuideColor(value: string): void;
		/** Gets the color used to paint text in the ruler. */
		getTextColor(): string;
		/** Sets the color used to paint text in the ruler. */
		setTextColor(value: string): void;
		/** Gets the color of the mouse pointer's projections. */
		getPointerColor(): string;
		/** Sets the color of the mouse pointer's projections. */
		setPointerColor(value: string): void;
		/** Gets a value indicating whether the alignment guides are enabled. */
		getEnableGuides(): boolean;
		/** Sets a value indicating whether the alignment guides are enabled. */
		setEnableGuides(value: boolean): void;
		/** Gets a value indicating whether the horizontal ruler scale is visible. */
		getHorizontalScaleVisible(): boolean;
		/** Sets a value indicating whether the horizontal ruler scale is visible. */
		setHorizontalScaleVisible(value: boolean): void;
		/** Gets a value indicating whether the vertical ruler scale is visible. */
		getVerticalScaleVisible(): boolean;
		/** Sets a value indicating whether the vertical ruler scale is visible. */
		setVerticalScaleVisible(value: boolean): void;
		/** Gets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left. */
		getNegatedX(): boolean;
		/** Sets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left. */
		setNegatedX(value: boolean): void;
		/** Gets whether the vertical scale should show negated values, simulating that the coordinate system's X axis grows to the top. */
		getNegatedY(): boolean;
		/** Sets whether the vertical scale should show negated values, simulating that the coordinate system's X axis grows to the top. */
		setNegatedY(value: boolean): void;
		/** Gets whether the projection of nodes on ruler's scales rotates with them. */
		getProjectRotatedBounds(): boolean;
		/** Sets whether the projection of nodes on ruler's scales rotates with them. */
		setProjectRotatedBounds(value: boolean): void;
	}
	/** Manipulator is an abstract base class which defines the behavior of miscellaneous UI widgets attached to nodes. */
	class Manipulator
	{
		/** Initializes a new instance of the Manipulator class.
		 * @param node The DiagramNode containing this manipulator.
		*/
		constructor(node?: DiagramNode);
		/** The DiagramNode containing this manipulator. */
		node: DiagramNode;
	}
	class DiagramMediator
	{
		static AllRules: Array<any>;
		static LinkRules: Array<any>;
		static GroupRules: Array<any>;
	}
	/** Processes mouse or single-touch events targeting a diagram element. */
	class SinglePointerController
	{
		/** Initializes a new instance of the SinglePointerController class.
		 * @param modifiedItem The item that will be modified by this controller.
		 * @param adjustmentHandle An object representing the adjustment handle used to modify the item.
		*/
		constructor(modifiedItem: DiagramItem, adjustmentHandle: any);
		/** Called when the user starts drawing or modifying a diagram element.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** Called continuously while the user draws with the mouse or touch.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		/** Called to validate the operation at current pointer position.
		 * @param position A point specified in diagram coordinates.
		 * @return true to accept the operation, or false otherwise.
		*/
		validate(position: MindFusion.Drawing.Point): boolean;
		commit(position: MindFusion.Drawing.Point): void;
		/** Called when the user stops drawing or modifying a diagram element, rejecting the operation.
		 * @param position A point specified in diagram coordinates.
		*/
		cancel(position: MindFusion.Drawing.Point): void;
		/** Called to draw current state of user interaction.
		 * @param context The drawing context for diagram's underlying canvas.
		*/
		drawInteraction(context: any): void;
	}
	/** A controller used to modify existing nodes in the diagram. */
	class ModifyNodeController extends SinglePointerController
	{
		/** Initializes a new instance of the ModifyNodeController class.
		 * @param node The node that will be modified by this controller.
		 * @param adjustmentHandle An object representing the adjustment handle used to modify the node.
		*/
		constructor(node: DiagramNode, adjustmentHandle: any);
		/** SinglePointerController.start override. Called when the user starts drawing or modifying a diagram node.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.move override. Called continuously while the user draws with the mouse or touch.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.validate override. Called to validate the operation at current pointer position.
		 * @param position A point specified in diagram coordinates.
		 * @return true to accept the operation, or false otherwise.
		*/
		validate(position: MindFusion.Drawing.Point): boolean;
		commit(position: MindFusion.Drawing.Point): void;
	}
	/** A controller used to modify existing link in the diagram. */
	class ModifyLinkController extends SinglePointerController
	{
		/** Initializes a new instance of the ModifyLinkController class.
		 * @param link The link that will be modified by this controller.
		 * @param adjustmentHandle An object representing the adjustment handle used to modify the link.
		*/
		constructor(link: DiagramLink, adjustmentHandle: any);
		/** SinglePointerController.start override. Called when the user starts drawing or modifying a diagram link.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.move override. Called continuously while the user draws with the mouse or touch.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.validate override. Called to validate the operation at current pointer position.
		 * @param position A point specified in diagram coordinates.
		 * @return true to accept the operation, or false otherwise.
		*/
		validate(position: MindFusion.Drawing.Point): boolean;
		commit(position: MindFusion.Drawing.Point): void;
	}
	/** A controller used to modify multiple selected items in the diagram. */
	class ModifySelectionController extends SinglePointerController
	{
		/** Initializes a new instance of the ModifySelectionController class.
		 * @param selection The selection that will be modified by this controller.
		 * @param adjustmentHandle An object representing the adjustment handle used to modify the selection.
		*/
		constructor(selection: Selection, adjustmentHandle: any);
		/** SinglePointerController.start override. Called when the user starts drawing or modifying selected diagram items.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.move override. Called continuously while the user draws with the mouse or touch.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.validate override. Called to validate the operation at current pointer position.
		 * @param position A point specified in diagram coordinates.
		 * @return true to accept the operation, or false otherwise.
		*/
		validate(position: MindFusion.Drawing.Point): boolean;
		commit(position: MindFusion.Drawing.Point): void;
	}
	/** A controller used to draw new nodes in the diagram. */
	class CreateNodeController extends SinglePointerController
	{
		/** Initializes a new instance of the CreateNodeController class.
		 * @param diagram The parent diagram of the new node.
		 * @param node The node that will be drawn by this controller.
		*/
		constructor(diagram: Diagram, node: DiagramNode);
		/** SinglePointerController.start override.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.move override.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		commit(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.drawInteraction override.
		 * @param context The drawing context for diagram's underlying canvas.
		*/
		drawInteraction(context: any): void;
	}
	/** A controller used to draw selection rectangle in the diagram. */
	class CreateLinkController extends SinglePointerController
	{
		/** Initializes a new instance of the CreateLinkController class.
		 * @param diagram The parent diagram of the new link.
		 * @param link The link that will be drawn by this controller.
		*/
		constructor(diagram: Diagram, link: DiagramLink);
		/** SinglePointerController.start override.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.move override.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		commit(position: MindFusion.Drawing.Point): void;
		/** SinglePointerController.drawInteraction override.
		 * @param context The drawing context for diagram's underlying canvas.
		*/
		drawInteraction(context: any): void;
	}
	/** A controller used to draw selection rectangle in the diagram. */
	class CreateSelectionController extends SinglePointerController
	{
		/** Initializes a new instance of the CreateSelectionController class.
		 * @param selection The selection that will be drawn by this controller.
		*/
		constructor(selection: Selection);
		/** Called when the user starts drawing or modifying a diagram element. SinglePointerController.start override.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** Called continuously while the user draws with the mouse or touch. SinglePointerController.move override.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
		commit(position: MindFusion.Drawing.Point): void;
		/** Called to draw current state of user interaction. SinglePointerController.drawInteraction override.
		 * @param context The drawing context for diagram's underlying canvas.
		*/
		drawInteraction(context: any): void;
	}
	/** A controller used to pan the diagram view. */
	class PanSelectionController extends SinglePointerController
	{
		/** Initializes a new instance of the PanSelectionController class.
		 * @param diagram The diagram that will get scrolled by this controller.
		*/
		constructor(diagram: Diagram);
		/** Called when the user starts drawing or modifying a diagram element. SinglePointerController.start override.
		 * @param position A point specified in diagram coordinates.
		*/
		start(position: MindFusion.Drawing.Point): void;
		/** Called continuously while the user draws with the mouse or touch. SinglePointerController.move override.
		 * @param position A point specified in diagram coordinates.
		*/
		move(position: MindFusion.Drawing.Point): void;
	}
	/** An abstract base class for types that define how the control reacts to users' actions with a mouse or other pointing devices. */
	class BehaviorBase
	{
		/** Initializes a new instance of the BehaviorBase class.
		 * @param parent The Diagram this behavior will be associated with.
		*/
		constructor(parent: Diagram);
		/** Creates a controller appropriate for current context and pointer position.
		 * @param state An object representing current context and input event.
		 * @return An instance of SinglePointerController -derived class.
		*/
		createController(state: any): SinglePointerController;
		/** The Diagram this behavior is associated with. */
		diagram: Diagram;
	}
	/** The base class for behavior types that allow drawing both nodes and links. */
	class LinkNodesBehavior extends BehaviorBase
	{
		/** Initializes a new instance of the LinkNodesBehavior class.
		 * @param parent The Diagram this behavior will be associated with.
		*/
		constructor(parent: Diagram);
		/** Creates a controller appropriate for current context and pointer position. BehaviorBase.createController override.
		 * @param state An object representing current context and input event.
		 * @return An instance of SinglePointerController -derived class.
		*/
		createController(state: any): SinglePointerController;
	}
	/** Defines Overview scaling modes. */
	enum ScaleMode
	{
		/** Scale the Overview dynamically to fit the entire diagram. */
		FitAll = 0,
		/** Combine diagram's ZoomFactor with overview's ScaleFactor. */
		CombinedScales = 1,
		/** Use fixed scale specified via ScaleFactor, ignoring diagram's zoom level. */
		FixedScale = 2
	}
	/** Represents layout containers in CompositeNode visual tree. */
	class Panel extends MindFusion.Drawing.Container
	{
		/** Initializes a new instance of the Panel class. */
		constructor();
		/** Gets the child components of this panel.
		 * @return An array containing the child components of this panel.
		*/
		getContainers(): Array<MindFusion.Drawing.Component>;
	}
	/** A layout container that arranges its child components on top of each other. */
	class SimplePanel extends Panel
	{
		/** Initializes a new instance of the SimplePanel class. */
		constructor();
	}
	/** SIndicates how GridPanel determines dimensions of its rows and columns. */
	enum LengthType
	{
		/** The row or column is auto-sized to fit its child components. */
		Auto = 0,
		/** The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements. */
		Relative = 1
	}
	/** Represents a column in a GridPanel. */
	class GridColumn
	{
		/** Initializes a new instance of the GridColumn class. */
		constructor();
		/** Gets how GridPanel determines the width of this column. */
		getLengthType(): LengthType;
		/** Sets how GridPanel determines the width of this column. */
		setLengthType(value: LengthType): void;
		/** Gets fixed width for this column. */
		getWidth(): number;
		/** Sets fixed width for this column. */
		setWidth(value: number): void;
	}
	/** Represents a row in a GridPanel. */
	class GridRow
	{
		/** Initializes a new instance of the GridRow class. */
		constructor();
		/** Gets how GridPanel determines the height of this row. */
		getLengthType(): LengthType;
		/** Sets how GridPanel determines the height of this row. */
		setLengthType(value: LengthType): void;
		/** Gets fixed height for this row. */
		getHeight(): number;
		/** Sets fixed height for this row. */
		setHeight(value: number): void;
	}
	/** A layout container that arranges its child components in a grid. */
	class GridPanel extends Panel
	{
		/** Initializes a new instance of the GridPanel class. */
		constructor();
		/** Gets a list of GridRow objects specifying row attributes.
		 * @return An array containing the grid rows.
		*/
		getRows(): Array<GridRow>;
		/** Gets a list of GridColumn objects specifying column attributes.
		 * @return An array containing the grid columns.
		*/
		getColumns(): Array<GridColumn>;
	}
	/** Implements a simple link routing algorithm that pulls link segments out of nodes they would overlap. */
	class Router
	{
		/** Initializes a new instance of the Router class.
		 * @param diagram The diagram this router is associated with.
		*/
		constructor(diagram?: Diagram);
	}
	/** Implements a link routing algorithm that uses a grid to represent the free and occupied regions in the diagram. */
	class GridRouter extends Router
	{
		/** Initializes a new instance of the GridRouter class.
		 * @param diagram The diagram this router is associated with.
		*/
		constructor(diagram?: Diagram);
		/** Gets the size of the pieces of the routing grid. */
		getGridSize(): number;
		/** Sets the size of the pieces of the routing grid. */
		setGridSize(value: number): void;
		/** Gets the size of a buffer zone around a node for which routes get a penalty cost if they pass through it. */
		getNodeVicinitySize(): number;
		/** Sets the size of a buffer zone around a node for which routes get a penalty cost if they pass through it. */
		setNodeVicinitySize(value: number): void;
		/** Gets a value added to the total cost of a route which causes a link to cross another link. */
		getCrossingCost(): number;
		/** Sets a value added to the total cost of a route which causes a link to cross another link. */
		setCrossingCost(value: number): void;
		/** Gets a value added to the total cost of a route for each piece of the routing grid occupied by the route. */
		getLengthCost(): number;
		/** Sets a value added to the total cost of a route for each piece of the routing grid occupied by the route. */
		setLengthCost(value: number): void;
		/** Gets a value added to the total cost of a route if the route passes too close to a node. */
		getNodeVicinityCost(): number;
		/** Sets a value added to the total cost of a route if the route passes too close to a node. */
		setNodeVicinityCost(value: number): void;
		/** Gets a value added to the total cost of a route if the route passes too close to a node. */
		getTurnCost(): number;
		/** Sets a value added to the total cost of a route if the route passes too close to a node. */
		setTurnCost(value: number): void;
	}
	/** Represents a sequence of connected DiagramNode and DiagramLink elements. */
	class Path
	{
		/** Initializes a new instance of the Path class. */
		constructor();
		/** A collection of all DiagramNode elements participating in the path. */
		nodes: Array<DiagramNode>;
		/** A collection of all DiagramLink elements participating in the path. */
		links: Array<DiagramLink>;
		/** A collection of all DiagramItem elements participating in the path. */
		items: Array<DiagramItem>;
		/** Calculates the weight of this Path by accumulating the Weight of all participating Diagram elements.
		 * @param incNodes A boolean value, which specifies whether the Weight of DiagramNode elements should be considered.
		 * @param incLinks A boolean value, which specifies whether the Weight of DiagramLink elements should be considered.
		 * @return A double value that represents the total weight of the elements in this Path according to the incNodes and incLinks parameters.
		*/
		getWeight(incNodes?: boolean, incLinks?: boolean): number;
		/** Gets the length of the Path expressed as the number of Links participating in it.
		 * @return An integer value that represents the number of edges (links) in the path.
		*/
		getLength(): number;
	}
	/** Provides methods that help you find paths and cycles in a graph. */
	class PathFinder
	{
		/** Initializes a new instance of the PathFinder class.
		 * @param diagram An instance of the Diagram class in which to look for paths or cycles.
		*/
		constructor(diagram: Diagram);
		/** Finds and returns all paths that exist between two DiagramNode objects. The returned Path instances include the from an to nodes.
		 * @param from The first DiagramNode in the Path.
		 * @param to The last DiagramNode in the Path.
		 * @param maxPaths The maximum number of paths to find.
		 * @return An array of Path objects; if no paths are found, the array is empty.
		*/
		findAllPaths(from: DiagramNode, to: DiagramNode, maxPaths?: number): Array<Path>;
		/** Finds and returns the shortest path between two DiagramNode elements, considering the Weight of the nodes, the Weight of the links or both.
		 * @param from The first DiagramNode in the Path.
		 * @param to The last DiagramNode in the Path.
		 * @param useNodeWeights If true, the Path with minimal total weight is found, summing the Weight of nodes in the Path.
		 * @param useLinkWeights If true, the Path with minimal total weight is found, summing the Weight of links in the Path.
		 * @return A Path instance that represents the shortest Path found or null if there is no Path connecting from and to.
		*/
		findShortestPath(from: DiagramNode, to: DiagramNode, useNodeWeights?: boolean, useLinkWeights?: boolean): Path;
		/** Finds the longest path between the specified DiagramNode objects.
		 * @param from The first DiagramNode in the Path.
		 * @param to The last DiagramNode in the Path.
		 * @return A Path instance that represents the longest path found; null if there is no Path connecting from and to.
		*/
		findLongestPath(from: DiagramNode, to: DiagramNode): Path;
		/** Detects whether the specified DiagramNode participates in a cycle.
		 * @param participant A DiagramNode element which should participate in the found cycle.
		 * @return A Path instance that represents the found cycle; null if no cycle is detected.
		*/
		findCycle(participant: DiagramNode): Path;
		/** Finds all cycles in the underlying diagram.
		 * @return An array of Path objects; if no cycles are detected, the array is empty.
		*/
		findAllCycles(): Array<Path>;
	}
	/** Represents a keyboard device. */
	class Keyboard
	{
		/** The keyboard state. */
		static state: any;
	}
}
declare namespace MindFusion.Diagramming.Lanes
{
	/** Specifies how to resize child columns and rows in the lanes grid when their parent column or row is resized. */
	enum ResizeType
	{
		/** The header's size (width or height) is fixed and does not change when its parent header is being resized unless all its siblings have fixed size too. */
		Fixed = 0,
		/** The header resizes in proportion to its parent header. */
		Proportional = 1
	}
	/** Represents a header in a lane grid. */
	class Header
	{
		/** Gets a collection of the subheaders of this header. The returned array should not be modified directly. To add and remove subheaders, use the addColumnHeader, addRowHeader, removeColumnHeader and removeRowHeader methods of the Grid respectively.
		 * @return An array containing the subheaders.
		*/
		getSubHeaders(): Array<Header>;
		/** Gets Gets the width of this header. If this is a column header, the property specifies the width of the whole column. */
		getWidth(): number;
		/** Sets Gets the width of this header. If this is a column header, the property specifies the width of the whole column. */
		setWidth(value: number): void;
		/** Gets Gets the width of this header. If this is a row header, the property specifies the height of the whole row. */
		getHeight(): number;
		/** Sets Gets the width of this header. If this is a row header, the property specifies the height of the whole row. */
		setHeight(value: number): void;
		/** Gets how a row or a column is resized relatively to its parent. */
		getResizeType(): ResizeType;
		/** Sets how a row or a column is resized relatively to its parent. */
		setResizeType(value: ResizeType): void;
		/** Gets the header caption. */
		getTitle(): string;
		/** Sets the header caption. */
		setTitle(value: string): void;
		/** Gets a value indicating whether to rotate the header caption at 90 degree. */
		getRotateTitle(): boolean;
		/** Sets a value indicating whether to rotate the header caption at 90 degree. */
		setRotateTitle(value: boolean): void;
		/** Gets the style of this header. */
		getStyle(): Style;
		/** Sets the style of this header. */
		setStyle(value: Style): void;
		/** Gets a value indicating whether this header is a column header. Both isColumnHeader and isRowHeader return false if the header is not attached to a lane grid.
		 * @return true if the header is a column header; otherwise, false.
		*/
		isColumnHeader(): boolean;
		/** Gets a value indicating whether this header is a row header. Both isColumnHeader and isRowHeader return false if the header is not attached to a lane grid.
		 * @return true if the header is a row header; otherwise, false.
		*/
		isRowHeader(): boolean;
	}
	/** Represents a single cell in a lane grid. */
	class Cell
	{
		/** Gets the style of the cell. */
		getStyle(): Style;
		/** Sets the style of the cell. */
		setStyle(value: Style): void;
		/** Gets the text of the cell. */
		getText(): string;
		/** Sets the text of the cell. */
		setText(value: string): void;
	}
	/** Represents a cell or a cluster of cells in a lane grid. */
	class CellCluster
	{
		/** Gets the style of each cell in the cell cluster. */
		getStyle(): Style;
		/** Sets the style of each cell in the cell cluster. */
		setStyle(value: Style): void;
		/** Gets the text of each cell in the cell cluster. */
		getText(): string;
		/** Sets the text of each cell in the cell cluster. */
		setText(value: string): void;
		/** Gets the start column of this cell cluster.
		 * @return An integer indicating the start column.
		*/
		getColumnStart(): number;
		/** Gets the end column of this cell cluster.
		 * @return An integer indicating the end column.
		*/
		getColumnEnd(): number;
		/** Gets the start row of this cell cluster.
		 * @return An integer indicating the start row.
		*/
		getRowStart(): number;
		/** Gets the end row of this cell cluster.
		 * @return An integer indicating the end row.
		*/
		getRowEnd(): number;
	}
	/** Encapsulates the appearance properties of an element in a lane grid. */
	class Style
	{
		/** Initializes a new instance of the Style class. */
		constructor();
		/** Gets the background brush of this style. */
		getBackgroundBrush(): any;
		/** Sets the background brush of this style. */
		setBackgroundBrush(value: any): void;
		/** Gets the color used to stoke the left border of elements with this style. */
		getLeftBorderPen(): string;
		/** Sets the color used to stoke the left border of elements with this style. */
		setLeftBorderPen(value: string): void;
		/** Gets the width of the left border of elements with this style. */
		getLeftBorderThickness(): number;
		/** Sets the width of the left border of elements with this style. */
		setLeftBorderThickness(value: number): void;
		/** Gets the color used to stoke the top border of elements with this style. */
		getTopBorderPen(): string;
		/** Sets the color used to stoke the top border of elements with this style. */
		setTopBorderPen(value: string): void;
		/** Gets the width of the top border of elements with this style. */
		getTopBorderThickness(): number;
		/** Sets the width of the top border of elements with this style. */
		setTopBorderThickness(value: number): void;
		/** Gets the color used to stoke the right border of elements with this style. */
		getRightBorderPen(): string;
		/** Sets the color used to stoke the right border of elements with this style. */
		setRightBorderPen(value: string): void;
		/** Gets the width of the right border of elements with this style. */
		getRightBorderThickness(): number;
		/** Sets the width of the right border of elements with this style. */
		setRightBorderThickness(value: number): void;
		/** Gets the color used to stoke the bottom border of elements with this style. */
		getBottomBorderPen(): string;
		/** Sets the color used to stoke the bottom border of elements with this style. */
		setBottomBorderPen(value: string): void;
		/** Gets the width of the bottom border of elements with this style. */
		getBottomBorderThickness(): number;
		/** Sets the width of the bottom border of elements with this style. */
		setBottomBorderThickness(value: number): void;
		/** Gets the color used to draw texts with this style. */
		getTextColor(): string;
		/** Sets the color used to draw texts with this style. */
		setTextColor(value: string): void;
		/** Gets the name of the font used to draw texts with this style. */
		getFontName(): string;
		/** Sets the name of the font used to draw texts with this style. */
		setFontName(value: string): void;
		/** Gets the size of the font used to draw texts with this style. */
		getFontSize(): number;
		/** Sets the size of the font used to draw texts with this style. */
		setFontSize(value: number): void;
		/** Gets a value indicating how to horizontally align texts drawn with this style. */
		getTextAlignment(): MindFusion.Diagramming.Alignment;
		/** Sets a value indicating how to horizontally align texts drawn with this style. */
		setTextAlignment(value: MindFusion.Diagramming.Alignment): void;
		/** Gets a value indicating how to vertically align texts drawn with this style. */
		getLineAlignment(): MindFusion.Diagramming.Alignment;
		/** Sets a value indicating how to vertically align texts drawn with this style. */
		setLineAlignment(value: MindFusion.Diagramming.Alignment): void;
	}
	/** Represents a lane grid. */
	class Grid
	{
		/** Adds the specified header to the grid as a new column header.
		 * @param header The Header object to add.
		 * @param parent The parent header to add to, or null, to add the new header as a root column.
		 * @param i The index at which the header was added in the collection.
		*/
		addColumnHeader(header: Header, parent?: Header, i?: number): void;
		/** Removes the specified column header and all of its associated cells from the grid.
		 * @param header The Header object to remove.
		*/
		removeColumnHeader(header: Header): void;
		/** Adds the specified header to the grid as a new row header.
		 * @param header The Header object to add.
		 * @param parent The parent header to add to, or null, to add the new header as a root row.
		 * @param i The index at which the header was added in the collection.
		*/
		addRowHeader(header: Header, parent?: Header, i?: number): void;
		/** Removes the specified row header and all of its associated cells from the grid.
		 * @param header The Header object to remove.
		*/
		removeRowHeader(header: Header): void;
		/** Finds the first column whose header caption matches the specified string.
		 * @param title A string containing the header title to look for.
		 * @return Returns the first column Header that has the specified caption.
		*/
		findColumn(title: string): Header;
		/** Finds the first row whose header caption matches the specified string.
		 * @param title A string containing the header title to look for.
		 * @return Returns the first row Header that has the specified caption.
		*/
		findRow(title: string): Header;
		/** Returns the bounding rectangle of the specified header.
		 * @param header The Header object whose coordinates to return.
		 * @param includeSubHeaders true to include the coordinates of the child headers in the returned rectangle; otherwise, false.
		 * @return A Rect that bounds the specified header, and optionally its child headers.
		*/
		getHeaderBounds(header: Header, includeSubHeaders: boolean): MindFusion.Drawing.Rect;
		/** Returns the bounding rectangle of all column headers.
		 * @return A Rect that bounds all column headers.
		*/
		getColumnHeaderBounds(): MindFusion.Drawing.Rect;
		/** Returns the bounding rectangle of all row headers.
		 * @return A Rect that bounds all row headers.
		*/
		getRowHeaderBounds(): MindFusion.Drawing.Rect;
		/** Returns the bounding rectangle of the specified cell.
		 * @param cell An Cell object representing a cell or a group of cells in the grid.
		 * @return A Rect instance representing the rectangle that bounds the specified cell or group of cells.
		*/
		getCellBounds(cell: Cell): MindFusion.Drawing.Rect;
		/** Gets the collection with the topmost column headers. The returned array should not be modified directly. To add and remove column headers to the grid, use the addColumnHeader and removeColumnHeader methods respectively.
		 * @return An array containing the topmost column headers.
		*/
		getColumnHeaders(): Array<Header>;
		/** Gets the collection with the topmost row headers. The returned array should not be modified directly. To add and remove row headers to the grid, use the addRowHeader and removeRowHeader methods respectively.
		 * @return An array containing the topmost row headers.
		*/
		getRowHeaders(): Array<Header>;
		/** Gets the number of columns in the grid. */
		getColumnCount(): number;
		/** Sets the number of columns in the grid. */
		setColumnCount(value: number): void;
		/** Gets the number of rows in the grid. */
		getRowCount(): number;
		/** Sets the number of rows in the grid. */
		setRowCount(value: number): void;
		/** Gets the offset of the lane grid from the left side of the document bounds. */
		getLeftMargin(): number;
		/** Sets the offset of the lane grid from the left side of the document bounds. */
		setLeftMargin(value: number): void;
		/** Gets the offset of the lane grid from the top side of the document bounds. */
		getTopMargin(): number;
		/** Sets the offset of the lane grid from the top side of the document bounds. */
		setTopMargin(value: number): void;
		/** Gets the minimum size of a header. */
		getMinHeaderSize(): number;
		/** Sets the minimum size of a header. */
		setMinHeaderSize(value: number): void;
		/** Gets the style of the area above all row headers and to the left of all column headers. */
		getTopLeftAreaStyle(): Style;
		/** Sets the style of the area above all row headers and to the left of all column headers. */
		setTopLeftAreaStyle(value: Style): void;
		/** Gets the text displayed in the top left area. */
		getTopLeftAreaText(): string;
		/** Sets the text displayed in the top left area. */
		setTopLeftAreaText(value: string): void;
		/** Gets a value indicating whether headers will be anchored to the corresponding side (that is, the column header anchored to the top side and the row header anchored to the left side). */
		getHookHeaders(): boolean;
		/** Sets a value indicating whether headers will be anchored to the corresponding side (that is, the column header anchored to the top side and the row header anchored to the left side). */
		setHookHeaders(value: boolean): void;
		/** Gets a value indicating whether lane headers appear at the top of the z-order above all other items. */
		getHeadersOnTop(): boolean;
		/** Sets a value indicating whether lane headers appear at the top of the z-order above all other items. */
		setHeadersOnTop(value: boolean): void;
		/** Gets an array with float values specifying the widths of individual row levels. If a value is non-positive or does not exist because the array has less arguments than the number of rows, then the width is calculated as the maximum width of the rows in that level. */
		getRowHeadersWidths(): Array<number>;
		/** Sets an array with float values specifying the widths of individual row levels. If a value is non-positive or does not exist because the array has less arguments than the number of rows, then the width is calculated as the maximum width of the rows in that level. */
		setRowHeadersWidths(value: Array<number>): void;
		/** Gets an array with float values specifying the heights of individual column levels. If a value is non-positive or does not exist because the array has less arguments than the number of columns, then the height is calculated as the maximum height of the columns in that level. */
		getColumnHeadersHeights(): Array<number>;
		/** Sets an array with float values specifying the heights of individual column levels. If a value is non-positive or does not exist because the array has less arguments than the number of columns, then the height is calculated as the maximum height of the columns in that level. */
		setColumnHeadersHeights(value: Array<number>): void;
		/** Gets a value indicating whether grid cells' text can be in-place edited. */
		getAllowInplaceEdit(): boolean;
		/** Sets a value indicating whether grid cells' text can be in-place edited. */
		setAllowInplaceEdit(value: boolean): void;
		/** Gets a value indicating whether users can resize the headers of the grid interactively. */
		getAllowResizeHeaders(): boolean;
		/** Sets a value indicating whether users can resize the headers of the grid interactively. */
		setAllowResizeHeaders(value: boolean): void;
		/** Gets the total height of all column headers.
		 * @return A number representing the height.
		*/
		getTotalColumnHeight(): number;
		/** Gets the total width of all row headers.
		 * @return A number representing the width.
		*/
		getTotalRowWidth(): number;
		/** Gets the number of levels of the column headers.
		 * @return A number representing the column depth.
		*/
		getColumnDepth(): number;
		/** Gets the number of levels of the row headers.
		 * @return A number representing the row depth.
		*/
		getRowDepth(): number;
		/** Gets the cell or the cluster of cells corresponding to the specified row and column.
		 * @param column A cell column index.
		 * @param row A cell row index.
		 * @return A Cell object representing the cell or cluster of cells with the specified coordinates.
		*/
		get(column: number, row: number): Cell;
		/** Gets the cell or the cluster of cells corresponding to the specified row and column.
		 * @param column A column Header.
		 * @param row A row Header.
		 * @return A Cell object representing the cell or cluster of cells with the specified coordinates.
		*/
		get(column: Header, row: Header): CellCluster;
		/** Returns the column header with the specified index from the bottommost column header level.
		 * @param index A number specifying the column index.
		 * @return A Header object representing the column at the specified index.
		*/
		getColumn(index: number): Header;
		/** Returns the row header with the specified index from the bottommost row header level.
		 * @param index A number specifying the row index.
		 * @return A Header object representing the row at the specified index.
		*/
		getRow(index: number): Header;
		/** Gets the Header that is located at the specified point.
		 * @param point A Point instance specifying a point within the grid.
		 * @param headerBounds An object that receives the coordinates of the found header in its headerBounds field.
		 * @param scrollPosition When the headers are hooked this parameter should provide information about the current scroll position in the view.
		 * @return The found Header object, or null if there is no header located at the specified point.
		*/
		getHeaderFromPoint(point: MindFusion.Drawing.Point, headerBounds: any, scrollPosition: MindFusion.Drawing.Point): Header;
		/** Gets the Cell that is located at the specified point.
		 * @param point A Point instance specifying a point within the grid.
		 * @param cellBounds An object that receives the coordinates of the found cell in its cellBounds field.
		 * @return The found Cell object, or null if there is no cell located at the specified point.
		*/
		getCellFromPoint(point: MindFusion.Drawing.Point, cellBounds: any): Header;
		/** Returns the column index of the specified cell.
		 * @param cell A Cell object representing a single cell in the grid.
		 * @return The index of the column that contains cell; -1 if cell is not found or refers to a group of cells.
		*/
		getCellColumn(cell: Cell): number;
		/** Returns the row index of the specified cell.
		 * @param cell A Cell object representing a single cell in the grid.
		 * @return The index of the row that contains cell; -1 if cell is not found or refers to a group of cells.
		*/
		getCellRow(cell: Cell): number;
		/** Returns the 0-based index of the specified column. Only works for bottommost headers. If the specified column is a group header, returns -1.
		 * @param header A Header instance that represents a grid column.
		 * @return he index of column, or -1 if the specified header represents a row or a group of child columns.
		*/
		getColumnIndex(header: Header): number;
		/** Returns the 0-based index of the specified row. Only works for bottommost headers. If the specified row is a group header, returns -1.
		 * @param header A Header instance that represents a grid row.
		 * @return The index of row, or -1 if the specified header represents a column or a group of child rows.
		*/
		getRowIndex(header: Header): number;
		/** Gets the default style of the grid.
		 * @return A Style object representing the style of all grid elements, which do not have an explicitly assigned style.
		*/
		getStyle(): Style;
	}
}
declare namespace MindFusion.Controls
{
	/** Specifies the position of trackbar ticks. */
	enum TickPosition
	{
		/** There are no ticks rendered. */
		None = 0,
		/** Ticks are rendered on the left side of the trackbar. */
		Left = 1,
		/** Ticks are rendered on the right side of the trackbar. */
		Right = 2,
		/** Ticks are rendered on both sides of the trackbar. */
		Both = 4
	}
	/** Lets users zoom and pan a target view control interactively. */
	class ZoomControl
	{
		/** Initializes a new instance of the ZoomControl class.
		 * @param element The Canvas DOM Element this ZoomControl is associated with.
		*/
		constructor(element: any);
		/** Sets the control modified by this ZoomControl.
		 * @param target The control modified by this ZoomControl.
		*/
		setTarget(target: MindFusion.Diagramming.Diagram): void;
		/** Gets a value indicating whether handling of mouse events is enabled. */
		getEnabled(): boolean;
		/** Sets a value indicating whether handling of mouse events is enabled. */
		setEnabled(value: boolean): void;
		/** Gets a value indicating whether the control will post back to the server when the control's value has changed. */
		getAutoPostBack(): boolean;
		/** Sets a value indicating whether the control will post back to the server when the control's value has changed. */
		setAutoPostBack(value: boolean): void;
		/** Gets the zoom factor. */
		getZoomFactor(): number;
		/** Sets the zoom factor. */
		setZoomFactor(value: number): void;
		/** Gets the minimum zoom level allowed to set through this control. */
		getMinZoomFactor(): number;
		/** Sets the minimum zoom level allowed to set through this control. */
		setMinZoomFactor(value: number): void;
		/** Gets the maximum zoom level allowed to set through this control. */
		getMaxZoomFactor(): number;
		/** Sets the maximum zoom level allowed to set through this control. */
		setMaxZoomFactor(value: number): void;
		/** Gets the amount by which to change zoom level when + and - buttons are clicked. */
		getZoomStep(): number;
		/** Sets the amount by which to change zoom level when + and - buttons are clicked. */
		setZoomStep(value: number): void;
		/** Gets the scroll offset added when users click the pan arrows. */
		getScrollStep(): number;
		/** Sets the scroll offset added when users click the pan arrows. */
		setScrollStep(value: number): void;
		/** Gets the background color of the control. */
		getBackColor(): string;
		/** Sets the background color of the control. */
		setBackColor(value: string): void;
		/** Gets the color used to fill the ZoomControl elements. */
		getFill(): string;
		/** Sets the color used to fill the ZoomControl elements. */
		setFill(value: string): void;
		/** Gets the color used to render depressed buttons. */
		getActiveColor(): string;
		/** Sets the color used to render depressed buttons. */
		setActiveColor(value: string): void;
		/** Gets the color of ZoomControl elements' borders. */
		getBorderColor(): string;
		/** Sets the color of ZoomControl elements' borders. */
		setBorderColor(value: string): void;
		/** Gets the color of plus, minus and arrow icons. */
		getInnerColor(): string;
		/** Sets the color of plus, minus and arrow icons. */
		setInnerColor(value: string): void;
		/** Gets the color of the control elements' shadow. */
		getShadowColor(): string;
		/** Sets the color of the control elements' shadow. */
		setShadowColor(value: string): void;
		/** Gets the color of the the label that shows the current zoom level. */
		getTextColor(): string;
		/** Sets the color of the the label that shows the current zoom level. */
		setTextColor(value: string): void;
		/** Gets a value indicating whether the label that shows the current zoom level should be visible. */
		getShowLabel(): boolean;
		/** Sets a value indicating whether the label that shows the current zoom level should be visible. */
		setShowLabel(value: boolean): void;
		/** Gets the current tick position of the trackbar. */
		getTickPosition(): TickPosition;
		/** Sets the current tick position of the trackbar. */
		setTickPosition(value: TickPosition): void;
		/** Gets a value indicating whether the trackbar should snap to ZoomStep values when dragged. */
		getSnapToZoomStep(): boolean;
		/** Sets a value indicating whether the trackbar should snap to ZoomStep values when dragged. */
		setSnapToZoomStep(value: boolean): void;
		/** Gets the padding of the control's contents. */
		getPadding(): number;
		/** Sets the padding of the control's contents. */
		setPadding(value: number): void;
		/** Gets the corner radius of rounded child elements. */
		getCornerRadius(): number;
		/** Sets the corner radius of rounded child elements. */
		setCornerRadius(value: number): void;
	}
}
