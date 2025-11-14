/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var Behavior = MindFusion.Diagramming.Behavior;
var Alignment = MindFusion.Diagramming.Alignment;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var TableNode = MindFusion.Diagramming.TableNode;
var Shape = MindFusion.Diagramming.SimpleShape;
var Font = MindFusion.Drawing.Font;
var Rect = MindFusion.Drawing.Rect;
var Text = MindFusion.Drawing.Text;
var Thickness = MindFusion.Drawing.Thickness;
var Event = MindFusion.Diagramming.Events;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;
var SimpleShape = MindFusion.Diagramming.SimpleShape;
var ImageAlign = MindFusion.Drawing.ImageAlign;
var LinkShape = MindFusion.Diagramming.LinkShape;

var id = 0;

// creates a table node with the default settings
class OrgChartNode extends TableNode {
	constructor(parent, boss) {
		super(parent);

		this.childNodes = [];

		// set up table cells
		this.redimTable(3, 4);
		this.getCell(1, 3).columnSpan = 2;
		this.getCell(0, 0).rowSpan = 4;
		this.getCell(1, 1).text = "Title:";
		this.getCell(1, 1).font = new Font("Verdana", 3.5, true /*bold*/, false /*italic*/);
		this.getCell(1, 2).font = new Font("Verdana", 3.5, true /*bold*/, false /*italic*/);
		this.getCell(1, 0).font = new Font("Verdana", 3.5, true /*bold*/, false /*italic*/);
		this.getCell(1, 3).font = new Font("Verdana", 3, false /*bold*/, false /*italic*/);
		this.configureCells();

		// customize appearance
		this.captionHeight = 0;
		this.handlesStyle = MindFusion.Diagramming.HandlesStyle.MoveOnly;
		this.cellFrameStyle = MindFusion.Diagramming.CellFrameStyle.None;
		this.brush = "purple";
		this.shape = SimpleShape.RoundedRectangle;

		this.setFullName("Name");
		this.setTitle("title");
		this.imageLocation = "team-placeholder.jpg";
		this.setId();
		this.setBoss(boss);
		this.setHierarchy();

		this.resize();
		this.anchorPattern = AnchorPattern.fromId("TopInBottomOut");
	}

	// updates the existing elements
	updateCanvasElements(node) {
		this.setFields();
		super.updateCanvasElements();
	}

	// gets the title of the employee
	getTitle() {
		return this.title;
	}

	// sets the title of the employee
	setTitle(value) {
		if (this.title !== value) {
			this.title = value;
			this.invalidate();
		}
	}

	// gets the full name of the employee
	getFullName() {
		return this.fullName;
	}

	// sets the full name of the employee
	setFullName(value) {
		if (this.fullName !== value) {
			this.fullName = value;
			this.invalidate();
		}
	}

	// gets the url where the employee picture is located
	getImageLocation() {
		return this.nodeImageLocation;
	}

	// sets the url where the employee picture is located
	setImageLocation(value) {
		if (this.nodeImageLocation != value) {   //places the image in cell (0,0)
			this.nodeImageLocation = value;
			this.getCell(0, 0).imageLocation = value;
			this.getCell(0, 0).setImageAlign(ImageAlign.Stretch);
			this.invalidate();
		}
	}

	// gets the comments about the employee
	getComment() {
		return this.comments;
	}

	// gets the comments about the employee
	setComment(value) {
		if (this.comments !== value) {
			this.comments = value;
			this.invalidate();
		}
	}

	// assigns an id to the employee
	setId() {
		this.id = id;
		id++;
	}

	// gets the id that was assigned to the employee
	getId() {
		return this.id;
	}

	// assigns the employee data to the table cells
	setFields() {
		// hide the caption and place the employee names on row 0 
		this.captionHeight = 0;
		this.getCell(1, 0).text = "Name:";
		this.getCell(2, 0).text = this.fullName;

		// the employee title is on the second row
		this.getCell(2, 1).text = this.title;

		// render the employee id at the third row
		this.getCell(1, 2).text = "ID: " + this.id;

		// place the image in cell (0, 0)
		this.getCell(0, 0).imagePadding = new Thickness(2, 2, 2, 2);
		this.getCell(0, 0).imageLocation = this.imageLocation;
		this.getCell(0, 0).imageAlign = ImageAlign.Fit;

		// identifies the id of the employee's boss
		if (this.boss != undefined) {
			if (this.boss.id != undefined)
				this.getCell(2, 2).text = "Boss: " + this.boss.id;
		}

		// sets the comments for the employee
		this.getCell(1, 3).text = this.comments;
		this.getCell(1, 3).textPadding = new Thickness(0, 0, 0, 0);

		// rearrange the org hierarchy
		this.setHierarchy();
		this.setColor();
	}

