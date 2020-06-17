the_problem.html file show the baseline CPU at 16%.

CSS animation with 'infinite' set uses a lot of CPU, it is a performance hog anyway you use it.

# Things I tried which made no difference

- Using `<canvas>` instead of an SVG
- Using SVG animation via: `<animate>` within the `<circle>`

# the_solution.html

- Use an animated gif instead (2.6% CPU usage)
- Notice adding additional versions doesn't scale the CPU up
