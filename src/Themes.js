/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var Theme = MindFusion.Diagramming.Theme;

var glassEffect = new MindFusion.Diagramming.GlassEffect();
var aeroEffect = new MindFusion.Diagramming.AeroEffect();

var diagram = null;

document.addEventListener("DOMContentLoaded", function ()
{
    var diagramView = DiagramView.create(document.getElementById("diagram"));
    diagram = diagramView.diagram;
    diagramView.loadFromXml("Themes.xml");
});


document.getElementById("theme").onchange = function (e)
{
    if (e.target.value == "")
        diagram.theme = null;
    else
    {
        diagram.theme = Theme.fromId(e.target.value);
    }
}

document.getElementById("bGlass").onchange = function (e)
{
    if (e.target.checked)
        diagram.nodeEffects.push(glassEffect);
    else
        diagram.nodeEffects.splice(diagram.nodeEffects.indexOf(glassEffect));
    diagram.nodes.forEach((node) => { node.invalidate();})

}

document.getElementById("bAero").onchange = function (e)
{
    if (e.target.checked)
        diagram.nodeEffects.push(aeroEffect);
    else
        diagram.nodeEffects.splice(diagram.nodeEffects.indexOf(aeroEffect));
    diagram.nodes.forEach((node) => { node.invalidate(); })

}