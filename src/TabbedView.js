/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Controls.Events;
var TabbedDiagramView = MindFusion.Diagramming.Controls.TabbedDiagramView;
var TabAlignment = MindFusion.Diagramming.Controls.TabAlignment;
var ArrowHeads = MindFusion.Diagramming.ArrowHeads;
var Shapes = MindFusion.Diagramming.Shapes;
var GridStyle = MindFusion.Diagramming.GridStyle;
var Theme = MindFusion.Diagramming.Theme;

var diagramView, theme = null;

document.addEventListener("DOMContentLoaded", function () {
    diagramView = TabbedDiagramView.create(document.getElementById("diagram"));
    diagramView.tabAlignment = TabAlignment.Top;
    diagramView.showNavigationButtons = true;
    diagramView.showAddButton = true;
    diagramView.allowInplaceEdit = true;
    diagramView.addEventListener(Events.pageAdded, (sender, args) => {
        setupPage(args.page);
    })
    setupPage(diagramView.selectedPage);
});

function setupPage(page) {
    page.theme = theme;
    page.showGrid = true;
    page.gridStyle = GridStyle.Points;
    page.defaultShape = Shapes.Rectangle();
    page.routeLinks = true;
    page.roundedLinks = true;
    page.roundedLinksRadius = 5;
    page.linkHeadShape = ArrowHeads.Triangle();
    page.linkHeadShapeSize = 3;
    page.shadowOffsetX = 2;
    page.shadowOffsetY = 2;
}

document.getElementById("tabAlignment").addEventListener("change", (e) => {
    diagramView.tabAlignment = +e.target.value;
});

document.getElementById("showAddBtn").addEventListener("change", (e) => {
    diagramView.showAddButton = e.target.checked;
});

document.getElementById("showCloseBtn").addEventListener("change", (e) => {
    diagramView.showTabCloseButtons = e.target.checked;
});

document.getElementById("showNavBtn").addEventListener("change", (e) => {
    diagramView.showNavigationButtons = e.target.checked;
});

document.getElementById("theme").onchange = function () {
    var themeId = document.getElementById("theme").value;
    theme = Theme.fromId(themeId);
    diagramView.setTheme(theme, true);
}