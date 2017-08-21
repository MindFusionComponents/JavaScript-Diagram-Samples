var Diagram = MindFusion.Diagramming.Diagram;
var Behavior = MindFusion.Diagramming.Behavior;
var AbstractionLayer = MindFusion.AbstractionLayer;
var Alignment = MindFusion.Diagramming.Alignment;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var Shape = MindFusion.Diagramming.SimpleShape;
var Font = MindFusion.Drawing.Font;
var Rect = MindFusion.Drawing.Rect;
var Text = MindFusion.Drawing.Text;
var Thickness = MindFusion.Drawing.Thickness;
var Event = MindFusion.Diagramming.Events;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;
var SimpleShape = MindFusion.Diagramming.SimpleShape;
var ImageAlign = MindFusion.Diagramming.ImageAlign;
var LinkShape = MindFusion.Diagramming.LinkShape;

var id = 0;

// creates a table node with the default settings
var OrgChartNode = function (parent, boss)
{
	AbstractionLayer.initializeBase(OrgChartNode, this, [parent]);

	this.childNodes = [];

	// set up table cells
	this.redimTable(3, 4);
	this.getCell(1, 3).setColumnSpan(2);
	this.getCell(0, 0).setRowSpan(4);
	this.getCell(1, 1).setText("Title:");
	this.getCell(1, 1).setFont(
            new Font("Verdana", 3.5, true /*bold*/, false /*italic*/));
	this.getCell(1, 2).setFont(
            new Font("Verdana", 3.5, true /*bold*/, false /*italic*/));
	this.getCell(1, 0).setFont(
            new Font("Verdana", 3.5, true /*bold*/, false /*italic*/));
	this.getCell(1, 3).setFont(
            new Font("Verdana", 3, false /*bold*/, false /*italic*/));
	this.configureCells();

	// customize appearance
	this.setCaptionHeight(0);
	this.setHandlesStyle(MindFusion.Diagramming.HandlesStyle.MoveOnly);
	this.setCellFrameStyle(MindFusion.Diagramming.CellFrameStyle.None);
	this.setBrush("purple");
	this.setShape(SimpleShape.RoundedRectangle);

	this.setFullName("Name");
	this.setTitle("title");
	this.setImageLocation("http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg");
	this.setId();
	this.setBoss(boss);
	this.setHierarchy();

	this.resize();
	this.setAnchorPattern(AnchorPattern.fromId("TopInBottomOut"));
}

