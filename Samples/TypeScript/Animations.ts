/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Animations
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import Shape = MindFusion.Diagramming.Shape;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import HandlesStyle = MindFusion.Diagramming.HandlesStyle;
	import DiagramEvents = MindFusion.Diagramming.Events;
	import Animation = MindFusion.Animations.Animation;
	import AnimationEvents = MindFusion.Animations.Events;
	import Point = MindFusion.Drawing.Point;
	import Rect = MindFusion.Drawing.Rect;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;

	var diagram, factory;
	var startNode, endNode, branchOne, branchTwo;
	var pulseAnimation;
	var currentAnimationIndex;
	var nodeAnimations = [], linkAnimations = [];

	$(document).ready(function ()
	{
		// hook up some events
		$('#animationType').on("selectmenuchange", (onAnimationTypeChanged));
		$('#easingType').on("selectmenuchange", (onEasingTypeChanged));

		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.getNodeEffects().push(new GlassEffect());
		factory = diagram.getFactory();

		diagram.setBehavior(MindFusion.Diagramming.Behavior.SelectOnly);

		// attach event handlers
		diagram.addEventListener(DiagramEvents.nodeClicked, onNodeClicked);

		// initialize the diagram
		init();
	});

	function init()
	{
		// create the starting node
		startNode = createCircleNode(new Rect(22.5, 10, 35, 15), 'START\nClick to begin');

		// set up a pulsating animation for the start node
		pulseAnimation = createPulseAnimation(startNode);
		pulseAnimation.start();

		currentAnimationIndex = 0;

		var nodes = diagram.nodes;

		// create the rest of the diagram
		createRectangleNode(new Rect(85, 10, 60, 15), '1. Obtain setup sheet');
		createRectangleNode(new Rect(85, 40, 60, 15), '2. Select feeder from rack');
		createRectangleNode(new Rect(10, 40, 60, 15), '3. Verify part number on reel with part number label on feeder');
		createRectangleNode(new Rect(10, 100, 60, 15), '4. Verify the part label on feeder with the part number of setup sheet');
		createRectangleNode(new Rect(10, 160, 60, 15), '5. Verify device number label with setup');
		createRectangleNode(new Rect(85, 100, 60, 15), '6. Rewrite label and place on feeder');
		createRectangleNode(new Rect(160, 100, 60, 15), '7. Find the correct reel for setup');
		createRectangleNode(new Rect(122.5, 160, 60, 15), '8. Load feeder and label');
		createRectangleNode(new Rect(197.5, 160, 60, 15), '9. Find the correct feeder');
		createRectangleNode(new Rect(85, 190, 60, 15), '10. Correct device label');

		createDecisionNode(new Rect(17.5, 70, 45, 15), 'Do they match?');
		createDecisionNode(new Rect(17.5, 130, 45, 15), 'Do they match?');
		createDecisionNode(new Rect(17.5, 190, 45, 15), 'Correct?');
		createDecisionNode(new Rect(167.5, 70, 45, 15), 'Wrong reel or label?');
		createDecisionNode(new Rect(167.5, 130, 45, 15), 'Can feeder be used?');

		endNode = createCircleNode(new Rect(22.5, 220, 35, 15), 'END\nClick to reset');

		createLink(startNode, nodes[1]);
		createLink(nodes[1], nodes[2]);
		createLink(nodes[2], nodes[3]);
		createLink(nodes[3], nodes[11]);
		createLink(nodes[4], nodes[12]);
		createLink(nodes[5], nodes[13]);
		createLink(nodes[6], nodes[4]);
		createLink(nodes[7], nodes[15]);
		createLink(nodes[8], nodes[5]);
		createLink(nodes[9], nodes[8]);
		createLink(nodes[10], endNode);
		createLink(nodes[11], nodes[4], "Yes");
		createLink(nodes[11], nodes[14], "No");
		createLink(nodes[12], nodes[5], "Yes");
		createLink(nodes[12], nodes[7], "No");
		createLink(nodes[13], endNode, "Yes");
		createLink(nodes[13], nodes[10], "No");
		createLink(nodes[14], nodes[6], "Label");
		createLink(nodes[14], nodes[7], "Reel");
		createLink(nodes[15], nodes[8], "Yes");
		createLink(nodes[15], nodes[9], "No");

		// create the link animations
		Utils.forEach(diagram.links, function (link)
		{
			var ep = link.getEndPoint();
			link.setEndPoint(link.getStartPoint());
			linkAnimations.push(new Animation(link, { fromValue: link.getStartPoint(), toValue: ep, duration: 450 }, onUpdateLink));
		});


		// create the node animations for the selected animation and easing type.
		Utils.forEach(diagram.nodes, function (node)
		{
			if (node == startNode || node == endNode)
				return;
			var bounds = node.getBounds().clone();
			var x1 = 1;
			var x2 = bounds.width;
			node.setBounds(new Rect(bounds.x, bounds.y, x1, bounds.height));
			nodeAnimations.push(new Animation(node,
				{
					fromValue: x1, toValue: x2, duration: 1100,
					animationType: +($('#animationType')[0] as HTMLSelectElement).value,
					easingType: +($('#easingType')[0] as HTMLSelectElement).value
				}, onUpdateNode));
		});
	}

	function onAnimationTypeChanged()
	{
		// changes the animation type for created animation objects.
		Utils.forEach(nodeAnimations, function (a)
		{
			var aType = +($('#animationType')[0] as HTMLSelectElement).value;
			// reset the param to default values.
			if (aType === 1)
				a.setParam(2);
			else if (aType == 2)
				a.setParam(10);
			else if (aType == 4)
				a.setParam(1.5);
			else if (aType == 6)
				a.setParam(0.5);
			else
				a.setParam(null);
			if (!a.isRunning())
				a.setAnimationType(aType);
		});
	}

	function onEasingTypeChanged()
	{
		// changes the easing type for created animation objects.
		Utils.forEach(nodeAnimations, function (a)
		{
			if (!a.isRunning())
				a.setEasingType(+($('#easingType')[0] as HTMLSelectElement).value);
		});
	}

	// resets the diagram to its initial state.
	function reset()
	{
		diagram.clearAll();
		Utils.forEach(linkAnimations, function (a)
		{
			if (a && a.isRunning())
				a.stop();
		});
		linkAnimations = [];
		Utils.forEach(nodeAnimations, function (a)
		{
			if (a && a.isRunning())
				a.stop();
		});
		nodeAnimations = [];
		animateScroll(0);
		init();
	}

	function onNodeClicked(sender, args)
	{
		var node = args.getNode();
		if (node == startNode)
		{
			// stop the start node animation and run the first animation stage
			if (pulseAnimation.isRunning())
			{
				pulseAnimation.stop();
				startNode.setBounds(new Rect(22.5, 10, 35, 15), true);
				stageOne();
			}
		}
		else if (node == endNode)
		{
			// reset the diagram
			$('#animationControls')[0].style.display = '';
			reset();
		}
		else if (node == branchOne)
		{
			// determine which anination stage to run next.
			if (node.getTag() == 4)
			{
				stageTwoLeft();
			}
			else if (node.getTag() == 5)
			{
				stageThreeLeft();
			}
			else if (node.getTag() == 16)
			{
				stageFourLeft();
			}
			else if (node.getTag() == 6)
			{
				stageFiveLeft();
			}
			else if (node.getTag() == 8)
			{
				stageSixLeft();
			}

			diagram.removeItem(node);
			diagram.removeItem(branchTwo);
		}
		else if (node == branchTwo)
		{
			// determine which anination stage to run next.
			if (node.getTag() == 14)
			{
				stageTwoRight();
			}
			else if (node.getTag() == 7.1)
			{
				stageThreeRight();
			}
			else if (node.getTag() == 10)
			{
				stageFourRight();
			}
			else if (node.getTag() == 7.2)
			{
				stageFiveRight();
			}
			else if (node.getTag() == 9)
			{
				stageSixRight();
			}

			diagram.removeItem(node);
			diagram.removeItem(branchOne);
		}
	}

	function createCircleNode(bounds, text)
	{
		var node = new ShapeNode(diagram);
		node.setShape(Shape.fromId('Circle'));
		node.setBrush('#ce0000');
		node.setText(text);
		node.setBounds(bounds);
		diagram.addItem(node);
		return node;
	}

	function createRectangleNode(bounds, text)
	{
		var node = new ShapeNode(diagram);
		node.setVisible(false);
		node.setShape(Shape.fromId('Rectangle'));
		node.setBrush('#5a79a5');
		node.setText(text);
		node.setBounds(bounds);
		diagram.addItem(node);
	}

	function createDecisionNode(bounds, text)
	{
		var node = new ShapeNode(diagram);
		node.setVisible(false);
		node.setBounds(bounds);
		node.setShape(Shape.fromId('Decision'));
		node.setBrush('#c0c0c0');
		node.setText(text);
		diagram.addItem(node);
	}

	function createLink(origin, destination, labelText?)
	{
		var link = new DiagramLink(diagram, origin, destination);
		link.setVisible(false);
		link.setHeadShape(Shape.fromId('Triangle'));
		link.setHeadBrush('#003466');
		if (labelText)
		{
			link.addLabel(labelText);
		}
		diagram.addItem(link);
	}

	function createPulseAnimation(item)
	{
		var options =
			{
				duration: 550,
				repeat: true,
				reverse: true,
				fromValue: -0.075,
				toValue: 0.075
			}
		var a = new Animation(item, options, onPulse);
		return a;
	}

	// a custom update callback to create the pulsating effect.
	function onPulse(animation, progress)
	{
		var bounds = animation.item.getBounds().clone();
		var to = animation.getToValue();
		bounds = Utils.inflate(bounds, to * progress, to * progress);
		animation.item.setBounds(bounds, true);
	}

	// a custom update callback for link animations
	function onUpdateLink(animation, animationProgress)
	{
		var link = animation.item;
		var pointA = animation.getFromValue(),
			pointB = animation.getToValue();

		link.setEndPoint(
			new Point(
				pointA.x + (pointB.x - pointA.x) * animationProgress,
				pointA.y + (pointB.y - pointA.y) * animationProgress));
		link.invalidate();
	}

	// a custom update callback for node animations
	function onUpdateNode(animation, animationProgress)
	{
		var node = animation.item;
		var bounds = node.getBounds();
		var x1 = animation.getFromValue(),
			x2 = animation.getToValue();
		node.setBounds(new Rect(bounds.x, bounds.y, x1 + (x2 - x1) * animationProgress, bounds.height));
	}

	// create and start a scroll animation
	function animateScroll(toValue)
	{
		new Animation(null,
			{
				toValue: toValue,
				duration: 1500,
				easingType: MindFusion.Animations.EasingType.EaseOut,
				animationType: MindFusion.Animations.AnimationType.Power,
				param: 3
			}, onAnimateScroll).start();
	}

	// a custom update callbacj to animate scrolling in the diagram
	function onAnimateScroll(animation, animationProgress)
	{
		var from = diagram.getScrollY();
		var to = animation.getToValue();
		diagram.setScrollY(from + (to - from) * animationProgress);
	}

	/**
	* Below functions are responsible for running the correct link/node animation 
	* at the correct sequence. For example, when the first link is done animating, 
	* the first node's animation is triggered, when it in turn ends, it triggers 
	* the next animation in the predefined sequence, and so on.
	*/
	function stageOne()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[0].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[0].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[1].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[1].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							linkAnimations[2].addEventListener(AnimationEvents.animationComplete, function (sender, args)
							{
								nodeAnimations[2].addEventListener(AnimationEvents.animationComplete, function (sender, args)
								{
									linkAnimations[3].addEventListener(AnimationEvents.animationComplete, function (sender, args)
									{
										nodeAnimations[10].addEventListener(AnimationEvents.animationComplete, function (sender, args)
										{
											// create the decision attached nodes.
											branchOne = createCircleNode(new Rect(35, 85, 10, 5), "Yes");
											branchOne.attachTo(sender.item);
											branchOne.setTag(4);
											createPulseAnimation(branchOne).start();

											branchTwo = createCircleNode(new Rect(62.5, 75, 10, 5), "No");
											branchTwo.attachTo(sender.item);
											branchTwo.setTag(14);
											createPulseAnimation(branchTwo).start();

											$('#animationControls')[0].style.display = '';
										});
										nodeAnimations[10].item.setVisible(true);
										nodeAnimations[10].start();
									});
									linkAnimations[3].item.setVisible(true);
									linkAnimations[3].start();
								});
								nodeAnimations[2].item.setVisible(true);
								nodeAnimations[2].start();
							});
							linkAnimations[2].item.setVisible(true);
							linkAnimations[2].start();
						});
						nodeAnimations[1].item.setVisible(true);
						nodeAnimations[1].start();
					});
					linkAnimations[1].item.setVisible(true);
					linkAnimations[1].start();
				});
				nodeAnimations[0].item.setVisible(true);
				nodeAnimations[0].start();
			});
			linkAnimations[0].item.setVisible(true);
			linkAnimations[0].start();
		} catch (e) { }
	}

	function stageTwoLeft()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[11].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[3].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[4].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[11].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							// create the decision attached nodes.
							branchOne = createCircleNode(new Rect(35, 145, 10, 5), "Yes");
							branchOne.attachTo(sender.item);
							branchOne.setTag(5);
							createPulseAnimation(branchOne).start();

							branchTwo = createCircleNode(new Rect(62.5, 135, 10, 5), "No");
							branchTwo.setTag(7.1);
							branchTwo.attachTo(sender.item);
							createPulseAnimation(branchTwo).start();

							animateScroll(diagram.nodes[4].getBounds().y - 5);

							$('#animationControls')[0].style.display = '';
						});
						nodeAnimations[11].item.setVisible(true);
						nodeAnimations[11].start();
					});
					linkAnimations[4].item.setVisible(true);
					linkAnimations[4].start();
				});
				nodeAnimations[3].item.setVisible(true);
				nodeAnimations[3].start();
			});
			linkAnimations[11].item.setVisible(true);
			linkAnimations[11].start();
		} catch (e) { }
	}

	function stageTwoRight()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[12].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[13].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					// create the decision attached nodes.
					branchOne = createCircleNode(new Rect(173.75, 77.5, 10, 5), "Label");
					branchOne.attachTo(sender.item);
					branchOne.setTag(6);
					createPulseAnimation(branchOne).start();

					branchTwo = createCircleNode(new Rect(185, 85, 10, 5), "Reel");
					branchTwo.setTag(7.2);
					branchTwo.attachTo(sender.item);
					createPulseAnimation(branchTwo).start();

					$('#animationControls')[0].style.display = '';
				});
				nodeAnimations[13].item.setVisible(true);
				nodeAnimations[13].start();
			});
			linkAnimations[12].item.setVisible(true);
			linkAnimations[12].start();
		} catch (e) { }
	}

	function stageThreeLeft()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[13].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[4].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[5].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[12].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							// create the decision attached nodes.
							branchOne = createCircleNode(new Rect(35, 205, 10, 5), "Yes");
							branchOne.attachTo(sender.item);
							branchOne.setTag(16);
							createPulseAnimation(branchOne).start();

							branchTwo = createCircleNode(new Rect(62.5, 195, 10, 5), "No");
							branchTwo.attachTo(sender.item);
							branchTwo.setTag(10);
							createPulseAnimation(branchTwo).start();

							$('#animationControls')[0].style.display = '';
						});
						nodeAnimations[12].item.setVisible(true);
						nodeAnimations[12].start();
					});
					linkAnimations[5].item.setVisible(true);
					linkAnimations[5].start();
				});
				nodeAnimations[4].item.setVisible(true);
				nodeAnimations[4].start();
			});
			linkAnimations[13].item.setVisible(true);
			linkAnimations[13].start();
		} catch (e) { }
	}

	function stageThreeRight()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[14].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[6].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[7].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[14].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							// create the decision attached nodes.
							branchOne = createCircleNode(new Rect(173.75, 140.75, 10, 5), "Yes");
							branchOne.attachTo(sender.item);
							branchOne.setTag(8);
							createPulseAnimation(branchOne).start();

							branchTwo = createCircleNode(new Rect(196.25, 140.75, 10, 5), "No");
							branchTwo.setTag(9);
							branchTwo.attachTo(sender.item);
							createPulseAnimation(branchTwo).start();

							$('#animationControls')[0].style.display = '';
						});
						nodeAnimations[14].item.setVisible(true);
						nodeAnimations[14].start();
					});
					linkAnimations[7].item.setVisible(true);
					linkAnimations[7].start();
				});
				nodeAnimations[6].item.setVisible(true);
				nodeAnimations[6].start();
			});
			linkAnimations[14].item.setVisible(true);
			linkAnimations[14].start();
		} catch (e) { }
	}

	function stageFourLeft()
	{
		linkAnimations[15].item.setVisible(true);
		linkAnimations[15].start();
	}

	function stageFourRight()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[16].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[9].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[10].item.setVisible(true);
					linkAnimations[10].start();
					$('#animationControls')[0].style.display = '';
				});
				nodeAnimations[9].item.setVisible(true);
				nodeAnimations[9].start();
			});
			linkAnimations[16].item.setVisible(true);
			linkAnimations[16].start();
		} catch (e) { }
	}

	function stageFiveLeft()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[17].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[5].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[6].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[3].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							linkAnimations[4].addEventListener(AnimationEvents.animationComplete, function (sender, args)
							{
								nodeAnimations[11].addEventListener(AnimationEvents.animationComplete, function (sender, args)
								{
									// create the decision attached nodes.
									branchOne = createCircleNode(new Rect(35, 145, 10, 5), "Yes");
									branchOne.attachTo(sender.item);
									branchOne.setTag(5);
									createPulseAnimation(branchOne).start();

									branchTwo = createCircleNode(new Rect(62.5, 135, 10, 5), "No");
									branchTwo.setTag(7.1);
									branchTwo.attachTo(sender.item);
									createPulseAnimation(branchTwo).start();

									animateScroll(diagram.nodes[4].getBounds().y - 5);

									$('#animationControls')[0].style.display = '';
								});
								nodeAnimations[11].item.setVisible(true);
								nodeAnimations[11].start();
							});
							linkAnimations[4].item.setVisible(true);
							linkAnimations[4].start();
						});
						nodeAnimations[3].item.setVisible(true);
						nodeAnimations[3].start();
					});
					linkAnimations[6].item.setVisible(true);
					linkAnimations[6].start();
				});
				nodeAnimations[5].item.setVisible(true);
				nodeAnimations[5].start();
			});
			linkAnimations[17].item.setVisible(true);
			linkAnimations[17].start();
		} catch (e) { }
	}

	function stageFiveRight()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[18].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[6].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[7].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[14].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							// create the decision attached nodes.
							branchOne = createCircleNode(new Rect(173.75, 140.75, 10, 5), "Yes");
							branchOne.attachTo(sender.item);
							branchOne.setTag(8);
							createPulseAnimation(branchOne).start();

							branchTwo = createCircleNode(new Rect(196.25, 140.75, 10, 5), "No");
							branchTwo.setTag(9);
							branchTwo.attachTo(sender.item);
							createPulseAnimation(branchTwo).start();

							animateScroll(diagram.nodes[4].getBounds().y - 5);

							$('#animationControls')[0].style.display = '';
						});
						nodeAnimations[14].item.setVisible(true);
						nodeAnimations[14].start();
					});
					linkAnimations[7].item.setVisible(true);
					linkAnimations[7].start();
				});
				nodeAnimations[6].item.setVisible(true);
				nodeAnimations[6].start();
			});
			linkAnimations[18].item.setVisible(true);
			linkAnimations[18].start();
		} catch (e) { }
	}

	function stageSixLeft()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[19].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[7].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[8].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[4].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							linkAnimations[5].addEventListener(AnimationEvents.animationComplete, function (sender, args)
							{
								nodeAnimations[12].addEventListener(AnimationEvents.animationComplete, function (sender, args)
								{
									// create the decision attached nodes.
									branchOne = createCircleNode(new Rect(35, 205, 10, 5), "Yes");
									branchOne.attachTo(sender.item);
									branchOne.setTag(16);
									createPulseAnimation(branchOne).start();

									branchTwo = createCircleNode(new Rect(62.5, 195, 10, 5), "No");
									branchTwo.attachTo(sender.item);
									branchTwo.setTag(10);
									createPulseAnimation(branchTwo).start();

									$('#animationControls')[0].style.display = '';
								});
								nodeAnimations[12].item.setVisible(true);
								nodeAnimations[12].start();
							});
							linkAnimations[5].item.setVisible(true);
							linkAnimations[5].start();
						});
						nodeAnimations[4].item.setVisible(true);
						nodeAnimations[4].start();
					});
					linkAnimations[8].item.setVisible(true);
					linkAnimations[8].start();
				});
				nodeAnimations[7].item.setVisible(true);
				nodeAnimations[7].start();
			});
			linkAnimations[19].item.setVisible(true);
			linkAnimations[19].start();
		} catch (e) { }
	}

	function stageSixRight()
	{
		try
		{
			$('#animationControls')[0].style.display = 'none';
			linkAnimations[20].addEventListener(AnimationEvents.animationComplete, function (sender, args)
			{
				nodeAnimations[8].addEventListener(AnimationEvents.animationComplete, function (sender, args)
				{
					linkAnimations[9].addEventListener(AnimationEvents.animationComplete, function (sender, args)
					{
						nodeAnimations[7].addEventListener(AnimationEvents.animationComplete, function (sender, args)
						{
							linkAnimations[8].addEventListener(AnimationEvents.animationComplete, function (sender, args)
							{
								nodeAnimations[4].addEventListener(AnimationEvents.animationComplete, function (sender, args)
								{
									linkAnimations[5].addEventListener(AnimationEvents.animationComplete, function (sender, args)
									{
										nodeAnimations[12].addEventListener(AnimationEvents.animationComplete, function (sender, args)
										{
											// create the decision attached nodes.
											branchOne = createCircleNode(new Rect(35, 205, 10, 5), "Yes");
											branchOne.attachTo(sender.item);
											branchOne.setTag(16);
											createPulseAnimation(branchOne).start();

											branchTwo = createCircleNode(new Rect(62.5, 195, 10, 5), "No");
											branchTwo.attachTo(sender.item);
											branchTwo.setTag(10);
											createPulseAnimation(branchTwo).start();

											$('#animationControls')[0].style.display = '';
										});
										nodeAnimations[12].item.setVisible(true);
										nodeAnimations[12].start();
									});
									linkAnimations[5].item.setVisible(true);
									linkAnimations[5].start();
								});
								nodeAnimations[4].item.setVisible(true);
								nodeAnimations[4].start();
							});
							linkAnimations[8].item.setVisible(true);
							linkAnimations[8].start();
						});
						nodeAnimations[7].item.setVisible(true);
						nodeAnimations[7].start();
					});
					linkAnimations[9].item.setVisible(true);
					linkAnimations[9].start();
				});
				nodeAnimations[8].item.setVisible(true);
				nodeAnimations[8].start();
			});
			linkAnimations[20].item.setVisible(true);
			linkAnimations[20].start();
		} catch (e) { }
	}
}