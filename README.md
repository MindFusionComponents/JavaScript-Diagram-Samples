# MindFusion.Diagramming for JavaScript: Create Interactive HTML5 Diagrams

## About JsDiagram

MindFusion's [JavaScript Diagram Library](https://mindfusion.dev/javascript-diagram.html), a part of [MindFusion.JavaScript Pack](https://mindfusion.dev/javascript-pack.html), provides to web applications the ability to create and display various kinds of **interactive diagrams**. The component supports **workflow, flowchart and process diagrams, object hierarchy and relationship charts, entity-relationship diagrams, structures like graphs and trees**.
Every behavioral and appearance aspect of JsDiagram can be customized as suits best your project. Diagram elements can have different styles, colors, fonts and pictures. The control's programming model comprises hundreds of methods, properties and events.
The diagram is implemented using pure **DOM API** and **JavaScript**, and does not rely on third party libraries.

## Getting Started

To run the samples locally:

1.  Navigate to the project root directory.
2.  Run `npm start` in your terminal. This will launch a local web server and open the samples in your default browser.

## Features

*   **Multiple Diagram Types**: Supports a wide variety of diagram types including workflow, flowchart, process diagrams, object hierarchy, relationship charts, entity-relationship diagrams, graphs, and trees.
*   **Interactivity**: Supports user interactions like drag and drop, selection, and zooming.
*   **Customization**: Extensive customization options for styles, colors, fonts, and more.
*   **Automatic Layouts**: A variety of automatic layout algorithms including tree, layered, fractal, and flowchart layouts.
*   **SVG Nodes**: Use SVG to define custom node shapes.
*   **Container Nodes**: Group diagram elements in container nodes.
*   **Table Nodes**: Display tabular data in diagram nodes.
*   **Themes**: A rich set of themes to choose from.

## Tools