	// resize the node to guarantee that all data would fit
	resize()
	{
		var oldImageWidth = this.getColumn(0).width;

		this.setFields();

		//resize the node to fit the text
		this.resizeToFitText(true, false);

		//add or remove the necessary space to fit the image well
		var newImageWidth = this.getColumn(0).width;
		this.getColumn(0).width = oldImageWidth;

		var bounds = this.bounds;
		bounds.width += oldImageWidth - newImageWidth;
		this.bounds = bounds;
	}

	// disable edit on the cells that do not contain employee data
	configureCells() {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				this.getCell(i, j).editable = false;
			}
		}

		// specify text padding
		for (var i = 0; i < 4; i++) {
			this.getCell(2, i).textPadding.left = 0;
			this.getCell(2, i).textPadding.right = 1;
		}

		// allow text edit on cells with employee data
		this.getCell(0, 0).editable = true;
		this.getCell(1, 3).editable = true;
		this.getCell(2, 0).editable = true;
		this.getCell(2, 1).editable = true;
	}

	// assigns the specified boss as the employee's boss
	setBoss(boss) {
		if (boss != this.boss) {
			this.boss = boss;
			this.setHierarchy();
			this.invalidate();
		}
	}

	// rebuilds the hierarchy
	setHierarchy() {
		// the ceo has no boss
		if (this.boss == undefined) {
			this.hierarchy = 0;
		}
		else {
			// first level of executives under the boss
			if (this.boss.hierarchy == undefined) {
				this.hierarchy = 1;
			}
			else {
				// increase the depth of the hierarchy
				this.hierarchy = this.boss.hierarchy + 1;
				this.boss.addChild(this);
			}
		}
		// rearrange the hierarchy
		for (var i = 0; i < this.childNodes; i++)
			this.childNodes[i].setHierarchy();

		this.setColor();
	}

	// picks up a color based on the hierarchy level
	setColor() {
		var hierarchyLevel = this.hierarchy % 6;
		switch (hierarchyLevel) {
			case 0:
				this.brush = "#ea684f";
				break;
			case 1:
				this.brush = "#e0e9e9";
				break;
			case 2:
				this.brush = "#9caac6";
				break;
			case 3:
				this.brush = "#669acc";
				break;
			case 4:
				this.brush = "#678b99";
				break;
			case 5:
				this.brush = "#616a7f";
				break;
			case 6:
				this.brush = "#c0c0c0";
				break;
			default:
				this.brush = "#c0c0c0";
				break;
		}
	}

	// adds a new employee
	addChild(child) {
		//checks if the employee already exists
		var isHere = false;
		for (var i = 0; i < this.childNodes.length; i++) {
			if (this.childNodes[i].id == child.id)
				isHere = true;
		}
		if (!isHere)
			this.childNodes.push(child);
	}

	// removes the specified child from the collection of nodes
	removeChild(child) {
		var index = this.childNodes.indexOf(child);
		if (index > -1)
			this.childNodes.splice(index, 1);
	}

	// rearranges the hierarchy
	resetHierarchy() {
		this.setHierarchy();
		for (var i = 0; i < this.childNodes.length; i++) {
			this.childNodes[i].setBoss(this);
			this.childNodes[i].resetHierarchy();
		}
	}

	// checks if the specified node is a child node
	isChild(child) {
		for (var i = 0; i < this.childNodes.length; i++) {
			if (child === this.childNodes[i])
				return true;
		}
		return false;
	}
};

var diagramView;
var diagram = null;
var tree = null;

