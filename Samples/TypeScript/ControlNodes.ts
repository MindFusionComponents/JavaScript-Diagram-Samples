/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jscommon.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace ControlNodes
{

    import Diagram = MindFusion.Diagramming.Diagram;
    import Behavior = MindFusion.Diagramming.Behavior;
    import ControlNode = MindFusion.Diagramming.ControlNode;
    import NodeListView = MindFusion.Diagramming.NodeListView;
    import Rect = MindFusion.Drawing.Rect;

    var Utils = MindFusion.Diagramming["Utils"];

    document.addEventListener("DOMContentLoaded", function ()
    {

        // create a Diagram component that wraps the "diagram" canvas
        let diagram = Diagram.create(document.getElementById("diagram"));
        diagram.setVirtualScroll(true);
        diagram.setBehavior(Behavior.LinkControls);

        diagram.addEventListener("nodeDomCreated", function (sender, args)
        {
            let node = args.getNode();
            let checkbox = node.getContent().querySelector("input[type='checkbox']");
            if (checkbox)
            {
                checkbox.checked = node.getTag();
                node.createImage();
            }
        });

        // create a NodeListView component that wraps the "nodeList" canvas
        let nodeList = NodeListView.create(document.getElementById("nodeList"));
        nodeList.setDefaultNodeSize(new MindFusion.Drawing.Size(20, 40));

        // create an Overview component that wraps the "overview" canvas
        let overview = MindFusion.Diagramming.Overview.create(document.getElementById("overview"));
        overview.setDiagram(diagram);

        // create an ZoomControl component that wraps the "zoomer" canvas
        let zoomer = MindFusion.Controls.ZoomControl.create(document.getElementById("zoomer"));
        zoomer.setTarget(diagram);

        var placeholderBase64 = "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMxMjQzNkRFREVEMTFFNjgwRjY4MThBOTA5Q0I5QUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMxMjQzNkVFREVEMTFFNjgwRjY4MThBOTA5Q0I5QUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MzEyNDM2QkVERUQxMUU2ODBGNjgxOEE5MDlDQjlBRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MzEyNDM2Q0VERUQxMUU2ODBGNjgxOEE5MDlDQjlBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi6TqdEAAAGAUExURWr09JTw7xm3uRenqCLX2RKEhRzGyGCcmxB5eRSYmP7+/Pnz7BzV2SDl6enl3ExISNnVzcnFvST//+7q4xrt8M7JxCj//+Te1vXu5//99MD6+cO9t97a0yeSQL25sw9paNTOyI6PjzWztHBwcLizrQ5lZayopAsrKxq8v7OtqCHt8aiknTaOjRF9foOysUL9/RfWjqGbliL3++P+/SDg4ix0dCHz9xWdn6vLxwtPTjdUUxitrxzO0FNxcQ91dE3MzP338BSMjdfn4fT19A1hYPT//qe3tR7b3QyHgmG9vRSSkxzvs7vh3haipCtNSCS6ZZ+jmQ6ZlvDx6jvi4hBxcRI7PaawqBjk4hiytBBtbbrU0BzT0zVlXwxwayz2/C38+yD06ofMyR/8/HqAgUFNRhJeXkZBQlxZWfP99Q2TjaqenOft7ETw8Tugnyr083ugnuTi4FNUU8u+u0lgYbqtrDM3ONLg3xO6uSNcXGNjYw+MjPz4/hCkpAxtbP///////wRVH+sAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAANd1JREFUeNrcnYtDEs36xxdFSFJXMW/gUQEzNbSj5CVveAkLj/YWWmkXeQEVyxt0M7LkX/89z8zs7szuLCBa5z2/yVtmxfPZ73OZmWd2leIfHp6VRK6tfyCQCYUK2byKI58thDKBsSF/39HKxZ9+PcofNP2ou63/OViezcNQ6TiAX5RCPp8lIAb8fbmV/28AVnJtA4FQAaw+4CzO5rOf5wsF+m0YX7+yP8oWMmP9zUcX/z8AJJr7A6E8NRHU/vndxPx8OPDx45fV1fhJMIhvMNxhdIpQdg8okJ9UVaDgz138bwNIdA8FCsR4dPRMJuAOn2yfD7pc0ZQjlYo6Hz5sJGNzU3E41r99W58eHR11z3+e2TugasiGfjeE3wjgqGUshOpGSYcCY/09q/Hg3FyD8wk1e/jOnb//Pp08HYeRfKAoigN/OfBdScXdmVD+4CuRQjYz0LfyvwbgMucPFDDGHeQxrvV86mtORRuePHyNlg8PT06enk6OT6Lt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";
        let defaultTemplate = `
            <div style="display:flex;background-color:lightcyan;">
	            <img width="70" height="70" title="Click to choose picture" src="data:image/png;base64,${placeholderBase64}" data-interactive="true" data-event-click="ControlNodes.placeholderClick" />
	            <input placeholder="Text" data-interactive="true" data-event-change="ControlNodes.dataChange"></input>
            <div style="padding:10px">
	            <button data-interactive="true" data-event-click="ControlNodes.subordinateClick">Subordinate</button>
	            <a title="Delete node" data-interactive="true" data-event-click="ControlNodes.deleteClick">&#10060;</a>
	            <a title="Drag&drop task nodes from the nodeListView here" data-interactive="true" data-event-mouseup="ControlNodes.tasksMouseUp" class="tasks">Add task</a>
            </div>
            <div>
	            `;

        diagram.setDefaultControlTemplate(defaultTemplate);

        Utils.loadImageList(["icon_print.png", "icon_delivery.png", "icon_calculator.png"]).then(response =>
        {
            let node = new MindFusion.Diagramming.ControlNode(diagram);
            node.setBounds(new Rect(10, 10, 100, 20));
            node.setStroke("transparent");
            node.setText("node");
            diagram.addItem(node);

            let node1 = new MindFusion.Diagramming.ControlNode(diagram);
            node1.setBounds(new Rect(10, 50, 100, 20));
            diagram.addItem(node1);

            diagram.getFactory().createDiagramLink(node, node1);

            node1 = new MindFusion.Diagramming.ControlNode(diagram);
            node1.setTemplate(`<img width="50" height="50" src="${response[0]}"></img><p>Print an invoice</p>Finished<input type="checkbox" 
                data-interactive="true" data-event-change="ControlNodes.dataChange"></input>`);
            node1.setBounds(new Rect(110, 50, 20, 40))
            diagram.addItem(node1);
            diagram.getFactory().createDiagramLink(diagram.getNodes()[0], node1);
            arrange();
            nodeList.addNode(node1.clone(), "Print");

            let node2 = new MindFusion.Diagramming.ControlNode(diagram);
            node2.setTemplate(`<img width="50" height="50" src="${response[1]}"></img><p>Deliver products</p>Finished<input type="checkbox" 
                data-interactive="true" data-event-change="ControlNodes.dataChange"></input>`);
            nodeList.addNode(node2, "Delivery");

            let node3 = new MindFusion.Diagramming.ControlNode(diagram);
            node3.setTemplate(`<img width="50" height="50" src="${response[2]}"></img><p>Calculate prices</p>Finished<input type="checkbox" 
                data-interactive="true" data-event-change="ControlNodes.dataChange"></input>`);
            nodeList.addNode(node3, "Calculation");
        });
    });

    export function dataChange(e, sender)
    {
        if (e.target.type == "checkbox")
            sender.setTag(e.target.checked);
        else
            sender.setText(e.target.value);
        sender.createImage();
    }


    export function placeholderClick(e, sender)
    {
        let input = document.createElement("input");
        input.type = "file";
        let img = e.target;
        input.addEventListener('change', e =>
        {
            Utils.toDataUrl(URL.createObjectURL((e.target as any).files[0]), function (base64str)
            {
                img.src = base64str;
                sender.setTag(base64str);
                sender.createImage();
            });
        })
        input.click();
    }

    export function tasksMouseUp(e, sender)
    {
        let nodeList = NodeListView.find("nodeList");
        let node = nodeList.getDraggedNode() as any;
        if (node)
        {
            let clone = node.clone();
            let bounds = sender.getBounds().clone();
            bounds.x += bounds.width + 10;
            bounds.width = 20;
            bounds.height = 40;
            clone.setBounds(bounds);
            sender.parent.addItem(clone);
            let link = sender.parent.getFactory().createDiagramLink(sender, clone);
            link.setHeadShape(null);
            arrange();
        }
    }

    export function subordinateClick(e, sender)
    {
        let clone = sender.clone();
        let bounds = sender.getBounds().clone();
        bounds.y += bounds.height + 10;
        clone.setBounds(bounds);
        sender.parent.addItem(clone);
        sender.parent.getFactory().createDiagramLink(sender, clone);
        arrange();
    }

    export function deleteClick(e, sender)
    {
        sender.parent.removeItem(sender);
    }

    export function arrange()
    {
        let diagram = Diagram.find("diagram");
        let tree = new MindFusion.Graphs.TreeLayout();
        tree.direction = MindFusion.Graphs.LayoutDirection.TopToBottom;
        tree.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;
        diagram.arrange(tree);
        diagram.resizeToFitItems(5);
    }

    export function toSvg()
    {
        let diagram = Diagram.find("diagram");

        let exporter = new MindFusion.Diagramming.SvgExporter();
        let svgElement = exporter.exportElement(diagram);

        let div = document.createElement("div");
        div.className = "popup";
        div.appendChild(svgElement);
        document.body.appendChild(div);

        svgElement.addEventListener('click', e =>
        {
            svgElement.parentNode.parentNode.removeChild(svgElement.parentNode);
        })
    }
}