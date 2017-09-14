import matplotlib.pyplot as plot

def f(x):
    if x % 2 != 0:
        return 1
    else:
        return -1

xs = list(range(-5, 6))
ys = []
for x in xs:
    print(x)
    ys.append(f(x))

plot.bar(xs, ys, align='edge')
plot.axis([-6,6,-1.0,1.0])
plot.show()
