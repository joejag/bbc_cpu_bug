CSS animation with 'infinite' set uses a lot of CPU, isn't a performance hog anyway you use it.

The problem file show the baseline CPU at 16%.

# Things I tried which made no difference

- Using <canvas> instead of an SVG
- Using SVG animation via: <animate> within the <circle>

# Things that do work

- Use an animated gif instead (2.6% CPU usage)
