the_problem.html file show the baseline CPU at 16%.

CSS animation with 'infinite' set uses a lot of CPU, it is a performance hog anyway you use it. Every [example](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) of [using](https://thoughtbot.com/blog/css-animation-for-beginners) it [online](https://www.tutorialrepublic.com/codelab.php?topic=css3&file=animation-property) has the same issue

# Things I tried which made no difference

- Using `<canvas>` instead of an SVG
- Using SVG animation via: `<animate>` within the `<circle>` rather than via CSS and Keyframes
- Drawing the circle with CSS rather than a SVG

# Things I couldn't get to work

- Apparently, tricking the browser into thinking the element is 3D moves the load off the CPU onto the GPU. This saves 50% CPU: https://stackoverflow.com/questions/13176746/css-keyframe-animation-cpu-usage-is-high-should-it-be-this-way

# the_solution.html

- Use an animated gif instead (2.6% CPU usage)
- Notice adding additional copies to the page doesn't scale the CPU up
- If the pulse isn't shown it uses zero CPU, the CSS version still uses a load of CPU even when off page