OrgChartNode.prototype =
{
	// updates the existing elements
	updateCanvasElements: function (node)
	{
		this.setFields();
		AbstractionLayer.callBaseMethod(OrgChartNode, this, 'updateCanvasElements');
	},

    // gets the title of the employee
	getTitle: function ()
	{
		return this.title;
	},

    // sets the title of the employee
	setTitle: function (value)
	{
		if (this.title !== value)
		{
			this.title = value;
			this.invalidate();
		}
	},

    // gets the full name of the employee
	getFullName: function ()
	{
		return this.fullName;
	},

    // sets the full name of the employee
	setFullName: function (value)
	{
		if (this.fullName !== value)
		{
			this.fullName = value;
			this.invalidate();
		}
	},

    // gets the url where the employee picture is located
	getImageLocation: function ()
	{
		return this.nodeImageLocation;
	},

    // sets the url where the employee picture is located
	setImageLocation: function (value)
	{
		if (this.nodeImageLocation != value)
		{   //places the image in cell (0,0)
			var alignment = MindFusion.Diagramming.ImageAlign;
			this.nodeImageLocation = value;
			this.getCell(0,0).setImageLocation(value);
			this.getCell(0,0).setImageAlign(alignment.Stretch);
			this.invalidate();
		}
	},

    // gets the comments about the employee
	getComment: function()
	{
		return this.comments;
	},

    // gets the comments about the employee
	setComment: function(value)
	{
		if (this.comments !== value)
		{
			this.comments = value;
			this.invalidate();
		}
	},

    // assigns an id to the employee
	setId: function ()
	{
		this.id = id;
		id++;
	},

    // gets the id that was assigned to the employee
	getId: function()
	{
		return this.id;
	},

    // assigns the employee data to the table cells
	setFields: function()
	{
        // hide the caption and place the employee names on row 0 
		this.setCaptionHeight(0);
		this.getCell(1,0).setText("Name:")
		this.getCell(2,0).setText(this.fullName);

        // the employee title is on the second row
		this.getCell(2,1).setText(this.title);

        // render the employee id at the third row
		this.getCell(1,2).setText("ID: "+this.id);

        // place the image in cell (0, 0)
		this.getCell(0,0).setImagePadding(new Thickness(2,2,2,2));
		this.getCell(0,0).setImageLocation(this.ImageLocation);
		this.getCell(0, 0).setImageAlign(ImageAlign.Fit);

        // identifies the id of the employee's boss
		if(this.boss != undefined){
			if (this.boss.id != undefined)
				this.getCell(2,2).setText("Boss: " +this.boss.id);
		}

        // sets the comments for the employee
		this.getCell(1,3).setText(this.comments);
		this.getCell(1,3).text.padding = new Thickness(0,0,0,0);

        // rearrange the org hierarchy
		this.setHierarchy();
		this.setColor();
	},

    // resize the node to guarantee that all data would fit
	resize: function()
	{
		var oldHeight = this.bounds.height;
		var oldImageWidth = this.getColumn(0).width;

        //resize the node to fit the text
		this.resizeToFitText(true,true);

        //add or remove the necessary space to fit the image well
		var newHeight = this.bounds.height - oldHeight;
		this.getCell(0, 0).imagePadding.top += newHeight/2;
		this.getCell(0, 0).imagePadding.bottom += newHeight / 2;
		this.getColumn(0).width = oldImageWidth;
		this.bounds.width += oldImageWidth;

	},

    // disable edit on the cells that do not contain employee data
    configureCells: function()
	{
		for(var i = 0;i<3;i++)
		{
			for(var j = 0;j<3;j++){
				this.getCell(i,j).editable = false;
			}
		}
        
		// specify text padding
		for(var i=0;i<4;i++){
			this.getCell(2,i).text.padding.left = 0;
			this.getCell(2,i).text.padding.right = 1;
		}

        // allow text edit on cells with employee data
		this.getCell(0,0).editable = true;
		this.getCell(1,3).editable = true;
		this.getCell(2,0).editable = true;
		this.getCell(2,1).editable = true;
	},

    // assigns the specified boss as the employee's boss
	setBoss: function(boss)
	{
		if (boss != this.boss)
		{
			this.boss = boss;
			this.setHierarchy();
			this.invalidate();
		}
	},

    // rebuilds the hierarchy
	setHierarchy: function ()
	{
        // the ceo has no boss
		if (this.boss == undefined)
		{
			this.hierarchy = 0;
		}
		else
		{
            // first level of executives under the boss
			if (this.boss.hierarchy == undefined)
			{
				this.hierarchy = 1;
			}
			else
			{
				// increase the depth of the hierarchy
				this.hierarchy = this.boss.hierarchy + 1;
				this.boss.addChild(this);
			}
		}
        // rearrange the hierarchy
		for (var i = 0; i < this.childNodes; i++)
			this.childNodes[i].setHierarchy();

		this.setColor();
	},
	
    // picks up a color based on the hierarchy level
	setColor: function()
	{
		var hierarchyLevel = this.hierarchy % 6;
		switch (hierarchyLevel)
		{
		case 0:
			this.setBrush("#ea684f");
			break;
		case 1:
			this.setBrush("#e0e9e9");
			break;
		case 2:
			this.setBrush("#9caac6");
			break;
		case 3:
			this.setBrush("#669acc");
			break;
		case 4:
			this.setBrush("#678b99");
			break;
		case 5:
			this.setBrush("#616a7f");
			break;
		case 6:
			this.setBrush("#c0c0c0");
			break;
		default:
			this.setBrush("#c0c0c0");
			break;
		}
	},

    // adds a new employee
	addChild: function(child)
	{
        //checks if the employee already exists
		var isHere = false;
		for (var i=0 ; i<this.childNodes.length;i++)
		{
			if(this.childNodes[i].id == child.id)
				isHere = true;
		}
		if (!isHere)
			this.childNodes.push(child);
	},

    // removes the specified child from the collection of nodes
	removeChild: function(child)
	{
		var index = this.childNodes.indexOf(child);
		if(index > -1)
			this.childNodes.splice(index,1);
	},

    // rearranges the hierarchy
	resetHierarchy: function()
	{
		this.setHierarchy();
		for (var i=0 ; i<this.childNodes.length;i++)
		{
			this.childNodes[i].setBoss(this);
			this.childNodes[i].resetHierarchy();
		}
	},

    // checks if the specified node is a child node
	isChild: function(child)
	{
		for (var i=0;i<this.childNodes.length; i++)
		{
			if (child === this.childNodes[i])
				return true;
		}
		return false;
	}
};

