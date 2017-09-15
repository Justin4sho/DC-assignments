from turtle import *

def circle2(size,color1,color2):
    color(color1,color2)
    begin_fill()
    circle(size)
    end_fill()


def hexagon():
    for i in range(6):
        forward(100)
        left(60)



def octagon():
    for i in range(8):
        forward(100)
        left(45)



def pentagon():
    for i in range(5):
        forward(100)
        left(72)



def square():
    for i in range(4):
        forward(100)
        left(90)



def star():
    for i in range(5):
        forward(100)
        right(144)



def triangle():
    for i in range(3):
        forward(100)
        left(120)
