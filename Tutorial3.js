var Diagram = MindFusion.Diagramming.Diagram;
var Behavior = MindFusion.Diagramming.Behavior;
var AbstractionLayer = MindFusion.AbstractionLayer;

var Font = MindFusion.Drawing.Font;
var Rect = MindFusion.Drawing.Rect;
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

$(document).ready(function ()
{
	AbstractionLayer.registerClass(OrgChartNode, "OrgChartNode", MindFusion.Diagramming.ShapeNode);

	// create a Diagram component that wraps the "diagram" canvas
	diagram = AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

	// enable drawing of custom nodes interactively
	diagram.setCustomNodeType(OrgChartNode);
	diagram.setBehavior(Behavior.Custom);

	var node1 = new OrgChartNode(diagram);
	node1.setBounds(new Rect(25, 15, 60, 25));
	node1.setTitle("CEO");
	node1.setFullName("John Smith");
	node1.setText(
		"Our beloved leader. \r\n" +
		"The CEO of this great corporation.");
	node1.setNodeImageLocation("icon4.png");
	diagram.addItem(node1);

	var node2 = new OrgChartNode(diagram);
	node2.setBounds(new Rect(55, 55, 60, 25));
	node2.setTitle("CIO");
	node2.setFullName("Bob Smith");
	node2.setText("The CIO of this great corporation.");
	node2.setNodeImageLocation("icon5.png");
	diagram.addItem(node2);

	diagram.getFactory().createDiagramLink(node1, node2);
});