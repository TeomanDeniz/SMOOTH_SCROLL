/******************************************************************************\
# JS - SMOOTH_SCROLL                             #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2024/11/22 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2025/02/25 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

function
	SMOOTH_SCROLL(ELEMENT, FRICTION = 0.04)
{
	function /* FLOAT */
		LERP(START, END, FRICTION)
	{
		return (START + (END - START) * FRICTION);
	}

	function
		UPDATE_SOFT_SCROLLBAR()
	{
		THIS.START_Y = LERP(THIS.START_Y, THIS.END_Y, THIS.FRICTION);
		THIS.START_X = LERP(THIS.START_X, THIS.END_X, THIS.FRICTION);
		THIS.TRACK.style.transform =
			"TRANSLATEY(-" + THIS.START_Y + "PX) " +
			"TRANSLATEX(-" + THIS.START_X + "PX)";
		THIS.REQUEST_ANIMATION_FRAME =
			requestAnimationFrame(UPDATE_SOFT_SCROLLBAR);

		if (THIS.MAIN_SLIDER.style.margin === "0.0001px")
			THIS.MAIN_SLIDER.style.margin = "0.0002PX";
		else // TO FIX SCROLL FREEZE BUG. I KNOW. IT'S DISGUSTING. BUT WELP.
			THIS.MAIN_SLIDER.style.margin = "0.0001PX";

		if (
			THIS.START_Y.toFixed(1) === THIS.MAIN_SLIDER.scrollTop.toFixed(1) && 
			THIS.START_X.toFixed(1) === THIS.MAIN_SLIDER.scrollLeft.toFixed(1)
		)
			cancelAnimationFrame(THIS.REQUEST_ANIMATION_FRAME);
	}

	function
		MOVE_SOFT_SCROLLBAR()
	{
		cancelAnimationFrame(THIS.REQUEST_ANIMATION_FRAME);

		if (this.scrollTop !== THIS.OLD_TOP_SCROLL)
		{
			THIS.END_Y = THIS.MAIN_SLIDER.scrollTop;
			THIS.OLD_TOP_SCROLL = this.scrollTop;
		}
		else if (this.scrollLeft !== THIS.OLD_LEFT_SCROLL)
		{
			THIS.END_X = THIS.MAIN_SLIDER.scrollLeft;
			THIS.OLD_LEFT_SCROLL = this.scrollLeft;
		}

		THIS.REQUEST_ANIMATION_FRAME =
			requestAnimationFrame(UPDATE_SOFT_SCROLLBAR);
	}

	const THIS = {};

	THIS.MAIN_SLIDER = ELEMENT;
	THIS.TRACK = document.createElement('SLIDER_CONTAINER');
	THIS.START_Y = 0;
	THIS.END_Y = 0;
	THIS.START_X = 0;
	THIS.END_X = 0;
	THIS.REQUEST_ANIMATION_FRAME = undefined;
	THIS.FRICTION = FRICTION;
	THIS.OLD_TOP_SCROLL = 0;
	THIS.OLD_LEFT_SCROLL = 0;

	if (!THIS.TRACK.hasChildNodes() && THIS.MAIN_SLIDER.children.length > 0)
	{
		Array.from(THIS.MAIN_SLIDER.children).forEach(
			function (CHILD)
			{
				THIS.TRACK.appendChild(CHILD);
			}
		);
	}

	THIS.MAIN_SLIDER.appendChild(THIS.TRACK);
	UPDATE_SOFT_SCROLLBAR();
	THIS.MAIN_SLIDER.onscroll = MOVE_SOFT_SCROLLBAR;
}
