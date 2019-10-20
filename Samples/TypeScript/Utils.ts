namespace Utils
{
	import Rect = MindFusion.Drawing.Rect;

	export function forEach(array, func)
	{
		for (var i = 0, l = array.length; i < l; i++)
		{
			var element = array[i];
			if (typeof (element) !== 'undefined') func.call(null, element, i, array);
		}
	}

	export function inflate(rect, x, y)
	{
		if (rect.width + 2 * x < 0)
		{
			x = -rect.width / 2;
		}
		if (rect.height + 2 * y < 0)
		{
			y = -rect.height / 2;
		}
		return new Rect(rect.x - x, rect.y - y, rect.width + 2 * x, rect.height + 2 * y);
	}
}