var diagram = null;
var tree = null;

$(document).ready(function ()
{
	AbstractionLayer.registerClass(OrgChartNode, "OrgChartNode", MindFusion.Diagramming.TableNode);

	// we apply the tree layout to arrange the diagram
	tree = new MindFusion.Graphs.TreeLayout();

	// customize the tree layout
	tree.direction = MindFusion.Graphs.LayoutDirection.TopToBottom;
	tree.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;

	// create the diagram object and apply customization
	$("#diagram")[0].oncontextmenu = function () { return false; }
	diagram = Diagram.create($("#diagram")[0]);
	diagram.setBehavior(Behavior.Custom);
	diagram.setShowGrid(false);
	diagram.setAllowSelfLoops(false);
	diagram.setAutoScroll(true);
	diagram.setLinkShape(LinkShape.Cascading);
	diagram.setBackBrush('#ffffff');

	//add an EventListener for clicked events
	diagram.addEventListener(Event.clicked, function (diagram, eventArgs)
	{
		// check which mouse button was clicked
		var button = eventArgs.getMouseButton();
		var position = eventArgs.getMousePosition();

		// click with the right mouse button creates a node
		if (button === 2)
		{
			var node = new OrgChartNode(diagram, undefined);
			node.setBounds(new Rect(position.x, position.y, 20, 20));
			node.resize();

			// adds the node to the diagram items
			diagram.addItem(node);

			// rearrange the diagram
			diagram.arrangeAnimated(tree);
		}
	});

	diagram.addEventListener(Event.animatedLayoutCompleted, function (diagram, eventArgs)
	{
		// resize the diagram to fit all items
		diagram.resizeToFitItems();
	});

	diagram.addEventListener(Event.nodeClicked, onNodeClicked);

	// add an EventListener for nodeSelected events
	diagram.addEventListener(Event.nodeSelected, function (diagram, eventArgs)
	{
		// make sure the clicked node appears above any other nodes at the same location
		eventArgs.getNode().setZIndex(700);
	});

	// raised when the user deselcts a node
	diagram.addEventListener(Event.nodeDeselected, function (diagram, eventArgs)
	{
		//reset the z-index of the node
		eventArgs.getNode().setZIndex(0);
	});

	//add an eventListener for the linkCreated event
	diagram.addEventListener(Event.linkCreated, onLinkCreated);

	//add an eventListener for the cellTextEdited event
	diagram.addEventListener(Event.cellTextEdited, function (diagram, cellArgs)
	{
		cellArgs.getCell().onEdited(diagram, cellArgs);
	});

	// add an EventLitener for the linkCreated event
	diagram.addEventListener(Event.linkCreated, function (diagram, eventArgs)
	{
		diagram.arrangeAnimated(tree);
	});

	// add an eventListener for the nodeDeleted event
	diagram.addEventListener(Event.nodeDeleted, function (diagram, eventArgs)
	{
		diagram.arrangeAnimated(tree);
	})

	// add an eventListener for the linkDeleted event 
	diagram.addEventListener(Event.linkDeleted, function (diagram, eventArgs)
	{
		// gets the destinationNode for the link that is deleted
		var destNode = eventArgs.getLink().destination;

		// remove the destinationNode as a subordinate to the boss of the destination node  
		destNode.boss.removeChild(destNode);

		// destinationNode now has no boss
		destNode.boss = undefined;

		// reset the hierarchy for the destination node
		destNode.resetHierarchy();
		destNode.getCell(2, 2).setText("");
		diagram.arrangeAnimated(tree);
	});

	// handles nodeModified events
	diagram.addEventListener(Event.nodeModified, function (diagram, eventArgs)
	{
		// if the modified node does not have a boss
		if (!(eventArgs.getNode().boss))
		{
			// get the mouse position
			var mousePoint = eventArgs.getMousePosition();
			// and all nodes at this position
			var nodes = diagram.getNodesAt(mousePoint);

			for (var i = 0; i < nodes.length; i++)
			{
				// if the node is not the one being modified and is not child of the one being modified
				if (nodes[i] !== eventArgs.getNode() && !eventArgs.getNode().isChild(nodes[i]))
				{
					// set nodes[i] as boss for the modified node
					eventArgs.getNode().setBoss(nodes[i]);

					// create a diagramLink to show the hierarchy
					var l = diagram.getFactory().createDiagramLink(nodes[i], eventArgs.getNode());

					// apply link design
					styleLink(l);

					// reset the node hierarchy
					eventArgs.getNode().resetHierarchy();

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
	diagram.addEventListener(Event.enterInplaceEditMode, function (diagram, eventArgs)
	{
		var cell = eventArgs.getItem().getCellKind();
		//identify the cell that is editied
		switch (cell)
		{
			case 0:
				// the image
				eventArgs.getControl().setAttribute("placeholder", "Image URL:");
				break;

			case 1:
				// the name
				eventArgs.getControl().setAttribute("placeholder", "Name:");
				break;

			case 2:
				// the title
				eventArgs.getControl().setAttribute("placeholder", "Title:");
				break;

			default:
				// comments
				eventArgs.getControl().setAttribute("placeholder", "Comments:");
				break;
		}
	});

	// create some sample nodes e.g. employees
	var ceoNode = new OrgChartNode(diagram);
	ceoNode.setBounds(new Rect(25, 15, 60, 25));
	ceoNode.setTitle("CEO");
	ceoNode.setFullName("John Smith");
	ceoNode.setImageLocation("ceo.png");
	ceoNode.setComment("The CEO of this great company");
	ceoNode.resize();
	diagram.addItem(ceoNode);

	var ctoNode = new OrgChartNode(diagram, ceoNode);
	ctoNode.setBounds(new Rect(25, 55, 60, 25));
	ctoNode.setBoss(ceoNode);
	ctoNode.setTitle("CTO");
	ctoNode.setFullName("Bob Smith");
	ctoNode.setImageLocation("cto.png");
	ctoNode.setComment("A great person!");
	ctoNode.resize();
	diagram.addItem(ctoNode);

	var hrNode = new OrgChartNode(diagram, ceoNode);
	hrNode.setBounds(new Rect(95, 55, 60, 25));
	hrNode.setTitle("HR");
	hrNode.setFullName("Mary Johnson");
	hrNode.setImageLocation("hr.png");
	hrNode.setComment("Human Relations Manager");
	hrNode.resize();
	diagram.addItem(hrNode);

	var prNode = new OrgChartNode(diagram, ceoNode);
	prNode.setBounds(new Rect(175, 55, 60, 25));
	prNode.setTitle("PR");
	prNode.setFullName("Diana Brandson");
	prNode.setImageLocation("pr.png");
	prNode.resize();
	diagram.addItem(prNode);

	var mediaNode = new OrgChartNode(diagram, prNode);
	mediaNode.setBounds(new Rect(175, 95, 60, 25));
	mediaNode.setTitle("Media");
	mediaNode.setFullName("Dave Lu");
	mediaNode.setImageLocation("ad.png");
	mediaNode.resize();
	diagram.addItem(mediaNode);

	// link the sample nodes and apply the link design to each one
	var link2 = diagram.getFactory().createDiagramLink(ceoNode, ctoNode);
	styleLink(link2);
	var link3 = diagram.getFactory().createDiagramLink(ceoNode, hrNode);
	styleLink(link3);
	var link4 = diagram.getFactory().createDiagramLink(ceoNode, prNode);
	styleLink(link4);
	var link5 = diagram.getFactory().createDiagramLink(prNode, mediaNode);
	styleLink(link5);

	// arrange the diagram with the TreeLayout
	diagram.arrangeAnimated(tree);
	// disable built-in inplace editing (here it's triggered by different events than double-click)
	diagram.setAllowInplaceEdit(false);
	// set diagram behavior
	diagram.setBehavior(Behavior.Modify);
});

// called when the user edits a table
function editNode(diagram, eventArgs)
{
	var cellEditor = eventArgs.getNode().cellFromPoint(eventArgs.getMousePosition());

    // the table node to edit
	var tableNode = eventArgs.getNode();
	var edit = false;

    // cells that cannot be edited have no cellEditor assigned
	if (cellEditor.cell != undefined)
		if(cellEditor.cell.editable == true)
			edit = true;

	// if the cell can be edited
	if (edit)
	{
		diagram.beginEdit(eventArgs.getNode(),eventArgs.getMousePosition());
		$("diagram_inplaceInput").attr("placeholder", "url");
		cellEditor.cell.onEdited = function (diagram, tableCell)
		{
			if (edit)
			{
				if (cellEditor.cell.image)
				{
					// read and assign the URL of the new image
					if (tableCell.getNewText() != undefined &&
						tableCell.getNewText() != "" &&
						tableCell.getNewText != "undefined")
					{
						tableNode.setImageLocation(tableCell.getNewText());
						cellEditor.cell.text.height = 0;
						cellEditor.cell.text.text = "";
					}
				}
				//resize the table cell to fit the new image
				else if (cellEditor.row < 3)
				{
					var oldImageWidth = tableNode.getColumn(0).width;
					tableNode.resizeToFitText(true,true);
					tableNode.getColumn(0).width = oldImageWidth;
					tableNode.bounds.width += oldImageWidth;					
				}

				else if (cellEditor.row === 3)
				{
					var oldHeight = tableNode.bounds.height;
					var oldImageWidth = tableNode.getColumn(0).width;
					tableNode.resizeToFitText(true,true);
					var newHeight = tableNode.bounds.height - oldHeight;
					tableNode.getCell(0, 0).imagePadding.top += newHeight / 2;
					tableNode.getCell(0, 0).imagePadding.bottom += newHeight / 2;
					tableNode.getColumn(0).width = oldImageWidth;
					tableNode.bounds.width += oldImageWidth;
				}
				
			    if (cellEditor.row == 0 && cellEditor.column == 2)
                 tableNode.fullName = tableCell.newText;
                if (cellEditor.row == 1 && cellEditor.column == 2)
                 tableNode.title = tableCell.newText;
                if (cellEditor.row == 3 && cellEditor.column == 1)
                 tableNode.comments = tableCell.newText;
			 
				diagram.arrangeAnimated(tree);
			}
		}
        // checks to see if the edited object is an image
		tableNode.getCellKind = function()
		{
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
function onLinkCreated(diagram, eventArgs)
{
	if (eventArgs.getLink().permission === true)
		styleLink(eventArgs.getLink());
}

function styleLink(link)
{
	link.setPen("#2d3956");
	link.setStrokeThickness(2.0);
	link.setHeadShape();
}

// raised when the user creates a node
function createNode(diagram, eventArgs)
{
	var parent = eventArgs.getNode();
	var node = new OrgChartNode(diagram, parent);
	node.setBounds(parent.getBounds());

	diagram.addItem(node);
	node.setComment("(comment)");
	node.resize();

    // create a link that connects the new node
	var link = diagram.getFactory().createDiagramLink(eventArgs.getNode(),node);
	link.permission = true;

    // apply the link design
	styleLink(link);

    // rearrange the diagram
	diagram.arrangeAnimated(tree);

    // resize the diagram to fit all nodes
	diagram.resizeToFitItems();
}

// raised when the user clicks on a node
function onNodeClicked(diagram, eventArgs)
{
	// checks if the user has clicked with the left mouse button (0)
	var button = eventArgs.getMouseButton();
	if (button === 0)
		editNode(diagram, eventArgs);

    //click with the right mouse button creates a node
	else if (button === 2)
		createNode(diagram, eventArgs);
}