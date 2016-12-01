var Diagram = MindFusion.Diagramming.Diagram;
var NodeListView = MindFusion.Diagramming.NodeListView;
var Behavior = MindFusion.Diagramming.Behavior;
var AbstractionLayer = MindFusion.AbstractionLayer;


var Font = MindFusion.Drawing.Font;
var Rect = MindFusion.Drawing.Rect;
var Size = MindFusion.Drawing.Size;
var Text = MindFusion.Drawing.Text;
var Thickness = MindFusion.Drawing.Thickness;

var OrgChartNode = function (parent)
{
	AbstractionLayer.initializeBase(OrgChartNode, this, [parent]);

	this.setTitle('title');
	this.setFullName('full name');
	this.setNodeImageLocation('icon4.png');

	this.setShape('Rectangle');
	this.setText('node text');
	this.setBrush('#fff');
}

OrgChartNode.prototype =
{
	// support for the NodeListView drag'n'drop
	clone: function ()
	{
		Diagram.suppressSetDirty = true;
		var copy = AbstractionLayer.callBaseMethod(OrgChartNode, this, "clone", []);

		copy.setTitle(this.getTitle());
		copy.setFullName(this.getFullName());
		copy.setNodeImageLocation(this.getNodeImageLocation());

		Diagram.suppressSetDirty = false;
		return copy;
	},

	// clipboard support
	toJson: function ()
	{
		var json = AbstractionLayer.callBaseMethod(OrgChartNode, this, "toJson", []);

		json.title = this.getTitle();
		json.fullName = this.getFullName();
		json.nodeImageLocation = this.getNodeImageLocation();

		return json;
	},

	fromJson: function (json)
	{
		AbstractionLayer.callBaseMethod(OrgChartNode, this, "fromJson", [json]);

		this.setTitle(json.title);
		this.setFullName(json.fullName);
		this.setNodeImageLocation(json.nodeImageLocation);

		return json;
	},

	// undo/redo
	saveState: function ()
	{
		var state = AbstractionLayer.callBaseMethod(OrgChartNode, this, "saveState", []);

		state.title = this.getTitle();
		state.fullName = this.getFullName();
		state.nodeImageLocation = this.getNodeImageLocation();

		return state;
	},

	restoreState: function (state)
	{
		AbstractionLayer.callBaseMethod(OrgChartNode, this, "restoreState", [state]);

		this.setTitle(state.title);
		this.setFullName(state.fullName);
		this.setNodeImageLocation(state.nodeImageLocation);
	},

	// draw logic
	updateCanvasElements: function (node)
	{
		AbstractionLayer.callBaseMethod(OrgChartNode, this, 'updateCanvasElements');

		// add the node image;
		if (this.nodeImage)
		{
			this.nodeImage.setBounds(new Rect(this.bounds.x, this.bounds.y + (this.bounds.height - 20) / 2, 20, 20));
			this.graphicsContainer.content.push(this.nodeImage);
		}

		// add the title label
		var titleFont = Font.copy(this.getEffectiveFont());
		var titleLabel = new Text(this.getTitle(),
			new Rect(this.bounds.x + 21, this.bounds.y + 5, this.bounds.width - 22, titleFont.size));
		titleLabel.font = titleFont;
		titleLabel.font.bold = true;
		titleLabel.fitInBounds = false;
		this.graphicsContainer.content.push(titleLabel);

		// add the name label
		var nameFont = Font.copy(this.getEffectiveFont());
		var nameLabel = new Text(this.getFullName(),
			new Rect(this.bounds.x + 21, this.bounds.y + 5 + titleFont.size, this.bounds.width - 22, nameFont.size));
		nameLabel.font = nameFont;
		nameLabel.pen = "blue";
		nameLabel.fitInBounds = false;
		this.graphicsContainer.content.push(nameLabel);

		// adjust the text label properties
		var textFont = Font.copy(this.getEffectiveFont());
		textFont.size = 3;
		var textRect = new Rect(this.bounds.x + 21, this.bounds.y + 3 + titleFont.size + nameFont.size, this.bounds.width - 22, this.bounds.height - 2 - titleFont.size - nameFont.size);
		this.text.font = textFont;
		this.text.textAlignment = Alignment.Near;
		this.text.lineAlignment = Alignment.Near;
		this.text.margin = new Thickness(1, 1, 1, 1);
		this.text.setBounds(textRect, 0);
	},

	loadNodeImage: function ()
	{
		this.nodeImage.loaded = true;
		if (this.parent)
			this.invalidate();
	},

	// properties
	getTitle: function ()
	{
		return this.title;
	},

	setTitle: function (value)
	{
		if (this.title !== value)
		{
			this.title = value;
		}
	},

	getFullName: function ()
	{
		return this.fullName;
	},

	setFullName: function (value)
	{
		if (this.fullName !== value)
		{
			this.fullName = value;
		}
	},

	getNodeImageLocation: function ()
	{
		return this.nodeImageLocation;
	},

	setNodeImageLocation: function (value)
	{
		if (this.nodeImageLocation != value)
		{
			this.nodeImageLocation = value;
			if (value)
			{
				this.nodeImage = new MindFusion.Drawing.Image(new Rect(this.bounds.x, this.bounds.y + (this.bounds.height - 20) / 2, 20, 20));
				AbstractionLayer.addHandlers(this.nodeImage.image, { load: AbstractionLayer.createDelegate(this, this.loadNodeImage) });
				this.nodeImage.image.src = value;
			}
		}
	}
};


var diagram = null;
var nodeListView = null;

$(document).ready(function ()
{
	AbstractionLayer.registerClass(OrgChartNode, "OrgChartNode", MindFusion.Diagramming.ShapeNode);

	// create a Diagram component that wraps the "diagram" canvas
	diagram = AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

	// enable undo/redo support
	diagram.setUndoEnabled(true);

	// enable drawing of custom nodes interactively
	diagram.setCustomNodeType(OrgChartNode);
	diagram.setBehavior(Behavior.Custom);

	// create a NodeListView component that wraps the "nodeListView" canvas
	nodeListView = AbstractionLayer.createControl(NodeListView, null, null, null, $("#nodeListView")[0]);
	nodeListView.setMeasureUnit(6);
	nodeListView.setPadding(1);
	nodeListView.setIconSize(new Size(60, 25));
	nodeListView.setDefaultNodeSize(new Size(60, 25));

	// create and add two nodes to the node list
	var node1 = new OrgChartNode(nodeListView);
	node1.setTitle("CEO");
	node1.setFullName("John Smith");
	node1.setText(
		"Our beloved leader. \r\n" +
		"The CEO of this great corporation.");
	node1.setNodeImageLocation("icon4.png");
	nodeListView.addNode(node1, "");

	var node2 = new OrgChartNode(nodeListView);
	node2.setTitle("CIO");
	node2.setFullName("Bob Smith");
	node2.setText("The CIO of this great corporation.");
	node2.setNodeImageLocation("icon5.png");
	nodeListView.addNode(node2, "");
});