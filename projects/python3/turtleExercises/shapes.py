from turtle import *

def circle2(size,color1,color2):
    color(color1,color2)
    begin_fill()
    circle(size)
    end_fill()


def hexagon(size,color1,color2):
    color(color1,color2)
    begin_fill()
    for i in range(6):
        forward(size)
        left(60)
    end_fill()

def octagon(size,color1,color2):
    color(color1,color2)
    begin_fill()
    for i in range(8):
        forward(size)
        left(45)
    end_fill()



def pentagon(size,color1,color2):
    color(color1,color2)
    begin_fill()
    for i in range(5):
        forward(size)
        left(72)
    end_fill()



def square(size,color1,color2):
    color(color1,color2)
    begin_fill()
    for i in range(4):
        forward(size)
        left(90)
    end_fill()



def star(size,color1,color2):
    color(color1,color2)
    begin_fill()
    for i in range(5):
        forward(size)
        right(144)
        forward(size)
        left(72)


    end_fill()



def triangle(size,color1,color2):
    for i in range(3):
        color(color1,color2)
        begin_fill()
        forward(size)
        left(120)
        end_fill()