*   **Online ShapeDesigner**: Create any shape you want from primitives and download it to be used with the library: [https://mindfusion.dev/tools/shape-designer.html](https://mindfusion.dev/tools/shape-designer.html)

## Source Code

A JsDiagram copy can be purchased with the control's full source code. The JavaScript Diagram library is developed entirely in JavaScript using the HTML5 Canvas API.

## Samples

For best experience, open the sample pages through a web server.

*   **AdjustmentHandles**: Demonstrates the kinds of adjustment handles supported by HandlesStyle property.
*   **AnchorPoints**: Demonstrates how to define and use anchor point patterns.
*   **Animations**: Shows how to animate diagram nodes and links.
*   **Containers**: Demonstrates foldable container nodes.
*   **ControlNodes**: Shows how to create diagram nodes using HTML templates.
*   **Controls**: Presents auxiliary UI controls available with JsDiagram.
*   **DomTree**: Shows how to use JsDiagram as a tree control, utilizing automatic tree arrangement and collapsing and expanding of sub-trees.
*   **DragDrop**: Demonstrates drag-and-drop from external HTML elements to the diagram and from the diagram to external elements.
*   **Flowcharter**: Shows how to create an online flowchart editor, providing UI for zooming, scrolling, creating new nodes and formatting nodes' contents.
*   **FlowchartLayout**: Builds parse tree and block diagram from JavaScript source code and applies the TreeLayout and FlowchartLayout algorithms to them.
*   **FractalLayout**: Demonstrates the FractalLayout tree layout algorithm.
*   **Inheritance**: Demonstrates how to visualize class inheritance using TableNode objects.
*   **Lanes**: Implements a Gantt chart using JsDiagram's swimlane grid.
*   **LayeredLayout**: Demonstrates the LayeredLayout graph layout algorithm.
*   **MultipleViews**: Shows how to create two DiagramView controls, displaying a shared Diagram instance.
*   **OrgChartEditor**: Uses custom nodes based on TableNode to display org-charts.
*   **PathFinder**: Searches for paths between selected graph nodes.
*   **Scripting**: Shows how to associate scripts with flowchart nodes to design and run actual algorithms represented by the flowcharts.
*   **SpanningCells**: Shows how to create cells that span several rows and/or columns in table nodes.
*   **StockShapes**: Shows the predefined JsDiagram shapes and their identifiers.
*   **StressTest**: Shows the fastest way to add a large number of diagram items and demonstrates spatial indexing.
*   **SvgNodes**: Demonstrates the SvgNode type.
*   **TabbedView**: Demonstrates multi-page documents and the TabbedDiagramView control.
*   **Themes**: Demonstrates the predefined themes available for styling the Diagram.
*   **TreeLayout**: Shows how to build a tree interactively using drag and drop.
*   **TreeMap**: Demonstrates the TreeMapLayout tree mapping algorithm, where node weights are set to either population size or area of world countries.
*   **TreeViewNodes**: Shows how to create TreeView nodes.
*   **Tutorial1**: Demonstrates how to build a graph from relational Json data.
*   **Tutorial2**: Demonstrates how to build a tree from hierarchical Json data.
*   **Tutorial3**: Shows how to create a custom node class that implements its own rendering.
*   **Tutorial4**: Shows how to implement undo/redo, serialization and drag/drop creation support in custom node classes.
*   **WebComponents**: Instantiates the DiagramView and UI controls as web components.

## History

### version 4.8.2:
*   improved BPMN shapes

### version 4.8.1:
*   spatial indexing fixes

### version 4.8:
*   paged container nodes
*   CompositeRouter link routing class
*   PatternRouter link routing class

### version 4.7.1:
*   grid graph layout
*   set LayeredLayout start/end nodes
*   bringIntoView method
*   GridRouter.crossingCost property
*   allowLinksRepeat property
*   controlUnloading / Unloaded events

### version 4.7:
*   display image inside item label
*   lock item labels
*   click events report item label
*   Palette component
*   ItemListView component

### version 4.6:
*   spatial indexing
*   actionUndone and actionRedone events
*   ShapeNode.clipText property
*   ContainerNode.foldedSize property
*   rotation fixes
*   strokeThickness scaled by zoomFactor

### version 4.5.1:
*   node size and movement constraints
*   shapeLibraryLoaded event
*   per-page scroll and zoom in TabbedDiagramView
*   fixed undo of text in-place edit
*   fixed hover events in TabbedDiagramView

### version 4.5:
*   online shape designer tool
*   style individual segments of shape geometry
*   linkRouted event
*   associate global AnchorPattern with shape geometry
*   ShapeDesigner control
*   collapse and expand table rows
*   dividerStroke properties

### version 4.4.4:
*   mouse hover events
*   ContainerNode.autoDeleteChildren property

### version 4.4.3:
*   WebComponents.register method
*   autoDeleteLinks Property
*   DiagramNode.cornerRadius property

### version 4.4.2:
*   rename pages in TabbedDiagramView
*   TabbedDiagramView events
*   TabbedDiagramView scroll range fix
*   TableRow.anchorPattern property
*   TableNode.cellTextColor property
*   improved NodeListView drag indicator
*   inplaceEditCancelOnEsc property
*   inplaceEditAcceptOnEnter property

### version 4.4.1:
*   custom-draw anchor points
*   Angular bindings updated to Angular v16
*   validityChecks property
*   ControlNodes no longer overlap scrollbars

### version 4.4:
*   standard animation classes
*   intermediate arrowheads
*   controls registered as web components
*   allowSplitLinks property

### version 4.3.2:
*   reversed tree layouts
*   CellEventArgs column and row properties
*   fixed Z order in ContainerNode

### version 4.3.1:
*   TabbedDiagramView React component
*   TabbedDiagramView Angular component
*   TabbedDiagramView Vue component
*   TabbedDiagramView Blazor component

### version 4.3:
*   multiple diagram pages
*   tabbed diagram view
*   black theme

### version 4.2.5:
*   DiagramItem.opacity property
*   Blazor bindings
*   zoomFactor affects background image
*   validateAnchorPoint event
*   validateLinkCrossing event

### version 4.2.4:
*   lasso zoom tool
*   NodeListView.removeNode method
*   PanAndModify behavior
*   strokeThickness scales dashes
*   text rendering fixes
*   NodeListView.clearAll fix

### version 4.2.3:
*   radial tree layout
*   font size tag in styled text
*   styled text in ItemLabel
*   text wrapping in ItemLabel
*   ArrowHeads lists standard arrowhead shapes
*   custom stroke dash patterns

### version 4.2.2:
*   React functional components
*   NodeLabel now works inside NodeListView
*   Overview.dispose fixes

### version 4.2.1:
*   LinkLabel deserialization fixes

### version 4.2:
*   move item labels interactively
*   multiple labels per node
*   origin and destination in LinkEventArgs
*   multiTouchDraw property
*   handleTouchHitDistance property
*   SvgNode.contentAlign
*   Macbook trackpad horizontal scrolling
*   align link.text vertically

### version 4.1:
*   multi-touch support
*   createDiagramLink can target table rows
*   createDiagramLink can target TreeViewItems
*   DiagramView.cancelDrag method
*   mouse capture during drawing operations

### version 4.0.1:
*   React library updated for v4 API
*   Vue library updated for v4 API
*   Angular library updated for v4 API
*   updated sample projects

### version 4.0:
*   ES6 modules, classes and properties
*   DiagramView control
*   OrthogonalLayout layout algorithm
*   TreeView nodes
*   copy/paste via Navigator.clipboard API
*   print pagination
*   mouseWheelAction sets zooming or scrolling
*   new selection events
*   rotation of FreeFormNode instances
*   new ImageAlign modes

### version 3.5.4:
*   stock themes added
*   Style.CaptionBackBrush property
*   Style properties for selected items
*   MoveNodes behavior
*   AnchorPoint.ToolTip property
*   new Scripting.js example
*   NodeListView.BackColor property
*   NodeListView.TextColor property

### version 3.5.3:
*   adjustment handle styling
*   improved rendering of link segment joints
*   text edit validation events
*   serialization fixes

### version 3.5.2:
*   topological graph layout algorithm
*   fixed Overview flickering
*   canvas expands when scrollbars auto-hide

### version 3.5.1:
*   *created events report mouse position
*   Electron.js compatibility
*   virtual-scroll mode enabled by default
*   virtual-scroll CSS grid
*   mouse wheel in virtual-scroll mode
*   CompositeNode +/- icon
*   Visibility of CompositeNode components
*   performance improvements
*   StrokeThickness considers MeasureUnit

### version 3.5:
*   ControlNode class displays HTML content
*   Button component for composite nodes
*   clip composite nodes by outline Shape
*   ExpandButtonAction custom +/- handling

### version 3.4:
*   VideoNode allows playing videos in diagram
*   Video component for CompositeNode templates
*   DiagramView component for React
*   DiagramView component for Vue.js
*   DiagramView component for Angular

### version 3.3.4:
*   Shape component for CompositeNodes
*   containerChildAdding validation in whole container hierarchy
*   TableNode.resizeToFitText fixes
*   LayeredLayout now uses stable sorting

### version 3.3.3:
*   fixed support for transparent BackBrush
*   fixed initializeNode and initializeLink events
*   fixed several drawing glitches

### version 3.3.2:
*   improved performance
*   Border component for CompositeNodes
*   FlowchartLayout fixes
*   NodeListView shows tooltips

### version 3.3.1:
*   default StandAlone mode
*   linkTextEdited raised for labels too
*   FlowchartLayout improvements
*   LinkLabel properties redraw automatically
*   fixed focus border in Firefox

### version 3.3:
*   Flowchart graph layout
*   ContainerNode.EnableStyledText property
*   extended TypeScript definitions
*   ContainerNode.resizeToFitText method
*   new LinkLabel auto-arrange options

### version 3.2.1:
*   embedded hyperlinks
*   path finding
*   serializeTag event
*   arrowhead fixes

### version 3.2:
*   export SVG drawings
*   table RowCount and ColumnCount properties
*   load diagramming.js as AMD module
*   SVG syntax for arcs in custom Shape definitions
*   shape decorations colored in node's Stroke

### version 3.1:
*   composite nodes
*   resize Overview tracker to zoom the diagram
*   animated layout
*   Overview combined and fixed scale modes
*   new GridRouter link router
*   ImagePadding property in ShapeNode and Cell
*   TableNode.resizetoFitText method

### version 3.0.1:
*   set minVisibleFontSize to hide small text
*   fixed tooltip offsets
*   fixed inability to exit edit mode after beginEdit
*   fixed routing of Bezier links

### version 3.0:
*   user interaction testability
*   record and replay
*   controllers for user interaction
*   Ruler control
*   XML serialization improved
*   flip shapes
*   ContainerNode.CaptionBackBrush
*   ContainerNode.FoldIconSize
*   license keys
*   3rd party dependencies now optional
*   JQuery mode supports JQuery 3

### version 2.8:
*   new Spline shape implemented for links
*   builder classes for fluent API
*   HeadStroke* properties define arrowhead strokes
*   Diagram.AllowSelfLoops property
*   set alignment of table and container captions
*   variable node sizes in NodeListView
*   resize swimlane rows and columns interactively
*   DiagramNode.attachTo supports cycles
*   Shape.RoundRect corner arcs keep constant radius
*   itemAdded and itemRemoved events

### version 2.7:
*   TreeMapLayout tree mapping algorithm
*   saveToXml and saveToString methods added
*   DiagramNode.ShowDeleteButton property
*   full scrollbars for scrollable TableNodes
*   custom-drawing support in DiagramLink

### version 2.6:
*   TypeScript definitions added
*   free-form nodes
*   convert free-form drawings to ShapeNodes
*   nodePasted and linkPasted events
*   virtual-scroll works with percent units

### version 2.5.1:
*   3D appearance of table cells
*   mouse cursor improvements
*   fix for overlapping multiple lines in links' text
*   fix for wrong orientation of links' BaseShape

### version 2.5:
*   resize table columns and rows
*   load XML shape libraries
*   set color and thickness of text outlines
*   TooltipDelay property
*   NodeListView.Orientation property
*   Backspace deletes items on Mac

### version 2.4:
*   default mode changed from MSAjax to JQuery
*   loadFromXml method added
*   RoundedRectangle shape for tables and containers
*   support for styled text in TableNode
*   cellTextEdited and createEditControl events
*   hide frames of table cells
*   NodeListView raises nodeSelected event
*   fixed setZoomFactorPivot bug

### version 2.3:
*   font rendering quality improved
*   HTML-like text formatting in nodes
*   text underlining
*   specify font style in Style objects
*   support for dashed lines
*   horizontal or vertical layout of subgraphs
*   assistant nodes in org charts

### version 2.2:
*   ZoomControl UI for changing zoom level and scroll position
*   several shadow display styles
*   DiagramLink.setSegmentCount() method
*   specify alignment of diagram background image
*   nodes of all classes can be rotated
*   control padding size between text and node borders
*   background of link labels can be filled

### version 2.1:
*   SVG Nodes
*   set BackgroundImageUrl to show image as diagram background
*   enable AllowUnconnectedLinks to draw unconnected links
*   TextStyle implements several text layout styles for links
*   jQuery support

### version 2.0:
*   undo / redo support
*   animations
*   ModificationStart allows moving an item without selecting it first
*   resize multiple nodes
*   the diagram grows automatically if items are dragged near its boundaries
*   automatic scrolling
*   enterInplaceEditMode and leaveInplaceEditMode events
*   clipboard support
*   select-only behavior
*   swimlanes grid
*   linkPointed and nodePointed events
*   magnifier
*   Intellisense support

### version 1.7.1:
*   rounded joints between link segments
*   draw arcs or cuts at link intersections
*   several new stock shapes added
*   routeAllLinks avoids overlapping segments
*   node rotation considered by link router
*   Behavior.Pan lets users pan the view
*   Events.clicked raised at unoccupied points

### version 1.7:
*   adjustment handle styles
*   dynamic links
*   automatic layout of container's contents
*   containerChildAdding validation event
*   containerChildRemoving validation event
*   Diagram.Dirty flag
*   AdjustmentHandlesSize property
*   ShowDisabledHandles property

### version 1.6.1:
*   clip child items to their container's borders
*   local Z order in containers
*   EnabledHandles enables or disables individual node handles
*   Diagram.LinkHitDistance property
*   HyperLink property associates an URL with a diagram item

### version 1.6:
*   Glass and Aero visual effects
*   multiple labels per link
*   Selected and Deselected events
*   double-click events
*   improved support for nested containers
*   virtual scrolling mode

### version 1.5:
*   styles and themes
*   items cast shadows
*   radial gradients
*   item initialization events
*   item tooltips

### version 1.4:
*   TableNode class represents nodes displaying tabular data
*   ContainerNode represents nodes that contain other nodes
*   Locked property disables interaction with a diagram item

### version 1.3:
*   attaching and grouping items
*   collapse and expand tree branches
*   user interaction modes
*   touch input on iOS Safari web browser
*   Visible property added to DiagramItem
*   validation events

### version 1.2:
*   alignment grid
*   bordered tree layout
*   anchor points

### version 1.1:
*   automatic link routing
*   fractal layout algorithm
*   Events class added

### version 1.0:
*   initial release

## Contact Us

For any questions you might have about using the control:
*   Email: support@mindfusion.eu
*   Phone: +359 888 951737

For administrative and sales information:
*   Email: sales@mindfusion.eu

Our website:
*   [https://mindfusion.dev/](https://mindfusion.dev/)

## Copyrights

Copyright (C) 2010-2025, MindFusion LLC - Bulgaria
All rights reserved.