document.addEventListener("DOMContentLoaded", function () {

	// we apply the tree layout to arrange the diagram
	tree = new MindFusion.Graphs.TreeLayout();

	// customize the tree layout
	tree.direction = MindFusion.Graphs.LayoutDirection.TopToBottom;
	tree.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;

	// create the diagram object and apply customization
	diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.behavior = Behavior.Custom;
	diagramView.autoScroll = true;

	diagram = diagramView.diagram;
	diagram.showGrid = false;
	diagram.allowSelfLoops = false;
	diagram.linkShape = LinkShape.Cascading;
	diagram.backBrush = '#ffffff';

	//add an EventListener for clicked events
	diagram.addEventListener(Event.clicked, function (diagram, eventArgs) {
		// check which mouse button was clicked
		var button = eventArgs.mouseButton;
		var position = eventArgs.mousePosition;

		// click with the right mouse button creates a node
		if (button === 2) {
			var node = new OrgChartNode(diagram, undefined);
			node.bounds = new Rect(position.x, position.y, 20, 20);
			node.resize();

			// adds the node to the diagram items
			diagram.addItem(node);

			// rearrange the diagram
			diagram.arrangeAnimated(tree);
		}
	});

	diagram.addEventListener(Event.animatedLayoutCompleted, function (diagram, eventArgs) {
		// resize the diagram to fit all items
		diagram.resizeToFitItems();
	});

	diagram.addEventListener(Event.nodeClicked, onNodeClicked);

	// add an EventListener for nodeSelected events
	diagram.addEventListener(Event.nodeSelected, function (diagram, eventArgs) {
		// make sure the clicked node appears above any other nodes at the same location
		eventArgs.node.setZIndex(700);
	});

	// raised when the user deselcts a node
	diagram.addEventListener(Event.nodeDeselected, function (diagram, eventArgs) {
		//reset the z-index of the node
		eventArgs.node.setZIndex(0);
	});

	//add an eventListener for the linkCreated event
	diagram.addEventListener(Event.linkCreated, onLinkCreated);

	//add an eventListener for the cellTextEdited event
	diagram.addEventListener(Event.cellTextEdited, function (diagram, cellArgs) {
		cellArgs.cell.onEdited(diagram, cellArgs);
	});

	// add an EventLitener for the linkCreated event
	diagram.addEventListener(Event.linkCreated, function (diagram, eventArgs) {
		diagram.arrangeAnimated(tree);
	});

	// add an eventListener for the nodeDeleted event
	diagram.addEventListener(Event.nodeDeleted, function (diagram, eventArgs) {
		diagram.arrangeAnimated(tree);
	})

	// add an eventListener for the linkDeleted event 
	diagram.addEventListener(Event.linkDeleted, function (diagram, eventArgs) {
		// gets the destinationNode for the link that is deleted
		var destNode = eventArgs.link.destination;

		// remove the destinationNode as a subordinate to the boss of the destination node  
		destNode.boss.removeChild(destNode);

		// destinationNode now has no boss
		destNode.boss = undefined;

		// reset the hierarchy for the destination node
		destNode.resetHierarchy();
		destNode.getCell(2, 2).text = "";
		diagram.arrangeAnimated(tree);
	});

	// handles nodeModified events
	diagram.addEventListener(Event.nodeModified, function (diagram, eventArgs) {
		// if the modified node does not have a boss
		if (!(eventArgs.node.boss)) {
			// get the mouse position
			var mousePoint = eventArgs.mousePosition;
			// and all nodes at this position
			var nodes = diagram.getNodesAt(mousePoint);

			for (var i = 0; i < nodes.length; i++) {
				// if the node is not the one being modified and is not child of the one being modified
				if (nodes[i] !== eventArgs.node && !eventArgs.node.isChild(nodes[i])) {
					// set nodes[i] as boss for the modified node
					eventArgs.node.setBoss(nodes[i]);

					// create a diagramLink to show the hierarchy
					var l = diagram.factory.createDiagramLink(nodes[i], eventArgs.node);

					// apply link design
					styleLink(l);

					// reset the node hierarchy
					eventArgs.node.resetHierarchy();

					// rearrange the diagram
					diagram.arrangeAnimated(tree);

					// resize the diagram to fit all items
					diagram.resizeToFitItems();
					break;
				}
			}
		}
	})

	//add an EventListener for inPlaceEdit events 
	diagramView.addEventListener(Event.enterInplaceEditMode, function (diagram, eventArgs) {
		var cell = eventArgs.item.getCellKind();
		//identify the cell that is editied
		switch (cell) {
			case 0:
				// the image
				eventArgs.control.setAttribute("placeholder", "Image URL:");
				break;

			case 1:
				// the name
				eventArgs.control.setAttribute("placeholder", "Name:");
				break;

			case 2:
				// the title
				eventArgs.control.setAttribute("placeholder", "Title:");
				break;

			default:
				// comments
				eventArgs.control.setAttribute("placeholder", "Comments:");
				break;
		}
	});

	// create some sample nodes e.g. employees
	var ceoNode = new OrgChartNode(diagram);
	ceoNode.bounds = new Rect(25, 15, 60, 25);
	ceoNode.setTitle("CEO");
	ceoNode.setFullName("John Smith");
	ceoNode.imageLocation = "ceo.png";
	ceoNode.setComment("The CEO of this great company");
	ceoNode.resize();
	diagram.addItem(ceoNode);

	var ctoNode = new OrgChartNode(diagram, ceoNode);
	ctoNode.bounds = new Rect(25, 55, 60, 25);
	ctoNode.setBoss(ceoNode);
	ctoNode.setTitle("CTO");
	ctoNode.setFullName("Bob Smith");
	ctoNode.imageLocation = "cto.png";
	ctoNode.setComment("A great person!");
	ctoNode.resize();
	diagram.addItem(ctoNode);

	var hrNode = new OrgChartNode(diagram, ceoNode);
	hrNode.bounds = new Rect(95, 55, 60, 25);
	hrNode.setTitle("HR");
	hrNode.setFullName("Mary Johnson");
	hrNode.imageLocation = "hr.png";
	hrNode.setComment("Human Relations Manager");
	hrNode.resize();
	diagram.addItem(hrNode);

	var prNode = new OrgChartNode(diagram, ceoNode);
	prNode.bounds = new Rect(175, 55, 60, 25);
	prNode.setTitle("PR");
	prNode.setFullName("Diana Brandson");
	prNode.imageLocation = "pr.png";
	prNode.resize();
	diagram.addItem(prNode);

	var mediaNode = new OrgChartNode(diagram, prNode);
	mediaNode.bounds = new Rect(175, 95, 60, 25);
	mediaNode.setTitle("Media");
	mediaNode.setFullName("Dave Lu");
	mediaNode.imageLocation = "ad.png";
	mediaNode.resize();
	diagram.addItem(mediaNode);

	// link the sample nodes and apply the link design to each one
	var link2 = diagram.factory.createDiagramLink(ceoNode, ctoNode);
	styleLink(link2);
	var link3 = diagram.factory.createDiagramLink(ceoNode, hrNode);
	styleLink(link3);
	var link4 = diagram.factory.createDiagramLink(ceoNode, prNode);
	styleLink(link4);
	var link5 = diagram.factory.createDiagramLink(prNode, mediaNode);
	styleLink(link5);

	// arrange the diagram with the TreeLayout
	diagram.arrangeAnimated(tree);
	// disable built-in inplace editing (here it's triggered by different events than double-click)
	diagramView.allowInplaceEdit = false;
	// set diagram behavior
	diagramView.behavior = Behavior.Modify;
});

