MindFusion.Diagramming for JavaScript and HTML5 Canvas
version 3.5.2


***** ABOUT JSDIAGRAM *****

 JsDiagram is a JavaScript library that provides to web applications the ability to create and display various kinds of interactive diagrams. The component supports workflow, flowchart and process diagrams, object hierarchy and relationship charts, entity-relationship diagrams, structures like graphs and trees.
 Every behavioral and appearance aspect of JsDiagram can be customized as suits best your project. Diagram elements can have different styles, colors, fonts and pictures. The control's programming model comprises hundreds of methods, properties and events.
 The diagram is implemented using pure DOM API and JavaScript, and does not rely on third party libraries.


***** SOURCE CODE *****

 A JsDiagram copy can be purchased with the control's full source code. JsDiagram is developed entirely in JavaScript using the HTML5 Canvas API.


***** SAMPLES *****

For best experience, open the sample pages through a web server.

~ Anchors ~ demonstrates how to define and use anchor point patterns.

~ Animations ~ shows how to animate diagram nodes and links.

~ Containers ~ demonstrates foldable container nodes.

~ ControlNodes ~ shows how to create diagram nodes using HTML templates.

~ Controls ~ presents auxiliary UI controls available with JsDiagram.

~ DBDesign ~ generates SQL code from TableNodes drawn on canvas.

~ DomTree ~ shows how to use JsDiagram as a tree control, utilizing automatic tree arrangement and collapsing and expanding of sub-trees.

~ DragDrop ~ demonstrates drag-and-drop from external HTML elements to the diagram and from the diagram to external elements.

~ Flowcharter ~ shows how to create an online flowchart editor, providing UI for zooming, scrolling, creating new nodes and formatting nodes' contents.

~ FlowchartLayout ~ builds parse tree and block diagram from JavaScript source code and applies the TreeLayout and FlowchartLayout algorithms to them.

~ FractalLayout ~ demonstrates the FractalLayout tree layout algorithm.

~ Inheritance ~ demonstrates how to visualize class inheritance using TableNode objects.

~ Lanes ~ implements a Gantt chart using JsDiagram's swimlane grid.

~ LayeredLayout ~ demonstrates the LayeredLayout graph layout algorithm.

~ OrgChartEditor ~ uses custom nodes based on TableNode to display org-charts.

~ PathFinder ~ searches for paths between selected graph nodes.

~ SpanningCells ~ shows how to create cells that span several rows and/or columns in table nodes.

~ StockShapes ~ shows the predefined JsDiagram shapes and their identifiers.

~ SvgNodes ~ demonstrates the SvgNode type and how to use the library with jQuery.

~ TreeLayout ~ shows how to build a tree interactively using drag and drop.

~ TreeMap ~ demonstrates the TreeMapLayout tree mapping algorithm, where node weights are set to either population size or area of world countries.

~ Tutorial1 ~ demonstrates how to build a graph from relational Json data.

~ Tutorial2 ~ demonstrates how to build a tree from hierarchical Json data.

~ Tutorial3 ~ shows how to create a custom node class that implements its own rendering.

~ Tutorial4 ~ shows how to implement undo/redo, serialization and drag/drop creation support in custom node classes.


***** HISTORY *****

version 3.5.2:
  topological graph layout algorithm
  fixed Overview flickering
  canvas expands when scrollbars auto-hide

version 3.5.1:
  *created events report mouse position
  Electron.js compatibility
  virtual-scroll mode enabled by default
  virtual-scroll CSS grid
  mouse wheel in virtual-scroll mode
  CompositeNode +/- icon
  Visibility of CompositeNode components
  performance improvements
  StrokeThickness considers MeasureUnit

version 3.5:
  ControlNode class displays HTML content
  Button component for composite nodes
  clip composite nodes by outline Shape
  ExpandButtonAction custom +/- handling

version 3.4:
  VideoNode allows playing videos in diagram
  Video component for CompositeNode templates
  DiagramView component for React
  DiagramView component for Vue.js
  DiagramView component for Angular

version 3.3.4:
  Shape component for CompositeNodes
  containerChildAdding validation in whole container hierarchy
  TableNode.resizeToFitText fixes
  LayeredLayout now uses stable sorting 

version 3.3.3:
  fixed support for transparent BackBrush
  fixed initializeNode and initializeLink events
  fixed several drawing glitches

version 3.3.2:
  improved performance
  Border component for CompositeNodes
  FlowchartLayout fixes
  NodeListView shows tooltips

version 3.3.1:
  default StandAlone mode
  linkTextEdited raised for labels too
  FlowchartLayout improvements
  LinkLabel properties redraw automatically
  fixed focus border in Firefox

version 3.3:
  Flowchart graph layout
  ContainerNode.EnableStyledText property
  extended TypeScript definitions
  ContainerNode.resizeToFitText method
  new LinkLabel auto-arrange options

version 3.2.1:
  embedded hyperlinks
  path finding
  serializeTag event
  arrowhead fixes

version 3.2:
  export SVG drawings
  table RowCount and ColumnCount properties
  load diagramming.js as AMD module
  SVG syntax for arcs in custom Shape definitions
  shape decorations colored in node's Stroke

