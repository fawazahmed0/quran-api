import numpy as np
import cv2 as cv
import os
import sys

args = sys.argv

# Reduce the size of image by this number to show image completely in screen
descalingFactor =  3

# mouse callback function, which will print the coordinates in console
def print_coord(event,x,y,flags,param):
    if event == cv.EVENT_MOUSEMOVE:
        print(f'{x*descalingFactor, y*descalingFactor}\r', end="")
filename =  len(args)>1 and args[1] or 'NOBLE-QURAN_basaa Basaa language cameroon Mbene_Page_001.tiff'
img = cv.imread(cv.samples.findFile(os.path.join(filename)))
imgheight, imgwidth = img.shape[:2]
resizedImg = cv.resize(img,(int(imgwidth/descalingFactor), int(imgheight/descalingFactor)), interpolation = cv.INTER_AREA)
cv.namedWindow('Get Coordinates')
cv.setMouseCallback('Get Coordinates',print_coord)
cv.imshow('Get Coordinates',resizedImg)
cv.waitKey(0)

#cv.destroyAllWindows()
