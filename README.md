# Fixing CPU issues with CSS animations

the_problem.html file shows the baseline CPU at 16% taken from the BBC website in June 2020.

CSS animation with 'infinite' set for the `animation-iteration-count` property uses a lot of CPU. It is a performance hog anyway you use it. Every [example](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) of [using](https://thoughtbot.com/blog/css-animation-for-beginners) it [online](https://www.tutorialrepublic.com/codelab.php?topic=css3&file=animation-property) has the same issue

# Things I tried which made no difference

- Using `<canvas>` instead of an SVG
- Using SVG animation via: `<animate>` within the `<circle>` rather than via CSS and Keyframes
- Drawing the circle with CSS rather than an SVG

# Things I couldn't get to work

- Tricking the browser into thinking the element is 3D moves the load off the CPU onto the GPU. This saves 50% CPU: https://stackoverflow.com/questions/13176746/css-keyframe-animation-cpu-usage-is-high-should-it-be-this-way

# The infinite solution

see: the_solution.html

- Use an animated gif instead (2.6% CPU usage)
- Notice adding additional copies to the page doesn't scale the CPU up
- If the pulse isn't shown it uses zero CPU, the CSS version still uses a load of CPU even when off-page

# The accessible solution

see: the_accessible_solution.html

- Only pulse for 5 seconds, rather than infinitely
- This makes it compliant with [WCAG 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide)