version 3.1:
  composite nodes
  resize Overview tracker to zoom the diagram
  animated layout
  Overview combined and fixed scale modes
  new GridRouter link router
  ImagePadding property in ShapeNode and Cell
  TableNode.resizetoFitText method

version 3.0.1:
  set minVisibleFontSize to hide small text
  fixed tooltip offsets
  fixed inability to exit edit mode after beginEdit
  fixed routing of Bezier links

version 3.0:
  user interaction testability
  record and replay
  controllers for user interaction
  Ruler control
  XML serialization improved
  flip shapes
  ContainerNode.CaptionBackBrush
  ContainerNode.FoldIconSize
  license keys
  3rd party dependencies now optional
  JQuery mode supports JQuery 3

version 2.8:
  new Spline shape implemented for links
  builder classes for fluent API
  HeadStroke* properties define arrowhead strokes
  Diagram.AllowSelfLoops property
  set alignment of table and container captions
  variable node sizes in NodeListView
  resize swimlane rows and columns interactively
  DiagramNode.attachTo supports cycles
  Shape.RoundRect corner arcs keep constant radius
  itemAdded and itemRemoved events

version 2.7:
  TreeMapLayout tree mapping algorithm
  saveToXml and saveToString methods added
  DiagramNode.ShowDeleteButton property
  full scrollbars for scrollable TableNodes
  custom-drawing support in DiagramLink

version 2.6:
  TypeScript definitions added
  free-form nodes
  convert free-form drawings to ShapeNodes
  nodePasted and linkPasted events
  virtual-scroll works with percent units

version 2.5.1:
  3D appearance of table cells
  mouse cursor improvements
  fix for overlapping multiple lines in links' text
  fix for wrong orientation of links' BaseShape

version 2.5:
  resize table columns and rows
  load XML shape libraries
  set color and thickness of text outlines
  TooltipDelay property
  NodeListView.Orientation property
  Backspace deletes items on Mac

version 2.4:
  default mode changed from MSAjax to JQuery
  loadFromXml method added
  RoundedRectangle shape for tables and containers
  support for styled text in TableNode
  cellTextEdited and createEditControl events
  hide frames of table cells
  NodeListView raises nodeSelected event
  fixed setZoomFactorPivot bug

version 2.3:
  font rendering quality improved
  HTML-like text formatting in nodes
  text underlining
  specify font style in Style objects
  support for dashed lines
  horizontal or vertical layout of subgraphs
  assistant nodes in org charts

version 2.2:
  ZoomControl UI for changing zoom level and scroll position
  several shadow display styles
  DiagramLink.setSegmentCount() method
  specify alignment of diagram background image
  nodes of all classes can be rotated
  control padding size between text and node borders
  background of link labels can be filled

version 2.1:
  SVG Nodes
  set BackgroundImageUrl to show image as diagram background
  enable AllowUnconnectedLinks to draw unconnected links
  TextStyle implements several text layout styles for links
  jQuery support

version 2.0:
  undo / redo support
  animations
  ModificationStart allows moving an item without selecting it first
  resize multiple nodes
  the diagram grows automatically if items are dragged near its boundaries
  automatic scrolling
  enterInplaceEditMode and leaveInplaceEditMode events
  clipboard support
  select-only behavior
  swimlanes grid
  linkPointed and nodePointed events
  magnifier
  Intellisense support

version 1.7.1:
  rounded joints between link segments
  draw arcs or cuts at link intersections
  several new stock shapes added
  routeAllLinks avoids overlapping segments
  node rotation considered by link router
  Behavior.Pan lets users pan the view
  Events.clicked raised at unoccupied points

version 1.7:
  adjustment handle styles
  dynamic links
  automatic layout of container's contents
  containerChildAdding validation event
  containerChildRemoving validation event
  Diagram.Dirty flag
  AdjustmentHandlesSize property
  ShowDisabledHandles property

version 1.6.1:
  clip child items to their container's borders
  local Z order in containers
  EnabledHandles enables or disables individual node handles
  Diagram.LinkHitDistance property
  HyperLink property associates an URL with a diagram item

version 1.6:
  Glass and Aero visual effects
  multiple labels per link
  Selected and Deselected events
  double-click events
  improved support for nested containers
  virtual scrolling mode

version 1.5:
  styles and themes
  items cast shadows
  radial gradients
  item initialization events
  item tooltips

version 1.4:
  TableNode class represents nodes displaying tabular data
  ContainerNode represents nodes that contain other nodes
  Locked property disables interaction with a diagram item

version 1.3:
  attaching and grouping items
  collapse and expand tree branches
  user interaction modes
  touch input on iOS Safari web browser
  Visible property added to DiagramItem
  validation events

version 1.2:
  alignment grid
  bordered tree layout
  anchor points

version 1.1:
  automatic link routing
  fractal layout algorithm
  Events class added

version 1.0:
  initial release


***** CONTACT US *****

for any questions you might have about using the control:
support@mindfusion.eu
+359 888 951737

for administrative and sales information:
sales@mindfusion.eu

our web site:
http://mindfusion.eu


***** COPYRIGHTS *****

Copyright (C) 2010-2021, MindFusion LLC - Bulgaria
All rights reserved.