var lineChart = null;


define(["require", "exports", 'MindFusion.Common', 'Scripts/MindFusion.Charting', 'MindFusion.Gauges'], function (require, exports, MindFusion_Common_1, m, g) {
    "use strict";

    //map some namespaces
    var d = MindFusion_Common_1.Drawing;
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    var Gauges = m.MindFusion.Charting.Gauges;
    var OvalScale = g.OvalScale;
    var TickShape = g.TickShape;
    var Length = g.Length;
    var LengthType = g.LengthType;
    var LabelRotation = g.LabelRotation;
    var PointerShape = g.PointerShape;


    //gauge
    var userCounter = g.OvalGauge.create($('#userCounter')[0], false);
    //use custom painting of the background and of the pointer
    userCounter.addEventListener(g.Events.prepaintBackground, onGaugerepaintBackground.bind(this));
    userCounter.addEventListener(g.Events.prepaintPointer, onPrepaintPointer.bind(this));

    // userCounter
    // the scale
    var scale = new g.OvalScale(userCounter);
    scale.setMinValue(0);
    scale.setMaxValue(40);
    scale.setStartAngle(120);
    scale.setEndAngle(420);
    scale.setFill('Transparent');
    scale.setStroke('Transparent');

    //initialize the major settings
    var majorSettings = scale.majorTickSettings;
    majorSettings.setTickShape(TickShape.Ellipse);
    majorSettings.setTickWidth(new Length(10, LengthType.Relative));
    majorSettings.setTickHeight(new Length(2, LengthType.Relative));
    majorSettings.setFontSize(new Length(9, LengthType.Relative));
    majorSettings.setNumberPrecision(0);
    majorSettings.setFill('White');
    majorSettings.setStroke('Transparent');
    majorSettings.setLabelForeground('White');
    majorSettings.setLabelAlignment(Alignment.InnerCenter);
    majorSettings.setLabelRotation(LabelRotation.Auto);
    majorSettings.setTickAlignment(Alignment.TrueCenter);
    majorSettings.setLabelOffset(new Length(12, LengthType.Relative));
    majorSettings.setStep(5);
    var interval = new g.CustomInterval();
    interval.setMinValue(35);
    interval.setFill('Red');
    majorSettings.addCustomInterval(interval);

    //initialize the middle settings
    var middleSettings = scale.middleTickSettings;
    middleSettings.setShowLabels(false);
    middleSettings.setTickShape(TickShape.Ellipse);
    middleSettings.setTickWidth(new Length(6, LengthType.Relative));
    middleSettings.setTickHeight(new Length(3, LengthType.Relative));
    middleSettings.setFontSize(new Length(12, LengthType.Relative));
    middleSettings.setFill('White');
    middleSettings.setStroke('Transparent');
    middleSettings.setLabelForeground('rgb(50, 50, 50)');
    middleSettings.setTickAlignment(Alignment.TrueCenter);
    middleSettings.setCount(5);
    middleSettings.addCustomInterval(interval);

    //initalize the minor settings
    var minorSettings = scale.minorTickSettings;
    minorSettings.setShowLabels(false);
    minorSettings.setShowTicks(false);

    //add a range in gradient colors
    var range = new g.Range();
    range.setMinValue(0);
    range.setMaxValue(40);
    range.setFill(g.Utils.createLinearGradient(320, [1, '#ce0000', 0.8, '#ce0000', 0.7, '#FFA500', 0.6, '#FFD700', 0.5, '#008000', 0, '#008000']));
    range.setStroke('Transparent');
    range.setStartWidth(new Length(0, LengthType.Relative));
    range.setEndWidth(new Length(8, LengthType.Relative));
    range.setAlignment(Alignment.TrueCenter);
    scale.addRange(range);

    //customize the gauge pointer
    var pointer = new g.Pointer();
    pointer.setFill({ "type": "LinearGradientBrush", "color1": "#CCCCCC", "color2": "#666666", "angle": 225 });
    pointer.setStroke("#333333");
    pointer.setPointerHeight(new Length(20, LengthType.Relative));
    pointer.setPointerWidth(new Length(100, LengthType.Relative));
    pointer.setShape(PointerShape.Needle);
    scale.addPointer(pointer);
    //add some initial value
    pointer.setValue(26);

    //paint the background in gradient
    function onGaugerepaintBackground(sender, args) {
        args.setCancelDefaultPainting(true);
        var context = args.getContext();
        var element = args.getElement();
        var size = sender.getSize();
        var ellipse = new g.Ellipse();
        ellipse.setFill('gray');
        ellipse.setStroke('transparent');
        args.paintVisualElement(ellipse, size);
        var ellipse = new g.Ellipse();
        ellipse.setFill(g.Utils.createLinearGradient(300, [0, '#808080', 0.2, '#808080', 0.8, '#909090', 1, '#909090']));
        ellipse.setStroke('transparent');
        ellipse.setMargin(new g.Thickness(0.015));
        args.paintVisualElement(ellipse, size);
    }
    ;
    //draw the pointer
    function onPrepaintPointer(sender, args) {
        args.setCancelDefaultPainting(true);
        var context = args.getContext();
        var element = args.getElement();
        var size = element.getRenderSize();
        var psize = new MindFusion.Drawing.Size(0.2 * size.width, size.height);
        context.save();
        context.transform.apply(context, element.transform.matrix());
        context.beginPath();
        context.arc(psize.width / 2, psize.height / 2, psize.height / 2, 0, 2 * Math.PI, false);
        var fill = element.getFill();
        context.fillStyle = g.Utils.getBrush(context, fill, new MindFusion.Drawing.Rect(0, 0, size.width, size.height), false);
        context.fill();
        context.strokeStyle = '#333333';
        context.stroke();
        context.beginPath();
        context.moveTo(0, 0.425 * size.height);
        context.lineTo(0, 0.575 * size.height);
        context.lineTo(0.95 * size.width, 0.575 * size.height);
        context.lineTo(size.width, 0.5 * size.height);
        context.lineTo(0.95 * size.width, 0.425 * size.height);
        context.fillStyle = 'white';
        context.fill();
        context.stroke();
        context.restore();
    }
    ;
    //end of gauge

    //create the line chart
    var lineChartEl = document.getElementById('lineChart');
    lineChartEl.width = lineChartEl.offsetParent.clientWidth;
    lineChartEl.height = lineChartEl.offsetParent.clientHeight;
    lineChart = new Controls.LineChart(lineChartEl);
    lineChart.showHightlight = false;
    lineChart.areaOpacity = 0.5;
    lineChart.showLegend = true;
    lineChart.theme.legendBackground = new Drawing.Brush("#f0f0f0");
    lineChart.legendTitle = "";
    lineChart.theme.legendBorderStroke = new Drawing.Brush("#cecece");

    var d = new Date(); // for now
    //offset by 30 secs for the first 30 data values
    d.setSeconds(d.getSeconds() - 30);
   
    // create sample data series
    var values1 = new Collections.List();
    var values2 = new Collections.List();
    var values3 = new Collections.List();
    var values4 = new Collections.List();
    var values5 = new Collections.List();
    var values6 = new Collections.List();
    var values7 = new Collections.List();
    var values8 = new Collections.List();
    var values9 = new Collections.List
    var values10 = new Collections.List();

    var xValues = new Collections.List();
    var xLabels = new Collections.List();

    //the colors for the brushes
    var brushes = new Collections.List();

    var rgbColors = new Collections.List();
    rgbColors.add(new Array(102, 154, 204));
    rgbColors.add(new Array(0, 52, 102));
    rgbColors.add(new Array(156, 170, 198));
    rgbColors.add(new Array(102, 102, 102));
    rgbColors.add(new Array(163, 198, 134));
    rgbColors.add(new Array(90, 116, 68));
    rgbColors.add(new Array(233, 202, 145));
    rgbColors.add(new Array(234, 104, 79));
    rgbColors.add(new Array(206, 0, 0));
    rgbColors.add(new Array(245, 222, 208));

    //initialize x-values and labels, generate sample data for the series
    for (var i = 0; i < 30; i++) {
        xValues.add(i);
        setXLabels(false);
        generateData();
    }

    //create brushes for the chart
    var thicknesses = new Collections.List();
    for (var i = 0; i < 10; i++)
    {        
        var a = rgbColors.item(i);
        brushes.add(new Drawing.Brush(new Drawing.Color.fromArgb(a[0], a[1], a[2])));
        if (i == 5 || i == 8)
            thicknesses.add(3.0);
        else
            thicknesses.add(0.15);
      
    }
      

    lineChart.xAxis.labels = xLabels;
    lineChart.showXCoordinates = false;

    var angle = 1;
 
    //the series for the chart
    var series = new Collections.ObservableCollection(new Array(
        new Charting.Series2D(xValues, values1, xLabels),
        new Charting.Series2D(xValues, values2, null),
        new Charting.Series2D(xValues, values3, null),
        new Charting.Series2D(xValues, values4, null),
        new Charting.Series2D(xValues, values5, null),
        new Charting.Series2D(xValues, values6, null),
        new Charting.Series2D(xValues, values7, null),
        new Charting.Series2D(xValues, values8, null),
        new Charting.Series2D(xValues, values9, null),
        new Charting.Series2D(xValues, values10, null)));

    //series titles are important - we identify the series with them
    for (var i = 0; i < 4; i++)
        series.item(i).title = "Client" + i;

    for (var i = 0; i < 3; i++)
        series.item(i + 4).title = "Network" + i;

    for (var i = 0; i < 3; i++)
        series.item(i + 7).title = "Data" + i;

    //tell the chart that the labels for the X-axis come from the first series.
    series.item(0).supportedLabels = m.MindFusion.Charting.LabelKinds.XAxisLabel;
    
    lineChart.series = series;

    //customize the axis
    lineChart.xAxis.interval = 1;
    lineChart.xAxis.title = "Time";
    lineChart.yAxis.interval = 10;
    lineChart.yAxis.title = "Users";

    //add a new column to the chart grid - for the Y2-axis
    lineChart.chartPanel.columns.add(new m.MindFusion.Charting.Components.GridColumn());

    //create a vertical stack panel for the second Y-axis
    var y2Stack = new m.MindFusion.Charting.Components.StackPanel();
    y2Stack.orientation = m.MindFusion.Charting.Components.Orientation.Vertical;
    y2Stack.gridRow = 0;
    //add the stack panel to the last grid column
    y2Stack.gridColumn = lineChart.chartPanel.columns.count() - 1;

    lineChart.chartPanel.children.add(y2Stack);
    //create the second Y-axis
    var secondYAxis = new Charting.YAxisRenderer(lineChart.yAxis);
    secondYAxis.plotLeftSide = false;
    lineChart.yAxisRenderers.add(secondYAxis);
    y2Stack.children.add(secondYAxis);

    //customize the grid
    lineChart.gridType = Charting.GridType.Crossed;
    lineChart.backColor = new Drawing.Color.fromArgb(230, 230, 230);
    lineChart.theme.gridColor1 = Drawing.Color.fromArgb(1, 255, 255, 255);
    lineChart.theme.gridColor2 = Drawing.Color.fromArgb(1, 255, 255, 255);
    lineChart.theme.gridLineColor = Drawing.Color.fromArgb(0.5, 240, 240, 240);

    // assign one brush per series
    lineChart.plot.seriesStyle = new Charting.PerSeriesStyle(brushes, brushes, thicknesses);
    lineChart.plot.pinGrid = false;
    lineChart.draw();
   
    //start the timer
    setInterval(setTime, 1000);

    //generate sample data - remove the first values and add more values
    function setTime() {
       
            values1.removeAt(0);
            values2.removeAt(0);
            values3.removeAt(0);
            values4.removeAt(0);
            values5.removeAt(0);
            values6.removeAt(0);
            values7.removeAt(0);
            values8.removeAt(0);
            values9.removeAt(0);
            values10.removeAt(0);
            setXLabels(true);           


            generateData();

        //sum all new values, find the average and update the guge pointer value
            var sum = 0;

            for (var i = 0; i < lineChart.series.count() ; i++) {
                sum += series.item(i).yData.item(29);               
            }

        var pointer = userCounter.scales[0].pointers[0];
        pointer.setValue(sum/10);

        //repaint the chart
        lineChart.draw();       
    }

    //generate sample data
    function generateData()
    {
        values1.add(Math.floor(Math.random() * 90));
        values2.add(Math.floor(Math.random() * 100));
        values3.add(Math.floor(Math.random() * 50));
        values4.add(Math.floor(Math.random() * 15));
        values5.add(Math.floor(Math.random() * 55));
        values6.add(Math.floor(Math.random() * 60));
        values7.add(Math.floor(Math.random() * 13));
        values8.add(Math.floor(Math.random() * 85));
        values9.add(Math.floor(Math.random() * 20));
        values10.add(Math.floor(Math.random() * 10));

        
    }

    /* add and update the xLabels. Each 3rd labels is the current time, 
    the others are empty strings */
    function setXLabels(removeFirst)
    {
        if (d.getSeconds() % 3 == 0)
        {
            //clear the first three values
            if (removeFirst) {
                xLabels.removeAt(0);
                xLabels.removeAt(0);
                xLabels.removeAt(0);
            }

            //add a label and two empty strings
            xLabels.add(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
            xLabels.add("");
            xLabels.add("");                
        }       
       
        d.setSeconds(d.getSeconds() + 1);

    }    
});