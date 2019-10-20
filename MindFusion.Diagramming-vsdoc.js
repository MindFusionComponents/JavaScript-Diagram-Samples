MindFusion = {
	Animations: {
		Animation: function (item, options, onUpdateCallback, onCustomFunctionCallback) {
			/// <summary>Represents an object that is used to animate diagram items on the canvas.</summary>
			/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The diagram item to animate.</param>
			/// <param name="options" type="Object" optional="true">Optional. An object used to specify various property values for the animation.</param>
			/// <param name="onUpdateCallback" type="Function" optional="true">Optional. A callback function called on every animation tick.</param>
			/// <param name="onCustomFunctionCallback" type="Function" optional="true">Optional. A callback function called when the animation type is set to Custom.</param>
		},
		AnimationType: function() {
			/// <summary>Specifies the animation function used by an Animation object.</summary>
		},
		EasingType: function() {
			/// <summary>Specifies the easing applied to an animation.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised in the Animations namespace.</summary>
		},
		__namespace: true
	},
	Collections: {
		ArrayList: function () {
			/// <summary>Represents an array of arbitrary objects.</summary>
		},
		Dictionary: function () {
			/// <summary>Represents a collection of keys and values.</summary>
		},
		Grid: function () {
			/// <summary>Represents a collection of tabular data.</summary>
		},
		ItemEventArgs: function (item) {
			/// <summary>Contains the arguments passed to event handlers of the ObservableCollection class.</summary>
			/// <param name="item" type="Object">The item related to the event.</param>
		},
		ObservableCollection: function () {
			/// <summary>Represents a collection that provides notifications when items get added or removed.</summary>
		},
		Queue: function () {
			/// <summary>Represents a first-in, first-out collection of objects.</summary>
		},
		Set: function () {
			/// <summary>Represents a collection of unique elements with no particular ordering.</summary>
		},
		__namespace: true
	},
	Controls: {
		TickPosition: function() {
			/// <summary>Specifies the position of trackbar ticks.</summary>
		},
		ZoomControl: function (element) {
			/// <summary>The ZoomControl lets users zoom and pan a target view control interactively.</summary>
			/// <param name="element" type="Canvas">Type: Canvas&#10;The Canvas DOM Element this ZoomControl is associated with.</param>
		},
		__namespace: true
	},
	Diagramming: {
		Lanes: {
			Cell: function () {
				/// <summary>Represents a single cell in a lane grid.</summary>
			},
			Grid: function () {
				/// <summary>Represents a lane grid.</summary>
			},
			Header: function () {
				/// <summary>Represents a header in a lane grid.</summary>
			},
			ResizeType: function() {
				/// <summary>Specifies how to resize child columns and rows in the lanes grid when their parent column or row is resized.</summary>
			},
			Style: function () {
				/// <summary>Encapsulates the appearance properties of an element in a lane grid.</summary>
			},
			__namespace: true
		},
		Action: function() {
			/// <summary>Specifies the possible actions a user can carry out on diagram items.</summary>
		},
		AddItemCommand: function (diagram, item) {
			/// <summary>Implements creation of new diagram items.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="MindFusion.Diagramming.DiagramItem">A new DiagramItem that should be added to the Diagram.</param>
		},
		AdjustmentHandles: function() {
			/// <summary>Identifies the distinct selection handles of a node.</summary>
		},
		AeroEffect: function () {
			/// <summary>Represents an effect that adds semitransparency to the node and emphasizes its outline by adding a shade and an inner stroke.</summary>
		},
		Alignment: function() {
			/// <summary>Specifies the alignment of text relative to its layout rectangle.</summary>
		},
		AnchorPattern: function (points, id) {
			/// <summary>The AnchorPattern class represents a set of anchor points, which specify the exact locations where links are allowed to connect to nodes.</summary>
			/// <param name="points" type="Array">Contains the initial set of AnchorPoint instances for the new pattern.</param>
			/// <param name="id" type="String" optional="true">Optional. An unique identifier for this anchor pattern.</param>
		},
		AnchorPoint: function (x, y, allowIncoming, allowOutgoing, style, color, size) {
			/// <summary>The AnchorPoint class represents a location in a node to which links are allowed to connect.</summary>
			/// <param name="x" type="Number">The horizontal position of the anchor expressed as percent of the width of a node.</param>
			/// <param name="y" type="Number">The vertical position of the anchor expressed as percent of the height of a node.</param>
			/// <param name="allowIncoming" type="Boolean" optional="true">Optional. Specifies whether incoming links can connect to this anchor.</param>
			/// <param name="allowOutgoing" type="Boolean" optional="true">Optional. Specifies whether outgoing links can connect to this anchor.</param>
			/// <param name="style" type="MindFusion.Diagramming.MarkStyle" optional="true">Optional. Defines how the anchor point is marked visually.</param>
			/// <param name="color" type="String" optional="true">Optional. Defines the color with which the anchor mark is painted.</param>
			/// <param name="size" type="Number" optional="true">Optional. Defines the size of the anchor mark.</param>
		},
		AutoResize: function() {
			/// <summary>Defines in which directions automatic resizing can enlarge the diagram scrollable area.</summary>
		},
		Behavior: function() {
			/// <summary>Defines values that specify how the component responds to actions performed by the user.</summary>
		},
		BehaviorBase: function (parent) {
			/// <summary>An abstract base class for types that define how the control reacts to users' actions with a mouse or other pointing devices.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		Border: function () {
			/// <summary>Represents a panel that draws a border around its child components.</summary>
		},
		Cell: function () {
			/// <summary>Represents a cell of a TableNode.</summary>
		},
		CellEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of table cell -related events.</summary>
		},
		CellFrameStyle: function() {
			/// <summary>Specifies the style of the cells' frame lines.</summary>
		},
		CellValidationEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of table row and column resizing related events.</summary>
		},
		ChangeItemCommand: function (diagram, item) {
			/// <summary>Handles undo / redo of property changes.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem that will be modified.</param>
		},
		ColumnStyle: function() {
			/// <summary>Specifies how table columns' width is set.</summary>
		},
		Command: function (diagram) {
			/// <summary>Represents an action that changes the diagram and whose effects can be undone.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
		},
		ComponentEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of component-related events.</summary>
			/// <param name="args" type="Object"></param>
		},
		CompositeCommand: function (diagram) {
			/// <summary>Represents a set of Command instances as a single operation. Undoing or redoing the composite action, respectively undoes or redoes all its constituent subactions at the same time.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
		},
		CompositeNode: function (parent) {
			/// <summary>CompositeNode implements nodes whose appearance can be defined via composition of components and layout containers.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
		},
		ConnectionPoint: function (node, link, incoming) {
			/// <summary>A class that represents a connection between an edge and a node in a graph. It decouples the DiagramLink class from the DiagramNode class, allowing edges to connect different types of nodes without knowing anything of their implementation details. Each DiagramLink object contains two ConnectionPoint instances describing the connections at both ends of the link.&#10;</summary>
			/// <param name="node" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The node whose connection to a link is managed by this ConnectionPoint.</param>
			/// <param name="link" type="MindFusion.Diagramming.DiagramLink" optional="true">Optional. The link whose connection to a node is managed by this ConnectionPoint.</param>
			/// <param name="incoming" type="Boolean" optional="true">Optional. Specifies which end of the link is represented by this ConnectionPoint.</param>
		},
		ConnectionStyle: function() {
			/// <summary>Specifies whether links should connect to a node or its rows.</summary>
		},
		ContainerNode: function (parent) {
			/// <summary>ContainerNode instances are diagram nodes that can contain other nodes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
		},
		CreateLinkController: function (diagram, link) {
			/// <summary>A controller used to draw new links in the diagram.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The parent diagram of the new link.</param>
			/// <param name="link" type="MindFusion.Diagramming.DiagramLink">The link that will be drawn by this controller.</param>
		},
		CreateNodeController: function (diagram, node) {
			/// <summary>A controller used to draw new nodes in the diagram.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The parent diagram of the new node.</param>
			/// <param name="node" type="MindFusion.Diagramming.DiagramNode">The node that will be drawn by this controller.</param>
		},
		CreateSelectionController: function (selection) {
			/// <summary>A controller used to draw selection rectangle in the diagram.</summary>
			/// <param name="selection" type="MindFusion.Diagramming.Selection">The selection that will be drawn by this controller.</param>
		},
		DelKeyAction: function() {
			/// <summary>Specifies the type of action performed when the user presses the DEL key.</summary>
		},
		Diagram: function (element) {
			/// <summary>The Diagram class represents a flow diagram.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this Diagram is associated with.</param>
		},
		DiagramEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of global diagram events such as clicked.</summary>
		},
		DiagramItem: function (parent) {
			/// <summary>Represents an item in the diagram document. All classes representing diagram elements derive from DiagramItem.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the item properties.</param>
		},
		DiagramLink: function (parent, origin, destination) {
			/// <summary>Represents a link between two diagram nodes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the link properties.</param>
			/// <param name="origin" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The origin node of the new link.</param>
			/// <param name="destination" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The destination node of the new link.</param>
		},
		DiagramNode: function (parent) {
			/// <summary>DiagramNode is an abstract base class from which&#160;specific types such as&#160;ShapeNode&#160;and TableNode&#160;derive. DiagramNode instances can represent graph vertices, nodes in organizational or flow diagrams, entities in ER diagrams, and so on.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. A Diagram instance whose default node attributes are copied to this node.</param>
		},
		DoNothingBehavior: function (parent) {
			/// <summary>Implements the DoNothing behavior.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		DrawLinksBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.DrawLinks.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		DrawNodesBehavior: function (parent) {
			/// <summary>The base class for behavior types that allow drawing of nodes, but not links.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		DrawShapesBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.DrawShapes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		DummyNode: function (parent) {
			/// <summary>DummyNode represents virtual nodes set as targets of disconnected links.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. A Diagram instance whose default node attributes are copied to this node.</param>
		},
		EffectPhase: function() {
			/// <summary>Specifies the rendering phase during which an effect application is requested.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Diagram component.</summary>
		},
		Factory: function () {
			/// <summary>Provides shortcut methods for creating and adding instances of the standard item types.</summary>
		},
		FitSize: function() {
			/// <summary>Specifies how the ResizeToFitText method should resize a node.</summary>
		},
		FoldContainerCommand: function (diagram, container) {
			/// <summary>Handles undo / redo of container folding.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
			/// <param name="container" type="MindFusion.Diagramming.ContainerNode">The ContainerNode instance that will be modified.</param>
		},
		FreeFormNode: function (parent) {
			/// <summary>A FreeFormNode collects all points from users' mouse or touch input and displaysthem as node's outline.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. A Diagram instance whose default node attributes are copied to this node.</param>
		},
		GlassEffect: function () {
			/// <summary>Represents a glass-like visual effect.</summary>
		},
		GlassEffectType: function() {
			/// <summary>Specifies the type of a GlassEffect node effect.</summary>
		},
		GridColumn: function () {
			/// <summary>Represents a column in a GridPanel.</summary>
		},
		GridPanel: function () {
			/// <summary>A layout container that arranges its child components in a grid.</summary>
		},
		GridRouter: function (diagram) {
			/// <summary>Implements a link routing algorithm that uses a grid to represent the free and occupied regions in the diagram.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram" optional="true">Optional. Gets or sets the diagram this router is associated with.</param>
		},
		GridRow: function () {
			/// <summary>Represents a row in a GridPanel.</summary>
		},
		GridStyle: function() {
			/// <summary>Defines values that specify the visual style of the alignment grid.</summary>
		},
		HandlesStyle: function() {
			/// <summary>Enumerates possible visual styles for frames and handles drawn around selected nodes.</summary>
		},
		HeaderEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of header-related events.</summary>
		},
		HeaderResizeEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of header resize events.</summary>
		},
		InplaceEditEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of inplace edit related events.</summary>
		},
		Interaction: function (diagram) {
			/// <summary>Encapsulates the current state of user interaction with the control.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram" optional="true">Optional. </param>
		},
		InteractionState: function (modifiedItem, action, adjustmentHandle, point) {
			/// <summary>Encapsulates the current state of user interaction with the control.</summary>
			/// <param name="modifiedItem" type="MindFusion.Diagramming.DiagramItem">The DiagramItem to be created or modified.</param>
			/// <param name="action" type="MindFusion.Diagramming.Action">One of the Action enumeration values, specifying what kind of action to perform.</param>
			/// <param name="adjustmentHandle" type="MindFusion.Diagramming.AdjustmentHandles">The index of the selection handle to be dragged with the mouse, defines what kind of modification to perform.</param>
			/// <param name="point" type="MindFusion.Drawing.Point">A Point specifying the mouse position where the user starts to draw or modify an item.</param>
		},
		ItemEventArgs: function (args) {
			/// <summary>Contains the arguments passed to handlers of item-related events.</summary>
			/// <param name="args" type="Object"></param>
		},
		LengthType: function() {
			/// <summary>Indicates how GridPanel determines dimensions of its rows and columns.</summary>
		},
		LinkCrossings: function() {
			/// <summary>Defines values that indicate how to render link intersection points.</summary>
		},
		LinkEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of link-related events.</summary>
		},
		LinkLabel: function (link, text) {
			/// <summary>Represents a label displayed by a DiagramLink. New labels can be added to a link by calling its addLabel method.</summary>
			/// <param name="link" type="MindFusion.Diagramming.DiagramLink">The DiagramLink that displays the label.</param>
			/// <param name="text" type="String">The label's text.</param>
		},
		LinkNodesBehavior: function () {
			/// <summary>The base class for behavior types that allow drawing both nodes and links.</summary>
		},
		LinkShape: function() {
			/// <summary>Specifies available styles for the segments of links.</summary>
		},
		LinkShapesBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.LinkShapes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		LinkTextStyle: function() {
			/// <summary>Specifies the position and alignment of links' labels.</summary>
		},
		MagnifyBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.Magnify.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		Manipulator: function (node) {
			/// <summary>Manipulator is an abstract base class which defines the behavior of miscellaneous UI widgets attached to nodes.</summary>
			/// <param name="node" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The DiagramNode containing this manipulator.</param>
		},
		MarkStyle: function() {
			/// <summary>Specifies the visual style of anchor point marks.</summary>
		},
		ModificationStart: function() {
			/// <summary>Specifies how the user can start modifying an item.</summary>
		},
		ModifierKeyAction: function() {
			/// <summary>Defines the actions that can be assigned to a modifier key such as CTRL or ALT.</summary>
		},
		ModifierKeyActions: function () {
			/// <summary>Maps keyboard modifier keys to special actions in MindFusion.Diagramming such as panning and drawing selection rectangle.</summary>
		},
		ModifyBehavior: function (parent) {
			/// <summary>This class is used when the diagram behavior is set to Behavior.Modify.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		ModifyLinkController: function (link, adjustmentHandle) {
			/// <summary>A controller used to modify existing links in the diagram.</summary>
			/// <param name="link" type="MindFusion.Diagramming.DiagramLink">The link that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">An object representing the adjustment handle used to modify the link.</param>
		},
		ModifyNodeController: function (node, adjustmentHandle) {
			/// <summary>A controller used to modify existing nodes in the diagram.</summary>
			/// <param name="node" type="MindFusion.Diagramming.DiagramNode">The node that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">An object representing the adjustment handle used to modify the node.</param>
		},
		ModifySelectionController: function (selection, adjustmentHandle) {
			/// <summary>A controller used to modify multiple selected items in the diagram.</summary>
			/// <param name="selection" type="MindFusion.Diagramming.Selection">The selection that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">An object representing the adjustment handle used to modify the selection.</param>
		},
		MouseButtonActions: function() {
			/// <summary>Specifies what actions can be associated with the middle and right mouse buttons.</summary>
		},
		MouseInputDispatcher: function (diagram) {
			/// <summary>Processes mouse events and dispatches them to controller objects appropriate for current context.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram instance that should receive mouse input.</param>
		},
		NodeEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of node-related events.</summary>
		},
		NodeListView: function (element) {
			/// <summary>ListBox control with support for hosting DiagramNodes and dragging them to the Diagram control. Items' labels can be set by assigning them to the Tag property of nodes.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this NodeListView is associated with.</param>
		},
		Orientation: function() {
			/// <summary>Specifies the orientation of user interface elements.</summary>
		},
		Overview: function (element) {
			/// <summary>The Overview control provides a scaled-down view of a Diagram contents and allows scrolling and zooming the diagram with the mouse.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this Diagram is associated with.</param>
		},
		PanBehavior: function (parent) {
			/// <summary>Pans the diagram when the users drags the mouse.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		PanController: function (diagram) {
			/// <summary>A controller used to pan the diagram view.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The diagram that will get scrolled by this controller.</param>
		},
		Panel: function () {
			/// <summary>Represents layout containers in CompositeNode visual tree.</summary>
		},
		Path: function () {
			/// <summary>Represents a sequence of connected DiagramNode and DiagramLink elements.</summary>
		},
		PathFinder: function (diagram) {
			/// <summary>Provides methods that help you find paths and cycles in a graph.</summary>
			/// <param name="diagram" type="Diagram">An instance of the Diagram class in which to look for paths or cycles.</param>
		},
		RelativeToLink: function() {
			/// <summary>Specifies how the link labels are positioned.</summary>
		},
		RemoveItemCommand: function (diagram, item) {
			/// <summary>Implements deletion of diagram items.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
			/// <param name="item" type="MindFusion.Diagramming.DiagramItem">A DiagramItem that should be removed from the Diagram.</param>
		},
		Router: function (diagram) {
			/// <summary>Implements a simple link routing algorithm that pulls link segments out of nodes they would overlap.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The diagram this router is associated with.</param>
		},
		Ruler: function (element) {
			/// <summary>The Ruler control provides horizontal and vertical scales that help users measure and align diagram items.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this Ruler is associated with.</param>
		},
		SaveToStringFormat: function() {
			/// <summary>Specifies in what format to save the diagram when generating a string using the saveToString method.</summary>
		},
		ScaleMode: function() {
			/// <summary>Defines Overview scaling modes.</summary>
		},
		ScrollTableCommand: function (diagram, table) {
			/// <summary>Handles undo / redo of table scrolling.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram modified by this command.</param>
			/// <param name="table" type="MindFusion.Diagramming.TableNode">The TableNode instance that will be modified.</param>
		},
		Selection: function (parent) {
			/// <summary>Represents a set of items selected in the Diagram document.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The diagram where the items are selected.</param>
		},
		SelectionEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of selection-related events.</summary>
		},
		SelectOnlyBehavior: function (parent) {
			/// <summary>Allows only selection of existing items. Modifying them or drawing new ones is disabled.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram">The Diagram this behavior will be associated with.</param>
		},
		SerializeTagEventArgs: function () {
			/// <summary>Contains the arguments passed to the serializeTag and deserializeTag event handlers.</summary>
		},
		ShadowsStyle: function() {
			/// <summary>Enumerates possible shadows-drawing styles.</summary>
		},
		Shape: function (params, ) {
			/// <summary>An instance of this class represents a shape defined through a series of arc, line and Bezier segments. The segments can be a part of the shape outline, in which case they define the part of the shape is filled, used for hit-testing and for aligning links to the node edges. Segments can also be added as decoration elements, in which case they only affect the appearance of a ShapeNode.</summary>
			/// <param name="params.outline" type="String" optional="true">Optional. A string defining the shape's outline.</param>
			/// <param name="params.decoration" type="String" optional="true">Optional. A string defining the shape's decoration.</param>
			/// <param name="params.shapeDecoration" type="String" optional="true">Optional. A string defining additional shape decoration.</param>
			/// <param name="params.id" type="String" optional="true">Optional. The string identifier of the shape.</param>
			/// <param name="params.outlinePen" type="String" optional="true">Optional. A string specifying the stroke of the shape's outline.</param>
			/// <param name="params.outlineBrush" type="String" optional="true">Optional. A string specifying the fill of the shape's outline.</param>
			/// <param name="params.decorationPen" type="String" optional="true">Optional. A string specifying the stroke of the shape's decoration.</param>
			/// <param name="params.decorationBrush" type="String" optional="true">Optional. A string specifying the fill of the shape's decoration.</param>
			/// <param name="params.shapeDecorationPen" type="String" optional="true">Optional. A string specifying the stroke of the additional shape decoration.</param>
			/// <param name="params.shapeDecorationBrush" type="String" optional="true">Optional. A string specifying the fill of the additional shape decoration.</param>
		},
		ShapeLibrary: function (shapes) {
			/// <summary>The ShapeLibrary class represents a collection of shape definitions stored together.</summary>
			/// <param name="shapes" type="Array">A list of MindFusion.Diagramming.Shape objects to initialize the library with.</param>
		},
		ShapeNode: function (parent) {
			/// <summary>ShapeNode instances are diagram nodes that represent geometric shapes.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
		},
		Shapes: function () {
			/// <summary>Provides alternative methods of access to the predefined shapes.</summary>
		},
		ShowAnchors: function() {
			/// <summary>Specifies when anchors points should be displayed.</summary>
		},
		SimplePanel: function () {
			/// <summary>A layout container that arranges its child components on top of each other.</summary>
		},
		SimpleShape: function() {
			/// <summary>Defines the possible values for Shape property of tables and containers.</summary>
		},
		SinglePointerController: function (modifiedItem, adjustmentHandle) {
			/// <summary>Processes mouse or single-touch events targeting a diagram element.</summary>
			/// <param name="modifiedItem" type="MindFusion.Diagramming.DiagramItem">The item that will be modified by this controller.</param>
			/// <param name="adjustmentHandle" type="Object">An object representing the adjustment handle used to modify the item.</param>
		},
		StackPanel: function () {
			/// <summary>A layout container that arranges its child components stacked horizontally or vertically.</summary>
		},
		Style: function (prototype) {
			/// <summary>Represents a set of appearance properties whose values can be inherited from parent objects if not set locally for an item.</summary>
			/// <param name="prototype" type="MindFusion.Diagramming.Style" optional="true">Optional. </param>
		},
		SvgContent: function () {
			/// <summary>SvgContent represents the markup code of an SVG drawing.</summary>
		},
		SvgExporter: function () {
			/// <summary>Creates SVG (Scalable Vector Graphics) drawings from the content of Diagram objects.</summary>
		},
		SvgNode: function (parent) {
			/// <summary>SvgNode instances are diagram nodes that can render SVG drawings.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
		},
		TableConnectionPoint: function () {
			/// <summary>A class that represents a connection between an edge and a node in a graph.</summary>
		},
		TableNode: function (parent) {
			/// <summary>TableNode instances are diagram nodes that can be used to display tabular or list data.</summary>
			/// <param name="parent" type="MindFusion.Diagramming.Diagram" optional="true">Optional. The Diagram from which to obtain default values for the node properties.</param>
		},
		Theme: function () {
			/// <summary>Represents a set of Style objects whose properties are used to render items of a specific type in the current diagram.</summary>
		},
		XmlPersistContext: function (diagram) {
			/// <summary>Contains helper methods for serialization of diagram contents to and from XML documents.</summary>
			/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram that will be serialized or deserialized.</param>
		},
		__namespace: true
	},
	Drawing: {
		Canvas: function (element) {
			/// <summary>The Canvas class represents a wrapper class for the HTML5 Canvas element.</summary>
			/// <param name="element" type="Canvas">The Canvas DOM Element this Canvas is associated with.</param>
		},
		Component: function () {
			/// <summary>Represents components in CompositeNode visual tree.</summary>
		},
		DashStyle: function() {
			/// <summary>Specifies the dash pattern of lines.</summary>
		},
		DashStyle: function() {
			/// <summary>Specifies the dash pattern of lines.</summary>
		},
		Ellipse: function (x, y, width, height) {
			/// <summary>Represents an Ellipse.</summary>
			/// <param name="x" type="Number">The X-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="y" type="Number">The Y-coordinate of the top left corner of the Ellipse.</param>
			/// <param name="width" type="Number">The width of the Ellipse.</param>
			/// <param name="height" type="Number">The height of the Ellipse.</param>
		},
		Font: function () {
			/// <summary>Represents a font.</summary>
		},
		FontStyle: function() {
			/// <summary>Specifies font style attributes.</summary>
		},
		FontStyle: function() {
			/// <summary>Specifies font style attributes.</summary>
		},
		Image: function (bounds) {
			/// <summary>Represents an image.</summary>
			/// <param name="bounds" type="MindFusion.Drawing.Rect">The bounds of the image.</param>
		},
		ImageAlign: function() {
			/// <summary>Specifies the position and alignment of a picture in a node, or that of the background image.</summary>
		},
		Path: function (pathString) {
			/// <summary>Represents a path.</summary>
			/// <param name="pathString" type="String">A string representing the path figures.</param>
		},
		Point: function (x, y) {
			/// <summary>Represents a point.</summary>
			/// <param name="x" type="Number">The X-coordinate of the Point.</param>
			/// <param name="y" type="Number">The Y-coordinate of the Point.</param>
		},
		Rect: function (x, y, width, height) {
			/// <summary>Represents a rectangle.</summary>
			/// <param name="x" type="Number">The X-coordinate of the top left corner of the rectangle.</param>
			/// <param name="y" type="Number">The Y-coordinate of the top left corner of the rectangle.</param>
			/// <param name="width" type="Number">The width of the rectangle.</param>
			/// <param name="height" type="Number">The height of the rectangle.</param>
		},
		Size: function (width, height) {
			/// <summary>Represents the size of 2D object.</summary>
			/// <param name="width" type="Number">Specifies width.</param>
			/// <param name="height" type="Number">Specifies height.</param>
		},
		Text: function (text, bounds) {
			/// <summary>Represents a text container.</summary>
			/// <param name="text" type="String">The text to be displayed in the container.</param>
			/// <param name="bounds" type="MindFusion.Drawing.Rect">The bounds of the container.</param>
		},
		Thickness: function (left, top, right, bottom) {
			/// <summary>Describes the thickness of a rectangular frame.</summary>
			/// <param name="left" type="Number">Specifies the width of the left side of the frame.</param>
			/// <param name="top" type="Number">Specifies the width of the top side of the frame.</param>
			/// <param name="right" type="Number">Specifies the width of the right side of the frame.</param>
			/// <param name="bottom" type="Number">Specifies the width of the bottom side of the frame.</param>
		},
		Vector: function (x, y) {
			/// <summary>Represents displacement in 2D space.</summary>
			/// <param name="x" type="Number">The X-coordinate of the Vector.</param>
			/// <param name="y" type="Number">The Y-coordinate of the Vector.</param>
		},
		__namespace: true
	},
	Gauges: {
		Alignment: function() {
			/// <summary>Indicates an alignment of an object relative to the scale. In the descriptionsbelow 'outbound' refers to an element's outer outline, 'inbound' refers to anelement's inner outline and 'center' refers to en element's center, that is,the middle of the inbound and outbound.</summary>
		},
		ArcArea: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		ArcSegment: function () {
			/// <summary>Represents an elliptical arc between two points.</summary>
		},
		BaseGauge: function (element) {
			/// <summary>Represents the base class of linear and oval gauges.</summary>
			/// <param name="element" type="Object">The Div DOM element this gauge is associated with.</param>
		},
		BaseScale: function (parent) {
			/// <summary>Represents a scale within a gauge control.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		CenterPanel: function () {
			/// <summary>Represents a container which centers its children and makes them with square size.</summary>
		},
		CustomInterval: function () {
			/// <summary>Represents an interval with associated custom values for fill and stroke.</summary>
		},
		DisplayType: function() {
			/// <summary>Specifies a display condition.</summary>
		},
		Ellipse: function () {
			/// <summary>Represents an ellipse visual.</summary>
		},
		Events: function () {
			/// <summary>Defines all events raised by the Gauge component.</summary>
		},
		FunctionType: function() {
			/// <summary>Indicates the type of function that will be used to distribute values along the gauge scale.</summary>
		},
		GeometryFactory: function () {
			/// <summary>A factory class for various geometry objects.</summary>
		},
		LabelRotation: function() {
			/// <summary>Indicates the rotation of a label within a scale.</summary>
		},
		Length: function (value, type) {
			/// <summary>Specifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size.</summary>
			/// <param name="value" type="Number">A number specifying the initial length value.</param>
			/// <param name="type" type="LengthType">A member of the LengthType enumeration specifying the length type.</param>
		},
		LengthType: function() {
			/// <summary>Indicates the type of the units of a Length object.</summary>
		},
		LinearGauge: function (element) {
			/// <summary>Represents a linear gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this LinearGauge is associated with.</param>
		},
		LinearScale: function (parent) {
			/// <summary>Represents a linear scale.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		LineSegment: function () {
			/// <summary>Represents a line between two points.</summary>
		},
		MajorTickSettings: function (parent) {
			/// <summary>Provides settings for the major ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MiddleTickSettings: function (parent) {
			/// <summary>Provides settings for the middle ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MinorTickSettings: function (parent) {
			/// <summary>Provides settings for the minor ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		MouseAction: function() {
			/// <summary>Specifies an action performed with the mouse.</summary>
		},
		MouseInfo: function () {
			/// <summary>Provides mouse information when processing mouse events in the visual element hierarchy.</summary>
		},
		Orientation: function() {
			/// <summary>Specifies the orientation of elements.</summary>
		},
		OvalGauge: function (element) {
			/// <summary>Represents a circular gauge control.</summary>
			/// <param name="element" type="Object">The Div DOM Element this OvalGauge is associated with.</param>
		},
		OvalGaugeStyle: function() {
			/// <summary>Specifies the appearance of an oval gauge.</summary>
		},
		OvalScale: function (parent) {
			/// <summary>Represents a radial scale.</summary>
			/// <param name="parent" type="BaseGauge">The gauge control this scale belongs to.</param>
		},
		PaintEventArgs: function () {
			/// <summary>Provides data for the various custom painting event.</summary>
		},
		PathFigure: function (data) {
			/// <summary>Represents a connected series of geometric segments.</summary>
			/// <param name="data" type="String">The path data string.</param>
		},
		Pointer: function () {
			/// <summary>Represents a needle (or arrow) within a gauge scale.</summary>
		},
		PointerShape: function() {
			/// <summary>Indicates the shape of a pointer.</summary>
		},
		PrepaintEventArgs: function () {
			/// <summary>Provides data for various pre-paint events.</summary>
		},
		Range: function () {
			/// <summary>Represents a range within a gauge scale.</summary>
		},
		RoundRectangle: function () {
			/// <summary>Represents a rounded rectangle.</summary>
		},
		Segment: function () {
			/// <summary>Represents a segment of a PathFigure object.</summary>
		},
		Thickness: function (left, top, right, bottom, isRelative) {
			/// <summary>Describes the thickness on all four sides of a rectangular frame.</summary>
			/// <param name="left" type="Number">The width of the left side of the frame.</param>
			/// <param name="top" type="Number">The width of the top side of the frame.</param>
			/// <param name="right" type="Number">The width of the right side of the frame.</param>
			/// <param name="bottom" type="Number">The width of the bottom side of the frame.</param>
			/// <param name="isRelative" type="Number">A flag indicating whether the thickness properties are expressed as relative or absolute quantities.</param>
		},
		Tick: function (settings) {
			/// <summary>Represents a tick mark within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this tick.</param>
		},
		TickLabel: function (settings) {
			/// <summary>Represents a tick label within a gauge scale.</summary>
			/// <param name="settings" type="TickSettings">The TickSettings object associated with this label.</param>
		},
		TickSettings: function (parent) {
			/// <summary>Provides settings for the ticks and labels in a gauge scale.</summary>
			/// <param name="parent" type="BaseScale">The scale these settings belong to.</param>
		},
		TickShape: function() {
			/// <summary>Indicates the shape of a scale tick.</summary>
		},
		TickType: function() {
			/// <summary>Indicates the type of a scale tick.</summary>
		},
		ValueChangedEventArgs: function () {
			/// <summary>Contains the arguments passed to value changed notification handlers.</summary>
		},
		ValueChangingEventArgs: function () {
			/// <summary>Contains the arguments passed to value changing notification handlers.</summary>
		},
		VisualElement: function () {
			/// <summary>Represents an object with outline and fill, which can render itself to a canvas.</summary>
		},
		VisualElementContainer: function () {
			/// <summary>Represents a visual element which contains other visual elements.</summary>
		},
		__namespace: true
	},
	Graphs: {
		Anchoring: function() {
			/// <summary>Defines values that specify how automatic layout algorithms align links to anchor points.</summary>
		},
		AssistantType: function() {
			/// <summary>Indicates the type of an assistant node in a tree.</summary>
		},
		BorderedTreeLayout: function () {
			/// <summary>Implements algorithms for arranging tree structures.</summary>
		},
		Edge: function (origin, destination) {
			/// <summary>Represents an edge connecting two vertices in a graph.</summary>
			/// <param name="origin" type="MindFusion.Graphs.Vertex">The origin vertex.</param>
			/// <param name="destination" type="MindFusion.Graphs.Vertex">The destination vertex.</param>
		},
		FlowchartLayout: function () {
			/// <summary>FlowchartLayout can be used to arrange flowcharts representing program source code.</summary>
		},
		FractalLayout: function () {
			/// <summary>The FractalLayout tree layout algorithm places child nodes symmetrically around their parent node. Nodes at the lowest level are arranged directly in a circle around their parent. At the upper level, the already arranged nodes form branches that are arranged in a circle around the new parent node. The algorithm is recursively repeated till the highest level is reached.</summary>
		},
		Graph: function () {
			/// <summary>Represents a graph.</summary>
		},
		LayeredLayout: function () {
			/// <summary>Implements a layered graph layout algorithm.</summary>
		},
		LayoutDirection: function() {
			/// <summary>Specifies in what direction to place nodes processed by a layout algorithm.</summary>
		},
		MultipleGraphsPlacement: function() {
			/// <summary>Specifies placement of graph connected components relatively to each other.</summary>
		},
		Orientation: function() {
			/// <summary>Specifies general layout orientation.</summary>
		},
		SpringLayout: function () {
			/// <summary>Implements the Spring-Embedder graph layout algorithm.</summary>
		},
		TreeLayout: function () {
			/// <summary>Implements algorithms for arranging tree structures.</summary>
		},
		TreeLayoutLinkType: function() {
			/// <summary>Specifies the shape of the diagram links after they are laid out.</summary>
		},
		TreeMapLayout: function () {
			/// <summary>Performs tree-map layout on a graph.</summary>
		},
		Vertex: function () {
			/// <summary>Represents a vertex in a graph.</summary>
		},
		__namespace: true
	},
	Mapping: {
		Events: function () {
			/// <summary>Defines all events raised by the MapView component.</summary>
		},
		MapEventArgs: function () {
			/// <summary>Contains the arguments passed to handlers of global map events such as clicked.</summary>
		},
		MapView: function (element) {
			/// <summary>The MapView renders the contents of a map on a web page.</summary>
			/// <param name="element" type="Object">Type: Object&#10;The Div DOM Element this MapView is associated with.</param>
		},
		__namespace: true
	},
	CancelEventArgs: function () {
		/// <summary>Contains the arguments passed to handlers of cancellable events.</summary>
	},
	EventArgs: function () {
		/// <summary>Base events args class.</summary>
	},
	__namespace: true
};

MindFusion.Animations.Animation.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the Animation.</summary>
		/// <param name="eventName" type="String">The name of the event.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	dispose: function() {
		/// <summary>Sys.IDisposable implementation.</summary>
	},
	getAnimationType: function() {
		/// <summary>Gets the type of the animation.</summary>
		/// <returns type="MindFusion.Animations.AnimationType">The animation type.</returns>
	},
	getDuration: function() {
		/// <summary>Gets the duration of the animation function in milliseconds.</summary>
		/// <returns type="Number">The duration of the animation.</returns>
	},
	getEasingType: function() {
		/// <summary>Gets the easing type of the animation.</summary>
		/// <returns type="MindFusion.Animations.EasingType">The easing type.</returns>
	},
	getFromValue: function() {
		/// <summary>Gets the initial value of the property that will be animated.</summary>
		/// <returns type="Object">The initial value.</returns>
	},
	getParam: function() {
		/// <summary>Gets the optional parameter to use in the animation function.</summary>
		/// <returns type="Object">The optional parameter.</returns>
	},
	getProgress: function() {
		/// <summary>Gets the progress of the current animation iteration.</summary>
	},
	getRepeat: function() {
		/// <summary>Gets a value indicating whether to restart the animation after it completes.</summary>
		/// <returns type="Boolean">True to loop the animation, otherwise false.</returns>
	},
	getReverse: function() {
		/// <summary>Gets a value indicating whether to swap the from and to values after the animation completes.</summary>
		/// <returns type="Boolean">True to swap the values, otherwise false.</returns>
	},
	getToValue: function() {
		/// <summary>Gets the target value of the property that will be animated.</summary>
		/// <returns type="Object">The target value.</returns>
	},
	isRunning: function() {
		/// <summary>Indicates whether the animation is currently running.</summary>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the Animation.</summary>
		/// <param name="eventName" type="String">The name of the event.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	setAnimationType: function(value) {
		/// <summary>Sets the type of the animation.</summary>
		/// <param name="value" type="MindFusion.Animations.AnimationType">The animation type. The default value is AnimationType.Linear.</param>
	},
	setDuration: function(value) {
		/// <summary>Sets the duration of the animation function in milliseconds.</summary>
		/// <param name="value" type="Number">The duration of the animation. The default value is 1000.</param>
	},
	setEasingType: function(value) {
		/// <summary>Sets the easing type of the animation.</summary>
		/// <param name="value" type="MindFusion.Animations.EasingType">The easing type. The default value is EasingType.EaseIn.</param>
	},
	setFromValue: function(value) {
		/// <summary>Sets the initial value of the property that will be animated.</summary>
		/// <param name="value" type="Object">The initial value.</param>
	},
	setParam: function(value) {
		/// <summary>Sets the optional parameter to use in the animation function.</summary>
		/// <param name="value" type="Object">The optional parameter. The default value is null.</param>
	},
	setRepeat: function(value) {
		/// <summary>Sets a value indicating whether to restart the animation after it completes.</summary>
		/// <param name="value" type="Boolean">True to loop the animation, otherwise false. The default value is false.</param>
	},
	setReverse: function(value) {
		/// <summary>Sets a value indicating whether to swap the from and to values after the animation completes.</summary>
		/// <param name="value" type="Boolean">True to swap the values, otherwise false. The default value is false.</param>
	},
	setToValue: function(The) {
		/// <summary>Sets the target value of the property that will be animated.</summary>
		/// <param name="The" type="Object">target value.</param>
	},
	start: function() {
		/// <summary>Starts or resumes the animation.</summary>
	},
	stop: function() {
		/// <summary>Stops the animation.</summary>
	}
};
MindFusion.Animations.Animation.__class = true;

MindFusion.Animations.AnimationType.prototype = {
	BackBow: 0,
	Bounce: 1,
	Circular: 2,
	Custom: 3,
	Elastic: 4,
	Exponential: 5,
	Linear: 6,
	Power: 7
};
MindFusion.Animations.AnimationType.__enum = true;

MindFusion.Animations.EasingType.prototype = {
	EaseIn: 0,
	EaseInOut: 1,
	EaseOut: 2,
	EaseOutIn: 3
};
MindFusion.Animations.EasingType.__enum = true;

MindFusion.Animations.Events.prototype = {
};
MindFusion.Animations.Events.__class = true;

MindFusion.Collections.ArrayList.prototype = {
};
MindFusion.Collections.ArrayList.__class = true;

MindFusion.Collections.Dictionary.prototype = {
	contains: function(key) {
		/// <summary>Determines whether the dictionary contains a specific key.</summary>
		/// <param name="key" type="Object">The key to locate in the dictionary.</param>
		/// <returns type="Boolean">true if the dictionary contains an element with the specified key; otherwise, false.</returns>
	},
	forEach: function(func, thisRef) {
		/// <summary>Calls a defined callback function for each entry in the dictionary.</summary>
		/// <param name="func" type="Function">A function that accepts three arguments. forEach calls this function one time for each element in the dictionary.</param>
		/// <param name="thisRef" type="Object" optional="true">Optional. A value passed as the first parameter of func.</param>
	},
	forEachKey: function(func, thisRef) {
		/// <summary>Calls a defined callback function for each key in the dictionary.</summary>
		/// <param name="func" type="Function">A function that accepts two arguments. forEachKey calls this function one time for each key in the dictionary.</param>
		/// <param name="thisRef" type="Object" optional="true">Optional. A value passed as the first parameter of func.</param>
	},
	forEachValue: function(func, thisRef) {
		/// <summary>Calls a defined callback function for each value in the dictionary.</summary>
		/// <param name="func" type="Function">A function that accepts two arguments. forEachValue calls this function one time for each value in the dictionary.</param>
		/// <param name="thisRef" type="Object" optional="true">Optional. A value passed as the first parameter of func.</param>
	},
	get: function(key) {
		/// <summary>Gets the value associated with the specified key within the dictionary.</summary>
		/// <param name="key" type="Object">The key whose value to get.</param>
		/// <returns type="Object">The value associated with the specified key.</returns>
	},
	keys: function() {
		/// <summary>Gets an array with all keys in the dictionary.</summary>
		/// <returns type="Array">An array containing all keys in the dictionary.</returns>
	},
	remove: function(key) {
		/// <summary>Removes the element with the specified key from the dictionary.</summary>
		/// <param name="key" type="Object">The key of the element to remove.</param>
		/// <returns type="Object">The value corresponding to the specified key or null, if the key is not found.</returns>
	},
	set: function(key, value) {
		/// <summary>Associates the specified value with the specified key within the dictionary.</summary>
		/// <param name="key" type="Object">The key to associate the value with.</param>
		/// <param name="value" type="Object">The value to associate.</param>
	}
};
MindFusion.Collections.Dictionary.__class = true;

MindFusion.Collections.Grid.prototype = {
};
MindFusion.Collections.Grid.__class = true;

MindFusion.Collections.ItemEventArgs.prototype = {
	get_item: function() {
		/// <summary>Gets the item related to the event.</summary>
		/// <returns type="Object"></returns>
	}
};
MindFusion.Collections.ItemEventArgs.__class = true;

MindFusion.Collections.ObservableCollection.prototype = {
	add: function(item) {
		/// <summary>Adds the specified element to the collection.</summary>
		/// <param name="item" type="Object">The element to add.</param>
	},
	add_itemAdded: function(handler) {
		/// <summary>Registers the specified function as a handler for the itemAdded event.</summary>
		/// <param name="handler" type="Function">The function to be invoked when items are added to the collection.</param>
	},
	remove_itemAdded: function(handler) {
		/// <summary>Unregisters the specified function as a handler for the itemAdded event.</summary>
		/// <param name="handler" type="Function">The function to unregister.</param>
	}
};
MindFusion.Collections.ObservableCollection.__class = true;

MindFusion.Collections.Queue.prototype = {
	dequeue: function() {
		/// <summary>Removes and returns the object at the beginning of the queue.</summary>
		/// <returns type="Object">The object that is removed from the beginning of the queue.</returns>
	},
	enqueue: function(value) {
		/// <summary>Adds an object to the end of the queue.</summary>
		/// <param name="value" type="Object">The object to add.</param>
	},
	getSize: function() {
		/// <summary>Gets the number of elements in the queue.</summary>
		/// <returns type="Number"></returns>
	}
};
MindFusion.Collections.Queue.__class = true;

MindFusion.Collections.Set.prototype = {
	add: function(key) {
		/// <summary>Adds the specified value to the set.</summary>
		/// <param name="key" type="Object">The element to add to the set.</param>
	},
	contains: function(key) {
		/// <summary>Determines whether the set contains a specific value.</summary>
		/// <param name="key" type="Object">The element to locate in the set.</param>
		/// <returns type="Boolean">true if the set contains the specified element; otherwise, false.</returns>
	},
	forEach: function(func, thisRef) {
		/// <summary>Calls a defined callback function for each entry in the set.</summary>
		/// <param name="func" type="Function">A function that accepts two arguments. forEach calls this function one time for each element in the set.</param>
		/// <param name="thisRef" type="Object" optional="true">Optional. A value passed as the first parameter of func.</param>
	},
	remove: function(key) {
		/// <summary>Removes the specified element from the set.</summary>
		/// <param name="key" type="Object">The element to remove.</param>
	}
};
MindFusion.Collections.Set.__class = true;

MindFusion.Controls.TickPosition.prototype = {
	Both: 0,
	Left: 1,
	None: 2,
	Right: 3
};
MindFusion.Controls.TickPosition.__enum = true;

MindFusion.Controls.ZoomControl.prototype = {
	getActiveColor: function() {
		/// <summary>Gets the color used to render depressed buttons.</summary>
		/// <returns type="String">The color used to render depressed buttons.</returns>
	},
	getBackColor: function() {
		/// <summary>Gets the background color of the control.</summary>
		/// <returns type="String">The color of the control background.</returns>
	},
	getBorderColor: function() {
		/// <summary>Gets the color of ZoomControl elements' borders.</summary>
		/// <returns type="String">Type: String&#10;The color of ZoomControl elements' borders.</returns>
	},
	getCornerRadius: function() {
		/// <summary>Gets the corner radius of rounded child elements.</summary>
		/// <returns type="Number">The corner radius of rounded child elements.</returns>
	},
	getEnabled: function() {
		/// <summary>Checks if mouse events are enabled.</summary>
		/// <returns type="Boolean">true if handling of mouse events is enabled; otherwise, false.</returns>
	},
	getFill: function() {
		/// <summary>Gets the color used to fill the ZoomControl elements.</summary>
		/// <returns type="String">Type: String&#10;The color used to fill the ZoomControl elements.</returns>
	},
	getInnerColor: function() {
		/// <summary>Gets the color of plus, minus and arrow icons.</summary>
		/// <returns type="String">The color of plus, minus and arrow icons.</returns>
	},
	getMaxZoomFactor: function() {
		/// <summary>Gets the maximum zoom level allowed to set through this control.</summary>
		/// <returns type="Number">The maximum zoom level.</returns>
	},
	getMinZoomFactor: function() {
		/// <summary>Gets the minimum zoom level allowed to set through this control.</summary>
		/// <returns type="Number">The minimum zoom level.</returns>
	},
	getPadding: function() {
		/// <summary>Gets the padding of the control's contents.</summary>
		/// <returns type="Number">The padding of the control's contents.</returns>
	},
	getScrollStep: function() {
		/// <summary>Gets the scroll offset added when users click the pan arrows.</summary>
		/// <returns type="Number">The scroll step.</returns>
	},
	getShadowColor: function() {
		/// <summary>Gets the color of the control elements' shadow.</summary>
		/// <returns type="String">The color of the control elements' shadow.</returns>
	},
	getShowLabel: function() {
		/// <summary>Gets a value indicating whether the label that shows the current zoom level should be visible.</summary>
		/// <returns type="Boolean">True if the label is visible, otherwise false.</returns>
	},
	getSnapToZoomStep: function() {
		/// <summary>Gets a value indicating whether the trackbar should snap to ZoomStep values when dragged.</summary>
		/// <returns type="Boolean">True if snapping is enabled, otherwise false.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets the color of the the label that shows the current zoom level.</summary>
		/// <returns type="String">The color of the the label that shows the current zoom level.</returns>
	},
	getTickPosition: function() {
		/// <summary>Gets the current tick position of the trackbar.</summary>
		/// <returns type="MindFusion.Controls.TickPosition">Type: TickPosition&#10;One of the TickPosition enumeration values.</returns>
	},
	getZoomFactor: function() {
		/// <summary>Gets the zoom factor.</summary>
		/// <returns type="Number">The current zoom factor.</returns>
	},
	getZoomStep: function() {
		/// <summary>Gets the amount by which to change zoom level when + and - buttons are clicked.</summary>
		/// <returns type="Number">The zoom step.</returns>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the ZoomControl's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">The id of the hidden field to flush the data to.</param>
	},
	setActiveColor: function(value) {
		/// <summary>Sets the color used to render depressed buttons.</summary>
		/// <param name="value" type="String">The color used to render depressed buttons.</param>
	},
	setBackColor: function(value) {
		/// <summary>Sets the background color of the control.</summary>
		/// <param name="value" type="String">The color of the control background.</param>
	},
	setBorderColor: function(value) {
		/// <summary>Sets the color of ZoomControl elements' borders.</summary>
		/// <param name="value" type="String">Type: String&#10;The color of ZoomControl elements' borders.</param>
	},
	setCornerRadius: function(value) {
		/// <summary>Sets the corner radius of rounded child elements.</summary>
		/// <param name="value" type="Number">The corner radius of rounded child elements.</param>
	},
	setEnabled: function(value) {
		/// <summary>Enables or disables handling of mouse events.</summary>
		/// <param name="value" type="Boolean">true if handling of mouse events is enabled; otherwise, false.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the color used to fill the ZoomControl elements.</summary>
		/// <param name="value" type="String">Type: String&#10;The color used to fill the ZoomControl elements.</param>
	},
	setInnerColor: function(value) {
		/// <summary>Sets the color of plus, minus and arrow icons.</summary>
		/// <param name="value" type="String">The color of plus, minus and arrow icons.</param>
	},
	setMaxZoomFactor: function(value) {
		/// <summary>Sets the maximum zoom level allowed to set through this control.</summary>
		/// <param name="value" type="Number">The maximum zoom level.</param>
	},
	setMinZoomFactor: function(value) {
		/// <summary>Sets the minimum zoom level allowed to set through this control.</summary>
		/// <param name="value" type="Number">The minimum zoom level.</param>
	},
	setPadding: function(value) {
		/// <summary>Sets the padding of the control's contents.</summary>
		/// <param name="value" type="Number">The padding of the control's contents.</param>
	},
	setScrollStep: function(value) {
		/// <summary>Sets the scroll offset added when users click the pan arrows.</summary>
		/// <param name="value" type="Number">The scroll step.</param>
	},
	setShadowColor: function(value) {
		/// <summary>Sets the color of the control elements' shadow.</summary>
		/// <param name="value" type="String">The color of the control elements' shadow.</param>
	},
	setShowLabel: function(value) {
		/// <summary>Sets a value indicating whether the label that shows the current zoom level should be visible.</summary>
		/// <param name="value" type="Boolean">True if the label is visible, otherwise false.</param>
	},
	setSnapToZoomStep: function(value) {
		/// <summary>Sets a value indicating whether the trackbar should snap to ZoomStep values when dragged.</summary>
		/// <param name="value" type="Boolean">True if snapping is enabled, otherwise false.</param>
	},
	setTarget: function(target) {
		/// <summary>Sets the control modified by this ZoomControl.</summary>
		/// <param name="target" type="MindFusion.Dom.Control" optional="true">Optional. Type: Control&#10;The control modified by this ZoomControl.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets the color of the the label that shows the current zoom level.</summary>
		/// <param name="value" type="String">The color of the the label that shows the current zoom level.</param>
	},
	setTickPosition: function(value) {
		/// <summary>Sets the current tick position of the trackbar.</summary>
		/// <param name="value" type="MindFusion.Controls.TickPosition">Type: TickPosition&#10;One of the TickPosition enumeration values.</param>
	},
	setZoomFactor: function(value) {
		/// <summary>Sets the zoom factor.</summary>
		/// <param name="value" type="Number">The zoom factor.</param>
	},
	setZoomStep: function(value) {
		/// <summary>Sets the amount by which to change zoom level when + and - buttons are clicked.</summary>
		/// <param name="value" type="Number">The zoom step.</param>
	}
};
MindFusion.Controls.ZoomControl.__class = true;

MindFusion.Controls.ZoomControl.create = function(element) {
	/// <summary>Creates and initializes a new ZoomControl from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the ZoomControl should be attached to.</param>
	/// <returns type="MindFusion.Controls.ZoomControl">A ZoomControl&#160;instance that represents the newly created zoom control.</returns>
};
MindFusion.Controls.ZoomControl.find = function(id, parent) {
	/// <summary>Returns the specified ZoomControl object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the zoomControl to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the zoomControl to find.</param>
	/// <returns type="MindFusion.Controls.ZoomControl">Type: ZoomControl&#10;A ZoomControl object that contains the zoomControl requested by id, if found; otherwise, null.</returns>
};

MindFusion.Diagramming.Lanes.Cell.prototype = {
	getStyle: function() {
		/// <summary>Gets the style of the cell.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the style of this cell.</returns>
	},
	getText: function() {
		/// <summary>Gets the text of the cell.</summary>
		/// <returns type="String">A string specifying the text of the cell.</returns>
	},
	setStyle: function(value) {
		/// <summary>Sets the style of the cell.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the style of this cell.</param>
	},
	setText: function(value) {
		/// <summary>Sets the text of the cell.</summary>
		/// <param name="value" type="String">A string specifying the text of the cell.</param>
	}
};
MindFusion.Diagramming.Lanes.Cell.__class = true;

MindFusion.Diagramming.Lanes.Grid.prototype = {
	addColumnHeader: function(header, parent, i) {
		/// <summary>Adds the specified header to the grid as a new column header.</summary>
		/// <param name="header" type="MindFusion.Diagramming.Lanes.Header">The Header object to add.</param>
		/// <param name="parent" type="MindFusion.Diagramming.Lanes.Header" optional="true">Optional. The parent header to add to, or null, to add the new header as a root column.</param>
		/// <param name="i" type="Number" optional="true">Optional. The index at which the header was added in the collection.</param>
	},
	addRowHeader: function(header, parent, i) {
		/// <summary>Adds the specified header to the grid as a new row header.</summary>
		/// <param name="header" type="MindFusion.Diagramming.Lanes.Header">The Header object to add.</param>
		/// <param name="parent" type="MindFusion.Diagramming.Lanes.Header" optional="true">Optional. The parent header to add to, or null, to add the new header as a root column.</param>
		/// <param name="i" type="Number" optional="true">Optional. The index at which the header was added in the collection.</param>
	},
	findColumn: function(title) {
		/// <summary>Returns the first column header matching the specified caption.</summary>
		/// <param name="title" type="String">A string containing the header title to look for.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Header">Returns the first column Header that has the specified caption.</returns>
	},
	findRow: function(title) {
		/// <summary>Finds the first row whose header caption matches the specified string.</summary>
		/// <param name="title" type="String">A string containing the header title to look for.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Header">Returns the first row Header that has the specified caption.</returns>
	},
	get: function(column, row) {
		/// <summary>Gets the cell or the cluster of cells corresponding to the specified row and column.</summary>
		/// <param name="column" type="Number, Header">A Header object or a cell index.</param>
		/// <param name="row" type="Number, Header">A Header object or a cell index.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Cell">A Cell object representing the cell or cluster of cells with the specified coordinates.</returns>
	},
	getAllowInplaceEdit: function() {
		/// <summary>Gets a value indicating whether grid cells' text can be in-place edited.</summary>
		/// <returns type="Boolean">true if grid cells' text can be in-place edited, otherwise false.</returns>
	},
	getAllowResizeHeaders: function() {
		/// <summary>Gets a value indicating whether users can resize the headers of the grid interactively.</summary>
		/// <returns type="Boolean">true if grid headers can resized interactively, otherwise false.</returns>
	},
	getCellBounds: function(cell) {
		/// <summary>Returns the bounding rectangle of the specified cell.</summary>
		/// <param name="cell" type="MindFusion.Diagramming.Lanes.Cell">An Cell object representing a cell or a group of cells in the grid.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance representing the rectangle that bounds the specified cell or group of cells.</returns>
	},
	getCellColumn: function(cell) {
		/// <summary>Returns the column index of the specified cell.</summary>
		/// <param name="cell" type="MindFusion.Diagramming.Lanes.Cell">A Cell object representing a single cell in the grid.</param>
		/// <returns type="Number">The index of the column that contains cell; -1 if cell is not found or refers to a group of cells.</returns>
	},
	getCellFromPoint: function(point, cellBounds) {
		/// <summary>Gets the cell located at the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance specifying a point within the grid.</param>
		/// <param name="cellBounds" type="Object">An object that receives the coordinates of the found cell in its cellBounds field.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Cell">A Cell object identifying the found cell, or null if there is no cell located at the specified point.</returns>
	},
	getCellRow: function(cell) {
		/// <summary>Returns the row index of the specified cell.</summary>
		/// <param name="cell" type="MindFusion.Diagramming.Lanes.Cell">A Cell object representing a single cell in the grid.</param>
		/// <returns type="Number">The index of the row that contains cell; -1 if cell is not found or refers to a group of cells.</returns>
	},
	getColumn: function(index) {
		/// <summary>Returns the column header with the specified index from the bottommost column header level.</summary>
		/// <param name="index" type="Number">A number specifying the column index.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Header">A Header object representing the column at the specified index.</returns>
	},
	getColumnCount: function() {
		/// <summary>Gets the number of columns in the grid.</summary>
		/// <returns type="Number">The number of columns.</returns>
	},
	getColumnDepth: function() {
		/// <summary>Gets the number of levels of the column headers.</summary>
		/// <returns type="Number">A number representing the column depth.</returns>
	},
	getColumnHeaderBounds: function() {
		/// <summary>Returns the bounding rectangle of all column headers.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect that bounds all column headers.</returns>
	},
	getColumnHeaders: function() {
		/// <summary>Gets the collection with the topmost column headers.</summary>
		/// <returns type="Array">An array containing the topmost column headers.</returns>
	},
	getColumnHeadersHeights: function() {
		/// <summary>Gets an array with float values specifying the heights of individual column levels.</summary>
		/// <returns type="Array">An array of numbers representing the heights of the various header levels.</returns>
	},
	getColumnIndex: function(column) {
		/// <summary>Returns the 0-based index of the specified column. Only works for bottommost headers. If the specified column is a group header, returns -1.</summary>
		/// <param name="column" type="MindFusion.Diagramming.Lanes.Header">A Header instance that represents a grid column.</param>
		/// <returns type="Number">The index of column, or -1 if the specified header represents a row or a group of child columns.</returns>
	},
	getHeaderBounds: function(header, includeSubHeaders) {
		/// <summary>Returns the bounding rectangle of the specified header.</summary>
		/// <param name="header" type="MindFusion.Diagramming.Lanes.Header">The Header object whose coordinates to return.</param>
		/// <param name="includeSubHeaders" type="Boolean">true to include the coordinates of the child headers in the returned rectangle; otherwise, false.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect that bounds the specified header, and optionally its child headers.</returns>
	},
	getHeaderFromPoint: function(point, headerBounds, scrollPosition) {
		/// <summary>Gets the Header that is located at the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance specifying a point within the grid.</param>
		/// <param name="headerBounds" type="Object">An object that receives the coordinates of the found header in its headerBounds field.</param>
		/// <param name="scrollPosition" type="MindFusion.Drawing.Point">When the headers are hooked this parameter should provide information about the current scroll position in the view.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Header">The found Header object, or null if there is no header located at the specified point.</returns>
	},
	getHeadersOnTop: function() {
		/// <summary>Gets a value indicating whether lane headers appear at the top of the z-order above all other items.</summary>
		/// <returns type="Boolean">true to always display the headers above the items; otherwise, false.</returns>
	},
	getHookHeaders: function() {
		/// <summary>Gets a value indicating whether headers will be anchored to the corresponding side (that is, the column header anchored to the top side and the row header anchored to the left side).</summary>
		/// <returns type="Boolean">true to anchor the headers; otherwise, false.</returns>
	},
	getLeftMargin: function() {
		/// <summary>Gets the offset of the lane grid from the left side of the document bounds.</summary>
		/// <returns type="Number">A number representing the left margin.</returns>
	},
	getMinHeaderSize: function() {
		/// <summary>Gets the minimum size of a header.</summary>
		/// <returns type="Number">A number representing the minimum size for headers in the grid.</returns>
	},
	getRow: function(index) {
		/// <summary>Returns the row header with the specified index from the bottommost row header level.</summary>
		/// <param name="index" type="Number">A number specifying the row index.</param>
		/// <returns type="MindFusion.Diagramming.Lanes.Header">A Header object representing the row at the specified index.</returns>
	},
	getRowCount: function() {
		/// <summary>Gets the number of rows in the grid.</summary>
		/// <returns type="Number">The number of rows.</returns>
	},
	getRowDepth: function() {
		/// <summary>Gets the number of levels of the row headers.</summary>
		/// <returns type="Number">A number representing the row depth.</returns>
	},
	getRowHeaderBounds: function() {
		/// <summary>Returns the bounding rectangle of all row headers.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect that bounds all row headers.</returns>
	},
	getRowHeaders: function() {
		/// <summary>Gets the collection with the topmost row headers.</summary>
		/// <returns type="Array">An array containing the topmost row headers.</returns>
	},
	getRowHeadersWidths: function() {
		/// <summary>Gets an array with float values specifying the widths of individual row levels.</summary>
		/// <returns type="Array">An array of numbers representing the widths of the various header levels.</returns>
	},
	getRowIndex: function(row) {
		/// <summary>Returns the 0-based index of the specified row. Only works for bottommost headers. If the specified row is a group header, returns -1;</summary>
		/// <param name="row" type="MindFusion.Diagramming.Lanes.Header">A Header instance that represents a grid row.</param>
		/// <returns type="Number">The index of row, or -1 if the specified header represents a column or a group of child rows.</returns>
	},
	getStyle: function() {
		/// <summary>Gets the default style of the grid.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.Style">A Style object representing the style of all grid elements, which do not have an explicitly assigned style.</returns>
	},
	getTopLeftAreaStyle: function() {
		/// <summary>Gets the style of the area above all row headers and to the left of all column headers.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the appearance of the top-left area.</returns>
	},
	getTopLeftAreaText: function() {
		/// <summary>Gets the text displayed in the top left area.</summary>
		/// <returns type="String">A string specifying the text.</returns>
	},
	getTopMargin: function() {
		/// <summary>Gets the offset of the lane grid from the top side of the document bounds.</summary>
		/// <returns type="Number">A number representing the top margin.</returns>
	},
	getTotalColumnHeight: function() {
		/// <summary>Gets the total height of all column headers.</summary>
		/// <returns type="Number">A number representing the height.</returns>
	},
	getTotalRowWidth: function() {
		/// <summary>Gets the total width of all row headers.</summary>
		/// <returns type="Number">A number representing the width.</returns>
	},
	removeColumnHeader: function(header) {
		/// <summary>Removes the specified column header and all of its associated cells from the grid.</summary>
		/// <param name="header" type="MindFusion.Diagramming.Lanes.Header">The Header object to remove.</param>
	},
	removeRowHeader: function(header) {
		/// <summary>Removes the specified row header and all of its associated cells from the grid.</summary>
		/// <param name="header" type="MindFusion.Diagramming.Lanes.Header">The Header object to remove.</param>
	},
	setAllowInplaceEdit: function(value) {
		/// <summary>Sets a value indicating whether grid cells' text can be in-place edited.</summary>
		/// <param name="value" type="Boolean">true if grid cells' text can be in-place edited, otherwise false.</param>
	},
	setAllowResizeHeaders: function(value) {
		/// <summary>Sets a value indicating whether users can resize the headers of the grid interactively.</summary>
		/// <param name="value" type="Boolean">true if grid headers can resized interactively, otherwise false.</param>
	},
	setColumnCount: function(value) {
		/// <summary>Gets the number of columns in the grid.</summary>
		/// <param name="value" type="Number">The number of columns.</param>
	},
	setColumnHeadersHeights: function(value) {
		/// <summary>Sets an array with float values specifying the heights of individual column levels.</summary>
		/// <param name="value" type="Array">An array of numbers representing the heights of the various header levels.</param>
	},
	setHeadersOnTop: function(value) {
		/// <summary>Sets a value indicating whether lane headers appear at the top of the z-order above all other items.</summary>
		/// <param name="value" type="Boolean">true to always display the headers above the items; otherwise, false.</param>
	},
	setHookHeaders: function(value) {
		/// <summary>Sets a value indicating whether headers will be anchored to the corresponding side (that is, the column header anchored to the top side and the row header anchored to the left side).</summary>
		/// <param name="value" type="Boolean">true to anchor the headers; otherwise, false.</param>
	},
	setLeftMargin: function(value) {
		/// <summary>Sets the offset of the lane grid from the left side of the document bounds.</summary>
		/// <param name="value" type="Number">A number representing the left margin.</param>
	},
	setMinHeaderSize: function(value) {
		/// <summary>Sets the minimum size of a header.</summary>
		/// <param name="value" type="Number">A number representing the minimum size for headers in the grid.</param>
	},
	setRowCount: function(value) {
		/// <summary>Sets the number of rows in the grid.</summary>
		/// <param name="value" type="Number">The number of rows.</param>
	},
	setRowHeadersWidths: function(value) {
		/// <summary>Sets an array with float values specifying the widths of individual row levels.</summary>
		/// <param name="value" type="Array">An array of numbers representing the widths of the various header levels.</param>
	},
	setTopLeftAreaStyle: function(value) {
		/// <summary>Sets the style of the area above all row headers and to the left of all column headers.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the appearance of the top-left area.</param>
	},
	setTopLeftAreaText: function(value) {
		/// <summary>Sets the text displayed in the top left area.</summary>
		/// <param name="value" type="String">A string specifying the text.</param>
	},
	setTopMargin: function(value) {
		/// <summary>Sets the offset of the lane grid from the top side of the document bounds.</summary>
		/// <param name="value" type="Number">A number representing the top margin.</param>
	}
};
MindFusion.Diagramming.Lanes.Grid.__class = true;

MindFusion.Diagramming.Lanes.Header.prototype = {
	getHeight: function() {
		/// <summary>Gets the height of this header.</summary>
		/// <returns type="Number">A number specifying the header height.</returns>
	},
	getResizeType: function() {
		/// <summary>Gets how a row or a column is resized relatively to its parent.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.ResizeType">One of the ResizeType enumeration values.</returns>
	},
	getRotateTitle: function() {
		/// <summary>Gets a value indicating whether to rotate the header caption at 90 degree.</summary>
		/// <returns type="Boolean">true if the title should be rotated; otherwise, false.</returns>
	},
	getStyle: function() {
		/// <summary>Gets the style of this header.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the appearance of the header.</returns>
	},
	getSubHeaders: function() {
		/// <summary>Gets a collection of the subheaders of this header.</summary>
		/// <returns type="Array">An array containing the subheaders.</returns>
	},
	getTitle: function() {
		/// <summary>Gets the header caption.</summary>
		/// <returns type="String">A string containing the caption text.</returns>
	},
	getWidth: function() {
		/// <summary>Gets the width of this header.</summary>
		/// <returns type="Number">A number specifying the header width.</returns>
	},
	isColumnHeader: function() {
		/// <summary>Gets a value indicating whether this header is a column header.</summary>
		/// <returns type="Boolean">true if the header is a column header; otherwise, false.</returns>
	},
	isRowHeader: function() {
		/// <summary>Gets a value indicating whether this header is a row header.</summary>
		/// <returns type="Boolean">true if the header is a row header; otherwise, false.</returns>
	},
	setHeight: function(value) {
		/// <summary>Sets the height of this header.</summary>
		/// <param name="value" type="Number">A number specifying the header height.</param>
	},
	setResizeType: function(value) {
		/// <summary>Sets how a row or a column is resized relatively to its parent.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Lanes.ResizeType">One of the ResizeType enumeration values.</param>
	},
	setRotateTitle: function(value) {
		/// <summary>Sets a value indicating whether to rotate the header caption at 90 degree.</summary>
		/// <param name="value" type="Boolean">true if the title should be rotated; otherwise, false.</param>
	},
	setStyle: function(value) {
		/// <summary>Gets the style of this header.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Lanes.Style">A Style object that specifies the appearance of the header.</param>
	},
	setTitle: function(value) {
		/// <summary>Sets the header caption.</summary>
		/// <param name="value" type="String">A string containing the caption text.</param>
	},
	setWidth: function(value) {
		/// <summary>Sets the width of this header.</summary>
		/// <param name="value" type="Number">A number specifying the header width.</param>
	}
};
MindFusion.Diagramming.Lanes.Header.__class = true;

MindFusion.Diagramming.Lanes.ResizeType.prototype = {
	Fixed: 0,
	Proportional: 1
};
MindFusion.Diagramming.Lanes.ResizeType.__enum = true;

MindFusion.Diagramming.Lanes.Style.prototype = {
	getBackgroundBrush: function() {
		/// <summary>Gets the background brush of this style.</summary>
		/// <returns type="Object">A brush object specifying the background brush.</returns>
	},
	getBottomBorderPen: function() {
		/// <summary>Gets the color used to stoke the bottom border of elements with this style.</summary>
		/// <returns type="String">A string value identifying the color.</returns>
	},
	getBottomBorderThickness: function() {
		/// <summary>Gets the width of the bottom border of elements with this style.</summary>
		/// <returns type="Number">A number identifying the width.</returns>
	},
	getFontName: function() {
		/// <summary>Gets the name of the font used to draw texts with this style.</summary>
		/// <returns type="String">A string value identifying the font name.</returns>
	},
	getFontSize: function() {
		/// <summary>Gets the size of the font used to draw texts with this style.</summary>
		/// <returns type="Number">A number identifying the font size.</returns>
	},
	getLeftBorderPen: function() {
		/// <summary>Gets the color used to stoke the left border of elements with this style.</summary>
		/// <returns type="String">A string value identifying the color.</returns>
	},
	getLeftBorderThickness: function() {
		/// <summary>Gets the width of the left border of elements with this style.</summary>
		/// <returns type="Number">A number identifying the width.</returns>
	},
	getLineAlignment: function() {
		/// <summary>Gets a value indicating how to vertically align texts drawn with this style.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getRightBorderPen: function() {
		/// <summary>Gets the color used to stoke the right border of elements with this style.</summary>
		/// <returns type="String">A string value identifying the color.</returns>
	},
	getRightBorderThickness: function() {
		/// <summary>Gets the width of the right border of elements with this style.</summary>
		/// <returns type="Number">A number identifying the width.</returns>
	},
	getTextAlignment: function() {
		/// <summary>Gets a value indicating how to horizontally align texts drawn with this style.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets the color used to draw texts with this style.</summary>
		/// <returns type="String">A string value identifying the text color.</returns>
	},
	getTopBorderPen: function() {
		/// <summary>Gets the color used to stoke the top border of elements with this style.</summary>
		/// <returns type="String">A string value identifying the color.</returns>
	},
	getTopBorderThickness: function() {
		/// <summary>Gets the width of the top border of elements with this style.</summary>
		/// <returns type="Number">A number identifying the width.</returns>
	},
	setBackgroundBrush: function(value) {
		/// <summary>Sets the background brush of this style.</summary>
		/// <param name="value" type="Object">A brush object specifying the background brush.</param>
	},
	setBottomBorderPen: function(value) {
		/// <summary>Sets the color used to stoke the bottom border of elements with this style.</summary>
		/// <param name="value" type="String">A string value identifying the color.</param>
	},
	setBottomBorderThickness: function(value) {
		/// <summary>Sets the width of the bottom border of elements with this style.</summary>
		/// <param name="value" type="Number">A number identifying the width.</param>
	},
	setFontName: function(value) {
		/// <summary>Sets the name of the font used to draw texts with this style.</summary>
		/// <param name="value" type="String">A string value identifying the font name.</param>
	},
	setFontSize: function(value) {
		/// <summary>Sets the size of the font used to draw texts with this style.</summary>
		/// <param name="value" type="Number">A number identifying the font size.</param>
	},
	setLeftBorderPen: function(value) {
		/// <summary>Sets the color used to stoke the left border of elements with this style.</summary>
		/// <param name="value" type="String">A string value identifying the color.</param>
	},
	setLeftBorderThickness: function(value) {
		/// <summary>Sets the width of the left border of elements with this style.</summary>
		/// <param name="value" type="Number">A number identifying the width.</param>
	},
	setLineAlignment: function(value) {
		/// <summary>Sets a value indicating how to vertically align texts drawn with this style.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setRightBorderPen: function(value) {
		/// <summary>Sets the color used to stoke the right border of elements with this style.</summary>
		/// <param name="value" type="String">A string value identifying the color.</param>
	},
	setRightBorderThickness: function(value) {
		/// <summary>Sets the width of the right border of elements with this style.</summary>
		/// <param name="value" type="Number">A number identifying the width.</param>
	},
	setTextAlignment: function(value) {
		/// <summary>Sets a value indicating how to horizontally align texts drawn with this style.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets the color used to draw texts with this style.</summary>
		/// <param name="value" type="String">A string value identifying the text color.</param>
	},
	setTopBorderPen: function(value) {
		/// <summary>Sets the color used to stoke the top border of elements with this style.</summary>
		/// <param name="value" type="String">A string value identifying the color.</param>
	},
	setTopBorderThickness: function(value) {
		/// <summary>Sets the width of the top border of elements with this style.</summary>
		/// <param name="value" type="Number">A number identifying the width.</param>
	}
};
MindFusion.Diagramming.Lanes.Style.__class = true;

MindFusion.Diagramming.Action.prototype = {
	Create: 0,
	Modify: 1,
	None: 2,
	Split: 3
};
MindFusion.Diagramming.Action.__enum = true;

MindFusion.Diagramming.AddItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.AddItemCommand.__class = true;

MindFusion.Diagramming.AdjustmentHandles.prototype = {
	All: 0,
	Move: 1,
	None: 2,
	ResizeBottomCenter: 3,
	ResizeBottomLeft: 4,
	ResizeBottomRight: 5,
	ResizeMiddleLeft: 6,
	ResizeMiddleRight: 7,
	ResizeTopCenter: 8,
	ResizeTopLeft: 9,
	ResizeTopRight: 10,
	Rotate: 11
};
MindFusion.Diagramming.AdjustmentHandles.__enum = true;

MindFusion.Diagramming.AeroEffect.prototype = {
	getInnerOutlineColor: function() {
		/// <summary>Gets the color of the inner outline.</summary>
		/// <returns type="String">A string specifying the color name or hexadecimal value. The default value is "white".</returns>
	},
	getOpacity: function() {
		/// <summary>Gets the opacity to apply to the node's background.</summary>
		/// <returns type="Number">A floating point value between 0 and 1.</returns>
	},
	getShadeColor: function() {
		/// <summary>Gets the color of the shade.</summary>
		/// <returns type="String">A string specifying the color name or hexadecimal value. The default value is "black".</returns>
	},
	setInnerOutlineColor: function(value) {
		/// <summary>Sets the color of the inner outline.</summary>
		/// <param name="value" type="String">A string specifying the color name or hexadecimal value. The default value is "white".</param>
	},
	setOpacity: function(value) {
		/// <summary>Sets the opacity to apply to the node's background.</summary>
		/// <param name="value" type="Number">A floating point value between 0 and 1.</param>
	},
	setShadeColor: function(value) {
		/// <summary>Sets the color of the shade.</summary>
		/// <param name="value" type="String">A string specifying the color name or hexadecimal value. The default value is "black".</param>
	}
};
MindFusion.Diagramming.AeroEffect.__class = true;

MindFusion.Diagramming.Alignment.prototype = {
	Center: 0,
	Far: 1,
	Near: 2
};
MindFusion.Diagramming.Alignment.__enum = true;

MindFusion.Diagramming.AnchorPattern.prototype = {
	getId: function() {
		/// <summary>Gets the unique AnchorPattern identifier.</summary>
		/// <returns type="String">The AnchorPattern id.</returns>
	},
	getPoints: function() {
		/// <summary>Gets a collection of the anchor points in this pattern.</summary>
		/// <returns type="Array">An array&#160;containing the anchor points in this pattern.</returns>
	},
	setPoints: function(value) {
		/// <summary>Sets the collection of the anchor points in this pattern to the specified value.</summary>
		/// <param name="value" type="Array">A collection of anchor points.</param>
	}
};
MindFusion.Diagramming.AnchorPattern.__class = true;

MindFusion.Diagramming.AnchorPattern.fromId = function(id) {
	/// <summary>Returns a reference to the anchor pattern with the specified string identifier.</summary>
	/// <param name="id" type="String">A string identifying an AnchorPattern instance.</param>
	/// <returns type="MindFusion.Diagramming.AnchorPattern">The AnchorPattern object whose Id is equal to the id parameter.</returns>
};

MindFusion.Diagramming.AnchorPoint.prototype = {
	getAllowIncoming: function() {
		/// <summary>Gets a value indicating whether incoming links can be connected to this point.</summary>
		/// <returns type="Boolean">true if incoming links can be connected to this point, otherwise, false.</returns>
	},
	getAllowOutgoing: function() {
		/// <summary>Gets a value indicating whether the anchor point accepts outgoing connections.</summary>
		/// <returns type="Boolean">true if the anchor point accepts outgoing connections, otherwise, false.</returns>
	},
	getColor: function() {
		/// <summary>Gets the color of the anchor point mark.</summary>
		/// <returns type="String">The color of the anchor point mark.</returns>
	},
	getColumn: function() {
		/// <summary>Gets the column index of a cell with which the anchor point is associated.</summary>
		/// <returns type="Number">The column index of a cell with which the anchor point is associated.</returns>
	},
	getMarkStyle: function() {
		/// <summary>Gets the appearance of the anchor point mark.</summary>
		/// <returns type="MindFusion.Diagramming.MarkStyle">One of the MarkStyle enumeration values.</returns>
	},
	getSize: function() {
		/// <summary>Gets the size of the anchor point mark.</summary>
		/// <returns type="Number">The size.</returns>
	},
	getTag: function() {
		/// <summary>Gets a user-defined data associated with the anchor point.</summary>
		/// <returns type="Object">The user-defined data associated with the anchor point.</returns>
	},
	getToolTip: function() {
		/// <summary>Gets a tooltip text that should be displayed when the mouse hovers over an anchor point mark.</summary>
	},
	getX: function() {
		/// <summary>Gets the horizontal position of the anchor point expressed as percent of a node's width.</summary>
		/// <returns type="Number">The horizontal position of the anchor point expressed as percent of a node's width.</returns>
	},
	getY: function() {
		/// <summary>Gets the vertical position of the anchor point expressed as percent of a node's height.</summary>
		/// <returns type="Number">The vertical position of the anchor point expressed as percent of a node's height.</returns>
	},
	setAllowIncoming: function(value) {
		/// <summary>Sets a value indicating whether incoming links can be connected to this point.</summary>
		/// <param name="value" type="Boolean">true if incoming links can beconnected to this anchor, otherwise, false.</param>
	},
	setAllowOutgoing: function(value) {
		/// <summary>Sets a value indicating whether the anchor point accepts outgoing connections.</summary>
		/// <param name="value" type="Boolean">true if the anchor point acceptsoutgoing connections, otherwise, false.</param>
	},
	setColor: function(value) {
		/// <summary>Sets the color of the anchor point mark.</summary>
		/// <param name="value" type="String">The color of the anchor point mark.</param>
	},
	setColumn: function(value) {
		/// <summary>Sets the column index of a cell with which the anchor point is associated.</summary>
		/// <param name="value" type="Number">The column index of a cell with which the anchorpoint is associated.</param>
	},
	setMarkStyle: function(value) {
		/// <summary>Sets the appearance of the anchor point mark.</summary>
		/// <param name="value" type="MindFusion.Diagramming.MarkStyle">One of the MarkStyle enumeration values.</param>
	},
	setSize: function(value) {
		/// <summary>Sets the size of the anchor point mark.</summary>
		/// <param name="value" type="Number">The size.</param>
	},
	setTag: function(value) {
		/// <summary>Sets a user-defined data associated with the anchor point.</summary>
		/// <param name="value" type="Object">The user-defined data associated with the anchor point.</param>
	},
	setToolTip: function(value) {
		/// <summary>Sets a tooltip text that should be displayed when the mouse hovers over an anchor point mark.</summary>
		/// <param name="value" type="void"></param>
	},
	setX: function(value) {
		/// <summary>Sets the horizontal position of the anchor point expressed as percent of a node's width.</summary>
		/// <param name="value" type="Number">The horizontal position of the anchor pointexpressed as percent of a node's width.</param>
	},
	setY: function(value) {
		/// <summary>Sets the vertical position of the anchor point expressed as percent of a node's height.</summary>
		/// <param name="value" type="Number">The vertical position of the anchor pointexpressed as percent of a node's height.</param>
	}
};
MindFusion.Diagramming.AnchorPoint.__class = true;

MindFusion.Diagramming.AutoResize.prototype = {
	AllDirections: 0,
	None: 1,
	RightAndDown: 2
};
MindFusion.Diagramming.AutoResize.__enum = true;

MindFusion.Diagramming.Behavior.prototype = {
	Custom: 0,
	DoNothing: 1,
	DrawContainers: 2,
	DrawFreeForms: 3,
	DrawFreeShapes: 4,
	DrawLinks: 5,
	DrawShapes: 6,
	DrawSvgNodes: 7,
	DrawTables: 8,
	LinkContainers: 9,
	LinkFreeForms: 10,
	LinkFreeShapes: 11,
	LinkShapes: 12,
	LinkSvgNodes: 13,
	LinkTables: 14,
	Modify: 15,
	Pan: 16,
	SelectOnly: 17
};
MindFusion.Diagramming.Behavior.__enum = true;

MindFusion.Diagramming.BehaviorBase.prototype = {
	createController: function(state) {
		/// <summary>Creates a controller appropriate for current context and pointer position.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.BehaviorBase.__class = true;

MindFusion.Diagramming.Border.prototype = {
};
MindFusion.Diagramming.Border.__class = true;

MindFusion.Diagramming.Cell.prototype = {
	getBrush: function() {
		/// <summary>Gets the object that specifies how to paint the interior of this cell.</summary>
		/// <returns type="Object">An object specifying the fill of the cell.</returns>
	},
	getColumnSpan: function() {
		/// <summary>Gets the number of columns spanned by this cell.</summary>
		/// <returns type="Number">An integer value specifying the number of spanned columns.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font used to render this cell's text.</summary>
		/// <returns type="MindFusion.Drawing.Font">A Font instance.</returns>
	},
	getImage: function() {
		/// <summary>Gets the image displayed inside this cell.</summary>
		/// <returns type="MindFusion.Drawing.Image">The cell's image.</returns>
	},
	getImageAlign: function() {
		/// <summary>Gets the alignment for the image of this cell.</summary>
		/// <returns type="MindFusion.Diagramming.ImageAlign">One of the ImageAlign enumeration values.</returns>
	},
	getImageLocation: function() {
		/// <summary>Gets the URL of the image displayed inside this cell.</summary>
		/// <returns type="String">A valid URL string that identifies the image to be loaded.</returns>
	},
	getImagePadding: function() {
		/// <summary>Gets the padding distance between cell borders and image.</summary>
		/// <returns type="MindFusion.Drawing.Thickness">A Thickness instance specifying image padding.</returns>
	},
	getLineAlignment: function() {
		/// <summary>Gets how the text should be vertically aligned inside the cell's bounding rectangle.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getRowSpan: function() {
		/// <summary>Gets the number of rows spanned by this cell.</summary>
		/// <returns type="Number">An integer value specifying the number of spanned rows.</returns>
	},
	getTag: function() {
		/// <summary>Gets the tag of the cell.</summary>
		/// <returns type="Object">The tag.</returns>
	},
	getText: function() {
		/// <summary>Gets the string containing the cell's text.</summary>
		/// <returns type="String">The string that contains the text.</returns>
	},
	getTextAlignment: function() {
		/// <summary>Gets how the text should be aligned inside the cell's bounding rectangle.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets a string specifying the color of the text of this cell.</summary>
		/// <returns type="String">A string value identifying the color of the text.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the cell's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the cell's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the cell's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the cell's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setBrush: function(value) {
		/// <summary>Sets an object that specifies how to paint the interior of this cell.</summary>
		/// <param name="value" type="Object" optional="true">Optional. A Brush object specifying the fill of the cell.</param>
	},
	setColumnSpan: function(value) {
		/// <summary>Sets the number of columns spanned by this cell.</summary>
		/// <param name="value" type="Number">An integer value specifying the number of spanned columns.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font used to render this cell's text.</summary>
		/// <param name="value" type="MindFusion.Drawing.Font">A Font instance.</param>
	},
	setImage: function(value) {
		/// <summary>Sets the image displayed inside this cell.</summary>
		/// <param name="value" type="MindFusion.Drawing.Image">The image to set.</param>
	},
	setImageAlign: function(value) {
		/// <summary>Sets the alignment for the image of this cell.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ImageAlign">One of the ImageAlign enumeration values.</param>
	},
	setImageLocation: function(value) {
		/// <summary>Sets the URL of the image displayed inside this cell.</summary>
		/// <param name="value" type="String">A valid URL string that identifies the image to be loaded.</param>
	},
	setImagePadding: function(value) {
		/// <summary>Sets the padding distance between cell borders and image.</summary>
		/// <param name="value" type="MindFusion.Drawing.Thickness">A Thickness instance specifying image padding.</param>
	},
	setLineAlignment: function(value) {
		/// <summary>Sets how the text should be vertically aligned inside the cell's bounding rectangle.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setRowSpan: function(value) {
		/// <summary>Sets the number of rows spanned by this cell.</summary>
		/// <param name="value" type="Number">An integer value specifying the number of spanned rows.</param>
	},
	setTag: function(value) {
		/// <summary>Lets you set any object as a tag for this cell.</summary>
		/// <param name="value" type="Object">The tag of the cell.</param>
	},
	setText: function(value) {
		/// <summary>Sets a string containing the cell's text.</summary>
		/// <param name="value" type="String">The string to set.</param>
	},
	setTextAlignment: function(value) {
		/// <summary>Sets how the text should be aligned inside the cell's bounding rectangle.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets a string specifying the color of the text of this cell.</summary>
		/// <param name="value" type="String">A string value identifying the color of the text.</param>
	}
};
MindFusion.Diagramming.Cell.__class = true;

MindFusion.Diagramming.CellEventArgs.prototype = {
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true to cancel the operation; otherwise, false.</returns>
	},
	getCell: function() {
		/// <summary>Gets the cell related to the event.</summary>
		/// <returns type="MindFusion.Diagramming.Cell">A Cell instance.</returns>
	},
	getContext: function() {
		/// <summary>Gets the canvas rendering context.</summary>
		/// <returns type="CanvasRenderingContext2D">A rendering context used to draw on the Canvas element.</returns>
	},
	getHandled: function() {
		/// <summary>Gets a value indicating whether the event has been handled.</summary>
	},
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="Number">An integer mouse button id.</returns>
	},
	getNewText: function() {
		/// <summary>Gets the text that has just been entered by the user.</summary>
		/// <returns type="String">A string specifying the new text of the cell.</returns>
	},
	getOldText: function() {
		/// <summary>Gets the text that had been displayed in the cell before the user edited it.</summary>
		/// <returns type="String">A string specifying the old text of the cell.</returns>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to cancel the operation; otherwise, false.</param>
	},
	setHandled: function(value) {
		/// <summary>Sets a value indicating whether the event has been handled.</summary>
		/// <param name="value" type="Boolean">true to indicate that the event has been handled; otherwise, false.</param>
	}
};
MindFusion.Diagramming.CellEventArgs.__class = true;

MindFusion.Diagramming.CellFrameStyle.prototype = {
	None: 0,
	Simple: 1,
	System3D: 2
};
MindFusion.Diagramming.CellFrameStyle.__enum = true;

MindFusion.Diagramming.CellValidationEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Cancels the resize of the node's row or column.</summary>
	}
};
MindFusion.Diagramming.CellValidationEventArgs.__class = true;

MindFusion.Diagramming.ChangeItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ChangeItemCommand.__class = true;

MindFusion.Diagramming.ColumnStyle.prototype = {
	AutoWidth: 0,
	FixedWidth: 1
};
MindFusion.Diagramming.ColumnStyle.__enum = true;

MindFusion.Diagramming.Command.prototype = {
	execute: function() {
		/// <summary>Carries out an action that changes the diagram or a diagram item.</summary>
	},
	redo: function() {
		/// <summary>Repeats an action that has been undone.</summary>
	},
	undo: function() {
		/// <summary>Undoes an action, restoring the diagram to the state it was in before carrying out the action.</summary>
	}
};
MindFusion.Diagramming.Command.__class = true;

MindFusion.Diagramming.ComponentEventArgs.prototype = {
	getComponent: function() {
		/// <summary>Gets the component for which the event was raised.</summary>
		/// <returns type="MindFusion.Drawing.Component">An instance of the Component class.</returns>
	}
};
MindFusion.Diagramming.ComponentEventArgs.__class = true;

MindFusion.Diagramming.CompositeCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	getCommands: function() {
		/// <summary>Gets a list containing the child Command objects.</summary>
		/// <returns type="Array">The list of child Command objects.</returns>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.CompositeCommand.__class = true;

MindFusion.Diagramming.CompositeNode.prototype = {
	getComponent: function(name) {
		/// <summary>Returns the component created for the template element with specified name.</summary>
		/// <param name="name" type="String">A string specifying the value of the name attribute in node's template.</param>
		/// <returns type="MindFusion.Drawing.Component">The component created for specified element in the template.</returns>
	},
	loadTemplate: function(jsonTemplate) {
		/// <summary>Load a JSON template defining node's appearance.</summary>
		/// <param name="jsonTemplate" type="Object">A JavaScript object literal containing template of node's component hierarchy.</param>
	}
};
MindFusion.Diagramming.CompositeNode.__class = true;

MindFusion.Diagramming.CompositeNode.classFromTemplate = function(className, jsonTemplate) {
	/// <summary>Generates a node class whose appearance and properties are defined using JSON template.</summary>
	/// <param name="className" type="String">Fully qualified name of the class to generate.</param>
	/// <param name="jsonTemplate" type="Object">A JavaScript object literal containing template of node's component hierarchy.</param>
	/// <returns type="Function">A constructor function that creates instances of the new class.</returns>
};

MindFusion.Diagramming.ConnectionPoint.prototype = {
	addLinkToNode: function() {
		/// <summary>Adds the DiagramLink associated with this connection point to the associated DiagramNode.</summary>
	},
	getEndPoint: function() {
		/// <summary>Calculates the coordinates of this connection point expressed in document coordinates.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point that represents the coordinate.</returns>
	},
	getInitialPoint: function() {
		/// <summary>Returns a Point (usually the center of the bounding rectangle) contained within the associated node.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point contained within the node.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.</summary>
		/// <param name="point1" type="MindFusion.Drawing.Point">The first Point of the segment.</param>
		/// <param name="point2" type="MindFusion.Drawing.Point">The second point of the segment.</param>
		/// <returns type="MindFusion.Drawing.Point">A Point object representing the intersection point.</returns>
	},
	getNearestAnchorPoint: function(point) {
		/// <summary>Returns the nearest anchor Point pertinent to this connection.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNearestBorderPoint: function(point) {
		/// <summary>Returns the nearest point lying on the DiagramNode border.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	getNodeRect: function() {
		/// <summary>Returns the bounding rectangle of the node associated with this connection point.</summary>
		/// <returns type="MindFusion.Drawing.Rect">The bounding rectangle of the node.</returns>
	},
	linkChanges: function(item, point) {
		/// <summary>Checks whether the link would change if attached to the specified node at the specified point.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">A DiagramItem under the mouse cursor.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">A point where the link will be connected.</param>
		/// <returns type="Boolean">true if the link would connect to a different entity if dropped at the specified location; otherwise, false.</returns>
	},
	nodesIntersect: function(connectionPoint) {
		/// <summary>Checks whether the node associated with the current connection point and the node associated with the specified connection point intersect.</summary>
		/// <param name="connectionPoint" type="MindFusion.Diagramming.ConnectionPoint">A ConnectionPoint instance.</param>
		/// <returns type="Boolean">true if the node associated with the current connection point and the node associated with the specified connection point intersect; otherwise, false.</returns>
	},
	removeLinkFromNode: function() {
		/// <summary>Removes the link associated with this connection point from the associated node.</summary>
	},
	saveEndRelative: function(ctrRelative) {
		/// <summary>Updates the coordinates of the connection point represented by this link, relative to the bounding rectangle of the associated node.</summary>
		/// <param name="ctrRelative" type="Boolean" optional="true">Optional. </param>
	}
};
MindFusion.Diagramming.ConnectionPoint.__class = true;

MindFusion.Diagramming.ConnectionStyle.prototype = {
	Node: 0,
	Rows: 1
};
MindFusion.Diagramming.ConnectionStyle.__enum = true;

MindFusion.Diagramming.ContainerNode.prototype = {
	add: function(node) {
		/// <summary>Adds a node to this container.</summary>
		/// <param name="node" type="MindFusion.Diagramming.DiagramNode">The node that should be added to the container.</param>
	},
	arrange: function(layout) {
		/// <summary>Arranges the container's children with the given layout.</summary>
		/// <param name="layout" type="Object">The layout algorithm to apply.</param>
	},
	arrangeAnimated: function(layout, duration, animationType, easingType) {
		/// <summary>Arranges the container's children with the given layout, and animates items moving to their new positions.</summary>
		/// <param name="layout" type="Object">The layout algorithm to apply.</param>
		/// <param name="duration" type="Number" optional="true">Optional. An integer, specifying the duration of the animation in milliseconds.</param>
		/// <param name="animationType" type="MindFusion.Animations.AnimationType" optional="true">Optional. A member of the AnimationType enumeration, specifying the animation type to use.</param>
		/// <param name="easingType" type="MindFusion.Animations.EasingType" optional="true">Optional. A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.</param>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the&#160;ContainerNode contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point to check.</param>
		/// <returns type="Boolean">true if the point is within the bounds of this node; otherwise, false.</returns>
	},
	containsRecursively: function(node) {
		/// <summary>Determines whether the specified node is contained within this container, either directly or inside child containers.</summary>
		/// <param name="node" type="MindFusion.Diagramming.DiagramNode"></param>
		/// <returns type="Boolean">true if the specified node is inside the container, otherwise false.</returns>
	},
	getAllowAddChildren: function() {
		/// <summary>Gets a value indicating whether users are allowed to add child nodes to the container.</summary>
		/// <returns type="Boolean">true if child nodes can be added interactively; otherwise false.</returns>
	},
	getAllowRemoveChildren: function() {
		/// <summary>Gets a value indicating whether users are allowed to remove child nodes from the container.</summary>
		/// <returns type="Boolean">true if child nodes can be removed interactively; otherwise false.</returns>
	},
	getCaptionBackBrush: function() {
		/// <summary>Gets the object that specifies how to fill the caption bar.</summary>
		/// <returns type="Object">An object specifying the fill of the caption bar.</returns>
	},
	getCaptionHeight: function() {
		/// <summary>Gets the height of the container's caption area.</summary>
		/// <returns type="Number">A number specifying the height of the container caption. The default value is 6.</returns>
	},
	getChildren: function() {
		/// <summary>Gets the child nodes of this container.</summary>
		/// <returns type="Array">An array containing the child nodes of this container.</returns>
	},
	getClipChildren: function() {
		/// <summary>Gets a value indicating whether child items should be clipped by container boundaries.</summary>
		/// <returns type="Boolean">true if child items are clipped; otherwise, false.</returns>
	},
	getContentPath: function() {
		/// <summary>Creates a path corresponding to the content area rectangle, excluding caption bar.</summary>
		/// <returns type="MindFusion.Drawing.Path"></returns>
	},
	getEnableStyledText: function() {
		/// <summary>Gets a value indicating whether styled caption text rendering is enabled.</summary>
		/// <returns type="Boolean">true to parse the node's caption text in order to find formatting tags; or false otherwise.</returns>
	},
	getFoldable: function() {
		/// <summary>Gets a value indicating whether users are allowed to fold the container.</summary>
		/// <returns type="Boolean">true if the container can be folded; otherwise false.</returns>
	},
	getFolded: function() {
		/// <summary>Gets a value indicating whether the container is folded.</summary>
		/// <returns type="Boolean">true if the container is folded; otherwise false.</returns>
	},
	getFoldIconSize: function() {
		/// <summary>Gets a value indicating the size of the fold/unfold icon.</summary>
		/// <returns type="Number">The size of the icon.</returns>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">An array&#160;containing the outline points.</returns>
	},
	getShape: function() {
		/// <summary>Gets the shape of the container's outline.</summary>
		/// <returns type="MindFusion.Diagramming.SimpleShape">A member of the SimpleShape enumeration.</returns>
	},
	getUnfoldedSize: function() {
		/// <summary>Gets the size of the container in unfolded state.</summary>
		/// <returns type="Size">The size of the container in unfolded state.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean">true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean">true to exclude locked items from the search.</param>
		/// <returns type="MindFusion.Diagramming.DiagramItem">The item that contains the specified point.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this ContainerNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>DiagramItem.onRemove override.</summary>
	},
	remove: function(node) {
		/// <summary>Removes a node from this container.</summary>
		/// <param name="node" type="MindFusion.Diagramming.DiagramNode">The node that should be removed from the container.</param>
	},
	resizeToFitChildren: function(allowShrink, margin) {
		/// <summary>Resizes the container making it big enough to contain its child nodes.</summary>
		/// <param name="allowShrink" type="Boolean"></param>
		/// <param name="margin" type="Number"></param>
	},
	resizeToFitText: function(fit, fixPosition, foldBtnWidth) {
		/// <summary>Makes the container node caption big enough to display its text without clipping.</summary>
		/// <param name="fit" type="MindFusion.Diagramming.FitSize">One of the FitSize enumeration values.</param>
		/// <param name="fixPosition" type="Boolean" optional="true">Optional. Fix the position of the container to the original location. The default is false.</param>
		/// <param name="foldBtnWidth" type="Number" optional="true">Optional. The width of the folder button, if it's not provided, the value from FoldIconSize is used.</param>
		/// <returns type="Boolean">true if the caption is resized successfully; otherwise, false.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setAllowAddChildren: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to add child nodes to the container.</summary>
		/// <param name="value" type="Boolean">true if child nodes can be added interactively; otherwise false.</param>
	},
	setAllowRemoveChildren: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to remove child nodes from the container.</summary>
		/// <param name="value" type="Boolean">true if child nodes can be removed interactively; otherwise false.</param>
	},
	setCaptionBackBrush: function(value) {
		/// <summary>Sets an object that specifies how to fill the caption bar.</summary>
		/// <param name="value" type="Object">A Brush object specifying the fill of the caption bar.</param>
	},
	setCaptionHeight: function(value) {
		/// <summary>Sets the height of the container's caption area.</summary>
		/// <param name="value" type="Number">A number specifying the height of the container caption. The default value is 6.</param>
	},
	setClipChildren: function(value) {
		/// <summary>Sets a value indicating whether child items should be clipped by container boundaries.</summary>
		/// <param name="value" type="Boolean">true to clip child items; otherwise, false. The default value is true.</param>
	},
	setEnableStyledText: function(value) {
		/// <summary>Sets a value indicating whether styled caption text rendering is enabled.</summary>
		/// <param name="value" type="Boolean">true to parse the node's caption text in order to find formatting tags; or false otherwise.</param>
	},
	setFoldable: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to fold the container.</summary>
		/// <param name="value" type="Boolean">true if the container can be folded; otherwise false.</param>
	},
	setFolded: function(value) {
		/// <summary>Folds or unfolds the container.</summary>
		/// <param name="value" type="Boolean">true to fold the container; false to unfold it.</param>
	},
	setFoldIconSize: function(value) {
		/// <summary>Sets a value indicating the size of the fold/unfold icon.</summary>
		/// <param name="value" type="Number">The size of the icon.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the shape of the container's outline.</summary>
		/// <param name="value" type="MindFusion.Diagramming.SimpleShape">A member of the SimpleShape enumeration.</param>
	},
	visitNodes: function(point, visitNode, relatedItem) {
		/// <summary>Visits the diagram nodes in reverse Z order.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point"></param>
		/// <param name="visitNode" type="Function"></param>
		/// <param name="relatedItem" type="MindFusion.Diagramming.DiagramItem"></param>
	},
};
MindFusion.Diagramming.ContainerNode.__class = true;

MindFusion.Diagramming.ContainerNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new ContainerNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.CreateLinkController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.CreateLinkController.__class = true;

MindFusion.Diagramming.CreateNodeController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.CreateNodeController.__class = true;

MindFusion.Diagramming.CreateSelectionController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>SinglePointerController.drawInteraction override.</summary>
		/// <param name="context" type="DrawingContext2D">The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	}
};
MindFusion.Diagramming.CreateSelectionController.__class = true;

MindFusion.Diagramming.DelKeyAction.prototype = {
	DeleteActiveItem: 0,
	DeleteSelectedItems: 1,
	None: 2
};
MindFusion.Diagramming.DelKeyAction.__enum = true;

MindFusion.Diagramming.Diagram.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the Diagram.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	addItem: function(item) {
		/// <summary>Adds an item to the Diagram.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The item to add.</param>
	},
	alignPointToGrid: function(point) {
		/// <summary>Returns a point of the alignment grid nearest to the one passed as an argument.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="MindFusion.Drawing.Point">A point from the alignment grid.</returns>
	},
	arrange: function(layout) {
		/// <summary>Arranges the diagram with the given layout.</summary>
		/// <param name="layout" type="Object">The layout algorithm to apply.</param>
	},
	arrangeAnimated: function(layout, duration, animationType, easingType) {
		/// <summary>Arranges the diagram using the given layout, and animates items moving to their new positions.</summary>
		/// <param name="layout" type="Object">The layout algorithm to apply.</param>
		/// <param name="duration" type="Number" optional="true">Optional. An integer, specifying the duration of the animation in milliseconds.</param>
		/// <param name="animationType" type="MindFusion.Animations.AnimationType" optional="true">Optional. A member of the AnimationType enumeration, specifying the animation type to use.</param>
		/// <param name="easingType" type="MindFusion.Animations.EasingType" optional="true">Optional. A member of the EasingType enumeration, specifying the type of easing function to apply to the animation.</param>
	},
	arrangeLinkLabels: function() {
		/// <summary>Rearranges link labels whose AutoArrange property is enabled.</summary>
	},
	beginEdit: function() {
	},
	cancelCompositeOperation: function() {
		/// <summary>Stops recording undo/redo commands into a CompositeCommand and discards the records created so far.</summary>
	},
	clearAll: function() {
		/// <summary>Removes all items from the diagram.</summary>
	},
	commitCompositeOperation: function() {
		/// <summary>Stops recording undo/redo commands into a CompositeCommand and saves the composite in the history queue.</summary>
	},
	copyToClipboard: function(systemClipboard) {
		/// <summary>Copies the current selection of items to the clipboard.</summary>
		/// <param name="systemClipboard" type="Boolean" optional="true">Optional. true to copy to the system clipboard, or false otherwise. The default value is false.</param>
	},
	cutToClipboard: function(systemClipboard) {
		/// <summary>Cuts the currently selected items to the clipboard.</summary>
		/// <param name="systemClipboard" type="Boolean" optional="true">Optional. true to copy to the system clipboard, or false otherwise. The default value is false.</param>
	},
	dispose: function() {
		/// <summary>Overrides Component.Dispose</summary>
	},
	endEdit: function(accept) {
		/// <summary>Exits the in-place editing mode and either accepts or rejects the changes made to the item's text.</summary>
		/// <param name="accept" type="Boolean" optional="true">Optional. true to accept changes made to text; false to reject them.</param>
	},
	executeCommand: function(command) {
		/// <summary>Executes the specified command on this diagram.</summary>
		/// <param name="command" type="MindFusion.Diagramming.Command">The Command to execute.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the diagram from a JSON string.</summary>
		/// <param name="json" type="String">A string created by the toJson method.</param>
	},
	fromXmlDocument: function(document) {
		/// <summary>Loads diagram contents from specified XML Document.</summary>
		/// <param name="document" type="Document">A DOM Document object containing XML-serialized diagram contents.</param>
	},
	getActiveItem: function() {
		/// <summary>Gets the active diagram element.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramItem">The active item; null if no item is active.</returns>
	},
	getAdjustmentHandlesSize: function() {
		/// <summary>Gets the size of adjustment handles that appear around selected items.</summary>
		/// <returns type="Number">A number specifying the size of selection handles. The default value is 2.</returns>
	},
	getAlignToGrid: function() {
		/// <summary>Gets a value indicating whether the diagram items should be aligned to a grid.</summary>
		/// <returns type="Boolean">true if the diagram items should be aligned to a grid; otherwise, false.</returns>
	},
	getAllowInplaceEdit: function() {
		/// <summary>Gets a value indicating whether in-place editing of the text of objects is enabled.</summary>
		/// <returns type="Boolean">true if in-place editing of the text of objects is enabled; otherwise, false.</returns>
	},
	getAllowMultipleResize: function() {
		/// <summary>Gets a value indicating whether multiple selected nodes can be resized simultaneously.</summary>
		/// <returns type="Boolean">true to let the user resize multiple selected nodes; otherwise, false.</returns>
	},
	getAllowSelfLoops: function() {
		/// <summary>Gets a value indicating whether users are allowed to draw reflexive links.</summary>
		/// <returns type="Boolean">true if reflexive links are allowed; otherwise, false.</returns>
	},
	getAllowUnconnectedLinks: function() {
		/// <summary>Gets a value indicating whether users are allowed to draw links that are not connected to any node.</summary>
		/// <returns type="Boolean">true to let the user draw unconnected links; otherwise, false.</returns>
	},
	getAutoArrangeAvoidContainers: function() {
		/// <summary>Gets a value indicating whether auto-arranged link labels should avoid containers.</summary>
		/// <returns type="Boolean">true to avoid containers, or false otherwise. The default value is true.</returns>
	},
	getAutoArrangeAvoidSegments: function() {
		/// <summary>Gets a value indicating whether auto-arranged link labels should avoid link segments.</summary>
		/// <returns type="Boolean">true to avoid link segments, or false otherwise. The default value is true.</returns>
	},
	getAutoCloseDistance: function() {
		/// <summary>Gets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically.</summary>
		/// <returns type="Number">A floating-point number.</returns>
	},
	getAutoResize: function() {
		/// <summary>Gets a value indicating whether the document area should be resized automatically so it fits the diagram contents.</summary>
		/// <returns type="MindFusion.Diagramming.AutoResize">A member of the AutoResize enumeration indicating the auto resize method.</returns>
	},
	getAutoScroll: function() {
		/// <summary>Gets a value indicating whether auto scrolling of the document area is enabled.</summary>
		/// <returns type="Boolean">true if auto scrolling is enabled, otherwise false.</returns>
	},
	getAutoScrollAmount: function() {
		/// <summary>Gets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</summary>
		/// <returns type="Number">A number specifying the amount by which to auto-scroll.</returns>
	},
	getBackBrush: function() {
		/// <summary>Gets the object used for painting the diagram background.</summary>
		/// <returns type="Object">The object used for painting the background.</returns>
	},
	getBackgroundImageAlign: function() {
		/// <summary>Gets a value indicating how the background image is positioned.</summary>
		/// <returns type="MindFusion.Drawing.ImageAlign">One of the ImageAlign enumeration values. The default is ImageAlign.TopLeft.</returns>
	},
	getBackgroundImageContent: function() {
		/// <summary>Gets the Base64-encoded data of the background image.</summary>
		/// <returns type="String">The Base64-encoded data for the background image to be loaded.</returns>
	},
	getBackgroundImageUrl: function() {
		/// <summary>Gets the URL of the image displayed as background of this diagram.</summary>
		/// <returns type="String">A string specifying the location of the image file.</returns>
	},
	getBehavior: function() {
		/// <summary>Gets a value indicating how the control responds to user actions.</summary>
		/// <returns type="MindFusion.Diagramming.Behavior">A member of the Behavior enumeration.</returns>
	},
	getContentBounds: function() {
		/// <summary>Returns the smallest rectangle that bounds all diagram items.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance specifying the smallest rectangle that bounds all diagram items.</returns>
	},
	getCrossingRadius: function() {
		/// <summary>Gets the radius length of decorations displayed at link intersection points.</summary>
		/// <returns type="Number">A number specifying the radius of the arcs drawn at link intersection points. The default value is 1.5.</returns>
	},
	getCustomLinkType: function() {
		/// <summary>Gets the type of a MindFusion.Diagramming.DiagramLink derived class whose instance should be created when a user starts drawing.</summary>
		/// <returns type="Object">The type.</returns>
	},
	getCustomNodeType: function() {
		/// <summary>Gets the type of a MindFusion.Diagramming.DiagramNode derived class whose instance should be created when a user starts drawing.</summary>
		/// <returns type="Object">The type.</returns>
	},
	getDefaultShape: function() {
		/// <summary>Gets the default Shape of shapeNode-s.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">A ShapeNode object.</returns>
	},
	getDelKeyAction: function() {
		/// <summary>Gets a value that specifies what action should be performed when the user hits the Del key.</summary>
		/// <returns type="MindFusion.Diagramming.DelKeyAction">A DelKeyAction Enumeration value.</returns>
	},
	getDirty: function() {
		/// <summary>Gets a value indicating whether the diagram has changed since loading it.</summary>
		/// <returns type="Boolean">A boolean value that indicates whether the diagram has changed.</returns>
	},
	getDynamicLinks: function() {
		/// <summary>Gets the default value for the Dynamic property of new links.</summary>
		/// <returns type="Boolean">true if dynamic links are enabled; otherwise, false. The default is false.</returns>
	},
	getEnabled: function() {
		/// <summary>Checks if mouse events are enabled.</summary>
		/// <returns type="Boolean">true if handling of mouse events is enabled; otherwise, false.</returns>
	},
	getExpandOnIncoming: function() {
		/// <summary>Gets a value indicating the link direction in which tree branches are expanded.</summary>
		/// <returns type="Boolean">true if trees are expanded in the direction of incoming links; otherwise, false.</returns>
	},
	getFactory: function() {
		/// <summary>Gets a Factory instance that lets you add programmatically new items to the diagram.</summary>
		/// <returns type="MindFusion.Diagramming.Factory">A Factory instance.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font for text written on diagram items.</summary>
		/// <returns type="MindFusion.Drawing.Font">The font used for drawing text on DiagramItem-s.</returns>
	},
	getFreeFormAttractDistance: function() {
		/// <summary>Gets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too.</summary>
		/// <returns type="Number">A floating-point number.</returns>
	},
	getFreeFormTargets: function() {
		/// <summary>Gets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes.</summary>
		/// <returns type="Array">An array of shape identifiers or Shape instances.</returns>
	},
	getGridColor: function() {
		/// <summary>Gets the color of the grid points.</summary>
		/// <returns type="String">The color of the grid points.</returns>
	},
	getGridOffsetX: function() {
		/// <summary>Gets the horizontal offset of the first point of the alignment grid.</summary>
		/// <returns type="Number">The horizontal offset of the first point of the alignment grid.</returns>
	},
	getGridOffsetY: function() {
		/// <summary>Gets the vertical offset of the first point of the alignment grid.</summary>
		/// <returns type="Number">The vertical offset of the first point of the alignment grid.</returns>
	},
	getGridPointSize: function() {
		/// <summary>Gets the size of shapes used to represent grid points.</summary>
		/// <returns type="Number">The size of shapes used to represent grid points.</returns>
	},
	getGridSizeX: function() {
		/// <summary>Gets the horizontal distance between adjacent grid points.</summary>
		/// <returns type="Number">The horizontal distance between adjacent grid points.</returns>
	},
	getGridSizeY: function() {
		/// <summary>Gets the vertical distance between adjacent grid points.</summary>
		/// <returns type="Number">The vertical distance between adjacent grid points.</returns>
	},
	getGridStyle: function() {
		/// <summary>Gets the visual style of the alignment grid.</summary>
		/// <returns type="MindFusion.Diagramming.GridStyle">One of the GridStyle enumeration values.</returns>
	},
	getItemAt: function(point, onlyInteractive) {
		/// <summary>Finds and returns the topmost DiagramItem found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance identifying a diagram location.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. true to return only items that can be interacted with; otherwise, false.</param>
		/// <returns type="MindFusion.Diagramming.DiagramItem">The topmost DiagramItem found at the given location or null if no DiagramItem has been found.</returns>
	},
	getItems: function() {
		/// <summary>Returns the array of all items in this diagram.</summary>
		/// <returns type="Array">Array of all DiagramItem instances in the diagram.</returns>
	},
	getItemsAt: function(point) {
		/// <summary>Finds and returns an array of the diagram items found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">instance identifying a location in the diagram.</param>
		/// <returns type="Array">Array of the DiagramItem-s found at the given location or null if no items have been found. The items are arranged according to their Z-index.</returns>
	},
	getLaneGrid: function() {
		/// <summary>Gets the lane grid.</summary>
		/// <returns type="MindFusion.Diagramming.Lanes.Grid">An instance of the Grid class.</returns>
	},
	getLeftButtonActions: function() {
		/// <summary>Gets a combination of flags that specify what actions can be performed via the left mouse button.</summary>
		/// <returns type="MindFusion.Diagramming.MouseButtonActions">A member of the MouseButtonActions enumeration.</returns>
	},
	getLinkAt: function(point) {
		/// <summary>Finds and returns the topmost DiagramLink found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance identifying a diagram location.</param>
		/// <returns type="MindFusion.Diagramming.DiagramLink">The topmost DiagramLink found at the given location or null if no DiagramLink has been found.</returns>
	},
	getLinkBaseShape: function() {
		/// <summary>Gets the shape displayed at the base of new links.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape.</returns>
	},
	getLinkBaseShapeSize: function() {
		/// <summary>Gets the default size of the base of new links.</summary>
		/// <returns type="Number">A number that specifies the size. The default is 5.</returns>
	},
	getLinkBrush: function() {
		/// <summary>Gets the default fill of links.</summary>
		/// <returns type="Object">An object identifying the fill of links.</returns>
	},
	getLinkCrossings: function() {
		/// <summary>Gets a value indicating how to render the intersection points where two links cross each other.</summary>
		/// <returns type="MindFusion.Diagramming.LinkCrossings">A member of the LinkCrossings enumeration. The default value is Straight.</returns>
	},
	getLinkHeadShape: function() {
		/// <summary>Gets the shape displayed as head of new links.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape. The default is Arrow.</returns>
	},
	getLinkHeadShapeSize: function() {
		/// <summary>Gets the default size of arrowheads.</summary>
		/// <returns type="Number">A number that measures the size. The default is 5.</returns>
	},
	getLinkHitDistance: function() {
		/// <summary>Gets a value specifying how far from a link a click is still considered a hit.</summary>
		/// <returns type="Number">A value specifying how far from a link a click is still considered a hit.</returns>
	},
	getLinkPen: function() {
		/// <summary>Gets the default stroke of links.</summary>
		/// <returns type="String">A string value specifying the stroke of links.</returns>
	},
	getLinkRouter: function() {
		/// <summary>Gets the object used to find paths for auto-routed links when diagram nodes are added or their positions change.</summary>
		/// <returns type="MindFusion.Diagramming.Router">An instance of Router-derived class.</returns>
	},
	getLinks: function() {
		/// <summary>Returns the array of all links in this diagram.</summary>
		/// <returns type="Array">Array of all DiagramLink instances in the diagram.</returns>
	},
	getLinksAt: function(point) {
		/// <summary>Finds and returns an array of the diagram DiagramLinks found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">instance identifying a diagram location.</param>
		/// <returns type="Array">Array of the DiagramLinks found at the given location or null if no DiagramLinks have been found. The links are arranged according to their Z-index.</returns>
	},
	getLinkSegments: function() {
		/// <summary>Gets the default number of arrow segments.</summary>
		/// <returns type="Number">The default number of arrow segments.</returns>
	},
	getLinkShape: function() {
		/// <summary>Gets the initial shape assigned to new links.</summary>
		/// <returns type="MindFusion.Diagramming.LinkShape">One of the LinkShape enumeration values.</returns>
	},
	getLinkTextStyle: function() {
		/// <summary>Gets the default placement and orientation for links' text.</summary>
		/// <returns type="MindFusion.Diagramming.LinkTextStyle">A member of the LinkTextStyle enumeration.</returns>
	},
	getMagnifierEnabled: function() {
		/// <summary>Gets a value indicating whether the magnifier tool is currently enabled.</summary>
		/// <returns type="Boolean">true if the magnifier is enabled, otherwise false.</returns>
	},
	getMagnifierFactor: function() {
		/// <summary>Gets the zoom factor of the magnifier tool.</summary>
		/// <returns type="Number">A number specifying the zoom factor of the magnifier tool.</returns>
	},
	getMagnifierFrameColor: function() {
		/// <summary>Gets the color of the magnifier tool's frame.</summary>
		/// <returns type="String">The color of the magnifier tool's frame.</returns>
	},
	getMagnifierFrameThickness: function() {
		/// <summary>Gets the thickness of the magnifier frame.</summary>
		/// <returns type="Number">A number specifying the thickness of the magnifier frame.</returns>
	},
	getMagnifierHeight: function() {
		/// <summary>Gets the height of the magnifier tool.</summary>
		/// <returns type="Number">A number specifying the height of the magnifier tool.</returns>
	},
	getMagnifierSecondaryFrameColor: function() {
		/// <summary>Gets the color of the magnifier tool's secondary frame.</summary>
		/// <returns type="String">The color of the magnifier tool's secondary frame.</returns>
	},
	getMagnifierShading: function() {
		/// <summary>Gets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading.</summary>
		/// <returns type="Boolean">true if the shading is enabled, otherwise false.</returns>
	},
	getMagnifierShape: function() {
		/// <summary>Gets a reference to the geometric shape definition of the magnifier tool.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class whose outline definition&#160;should be&#160;used as magnifier's shape.</returns>
	},
	getMagnifierWidth: function() {
		/// <summary>Gets the width of the magnifier tool.</summary>
		/// <returns type="Number">A number specifying the width of the magnifier tool.</returns>
	},
	getMiddleButtonActions: function() {
		/// <summary>Gets a combination of flags that specify what actions can be performed via the middle mouse button.</summary>
		/// <returns type="MindFusion.Diagramming.MouseButtonActions">A member of the MouseButtonActions enumeration.</returns>
	},
	getModificationStart: function() {
		/// <summary>Gets how users can start modifying diagram items.</summary>
		/// <returns type="MindFusion.Diagramming.ModificationStart">A member of the ModificationStart enumeration. The default is SelectedOnly.</returns>
	},
	getModifierKeyActions: function() {
		/// <summary>Gets an object, which allows changing the function of keyboard modifier keys such as Ctrl and Alt.</summary>
		/// <returns type="MindFusion.Diagramming.ModifierKeyActions">An instance of the ModifierKeyActions class.</returns>
	},
	getNearestNode: function(point, maxDistance, ignored) {
		/// <summary>Returns the node nearest to the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A point in the diagram.</param>
		/// <param name="maxDistance" type="Number">The maximum distance from the point at which to look for nodes.</param>
		/// <param name="ignored" type="MindFusion.Diagramming.DiagramNode">A node that should be ignored.</param>
		/// <returns type="MindFusion.Diagramming.DiagramNode">The DiagramNode nearest to the specified point.</returns>
	},
	getNodeAt: function(point, onlyInteractive) {
		/// <summary>Finds and returns the topmost DiagramNode found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance identifying a diagram location.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. true to return only items that can be interacted with; otherwise, false.</param>
		/// <returns type="MindFusion.Diagramming.DiagramNode">The topmost DiagramNode found at the given location or null if no DiagramNode has been found.</returns>
	},
	getNodeEffects: function() {
		/// <summary>Gets an array with all effects applied to the nodes of this diagram.</summary>
		/// <returns type="Array">An array with all node effects.</returns>
	},
	getNodes: function() {
		/// <summary>Returns the array of all nodes in this diagram.</summary>
		/// <returns type="Array">Array of all DiagramNode instances in the diagram.</returns>
	},
	getNodesAt: function(point) {
		/// <summary>Finds and returns an array of the DiagramNodes found at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">instance identifying a diagram location.</param>
		/// <returns type="Array">Array of the DiagramNodes found at the given location or null if no DiagramNodes have been found. The nodes are arranged according to their Z-index.</returns>
	},
	getNodesExpandable: function() {
		/// <summary>Gets a value indicating whether newly created nodes can be expanded.</summary>
		/// <returns type="Boolean">A boolean value assigned to the Expandable property of new nodes.</returns>
	},
	getRightButtonActions: function() {
		/// <summary>Gets a combination of flags that specify what actions can be performed via the right mouse button.</summary>
		/// <returns type="MindFusion.Diagramming.MouseButtonActions">A member of the MouseButtonActions enumeration.</returns>
	},
	getRoundedLinks: function() {
		/// <summary>Gets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded.</summary>
		/// <returns type="Boolean">true to&#160;draw rounded segment joints; otherwise, false. The default value is false.</returns>
	},
	getRoundedLinksRadius: function() {
		/// <summary>Gets the radius of joint arcs of rounded links' segments.</summary>
		/// <returns type="Number">A number specifying the radius length. The default value is 2.</returns>
	},
	getRouteLinks: function() {
		/// <summary>Gets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes.</summary>
		/// <returns type="Boolean">true to route links; otherwise, false. The default is false.</returns>
	},
	getRouteMargin: function() {
		/// <summary>Gets the minimal distance between nodes and auto-routed links.</summary>
		/// <returns type="Number">A value specifying distance in the current MeasureUnit; default is 8.</returns>
	},
	getScrollX: function() {
		/// <summary>Gets the diagram's horizontal scroll position.</summary>
		/// <returns type="Number">A number specifying the horizontal scroll position in the current unit of measure.</returns>
	},
	getScrollY: function() {
		/// <summary>Gets the diagram's vertical scroll position.</summary>
		/// <returns type="Number">A number specifying the vertical scroll position in the current unit of measure.</returns>
	},
	getScrollZoneSize: function() {
		/// <summary>Gets the size of the auto scroll zone near the edges of the control.</summary>
		/// <returns type="Number">An integer specifying the size in pixels of the area near the view edges where auto-scrolling is triggered.</returns>
	},
	getSelection: function() {
		/// <summary>Gets a Selection instance that represents the selection of items in this diagram.</summary>
		/// <returns type="MindFusion.Diagramming.Selection">An instance of the Selection class representing the current selection.</returns>
	},
	getShadowOffsetX: function() {
		/// <summary>Gets the horizontal offset of objects' shadows.</summary>
		/// <returns type="Number">A number specifying the shadow's horizontal offset.</returns>
	},
	getShadowOffsetY: function() {
		/// <summary>Gets the vertical offset of objects' shadows.</summary>
		/// <returns type="Number">A number specifying the shadow's vertical offset.</returns>
	},
	getShadowsStyle: function() {
		/// <summary>Gets the style for rendering shadows.</summary>
		/// <returns type="MindFusion.Diagramming.ShadowsStyle">A member of the ShadowsStyle enumeration. The default value is ShadowsStyle.OneLevel.</returns>
	},
	getShapeBrush: function() {
		/// <summary>Gets the default fill of shape nodes.</summary>
		/// <returns type="Object">An object identifying the fill of shape nodes.</returns>
	},
	getShapeLibraryLocation: function() {
		/// <summary>Gets the location of a shape library file containing custom shape definitions.It can be set to a full URL of the file, or a relative file path.</summary>
		/// <returns type="String">The location of a shape library file containing custom shape definitions.</returns>
	},
	getShapePen: function() {
		/// <summary>Gets the default stroke of shape node-s.</summary>
		/// <returns type="String">A string value specifying the stroke of ShapeNode-s.</returns>
	},
	getShowAnchors: function() {
		/// <summary>Gets a value indicating whether and when anchor point marks are displayed.</summary>
		/// <returns type="MindFusion.Diagramming.ShowAnchors">One of the ShowAnchors enumeration values.</returns>
	},
	getShowDisabledHandles: function() {
		/// <summary>Gets a value indicating whether adjustment handles are painted when they are disabled.</summary>
		/// <returns type="Boolean">true if disabled handles are displayed, or false otherwise. The default is true.</returns>
	},
	getShowGrid: function() {
		/// <summary>Gets a value indicating whether the alignment grid is visible.</summary>
		/// <returns type="Boolean">true if the alignment grid is visible; otherwise, false.</returns>
	},
	getShowLaneGrid: function() {
		/// <summary>Gets a value indicating whether the lane grid is visible.</summary>
		/// <returns type="Boolean">true if the lane grid is visible; otherwise, false.</returns>
	},
	getStyle: function() {
		/// <summary>Gets the style associated with this diagram.</summary>
		/// <returns type="MindFusion.Diagramming.Style">An instance of the Style class.</returns>
	},
	getTag: function() {
		/// <summary>Gets custom data associated with this diagram.</summary>
		/// <returns type="Object">The custom data.</returns>
	},
	getTheme: function() {
		/// <summary>Gets the theme associated with this diagram.</summary>
		/// <returns type="MindFusion.Diagramming.Theme">An instance of the Theme class.</returns>
	},
	getTooltipDelay: function() {
		/// <summary>Gets the delay before a tooltip is shown.</summary>
		/// <returns type="Number">The tooltip delay in milliseconds.</returns>
	},
	getUndoEnabled: function() {
		/// <summary>Gets a value indicating whether saving action records for later undo is enabled.</summary>
		/// <returns type="Boolean">true if undo is enabled, otherwise false.</returns>
	},
	getViewport: function() {
		/// <summary>Returns the visible portion of the diagram area.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance specifying the viewport coordinates.</returns>
	},
	getVirtualScroll: function() {
		/// <summary>Gets a value indicating whether virtual scroll mode is enabled.</summary>
		/// <returns type="Boolean">true if virtual scroll is enabled; otherwise, false.</returns>
	},
	initialize: function() {
		/// <summary>Overrides Component.Initialize</summary>
	},
	isItemInteractive: function(item) {
		/// <summary>Checks if the specified item can be modified interactively.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem to check.</param>
		/// <returns type="Boolean">true, if the item is currently visible and unlocked and it is not associated with a hidden or locked layer; otherwise, false.</returns>
	},
	isItemVisible: function(item) {
		/// <summary>Checks if the specified item is currently visible.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem to check.</param>
		/// <returns type="Boolean">true if the item's Visible property is set to true and the item is not associated with a hidden layer; otherwise, false.</returns>
	},
	loadFromString: function(str) {
		/// <summary>Loads diagram contents from specified XML or JSON string.</summary>
		/// <param name="str" type="String">A string containing the serialized diagram contents.</param>
	},
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the diagram from an XML file.</summary>
		/// <param name="fileUrl" type="String">The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="Function" optional="true">Optional. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="Function" optional="true">Optional. A callback that should be invoked if the file could not be downloaded.</param>
	},
	pasteFromClipboard: function() {
	},
	raiseClicked: function(item, mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a Diagram item has been clicked.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The Diagram item.</param>
		/// <param name="mousePosition" type="MindFusion.Drawing.Point">The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">The mouse button, with which the item has been clicked.</param>
	},
	raiseCreated: function() {
	},
	raiseDeleted: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been deleted.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem that has been deleted.</param>
	},
	raiseDeselected: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been deselected.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The Diagram item.</param>
	},
	raiseDoubleClicked: function(item, mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a Diagram item has been double-clicked.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The Diagram item.</param>
		/// <param name="mousePosition" type="MindFusion.Drawing.Point">The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">The mouse button, with which the item has been clicked.</param>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	raiseModified: function(item, mousePosition, adjustmentHandle) {
		/// <summary>Raises an event which notifies that a Diagram item has been modified.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem that has been modified.</param>
		/// <param name="mousePosition" type="MindFusion.Drawing.Point">The current mouse pointer position.</param>
		/// <param name="adjustmentHandle" type="Number">Identifies the handle used to modify the item.</param>
	},
	raisePasted: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been pasted from clipboard.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem that has been pasted.</param>
	},
	raiseSelected: function(item) {
		/// <summary>Raises an event which notifies that a Diagram item has been selected.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The Diagram item.</param>
	},
	record: function() {
		/// <summary>Starts recording mouse and keyboard events for subsequent replay.</summary>
	},
	redo: function() {
		/// <summary>Executes again an action saved in the command history.</summary>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Diagram's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">The id of the hidden field to flush the data to.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the Diagram.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	removeItem: function(item) {
		/// <summary>Removes the specified item from the Diagram.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The DiagramItem to be removed.</param>
	},
	replay: function(recording, timer, savedState) {
		/// <summary>Replays a sequence of recorded mouse and keyboard events created by record and stopRecording methods.</summary>
		/// <param name="recording" type="Array">An array of event records returned by stopRecording.</param>
		/// <param name="timer" type="Boolean">true to replay records using a timer, preserving their original relative timing, or false to replay them immediately.</param>
		/// <param name="savedState" type="String" optional="true">Optional. A diagram JSON string that should be loaded before replaying recorded events.</param>
	},
	resizeToFitItem: function(item) {
		/// <summary>Resize the document extents so that the specified item is contained within.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The item to be contained.</param>
	},
	resizeToFitItems: function(margin) {
		/// <summary>Resizes the document scrollable area so that it fits all diagram items.</summary>
		/// <param name="margin" type="Number"></param>
	},
	routeAllLinks: function() {
		/// <summary>Routes all links in the diagram in such a way they do not cross nodes.</summary>
	},
	saveToString: function(format) {
		/// <summary>Encodes the diagram contents into an XML or JSON string.</summary>
		/// <param name="format" type="SaveToStringFormat">A member of the SaveToStringFormat enumeration.</param>
		/// <returns type="String">A string containing the diagram's serialized representation.</returns>
	},
	saveToXml: function(url) {
		/// <summary>Saves the diagram to an XML file.</summary>
		/// <param name="url" type="String">A URL specifying where the diagram's XML should be posted to.</param>
	},
	scrollTo: function(x, y) {
		/// <summary>Scrolls the diagram to the specified point.</summary>
		/// <param name="x" type="Number">A number specifying the new horizontal scroll position in the current unit of measure.</param>
		/// <param name="y" type="Number">A number specifying the new vertical scroll position in the current unit of measure.</param>
	},
	setAdjustmentHandlesSize: function(value) {
		/// <summary>Sets the size of adjustment handles that appear around selected items.</summary>
		/// <param name="value" type="Number">A number specifying the size of selection handles.</param>
	},
	setAlignToGrid: function(value) {
		/// <summary>Sets a value indicating whether the diagram items should be aligned to a grid.</summary>
		/// <param name="value" type="Boolean">true if the diagram items should be aligned to a grid; otherwise, false.</param>
	},
	setAllowInplaceEdit: function(value) {
		/// <summary>Sets a value indicating whether in-place editing of the text of objects is enabled.</summary>
		/// <param name="value" type="Boolean">A Boolean value.</param>
	},
	setAllowMultipleResize: function(value) {
		/// <summary>Sets a value indicating whether multiple selected nodes can be resized simultaneously.</summary>
		/// <param name="value" type="Boolean">true to let the user resize multiple selected nodes; otherwise, false. The default value is false.</param>
	},
	setAllowSelfLoops: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to draw reflexive links.</summary>
		/// <param name="value" type="Boolean">A bool value.</param>
	},
	setAllowUnconnectedLinks: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to draw links that are not connected to any node.</summary>
		/// <param name="value" type="Boolean">true to allow drawing unconnected links; otherwise, false. The default is false.</param>
	},
	setAutoArrangeAvoidContainers: function(value) {
		/// <summary>Sets a value indicating whether auto-arranged link labels should avoid containers.</summary>
		/// <param name="value" type="Boolean">true to avoid containers, or false otherwise.</param>
	},
	setAutoArrangeAvoidSegments: function(value) {
		/// <summary>Sets a value indicating whether auto-arranged link labels should avoid link segments.</summary>
		/// <param name="value" type="Boolean">true to avoid link segments, or false otherwise.</param>
	},
	setAutoCloseDistance: function(value) {
		/// <summary>Sets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically.</summary>
		/// <param name="value" type="Number">A floating-point number.</param>
	},
	setAutoResize: function(value) {
		/// <summary>Sets a value indicating whether the document area should be resized automatically so it fits the diagram contents.</summary>
		/// <param name="value" type="MindFusion.Diagramming.AutoResize">A member of the AutoResize enumeration indicating the auto resize method. The default is RightAndDown.</param>
	},
	setAutoScroll: function(value) {
		/// <summary>Sets a value indicating whether auto scrolling of the document area is enabled.</summary>
		/// <param name="value" type="Boolean">true if the diagram should scroll automatically; otherwise, false. The default value is false.</param>
	},
	setAutoScrollAmount: function(value) {
		/// <summary>Sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</summary>
		/// <param name="value" type="Number">A number specifying the amount by which to auto-scroll.</param>
	},
	setBackBrush: function(value) {
		/// <summary>Sets an object used for painting the diagram background.</summary>
		/// <param name="value" type="Object">The object used for painting the background.</param>
	},
	setBackgroundImageAlign: function(value) {
		/// <summary>Sets a value indicating how the background image is positioned.</summary>
		/// <param name="value" type="MindFusion.Drawing.ImageAlign">One of the ImageAlign enumeration values. The default is ImageAlign.TopLeft.</param>
	},
	setBackgroundImageContent: function(value) {
		/// <summary>Sets the Base64-encoded data of the background image.</summary>
		/// <param name="value" type="String">The Base64-encoded data for the background image to be loaded.</param>
	},
	setBackgroundImageUrl: function(value) {
		/// <summary>Sets the URL of the image displayed as background of this diagram.</summary>
		/// <param name="value" type="String">A string specifying the location of the image file.</param>
	},
	setBehavior: function(value) {
		/// <summary>Sets a value indicating how the control responds to user actions.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Behavior">A member of the Behavior enumeration. The default is LinkShapes.</param>
	},
	setCrossingRadius: function(value) {
		/// <summary>Sets the radius length of decorations displayed at link intersection points.</summary>
		/// <param name="value" type="Number">A number specifying the radius of the arcs drawn at link intersection points.</param>
	},
	setCustomLinkType: function(value) {
		/// <summary>Sets the type of a MindFusion.Diagramming.DiagramLink derived class whose instance should be created when a user starts drawing.</summary>
		/// <param name="value" type="Object">The type.</param>
	},
	setCustomNodeType: function(value) {
		/// <summary>Sets the type of a MindFusion.Diagramming.DiagramNode derived class whose instance should be created when a user starts drawing.</summary>
		/// <param name="value" type="Object">The type.</param>
	},
	setDefaultShape: function(value) {
		/// <summary>Sets the default shape of shape nodes.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">A Shape instance or a string that identifies the Shape.</param>
	},
	setDelKeyAction: function(value) {
		/// <summary>Sets a value that specifies what action should be performed when the user hits the Del key.</summary>
		/// <param name="value" type="MindFusion.Diagramming.DelKeyAction">A DelKeyAction Enumeration value.</param>
	},
	setDirty: function(value) {
		/// <summary>Sets a value indicating whether the diagram has changed since loading it.</summary>
		/// <param name="value" type="Boolean">A boolean value that indicates whether the diagram has changed.</param>
	},
	setDynamicLinks: function(value) {
		/// <summary>Sets the default value for the Dynamic property of new links.</summary>
		/// <param name="value" type="Boolean">true if dynamic links should be enabled; otherwise, false.</param>
	},
	setEnabled: function(value) {
		/// <summary>Enables or disables handling of mouse events.</summary>
		/// <param name="value" type="Boolean">true if handling of mouse events is enabled; otherwise, false.</param>
	},
	setExpandOnIncoming: function(value) {
		/// <summary>Sets a value indicating the link direction in which tree branches are expanded.</summary>
		/// <param name="value" type="Boolean">true if trees are expanded in the direction of incoming links; otherwise, false. The default is false.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font for text written on DiagramItem-s.</summary>
		/// <param name="value" type="MindFusion.Drawing.Font">The font to set.</param>
	},
	setFreeFormAttractDistance: function(value) {
		/// <summary>Sets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too.</summary>
		/// <param name="value" type="Number">A floating-point number.</param>
	},
	setFreeFormTargets: function(value) {
		/// <summary>Sets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes.</summary>
		/// <param name="value" type="Array">An array of shape identifiers or Shape instances.</param>
	},
	setGridColor: function(value) {
		/// <summary>Sets the color of the grid points.</summary>
		/// <param name="value" type="String">The color of the grid points.</param>
	},
	setGridOffsetX: function(value) {
		/// <summary>Sets the horizontal offset of the first point of the alignment grid.</summary>
		/// <param name="value" type="Number">The horizontal offset of the first point of the alignment grid.</param>
	},
	setGridOffsetY: function(value) {
		/// <summary>Sets the vertical offset of the first point of the alignment grid.</summary>
		/// <param name="value" type="Number">The vertical offset of the first point of the alignment grid.</param>
	},
	setGridPointSize: function(value) {
		/// <summary>Sets the size of shapes used to represent grid points.</summary>
		/// <param name="value" type="void"></param>
		/// <returns type="Number">value The size of shapes used to represent grid points.</returns>
	},
	setGridSizeX: function(value) {
		/// <summary>Sets the horizontal distance between adjacent grid points.</summary>
		/// <param name="value" type="Number">The horizontal distance between adjacent grid points.</param>
	},
	setGridSizeY: function(value) {
		/// <summary>Sets the vertical distance between adjacent grid points.</summary>
		/// <param name="value" type="Number">The vertical distance between adjacent grid points.</param>
	},
	setGridStyle: function(value) {
		/// <summary>Sets the visual style of the alignment grid.</summary>
		/// <param name="value" type="MindFusion.Diagramming.GridStyle">One of the GridStyle enumeration values.</param>
	},
	setLinkBaseShape: function(value) {
		/// <summary>Sets the Shape displayed at the base of new links.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape. The default is None.</param>
	},
	setLinkBaseShapeSize: function(value) {
		/// <summary>Sets the default size of the base shape of new links.</summary>
		/// <param name="value" type="Number">A number that specifies the size. The default is 5.</param>
	},
	setLinkBrush: function(value) {
		/// <summary>Sets the default fill of links.</summary>
		/// <param name="value" type="Object">An object identifying the fill of links.</param>
	},
	setLinkCrossings: function(value) {
		/// <summary>Sets a value indicating how to render the intersection points where two links cross each other.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LinkCrossings">A member of the LinkCrossings enumeration.</param>
	},
	setLinkHeadShape: function(value) {
		/// <summary>Sets the Shape displayed as head of new links.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">A ShapeNode instance that represents an arrowhead shape. The default is Arrow.</param>
	},
	setLinkHeadShapeSize: function(value) {
		/// <summary>Sets the default size of arrowheads.</summary>
		/// <param name="value" type="Number">A number that measures the size. The default is 5.</param>
	},
	setLinkHitDistance: function(value) {
		/// <summary>Sets a value specifying how far from a link a click is still considered a hit.</summary>
		/// <param name="value" type="Number">A value specifying how far from a link a click is still considered a hit.</param>
	},
	setLinkPen: function(value) {
		/// <summary>Sets the default stroke of links.</summary>
		/// <param name="value" type="String">A string value specifying the stroke of links.</param>
	},
	setLinkRouter: function(value) {
		/// <summary>Sets the object used to find paths for auto-routed links when diagram nodes are added or their positions change.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Router">An instance of Router-derived class.</param>
	},
	setLinkSegments: function(value) {
		/// <summary>Sets the default number of arrow segments.</summary>
		/// <param name="value" type="Number">The default number of arrow segments.</param>
	},
	setLinkShape: function(value) {
		/// <summary>Sets the initial shape assigned to new links.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LinkShape">One of the LinkShape enumeration values.</param>
	},
	setLinkTextStyle: function(value) {
		/// <summary>Sets the default placement and orientation for links' text.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LinkTextStyle">A member of the LinkTextStyle enumeration. The default value is Center.</param>
	},
	setMagnifierEnabled: function(value) {
		/// <summary>Sets a value indicating whether the magnifier tool is currently enabled.</summary>
		/// <param name="value" type="Boolean">true to enable the magnifier; otherwise, false. The default value is false.</param>
	},
	setMagnifierFactor: function(value) {
		/// <summary>Sets the zoom factor of the magnifier tool.</summary>
		/// <param name="value" type="Number">A number specifying the zoom factor of the magnifier tool.</param>
	},
	setMagnifierFrameColor: function(value) {
		/// <summary>Sets the color of the magnifier tool's frame.</summary>
		/// <param name="value" type="String">The color of the magnifier tool's frame.</param>
	},
	setMagnifierFrameThickness: function(value) {
		/// <summary>Sets the thickness of the magnifier frame.</summary>
		/// <param name="value" type="Number">A number specifying the thickness of the magnifier frame.</param>
	},
	setMagnifierHeight: function(value) {
		/// <summary>Sets the height of the magnifier tool.</summary>
		/// <param name="value" type="Number">A number specifying the height of the magnifier tool.</param>
	},
	setMagnifierSecondaryFrameColor: function(value) {
		/// <summary>Sets the color of the magnifier tool's secondary frame.</summary>
		/// <param name="value" type="String">The color of the magnifier tool's secondary frame.</param>
	},
	setMagnifierShading: function(value) {
		/// <summary>Sets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading.</summary>
		/// <param name="value" type="Boolean">true to enable the shading; otherwise, false. The default value is true.</param>
	},
	setMagnifierShape: function(value) {
		/// <summary>Sets a reference to the geometric shape definition of the magnifier tool.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">An instance of the Shape class whose outline definition should be used as magnifier's shape. The default is Circle.</param>
	},
	setMagnifierWidth: function(value) {
		/// <summary>Sets the width of the magnifier tool.</summary>
		/// <param name="value" type="Number">A number specifying the width of the magnifier tool.</param>
	},
	setMiddleButtonActions: function(value) {
		/// <summary>Sets a combination of flags that specify what actions can be performed via the middle mouse button.</summary>
		/// <param name="value" type="MindFusion.Diagramming.MouseButtonActions">A member of the MouseButtonActions enumeration.</param>
	},
	setModificationStart: function(value) {
		/// <summary>Sets how users can start modifying diagram items.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ModificationStart">A member of the ModificationStart enumeration. The default is SelectedOnly.</param>
	},
	setNodesExpandable: function(value) {
		/// <summary>Sets a value indicating whether newly created nodes can be collapsed and expanded by users.</summary>
		/// <param name="value" type="Boolean">A boolean value assigned to the Expandable property of new nodes. The default is false.</param>
	},
	setRightButtonActions: function(value) {
		/// <summary>Sets a combination of flags that specify what actions can be performed via the right mouse button.</summary>
		/// <param name="value" type="MindFusion.Diagramming.MouseButtonActions">A member of the MouseButtonActions enumeration.</param>
	},
	setRoundedLinks: function(value) {
		/// <summary>Sets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded.</summary>
		/// <param name="value" type="Boolean">true to&#160;draw rounded segment joints; otherwise, false.</param>
	},
	setRoundedLinksRadius: function(value) {
		/// <summary>Sets the radius of joint arcs of rounded links' segments.</summary>
		/// <param name="value" type="Number">A number specifying the radius length.</param>
	},
	setRouteLinks: function(value) {
		/// <summary>Sets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes.</summary>
		/// <param name="value" type="Boolean">true to route links; otherwise, false. The default is false.</param>
	},
	setRouteMargin: function(value) {
		/// <summary>Sets the minimal distance between nodes and auto-routed links.</summary>
		/// <param name="value" type="Number">A value specifying distance in the current MeasureUnit; default is 8.</param>
	},
	setScroll: function(x, y) {
		/// <summary>IZoomTarget implementation</summary>
		/// <param name="x" type="void"></param>
		/// <param name="y" type="void"></param>
	},
	setScrollX: function(value) {
		/// <summary>Sets the diagram's horizontal scroll position.</summary>
		/// <param name="value" type="Number">A number specifying the new horizontal scroll position in the current unit of measure.</param>
	},
	setScrollY: function(value) {
		/// <summary>Sets the diagram's vertical scroll position.</summary>
		/// <param name="value" type="Number">A number specifying the new vertical scroll position in the current unit of measure.</param>
	},
	setScrollZoneSize: function(value) {
		/// <summary>Sets the size of the auto scroll zone near the edges of the control.</summary>
		/// <param name="value" type="Number">A number specifying the size in pixels of the area near the view edges where auto-scrolling is triggered. The default value is 8.</param>
	},
	setShadowOffsetX: function(value) {
		/// <summary>Sets the horizontal offset of objects' shadows.</summary>
		/// <param name="value" type="Number">A number specifying the shadow's horizontal offset.</param>
	},
	setShadowOffsetY: function(value) {
		/// <summary>Sets the vertical offset of objects' shadows.</summary>
		/// <param name="value" type="Number">A number specifying the shadow's vertical offset.</param>
	},
	setShadowsStyle: function(value) {
		/// <summary>Sets the style for rendering shadows.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ShadowsStyle">A member of the ShadowsStyle enumeration. The default value is ShadowsStyle.OneLevel.</param>
	},
	setShapeBrush: function(value) {
		/// <summary>Sets the default fill of shape nodes.</summary>
		/// <param name="value" type="Object">An object identifying the fill of shape nodes.</param>
	},
	setShapeLibraryLocation: function(value) {
		/// <summary>Sets the location of a shape library file containing custom shape definitions.It can be set to a full URL of the file, or a relative file path.</summary>
		/// <param name="value" type="String">The location of a shape library file containing custom shape definitions.</param>
	},
	setShapePen: function(value) {
		/// <summary>Sets the default stroke of shape nodes.</summary>
		/// <param name="value" type="String">A string value specifying the stroke of shape nodes.</param>
	},
	setShowAnchors: function(value) {
		/// <summary>Sets a value indicating whether and when anchor point marks are displayed.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ShowAnchors">One of the ShowAnchors enumeration values.</param>
	},
	setShowDisabledHandles: function(value) {
		/// <summary>Sets a value indicating whether adjustment handles are painted when they are disabled.</summary>
		/// <param name="value" type="Boolean">true to display disabled manipulation handles; otherwise, false.</param>
	},
	setShowGrid: function(value) {
		/// <summary>Sets a value indicating whether the alignment grid is visible.</summary>
		/// <param name="value" type="Boolean">true if the alignment grid is visible; otherwise, false.</param>
	},
	setShowLaneGrid: function(value) {
		/// <summary>Sets a value indicating whether the lane grid is visible.</summary>
		/// <param name="value" type="Boolean">true if the lane grid is visible; otherwise, false.</param>
	},
	setStyle: function(value) {
		/// <summary>Sets the style associated with this diagram.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Style">An instance of the Style class.</param>
	},
	setTag: function(value) {
		/// <summary>Sets custom data associated with this diagram.</summary>
		/// <param name="value" type="Object">The custom data.</param>
	},
	setTheme: function(value) {
		/// <summary>Sets the theme associated with this diagram.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Theme">An instance of the Theme class.</param>
	},
	setTooltipDelay: function(value) {
		/// <summary>Sets the delay before a tooltip is shown.</summary>
		/// <param name="value" type="Number">The tooltip delay in milliseconds.</param>
	},
	setUndoEnabled: function(value) {
		/// <summary>Sets a value indicating whether saving action records for later undo is enabled.</summary>
		/// <param name="value" type="Boolean">true to save actions for later undo; otherwise false. The default is false.</param>
	},
	setVirtualScroll: function(value) {
		/// <summary>Enables or disables virtual scroll mode.</summary>
		/// <param name="value" type="Boolean">true to enable virtual scroll; otherwise, false.</param>
	},
	setZoomFactorPivot: function(zoomFactor, pivotPoint) {
		/// <summary>Sets the zoom factor, preserving the on-screen position of the specified diagram point.</summary>
		/// <param name="zoomFactor" type="Number">The new zoom factor.</param>
		/// <param name="pivotPoint" type="MindFusion.Drawing.Point">A Point instance specifying the zoom center.</param>
	},
	setZoomLevel: function(value) {
		/// <summary>IZoomTarget implementation.</summary>
		/// <param name="value" type="void"></param>
	},
	startCompositeOperation: function() {
		/// <summary>Starts recording undo/redo commands into a CompositeCommand.</summary>
	},
	stopRecording: function() {
		/// <summary>Stops recording mouse and keyboard events.</summary>
		/// <returns type="Array">An array of event records representing user's input.</returns>
	},
	toJson: function() {
		/// <summary>Serializes the diagram into a JSON string.</summary>
		/// <returns type="String">A string containing the diagram's JSON representation.</returns>
	},
	toXmlDocument: function() {
		/// <summary>Saves the diagram into an XML Document.</summary>
		/// <returns type="Document">A DOM Document object containing XML-serialized diagram contents.</returns>
	},
	undo: function() {
		/// <summary>Undoes an action saved in the command history.</summary>
	},
	zoomToFit: function() {
		/// <summary>Zooms the view to fit the document contents in the Diagram client area.</summary>
	},
	zoomToRect: function(rect) {
		/// <summary>Zooms and scrolls the view to fit the specified document rectangle in the Diagram's visible area.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">A Rect instance specifying the viewport position and size.</param>
	}
};
MindFusion.Diagramming.Diagram.__class = true;

MindFusion.Diagramming.Diagram.create = function(element) {
	/// <summary>Creates and initializes a new Diagram from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the diagram should be attached to.</param>
	/// <returns type="MindFusion.Diagramming.Diagram">A Diagram object that represents the newly created diagram.</returns>
};
MindFusion.Diagramming.Diagram.find = function(id, parent) {
	/// <summary>Returns the specified Diagram object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the diagram to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the diagram to find.</param>
	/// <returns type="MindFusion.Diagramming.Diagram">A Diagram object that contains the diagram requested by id, if found; otherwise, null.</returns>
};
MindFusion.Diagramming.Diagram.registerItemClass = function(itemClass, classId, classVersion) {
	/// <summary>Registers a diagram item class for serialization support.</summary>
	/// <param name="itemClass" type="Object">An object identifying the item class.</param>
	/// <param name="classId" type="String">A class identifier to use when saving and loading items of the specified type.</param>
	/// <param name="classVersion" type="Number">A revision number of the item's class serialization format.</param>
};

MindFusion.Diagramming.DiagramEventArgs.prototype = {
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point instance.</returns>
	}
};
MindFusion.Diagramming.DiagramEventArgs.__class = true;

MindFusion.Diagramming.DiagramItem.prototype = {
	addCanvasElements: function() {
		/// <summary>Derived classes must implement this method by adding their graphics primitives to the canvas.elements collection.</summary>
	},
	allowDrag: function(ist) {
		/// <summary>Invoked to validate the drag operation.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	cancelDrag: function(ist) {
		/// <summary>Invoked when the interactive modification of this object has been canceled.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>Determines whether this item contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point to check.</param>
		/// <returns type="Boolean">true if this item contains the specified point; otherwise, false.</returns>
	},
	endDrag: function(ist) {
		/// <summary>Invoked when the user stops dragging this item.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes this item from a JSON string.</summary>
		/// <param name="json" type="String">A string created by the toJson method.</param>
	},
	getBrush: function() {
		/// <summary>Gets the object that specifies how to paint the interior of the DiagramItem.</summary>
		/// <returns type="Object">An object specifying the fill of the item.</returns>
	},
	getContainer: function() {
		/// <summary>Gets the parent container node of this item.</summary>
		/// <returns type="ContainerNode">The parent container node of this item.</returns>
	},
	getEffectiveBrush: function() {
		/// <summary>Gets the effective brush that should be used to paint this item.</summary>
		/// <returns type="Object">An object specifying the fill of this item.</returns>
	},
	getEffectiveFont: function() {
		/// <summary>Gets the effective font that should be used to render this item's text.</summary>
		/// <returns type="MindFusion.Drawing.Font">A Font instance.</returns>
	},
	getEffectiveFontName: function() {
		/// <summary>Gets the name of the effective font that should be used to render this item's text.</summary>
		/// <returns type="String">A string specifying the font name.</returns>
	},
	getEffectiveFontSize: function() {
		/// <summary>Gets the size of the effective font that should be used to render this item's text.</summary>
		/// <returns type="Number">A number specifying the font size.</returns>
	},
	getEffectiveFontStyle: function() {
		/// <summary>Gets the style of the effective font that should be used to render this item's text.</summary>
		/// <returns type="MindFusion.Drawing.FontStyle">A combination of FontStyle enumeration members.</returns>
	},
	getEffectiveShadowColor: function() {
		/// <summary>Gets the effective color that should be used to render this item's shadow.</summary>
		/// <returns type="String">A string specifying the item's shadow color.</returns>
	},
	getEffectiveStroke: function() {
		/// <summary>Gets the effective color that should be used to stroke this item.</summary>
		/// <returns type="String">A string specifying the item's stroke color.</returns>
	},
	getEffectiveStrokeDashStyle: function() {
		/// <summary>Gets the effective line dash pattern that should be applied when stroking this item.</summary>
		/// <returns type="MindFusion.Drawing.DashStyle">A member of the DashStyle enumeration.</returns>
	},
	getEffectiveStrokeThickness: function() {
		/// <summary>Gets the effective line thickness that should be applied when stroking this item.</summary>
		/// <returns type="Number">A number specifying the item's stroke thickness.</returns>
	},
	getEffectiveTextColor: function() {
		/// <summary>Gets the effective text color that should be used to render this item's text.</summary>
		/// <returns type="String">A string specifying the item's text color.</returns>
	},
	getEffectiveTextStroke: function() {
		/// <summary>Gets the effective text color that should be used to render this item's text outline.</summary>
		/// <returns type="String">A string specifying the item's text outline color.</returns>
	},
	getEffectiveTextStrokeThickness: function() {
		/// <summary>Gets the effective width of the text outline of this item.</summary>
		/// <returns type="Number">The width of the text outline of this item.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font used to render this item's text.</summary>
		/// <returns type="MindFusion.Drawing.Font">A Font instance.</returns>
	},
	getGraphicsContent: function() {
		/// <summary>Returns the array with visual elements that are used to represent this item on the canvas.</summary>
		/// <returns type="Array">The collection of visual elements.</returns>
	},
	getHyperLink: function() {
		/// <summary>Gets the hyperlink associated with this diagram item.</summary>
		/// <returns type="String">The hyperlink.</returns>
	},
	getId: function() {
		/// <summary>Gets the id of the item.</summary>
		/// <returns type="Object">The id.</returns>
	},
	getIgnoreLayout: function() {
		/// <summary>Gets a value indicating whether the position of this item should not be changed by automatic layout methods.</summary>
		/// <returns type="Boolean">true if this item is not affected by automatic layout; otherwise, false.</returns>
	},
	getLayoutTraits: function() {
		/// <summary>Gets an object containing properties of the node&#160;specific&#160;to some layout algorithms.</summary>
		/// <returns type="Object">An object containing the node's layout properties.</returns>
	},
	getLineAlignment: function() {
		/// <summary>Gets how the text should be vertically aligned inside the item's bounding rectangle.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getLocked: function() {
		/// <summary>Gets a value indicating whether users are allowed to modify this item.</summary>
		/// <returns type="Boolean">true to prevent users from modifying the item, otherwise false.</returns>
	},
	getParent: function() {
		/// <summary>Gets the parent diagram.</summary>
		/// <returns type="MindFusion.Diagramming.Diagram">Gets the Diagram this DiagramItem belongs to.</returns>
	},
	getPen: function() {
		/// <summary>Gets an object used to paint the frame of the item.</summary>
		/// <returns type="String">A string value identifying the stroke of the item frame.</returns>
	},
	getRepaintBounds: function() {
		/// <summary>Gets the repaint region for this item, taking into account factors such as pen width, selection handles and shadow.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A&#160;Rect specifying the&#160;region that should be repainted when this item is modified.</returns>
	},
	getSelected: function() {
		/// <summary>Gets a value indicating whether a DiagramItem is selected.</summary>
		/// <returns type="Boolean">true if the item is selected; otherwise, false.</returns>
	},
	getShadowColor: function() {
		/// <summary>Gets the color used to draw the shadow of this item.</summary>
		/// <returns type="String">A string specifying the shadow color.</returns>
	},
	getShadowOffsetX: function() {
		/// <summary>Gets the horizontal offset of the item's shadow.</summary>
		/// <returns type="Number">A number specifying the shadow's horizontal offset.</returns>
	},
	getShadowOffsetY: function() {
		/// <summary>Gets the vertical offset of the item's shadow.</summary>
		/// <returns type="Number">A number specifying the shadow's vertical offset.</returns>
	},
	getStroke: function() {
		/// <summary>Gets a string specifying the color used to stroke the item's frame.</summary>
		/// <returns type="String">A string value identifying the stroke color.</returns>
	},
	getStrokeDashStyle: function() {
		/// <summary>Gets the line dash pattern applied when stroking the item's frame.</summary>
		/// <returns type="MindFusion.Drawing.DashStyle">A member of the DashStyle enumeration.</returns>
	},
	getStrokeThickness: function() {
		/// <summary>Gets the line width applied when stroking the item's frame.</summary>
		/// <returns type="Number">A number identifying the stroke thickness.</returns>
	},
	getStyle: function() {
		/// <summary>Gets the style associated with this item.</summary>
		/// <returns type="MindFusion.Diagramming.Style">An instance of the Style class.</returns>
	},
	getTag: function() {
		/// <summary>Gets the tag of the item.</summary>
		/// <returns type="Object">The tag.</returns>
	},
	getText: function() {
		/// <summary>Gets the string containing the DiagramItem's text.</summary>
		/// <returns type="String">A string that contains the text.</returns>
	},
	getTextAlignment: function() {
		/// <summary>Gets how the text should be aligned inside the item's bounding rectangle.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets a string specifying the color of the text of this item.</summary>
		/// <returns type="String">A string value identifying the color of the text.</returns>
	},
	getTextComponent: function() {
		/// <summary>Gets the Text object instance that is used as a container for the item's text.</summary>
		/// <returns type="Text">The Text container.</returns>
	},
	getTextPadding: function() {
		/// <summary>Gets the spacing between the item boundaries and its text.</summary>
		/// <returns type="MindFusion.Drawing.Thickness">A Thickness instance specifying the size of padding space left around the text.</returns>
	},
	getTextStroke: function() {
		/// <summary>Gets a string specifying the color of the text outline of this item.</summary>
		/// <returns type="String">A string value identifying the color of the text outline.</returns>
	},
	getTextStrokeThickness: function() {
		/// <summary>Gets the width of the text outline of this item.</summary>
		/// <returns type="Number">The width of the text outline of this item.</returns>
	},
	getTooltip: function() {
		/// <summary>Gets the tooltip text that should be displayed when the mouse hovers over this item.</summary>
		/// <returns type="String">A string containing the tooltip text.</returns>
	},
	getVisible: function() {
		/// <summary>Gets a value indicating whether this item is visible.</summary>
		/// <returns type="Boolean">true if this item should be displayed; otherwise, false.</returns>
	},
	getWeight: function() {
		/// <summary>Gets a weight value used in layout and path-finding algorithms.</summary>
		/// <returns type="Number">A number specifying the weight of this item. The default value is 1.</returns>
	},
	getZIndex: function() {
		/// <summary>Gets the z-order position of the object.</summary>
		/// <returns type="Number">A number specifying the position of the diagram item within the z-order.</returns>
	},
	hitTest: function(point, threshold, onlyNodes, onlyInteractive) {
		/// <summary>Returns the diagram item that contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point value specifying the logical coordinates of a diagram point.</param>
		/// <param name="threshold" type="Number" optional="true">Optional. Specifies the size of the area around the item outlines where the point is still considered inside the item.</param>
		/// <param name="onlyNodes" type="Boolean" optional="true">Optional. true to exclude child links from the search.</param>
		/// <param name="onlyInteractive" type="Boolean" optional="true">Optional. true to exclude locked items from the search.</param>
		/// <returns type="MindFusion.Diagramming.DiagramItem">The item that contains the specified point.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>Loads the item content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that contains the item's serialized content.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An XmlPersistContext&#160;object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	onRemove: function() {
		/// <summary>Called when an item is removed from a Diagram, either by the user, programmatically or via undo / redo.</summary>
	},
	removeCanvasElements: function() {
		/// <summary>Derived classes must implement this method by removing their graphics primitives from the canvas.elements collection.</summary>
	},
	saveLocationState: function() {
		/// <summary>Saves the state of this DiagramItem.</summary>
		/// <returns type="DiagramLinkState">A DiagramLinkState instance.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setBrush: function(value) {
		/// <summary>Sets an object that specifies how to paint the interior of the DiagramItem.</summary>
		/// <param name="value" type="Object">A Brush&#160;object specifying the fill of the item.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font used to render this item's text.</summary>
		/// <param name="value" type="MindFusion.Drawing.Font">A Font instance.</param>
	},
	setHyperLink: function(value) {
		/// <summary>Sets the hyperlink associated with this diagram item.</summary>
		/// <param name="value" type="String">The hyperlink.</param>
	},
	setId: function(value) {
		/// <summary>Lets you set any object as an id for this item.</summary>
		/// <param name="value" type="Object">The id of the item.</param>
	},
	setIgnoreLayout: function(value) {
		/// <summary>Sets a value indicating whether the position of this item should not be changed by automatic layout methods.</summary>
		/// <param name="value" type="Boolean">true to prevent layout methods&#160;from changing the position of this item; otherwise, false.</param>
	},
	setLineAlignment: function(value) {
		/// <summary>Sets how the text should be vertically aligned inside the item's bounding rectangle.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setLocked: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to modify this item.</summary>
		/// <param name="value" type="Boolean">true to prevent users from modifying the item, otherwise false.</param>
	},
	setPen: function(value) {
		/// <summary>Sets an object used to paint the frame of the item.</summary>
		/// <param name="value" type="Object">A Pen value identifying the stroke of the item frame.</param>
	},
	setSelected: function(value) {
		/// <summary>Sets a value indicating whether a DiagramItem is selected.</summary>
		/// <param name="value" type="Boolean">true if the item is selected; otherwise, false.</param>
	},
	setShadowColor: function(value) {
		/// <summary>Sets the color used to draw the shadow of this item.</summary>
		/// <param name="value" type="String">A string specifying the shadow color.</param>
	},
	setShadowOffsetX: function(value) {
		/// <summary>Sets the horizonal offset of the item's shadow.</summary>
		/// <param name="value" type="Number">A number specifying the shadow's horizontal offset.</param>
	},
	setShadowOffsetY: function(value) {
		/// <summary>Sets the vertical offset of the item's shadow.</summary>
		/// <param name="value" type="Number">A number specifying the shadow's vertical offset.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets a string specifying the color used to stroke the item's frame.</summary>
		/// <param name="value" type="String">A string value identifying the stroke color.</param>
	},
	setStrokeDashStyle: function(value) {
		/// <summary>Sets the line dash pattern applied when stroking the item's frame.</summary>
		/// <param name="value" type="MindFusion.Drawing.DashStyle">A member of the DashStyle enumeration.</param>
	},
	setStrokeThickness: function(value) {
		/// <summary>Sets the line width applied when stroking the item's frame.</summary>
		/// <param name="value" type="Number">A number identifying the stroke thickness.</param>
	},
	setStyle: function(value) {
		/// <summary>Sets the style associated with this item.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Style">An instance of the Style class.</param>
	},
	setTag: function(value) {
		/// <summary>Lets you set any object as a tag for this item.</summary>
		/// <param name="value" type="Object">The tag of the item.</param>
	},
	setText: function(value) {
		/// <summary>Sets a string containing the DiagramItem's text.</summary>
		/// <param name="value" type="String">The string to set.</param>
	},
	setTextAlignment: function(value) {
		/// <summary>Sets how the text should be aligned inside the item's bounding rectangle.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets a string specifying the color of the text of this item.</summary>
		/// <param name="value" type="String">A string value identifying the color of the text.</param>
	},
	setTextPadding: function(value) {
		/// <summary>Sets the spacing between the item boundaries and its text.</summary>
		/// <param name="value" type="MindFusion.Drawing.Thickness">A Thickness instance specifying the size of padding space left around the text.</param>
	},
	setTextStroke: function(value) {
		/// <summary>Sets a string specifying the color of the text outline of this item.</summary>
		/// <param name="value" type="String">A string value identifying the color of the text outline.</param>
	},
	setTextStrokeThickness: function(value) {
		/// <summary>Sets the width of the text outline of this item.</summary>
		/// <param name="value" type="Number">The width of the text outline of this item.</param>
	},
	setTooltip: function(value) {
		/// <summary>Sets the tooltip text that should be displayed when the mouse hovers over this item.</summary>
		/// <param name="value" type="String">A string containing the tooltip text.</param>
	},
	setVisible: function(value) {
		/// <summary>Sets a value indicating whether this item is visible.</summary>
		/// <param name="value" type="Boolean">true to display this item; otherwise, false.</param>
	},
	setWeight: function(value) {
		/// <summary>Sets a weight value used in layout and path-finding algorithms.</summary>
		/// <param name="value" type="Number">A number specifying the weight of this item. The default value is 1.</param>
	},
	setZIndex: function(value) {
		/// <summary>Sets the z-order position of the object.</summary>
		/// <param name="value" type="Number">A number specifying the position of the diagram item within the z-order.</param>
	},
	startDrag: function(ist) {
		/// <summary>Invoked when the user starts dragging this item.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	toJson: function() {
		/// <summary>Serializes this item into a JSON string.</summary>
		/// <returns type="String">A string containing the item's JSON representation.</returns>
	},
	updateCanvasElements: function() {
		/// <summary>Derived classes must implement this method to update the item's visual elements.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>Invoked while the user drags this item.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	}
};
MindFusion.Diagramming.DiagramItem.__class = true;

MindFusion.Diagramming.DiagramLink.prototype = {
	addLabel: function(text) {
		/// <summary>Adds a new label to this link.</summary>
		/// <param name="text" type="String">The label's text.</param>
		/// <returns type="MindFusion.Diagramming.LinkLabel">A LinkLabel instance.</returns>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point to check.</param>
		/// <returns type="Boolean">true if the link contains the point; otherwise, false.</returns>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getAutoRoute: function() {
		/// <summary>Gets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes.</summary>
		/// <returns type="Boolean">true to route this link automatically; otherwise, false.</returns>
	},
	getBaseBrush: function() {
		/// <summary>Gets an object that specifies how to paint the interior of the link's base shape.</summary>
		/// <returns type="Object">An object specifying the fill of the shape.</returns>
	},
	getBaseShape: function() {
		/// <summary>Gets the shape displayed at the beginning of this link.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">A Shape&#160;instance that represents an arrowhead shape.</returns>
	},
	getBaseShapeSize: function() {
		/// <summary>Gets the size of the shape displayed at the beginning of this link.</summary>
		/// <returns type="Number">A number that represents the size of the arrowhead shape.</returns>
	},
	getControlPoints: function() {
		/// <summary>Gets a collection of the control points of this link.</summary>
		/// <returns type="Array">A collection of control Points that specify the link's shape.</returns>
	},
	getDestination: function() {
		/// <summary>Gets the destination node of this link.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">The DiagramNode that is destination&#160;of this link.</returns>
	},
	getDestinationAnchor: function() {
		/// <summary>Gets the anchor point to which a link is connected at its destination.</summary>
		/// <returns type="Number">An integer value specifying the index of the destination anchor point.</returns>
	},
	getDynamic: function() {
		/// <summary>Gets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects.</summary>
		/// <returns type="Boolean">true if the link automatically adjusts its end points; otherwise, false.</returns>
	},
	getEndPoint: function() {
		/// <summary>Gets the last control point of this link.</summary>
		/// <returns type="MindFusion.Drawing.Point">The Point where the user ended drawing.</returns>
	},
	getHeadBrush: function() {
		/// <summary>Gets a Brush that specifies how to paint the interior of the link's arrowhead shape.</summary>
		/// <returns type="Object">An object specifying the fill of the shape.</returns>
	},
	getHeadShape: function() {
		/// <summary>Gets the shape displayed at the end of this link.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape.</returns>
	},
	getHeadShapeSize: function() {
		/// <summary>Gets the size of the shape displayed at the end of this link.</summary>
		/// <returns type="Number">A number that represents the size of the arrowhead shape.</returns>
	},
	getHeadStroke: function() {
		/// <summary>Gets an object that specifies how to paint the outline of the link's arrowhead shape.</summary>
		/// <returns type="Object">An object specifying the outline of the shape.</returns>
	},
	getHeadStrokeDashStyle: function() {
		/// <summary>Gets an object that specifies the effective line dash pattern of the outline of the link's arrowhead shape.</summary>
		/// <returns type="MindFusion.Drawing.DashStyle">An object specifying the effective line dash pattern of the outline of the link's arrowhead shape.</returns>
	},
	getHeadStrokeThickness: function() {
		/// <summary>Gets an object that specifies the line thickness of the outline of the link's arrowhead shape.</summary>
		/// <returns type="Number">A number specifying the line thickness of the outline of the link's arrowhead shape.</returns>
	},
	getOrigin: function() {
		/// <summary>Gets the origin node of this link.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">The&#160;DiagramNode that is the origin of this link.</returns>
	},
	getOriginAnchor: function() {
		/// <summary>Gets the anchor point to which a link is connected at its origin.</summary>
		/// <returns type="Number">An integer value specifying the index of the origin anchor point.</returns>
	},
	getSegmentCount: function() {
		/// <summary>Gets the number of segments that form the link's geometry.</summary>
		/// <returns type="Number">An integer value specifying the number of segments of this link.</returns>
	},
	getShape: function() {
		/// <summary>Gets the type of link segments and how they are positioned relatively to each other.</summary>
		/// <returns type="MindFusion.Diagramming.LinkShape">One of the LinkShape enumeration values.</returns>
	},
	getStartPoint: function() {
		/// <summary>Gets the first control point of this link.</summary>
		/// <returns type="MindFusion.Drawing.Point">The Point where the user starts drawing.</returns>
	},
	getText: function() {
		/// <summary>Gets the text displayed over&#160;this link.</summary>
		/// <returns type="String">A string containing the link's text.</returns>
	},
	getTextAlignment: function() {
		/// <summary>Gets the link's text alignment.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">A member of the Alignment enumeration.</returns>
	},
	getTextStyle: function() {
		/// <summary>Gets the link's text placement and orientation.</summary>
		/// <returns type="MindFusion.Diagramming.LinkTextStyle">A member of the LinkTextStyle enumeration.</returns>
	},
	getTopLevel: function() {
		/// <summary>DiagramItem.getTopLevel override.</summary>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this DiagramLink instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	intersects: function(rect) {
		/// <summary>Checks whether the link contour intersects with the outline of the specified node.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The bounding rectangle of the specified node.</param>
		/// <returns type="Boolean"></returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramItem.LoadFromXml override. Loads the link's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	putEndPointsAtNodeBorders: function(action, routing) {
		/// <summary>Places the link's end points on the outline of its origin and destination nodes.</summary>
		/// <param name="action" type="MindFusion.Diagramming.Action"></param>
		/// <param name="routing" type="Boolean"></param>
	},
	removeLabel: function(label) {
		/// <summary>Removes the specified label from this link.</summary>
		/// <param name="label" type="MindFusion.Diagramming.LinkLabel">A LinkLabel instance.</param>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="DiagramLinkState">A DiagramLinkState instance.</param>
	},
	route: function(args) {
		/// <summary>Routes this link, regardless of whether the link's AutoRoute flag is enabled.</summary>
		/// <param name="args" type="Object"></param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="DiagramLinkState">A DiagramLinkState instance.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setAutoRoute: function(value) {
		/// <summary>Sets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes.</summary>
		/// <param name="value" type="Boolean">true to route this link automatically; otherwise, false.</param>
	},
	setBaseBrush: function(value) {
		/// <summary>Sets an object that specifies how to paint the interior of the link's base shape.</summary>
		/// <param name="value" type="Object">A Brush&#160;specifying the fill of the shape.</param>
	},
	setBaseShape: function(shape) {
		/// <summary>Sets the shape to display at the beginning of this link.</summary>
		/// <param name="shape" type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape or a String that identifies it.</param>
	},
	setBaseShapeSize: function(value) {
		/// <summary>Gets the size of the BaseShape shape.</summary>
		/// <param name="value" type="Number">A number that represents the size of the arrowhead shape.</param>
	},
	setControlPoints: function(value) {
		/// <summary>Sets a collection of the control points of this link.</summary>
		/// <param name="value" type="Array">A collection of control Point-s that specify the link's shape.</param>
	},
	setDestination: function(destination) {
		/// <summary>Sets the destination node of this link.</summary>
		/// <param name="destination" type="MindFusion.Diagramming.DiagramNode">The DiagramNode to set as destination for this link.</param>
	},
	setDestinationAnchor: function(index) {
		/// <summary>Sets the anchor point to which a link is connected at its destination.</summary>
		/// <param name="index" type="Number">An integer value specifying the index of the destination anchor point.</param>
	},
	setDynamic: function(value) {
		/// <summary>Sets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects.</summary>
		/// <param name="value" type="Boolean">true to make the link automatically adjust its end points; otherwise, false.</param>
	},
	setEndPoint: function(value) {
		/// <summary>Sets the last control point of this link.</summary>
		/// <param name="value" type="MindFusion.Drawing.Point">A Point instance containing the control point coordinates.</param>
	},
	setHeadBrush: function(value) {
		/// <summary>Sets a Brush that specifies how to paint the interior of the link's arrowhead ShapeNode.</summary>
		/// <param name="value" type="Object">An object specifying the fill of the Shape.</param>
	},
	setHeadShape: function(value) {
		/// <summary>Sets the shape to display at the end of this link.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">A Shape instance that represents an arrowhead shape or a String that identifies it.</param>
	},
	setHeadShapeSize: function(value) {
		/// <summary>Gets the size of the arrowhead shape.</summary>
		/// <param name="value" type="Number">A number that represents the size of the arrowhead shape.</param>
	},
	setHeadStroke: function(value) {
		/// <summary>Sets an object that specifies how to paint the outline of the link's arrowhead shape.</summary>
		/// <param name="value" type="Object">An object specifying the outline of the shape.</param>
	},
	setHeadStrokeDashStyle: function(value) {
		/// <summary>Sets an object that specifies the effective line dash pattern of the outline of the link's arrowhead shape.</summary>
		/// <param name="value" type="MindFusion.Drawing.DashStyle">An object specifying the effective line dash pattern of the outline of the shape.</param>
	},
	setHeadStrokeThickness: function(value) {
		/// <summary>Sets a number that specifies the line thickness of the outline of the link's arrowhead shape.</summary>
		/// <param name="value" type="Number">A number specifying the line thickness of the outline of the shape.</param>
	},
	setOrigin: function(origin) {
		/// <summary>Sets the origin node of this link.</summary>
		/// <param name="origin" type="MindFusion.Diagramming.DiagramNode">The DiagramNode to set&#160;as origin of this link.</param>
	},
	setOriginAnchor: function(index) {
		/// <summary>Sets the anchor point to which a link is connected at its origin.</summary>
		/// <param name="index" type="Number">An integer value specifying the index of the origin anchor point.</param>
	},
	setSegmentCount: function(value) {
		/// <summary>Sets the number of segments that form the link's geometry.</summary>
		/// <param name="value" type="Number">An integer value specifying the number of segments of this link.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the type of link segments and how they are positioned relatively to each other.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LinkShape">One of the LinkShape enumeration values.</param>
	},
	setStartPoint: function(value) {
		/// <summary>Sets the first control point of this link.</summary>
		/// <param name="value" type="MindFusion.Drawing.Point">A Point instance containing the control point coordinates.</param>
	},
	setText: function(value) {
		/// <summary>Sets the text displayed over a link.</summary>
		/// <param name="value" type="String">A string containing the text.</param>
	},
	setTextAlignment: function(value) {
		/// <summary>Sets the link's text alignment.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">A member of the Alignment enumeration. The default value is Center.</param>
	},
	setTextStyle: function(value) {
		/// <summary>Sets the link's text placement and orientation.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LinkTextStyle">A member of the LinkTextStyle enumeration. Initialized with the value of LinkTextStyle.</param>
	},
	startDrag: function(ist) {
		/// <summary>DiagramItem.startDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateCanvasElements: function() {
		/// <summary>Updates the elements on the HTML Canvas.</summary>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateFromPoints: function() {
		/// <summary>Updates the link's internal state after the link's control points have been changed.</summary>
	},
};
MindFusion.Diagramming.DiagramLink.__class = true;

MindFusion.Diagramming.DiagramLink.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new DiagramLink instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.DiagramNode.prototype = {
	acceptLinks: function(outgoing) {
		/// <summary>Determines whether the node can be connected with links of the specified type.</summary>
		/// <param name="outgoing" type="Boolean">true to check for outgoing links; otherwise, false.</param>
		/// <returns type="Boolean">true if the node accepts connections of the specified type; otherwise, false.</returns>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	attach: function(subordinate) {
		/// <summary>Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it.</summary>
		/// <param name="subordinate" type="MindFusion.Diagramming.DiagramNode">A DiagramNode instance specifying the node that should be attached.</param>
	},
	attachTo: function(node) {
		/// <summary>Attaches this node to the specified master node so that when the master is moved, the attached node follows it.</summary>
		/// <param name="node" type="MindFusion.Diagramming.DiagramNode">A DiagramNode instance specifying the master node.</param>
	},
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The point to check.</param>
		/// <returns type="Boolean">true it this node contains the specified point; otherwise, false.</returns>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point.</summary>
		/// <param name="link" type="MindFusion.Diagramming.DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">true if link is an incoming link, otherwise, false.</param>
		/// <returns type="MindFusion.Diagramming.ConnectionPoint"></returns>
	},
	detach: function() {
		/// <summary>Detaches this node from its current master node.</summary>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getAllowIncomingLinks: function() {
		/// <summary>Gets a value indicating whether users are allowed to draw incoming links to this node.</summary>
		/// <returns type="Boolean">true if users are allowed to draw incoming links to this node; otherwise, false.</returns>
	},
	getAllowOutgoingLinks: function() {
		/// <summary>Sets a value indicating whether users are allowed to draw outgoing links to this node.</summary>
		/// <returns type="Boolean">true if users are allowed to draw outgoing links to this node; otherwise, false.</returns>
	},
	getAnchorPattern: function() {
		/// <summary>Gets the anchor points to which links are attached when connected to this node.</summary>
		/// <returns type="MindFusion.Diagramming.AnchorPattern">An AnchorPattern object that defines the anchor points for this node.</returns>
	},
	getAttachedNodes: function() {
		/// <summary>Returns the nodes attached to this node.</summary>
		/// <returns type="Array">An array of nodes attached to this node via the attach or attachTo methods.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the rectangle that defines the position of the diagram node.</summary>
		/// <returns type="MindFusion.Drawing.Rect">The node's bounding rectangle.</returns>
	},
	getCenter: function() {
		/// <summary>Gets the center of this node's bounding rectangle.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point object representing the center point of this node.</returns>
	},
	getEffectiveEffects: function() {
		/// <summary>Gets the effects that should be applied to this item.</summary>
		/// <returns type="Array">An array with the effective node effects.</returns>
	},
	getEffects: function() {
		/// <summary>Gets an array with all effects applied to this node.</summary>
		/// <returns type="Array">An array with all node effects.</returns>
	},
	getEnabledHandles: function() {
		/// <summary>Gets the kinds of modifications that end-users are permitted to perform on the node.</summary>
		/// <returns type="MindFusion.Diagramming.AdjustmentHandles">A combination of the AdjustmentHandles enumeration members.</returns>
	},
	getExpandable: function() {
		/// <summary>Gets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.</summary>
		/// <returns type="Boolean">true if users are allowed to expand/collapse the tree branch, otherwise false.</returns>
	},
	getExpanded: function() {
		/// <summary>Gets a value indicating whether the tree branch starting at this node is expanded.</summary>
		/// <returns type="Boolean">true if the branch starting at this node is expanded; otherwise, false.</returns>
	},
	getHandlesStyle: function() {
		/// <summary>Gets a value indicating how the node adjustment handles behave and what do they look like.</summary>
		/// <returns type="MindFusion.Diagramming.HandlesStyle">A member of the HandlesStyle enumeration. The default value is SquareHandles.</returns>
	},
	getIncomingLinks: function() {
		/// <summary>Gets the incoming links collection of this DiagramNode.</summary>
		/// <returns type="Array">An array with the incoming DiagramLink-s.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the segment defined by the specified point pair and the node's outline.</summary>
		/// <param name="point1" type="MindFusion.Drawing.Point">The first Point of the segment.</param>
		/// <param name="point2" type="MindFusion.Drawing.Point">The second Point of the segment.</param>
		/// <returns type="MindFusion.Drawing.Point">A Point object representing the intersection point.</returns>
	},
	getMasterNode: function() {
		/// <summary>Returns the node to which this node is attached.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">A DiagramNode reference specifying the node to which this node has been previously attached via the attach or attachTo method.</returns>
	},
	getObstacle: function() {
		/// <summary>Gets a value indicating whether this node is considered an obstacle by the link-routing algorithm.</summary>
		/// <returns type="Boolean">true if routed links look for a path going around this node; false lets links cross the node. The default value is true.</returns>
	},
	getOutgoingLinks: function() {
		/// <summary>Gets the outgoing links collection of this node.</summary>
		/// <returns type="Array">An array with the outgoing DiagramLink-s.</returns>
	},
	getOutline: function() {
		/// <summary>Gets the bounding rectangle of this node.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A rectangle.</returns>
	},
	getRotatedBounds: function() {
		/// <summary>Gets the bounding rectangle of this item when it is rotated.</summary>
		/// <returns type="MindFusion.Drawing.Rect">that bounds the rotated shape of the item.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets the angle at which this node is rotated.</summary>
		/// <returns type="Number">A Number specifying the rotation angle. The default is 0.</returns>
	},
	getShowDeleteButton: function() {
		/// <summary>Gets a value indicating whether this node displays a delete button.</summary>
		/// <returns type="Boolean">true to display delete button for the node, or false otherwise.</returns>
	},
	getTopLevel: function() {
		/// <summary>DiagramItem.getTopLevel override.</summary>
		/// <returns type="Boolean"></returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramItem.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	raiseClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been clicked.</summary>
		/// <param name="mousePosition" type="MindFusion.Drawing.Point">The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	raiseDoubleClicked: function(mousePosition, mouseButton) {
		/// <summary>Raises an event which notifies that a node has been double-clicked.</summary>
		/// <param name="mousePosition" type="MindFusion.Drawing.Point">The position of the mouse.</param>
		/// <param name="mouseButton" type="MouseButton">A value identifying the clicked mouse button.</param>
	},
	removeCanvasElements: function() {
		/// <summary>DiagramItem.removeCanvasElements override.</summary>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="DiagramNodeState">A DiagramLinkState instance.</param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="DiagramNodeState">A DiagramLinkState instance.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the item content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setAllowIncomingLinks: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to draw incoming link-s to this node.</summary>
		/// <param name="value" type="Boolean">true to let users draw incoming links to this node; otherwise, false. The default is true.</param>
	},
	setAllowOutgoingLinks: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to draw outgoing link-s from this node.</summary>
		/// <param name="value" type="Boolean">true to let users draw outgoing links to this node; otherwise, false. The default is true.</param>
	},
	setAnchorPattern: function(value) {
		/// <summary>Sets the anchor points to which links are attached when connected to this node.</summary>
		/// <param name="value" type="MindFusion.Diagramming.AnchorPattern">An AnchorPattern object that defines the anchor points for this node.</param>
	},
	setBounds: function(bounds, updateDependencies) {
		/// <summary>Sets the rectangle that defines the position of the diagram node.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">The node's bounding rectangle.</param>
		/// <param name="updateDependencies" type="Boolean" optional="true">Optional. true if links and attachments must be updated too, or false otherwise.</param>
	},
	setEnabledHandles: function(value) {
		/// <summary>Sets the kinds of modifications that end-users are permitted to perform on the node.</summary>
		/// <param name="value" type="MindFusion.Diagramming.AdjustmentHandles">A combination of the AdjustmentHandles enumeration members. The default is AdjustmentHandles.All.</param>
	},
	setExpandable: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node.</summary>
		/// <param name="value" type="Boolean">true to display expand/collapse button beside the node, otherwise false.</param>
	},
	setExpanded: function(value) {
		/// <summary>Expands or collapses the tree branch that starts at this node.</summary>
		/// <param name="value" type="Boolean">true if the branch starting at this node should be expanded; otherwise, false.</param>
	},
	setHandlesStyle: function(value) {
		/// <summary>Sets a value indicating how the node adjustment handles behave and what do they look like.</summary>
		/// <param name="value" type="MindFusion.Diagramming.HandlesStyle">A member of the HandlesStyle enumeration.</param>
	},
	setObstacle: function(value) {
		/// <summary>Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm.</summary>
		/// <param name="value" type="Boolean">true makes routed links look for a path going around this node; false lets links cross the node. The default value is true.</param>
	},
	setRotationAngle: function(value) {
		/// <summary>Sets the angle at which this node is rotated.</summary>
		/// <param name="value" type="Number">A Number specifying the rotation angle. The default is 0.</param>
	},
	setShowDeleteButton: function(value) {
		/// <summary>Sets a value indicating whether this node displays a delete button.</summary>
		/// <param name="value" type="Boolean">true to display delete button for the node, or false otherwise.</param>
	},
	startDrag: function(ist) {
		/// <summary>DiagramItem.startDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	}
};
MindFusion.Diagramming.DiagramNode.__class = true;

MindFusion.Diagramming.DoNothingBehavior.prototype = {
	setMouseCursor: function(point, startInteraction) {
		/// <summary>BehaviorBase.setMouseCursor override.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point"></param>
		/// <param name="startInteraction" type="Object"></param>
	}
};
MindFusion.Diagramming.DoNothingBehavior.__class = true;

MindFusion.Diagramming.DrawLinksBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.DrawLinksBehavior.__class = true;

MindFusion.Diagramming.DrawNodesBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.DrawNodesBehavior.__class = true;

MindFusion.Diagramming.DrawShapesBehavior.prototype = {
	createNode: function() {
		/// <summary>DrawNodesBehavior.CreateNode override.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">An instance of the DiagramNode class.</returns>
	}
};
MindFusion.Diagramming.DrawShapesBehavior.__class = true;

MindFusion.Diagramming.DummyNode.prototype = {
};
MindFusion.Diagramming.DummyNode.__class = true;

MindFusion.Diagramming.EffectPhase.prototype = {
	AfterFill: 0,
	AfterOutline: 1,
	BeforeFill: 2
};
MindFusion.Diagramming.EffectPhase.__enum = true;

MindFusion.Diagramming.Events.prototype = {
};
MindFusion.Diagramming.Events.__class = true;

MindFusion.Diagramming.Factory.prototype = {
	createContainerNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new ContainerNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Specifies the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. The height of the new node.</param>
		/// <returns type="MindFusion.Diagramming.ContainerNode">The newly created ContainerNode instance.</returns>
	},
	createDiagramLink: function(origin, destination) {
		/// <summary>Creates a new DiagramLink instance between the specified nodes&#160;and adds it to the links collection of the underlying diagram.</summary>
		/// <param name="origin" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The origin node.</param>
		/// <param name="destination" type="MindFusion.Diagramming.DiagramNode" optional="true">Optional. The destination node.</param>
		/// <returns type="MindFusion.Diagramming.DiagramLink">The newly created DiagramLink instance.</returns>
	},
	createShapeNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Sets the bounds of the shape to create.</param>
		/// <param name="x" type="Number" optional="true">Optional. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. The height of the new node.</param>
		/// <returns type="MindFusion.Diagramming.ShapeNode">The newly created ShapeNode instance.</returns>
	},
	createSvgNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new SvgNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Sets the bounds of the shape to create.</param>
		/// <param name="x" type="Number" optional="true">Optional. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. The height of the new node.</param>
		/// <returns type="MindFusion.Diagramming.SvgNode">The newly created SvgNode instance.</returns>
	},
	createTableNode: function(bounds, x, y, width, height) {
		/// <summary>Creates a new TableNode instance and adds it to the nodes collection of the underlying diagram.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect" optional="true">Optional. Specifies the bounding rectangle of the new node.</param>
		/// <param name="x" type="Number" optional="true">Optional. The x-coordinate of the upper-left corner of the new node.</param>
		/// <param name="y" type="Number" optional="true">Optional. The y-coordinate of the upper-left corner of the new node.</param>
		/// <param name="width" type="Number" optional="true">Optional. The width of the new node.</param>
		/// <param name="height" type="Number" optional="true">Optional. The height of the new node.</param>
		/// <returns type="MindFusion.Diagramming.TableNode">The newly created TableNode instance.</returns>
	}
};
MindFusion.Diagramming.Factory.__class = true;

MindFusion.Diagramming.FitSize.prototype = {
	KeepHeight: 0,
	KeepRatio: 1,
	KeepWidth: 2
};
MindFusion.Diagramming.FitSize.__enum = true;

MindFusion.Diagramming.FoldContainerCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.FoldContainerCommand.__class = true;

MindFusion.Diagramming.FreeFormNode.prototype = {
	containsPoint: function(point) {
		/// <summary>DiagramItem.containsPoint override.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The point to check.</param>
		/// <returns type="Boolean">true it this node contains the specified point; otherwise, false.</returns>
	},
	endDrag: function(ist) {
		/// <summary>DiagramNode.endDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	getClosed: function() {
		/// <summary>Gets if the node's shape is closed.</summary>
		/// <returns type="Boolean">true it this node has a closed shape, or false otherwise.</returns>
	},
	getOutline: function() {
		/// <summary>DiagramNode.getOutline&#160;override. Gets the outline of this node.</summary>
		/// <returns type="Array">An array of points.</returns>
	},
	getPoints: function() {
		/// <summary>Gets the node's outline points.</summary>
		/// <returns type="Array">An array of MindFusion.Drawing.Point objects.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this FreeFormNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setClosed: function(value) {
		/// <summary>Sets if the node's shape is closed.</summary>
		/// <param name="value" type="Boolean">true it this node has a closed shape, or false otherwise.</param>
	},
	setPoints: function(value) {
		/// <summary>Sets the node's outline points.</summary>
		/// <param name="value" type="Array">An array of MindFusion.Drawing.Point objects.</param>
	},
	startDrag: function(ist) {
		/// <summary>DiagramNode.startDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramNode.updateDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateFromPoints: function(relations, path) {
		/// <summary>Updates the node's internal state after its points have changed.</summary>
		/// <param name="relations" type="void"></param>
		/// <param name="path" type="void"></param>
	},
};
MindFusion.Diagramming.FreeFormNode.__class = true;

MindFusion.Diagramming.FreeFormNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new FreeFormNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.GlassEffect.prototype = {
	getGlowColor: function() {
		/// <summary>Gets the color of the glow portion of the effect.</summary>
		/// <returns type="String">A string specifying the color name or hexadecimal value. The default value is "white".</returns>
	},
	getReflectionColor: function() {
		/// <summary>Gets the color of the reflection portion of the effect.</summary>
		/// <returns type="String">A string specifying the color name or hexadecimal value. The default value is "white".</returns>
	},
	getType: function() {
		/// <summary>Gets the type of the glass effect.</summary>
		/// <returns type="MindFusion.Diagramming.GlassEffectType">A member of the GlassEffectType enumeration. The default is Type1.</returns>
	},
	getUsePenAsGlow: function() {
		/// <summary>Gets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node.</summary>
		/// <returns type="Boolean">true to ignore GlowColor and use the node's stroke color for the effect glow; otherwise, false.</returns>
	},
	setGlowColor: function(value) {
		/// <summary>Sets the color of the glow portion of the effect.</summary>
		/// <param name="value" type="String">A string specifying the color name or hexadecimal value. The default value is "white".</param>
	},
	setReflectionColor: function(value) {
		/// <summary>Sets the color of the reflection portion of the effect.</summary>
		/// <param name="value" type="String">A string specifying the color name or hexadecimal value. The default value is "white".</param>
	},
	setType: function(value) {
		/// <summary>Sets the type of the glass effect.</summary>
		/// <param name="value" type="MindFusion.Diagramming.GlassEffectType">A member of the GlassEffectType enumeration. The default is Type1.</param>
	},
	setUsePenAsGlow: function(value) {
		/// <summary>Sets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node.</summary>
		/// <param name="value" type="Boolean">true to ignore GlowColor and use the node's stroke color for the effect glow; otherwise, false.</param>
	}
};
MindFusion.Diagramming.GlassEffect.__class = true;

MindFusion.Diagramming.GlassEffectType.prototype = {
	Type1: 0,
	Type2: 1,
	Type3: 2,
	Type4: 3
};
MindFusion.Diagramming.GlassEffectType.__enum = true;

MindFusion.Diagramming.GridColumn.prototype = {
	getLengthType: function() {
		/// <summary>Gets how GridPanel determines the width of this column.</summary>
		/// <returns type="MindFusion.Diagramming.LengthType">A member of the LengthType enumeration.</returns>
	},
	getWidth: function() {
		/// <summary>Gets fixed width for this column.</summary>
		/// <returns type="Number">A number specifying the column's width.</returns>
	},
	setLengthType: function(value) {
		/// <summary>Sets how GridPanel determines the width of this column.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LengthType">A member of the LengthType enumeration.</param>
	},
	setWidth: function(value) {
		/// <summary>Sets fixed width for this column.</summary>
		/// <param name="value" type="Number">A number specifying the column's width.</param>
	}
};
MindFusion.Diagramming.GridColumn.__class = true;

MindFusion.Diagramming.GridPanel.prototype = {
	getColumns: function() {
		/// <summary>Gets a list of GridColumn objects specifying column attributes.</summary>
		/// <returns type="Array">An array containing the grid columns.</returns>
	},
	getRows: function() {
		/// <summary>Gets a list of GridRow objects specifying row attributes.</summary>
		/// <returns type="Array">An array containing the grid rows.</returns>
	}
};
MindFusion.Diagramming.GridPanel.__class = true;

MindFusion.Diagramming.GridRouter.prototype = {
	getCrossingCost: function() {
		/// <summary>Gets a value added to the total cost of a route which causes a link to cross another link.</summary>
		/// <returns type="Number">A number specifying the crossing cost. The default is 4.</returns>
	},
	getGridSize: function() {
		/// <summary>Gets the size of the pieces of the routing grid.</summary>
		/// <returns type="Number">A number specifying the size of the pieces of the routing grid. The default is 4.</returns>
	},
	getLengthCost: function() {
		/// <summary>Gets a value added to the total cost of a route for each piece of the routing grid occupied by the route.</summary>
		/// <returns type="Number">A number specifying the length cost. The default is 2.</returns>
	},
	getNodeVicinityCost: function() {
		/// <summary>Gets a value added to the total cost of a route if the route passes too close to a node.</summary>
		/// <returns type="Number">A number specifying the node vicinity cost. The default is 2.</returns>
	},
	getNodeVicinitySize: function() {
		/// <summary>Gets the size of a buffer zone around a node for which routes get a penalty cost if they pass through it.</summary>
		/// <returns type="Number">A number specifying the size of the buffer area in which passing routes receive a penalty cost. The default is 12.</returns>
	},
	getTurnCost: function() {
		/// <summary>Gets a value added to the total cost of a route if the route passes too close to a node.</summary>
		/// <returns type="Number">A number specifying the node vicinity cost. The default is 2.</returns>
	},
	setCrossingCost: function(value) {
		/// <summary>Sets a value added to the total cost of a route which causes a link to cross another link.</summary>
		/// <param name="value" type="Number">A number specifying the crossing cost. The default is 4.</param>
	},
	setGridSize: function(value) {
		/// <summary>Sets the size of the pieces of the routing grid.</summary>
		/// <param name="value" type="Number">A number specifying the size of the pieces of the routing grid. The default is 4.</param>
	},
	setLengthCost: function(value) {
		/// <summary>Sets a value added to the total cost of a route for each piece of the routing grid occupied by the route.</summary>
		/// <param name="value" type="Number">A number specifying the length cost. The default is 2.</param>
	},
	setNodeVicinityCost: function(value) {
		/// <summary>Sets a value added to the total cost of a route if the route passes too close to a node.</summary>
		/// <param name="value" type="Number">A number specifying the node vicinity cost. The default is 2.</param>
	},
	setNodeVicinitySize: function(value) {
		/// <summary>Sets the size of a buffer zone around a node for which routes get a penalty cost if they pass through it.</summary>
		/// <param name="value" type="Number">A number specifying the size of the buffer area in which passing routes receive a penalty cost. The default is 12.</param>
	},
	setTurnCost: function(value) {
		/// <summary>Sets a value added to the total cost of a route if the route passes too close to a node.</summary>
		/// <param name="value" type="Number">A number specifying the node vicinity cost. The default is 2.</param>
	}
};
MindFusion.Diagramming.GridRouter.__class = true;

MindFusion.Diagramming.GridRow.prototype = {
	getHeight: function() {
		/// <summary>Gets fixed height for this row.</summary>
		/// <returns type="Number">A number specifying the rows's height.</returns>
	},
	getLengthType: function() {
		/// <summary>Gets how GridPanel determines the height of this row.</summary>
		/// <returns type="MindFusion.Diagramming.LengthType">A member of the LengthType enumeration.</returns>
	},
	setHeight: function(value) {
		/// <summary>Sets fixed height for this row.</summary>
		/// <param name="value" type="Number">A number specifying the rows's height.</param>
	},
	setLengthType: function(value) {
		/// <summary>Sets how GridPanel determines the height of this row.</summary>
		/// <param name="value" type="MindFusion.Diagramming.LengthType">A member of the LengthType enumeration.</param>
	}
};
MindFusion.Diagramming.GridRow.__class = true;

MindFusion.Diagramming.GridStyle.prototype = {
	Crosses: 0,
	Lines: 1,
	Points: 2
};
MindFusion.Diagramming.GridStyle.__enum = true;

MindFusion.Diagramming.HandlesStyle.prototype = {
	Custom: 0,
	DashFrame: 1,
	EasyMove: 2,
	HatchFrame: 3,
	HatchHandles: 4,
	HatchHandles2: 5,
	HatchHandles3: 6,
	Invisible: 7,
	InvisibleMove: 8,
	MoveOnly: 9,
	RoundAndSquare: 10,
	RoundAndSquare2: 11,
	SquareHandles: 12,
	SquareHandles2: 13
};
MindFusion.Diagramming.HandlesStyle.__enum = true;

MindFusion.Diagramming.HeaderEventArgs.prototype = {
	getHeader: function() {
		/// <summary>Gets the header related to the event.</summary>
	}
};
MindFusion.Diagramming.HeaderEventArgs.__class = true;

MindFusion.Diagramming.HeaderResizeEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the resize.</summary>
	},
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true to cancel the operation; otherwise, false.</returns>
	},
	getHorizontal: function() {
		/// <summary>Gets a value indicating whether the user resizes the header horizontally.</summary>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to cancel the operation; otherwise, false.</param>
	}
};
MindFusion.Diagramming.HeaderResizeEventArgs.__class = true;

MindFusion.Diagramming.InplaceEditEventArgs.prototype = {
	getBounds: function() {
		/// <summary>Gets the bounds of the item being edited.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance</returns>
	},
	getControl: function() {
		/// <summary>Gets the control used to edit the item's text.</summary>
		/// <returns type="Element">Html DOM element to use as editor.</returns>
	},
	getItem: function() {
		/// <summary>Gets a reference to the item being edited.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramItem">A DiagramItem instance.</returns>
	},
	setControl: function(value) {
		/// <summary>Sets the control used to edit the item's text.</summary>
		/// <param name="value" type="Element">Html DOM element to use as editor.</param>
	}
};
MindFusion.Diagramming.InplaceEditEventArgs.__class = true;

MindFusion.Diagramming.Interaction.prototype = {
};
MindFusion.Diagramming.Interaction.__class = true;

MindFusion.Diagramming.InteractionState.prototype = {
	cancel: function(diagram) {
		/// <summary>Cancels the user interaction. Call this method to cancel interaction, usually in response to the user clicking the right mouse button while dragging.</summary>
		/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram, at which the action is performed.</param>
	},
	commit: function(point) {
		/// <summary>Invoked to commit the changes made by the user.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
	},
	isAllowed: function(point) {
		/// <summary>Checks whether the current interaction can be completed at the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
		/// <returns type="Boolean"></returns>
	},
	start: function() {
		/// <summary>This method is invoked in the beginning of the interaction, usually when the user presses the left mouse button over a modification handle.</summary>
	},
	update: function(point) {
		/// <summary>This method is invoked to update the interaction state, usually in response to the user moving the mouse after the modification has started.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance indicating the location of the cursor, in document coordinates.</param>
	}
};
MindFusion.Diagramming.InteractionState.__class = true;

MindFusion.Diagramming.ItemEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node.</summary>
	},
	getAdjustmentHandle: function() {
		/// <summary>Gets the adjustment handle being moved by the user.</summary>
		/// <returns type="MindFusion.Diagramming.AdjustmentHandles">One of the AdjustmentHandles enumeration values.</returns>
	},
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true if the current operation is allowed; otherwise, false.</returns>
	},
	getContext: function() {
		/// <summary>Gets the canvas rendering context.</summary>
		/// <returns type="CanvasRenderingContext2D">A rendering context used to draw on the Canvas element.</returns>
	},
	getHandled: function() {
		/// <summary>Gets a value indicating whether the event has been handled.</summary>
	},
	getItem: function() {
		/// <summary>Gets the diagram item for which the event was raised.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramItem">An instance of the DiagramItem class.</returns>
	},
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point instance.</returns>
	},
	getNewText: function() {
		/// <summary>Gets the text that has just been entered by the user.</summary>
		/// <returns type="String">A string specifying the new text of the node.</returns>
	},
	getOldText: function() {
		/// <summary>Gets the text that had been displayed in the node before the user edited it.</summary>
		/// <returns type="String">A string specifying the old text of the node.</returns>
	},
	setAdjustmentHandle: function(value) {
		/// <summary>Sets the adjustment handle when implementing custom hit-testing.</summary>
		/// <param name="value" type="Number">Index of the adjusment handle under mouse pointer.</param>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to allow the current operation; otherwise, false.</param>
	},
	setHandled: function(value) {
		/// <summary>Sets a value indicating whether the event has been handled.</summary>
		/// <param name="value" type="Boolean">true to indicate that the event has been handled, or false otherwise.</param>
	}
};
MindFusion.Diagramming.ItemEventArgs.__class = true;

MindFusion.Diagramming.LengthType.prototype = {
	Auto: 0,
	Relative: 1
};
MindFusion.Diagramming.LengthType.__enum = true;

MindFusion.Diagramming.LinkCrossings.prototype = {
	Arcs: 0,
	Cut: 1,
	Straight: 2
};
MindFusion.Diagramming.LinkCrossings.__enum = true;

MindFusion.Diagramming.LinkEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the link.</summary>
	},
	getAdjustmentHandle: function() {
		/// <summary>Gets or sets the adjustment handle being moved by the user.</summary>
		/// <returns type="MindFusion.Diagramming.AdjustmentHandle">One of the AdjustmentHandle enumeration values.</returns>
	},
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true if the current operation is allowed; otherwise, false.</returns>
	},
	getLabel: function() {
		/// <summary>Gets the link label for which the event was raised.</summary>
		/// <returns type="MindFusion.Diagramming.LinkLabel">A LinkLabel instance.</returns>
	},
	getLink: function() {
		/// <summary>Gets the link for which the event was raised.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramLink">A DiagramLink instance.</returns>
	},
	getMouseButton: function() {
		/// <summary>Gets which mouse button was pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point instance that indicates the mouse position.</returns>
	},
	getNewText: function() {
		/// <summary>Gets the text that has just been entered by the user.</summary>
		/// <returns type="String">A string specifying the new text of the link.</returns>
	},
	getOldText: function() {
		/// <summary>Gets the text that had been displayed as a link label before the user edited it.</summary>
		/// <returns type="String">A string specifying the old text of the link.</returns>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to allow the current operation; otherwise, false.</param>
	}
};
MindFusion.Diagramming.LinkEventArgs.__class = true;

MindFusion.Diagramming.LinkLabel.prototype = {
	getAutoArrange: function() {
		/// <summary>Gets a value indicating whether the label can be auto arranged.</summary>
		/// <returns type="Boolean">true if the label can be auto arranged, otherwise false.</returns>
	},
	getBrush: function() {
		/// <summary>Gets the brush used to draw the label's background.</summary>
		/// <returns type="Object">An object specifying the label's background.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font used to render this item's text.</summary>
		/// <returns type="MindFusion.Drawing.Font">A Font instance.</returns>
	},
	getHorizontalAlign: function() {
		/// <summary>Gets the label's horizontal align.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getMargin: function() {
		/// <summary>Gets the label's margin.</summary>
		/// <returns type="MindFusion.Drawing.Thickness">A Thickness instance specifying the size of margin on all sides of label.</returns>
	},
	getText: function() {
		/// <summary>Gets the item's text.</summary>
		/// <returns type="String">The text.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets a string specifying the color of the text of this item.</summary>
		/// <returns type="String">A string value identifying the color of the text.</returns>
	},
	getVerticalAlign: function() {
		/// <summary>Gets the label's vertical align.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	setAutoArrange: function(value) {
		/// <summary>Sets a value indicating whether the label can be auto arranged.</summary>
		/// <param name="value" type="Boolean">true if the label can be auto arranged, otherwise false.</param>
	},
	setBrush: function(value) {
		/// <summary>Sets the brush used to draw the label's background.</summary>
		/// <param name="value" type="Object">A Brush object specifying the label's background.</param>
	},
	setControlPointPosition: function(controlPoint, dx, dy) {
		/// <summary>Positions this label relatively to the specified control point.</summary>
		/// <param name="controlPoint" type="Number">The control point index.</param>
		/// <param name="dx" type="Number">Horizontal offset from the segment center.</param>
		/// <param name="dy" type="Number">Vertical offset from the segment center.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font used to render this item's text.</summary>
		/// <param name="value" type="MindFusion.Drawing.Font">A Font instance.</param>
	},
	setHorizontalAlign: function(value) {
		/// <summary>Sets the label's horizontal align.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setLinkLengthPosition: function(lengthFactor) {
		/// <summary>Positions this label relatively to the link length.</summary>
		/// <param name="lengthFactor" type="Number">A value between 0 and 1 specifying the position of the label relatively to the link's length.</param>
	},
	setMargin: function(value) {
		/// <summary>Sets the label's margin.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Thickness">A Thickness instance specifying the size of margin on all sides of label.</param>
	},
	setSegmentPosition: function(segment, dx, dy) {
		/// <summary>Positions this label relatively to the specified link segment.</summary>
		/// <param name="segment" type="Number">The segment index.</param>
		/// <param name="dx" type="Number">Horizontal offset from the segment center.</param>
		/// <param name="dy" type="Number">Vertical offset from the segment center.</param>
	},
	setText: function(value) {
		/// <summary>Sets the item's text.</summary>
		/// <param name="value" type="String">The text.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets a string specifying the color of the text of this item.</summary>
		/// <param name="value" type="String">A string value identifying the color of the text.</param>
	},
	setVerticalAlign: function(value) {
		/// <summary>Sets the label's vertical align.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	}
};
MindFusion.Diagramming.LinkLabel.__class = true;

MindFusion.Diagramming.LinkNodesBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.LinkNodesBehavior.__class = true;

MindFusion.Diagramming.LinkShape.prototype = {
	Bezier: 0,
	Cascading: 1,
	Polyline: 2,
	Spline: 3
};
MindFusion.Diagramming.LinkShape.__enum = true;

MindFusion.Diagramming.LinkShapesBehavior.prototype = {
	createNode: function() {
		/// <summary>LinkNodesBehavior.CreateNode override.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">An instance of the DiagramNode class.</returns>
	}
};
MindFusion.Diagramming.LinkShapesBehavior.__class = true;

MindFusion.Diagramming.LinkTextStyle.prototype = {
	Center: 0,
	Follow: 1,
	MiddleSegment: 2,
	MiddleSegmentRotated: 3,
	OverLongestSegment: 4,
	Rotate: 5
};
MindFusion.Diagramming.LinkTextStyle.__enum = true;

MindFusion.Diagramming.MagnifyBehavior.prototype = {
	onMouseDown: function(e) {
		/// <summary>BehaviorBase.onMouseDown override.</summary>
		/// <param name="e" type="MouseButtonEventArgs">A MouseButtonEventArgs that contains the event data.</param>
	},
	onMouseMove: function(e) {
		/// <summary>BehaviorBase.onMouseMove override.</summary>
		/// <param name="e" type="MouseEventArgs">A MouseEventArgs that contains the event data.</param>
	},
	onMouseUp: function(e) {
		/// <summary>BehaviorBase.onMouseUp override.</summary>
		/// <param name="e" type="MouseButtonEventArgs">A MouseButtonEventArgs that contains the event data.</param>
	}
};
MindFusion.Diagramming.MagnifyBehavior.__class = true;

MindFusion.Diagramming.Manipulator.prototype = {
};
MindFusion.Diagramming.Manipulator.__class = true;

MindFusion.Diagramming.MarkStyle.prototype = {
	Circle: 0,
	Cross: 1,
	None: 2,
	Rectangle: 3,
	X: 4
};
MindFusion.Diagramming.MarkStyle.__enum = true;

MindFusion.Diagramming.ModificationStart.prototype = {
	AutoHandles: 0,
	SelectedOnly: 1
};
MindFusion.Diagramming.ModificationStart.__enum = true;

MindFusion.Diagramming.ModifierKeyAction.prototype = {
	Magnify: 0,
	None: 1,
	OverrideBehavior: 2,
	Pan: 3,
	Select: 4
};
MindFusion.Diagramming.ModifierKeyAction.__enum = true;

MindFusion.Diagramming.ModifierKeyActions.prototype = {
	getAlt: function() {
		/// <summary>Gets the action triggered by the ALT key.</summary>
		/// <returns type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration.</returns>
	},
	getControl: function() {
		/// <summary>Gets the action triggered by the CTRL key.</summary>
		/// <returns type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration.</returns>
	},
	getShift: function() {
		/// <summary>Gets the action triggered by the SHIFT key.</summary>
		/// <returns type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration.</returns>
	},
	setAlt: function(value) {
		/// <summary>Sets the action triggered by the ALT key.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration. The default is Pan.</param>
	},
	setControl: function(value) {
		/// <summary>Sets the action triggered by the CTRL key.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration. The default is Select.</param>
	},
	setShift: function(value) {
		/// <summary>Sets the action triggered by the SHIFT key.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ModifierKeyAction">A member of the ModifierKeyAction enumeration. The default value is OverrideBehavior.</param>
	}
};
MindFusion.Diagramming.ModifierKeyActions.__class = true;

MindFusion.Diagramming.ModifyBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.ModifyBehavior.__class = true;

MindFusion.Diagramming.ModifyLinkController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.ModifyLinkController.__class = true;

MindFusion.Diagramming.ModifyNodeController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.ModifyNodeController.__class = true;

MindFusion.Diagramming.ModifySelectionController.prototype = {
	commit: function(position) {
		/// <summary>SinglePointerController.commit override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>SinglePointerController.validate override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.ModifySelectionController.__class = true;

MindFusion.Diagramming.MouseButtonActions.prototype = {
	Cancel: 0,
	Draw: 1,
	Magnify: 2,
	None: 3,
	Pan: 4,
	Select: 5
};
MindFusion.Diagramming.MouseButtonActions.__enum = true;

MindFusion.Diagramming.MouseInputDispatcher.prototype = {
	onMouseDown: function(position, button) {
		/// <summary>Called when the user presses down a mouse button.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <param name="button" type="Number">0 for left button, 1 for middle button, 2 for right button.</param>
	},
	onMouseMove: function(position) {
		/// <summary>Called when the user moves the mouse.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	onMouseUp: function(position, button) {
		/// <summary>Called when the user releases a mouse button.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <param name="button" type="Number">0 for left button, 1 for middle button, 2 for right button.</param>
	}
};
MindFusion.Diagramming.MouseInputDispatcher.__class = true;

MindFusion.Diagramming.NodeEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the creation or modification of the node.</summary>
	},
	getAdjustmentHandle: function() {
		/// <summary>Gets the adjustment handle being moved by the user.</summary>
		/// <returns type="MindFusion.Diagramming.AdjustmentHandles">One of the AdjustmentHandles enumeration values.</returns>
	},
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true if the current operation is allowed; otherwise, false.</returns>
	},
	getContainer: function() {
		/// <summary>Gets the container a node has been added to or removed from.</summary>
		/// <returns type="MindFusion.Diagramming.ContainerNode">A ContainerNode instance.</returns>
	},
	getHyperlink: function() {
		/// <summary>Gets the hyperlink that was clicked inside a node.</summary>
		/// <returns type="String">The hyperlink that was clicked.</returns>
	},
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point instance.</returns>
	},
	getNewText: function() {
		/// <summary>Gets the text that has just been entered by the user.</summary>
		/// <returns type="String">A string specifying the new text of the node.</returns>
	},
	getNode: function() {
		/// <summary>Gets the node for which the event was raised.</summary>
		/// <returns type="MindFusion.Diagramming.DiagramNode">An instance of the DiagramNode class.</returns>
	},
	getOldText: function() {
		/// <summary>Gets the text that had been displayed in the node before the user edited it.</summary>
		/// <returns type="String">A string specifying the old text of the node.</returns>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to allow the current operation; otherwise, false.</param>
	}
};
MindFusion.Diagramming.NodeEventArgs.__class = true;

MindFusion.Diagramming.NodeListView.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the NodeListView.</summary>
		/// <param name="eventName" type="String">The name of the event. Currently supported events are controlLoaded and nodeSelected.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	addNode: function(node, caption) {
		/// <summary>Adds a node to the NodeListView.</summary>
		/// <param name="node" type="MindFusion.Diagramming.DiagramNode">The node to add.</param>
		/// <param name="caption" type="String" optional="true">Optional. The caption to display for the node.</param>
	},
	clearAll: function() {
		/// <summary>Removes all items from the NodeListView.</summary>
	},
	getDefaultNodeSize: function() {
		/// <summary>Gets the default size of the nodes in the list view.</summary>
		/// <returns type="MindFusion.Drawing.Size">The size.</returns>
	},
	getEnabled: function() {
		/// <summary>Checks if mouse events are enabled.</summary>
		/// <returns type="Boolean">true if handling of mouse events is enabled; otherwise, false.</returns>
	},
	getIconSize: function() {
		/// <summary>Gets the default size of the nodes in the list view.</summary>
		/// <returns type="MindFusion.Drawing.Size">The size.</returns>
	},
	getNodeAt: function(point) {
		/// <summary>Gets the item at the specified location.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The location where to look.</param>
		/// <returns type="MindFusion.Diagramming.DiagramNode">The item found.</returns>
	},
	getNodes: function() {
		/// <summary>Gets the nodes contained in this NodeListView.</summary>
		/// <returns type="Array">An array of all DiagramNodes in this NodeListView.</returns>
	},
	getOrientation: function() {
		/// <summary>Gets the orientation of the nodes' layout.</summary>
		/// <returns type="MindFusion.Diagramming.Orientation">A member of the Orientation enum.</returns>
	},
	getPadding: function() {
		/// <summary>Gets the space between the NodeListView control and its contents.</summary>
		/// <returns type="Number">he Padding that specifies the space between the NodeListView control and its contents.</returns>
	},
	getShapeLibraryLocation: function() {
		/// <summary>Gets the location of a shape library file containing custom shape definitions.It can be set to a full URL of the file, or a relative file path.</summary>
		/// <returns type="String">The location of a shape library file containing custom shape definitions.</returns>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the NodeListView's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">The id of the hidden field to flush the data to.</param>
	},
	selectItem: function(item) {
		/// <summary>Selects the specified item.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramNode">The item to select.</param>
	},
	setDefaultNodeSize: function(value) {
		/// <summary>Sets the default size of the nodes in the list view.</summary>
		/// <param name="value" type="MindFusion.Drawing.Size">The size.</param>
	},
	setEnabled: function(value) {
		/// <summary>Enables or disables handling of mouse events.</summary>
		/// <param name="value" type="Boolean">true if handling of mouse events is enabled; otherwise, false.</param>
	},
	setIconSize: function(value) {
		/// <summary>Sets the default size of the icons in the list view.</summary>
		/// <param name="value" type="MindFusion.Drawing.Size">The size.</param>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the nodes' layout.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Orientation">A member of the Orientation enum.</param>
	},
	setPadding: function(value) {
		/// <summary>Sets the space between the NodeListView control and its contents.</summary>
		/// <param name="value" type="Number">The Padding that specifies the space between the NodeListView control and its contents.</param>
	},
	setShapeLibraryLocation: function(value) {
		/// <summary>Sets the location of a shape library file containing custom shape definitions.It can be set to a full URL of the file, or a relative file path.</summary>
		/// <param name="value" type="String">The location of a shape library file containing custom shape definitions.</param>
	}
};
MindFusion.Diagramming.NodeListView.__class = true;

MindFusion.Diagramming.NodeListView.create = function(element) {
	/// <summary>Creates and initializes a new NodeListView from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the NodeListView should be attached to.</param>
	/// <returns type="MindFusion.Diagramming.NodeListView">A NodeListView object that represents the newly created list view.</returns>
};
MindFusion.Diagramming.NodeListView.find = function(id, parent) {
	/// <summary>Returns the specified NodeListView object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the nodeListView to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the nodeListView to find.</param>
	/// <returns type="MindFusion.Diagramming.NodeListView">A NodeListView object that contains the nodeListView requested by id, if found; otherwise, null.</returns>
};

MindFusion.Diagramming.Orientation.prototype = {
	Auto: 0,
	Horizontal: 1,
	Vertical: 2
};
MindFusion.Diagramming.Orientation.__enum = true;

MindFusion.Diagramming.Overview.prototype = {
	getAllowZoom: function() {
		/// <summary>Gets a value indicating whether users are allowed to zoom the diagram by resizing the overview's viewport tracker rectangle.</summary>
		/// <returns type="Boolean">true to let users zoom by resizing the tracker rectangle, or false otherwise.</returns>
	},
	getAutoScrollAmount: function() {
		/// <summary>Gets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</summary>
		/// <returns type="Number">A number specifying the amount by which to auto-scroll.</returns>
	},
	getEnabled: function() {
		/// <summary>Checks if mouse events are enabled.</summary>
		/// <returns type="Boolean">true if handling of mouse events is enabled; otherwise, false.</returns>
	},
	getScaleFactor: function() {
		/// <summary>Gets a fixed scale factor to be used when FitAll is disabled.</summary>
		/// <returns type="Number">A float value specifying the scale as percentage of diagram's size.</returns>
	},
	getScaleMode: function() {
		/// <summary>Gets a value indicating whether to fit the whole diagram inside the overview control.</summary>
		/// <returns type="MindFusion.Diagramming.ScaleMode">A member of the ScaleMode enumeration. The default value is FitAll.</returns>
	},
	getScrollX: function() {
		/// <summary>Gets the overview's horizontal scroll position.</summary>
		/// <returns type="Number">A number specifying the horizontal scroll position in the current unit of measure.</returns>
	},
	getScrollY: function() {
		/// <summary>Gets the overview's vertical scroll position.</summary>
		/// <returns type="Number">A number specifying the vertical scroll position in the current unit of measure.</returns>
	},
	getViewport: function() {
		/// <summary>Returns the visible portion of the diagram area.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance specifying the viewport coordinates.</returns>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Overview's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">The id of the hidden field to flush the data to.</param>
	},
	setAllowZoom: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to zoom the diagram by resizing the overview's viewport tracker rectangle.</summary>
		/// <param name="value" type="Boolean">true to let users zoom by resizing the tracker rectangle, or false otherwise.</param>
	},
	setAutoScrollAmount: function(value) {
		/// <summary>Sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing.</summary>
		/// <param name="value" type="Number">A number specifying the amount by which to auto-scroll.</param>
	},
	setDiagram: function(diagram) {
		/// <summary>Sets the Diagram shown by this Overview.</summary>
		/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram shown by the overview.</param>
	},
	setEnabled: function(value) {
		/// <summary>Enables or disables handling of mouse events.</summary>
		/// <param name="value" type="Boolean">true if handling of mouse events is enabled; otherwise, false.</param>
	},
	setScaleFactor: function(value) {
		/// <summary>Sets a fixed scale factor to be used when FitAll is disabled.</summary>
		/// <param name="value" type="Number">A float value specifying the scale as percentage of diagram's size.</param>
	},
	setScaleMode: function(value) {
		/// <summary>Sets a value indicating whether to fit the whole diagram inside the overview control.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ScaleMode">A member of the ScaleMode enumeration. The default value is FitAll.</param>
	}
};
MindFusion.Diagramming.Overview.__class = true;

MindFusion.Diagramming.Overview.create = function(element) {
	/// <summary>Creates and initializes a new Overview from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the overview should be attached to.</param>
	/// <returns type="MindFusion.Diagramming.Overview">A Overview object that represents the newly created overview.</returns>
};
MindFusion.Diagramming.Overview.find = function(id, parent) {
	/// <summary>Returns the specified Overview object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the overview to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the overview to find.</param>
	/// <returns type="MindFusion.Diagramming.Overview">An Overview object that contains the overview requested by id if found, or null otherwise.</returns>
};

MindFusion.Diagramming.PanBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.PanBehavior.__class = true;

MindFusion.Diagramming.PanController.prototype = {
	move: function(position) {
		/// <summary>SinglePointerController.move override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>SinglePointerController.start override.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	}
};
MindFusion.Diagramming.PanController.__class = true;

MindFusion.Diagramming.Panel.prototype = {
	getComponents: function() {
		/// <summary>Gets the child components of this panel.</summary>
		/// <returns type="Array">An array containing the child components of this panel.</returns>
	}
};
MindFusion.Diagramming.Panel.__class = true;

MindFusion.Diagramming.Path.prototype = {
	getLength: function() {
		/// <summary>Gets the length of the Path expressed as the number of links participating in it.</summary>
		/// <returns type="Number">An integer value that represents the number of edges (links) in the path.</returns>
	},
	getWeight: function(incNodes, incLinks) {
		/// <summary>Calculates the weight of this Path by accumulating the Weight of all participating diagram elements.</summary>
		/// <param name="incNodes" type="Boolean" optional="true">Optional. A boolean value specifying whether the Weight of DiagramNode elements should be considered.</param>
		/// <param name="incLinks" type="Boolean" optional="true">Optional. A boolean value specifying whether the Weight of DiagramLink elements should be considered.</param>
		/// <returns type="Number">A&#160;number that represents the total weight of the elements in this Path according to the incNodes and incLinks parameters.</returns>
	}
};
MindFusion.Diagramming.Path.__class = true;

MindFusion.Diagramming.PathFinder.prototype = {
	findAllCycles: function() {
		/// <summary>Finds all cycles in the underlying diagram.</summary>
		/// <returns type="Array">An array of Path objects; if no cycles are detected, the array is empty.</returns>
	},
	findAllPaths: function(from, to, maxPaths) {
		/// <summary>Finds and returns all paths that exist between two DiagramNode objects.</summary>
		/// <param name="from" type="DiagramNode">The first DiagramNode in the Path.</param>
		/// <param name="to" type="DiagramNode">The last DiagramNode in the Path.</param>
		/// <param name="maxPaths" type="Number" optional="true">Optional. The maximum number of paths to find.</param>
		/// <returns type="Array">An array of Path objects; if no paths are found, the array is empty.</returns>
	},
	findCycle: function(participant) {
		/// <summary>Detects whether the specified DiagramNode participates in a cycle.</summary>
		/// <param name="participant" type="DiagramNode">A DiagramNode element which should participate in the found cycle.</param>
		/// <returns type="MindFusion.Diagramming.Path">A Path instance that represents the found cycle; null if no cycle is detected.</returns>
	},
	findLongestPath: function(from, to) {
		/// <summary>Finds the longest path between the specified DiagramNode objects.</summary>
		/// <param name="from" type="DiagramNode" optional="true">Optional. The first DiagramNode element in the Path.</param>
		/// <param name="to" type="DiagramNode" optional="true">Optional. The last DiagramNode element in the Path.</param>
		/// <returns type="MindFusion.Diagramming.Path">A Path instance that represents the longest path found; null if there is no Path connecting from and to.</returns>
	},
	findShortestPath: function(from, to, useNodeWeights, useLinkWeights) {
		/// <summary>Finds the shortest path between two DiagramNode elements, optionally considering the Weight of nodes and / or&#160;links.</summary>
		/// <param name="from" type="DiagramNode">The first DiagramNode in the Path.</param>
		/// <param name="to" type="DiagramNode">The last DiagramNode in the Path.</param>
		/// <param name="useNodeWeights" type="Boolean" optional="true">Optional. If true, the Path with minimal total weight is found, summing the Weight of nodes in the Path.</param>
		/// <param name="useLinkWeights" type="Boolean" optional="true">Optional. If true, the Path with minimal total weight is found, summing the Weight of links in the Path.</param>
		/// <returns type="MindFusion.Diagramming.Path">A Path instance that represents the shortest Path found or null if there is no Path connecting from and to.</returns>
	}
};
MindFusion.Diagramming.PathFinder.__class = true;

MindFusion.Diagramming.RelativeToLink.prototype = {
	ControlPoint: 0,
	LinkLength: 1,
	Segment: 2
};
MindFusion.Diagramming.RelativeToLink.__enum = true;

MindFusion.Diagramming.RemoveItemCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.RemoveItemCommand.__class = true;

MindFusion.Diagramming.Router.prototype = {
};
MindFusion.Diagramming.Router.__class = true;

MindFusion.Diagramming.Ruler.prototype = {
	getBackColor: function() {
		/// <summary>Gets the background color of the control.</summary>
		/// <returns type="String">A string specifying the ruler's background color.</returns>
	},
	getEnableGuides: function() {
		/// <summary>Gets a value indicating whether the alignment guides are enabled.</summary>
		/// <returns type="Boolean">true to allow aligning diagram items using ruler guides, or false otherwise. The default is true.</returns>
	},
	getForeColor: function() {
		/// <summary>Gets the foreground color of the control.</summary>
		/// <returns type="String">A string specifying the ruler's foreground color.</returns>
	},
	getGuideColor: function() {
		/// <summary>Gets the color of the alignment guide lines.</summary>
		/// <returns type="String">A string specifying color of guide lines.</returns>
	},
	getHorizontalScaleVisible: function() {
		/// <summary>Gets a value iindicating whether the horizontal ruler scale is visible.</summary>
		/// <returns type="Boolean">true to display the horizontal scale, or false otherwise. The default is true.</returns>
	},
	getNegatedX: function() {
		/// <summary>Gets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left.</summary>
		/// <returns type="Boolean">true if the horizontal scale should show negated values, or false otherwise. The default value is false.</returns>
	},
	getNegatedY: function() {
		/// <summary>Gets whether the vertical scale should show negated values, simulating that the coordinate system's Y axis grows to the top.</summary>
		/// <returns type="Boolean">true if the vertical scale should show negated values, or false otherwise. The default value is false.</returns>
	},
	getPointerColor: function() {
		/// <summary>Gets the color of the mouse pointer's projections.</summary>
		/// <returns type="String">A string specifying the color of pointer projection lines.</returns>
	},
	getProjectionColor: function() {
		/// <summary>Gets the color used to paint the projection of the active node.</summary>
		/// <returns type="String">A string specifying the projection color.</returns>
	},
	getProjectRotatedBounds: function() {
		/// <summary>Gets whether the projection of nodes on ruler's scales rotates with them.</summary>
		/// <returns type="Boolean">true if node's projection should match the boundaries of rotated node shape, or false to ignore rotation and project only the coordinates of node's Bounds. The default value is true.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets the color used to paint text in the ruler.</summary>
		/// <returns type="String">A string specifying the text color.</returns>
	},
	getUnit: function() {
		/// <summary>Gets the measure units displayed in the ruler scales.</summary>
		/// <returns type="MindFusion.Drawing.GraphicsUnit">A member of the GraphicsUnit enumeration.</returns>
	},
	getVerticalScaleVisible: function() {
		/// <summary>Gets a value iindicating whether the vertical ruler scale is visible.</summary>
		/// <returns type="Boolean">true to display the vertical scale, or false otherwise. The default is true.</returns>
	},
	registerForSubmit: function(id) {
		/// <summary>Registers an onsubmit handler for the Ruler's parent html form to flush postback data.</summary>
		/// <param name="id" type="String">The id of the hidden field to flush the data to.</param>
	},
	setBackColor: function(value) {
		/// <summary>Sets the background color of the control.</summary>
		/// <param name="value" type="String">A string specifying the ruler's background color.</param>
	},
	setDiagram: function(diagram) {
		/// <summary>Sets the Diagram attached to this Ruler.</summary>
		/// <param name="diagram" type="MindFusion.Diagramming.Diagram">The Diagram attached to the ruler.</param>
	},
	setEnableGuides: function(value) {
		/// <summary>Sets a value indicating whether the alignment guides are enabled.</summary>
		/// <param name="value" type="Boolean">true to allow aligning diagram items using ruler guides, or false otherwise. The default is true.</param>
	},
	setForeColor: function(value) {
		/// <summary>Sets the foreground color of the control.</summary>
		/// <param name="value" type="String">A string specifying the ruler's foreground color.</param>
	},
	setGuideColor: function(value) {
		/// <summary>Sets the color of the alignment guide lines.</summary>
		/// <param name="value" type="String">A string specifying color of guide lines.</param>
	},
	setHorizontalScaleVisible: function(value) {
		/// <summary>Sets a value indicating whether the horizontal ruler scale is visible.</summary>
		/// <param name="value" type="Boolean">true to display the horizontal scale, or false otherwise. The default is true.</param>
	},
	setNegatedX: function(value) {
		/// <summary>Sets whether the horizontal scale should show negated values, simulating that the coordinate system's X axis grows to the left.</summary>
		/// <param name="value" type="Boolean">true if the horizontal scale should show negated values, or false otherwise. The default value is false.</param>
	},
	setNegatedY: function(value) {
		/// <summary>Sets whether the vertical scale should show negated values, simulating that the coordinate system's Y axis grows to the top.</summary>
		/// <param name="value" type="Boolean">true if the vertical scale should show negated values, or false otherwise. The default value is false.</param>
	},
	setPointerColor: function(value) {
		/// <summary>Sets the color of the mouse pointer's projections.</summary>
		/// <param name="value" type="String">A string specifying the color of pointer projection lines.</param>
	},
	setProjectionColor: function(value) {
		/// <summary>Sets the color used to paint the projection of the active node.</summary>
		/// <param name="value" type="String">A string specifying the projection color.</param>
	},
	setProjectRotatedBounds: function(value) {
		/// <summary>Sets whether the projection of nodes on ruler's scales rotates with them.</summary>
		/// <param name="value" type="Boolean">true if node's projection should match the boundaries of rotated node shape, or false to ignore rotation and project only the coordinates of node's Bounds. The default value is true.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets the color used to paint text in the ruler.</summary>
		/// <param name="value" type="String">A string specifying the text color.</param>
	},
	setUnit: function(value) {
		/// <summary>Sets the measure units displayed in the ruler scales.</summary>
		/// <param name="value" type="MindFusion.Drawing.GraphicsUnit">A member of the GraphicsUnit enumeration.</param>
	},
	setVerticalScaleVisible: function(value) {
		/// <summary>Sets a value indicating whether the vertical ruler scale is visible.</summary>
		/// <param name="value" type="Boolean">true to display the vertical scale, or false otherwise. The default is true.</param>
	}
};
MindFusion.Diagramming.Ruler.__class = true;

MindFusion.Diagramming.Ruler.create = function(element) {
	/// <summary>Creates and initializes a new Ruler from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the ruler should be attached to.</param>
	/// <returns type="MindFusion.Diagramming.Ruler">A Ruler object that represents the newly created ruler.</returns>
};
MindFusion.Diagramming.Ruler.find = function(id, parent) {
	/// <summary>Returns the specified Ruler object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the ruler to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the ruler to find.</param>
	/// <returns type="MindFusion.Diagramming.Ruler">A Ruler object that contains the ruler requested by id, if found; otherwise, null.</returns>
};

MindFusion.Diagramming.SaveToStringFormat.prototype = {
	Json: 0,
	Xml: 1
};
MindFusion.Diagramming.SaveToStringFormat.__enum = true;

MindFusion.Diagramming.ScaleMode.prototype = {
	CombinedScales: 0,
	FitAll: 1,
	FixedScale: 2
};
MindFusion.Diagramming.ScaleMode.__enum = true;

MindFusion.Diagramming.ScrollTableCommand.prototype = {
	execute: function() {
		/// <summary>Command.execute override.</summary>
	},
	redo: function() {
		/// <summary>Command.redo override.</summary>
	},
	undo: function() {
		/// <summary>Command.undo override.</summary>
	}
};
MindFusion.Diagramming.ScrollTableCommand.__class = true;

MindFusion.Diagramming.Selection.prototype = {
	addItem: function(item) {
		/// <summary>Adds an item to the Selection.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The item to add.</param>
	},
	allowDrag: function(ist) {
		/// <summary>DiagramItem.allowDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	clear: function() {
		/// <summary>Removes all items from the selection.</summary>
	},
	endDrag: function(ist) {
		/// <summary>DiagramItem.endDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	onRemove: function() {
		/// <summary>DiagramItem.onRemove override.</summary>
	},
	removeItem: function(item) {
		/// <summary>Removes an item from the Diagram.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">The item to add.</param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="Object">An object containing selection state.</returns>
	},
	startDrag: function(ist) {
		/// <summary>DiagramItem.startDrag&#160;override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState" optional="true">Optional. An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	}
};
MindFusion.Diagramming.Selection.__class = true;

MindFusion.Diagramming.SelectionEventArgs.prototype = {
	cancelDrag: function() {
		/// <summary>Immediately cancels the current selection modification.</summary>
	},
	getAdjustmentHandle: function() {
		/// <summary>Gets the adjustment handle being moved by the user.</summary>
		/// <returns type="MindFusion.Diagramming.AdjustmentHandles">One of the AdjustmentHandles enumeration values.</returns>
	},
	getCancel: function() {
		/// <summary>Gets a value indicating whether to allow the current operation.</summary>
		/// <returns type="Boolean">true if the current operation is allowed; otherwise, false.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point instance.</returns>
	},
	setCancel: function(value) {
		/// <summary>Sets a value indicating whether to allow the current operation.</summary>
		/// <param name="value" type="Boolean">true to allow the current operation; otherwise, false.</param>
	}
};
MindFusion.Diagramming.SelectionEventArgs.__class = true;

MindFusion.Diagramming.SelectOnlyBehavior.prototype = {
	createController: function(state) {
		/// <summary>BehaviorBase.createController override.</summary>
		/// <param name="state" type="Object">An object representing current context and input event.</param>
		/// <returns type="MindFusion.Diagramming.SinglePointerController">An instance of SinglePointerController -derived class.</returns>
	}
};
MindFusion.Diagramming.SelectOnlyBehavior.__class = true;

MindFusion.Diagramming.SerializeTagEventArgs.prototype = {
	getContext: function() {
		/// <summary>Gets an XmlPersistContext object providing helper read and write methods for various value types.</summary>
	},
	getElement: function() {
		/// <summary>Gets the XML element where the tag value should be serialized to or deserialized from.</summary>
	},
	getHandled: function() {
		/// <summary>Gets a value indicating whether the event has been handled.</summary>
	},
	getObject: function() {
		/// <summary>Gets the object whose property is being serialized or deserialized.</summary>
	},
	getPropertyName: function() {
		/// <summary>Gets the name of the property being serialized.</summary>
	},
	getTag: function() {
		/// <summary>Gets the tag value being serialized or deserialized.</summary>
	},
	setHandled: function(value) {
		/// <summary>Sets a value indicating whether the event has been handled.</summary>
		/// <param name="value" type="void"></param>
	},
	setTag: function(value) {
		/// <summary>Sets the tag value being serialized or deserialized.</summary>
		/// <param name="value" type="void"></param>
	}
};
MindFusion.Diagramming.SerializeTagEventArgs.__class = true;

MindFusion.Diagramming.ShadowsStyle.prototype = {
	None: 0,
	OneLevel: 1,
	ZOrder: 2
};
MindFusion.Diagramming.ShadowsStyle.__enum = true;

MindFusion.Diagramming.Shape.prototype = {
	getId: function() {
		/// <summary>Gets the id of this Shape.</summary>
		/// <returns type="String">The string identifier.</returns>
	},
	isElliptic: function() {
		/// <summary>Gets a value indicating whether this shape is elliptic.</summary>
		/// <returns type="Boolean">True if the shape is elliptic, otherwise false.</returns>
	}
};
MindFusion.Diagramming.Shape.__class = true;

MindFusion.Diagramming.Shape.fromId = function(id) {
	/// <summary>Returns a reference to the Shape with the specified string identifier.</summary>
	/// <param name="id" type="String">The identifier of the Shape of interest.</param>
	/// <returns type="MindFusion.Diagramming.Shape">A reference to the Shape with the specified identifier or null if there is no such shape.</returns>
};

MindFusion.Diagramming.ShapeLibrary.prototype = {
	getShapes: function() {
		/// <summary>Gets the list with all shapes contained in the library.</summary>
	},
	loadFromXml: function(fileUrl, onLoad, onError) {
		/// <summary>Loads the library from the specified XML document.</summary>
		/// <param name="fileUrl" type="String">The URL of an XML file where the data should be read from.</param>
		/// <param name="onLoad" type="Function" optional="true">Optional. A callback that should be invoked if the file is loaded successfully.</param>
		/// <param name="onError" type="Function" optional="true">Optional. A callback that should be invoked if the file could not be downloaded.</param>
	}
};
MindFusion.Diagramming.ShapeLibrary.__class = true;

MindFusion.Diagramming.ShapeNode.prototype = {
	containsPoint: function(point) {
		/// <summary>Checks if the ShapeNode contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point to check.</param>
		/// <returns type="Boolean">true if the Point is within the bounds of this node; otherwise, false.</returns>
	},
	getAllowFlip: function() {
		/// <summary>Gets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge.</summary>
		/// <returns type="Boolean">true to flip the shape, or false otherwise.</returns>
	},
	getEnableStyledText: function() {
		/// <summary>Gets a value indicating whether styled text rendering is enabled.</summary>
		/// <returns type="Boolean">true to parse the node's text in order to find formatting tags; or false otherwise.</returns>
	},
	getFlipX: function() {
		/// <summary>Gets a value indicating whether the node's shape is fliped horizontally.</summary>
		/// <returns type="Boolean">true if the shape is flipped horizontally, or false otherwise.</returns>
	},
	getFlipY: function() {
		/// <summary>Gets a value indicating whether the node's shape is fliped vertically.</summary>
		/// <returns type="Boolean">true if the shape is flipped vertically, or false otherwise.</returns>
	},
	getImage: function() {
		/// <summary>Gets the image of the node.</summary>
		/// <returns type="HTMLImageElement">The HTMLImageElement associated with&#160;this node.</returns>
	},
	getImageAlign: function() {
		/// <summary>Gets the alignment for the image of this node.</summary>
		/// <returns type="MindFusion.Drawing.ImageAlign">One of the ImageAlign Enumeration values.</returns>
	},
	getImageContent: function() {
		/// <summary>Gets the Base64-encoded data of the image displayed in this ShapeNode.</summary>
		/// <returns type="String">The Base64-encoded data for the image to be loaded.</returns>
	},
	getImageLocation: function() {
		/// <summary>Gets the URL of the image displayed in this ShapeNode.</summary>
		/// <returns type="String">A valid URL string that identifies the image to be loaded.</returns>
	},
	getImagePadding: function() {
		/// <summary>Gets the padding distance between node borders and image.</summary>
		/// <returns type="MindFusion.Drawing.Thickness">A Thickness instance specifying image padding.</returns>
	},
	getLineAlignment: function() {
		/// <summary>Gets how the text should be vertically aligned in the ShapeNode's text box.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">An array with the points.</returns>
	},
	getRotateImage: function() {
		/// <summary>Gets a value indicating whether the image is rotated when the node is rotated.</summary>
		/// <returns type="Boolean">true if the image is rotated; otherwise, false.</returns>
	},
	getRotateText: function() {
		/// <summary>Gets a value indicating whether text is rotated when the node is rotated.</summary>
		/// <returns type="Boolean">true if the text is rotated; otherwise, false.</returns>
	},
	getShape: function() {
		/// <summary>Gets a reference to the node's geometric shape definition.</summary>
		/// <returns type="MindFusion.Diagramming.Shape">The Shape of this node.</returns>
	},
	getTextAlignment: function() {
		/// <summary>Gets how the text should be aligned in the ShapeNode's text box.</summary>
		/// <returns type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets a string specifying the color of the text of this node.</summary>
		/// <returns type="String">A string value identifying the color of the text.</returns>
	},
	getTransparent: function() {
		/// <summary>Gets or sets a value indicating whether this ShapeNode is transparent.</summary>
		/// <returns type="Boolean">true if the node is transparent; otherwise, false.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this ShapeNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	resizeToFitText: function(fit) {
		/// <summary>Makes the shape node big enough to display its text without clipping.</summary>
		/// <param name="fit" type="MindFusion.Diagramming.FitSize">One of the FitSize enumeration values.</param>
		/// <returns type="Boolean">true if the node is resized successfully; otherwise, false.</returns>
	},
	restoreLocationState: function(ist) {
		/// <summary>DiagramItem.restoreLocationState override.</summary>
		/// <param name="ist" type="ShapeNodeState">A ShapeNodeState instance.</param>
	},
	saveLocationState: function() {
		/// <summary>DiagramItem.saveLocationState override.</summary>
		/// <returns type="ShapeNodeState">A ShapeNodeState instance.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setAllowFlip: function(value) {
		/// <summary>Sets a value indicating whether the node's shape flips when an edge is dragged over its opposite edge.</summary>
		/// <param name="value" type="Boolean">true to flip the shape, or false otherwise.</param>
	},
	setEnableStyledText: function(value) {
		/// <summary>Sets a value indicating whether styled text rendering is enabled.</summary>
		/// <param name="value" type="Boolean">true to parse the node's text in order to find formatting tags; or false otherwise.</param>
	},
	setFlipX: function(value) {
		/// <summary>Sets a value indicating whether the node's shape is flipped horizontally.</summary>
		/// <param name="value" type="Boolean">true if the shape is flipped horizontally, or false otherwise.</param>
	},
	setFlipY: function(value) {
		/// <summary>Sets a value indicating whether the node's shape is flipped vertically.</summary>
		/// <param name="value" type="Boolean">true if the shape is flipped vertically, or false otherwise.</param>
	},
	setImage: function(value) {
		/// <summary>Sets the image of the node.</summary>
		/// <param name="value" type="HTMLImageElement">The&#160;HTMLImageElement image to assign to this node.</param>
	},
	setImageAlign: function(value) {
		/// <summary>Sets the alignment for the image of this node.</summary>
		/// <param name="value" type="MindFusion.Drawing.ImageAlign">One of the ImageAlign enumeration values.</param>
	},
	setImageContent: function(value) {
		/// <summary>Sets the Base64-encoded data of the image displayed in this ShapeNode.</summary>
		/// <param name="value" type="String">The Base64-encoded data for the image to be loaded.</param>
	},
	setImageLocation: function(value) {
		/// <summary>Sets the URL of the image displayed in this ShapeNode.</summary>
		/// <param name="value" type="String">A valid URL string that identifies the image to be loaded.</param>
	},
	setImagePadding: function(value) {
		/// <summary>Sets the padding distance between node borders and image.</summary>
		/// <param name="value" type="MindFusion.Drawing.Thickness">A Thickness instance specifying image padding.</param>
	},
	setLineAlignment: function(value) {
		/// <summary>Sets how the text should be vertically aligned in the ShapeNode's text box.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setRotateImage: function(value) {
		/// <summary>Sets a value indicating whether the image is rotated when the node is rotated.</summary>
		/// <param name="value" type="Boolean">true if the image is rotated; otherwise, false.</param>
	},
	setRotateText: function(value) {
		/// <summary>Sets a value indicating whether text is rotated when the node is rotated.</summary>
		/// <param name="value" type="Boolean">true if the text is rotated; otherwise, false.</param>
	},
	setShape: function(value) {
		/// <summary>Sets a reference to the node's geometric shape definition.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Shape">An instance of the Shape class.</param>
	},
	setTextAlignment: function(value) {
		/// <summary>Sets how the text should be aligned in the ShapeNode's text box.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Alignment">One of the Alignment enumeration values.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets a string specifying the color of the text of this node.</summary>
		/// <param name="value" type="String">A string value identifying the color of the text.</param>
	},
	setTransparent: function(value) {
		/// <summary>Sets or sets a value indicating whether this ShapeNode is transparent.</summary>
		/// <param name="value" type="Boolean">true if the ShapeNode is transparent; otherwise, false.</param>
	},
	updateDrag: function(ist) {
		/// <summary>DiagramItem.updateDrag override.</summary>
		/// <param name="ist" type="MindFusion.Diagramming.InteractionState">An InteractionState object that encapsulates the current state of user interaction with the control.</param>
	},
};
MindFusion.Diagramming.ShapeNode.__class = true;

MindFusion.Diagramming.ShapeNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new ShapeNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.Shapes.prototype = {
};
MindFusion.Diagramming.Shapes.__class = true;

MindFusion.Diagramming.Shapes.Actor = function() {
	/// <summary>Gets the Actor predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Alternative = function() {
	/// <summary>Gets the Alternative predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow = function() {
	/// <summary>Gets the Arrow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow1 = function() {
	/// <summary>Gets the Arrow1 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow2 = function() {
	/// <summary>Gets the Arrow2 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow3 = function() {
	/// <summary>Gets the Arrow3 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow4 = function() {
	/// <summary>Gets the Arrow4 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow5 = function() {
	/// <summary>Gets the Arrow5 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow6 = function() {
	/// <summary>Gets the Arrow6 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow7 = function() {
	/// <summary>Gets the Arrow7 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow8 = function() {
	/// <summary>Gets the Arrow8 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Arrow9 = function() {
	/// <summary>Gets the Arrow9 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BackSlash = function() {
	/// <summary>Gets the BackSlash predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BeginLoop = function() {
	/// <summary>Gets the BeginLoop predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BowArrow = function() {
	/// <summary>Gets the BowArrow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnComplex = function() {
	/// <summary>Gets the BpmnComplex predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnDataBasedXor = function() {
	/// <summary>Gets the BpmnDataBasedXor predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndCancel = function() {
	/// <summary>Gets the BpmnEndCancel predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndCompensation = function() {
	/// <summary>Gets the BpmnEndCompensation predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndError = function() {
	/// <summary>Gets the BpmnEndError predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndLink = function() {
	/// <summary>Gets the BpmnEndLink predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndMessage = function() {
	/// <summary>Gets the BpmnEndMessage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndMultiple = function() {
	/// <summary>Gets the BpmnEndMultiple predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEndTerminate = function() {
	/// <summary>Gets the BpmnEndTerminate predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnEventBasedXor = function() {
	/// <summary>Gets the BpmnEventBasedXor predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnInclusive = function() {
	/// <summary>Gets the BpmnInclusive predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateCancel = function() {
	/// <summary>Gets the BpmnIntermediateCancel predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateCompensation = function() {
	/// <summary>Gets the BpmnIntermediateCompensation predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateError = function() {
	/// <summary>Gets the BpmnIntermediateError predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateLink = function() {
	/// <summary>Gets the BpmnIntermediateLink predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateMessage = function() {
	/// <summary>Gets the BpmnIntermediateMessage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateMultiple = function() {
	/// <summary>Gets the BpmnIntermediateMultiple predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateRule = function() {
	/// <summary>Gets the BpmnIntermediateRule predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnIntermediateTimer = function() {
	/// <summary>Gets the BpmnIntermediateTimer predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnParallelFork = function() {
	/// <summary>Gets the BpmnParallelFork predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartLink = function() {
	/// <summary>Gets the BpmnStartLink predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartMessage = function() {
	/// <summary>Gets the BpmnStartMessage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartMultiple = function() {
	/// <summary>Gets the BpmnStartMultiple predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartRule = function() {
	/// <summary>Gets the BpmnStartRule predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.BpmnStartTimer = function() {
	/// <summary>Gets the BpmnStartTimer predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Circle = function() {
	/// <summary>Gets the Circle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cloud = function() {
	/// <summary>Gets the Cloud predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Collate = function() {
	/// <summary>Gets the Collate predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConeDown = function() {
	/// <summary>Gets the ConeDown predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConeUp = function() {
	/// <summary>Gets the ConeUp predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ConnectedIssues = function() {
	/// <summary>Gets the ConnectedIssues predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.CreateRequest = function() {
	/// <summary>Gets the CreateRequest predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cross = function() {
	/// <summary>Gets the Cross predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cube = function() {
	/// <summary>Gets the Cube predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Cylinder = function() {
	/// <summary>Gets the Cylinder predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Database = function() {
	/// <summary>Gets the Database predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DataTransmition = function() {
	/// <summary>Gets the DataTransmition predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DDelay = function() {
	/// <summary>Gets the DDelay predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decagon = function() {
	/// <summary>Gets the Decagon predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decision = function() {
	/// <summary>Gets the Decision predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Decision2 = function() {
	/// <summary>Gets the Decision2 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DefaultFlow = function() {
	/// <summary>Gets the DefaultFlow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Delay = function() {
	/// <summary>Gets the Delay predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DInDelay = function() {
	/// <summary>Gets the DInDelay predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DirectAccessStorage = function() {
	/// <summary>Gets the DirectAccessStorage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DiskStorage = function() {
	/// <summary>Gets the DiskStorage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Display = function() {
	/// <summary>Gets the Display predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DividedEvent = function() {
	/// <summary>Gets the DividedEvent predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DividedProcess = function() {
	/// <summary>Gets the DividedProcess predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Document = function() {
	/// <summary>Gets the Document predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Donut = function() {
	/// <summary>Gets the Donut predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DoubleArrow = function() {
	/// <summary>Gets the DoubleArrow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.DOutDelay = function() {
	/// <summary>Gets the DOutDelay predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Ellipse = function() {
	/// <summary>Gets the Ellipse predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.EndLoop = function() {
	/// <summary>Gets the EndLoop predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ExternalOrganization = function() {
	/// <summary>Gets the ExternalOrganization predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ExternalProcess = function() {
	/// <summary>Gets the ExternalProcess predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.File = function() {
	/// <summary>Gets the File predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.FramedRectangle = function() {
	/// <summary>Gets the FramedRectangle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Gate = function() {
	/// <summary>Gets the Gate predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Heart = function() {
	/// <summary>Gets the Heart predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Heptagon = function() {
	/// <summary>Gets the Heptagon predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Hourglass = function() {
	/// <summary>Gets the Hourglass predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Input = function() {
	/// <summary>Gets the Input predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.InternalStorage = function() {
	/// <summary>Gets the InternalStorage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Interrupt = function() {
	/// <summary>Gets the Interrupt predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Interrupt2 = function() {
	/// <summary>Gets the Interrupt2 predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.IsoProcess = function() {
	/// <summary>Gets the IsoProcess predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Junction = function() {
	/// <summary>Gets the Junction predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Lightning = function() {
	/// <summary>Gets the Lightning predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.LinedDocument = function() {
	/// <summary>Gets the LinedDocument predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.ManualOperation = function() {
	/// <summary>Gets the ManualOperation predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Merge = function() {
	/// <summary>Gets the Merge predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MessageFromUser = function() {
	/// <summary>Gets the MessageFromUser predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MessageToUser = function() {
	/// <summary>Gets the MessageToUser predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Microform = function() {
	/// <summary>Gets the Microform predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MicroformProcessing = function() {
	/// <summary>Gets the MicroformProcessing predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MicroformRecording = function() {
	/// <summary>Gets the MicroformRecording predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MultiDocument = function() {
	/// <summary>Gets the MultiDocument predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.MultiProc = function() {
	/// <summary>Gets the MultiProc predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Octagon = function() {
	/// <summary>Gets the Octagon predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OfflineStorage = function() {
	/// <summary>Gets the OfflineStorage predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OffpageConnection = function() {
	/// <summary>Gets the OffpageConnection predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.OffpageReference = function() {
	/// <summary>Gets the OffpageReference predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Or = function() {
	/// <summary>Gets the Or predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Pentagon = function() {
	/// <summary>Gets the Pentagon predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PentagonArrow = function() {
	/// <summary>Gets the PentagonArrow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Plaque = function() {
	/// <summary>Gets the Plaque predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PointerArrow = function() {
	/// <summary>Gets the PointerArrow predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PrimitiveFromCall = function() {
	/// <summary>Gets the PrimitiveFromCall predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PrimitiveToCall = function() {
	/// <summary>Gets the PrimitiveToCall predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Procedure = function() {
	/// <summary>Gets the Procedure predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Process = function() {
	/// <summary>Gets the Process predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Prysm = function() {
	/// <summary>Gets the Prysm predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PunchedCard = function() {
	/// <summary>Gets the PunchedCard predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PyramidDown = function() {
	/// <summary>Gets the PyramidDown predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.PyramidUp = function() {
	/// <summary>Gets the PyramidUp predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Quill = function() {
	/// <summary>Gets the Quill predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Rectangle = function() {
	/// <summary>Gets the Rectangle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Reversed = function() {
	/// <summary>Gets the Reversed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevTriangle = function() {
	/// <summary>Gets the RevTriangle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevWithCirc = function() {
	/// <summary>Gets the RevWithCirc predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RevWithLine = function() {
	/// <summary>Gets the RevWithLine predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Rhombus = function() {
	/// <summary>Gets the Rhombus predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RightTriangle = function() {
	/// <summary>Gets the RightTriangle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RoundRect = function() {
	/// <summary>Gets the RoundRect predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.RSave = function() {
	/// <summary>Gets the RSave predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Save = function() {
	/// <summary>Gets the Save predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Slash = function() {
	/// <summary>Gets the Slash predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Sort = function() {
	/// <summary>Gets the Sort predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Sphere = function() {
	/// <summary>Gets the Sphere predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star = function() {
	/// <summary>Gets the Star predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star16Pointed = function() {
	/// <summary>Gets the Star16Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star24Pointed = function() {
	/// <summary>Gets the Star24Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star32Pointed = function() {
	/// <summary>Gets the Star32Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star4Pointed = function() {
	/// <summary>Gets the Star4Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star5Pointed = function() {
	/// <summary>Gets the Star5Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star6Pointed = function() {
	/// <summary>Gets the Star6Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Star7Pointed = function() {
	/// <summary>Gets the Star7Pointed predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Start = function() {
	/// <summary>Gets the Start predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Tape = function() {
	/// <summary>Gets the Tape predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Terminator = function() {
	/// <summary>Gets the Terminator predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Tetragon = function() {
	/// <summary>Gets the Tetragon predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.TransmittalTape = function() {
	/// <summary>Gets the TransmittalTape predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Trapezoid = function() {
	/// <summary>Gets the Trapezoid predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};
MindFusion.Diagramming.Shapes.Triangle = function() {
	/// <summary>Gets the Triangle predefined shape.</summary>
	/// <returns type="MindFusion.Diagramming.Shape">An instance of the Shape class representing the predefined shape.</returns>
};

MindFusion.Diagramming.ShowAnchors.prototype = {
	Always: 0,
	Auto: 1,
	Never: 2,
	Selected: 3
};
MindFusion.Diagramming.ShowAnchors.__enum = true;

MindFusion.Diagramming.SimplePanel.prototype = {
};
MindFusion.Diagramming.SimplePanel.__class = true;

MindFusion.Diagramming.SimpleShape.prototype = {
	Rectangle: 0,
	RoundedRectangle: 1
};
MindFusion.Diagramming.SimpleShape.__enum = true;

MindFusion.Diagramming.SinglePointerController.prototype = {
	cancel: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, rejecting the operation.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	commit: function(position) {
		/// <summary>Called when the user stops drawing or modifying a diagram element, accepting the operation.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	drawInteraction: function(context) {
		/// <summary>Called to draw current state of user interaction.</summary>
		/// <param name="context" type="DrawingContext2D">The drawing context for diagram's underlying canvas.</param>
	},
	move: function(position) {
		/// <summary>Called continuously while the user draws with the mouse or touch.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	start: function(position) {
		/// <summary>Called when the user starts drawing or modifying a diagram element.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
	},
	validate: function(position) {
		/// <summary>Called to validate the operation at current pointer position.</summary>
		/// <param name="position" type="MindFusion.Drawing.Point">A point specified in diagram coordinates.</param>
		/// <returns type="Boolean">true to accept the operation, or false otherwise.</returns>
	}
};
MindFusion.Diagramming.SinglePointerController.__class = true;

MindFusion.Diagramming.StackPanel.prototype = {
	getOrientation: function() {
		/// <summary>Gets the stack orientation.</summary>
		/// <returns type="MindFusion.Diagramming.Orientation">A member of the Orientation enumeration.</returns>
	},
	setOrientation: function(value) {
		/// <summary>Sets the stack orientation.</summary>
		/// <param name="value" type="MindFusion.Diagramming.Orientation">A member of the Orientation enumeration.</param>
	}
};
MindFusion.Diagramming.StackPanel.__class = true;

MindFusion.Diagramming.Style.prototype = {
	getBackBrush: function() {
		/// <summary>Gets the brush used to fill the diagram background.</summary>
		/// <returns type="Object">A brush object specifying the fill of the diagram background.</returns>
	},
	getBrush: function() {
		/// <summary>Gets the brush used to fill the interior of diagram items.</summary>
		/// <returns type="Object">A brush object specifying the fill of diagram items.</returns>
	},
	getFontName: function() {
		/// <summary>Gets the name of the font used to draw text of diagram items.</summary>
		/// <returns type="String">A string value identifying the font name of diagram items.</returns>
	},
	getFontSize: function() {
		/// <summary>Gets the size of the font used to draw text of diagram items.</summary>
		/// <returns type="Number">A number identifying the font size of diagram items.</returns>
	},
	getFontStyle: function() {
		/// <summary>Gets the style of the font used to draw text of diagram items.</summary>
		/// <returns type="MindFusion.Drawing.FontStyle">A combination of FontStyle enumeration members.</returns>
	},
	getNodeEffects: function() {
		/// <summary>Gets a list with all effects applied to the nodes of this diagram.</summary>
		/// <returns type="Array">A list with all effects applied to the nodes of this diagram.</returns>
	},
	getShadowColor: function() {
		/// <summary>Gets the color used to draw shadows of diagram items.</summary>
		/// <returns type="String">A string value identifying the shadow color of diagram items.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the color used to stroke the frame of diagram items.</summary>
		/// <returns type="String">A string value identifying the stroke color of diagram items.</returns>
	},
	getStrokeDashStyle: function() {
		/// <summary>Gets the line dash pattern applied when stroking the frame of diagram items.</summary>
		/// <returns type="MindFusion.Drawing.DashStyle">A member of the DashStyle enumeration.</returns>
	},
	getStrokeThickness: function() {
		/// <summary>Gets the line width applied when stroking the frame of diagram items.</summary>
		/// <returns type="Number">A number identifying the stroke thickness of diagram items.</returns>
	},
	getTextColor: function() {
		/// <summary>Gets the color used to draw text of diagram items.</summary>
		/// <returns type="String">A string value identifying the text color of diagram items.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this Style instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	setBackBrush: function(value) {
		/// <summary>Sets an object that specifies how to paint the interior of the diagram background.</summary>
		/// <param name="value" type="Object">A brush object specifying the fill of the diagram background.</param>
	},
	setBrush: function(value) {
		/// <summary>Sets an object that specifies how to paint the interior of diagram items.</summary>
		/// <param name="value" type="Object">A brush object specifying the fill of diagram items.</param>
	},
	setFontName: function(value) {
		/// <summary>Sets the name of the font used to draw text of diagram items.</summary>
		/// <param name="value" type="String">A string value identifying the font name of diagram items.</param>
	},
	setFontSize: function(A) {
		/// <summary>Sets the size of the font used to draw text of diagram items.</summary>
		/// <param name="A" type="Number">number identifying the font size of diagram items.</param>
	},
	setFontStyle: function(value) {
		/// <summary>Sets the style of the font used to draw text of diagram items.</summary>
		/// <param name="value" type="MindFusion.Drawing.FontStyle">A combination of FontStyle enumeration members.</param>
	},
	setNodeEffects: function(value) {
		/// <summary>Sets a list with all effects applied to the nodes of this diagram.</summary>
		/// <param name="value" type="Array">A list with all effects applied to the nodes of this diagram.</param>
	},
	setShadowColor: function(value) {
		/// <summary>Sets the color used to draw shadows of diagram items.</summary>
		/// <param name="value" type="String">A string value identifying the shadow color of diagram items.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the color used to stroke the frame of diagram items.</summary>
		/// <param name="value" type="String">A string value identifying the stroke color of diagram items.</param>
	},
	setStrokeDashStyle: function(value) {
		/// <summary>Sets the line dash pattern applied when stroking the frame of diagram items.</summary>
		/// <param name="value" type="MindFusion.Drawing.DashStyle">A member of the DashStyle enumeration.</param>
	},
	setStrokeThickness: function(value) {
		/// <summary>Sets the line width applied when stroking the frame of diagram items.</summary>
		/// <param name="value" type="Number">A number identifying the stroke thickness of diagram items.</param>
	},
	setTextColor: function(value) {
		/// <summary>Sets the color used to draw text of diagram items.</summary>
		/// <param name="value" type="String">A string value identifying the text color of diagram items.</param>
	},
};
MindFusion.Diagramming.Style.__class = true;

MindFusion.Diagramming.Style.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new Style instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.SvgContent.prototype = {
	parse: function(value) {
		/// <summary>Loads SVG code from the specified file.</summary>
		/// <param name="value" type="String">A string specifying the SVG file location.</param>
	},
	parseSvg: function(value) {
		/// <summary>Loads SVG code from the specified string.</summary>
		/// <param name="value" type="String">A string containing the SVG markup code.</param>
	}
};
MindFusion.Diagramming.SvgContent.__class = true;

MindFusion.Diagramming.SvgExporter.prototype = {
	exportElement: function(diagram) {
		/// <summary>Creates an SVG element representing the specified diagram.</summary>
		/// <param name="diagram" type="MindFusion.Drawing.Diagram">A reference to the diagram to be exported.</param>
	},
	exportString: function(diagram) {
		/// <summary>Creates an SVG document representing the specified diagram.</summary>
		/// <param name="diagram" type="MindFusion.Drawing.Diagram">A reference to the diagram to be exported.</param>
	}
};
MindFusion.Diagramming.SvgExporter.__class = true;

MindFusion.Diagramming.SvgNode.prototype = {
	getContent: function() {
		/// <summary>Gets an SvgContent instance representing the SVG drawing rendered in this node.</summary>
		/// <returns type="SvgContent">An instance of the SvgContent class.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this SvgNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.LoadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	setContent: function(value) {
		/// <summary>Sets an SvgContent instance representing the SVG drawing rendered in this node.</summary>
		/// <param name="value" type="SvgContent">An instance of the SvgContent class.</param>
	},
};
MindFusion.Diagramming.SvgNode.__class = true;

MindFusion.Diagramming.SvgNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new SvgNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.TableConnectionPoint.prototype = {
	addLinkToNode: function() {
		/// <summary>Adds the link associated with this connection point to the associated node.</summary>
	},
	getEndPoint: function() {
		/// <summary>Calculates the coordinates of this connection point expressed in document coordinates.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point that represents the coordinate.</returns>
	},
	getInitialPoint: function() {
		/// <summary>Returns a point (usually the center of the bounding rectangle) contained within the associated node.</summary>
		/// <returns type="MindFusion.Drawing.Point">A Point contained within the node.</returns>
	},
	getIntersection: function(point1, point2) {
		/// <summary>Calculates the intersection point between the specified line segment and the contour of the node associated with this connection point.</summary>
		/// <param name="point1" type="MindFusion.Drawing.Point">The first point of the segment.</param>
		/// <param name="point2" type="MindFusion.Drawing.Point">The second point of the segment.</param>
		/// <returns type="MindFusion.Drawing.Point">A Point object representing the intersection point.</returns>
	},
	getNearestBorderPoint: function(point) {
		/// <summary>Returns the nearest point lying on the node border.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance specifying location in the diagram.</param>
		/// <returns type="AnchorPointDetails">An AnchorPointDetails specifying the anchor point properties.</returns>
	},
	linkChanges: function(item, point) {
		/// <summary>Checks whether the link would change if attached to the specified node at the specified point.</summary>
		/// <param name="item" type="MindFusion.Diagramming.DiagramItem">A DiagramItem under the mouse cursor.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">A point where the link will be connected.</param>
		/// <returns type="Boolean">true if the link would connect to a different entity if dropped at the specified location; otherwise, false.</returns>
	},
	removeLinkFromNode: function() {
		/// <summary>Removes the link associated with this connection point from the associated node.</summary>
	},
	saveEndRelative: function() {
		/// <summary>Updates the coordinates of the connection point represented by this link, relative to the bounding rectangle of the associated node.</summary>
	}
};
MindFusion.Diagramming.TableConnectionPoint.__class = true;

MindFusion.Diagramming.TableNode.prototype = {
	addColumn: function() {
		/// <summary>Adds a new column to the table.</summary>
		/// <returns type="Object">The newly created column object.</returns>
	},
	addRow: function() {
		/// <summary>Adds a new row to the table.</summary>
		/// <returns type="Object">The newly created row object.</returns>
	},
	cellFromPoint: function(point) {
		/// <summary>Returns the cell that contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance.</param>
		/// <returns type="Object">A JavaScript&#160;object containing following fields:&#10;{&#10;cell: Cell&#160;reference,&#10;cellRect: Rect,&#10;column: Number,&#10;row: Number&#10;};</returns>
	},
	containsPoint: function(point) {
		/// <summary>Checks if the TableNode contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The Point to check.</param>
		/// <returns type="Boolean">true if the point is within the bounds of this node; otherwise, false.</returns>
	},
	createConnectionPoint: function(link, point, incoming) {
		/// <summary>Creates a connection point between this node and the specified link at the specified point.</summary>
		/// <param name="link" type="MindFusion.Diagramming.DiagramLink">A DiagramLink that should be connected to this node.</param>
		/// <param name="point" type="MindFusion.Drawing.Point">The point at which the link should be connected.</param>
		/// <param name="incoming" type="Boolean">true if link is an incoming link, otherwise, false.</param>
		/// <returns type="MindFusion.Diagramming.TableConnectionPoint"></returns>
	},
	deleteColumn: function(col) {
		/// <summary>Deletes the specified column.</summary>
		/// <param name="col" type="Number">An integer value specifying which column to delete.</param>
	},
	deleteRow: function(row) {
		/// <summary>Deletes the specified row.</summary>
		/// <param name="row" type="Number">An integer value specifying which row to delete.</param>
	},
	getAllowResizeColumns: function() {
		/// <summary>Gets a value indicating whether users are allowed to resize table columns.</summary>
		/// <returns type="Boolean">true if users are allowed to resize table columns, otherwise false.</returns>
	},
	getAllowResizeRows: function() {
		/// <summary>Gets a value indicating whether users are allowed to resize table rows.</summary>
		/// <returns type="Boolean">true if users are allowed to resize table rows, otherwise false.</returns>
	},
	getCaptionBackBrush: function() {
		/// <summary>Gets the object that specifies how to fill the caption bar.</summary>
		/// <returns type="Object">An object specifying the fill of the caption bar.</returns>
	},
	getCaptionFont: function() {
		/// <summary>Gets the font used to render the table's caption text.</summary>
		/// <returns type="MindFusion.Drawing.Font">An object specifying the font of the caption bar.</returns>
	},
	getCaptionHeight: function() {
		/// <summary>Gets the height of the table's caption area.</summary>
		/// <returns type="Number">A number specifying the height of the table caption. The default value is 6.</returns>
	},
	getCell: function(col, row) {
		/// <summary>Returns a reference to the cell located at the specified column and row of this table.</summary>
		/// <param name="col" type="Number">An integer value specifying the index of a table's column.</param>
		/// <param name="row" type="Number">An integer value specifying the index of a table's row.</param>
		/// <returns type="MindFusion.Diagramming.Cell">A Cell instance representing the specified cell.</returns>
	},
	getCellFrameStyle: function() {
		/// <summary>Gets the style of the cell frame lines.</summary>
		/// <returns type="MindFusion.Diagramming.CellFrameStyle">A member of the CellFrameStyle enumeration.</returns>
	},
	getColumn: function(col) {
		/// <summary>Returns a reference to the column at the specified position within the table's list of columns.</summary>
		/// <param name="col" type="Number">An integer value specifying the index of a table's column.</param>
		/// <returns type="Object">A JavaScript object representing the specified column.</returns>
	},
	getColumnCount: function() {
		/// <summary>Gets the number of columns in the table.</summary>
		/// <returns type="Number">An integer value indicating the number of columns in the table.</returns>
	},
	getConnectionStyle: function() {
		/// <summary>Gets a value indicating whether drawing a link from/to this table should connecta row of the table, or the whole table as an integral entity.</summary>
		/// <returns type="MindFusion.Diagramming.ConnectionStyle">A member of the ConnectionStyle enumeration.</returns>
	},
	getCurrentScrollRow: function() {
		/// <summary>Gets the table's current scroll position.</summary>
		/// <returns type="Number">The index of the first row that should be visible in the table.</returns>
	},
	getEnableStyledText: function() {
		/// <summary>Gets a value indicating whether styled text rendering is enabled.</summary>
		/// <returns type="Boolean">true to parse the node's text in order to find formatting tags, or false otherwise.</returns>
	},
	getOutline: function() {
		/// <summary>Gets an array of points that define the outline of this node shape.</summary>
		/// <returns type="Array">An array with the points.</returns>
	},
	getRow: function(row) {
		/// <summary>Returns a reference to the row at the specified position within the table's list of rows.</summary>
		/// <param name="row" type="Number">An integer value specifying the index of a table's row.</param>
		/// <returns type="Object">A JavaScript object representing the specified row.</returns>
	},
	getRowCount: function() {
		/// <summary>Gets the number of rows in the table.</summary>
		/// <returns type="Number">An integer value specifying the number of rows in the table.</returns>
	},
	getRowRect: function(row) {
		/// <summary>Returns the bounding rectangle of the specified row.</summary>
		/// <param name="row" type="Number">An integer value specifying the index of a table's row.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect object representing the row's bounding rectangle.</returns>
	},
	getScrollable: function() {
		/// <summary>Gets a value indicating whether the user is allowed to scroll the table rows.</summary>
		/// <returns type="Boolean">true if the table can be scrolled; otherwise, false.</returns>
	},
	getShape: function() {
		/// <summary>Gets the shape of the table's outline.</summary>
		/// <returns type="MindFusion.Diagramming.SimpleShape">A member of the SimpleShape enumeration.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this TableNode instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	insertColumn: function(col) {
		/// <summary>Inserts a new column at the specified position.</summary>
		/// <param name="col" type="Number">An integer value specifying the position within the table's list of columns where the new column should be inserted.</param>
	},
	insertRow: function(row) {
		/// <summary>Inserts a new row at the specified position.</summary>
		/// <param name="row" type="Number">An integer value specifying the position within the table's list of rows where the new row should be inserted.</param>
	},
	loadFromXml: function(xmlElement, context) {
		/// <summary>DiagramNode.loadFromXml override. Loads the node's content from an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element containing the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	redimTable: function(columns, rows) {
		/// <summary>Changes the number of columns and rows in this table.</summary>
		/// <param name="columns" type="Number">An integer value specifying the new number of columns.</param>
		/// <param name="rows" type="Number">An integer value specifying the new number of rows.</param>
	},
	resizeToFitText: function(ignoreCaption, keepCellWidth) {
		/// <summary>Resizes the columns and rows so that cells are large enough to fit their text.</summary>
		/// <param name="ignoreCaption" type="Boolean">true to ignore caption text and consider only cells for table size, or false otherwise.</param>
		/// <param name="keepCellWidth" type="Boolean">true to preserve column widths and resize only row heights, or false otherwise.</param>
	},
	rowFromPoint: function(point) {
		/// <summary>Returns the index of the table's row that contains the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">A Point instance.</param>
		/// <returns type="Number">An integer value specifying the row's index.</returns>
	},
	saveToXml: function(xmlElement, context) {
		/// <summary>Saves the node's content into an XML element.</summary>
		/// <param name="xmlElement" type="Element">An XML DOM element that will contain the item's data.</param>
		/// <param name="context" type="MindFusion.Diagramming.XmlPersistContext">An object providing contextual information about the serialization process and some helper serialization methods.</param>
	},
	scrollDown: function() {
		/// <summary>Scrolls the table's rows down.</summary>
	},
	scrollUp: function() {
		/// <summary>Scrolls the table's rows up.</summary>
	},
	setAllowResizeColumns: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to resize table columns.</summary>
		/// <param name="value" type="Boolean">true if users are allowed to resize table columns, otherwise false.</param>
	},
	setAllowResizeRows: function(value) {
		/// <summary>Sets a value indicating whether users are allowed to resize table rows.</summary>
		/// <param name="value" type="Boolean">true if users are allowed to resize table rows, otherwise false.</param>
	},
	setCaptionBackBrush: function(value) {
		/// <summary>Sets an object that specifies how to fill the caption bar.</summary>
		/// <param name="value" type="Object">A Brush object specifying the fill of the caption bar.</param>
	},
	setCaptionFont: function(value) {
		/// <summary>Sets the font used to render the table's caption text.</summary>
		/// <param name="value" type="MindFusion.Drawing.Font">An object specifying the font of the caption bar.</param>
	},
	setCaptionHeight: function(value) {
		/// <summary>Sets the height of the table's caption area.</summary>
		/// <param name="value" type="Number">A number specifying the height of the table caption. The default value is 6.</param>
	},
	setCellFrameStyle: function(value) {
		/// <summary>Sets the style of the cell frame lines.</summary>
		/// <param name="value" type="MindFusion.Diagramming.CellFrameStyle">A member of the CellFrameStyle enumeration.</param>
	},
	setColumnCount: function(value) {
		/// <summary>Sets the number of columns in the table.</summary>
		/// <param name="value" type="Number">An integer value indicating the number of columns in the table.</param>
	},
	setConnectionStyle: function(value) {
		/// <summary>Sets a value indicating whether drawing a link from/to this table should connecta row of the table, or the whole table as an integral entity.</summary>
		/// <param name="value" type="MindFusion.Diagramming.ConnectionStyle">A member of the ConnectionStyle enumeration.</param>
	},
	setCurrentScrollRow: function(row) {
		/// <summary>Sets the table's current scroll position.</summary>
		/// <param name="row" type="Number">The index of the first row that should be visible in the table.</param>
	},
	setEnableStyledText: function(value) {
		/// <summary>Sets a value indicating whether styled text rendering is enabled.</summary>
		/// <param name="value" type="Boolean">true to parse the node's text in order to find formatting tags, or false otherwise.</param>
	},
	setRowCount: function(value) {
		/// <summary>Sets the number of rows in the table.</summary>
		/// <param name="value" type="Number">An integer value specifying the number of rows in the table.</param>
	},
	setScrollable: function(value) {
		/// <summary>Sets a value indicating whether the user is allowed to scroll the table rows.</summary>
		/// <param name="value" type="Boolean">true if the table can be scrolled; otherwise, false.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the shape of the table's outline.</summary>
		/// <param name="value" type="MindFusion.Diagramming.SimpleShape">A member of the SimpleShape enumeration.</param>
	},
};
MindFusion.Diagramming.TableNode.__class = true;

MindFusion.Diagramming.TableNode.With = function(diagram) {
	/// <summary>Returns a Builder object used to configure and create new TableNode instances.</summary>
	/// <param name="diagram" type="void"></param>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Diagramming.Theme.prototype = {
};
MindFusion.Diagramming.Theme.__class = true;

MindFusion.Diagramming.XmlPersistContext.prototype = {
	addChildElement: function(elementName, parentElement, innerText) {
		/// <summary>Adds a new child node with the specified name and value to the specified parent node.</summary>
		/// <param name="elementName" type="String">A string containing the name of new child element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="innerText" type="String" optional="true">Optional. Optional value to be added as child text node of the new element.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	readBool: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a Boolean value with the specified name.</summary>
		/// <param name="elementName" type="String">A string specifying the name of the Boolean XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Boolean" optional="true">Optional. The default value to return if specified child XML element does not exist.</param>
		/// <returns type="Boolean">The value loaded from XML.</returns>
	},
	readBrush: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a Brush object with the specified name.</summary>
		/// <param name="elementName" type="String">A string specifying the name of the brush XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Object" optional="true">Optional. The default brush to return if specified child XML element does not exist.</param>
		/// <returns type="Object">The brush object loaded from XML.</returns>
	},
	readFloat: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a floating-point number with the specified name.</summary>
		/// <param name="elementName" type="String">A string specifying the name of the number XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Number" optional="true">Optional. The default number to return if specified child XML element does not exist.</param>
		/// <returns type="Number">The number loaded from XML.</returns>
	},
	readImage: function(elementName, parentElement) {
		/// <summary>Reads an image object with the specified name.</summary>
		/// <param name="elementName" type="String">A string specifying the name of the image XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="String">Base64-encoded image data loaded from XML.</returns>
	},
	readInt: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads an integer number with the specified name.</summary>
		/// <param name="elementName" type="String">A string specifying the name of the number XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Number" optional="true">Optional. The default number to return if specified child XML element does not exist.</param>
		/// <returns type="Number">The number loaded from XML.</returns>
	},
	readString: function(elementName, parentElement, defaultValue) {
		/// <summary>Reads a string value with the specified name.</summary>
		/// <param name="elementName" type="String">The name of the string's XML element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <param name="defaultValue" type="Object" optional="true">Optional. The default string to return if specified child XML element does not exist.</param>
		/// <returns type="String">The string loaded from XML.</returns>
	},
	writeBool: function(boolValue, elementName, parentElement) {
		/// <summary>Writes a Boolean value with the specified name.</summary>
		/// <param name="boolValue" type="Boolean">The Boolean value that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	writeBrush: function(brush, elementName, parentElement) {
		/// <summary>Writes a reference to the specified brush. The brush is registered within the internal hashtable for subsequent serialization.</summary>
		/// <param name="brush" type="Object">The Brush object that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	writeFloat: function(floatValue, elementName, parentElement) {
		/// <summary>Writes a floating-point number with the specified name.</summary>
		/// <param name="floatValue" type="Number">The number that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	writeImage: function(image, elementName, parentElement) {
		/// <summary>Writes a reference to the specified image. The image is registered within the internal hashtable for subsequent serialization.</summary>
		/// <param name="image" type="String">Base64-encoded image data that should be saved in XML.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	writeInt: function(intValue, elementName, parentElement) {
		/// <summary>Writes an integer number with the specified name.</summary>
		/// <param name="intValue" type="Number">The number that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	},
	writeString: function(stringValue, elementName, parentElement) {
		/// <summary>Writes a string value with the specified name.</summary>
		/// <param name="stringValue" type="String">The string that should be saved in current XML document.</param>
		/// <param name="elementName" type="String">A string specifying the name of the new element.</param>
		/// <param name="parentElement" type="Element">The parent DOM Element object.</param>
		/// <returns type="Element">The newly created DOM Element object.</returns>
	}
};
MindFusion.Diagramming.XmlPersistContext.__class = true;

MindFusion.Drawing.Canvas.prototype = {
	clientToDoc: function(point) {
		/// <summary>Transforms a point from client to document coordinates.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The point to transform.</param>
		/// <returns type="MindFusion.Drawing.Point">The transformed point.</returns>
	},
	dispose: function() {
		/// <summary>Overrides Component.Dispose</summary>
	},
	docToClient: function(point) {
		/// <summary>Transforms a point from document to client coordinates.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The point to transform.</param>
		/// <returns type="MindFusion.Drawing.Point">The transformed point.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the underlying Canvas element's bounds.</summary>
		/// <returns type="MindFusion.Drawing.Rect">A Rect instance.</returns>
	},
	getLicenseLocation: function() {
		/// <summary>Gets the URL of the diagram's license file.</summary>
		/// <returns type="String">A valid URL string that specifies the location of the license key.</returns>
	},
	getMeasureUnit: function() {
		/// <summary>Gets the unit of measure used for logical coordinates.</summary>
		/// <returns type="MindFusion.Drawing.GraphicsUnit">The current measure unit.</returns>
	},
	getMinVisibleFontSize: function() {
		/// <summary>Gets a threshold value that hides text if scaled font sizes become smaller.</summary>
		/// <returns type="Number">A value specifying the smallest visible font size.</returns>
	},
	getZoomFactor: function() {
		/// <summary>Gets the zoom factor.</summary>
		/// <returns type="Number">The current zoom factor.</returns>
	},
	setBounds: function(bounds) {
		/// <summary>Sets the underlying Canvas element's bounds.</summary>
		/// <param name="bounds" type="MindFusion.Drawing.Rect">A Rect instance.</param>
	},
	setLicenseLocation: function(value) {
		/// <summary>Sets the URL of the diagram's license file.</summary>
		/// <param name="value" type="String">A valid URL string that specifies the location of the license key.</param>
	},
	setMeasureUnit: function(value) {
		/// <summary>Sets the unit of measure used for logical coordinates.</summary>
		/// <param name="value" type="MindFusion.Drawing.GraphicsUnit">A GraphicsUnit instance.</param>
	},
	setMinVisibleFontSize: function(value) {
		/// <summary>Sets a threshold value that hides text if scaled font sizes become smaller.</summary>
		/// <param name="value" type="Number">A value specifying the smallest visible font size.</param>
	},
	setZoomFactor: function(value) {
		/// <summary>Sets the zoom factor.</summary>
		/// <param name="value" type="Number">The zoom factor.</param>
	}
};
MindFusion.Drawing.Canvas.__class = true;

MindFusion.Drawing.Canvas.create = function(element) {
	/// <summary>Creates and initializes a new Canvas from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the diagram should be attached to.</param>
	/// <returns type="MindFusion.Drawing.Canvas">A Canvas object that represents the newly created canvas.</returns>
};

MindFusion.Drawing.Component.prototype = {
};
MindFusion.Drawing.Component.__class = true;

MindFusion.Drawing.DashStyle.prototype = {
	Dash: 0,
	DashDot: 1,
	DashDotDot: 2,
	Dot: 3,
	Solid: 4
};
MindFusion.Drawing.DashStyle.__enum = true;

MindFusion.Drawing.DashStyle.prototype = {
	Dash: 0,
	DashDot: 1,
	DashDotDot: 2,
	Dot: 3,
	Solid: 4
};
MindFusion.Drawing.DashStyle.__enum = true;

MindFusion.Drawing.Ellipse.prototype = {
	clone: function() {
		/// <summary>Creates a Ellipse object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Ellipse">The newly created Ellipse object.</returns>
	}
};
MindFusion.Drawing.Ellipse.__class = true;

MindFusion.Drawing.Font.prototype = {
};
MindFusion.Drawing.Font.__class = true;

MindFusion.Drawing.FontStyle.prototype = {
	Bold: 0,
	Italic: 1,
	Regular: 2,
	Underline: 3
};
MindFusion.Drawing.FontStyle.__enum = true;

MindFusion.Drawing.FontStyle.prototype = {
	Bold: 0,
	Italic: 1,
	Regular: 2,
	Underline: 3
};
MindFusion.Drawing.FontStyle.__enum = true;

MindFusion.Drawing.Image.prototype = {
};
MindFusion.Drawing.Image.__class = true;

MindFusion.Drawing.ImageAlign.prototype = {
	BottomCenter: 0,
	BottomLeft: 1,
	BottomRight: 2,
	Center: 3,
	Fit: 4,
	MiddleLeft: 5,
	MiddleRight: 6,
	Stretch: 7,
	Tile: 8,
	TopCenter: 9,
	TopLeft: 10,
	TopRight: 11
};
MindFusion.Drawing.ImageAlign.__enum = true;

MindFusion.Drawing.Path.prototype = {
	addEllipse: function(x, y, width, height) {
		/// <summary>Adds an ellipse figure to the path.</summary>
		/// <param name="x" type="Number">The x-coordinate of the center of the ellipse.</param>
		/// <param name="y" type="Number">The y-coordinate of the center of the ellipse.</param>
		/// <param name="width" type="Number">The width of the ellipse.</param>
		/// <param name="height" type="Number">The height of the ellipse.</param>
	},
	addRect: function(x, y, width, height) {
		/// <summary>Adds a rectangle figure to the path.</summary>
		/// <param name="x" type="Number">The x-coordinate of the rectangle.</param>
		/// <param name="y" type="Number">The y-coordinate of the rectangle.</param>
		/// <param name="width" type="Number">The width of the rectangle.</param>
		/// <param name="height" type="Number">The height of the rectangle.</param>
	},
	arcTo: function(x, y, radius, startAngle, endAngle, anticlockwise) {
		/// <summary>Draws an arc.</summary>
		/// <param name="x" type="Number">The x-coordinate of the center of the circle.</param>
		/// <param name="y" type="Number">The y-coordinate of the center of the circle.</param>
		/// <param name="radius" type="Number">The radius of the circle</param>
		/// <param name="startAngle" type="Number">The starting angle in radians.</param>
		/// <param name="endAngle" type="Number">The ending angle in radians.</param>
		/// <param name="anticlockwise" type="Boolean">Specifies whether the drawing should be counterclockwise or clockwise.</param>
	},
	bezierTo: function(x1, y1, x2, y2, x3, y3) {
		/// <summary>Draws a cubic bezier curve.</summary>
		/// <param name="x1" type="Number">The x-coordinate of the first bezier control point.</param>
		/// <param name="y1" type="Number">The y-coordinate of the first bezier control point.</param>
		/// <param name="x2" type="Number">The x-coordinate of the second bezier control point.</param>
		/// <param name="y2" type="Number">The y-coordinate of the second bezier control point.</param>
		/// <param name="x3" type="Number">The x-coordinate of the ending point.</param>
		/// <param name="y3" type="Number">The y-coordinate of the ending point.</param>
	},
	clone: function() {
		/// <summary>Creates a Path object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Path">The newly created Path object.</returns>
	},
	close: function() {
		/// <summary>Closes the path.</summary>
	},
	done: function() {
		/// <summary>Ends the path definition.</summary>
	},
	empty: function() {
		/// <summary>Gets a value indicating whether this Path is empty.</summary>
		/// <returns type="Boolean">true if the path does not contain any figures; otherwise, false.</returns>
	},
	getBounds: function() {
		/// <summary>Gets the bounding rect of the path.</summary>
		/// <returns type="MindFusion.Drawing.Rect">The bounding rect.</returns>
	},
	init: function() {
		/// <summary>Begins a path or resets the current path.</summary>
	},
	lineTo: function(x, y) {
		/// <summary>Draws a line from the current point to the specified location.</summary>
		/// <param name="x" type="Number">The x-coordinate of the point.</param>
		/// <param name="y" type="Number">The y-coordinate of the point.</param>
	},
	moveTo: function(x, y) {
		/// <summary>Moves the path to the specified location.</summary>
		/// <param name="x" type="Number">The x-coordinate of the point.</param>
		/// <param name="y" type="Number">The y-coordinate of the point.</param>
	},
	quadraticCurveTo: function(x1, y1, x, y) {
		/// <summary>Draws a quadratic bezier curve.</summary>
		/// <param name="x1" type="Number">The x-coordinate of the bezier control point.</param>
		/// <param name="y1" type="Number">The y-coordinate of the bezier control point.</param>
		/// <param name="x" type="Number">The x-coordinate of the ending point.</param>
		/// <param name="y" type="Number">The y-coordinate of the ending point.</param>
	},
	setBrush: function(brush) {
		/// <summary>Sets the brush used to fill a closed path.</summary>
		/// <param name="brush" type="Object">The brush.</param>
	},
	setPen: function(pen) {
		/// <summary>Sets the pen used to draw the path.</summary>
		/// <param name="pen" type="Object">The pen.</param>
	},
	setText: function(text) {
		/// <summary>Sets the text displayed inside this path.</summary>
		/// <param name="text" type="String">The text.</param>
	}
};
MindFusion.Drawing.Path.__class = true;

MindFusion.Drawing.Point.prototype = {
	empty: function() {
		/// <summary>Gets a value indicating whether this Point is empty.</summary>
		/// <returns type="Boolean">true if both&#160;x and&#160;y are 0; otherwise, false.</returns>
	},
	equals: function(point) {
		/// <summary>Specifies whether this Point contains the same coordinates as the specified point.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point" optional="true">Optional. The Point to test.</param>
		/// <returns type="Boolean">true if point is a Point and has the same coordinates as this Point.</returns>
	}
};
MindFusion.Drawing.Point.__class = true;

MindFusion.Drawing.Rect.prototype = {
	bottom: function() {
		/// <summary>Gets the y-coordinate that is the sum of the&#160;y and height values of this Rect object.</summary>
		/// <returns type="Number">The y-coordinate that is the sum of&#160;y and height of this Rect.</returns>
	},
	bottomLeft: function() {
		/// <summary>Gets the bottom-left edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The bottom-left edge, which is a Point with&#160;x that is equal to&#160;x and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	bottomRight: function() {
		/// <summary>Gets the bottom-right edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The bottom-right edge, which is a Point with&#160;x that is the sum of&#160;x and width and with&#160;y that is the sum of&#160;y and height.</returns>
	},
	center: function() {
		/// <summary>Gets the center of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The center, which is a Point with&#160;x that is the sum of&#160;x and half of width and with&#160;y that is the sum of&#160;y and half of height.</returns>
	},
	clone: function() {
		/// <summary>Creates a Rect object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Rect">The newly created Rect object.</returns>
	},
	contains: function(rect) {
		/// <summary>Determines if the rectangular region represented by rect is entirely contained within this Rect object.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The Rect to test.</param>
		/// <returns type="Boolean">true if the rectangular region represented by rect is entirely contained within this Rect; otherwise, false.</returns>
	},
	containsPoint: function(point) {
		/// <summary>Determines if the specified point is contained within this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The point to check.</param>
		/// <returns type="Boolean">true if point is contained within the Rect; otherwise, false.</returns>
	},
	equals: function(rect) {
		/// <summary>Specifies whether this Rect contains the same coordinates as the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The Rect to test.</param>
		/// <returns type="Boolean">true if rect has the same coordinates as this Rect.</returns>
	},
	intersect: function(rect) {
		/// <summary>Returns a Rect object representing the intersection of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The rectangle to intersect.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect object representing the intersection of the two rectangles.</returns>
	},
	intersectsWith: function(rect) {
		/// <summary>Checks if this Rect intersects with the specified rect.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The other Rect.</param>
		/// <returns type="Boolean">true if this Rect and the specified Rect intersect; otherwise, false.</returns>
	},
	isEmpty: function() {
		/// <summary>Gets a value indicating whether this Rect is empty.</summary>
		/// <returns type="Boolean">true if both width and height are 0; otherwise, false.</returns>
	},
	left: function() {
		/// <summary>Gets the x-coordinate of the left edge of this Rect object.</summary>
		/// <returns type="Number">The x-coordinate of the left edge of this Rect object.</returns>
	},
	right: function() {
		/// <summary>Gets the x-coordinate that is the sum of x and width values of this Rect.</summary>
		/// <returns type="Number">The x-coordinate that is the sum of x and width of this rectangle.</returns>
	},
	setCenter: function(point) {
		/// <summary>Sets the center of this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The center of this Rect.</param>
	},
	setLocation: function(point) {
		/// <summary>Sets the top-left edge of this Rect object.</summary>
		/// <param name="point" type="MindFusion.Drawing.Point">The top-left edge of the Rect.</param>
	},
	top: function() {
		/// <summary>Gets the y-coordinate of the top edge of this Rect object.</summary>
	},
	topLeft: function() {
		/// <summary>Gets the top-left edge of this Rect.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-left edge of this Rect.</returns>
	},
	topMiddle: function() {
		/// <summary>Gets the top-middle of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-middle coordinate, which is a Point with x that is the sum of x and half of width and with y equal to y.</returns>
	},
	topRight: function() {
		/// <summary>Gets the top-right edge of this Rect object.</summary>
		/// <returns type="MindFusion.Drawing.Point">The top-right edge, which is a Point with x that is the sum of x and width and with y equal to y.</returns>
	},
	union: function(rect) {
		/// <summary>Returns a Rect object representing the union of the current rectangle with the specified rectangle.</summary>
		/// <param name="rect" type="MindFusion.Drawing.Rect">The rectangle to union.</param>
		/// <returns type="MindFusion.Drawing.Rect">A Rect object that bounds the union of the two rectangles.</returns>
	}
};
MindFusion.Drawing.Rect.__class = true;

MindFusion.Drawing.Rect.fromLTRB = function(l, t, r, b) {
	/// <summary>Creates a Rect object with the specified edge locations.</summary>
	/// <param name="l" type="Number">The x-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="t" type="Number">The y-coordinate of the upper-left corner of this Rect.</param>
	/// <param name="r" type="Number">The x-coordinate of the lower-right corner of this Rect.</param>
	/// <param name="b" type="Number">The y-coordinate of the lower-right corner of this Rect.</param>
	/// <returns type="MindFusion.Drawing.Rect">A rectangle with the specified coordinates.</returns>
};

MindFusion.Drawing.Size.prototype = {
};
MindFusion.Drawing.Size.__class = true;

MindFusion.Drawing.Text.prototype = {
	clone: function() {
		/// <summary>Creates a Text object identical to the current object.</summary>
		/// <returns type="MindFusion.Drawing.Text">The newly created Text object.</returns>
	},
	getBounds: function() {
		/// <summary>Gets a value indicating the bounding rectangle of the text container.</summary>
		/// <returns type="Rect">The bounding rectangle.</returns>
	},
	getFont: function() {
		/// <summary>Gets the font of the text.</summary>
		/// <returns type="Font">The font of the text.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets a value indicating the rotation of the text container.</summary>
		/// <returns type="Number">The angle.</returns>
	},
	getText: function() {
		/// <summary>Gets the text to be displayed.</summary>
		/// <returns type="String">The text.</returns>
	},
	setBounds: function(bounds, angle) {
		/// <summary>Sets a value indicating the bounding rectangle of the text container.</summary>
		/// <param name="bounds" type="Rect">The bounding rectangle.</param>
		/// <param name="angle" type="Number" optional="true">Optional. The rotation angle to be applied to the bounding rectangle.</param>
	},
	setFont: function(value) {
		/// <summary>Sets the font of the text.</summary>
		/// <param name="value" type="void"></param>
	},
	setText: function(value) {
		/// <summary>Sets the text to be displayed.</summary>
		/// <param name="value" type="void"></param>
	}
};
MindFusion.Drawing.Text.__class = true;

MindFusion.Drawing.Thickness.prototype = {
};
MindFusion.Drawing.Thickness.__class = true;

MindFusion.Drawing.Vector.prototype = {
};
MindFusion.Drawing.Vector.__class = true;

MindFusion.Gauges.Alignment.prototype = {
	CenterInside: 0,
	CenterOutside: 1,
	InnerCenter: 2,
	InnerInside: 3,
	InnerOutside: 4,
	OuterCenter: 5,
	OuterInside: 6,
	OuterOutside: 7,
	TrueCenter: 8
};
MindFusion.Gauges.Alignment.__enum = true;

MindFusion.Gauges.ArcArea.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the arc.</summary>
		/// <returns type="Number">The end angle of the arc.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the arc.</summary>
		/// <returns type="Number">The start angle of the arc.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the arc.</summary>
		/// <param name="value" type="Number">The end angle of the arc.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the arc.</summary>
		/// <param name="value" type="Number">The start angle of the arc.</param>
	}
};
MindFusion.Gauges.ArcArea.__class = true;

MindFusion.Gauges.ArcSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getIsCounterclockwise: function() {
		/// <summary>Gets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <returns type="Boolean">True if the arc is drawn in counterclockwise, otherwise false.</returns>
	},
	getIsLargeArc: function() {
		/// <summary>Gets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <returns type="Boolean">True if the arc should be greater than 180 degrees, otherwise false.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the endpoint of the elliptical arc.</summary>
		/// <returns type="Point">The endpoint of the elliptical arc.</returns>
	},
	getRotationAngle: function() {
		/// <summary>Gets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <returns type="Number">The amount (in degrees) by which the ellipse is rotated about the x-axis.</returns>
	},
	getSize: function() {
		/// <summary>Gets the x- and y-radius of the arc as a Size structure.</summary>
		/// <returns type="Size">The x- and y-radius of the arc as a Size structure.</returns>
	},
	setIsCounterclockwise: function(value) {
		/// <summary>Sets a value that indicates whether the arc is drawn in counterclockwise or clockwise direction.</summary>
		/// <param name="value" type="Boolean">True if the arc is drawn in counterclockwise, otherwise false.</param>
	},
	setIsLargeArc: function(value) {
		/// <summary>Sets a value that indicates whether the arc should be greater than 180 degrees.</summary>
		/// <param name="value" type="Boolean">True if the arc should be greater than 180 degrees, otherwise false.</param>
	},
	setPoint: function(value) {
		/// <summary>Sets the endpoint of the elliptical arc.</summary>
		/// <param name="value" type="Point">The endpoint of the elliptical arc.</param>
	},
	setRotationAngle: function(value) {
		/// <summary>Sets the amount (in degrees) by which the ellipse is rotated about the x-axis.</summary>
		/// <param name="value" type="Number">The amount (in degrees) by which the ellipse is rotated about the x-axis.</param>
	},
	setSize: function(value) {
		/// <summary>Sets the x- and y-radius of the arc as a Size structure.</summary>
		/// <param name="value" type="Size">The x- and y-radius of the arc as a Size structure.</param>
	}
};
MindFusion.Gauges.ArcSegment.__class = true;

MindFusion.Gauges.BaseGauge.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the element.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	addScale: function(scale) {
		/// <summary>Adds a scale to the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">The scale to add.</param>
	},
	getAutoPostBack: function() {
		/// <summary>Gets a value indicating whether the control will post back to the server when a pointer's value has changed.</summary>
		/// <returns type="Boolean">true if the control should post back, otherwise, false.</returns>
	},
	getElementByName: function(name) {
		/// <summary>Returns the VisualElement object corresponding to the specified name.</summary>
		/// <param name="name" type="String">The name of the object to find.</param>
	},
	getScales: function() {
		/// <summary>Returns the array of all scales in this gauge.</summary>
		/// <returns type="Array">Array of all BaseScale instances in the gauge.</returns>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the element.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	removeScale: function(scale) {
		/// <summary>Removes a scale from the gauge.</summary>
		/// <param name="scale" type="MindFusion.Gauges.BaseScale">The scale to remove.</param>
	},
	setAutoPostBack: function(value) {
		/// <summary>Sets a value indicating whether the control should post back to the server when a pointer's value has changed.</summary>
		/// <param name="value" type="Boolean">true if the control should post back, otherwise, false.</param>
	}
};
MindFusion.Gauges.BaseGauge.__class = true;

MindFusion.Gauges.BaseScale.prototype = {
	addPointer: function(pointer) {
		/// <summary>Adds a Pointer object to the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">The pointer to add.</param>
	},
	addRange: function(range) {
		/// <summary>Adds a Range object to the ranges collection.</summary>
		/// <param name="range" type="Range">The ranges to add.</param>
	},
	getCustomFunction: function() {
		/// <summary>Gets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <returns type="FunctionDelegate">The function to be used for distribution of values along the scale when functionType is set to Custom.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of the scale at its end.</summary>
		/// <returns type="Length">The width of the scale at its end.</returns>
	},
	getFunctionArgument: function() {
		/// <summary>Gets the argument passed to custom functions.</summary>
		/// <returns type="Number">The argument passed to custom functions.</returns>
	},
	getFunctionType: function() {
		/// <summary>Gets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <returns type="FunctionType">The type of the function used to calculate the distribution of values along the scale.</returns>
	},
	getLogarithmBase: function() {
		/// <summary>Gets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <returns type="Number">The logarithm base when functionType is set to Logarithmic.</returns>
	},
	getMajorTickSettings: function() {
		/// <summary>Gets the settings for the major ticks and their associated labels.</summary>
		/// <returns type="MajorTickSettings">The settings for the major ticks and their associated labels.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the maximal value displayed by the scale.</summary>
		/// <returns type="Number">The maximal value displayed by the scale.</returns>
	},
	getMiddleTickSettings: function() {
		/// <summary>Gets the settings for the middle ticks and their associated labels.</summary>
		/// <returns type="MiddleTickSettings">The settings for the middle ticks and their associated labels.</returns>
	},
	getMinorTickSettings: function() {
		/// <summary>Gets the settings for the minor ticks and their associated labels.</summary>
		/// <returns type="MinorTickSettings">The settings for the minor ticks and their associated labels.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the minimal value displayed by the scale.</summary>
		/// <returns type="Number">The minimal value displayed by the scale.</returns>
	},
	getPointers: function() {
		/// <summary>Returns the array of all pointers in this scale.</summary>
		/// <returns type="Array">Array of all Pointer instances in the scale.</returns>
	},
	getRanges: function() {
		/// <summary>Returns the array of all ranges in this scale.</summary>
		/// <returns type="Array">Array of all Range instances in the scale.</returns>
	},
	getReversedCustomFunction: function() {
		/// <summary>Gets the reversed version of the function specified through customFunction.</summary>
		/// <returns type="FunctionDelegate">The reversed version of the function specified through CustomFunction.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of the scale at its beginning.</summary>
		/// <returns type="Length">The width of the scale at its beginning.</returns>
	},
	removePointer: function(pointer) {
		/// <summary>Removes a Pointer object from the pointers collection.</summary>
		/// <param name="pointer" type="Pointer">The pointer to remove.</param>
	},
	removeRange: function(range) {
		/// <summary>Removes a Range object from the ranges collection.</summary>
		/// <param name="range" type="Range">The ranges to remove.</param>
	},
	setCustomFunction: function(value) {
		/// <summary>Sets the function to be used for distribution of values along the scale when functionType is set to Custom.</summary>
		/// <param name="value" type="FunctionDelegate">The function to be used for distribution of values along the scale when functionType is set to Custom.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of the scale at its end.</summary>
		/// <param name="value" type="Length">The width of the scale at its end.</param>
	},
	setFunctionArgument: function(value) {
		/// <summary>Sets the argument passed to custom functions.</summary>
		/// <param name="value" type="Number">The argument passed to custom functions.</param>
	},
	setFunctionType: function(value) {
		/// <summary>Sets the type of the function used to calculate the distribution of values along the scale.</summary>
		/// <param name="value" type="FunctionType">The type of the function used to calculate the distribution of values along the scale.</param>
	},
	setLogarithmBase: function(value) {
		/// <summary>Sets the logarithm base when FunctionType is set to Logarithmic.</summary>
		/// <param name="value" type="Number">The logarithm base when functionType is set to Logarithmic.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the maximal value displayed by the scale.</summary>
		/// <param name="value" type="Number">The maximal value displayed by the scale.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the minimal value displayed by the scale.</summary>
		/// <param name="value" type="Number">The minimal value displayed by the scale.</param>
	},
	setReversedCustomFunction: function(value) {
		/// <summary>Sets the reversed version of the function specified through customFunction.</summary>
		/// <param name="value" type="FunctionDelegate">The reversed version of the function specified through CustomFunction.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of the scale at its beginning.</summary>
		/// <param name="value" type="Length">The width of the scale at its beginning.</param>
	}
};
MindFusion.Gauges.BaseScale.__class = true;

MindFusion.Gauges.CenterPanel.prototype = {
};
MindFusion.Gauges.CenterPanel.__class = true;

MindFusion.Gauges.CustomInterval.prototype = {
	contains: function(value) {
		/// <summary>Checks whether the specified value falls within this interval.</summary>
		/// <param name="value" type="void"></param>
	},
	getFill: function() {
		/// <summary>Gets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <returns type="Object">The brush to apply as a background of the elements within the custom interval.</returns>
	},
	getForeground: function() {
		/// <summary>Gets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <returns type="Object">The color to apply as a foreground to the elements within this custom interval.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end of this custom interval.</summary>
		/// <returns type="Number">The end of this custom interval.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start of this custom interval.</summary>
		/// <returns type="Number">The start of this custom interval.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <returns type="Object">The brush to apply as an outline of the elements within the custom interval.</returns>
	},
	setFill: function(value) {
		/// <summary>Sets the brush to apply as a background of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">The brush to apply as a background of the elements within the custom interval.</param>
	},
	setForeground: function(value) {
		/// <summary>Sets the color to apply as a foreground to the elements within this custom interval.</summary>
		/// <param name="value" type="Object">The color to apply as a foreground to the elements within this custom interval.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end of this custom interval.</summary>
		/// <param name="value" type="Number">The end of this custom interval.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start of this custom interval.</summary>
		/// <param name="value" type="Number">The start of this custom interval.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the brush to apply as an outline of the elements within the custom interval.</summary>
		/// <param name="value" type="Object">The brush to apply as an outline of the elements within the custom interval.</param>
	}
};
MindFusion.Gauges.CustomInterval.__class = true;

MindFusion.Gauges.DisplayType.prototype = {
	Always: 0,
	Auto: 1,
	Never: 2
};
MindFusion.Gauges.DisplayType.__enum = true;

MindFusion.Gauges.Ellipse.prototype = {
};
MindFusion.Gauges.Ellipse.__class = true;

MindFusion.Gauges.Events.prototype = {
};
MindFusion.Gauges.Events.__class = true;

MindFusion.Gauges.FunctionType.prototype = {
	Custom: 0,
	Linear: 1,
	Logarithmic: 2
};
MindFusion.Gauges.FunctionType.__enum = true;

MindFusion.Gauges.GeometryFactory.prototype = {
};
MindFusion.Gauges.GeometryFactory.__class = true;

MindFusion.Gauges.GeometryFactory.createLinearGeometry = function(centerX, centerY, startInnerOffset, startOuterOffset, endInnerOffset, endOuterOffset, length, isVertical, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a linear bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerOffset" type="Number">The start inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="startOuterOffset" type="Number">The start outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="endInnerOffset" type="Number">The end inner offset of the generated geometry relative to the specified center.</param>
	/// <param name="endOuterOffset" type="Number">The end outer offset of the generated geometry relative to the specified center.</param>
	/// <param name="length" type="Number">The length of the generated geometry.</param>
	/// <param name="isVertical" type="Boolean">A flag indicating whether the generated geometry is vertical.</param>
	/// <param name="capStart" type="Boolean">A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">A flag indicating whether to draw a stroke at the inner side of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">A flag indicating whether to draw a stroke at the outer side of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a linear bar with the specified parameters.</returns>
};
MindFusion.Gauges.GeometryFactory.createRadialGeometry = function(centerX, centerY, startInnerRadius, startOuterRadius, endInnerRadius, endOuterRadius, startAngle, endAngle, capStart, capEnd, strokeInner, strokeOuter) {
	/// <summary>Generates a radial bar geometry with the specified parameters.</summary>
	/// <param name="centerX" type="Number">The x-coordinate of the generated geometry.</param>
	/// <param name="centerY" type="Number">The y-coordinate of the generated geometry.</param>
	/// <param name="startInnerRadius" type="Number">The radius of the start point of the inner outline of the bar.</param>
	/// <param name="startOuterRadius" type="Number">The radius of the start point of the outer outline of the bar.</param>
	/// <param name="endInnerRadius" type="Number">The radius of the end point of the inner outline of the bar.</param>
	/// <param name="endOuterRadius" type="Number">The radius of the end point of the outer outline of the bar.</param>
	/// <param name="startAngle" type="Number">The start angle of the radial bar.</param>
	/// <param name="endAngle" type="Number">The end angle of the radial bar.</param>
	/// <param name="capStart" type="Boolean">A flag indicating whether to draw a stroke at the start of the bar.</param>
	/// <param name="capEnd" type="Boolean">A flag indicating whether to draw a stroke at the end of the bar.</param>
	/// <param name="strokeInner" type="Boolean">A flag indicating whether to draw a stroke at the inner curve of the bar.</param>
	/// <param name="strokeOuter" type="Boolean">A flag indicating whether to draw a stroke at the outer curve of the bar.</param>
	/// <returns type="PathFigure">A PathFigure representing a radial bar with the specified parameters.</returns>
};

MindFusion.Gauges.LabelRotation.prototype = {
	Auto: 0,
	BaselineAwayFromCenter: 1,
	BaselineToCenter: 2,
	None: 3,
	Sideways: 4
};
MindFusion.Gauges.LabelRotation.__enum = true;

MindFusion.Gauges.Length.prototype = {
	getAbsoluteLength: function(space) {
		/// <summary>Calculates the absolute length corresponding to the specified argument, relative to the the specified area.</summary>
		/// <param name="space" type="void"></param>
	},
	getType: function() {
		/// <summary>Gets the type of this length.</summary>
		/// <returns type="LengthType">The type of this length.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value representing this length.</summary>
		/// <returns type="Number">The value representing this length.</returns>
	},
	setType: function(value) {
		/// <summary>Sets the type of this length.</summary>
		/// <param name="value" type="LengthType">The type of this length.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value representing this length.</summary>
		/// <param name="value" type="Number">The value representing this length.</param>
	}
};
MindFusion.Gauges.Length.__class = true;

MindFusion.Gauges.LengthType.prototype = {
	Absolute: 0,
	Relative: 1
};
MindFusion.Gauges.LengthType.__enum = true;

MindFusion.Gauges.LinearGauge.prototype = {
	getOrientation: function() {
		/// <summary>Gets the orientation of the gauge.</summary>
		/// <returns type="Orientation">The orientation of the gauge.</returns>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the gauge.</summary>
		/// <param name="value" type="Orientation">The orientation of the gauge.</param>
	}
};
MindFusion.Gauges.LinearGauge.__class = true;

MindFusion.Gauges.LinearGauge.create = function(element) {
	/// <summary>Creates and initializes a new LinearGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the LinearGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.LinearGauge.find = function(id, parent) {
	/// <summary>Returns the specified LinearGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the LinearGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the LinearGauge to find.</param>
	/// <returns type="MindFusion.Gauges.LinearGauge">A LinearGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.LinearScale.prototype = {
	getLeft: function() {
		/// <summary>Gets the distance between the left of this scale and the left of its container.</summary>
		/// <returns type="Length">The distance between the left of this scale and the left of its container.</returns>
	},
	getOrientation: function() {
		/// <summary>Gets the orientation of the scale.</summary>
		/// <returns type="Orientation">The orientation of the scale.</returns>
	},
	getScaleAlignment: function() {
		/// <summary>Gets the alignment of the scale.</summary>
		/// <returns type="Alignment">The alignment of the scale.</returns>
	},
	getScaleLength: function() {
		/// <summary>Gets the length of the scale.</summary>
		/// <returns type="Length">The length of the scale.</returns>
	},
	getTop: function() {
		/// <summary>Gets the distance between the top of this scale and the top of its container.</summary>
		/// <returns type="Length">The distance between the top of this scale and the top of its container.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">The point to test.</param>
		/// <returns type="Number">The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setLeft: function(value) {
		/// <summary>Sets the distance between the left of this scale and the left of its container.</summary>
		/// <param name="value" type="Length">The distance between the left of this scale and the left of its container.</param>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the scale.</summary>
		/// <param name="value" type="Orientation">The orientation of the scale.</param>
	},
	setScaleAlignment: function(value) {
		/// <summary>Sets the alignment of the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the scale.</param>
	},
	setScaleLength: function(value) {
		/// <summary>Sets the length of the scale.</summary>
		/// <param name="value" type="Length">The length of the scale.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the distance between the top of this scale and the top of its container.</summary>
		/// <param name="value" type="Length">The distance between the top of this scale and the top of its container.</param>
	}
};
MindFusion.Gauges.LinearScale.__class = true;

MindFusion.Gauges.LineSegment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Segment.addTo override.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getPoint: function() {
		/// <summary>Gets the end point of the line segment.</summary>
		/// <returns type="Point">The end point of the line segment.</returns>
	},
	setPoint: function(value) {
		/// <summary>Sets the end point of the line segment.</summary>
		/// <param name="value" type="Point">The end point of the line segment.</param>
	}
};
MindFusion.Gauges.LineSegment.__class = true;

MindFusion.Gauges.MajorTickSettings.prototype = {
};
MindFusion.Gauges.MajorTickSettings.__class = true;

MindFusion.Gauges.MiddleTickSettings.prototype = {
};
MindFusion.Gauges.MiddleTickSettings.__class = true;

MindFusion.Gauges.MinorTickSettings.prototype = {
};
MindFusion.Gauges.MinorTickSettings.__class = true;

MindFusion.Gauges.MouseAction.prototype = {
	Down: 0,
	Move: 1,
	Up: 2
};
MindFusion.Gauges.MouseAction.__enum = true;

MindFusion.Gauges.MouseInfo.prototype = {
	getAction: function() {
		/// <summary>Gets the action that was performed.</summary>
		/// <returns type="MouseAction">The action that was performed.</returns>
	},
	getPoint: function() {
		/// <summary>Gets the mouse location.</summary>
		/// <returns type="Point">The mouse location.</returns>
	}
};
MindFusion.Gauges.MouseInfo.__class = true;

MindFusion.Gauges.Orientation.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Gauges.Orientation.__enum = true;

MindFusion.Gauges.OvalGauge.prototype = {
	getStyle: function() {
		/// <summary>Gets the visual style of the gauge.</summary>
		/// <returns type="OvalGaugeStyle">The visual style of the gauge.</returns>
	},
	setStyle: function(value) {
		/// <summary>Sets the visual style of the gauge.</summary>
		/// <param name="value" type="OvalGaugeStyle">The visual style of the gauge.</param>
	}
};
MindFusion.Gauges.OvalGauge.__class = true;

MindFusion.Gauges.OvalGauge.create = function(element) {
	/// <summary>Creates and initializes a new OvalGauge from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">The DOM element that the OvalGauge should be attached to.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that represents the newly created gauge.</returns>
};
MindFusion.Gauges.OvalGauge.find = function(id, parent) {
	/// <summary>Returns the specified OvalGauge object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">A string that contains the ID of the OvalGauge to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. The component or element that contains the OvalGauge to find.</param>
	/// <returns type="MindFusion.Gauges.OvalGauge">A OvalGauge object that contains the gauge requested by id, if found; otherwise, null.</returns>
};

MindFusion.Gauges.OvalGaugeStyle.prototype = {
	Circular: 0,
	QuadraticNE: 1,
	QuadraticNW: 2,
	QuadraticSE: 3,
	QuadraticSW: 4,
	SemicircleE: 5,
	SemicircleN: 6,
	SemicircleS: 7,
	SemicircleW: 8
};
MindFusion.Gauges.OvalGaugeStyle.__enum = true;

MindFusion.Gauges.OvalScale.prototype = {
	getEndAngle: function() {
		/// <summary>Gets the end angle of the scale.</summary>
		/// <returns type="Number">The end angle of the scale.</returns>
	},
	getScaleRelativeCenter: function() {
		/// <summary>Gets the center of the scale relative to the scale bounds.</summary>
		/// <returns type="Point">The center of the scale relative to the scale bounds.</returns>
	},
	getScaleRelativeRadius: function() {
		/// <summary>Gets the radius of the scale relative to the scale bounds.</summary>
		/// <returns type="Number">The radius of the scale relative to the scale bounds.</returns>
	},
	getStartAngle: function() {
		/// <summary>Gets the start angle of the scale.</summary>
		/// <returns type="Number">The start angle of the scale.</returns>
	},
	getValueFromPoint: function(point) {
		/// <summary>BaseScale.getValueFromPoint override.</summary>
		/// <param name="point" type="Point">The point to test.</param>
		/// <returns type="Number">The value from the scale, corresponding to the point, possibly MinValue orMaxValue if the specified point cannot be associated with a value.</returns>
	},
	setEndAngle: function(value) {
		/// <summary>Sets the end angle of the scale.</summary>
		/// <param name="value" type="Number">The end angle of the scale.</param>
	},
	setScaleRelativeCenter: function(value) {
		/// <summary>Sets the center of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Point">The center of the scale relative to the scale bounds.</param>
	},
	setScaleRelativeRadius: function(value) {
		/// <summary>Sets the radius of the scale relative to the scale bounds.</summary>
		/// <param name="value" type="Number">The radius of the scale relative to the scale bounds.</param>
	},
	setStartAngle: function(value) {
		/// <summary>Sets the start angle of the scale.</summary>
		/// <param name="value" type="Number">The start angle of the scale.</param>
	}
};
MindFusion.Gauges.OvalScale.__class = true;

MindFusion.Gauges.PaintEventArgs.prototype = {
	getContext: function() {
		/// <summary>Gets the canvas rendering context.</summary>
		/// <returns type="CanvasRenderingContext2D">A rendering context used to draw on the Canvas element.</returns>
	},
	getElement: function() {
		/// <summary>Gets the element being custom drawn.</summary>
		/// <returns type="VisualElement">A VisualElement instance.</returns>
	},
	paintVisualElement: function(element, constraint) {
		/// <summary>Paints the specified visual element to the underlying canvas.</summary>
		/// <param name="element" type="void"></param>
		/// <param name="constraint" type="void"></param>
		/// <returns type="VisualElement">element The VisualElement to paint.</returns>
	},
	setElement: function(value) {
		/// <summary>Sets the element being custom drawn.</summary>
		/// <param name="value" type="VisualElement">A VisualElement instance.</param>
	}
};
MindFusion.Gauges.PaintEventArgs.__class = true;

MindFusion.Gauges.PathFigure.prototype = {
};
MindFusion.Gauges.PathFigure.__class = true;

MindFusion.Gauges.Pointer.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of the pointer relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the pointer relative to the scale.</returns>
	},
	getCustomShape: function() {
		/// <summary>Gets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <returns type="String">The definition of the pointer shape when Shape is set to Custom.</returns>
	},
	getIsDiscrete: function() {
		/// <summary>Gets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <returns type="Boolean">True if the pointer is discrete, otherwise false.</returns>
	},
	getIsInteractive: function() {
		/// <summary>Gets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <returns type="Boolean">True if the pointer is interactive, otherwise false.</returns>
	},
	getPointerHeight: function() {
		/// <summary>Gets the height of the pointer.</summary>
		/// <returns type="Length">The height of the pointer.</returns>
	},
	getPointerOffset: function() {
		/// <summary>Gets the offset of the pointer along the direction it points to.</summary>
		/// <returns type="Length">The offset of the pointer along the direction it points to.</returns>
	},
	getPointerWidth: function() {
		/// <summary>Gets the width of the pointer.</summary>
		/// <returns type="Length">The width of the pointer.</returns>
	},
	getShape: function() {
		/// <summary>Gets the shape of the pointer.</summary>
		/// <returns type="PointerShape">The shape of the pointer.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value this pointer points to.</summary>
		/// <returns type="Number">The value this pointer points to.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of the pointer relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the pointer relative to the scale.</param>
	},
	setCustomShape: function(value) {
		/// <summary>Sets the definition of the pointer shape when Shape is set to Custom.</summary>
		/// <param name="value" type="String">The definition of the pointer shape when Shape is set to Custom.</param>
	},
	setIsDiscrete: function(value) {
		/// <summary>Sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer).</summary>
		/// <param name="value" type="Boolean">True if the pointer is discrete, otherwise false.</param>
	},
	setIsInteractive: function(value) {
		/// <summary>Sets a value indicating whether the pointer position should be affected by user interactions.</summary>
		/// <param name="value" type="Boolean">True if the pointer is interactive, otherwise false.</param>
	},
	setPointerHeight: function(value) {
		/// <summary>Sets the height of the pointer.</summary>
		/// <param name="value" type="Length">The height of the pointer.</param>
	},
	setPointerOffset: function(value) {
		/// <summary>Sets the offset of the pointer along the direction it points to.</summary>
		/// <param name="value" type="Length">The offset of the pointer along the direction it points to.</param>
	},
	setPointerWidth: function(value) {
		/// <summary>Sets the width of the pointer.</summary>
		/// <param name="value" type="Length">The width of the pointer.</param>
	},
	setShape: function(value) {
		/// <summary>Sets the shape of the pointer.</summary>
		/// <param name="value" type="PointerShape">The shape of the pointer.</param>
	},
	setValue: function(value) {
		/// <summary>Sets the value this pointer points to.</summary>
		/// <param name="value" type="Number">The value this pointer points to.</param>
	}
};
MindFusion.Gauges.Pointer.__class = true;

MindFusion.Gauges.PointerShape.prototype = {
	Custom: 0,
	Ellipse: 1,
	Needle: 2,
	Needle2: 3,
	None: 4,
	Rectangle: 5
};
MindFusion.Gauges.PointerShape.__enum = true;

MindFusion.Gauges.PrepaintEventArgs.prototype = {
	getCancelDefaultPainting: function() {
		/// <summary>Gets a value indicating whether the default painting of this element should be performed.</summary>
		/// <returns type="Boolean">true if the default painting of this element should be performed; otherwise, false.</returns>
	},
	setCancelDefaultPainting: function(value) {
		/// <summary>Sets a value indicating whether the default painting of this element should be performed.</summary>
		/// <param name="value" type="Boolean">true if the default painting of this element should be performed; otherwise, false.</param>
	}
};
MindFusion.Gauges.PrepaintEventArgs.__class = true;

MindFusion.Gauges.Range.prototype = {
	getAlignment: function() {
		/// <summary>Gets the alignment of this range relative to the scale it is associated with.</summary>
		/// <returns type="Alignment">The alignment of this range relative to the scale it is associated with.</returns>
	},
	getAutoSize: function() {
		/// <summary>Gets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <returns type="Boolean">True if the range is autosized, otherwise false.</returns>
	},
	getCapEnd: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke in the end of this range, otherwise false.</returns>
	},
	getCapStart: function() {
		/// <summary>Gets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke in the beginning of this range, otherwise false.</returns>
	},
	getEndWidth: function() {
		/// <summary>Gets the width of this range at its end.</summary>
		/// <returns type="Length">The width of this range at its end.</returns>
	},
	getMaxValue: function() {
		/// <summary>Gets the end value of this range.</summary>
		/// <returns type="Number">The end value of this range.</returns>
	},
	getMinValue: function() {
		/// <summary>Gets the start value of this range.</summary>
		/// <returns type="Number">The start value of this range.</returns>
	},
	getOffset: function() {
		/// <summary>Gets the offset of the range from the position calculated according to its alignment.</summary>
		/// <returns type="Length">The offset of the range from the position calculated according to its alignment.</returns>
	},
	getStartWidth: function() {
		/// <summary>Gets the width of this range at its start.</summary>
		/// <returns type="Length">The width of this range at its start.</returns>
	},
	getStrokeInside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke at the inside of this range, otherwise false.</returns>
	},
	getStrokeOutside: function() {
		/// <summary>Gets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <returns type="Boolean">True if there should be a stroke at the outside of this range, otherwise false.</returns>
	},
	setAlignment: function(value) {
		/// <summary>Sets the alignment of this range relative to the scale it is associated with.</summary>
		/// <param name="value" type="Alignment">The alignment of this range relative to the scale it is associated with.</param>
	},
	setAutoSize: function(value) {
		/// <summary>Sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale.</summary>
		/// <param name="value" type="Boolean">True if the range is autosized, otherwise false.</param>
	},
	setCapEnd: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the end of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke in the end of this range, otherwise false.</param>
	},
	setCapStart: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke in the beginning of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke in the beginning of this range, otherwise false.</param>
	},
	setEndWidth: function(value) {
		/// <summary>Sets the width of this range at its end.</summary>
		/// <param name="value" type="Length">The width of this range at its end.</param>
	},
	setMaxValue: function(value) {
		/// <summary>Sets the end value of this range.</summary>
		/// <param name="value" type="Number">The end value of this range.</param>
	},
	setMinValue: function(value) {
		/// <summary>Sets the start value of this range.</summary>
		/// <param name="value" type="Number">The start value of this range.</param>
	},
	setOffset: function(value) {
		/// <summary>Sets the offset of the range from the position calculated according to its alignment.</summary>
		/// <param name="value" type="Length">The offset of the range from the position calculated according to its alignment.</param>
	},
	setStartWidth: function(value) {
		/// <summary>Sets the width of this range at its start.</summary>
		/// <param name="value" type="Length">The width of this range at its start.</param>
	},
	setStrokeInside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the inside of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke at the inside of this range, otherwise false.</param>
	},
	setStrokeOutside: function(value) {
		/// <summary>Sets a value indicating whether to draw a stroke at the outside of this range.</summary>
		/// <param name="value" type="Boolean">True if there should be a stroke at the outside of this range, otherwise false.</param>
	}
};
MindFusion.Gauges.Range.__class = true;

MindFusion.Gauges.RoundRectangle.prototype = {
	getRoundness: function() {
		/// <summary>Gets the relative roundness of this rectangle's corners.</summary>
		/// <returns type="Number">The relative roundness of this rectangle's corners.</returns>
	},
	setRoundness: function(value) {
		/// <summary>Sets the relative roundness of this rectangle's corners.</summary>
		/// <param name="value" type="Number">The relative roundness of this rectangle's corners.</param>
	}
};
MindFusion.Gauges.RoundRectangle.__class = true;

MindFusion.Gauges.Segment.prototype = {
	addTo: function(path, startPoint, isOutline) {
		/// <summary>Adds the segment to the specified graphics path.</summary>
		/// <param name="path" type="void"></param>
		/// <param name="startPoint" type="void"></param>
		/// <param name="isOutline" type="void"></param>
	},
	getIsStroked: function() {
		/// <summary>Gets a value that indicates whether the segment is stroked.</summary>
		/// <returns type="Boolean">True if the segment is stroked, otherwise false.</returns>
	},
	setIsStroked: function(value) {
		/// <summary>Sets a value that indicates whether the segment is stroked.</summary>
		/// <param name="value" type="Boolean">True if the segment is stroked, otherwise false.</param>
	}
};
MindFusion.Gauges.Segment.__class = true;

MindFusion.Gauges.Thickness.prototype = {
	apply: function(rect) {
		/// <summary>Applies the current thickness to the specified rectangle by deflating the rectangle.</summary>
		/// <param name="rect" type="Rect">The rectangle to deflate.</param>
		/// <returns type="Rect">The modified rectangle.</returns>
	},
	getBottom: function() {
		/// <summary>Gets the width of the bottom side of the frame.</summary>
		/// <returns type="Number">The width of the bottom side of the frame.</returns>
	},
	getIsRelative: function() {
		/// <summary>Gets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">True if the thickness is relative, otherwise false.</returns>
	},
	getLeft: function() {
		/// <summary>Gets the width of the left side of the frame.</summary>
		/// <returns type="Number">The width of the left side of the frame.</returns>
	},
	getRight: function() {
		/// <summary>Gets the width of the right side of the frame.</summary>
		/// <returns type="Number">The width of the right side of the frame.</returns>
	},
	getTop: function() {
		/// <summary>Gets the width of the top side of the frame.</summary>
		/// <returns type="Number">The width of the top side of the frame.</returns>
	},
	setBottom: function(value) {
		/// <summary>Sets the width of the top bottom of the frame.</summary>
		/// <param name="value" type="Number">The width of the bottom side of the frame.</param>
	},
	setIsRelative: function(value) {
		/// <summary>Sets a flag indicating whether the thickness properties are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">True if the thickness is relative, otherwise false.</param>
	},
	setLeft: function(value) {
		/// <summary>Sets the width of the left side of the frame.</summary>
		/// <param name="value" type="Number">The width of the left side of the frame.</param>
	},
	setRight: function(value) {
		/// <summary>Sets the width of the right side of the frame.</summary>
		/// <param name="value" type="Number">The width of the right side of the frame.</param>
	},
	setTop: function(value) {
		/// <summary>Sets the width of the top side of the frame.</summary>
		/// <param name="value" type="Number">The width of the top side of the frame.</param>
	},
	toAbsolute: function(size) {
		/// <summary>Converts the current thickness to absolute value relative to the specified size.</summary>
		/// <param name="size" type="void"></param>
	}
};
MindFusion.Gauges.Thickness.__class = true;

MindFusion.Gauges.Tick.prototype = {
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this tick.</summary>
		/// <returns type="TickSettings">The TickSettings object associated with this tick.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this tick.</summary>
		/// <returns type="Number">The value associated with this tick.</returns>
	}
};
MindFusion.Gauges.Tick.__class = true;

MindFusion.Gauges.TickLabel.prototype = {
	getForeground: function() {
		/// <summary>Gets the foreground color of this label.</summary>
		/// <returns type="Color">The foreground color of this label.</returns>
	},
	getRawValue: function() {
		/// <summary>Gets the value associated with this tick before it was processed by any value distribution functions.</summary>
		/// <returns type="Number">The value associated with this tick before it was processed by any value distribution functions.</returns>
	},
	getSettings: function() {
		/// <summary>Gets the TickSettings object associated with this label.</summary>
		/// <returns type="TickSettings">The TickSettings object associated with this label.</returns>
	},
	getValue: function() {
		/// <summary>Gets the value associated with this label.</summary>
		/// <returns type="Number">The value associated with this label.</returns>
	}
};
MindFusion.Gauges.TickLabel.__class = true;

MindFusion.Gauges.TickSettings.prototype = {
	addCustomInterval: function(interval) {
		/// <summary>Adds a CustomInterval object to these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">The interval to add.</param>
	},
	getCount: function() {
		/// <summary>Gets the number of ticks and labels.</summary>
		/// <returns type="Number">The number of ticks and labels.</returns>
	},
	getCustomIntervals: function() {
		/// <summary>Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</summary>
		/// <returns type="Array">An array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill brush of the ticks.</summary>
		/// <returns type="Object">The fill brush of the ticks.</returns>
	},
	getFontFamily: function() {
		/// <summary>Gets the font family of the labels.</summary>
		/// <returns type="String">The font family of the labels.</returns>
	},
	getFontSize: function() {
		/// <summary>Gets the font size of the labels.</summary>
		/// <returns type="Length">The font size of the labels.</returns>
	},
	getFontStyle: function() {
		/// <summary>Gets the font style of the labels.</summary>
		/// <returns type="String">The font style of the labels.</returns>
	},
	getLabelAlignment: function() {
		/// <summary>Gets the alignment of the labels relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the labels relative to the scale.</returns>
	},
	getLabelForeground: function() {
		/// <summary>Gets the brush used to paint label texts.</summary>
		/// <returns type="Object">The brush used to paint label texts.</returns>
	},
	getLabelOffset: function() {
		/// <summary>Gets the offset of the labels relative to their calculated position.</summary>
		/// <returns type="Length">The offset of the labels relative to their calculated position.</returns>
	},
	getLabelRotation: function() {
		/// <summary>Gets the rotation mode of the labels.</summary>
		/// <returns type="LabelRotation">The rotation mode of the labels.</returns>
	},
	getNumberPrecision: function() {
		/// <summary>Gets the number recision of the labels.</summary>
		/// <returns type="Number">The number recision of the labels.</returns>
	},
	getShowLabels: function() {
		/// <summary>Gets a value indicating whether the labels are visible.</summary>
		/// <returns type="Boolean">True if labels are visible, otherwise false.</returns>
	},
	getShowMaxValueTick: function() {
		/// <summary>Gets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <returns type="Boolean">True to display a tick for the maxValue, otherwise false.</returns>
	},
	getShowTicks: function() {
		/// <summary>Gets a value indicating whether the ticks are visible.</summary>
		/// <returns type="Boolean">True if ticks are visible, otherwise false.</returns>
	},
	getStep: function() {
		/// <summary>Gets the value between adjacent ticks and labels.</summary>
		/// <returns type="Number">The value between adjacent ticks and labels.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke brush of the ticks.</summary>
		/// <returns type="Object">The stroke brush of the ticks.</returns>
	},
	getTickAlignment: function() {
		/// <summary>Gets the alignment of the ticks relative to the scale.</summary>
		/// <returns type="Alignment">The alignment of the ticks relative to the scale.</returns>
	},
	getTickHeight: function() {
		/// <summary>Gets the height of a tick.</summary>
		/// <returns type="Length">The height of a tick.</returns>
	},
	getTickOffset: function() {
		/// <summary>Gets the offset of the ticks relative to their calculated position.</summary>
		/// <returns type="Length">The offset of the ticks relative to their calculated position.</returns>
	},
	getTickShape: function() {
		/// <summary>Gets the shape of the ticks.</summary>
		/// <returns type="TickShape">The shape of the ticks.</returns>
	},
	getTickWidth: function() {
		/// <summary>Gets the width of a tick.</summary>
		/// <returns type="Length">The width of a tick.</returns>
	},
	removeCustomInterval: function(interval) {
		/// <summary>Removes a CustomInterval object from these settings' customIntervals collection.</summary>
		/// <param name="interval" type="CustomInterval">The interval to remove.</param>
	},
	setCount: function(value) {
		/// <summary>Sets the number of ticks and labels.</summary>
		/// <param name="value" type="Number">The number of ticks and labels.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill brush of the ticks.</summary>
		/// <param name="value" type="Object">The fill brush of the ticks.</param>
	},
	setFontFamily: function(value) {
		/// <summary>Sets the font family of the labels.</summary>
		/// <param name="value" type="String">The font family of the labels.</param>
	},
	setFontSize: function(value) {
		/// <summary>Sets the font size of the labels.</summary>
		/// <param name="value" type="Length">The font size of the labels.</param>
	},
	setFontStyle: function(value) {
		/// <summary>Sets the font style of the labels.</summary>
		/// <param name="value" type="String">The font style of the labels.</param>
	},
	setLabelAlignment: function(value) {
		/// <summary>Sets the alignment of the labels relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the labels relative to the scale.</param>
	},
	setLabelForeground: function(value) {
		/// <summary>Sets the brush used to paint label texts.</summary>
		/// <param name="value" type="Object">The brush used to paint label texts.</param>
	},
	setLabelOffset: function(value) {
		/// <summary>Sets the offset of the labels relative to their calculated position.</summary>
		/// <param name="value" type="Length">The offset of the labels relative to their calculated position.</param>
	},
	setLabelRotation: function(value) {
		/// <summary>Sets the rotation mode of the labels.</summary>
		/// <param name="value" type="LabelRotation">The rotation mode of the labels.</param>
	},
	setNumberPrecision: function(value) {
		/// <summary>Sets the number recision of the labels.</summary>
		/// <param name="value" type="Number">The number recision of the labels.</param>
	},
	setShowLabels: function(value) {
		/// <summary>Sets a value indicating whether the labels are visible.</summary>
		/// <param name="value" type="Boolean">True if labels are visible, otherwise false.</param>
	},
	setShowMaxValueTick: function(value) {
		/// <summary>Sets a value indicating whether to display a tick for the maxValue of the scale.</summary>
		/// <param name="value" type="Boolean">True to display a tick for the maxValue, otherwise false.</param>
	},
	setShowTicks: function(value) {
		/// <summary>Sets a value indicating whether the ticks are visible.</summary>
		/// <param name="value" type="Boolean">True if ticks are visible, otherwise false.</param>
	},
	setStep: function(value) {
		/// <summary>Sets the value between adjacent ticks and labels.</summary>
		/// <param name="value" type="Number">The value between adjacent ticks and labels.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke brush of the ticks.</summary>
		/// <param name="value" type="Object">The stroke brush of the ticks.</param>
	},
	setTickAlignment: function(value) {
		/// <summary>Sets the alignment of the ticks relative to the scale.</summary>
		/// <param name="value" type="Alignment">The alignment of the ticks relative to the scale.</param>
	},
	setTickHeight: function(value) {
		/// <summary>Sets the height of a tick.</summary>
		/// <param name="value" type="Length">The height of a tick.</param>
	},
	setTickOffset: function(value) {
		/// <summary>Sets the offset of the ticks relative to their calculated position.</summary>
		/// <param name="value" type="Length">The offset of the ticks relative to their calculated position.</param>
	},
	setTickShape: function(value) {
		/// <summary>Sets the shape of the ticks.</summary>
		/// <param name="value" type="TickShape">The shape of the ticks.</param>
	},
	setTickWidth: function(value) {
		/// <summary>Sets the width of a tick.</summary>
		/// <param name="value" type="Length">The width of a tick.</param>
	}
};
MindFusion.Gauges.TickSettings.__class = true;

MindFusion.Gauges.TickShape.prototype = {
	Arrow1: 0,
	Arrow2: 1,
	Arrow3: 2,
	Custom: 3,
	Ellipse: 4,
	Line: 5,
	None: 6,
	Rectangle: 7,
	Rhombus: 8,
	RoundRect: 9,
	Triangle: 10
};
MindFusion.Gauges.TickShape.__enum = true;

MindFusion.Gauges.TickType.prototype = {
	Major: 0,
	Middle: 1,
	Minor: 2,
	None: 3
};
MindFusion.Gauges.TickType.__enum = true;

MindFusion.Gauges.ValueChangedEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changed property.</summary>
		/// <param name="value" type="void"></param>
		/// <returns type="Object">The new value of the changed property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changed property.</summary>
		/// <returns type="Object">The previous value of the changed property.</returns>
	}
};
MindFusion.Gauges.ValueChangedEventArgs.__class = true;

MindFusion.Gauges.ValueChangingEventArgs.prototype = {
	getNewValue: function(value) {
		/// <summary>Gets the new value of the changing property.</summary>
		/// <param name="value" type="void"></param>
		/// <returns type="Object">The new value of the changing property.</returns>
	},
	getOldValue: function() {
		/// <summary>Gets the previous value of the changing property.</summary>
		/// <returns type="Object">The previous value of the changing property.</returns>
	}
};
MindFusion.Gauges.ValueChangingEventArgs.__class = true;

MindFusion.Gauges.VisualElement.prototype = {
	getBounds: function() {
		/// <summary>Gets the bounding rectangle of this element.</summary>
		/// <returns type="Rect">The bounding rectangle of this element.</returns>
	},
	getFill: function() {
		/// <summary>Gets the fill of this element.</summary>
		/// <returns type="Object">The fill of this element.</returns>
	},
	getIsVisible: function() {
		/// <summary>Gets a value indicating whether this element is visible.</summary>
		/// <returns type="Boolean">True if the element is visible, otherwise false.</returns>
	},
	getMargin: function() {
		/// <summary>Gets the margin of this element.</summary>
		/// <returns type="Thickness">The margin of this element.</returns>
	},
	getName: function() {
		/// <summary>Gets the name of this element.</summary>
		/// <returns type="String">The name of this element.</returns>
	},
	getRelativeCoordinates: function() {
		/// <summary>Gets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <returns type="Boolean">True if the metrics are relative, otherwise false.</returns>
	},
	getRenderSize: function() {
		/// <summary>Gets the rendering size of the element.</summary>
		/// <returns type="Size">The rendering size of the element.</returns>
	},
	getSize: function() {
		/// <summary>Gets the size of this element.</summary>
		/// <returns type="Size">The size of this element.</returns>
	},
	getStroke: function() {
		/// <summary>Gets the stroke of this element.</summary>
		/// <returns type="Object">The stroke of this element.</returns>
	},
	getX: function() {
		/// <summary>Gets the normalized x position of this element, relative to its parent.</summary>
		/// <returns type="Number">The normalized x position of this element, relative to its parent.</returns>
	},
	getY: function() {
		/// <summary>Gets the normalized y position of this element, relative to its parent.</summary>
		/// <returns type="Number">The normalized y position of this element, relative to its parent.</returns>
	},
	setBounds: function(value) {
		/// <summary>Sets the bounding rectangle of this element.</summary>
		/// <param name="value" type="Rect">The bounding rectangle of this element.</param>
	},
	setFill: function(value) {
		/// <summary>Sets the fill of this element.</summary>
		/// <param name="value" type="Object">The fill of this element.</param>
	},
	setIsVisible: function(value) {
		/// <summary>Sets a value indicating whether this element is visible.</summary>
		/// <param name="value" type="Boolean">True if the element is visible, otherwise false.</param>
	},
	setMargin: function(value) {
		/// <summary>Sets the margin of this element.</summary>
		/// <param name="value" type="Thickness">The margin of this element.</param>
	},
	setName: function(value) {
		/// <summary>Sets the name of this element.</summary>
		/// <param name="value" type="String">The name of this element.</param>
	},
	setRelativeCoordinates: function(value) {
		/// <summary>Sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities.</summary>
		/// <param name="value" type="Boolean">True if the metrics are relative, otherwise false.</param>
	},
	setRenderSize: function(value) {
		/// <summary>Sets the rendering size of the element.</summary>
		/// <param name="value" type="Size">The rendering size of the element.</param>
	},
	setStroke: function(value) {
		/// <summary>Sets the stroke of this element.</summary>
		/// <param name="value" type="Object">The stroke of this element.</param>
	},
	setX: function(value) {
		/// <summary>Sets the normalized x position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">The normalized x position of this element, relative to its parent.</param>
	},
	setY: function(value) {
		/// <summary>Sets the normalized y position of this element, relative to its parent.</summary>
		/// <param name="value" type="Number">The normalized y position of this element, relative to its parent.</param>
	}
};
MindFusion.Gauges.VisualElement.__class = true;

MindFusion.Gauges.VisualElementContainer.prototype = {
};
MindFusion.Gauges.VisualElementContainer.__class = true;

MindFusion.Graphs.Anchoring.prototype = {
	Ignore: 0,
	Keep: 1,
	Reassign: 2
};
MindFusion.Graphs.Anchoring.__enum = true;

MindFusion.Graphs.AssistantType.prototype = {
	Left: 0,
	Normal: 1,
	Right: 2
};
MindFusion.Graphs.AssistantType.__enum = true;

MindFusion.Graphs.BorderedTreeLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="MindFusion.Graphs.Graph">The graph to arrange.</param>
	}
};
MindFusion.Graphs.BorderedTreeLayout.__class = true;

MindFusion.Graphs.Edge.prototype = {
	adjacentTo: function(edge) {
		/// <summary>Checks if the current edge is adjacent to the specified edge, that is, they have common vertex.</summary>
		/// <param name="edge" type="MindFusion.Graphs.Edge">The edge to check.</param>
		/// <returns type="Boolean">true if the current edge is adjacent to the specified edge; otherwise, false.</returns>
	},
	changeDestination: function(vertex) {
		/// <summary>Changes the destination of the current edge to the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">The new destination of the edge.</param>
	},
	changeOrigin: function(vertex) {
		/// <summary>Changes the origin of the current edge to the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">The new origin of the edge.</param>
	},
	createReverseEdge: function() {
		/// <summary>Creates a new edge similar to the current edge but with reversed direction.</summary>
		/// <returns type="MindFusion.Graphs.Edge"></returns>
	},
	getCommonVertex: function(edge) {
		/// <summary>Returns a common vertex for the current edge and the specified edge.</summary>
		/// <param name="edge" type="MindFusion.Graphs.Edge">The edge for which to find common vertex.</param>
		/// <returns type="MindFusion.Graphs.Vertex">The common vertex if it exists, otherwise null.</returns>
	},
	getEnds: function() {
		/// <summary>Returns an array containing the origin and destination vertices of this edge.</summary>
		/// <returns type="Array">An array containing the related vertices.</returns>
	},
	getOtherEnd: function(vertex) {
		/// <summary>Returns the vertex connected by this edge that is not the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">One of the vertices connected by this edge.</param>
		/// <returns type="MindFusion.Graphs.Vertex">The other vertex connected by this edge.</returns>
	},
	incidentWith: function(vertex) {
		/// <summary>Checks if the current edge is incident with the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">The vertex to check.</param>
		/// <returns type="Boolean">true if the edge is incident with the vertex; otherwise, false.</returns>
	},
	joins: function(v1, v2) {
		/// <summary>Checks if the current edge connects the specified vertices.</summary>
		/// <param name="v1" type="MindFusion.Graphs.Vertex">The first vertex.</param>
		/// <param name="v2" type="MindFusion.Graphs.Vertex">The second vertex.</param>
		/// <returns type="Boolean">true if the current edge connects the specified vertices; otherwise, false.</returns>
	},
	reverse: function() {
		/// <summary>Reverses this edge.</summary>
	}
};
MindFusion.Graphs.Edge.__class = true;

MindFusion.Graphs.FlowchartLayout.prototype = {
	getAnchoring: function() {
		/// <summary>Gets a value indicating how to align links to the anchor points of nodes.</summary>
		/// <returns type="MindFusion.Graphs.Anchoring">One of the Anchoring enumeration values.</returns>
	},
	getBranchPadding: function() {
		/// <summary>Gets how much space to leave between adjacent decision branches in the flowchart.</summary>
		/// <returns type="Number">A numeric value specifying the distance between adjacent branches.</returns>
	},
	getKeepGroupLayout: function() {
		/// <summary>Gets a value indicating whether to treat each Group of nodes as a single vertex in the arranged graph.</summary>
		/// <returns type="Boolean">true if&#160;grouped nodes should be treated as a single vertex in the arranged graph, otherwise false.</returns>
	},
	getLinkPadding: function() {
		/// <summary>Gets how much space to leave between adjacent back links designating nested loops.</summary>
		/// <returns type="Number">A numeric value specifying the distance between adjacent back links.</returns>
	},
	getMultipleGraphsPlacement: function() {
		/// <summary>Gets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</summary>
		/// <returns type="MindFusion.Graphs.MultipleGraphsPlacement">One of the MultipleGraphsPlacement enumeration values.</returns>
	},
	getNodeDistance: function() {
		/// <summary>Gets the distance between consecutive nodes in the flowchart.</summary>
		/// <returns type="Number">A numeric value specifying the distance between neighbor nodes in the same sequence.</returns>
	},
	getOrientation: function() {
		/// <summary>Gets the orientation of the arranged graph.</summary>
		/// <returns type="MindFusion.Graphs.Orientation">A member of the MindFusion.Graphs.Orientation enumeration.</returns>
	},
	init: function() {
		/// <summary>Returns a Builder object used to configure this FlowchartLayout instance.</summary>
		/// <returns type="Builder">A Builder instance.</returns>
	},
	setAnchoring: function(value) {
		/// <summary>Sets a value indicating how to align links to the anchor points of nodes.</summary>
		/// <param name="value" type="MindFusion.Graphs.Anchoring">One of the Anchoring enumeration values.</param>
	},
	setBranchPadding: function(value) {
		/// <summary>Sets how much space to leave between adjacent decision branches in the flowchart.</summary>
		/// <param name="value" type="Number">A numeric value specifying the distance between adjacent branches.</param>
	},
	setKeepGroupLayout: function(value) {
		/// <summary>Sets a value indicating whether to treat each Group of nodes as a single vertex in the arranged graph.</summary>
		/// <param name="value" type="Boolean">true if grouped nodes should be treated as a single vertex in the arranged graph, otherwise false.</param>
	},
	setLinkPadding: function(value) {
		/// <summary>Sets how much space to leave between adjacent back links designating nested loops.</summary>
		/// <param name="value" type="Number">A numeric value specifying the distance between adjacent back links.</param>
	},
	setMultipleGraphsPlacement: function(value) {
		/// <summary>Sets a value indicating how multiple independent graphs in the diagram should be positioned relatively to each other.</summary>
		/// <param name="value" type="MindFusion.Graphs.MultipleGraphsPlacement">One of the MultipleGraphsPlacement enumeration values.</param>
	},
	setNodeDistance: function(value) {
		/// <summary>Sets the distance between consecutive nodes in the flowchart.</summary>
		/// <param name="value" type="Number">A numeric value specifying the distance between neighbor nodes in the same sequence.</param>
	},
	setOrientation: function(value) {
		/// <summary>Sets the orientation of the arranged graph.</summary>
		/// <param name="value" type="MindFusion.Graphs.Orientation">A member of the MindFusion.Graphs.Orientation enumeration.</param>
	},
};
MindFusion.Graphs.FlowchartLayout.__class = true;

MindFusion.Graphs.FlowchartLayout.With = function() {
	/// <summary>Returns a Builder object used to configure and create new FlowchartLayout instances.</summary>
	/// <returns type="Builder">A Builder instance.</returns>
};

MindFusion.Graphs.FractalLayout.prototype = {
};
MindFusion.Graphs.FractalLayout.__class = true;

MindFusion.Graphs.Graph.prototype = {
	addEdge: function(edge) {
		/// <summary>Adds an existing edge to the graph.</summary>
		/// <param name="edge" type="MindFusion.Graphs.Edge">The edge to add.</param>
	},
	clone: function(saveMapping) {
		/// <summary>Creates an exact copy of the current graph.</summary>
		/// <param name="saveMapping" type="Boolean" optional="true">Optional. Indicates whether to store vertex and edge mapping information in the copy.</param>
		/// <returns type="MindFusion.Graphs.Graph">The newly created copy.</returns>
	},
	createEdge: function(origin, destination, owner) {
		/// <summary>Creates a new edge connecting the specified vertices and adds it to the graph.</summary>
		/// <param name="origin" type="MindFusion.Graphs.Vertex">The origin vertex.</param>
		/// <param name="destination" type="MindFusion.Graphs.Vertex">The destination vertex.</param>
		/// <param name="owner" type="Object" optional="true">Optional. The owner of the new edge.</param>
		/// <returns type="MindFusion.Graphs.Edge">The newly created edge.</returns>
	},
	createVertex: function(layoutRect, owner) {
		/// <summary>Creates a new vertex with the specified position and size and adds it to the graph.</summary>
		/// <param name="layoutRect" type="MindFusion.Drawing.Rect">A rectangle specifying the position and size of the vertex.</param>
		/// <param name="owner" type="Object" optional="true">Optional. The owner of the new vertex.</param>
		/// <returns type="MindFusion.Graphs.Vertex">The newly created vertex.</returns>
	},
	getConnectedComponents: function() {
		/// <summary>Returns a list with the connected subgraphs in the current graph.</summary>
		/// <returns type="Array">An array with connected Graph objects.</returns>
	},
	makeAcyclic: function() {
		/// <summary>Makes the graph acyclic by reversing the direction of selected edges.</summary>
		/// <returns type="Array">A list with all edges that were reversed in order to make the graph acyclic.</returns>
	},
	removeEdge: function(edge) {
		/// <summary>Removes an edge from the graph.</summary>
		/// <param name="edge" type="MindFusion.Graphs.Edge">The edge to remove.</param>
	},
	tree: function(root) {
		/// <summary>Returns a new graph object containing a subset of the vertices and edges of the original graph, such that the new graph is a tree.</summary>
		/// <param name="root" type="MindFusion.Graphs.Vertex">The desired root vertex of the tree.</param>
		/// <returns type="MindFusion.Graphs.Graph">The newly created tree.</returns>
	}
};
MindFusion.Graphs.Graph.__class = true;

MindFusion.Graphs.LayeredLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="MindFusion.Graphs.Graph">The graph to arrange.</param>
	}
};
MindFusion.Graphs.LayeredLayout.__class = true;

MindFusion.Graphs.LayoutDirection.prototype = {
	BottomToTop: 0,
	LeftToRight: 1,
	RightToLeft: 2,
	TopToBottom: 3
};
MindFusion.Graphs.LayoutDirection.__enum = true;

MindFusion.Graphs.MultipleGraphsPlacement.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Graphs.MultipleGraphsPlacement.__enum = true;

MindFusion.Graphs.Orientation.prototype = {
	Horizontal: 0,
	Vertical: 1
};
MindFusion.Graphs.Orientation.__enum = true;

MindFusion.Graphs.SpringLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="MindFusion.Graphs.Graph">The graph to arrange.</param>
	}
};
MindFusion.Graphs.SpringLayout.__class = true;

MindFusion.Graphs.TreeLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="MindFusion.Graphs.Graph">The graph to arrange.</param>
	}
};
MindFusion.Graphs.TreeLayout.__class = true;

MindFusion.Graphs.TreeLayoutLinkType.prototype = {
	Cascading: 0,
	Default: 1,
	Straight: 2
};
MindFusion.Graphs.TreeLayoutLinkType.__enum = true;

MindFusion.Graphs.TreeMapLayout.prototype = {
	arrange: function(graph) {
		/// <summary>Applies the layout to the specified graph.</summary>
		/// <param name="graph" type="MindFusion.Graphs.Graph">The graph to arrange.</param>
	}
};
MindFusion.Graphs.TreeMapLayout.__class = true;

MindFusion.Graphs.Vertex.prototype = {
	adjacentTo: function(vertex) {
		/// <summary>Checks if there is an edge connecting this vertex with the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">The vertex to check.</param>
		/// <returns type="Boolean">true if the vertices are connected; otherwise, false.</returns>
	},
	degree: function() {
		/// <summary>Returns the number of incident edges.</summary>
		/// <returns type="Number">The number of incident edges.</returns>
	},
	getCommonEdge: function(vertex) {
		/// <summary>Finds the edge connecting the current vertex with the specified vertex.</summary>
		/// <param name="vertex" type="MindFusion.Graphs.Vertex">The vertex to find an edge for.</param>
		/// <returns type="MindFusion.Graphs.Edge">The edge connecting the vertices or null.</returns>
	},
	getNeighbors: function() {
		/// <summary>Returns an array containing all vertices adjacent to the current vertex.</summary>
		/// <returns type="Array">A list with all neighbors.</returns>
	},
	incidentWith: function(edge) {
		/// <summary>Checks if the current vertex is incident with the specified edge.</summary>
		/// <param name="edge" type="MindFusion.Graphs.Edge">The edge to check.</param>
		/// <returns type="Boolean">true if the vertex is incident with the edge; otherwise, false.</returns>
	}
};
MindFusion.Graphs.Vertex.__class = true;

MindFusion.Mapping.Events.prototype = {
};
MindFusion.Mapping.Events.__class = true;

MindFusion.Mapping.MapEventArgs.prototype = {
	getMouseButton: function() {
		/// <summary>Gets which mouse button has been pressed.</summary>
		/// <returns type="MouseButton">One of the MouseButton enumeration values.</returns>
	},
	getMousePosition: function() {
		/// <summary>Gets the current mouse pointer position.</summary>
		/// <returns type="MindFusion.Drawing.Point">Type: Point&#10;A Point instance.</returns>
	}
};
MindFusion.Mapping.MapEventArgs.__class = true;

MindFusion.Mapping.MapView.prototype = {
	addEventListener: function(eventName, handler) {
		/// <summary>Registers a single event listener on the MapView.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that will handle the event specified with eventName.</param>
	},
	fromJson: function(json) {
		/// <summary>Deserializes the view from a JSON string.</summary>
		/// <param name="json" type="String">Type: String&#10;A string created by the toJson method.</param>
	},
	generate: function() {
		/// <summary>Sends an AJAX request to the image generation service.</summary>
	},
	getScrollX: function() {
		/// <summary>Gets the view's horizontal scroll position.</summary>
		/// <returns type="Number">A number specifying the horizontal scroll position.</returns>
	},
	getScrollY: function() {
		/// <summary>Gets the view's vertical scroll position.</summary>
		/// <returns type="Number">A number specifying the vertical scroll position.</returns>
	},
	getZoomFactor: function() {
		/// <summary>Gets the zoom factor.</summary>
		/// <returns type="Number">The current zoom factor.</returns>
	},
	raiseEvent: function(eventName, args) {
		/// <summary>Raises an event.</summary>
		/// <param name="eventName" type="String">The name of the event to raise.</param>
		/// <param name="args" type="EventArgs">Type: EventArgs&#10;An instance of type EventArgs that holds data for the event specified with eventName.</param>
	},
	removeEventListener: function(eventName, handler) {
		/// <summary>Removes a single event listener attached to the MapView.</summary>
		/// <param name="eventName" type="String">The name of the event. See a list of supported events here.</param>
		/// <param name="handler" type="Method">Represents the method that handles the event specified with eventName.</param>
	},
	scrollTo: function(x, y) {
		/// <summary>Scrolls the view to the specified point.</summary>
		/// <param name="x" type="Number">A number specifying the new horizontal scroll position.</param>
		/// <param name="y" type="Number">A number specifying the new vertical scroll position.</param>
	},
	setZoomLevel: function(value) {
		/// <summary>Sets the zoom factor.</summary>
		/// <param name="value" type="Number">The zoom factor.</param>
	},
	toJson: function(args) {
		/// <summary>Serializes the view into a JSON string.</summary>
		/// <param name="args" type="void"></param>
		/// <returns type="String">A string containing the view's JSON representation.</returns>
	}
};
MindFusion.Mapping.MapView.__class = true;

MindFusion.Mapping.MapView.create = function(element) {
	/// <summary>Creates and initializes a new MapView from the specified element. This method is static and can be called without creating an instance of the class.</summary>
	/// <param name="element" type="Object">Type: Object&#10;The DOM element that the MapView should be attached to.</param>
	/// <returns type="MindFusion.Mapping.MapView">Type: MapView&#10;A MapView object that represents the newly created MapView.</returns>
};
MindFusion.Mapping.MapView.find = function(id, parent) {
	/// <summary>Returns the specified MapView object. This member is static and can be invoked without creating an instance of the class.</summary>
	/// <param name="id" type="String">Type: String&#10;A string that contains the ID of the MapView to find.</param>
	/// <param name="parent" type="Object" optional="true">Optional. Type: Object&#10;The component or element that contains the MapView to find.</param>
	/// <returns type="MindFusion.Mapping.MapView">Type: MapView&#10;A MapView object that contains the MapView requested by id, if found; otherwise, null.</returns>
};

MindFusion.CancelEventArgs.prototype = {
	get_cancel: function() {
		/// <summary>Gets a value indicating whether the event should be canceled.</summary>
		/// <returns type="Boolean">true if the event should be canceled, otherwise false.</returns>
	},
	set_cancel: function(value) {
		/// <summary>Sets a value indicating whether the event should be canceled.</summary>
		/// <param name="value" type="Boolean">true if the event should be canceled, otherwise false.</param>
	}
};
MindFusion.CancelEventArgs.__class = true;

MindFusion.EventArgs.prototype = {
};
MindFusion.EventArgs.__class = true;
