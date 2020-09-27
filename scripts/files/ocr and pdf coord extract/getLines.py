# Takes minLineLength, maxLineGap, and PathToImage
# returns the lines in the given image
import cv2 as cv
import sys
import json
import numpy as np

args = sys.argv
# Remove the first element from arguments as it is the current script name
args.pop(0)

minLineLen = int(args[0])
maxLinegap = int(args[1])
pathToImage = args[2]


img = cv.imread(cv.samples.findFile(pathToImage))
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
edges = cv.Canny(gray,50,150,apertureSize = 3)
lines = cv.HoughLinesP(edges,1,np.pi/180,100,minLineLength=minLineLen,maxLineGap=maxLinegap)

sys.stdout.write(json.dumps(lines.tolist()))
