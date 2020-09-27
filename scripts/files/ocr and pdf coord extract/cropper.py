# Takes x1,y1,x2,y2, pathtoImage,pathtoSave as arguments and crops and saves the given image
# pass None to x1 or y1 to start from 0 and pass null to x2 or y2 to crop till end
import cv2 as cv
import sys


args = sys.argv
# Remove the first element from arguments as it is the current script name
args.pop(0)

# Read the arguments

x1 = "none"!=args[0].lower() and int(args[0]) or None
y1 = "none"!=args[1].lower() and int(args[1]) or None
x2 = "none"!=args[2].lower() and int(args[2]) or None
y2 = "none"!=args[3].lower() and int(args[3]) or None
pathToImage = args[4]
pathToSave = args[5]

# Read the image
img = cv.imread(cv.samples.findFile(pathToImage))

# save the cropped image
cv.imwrite(pathToSave,img[y1:y2, x1:x2])