// called when the user edits a table
function editNode(diagram, eventArgs) {
	var cellEditor = eventArgs.node.cellFromPoint(eventArgs.mousePosition);

	// the table node to edit
	var tableNode = eventArgs.node;
	var edit = false;

	// cells that cannot be edited have no cellEditor assigned
	if (cellEditor.cell != undefined)
		if (cellEditor.cell.editable == true)
			edit = true;

	// if the cell can be edited
	if (edit) {
		diagramView.beginEdit(eventArgs.node, eventArgs.mousePosition);
		//	document.querySelector(".diagram_inplaceInput").placeholder = "url";
		cellEditor.cell.onEdited = function (diagram, tableCell) {
			if (edit) {
				if (cellEditor.row == 0 && cellEditor.column == 2)
					tableNode.fullName = tableCell.newText;
				if (cellEditor.row == 1 && cellEditor.column == 2)
					tableNode.title = tableCell.newText;
				if (cellEditor.row == 3 && cellEditor.column == 1)
					tableNode.comments = tableCell.newText;

				if (cellEditor.cell.image) {
					// read and assign the URL of the new image
					if (tableCell.newText != undefined &&
						tableCell.newText != "" &&
						tableCell.newText != "undefined") {
						tableNode.imageLocation = tableCell.newText;
						cellEditor.cell._text.height = 0;
						cellEditor.cell.text = "";
					}
				}
				else {
					//resize the table cell to fit the new image
					tableNode.resize();
				}

				diagram.arrangeAnimated(tree);
			}
		}
		// checks to see if the edited object is an image
		tableNode.getCellKind = function () {
			if (cellEditor.cell.image)
				return 0;
			if (cellEditor.row == 0)
				return 1;
			if (cellEditor.row == 1)
				return 2;
			if (cellEditor.row == 3)
				return 3;
			return 4;
		}
	}
}

// raised when the user creates a link
function onLinkCreated(diagram, eventArgs) {
	if (eventArgs.link.permission === true)
		styleLink(eventArgs.link);
}

function styleLink(link) {
	link.pen = "#2d3956";
	link.strokeThickness = 0.5;
	link.headShape = null;
}

// raised when the user creates a node
function createNode(diagram, eventArgs) {
	var parent = eventArgs.node;
	var node = new OrgChartNode(diagram, parent);
	node.bounds = parent.bounds.clone();

	diagram.addItem(node);
	node.setComment("(comment)");
	node.resize();

	// create a link that connects the new node
	var link = diagram.factory.createDiagramLink(eventArgs.node, node);
	link.permission = true;

	// apply the link design
	styleLink(link);

	// rearrange the diagram
	diagram.arrangeAnimated(tree);

	// resize the diagram to fit all nodes
	diagram.resizeToFitItems();
}

// raised when the user clicks on a node
function onNodeClicked(diagram, eventArgs) {
	// checks if the user has clicked with the left mouse button (0)
	var button = eventArgs.mouseButton;
	if (button === 0)
		editNode(diagram, eventArgs);

	//click with the right mouse button creates a node
	else if (button === 2)
		createNode(diagram, eventArgs);
}