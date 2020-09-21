import cv2 as cv
import numpy as np
import os
#img = cv.imread("images.jpg")

#crop_img = img[100:500, 200:300]

# pad the image by this value, so as not to crop at the edges of text
padding = 10
# direcotory containing tiff files
dirname = '.'
# Destination direcotory
destdir = '.'
filename = 'macedonian_Page_022.tiff'
img = cv.imread(cv.samples.findFile(os.path.join(dirname,filename)))
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
edges = cv.Canny(gray,50,150,apertureSize = 3)
lines = cv.HoughLinesP(edges,1,np.pi/180,100,minLineLength=50,maxLineGap=1)
try:
    simplelines = lines[:,0]
    print(lines)
    # Accessing the iths column in our case we want y1 and y2
    y1list = simplelines[:,1]
    y2list = simplelines[:,3]
    # subtract the columns
    sub = np.subtract(y1list, y2list)
    # Get max from subtraction result, i.e is the longest vertical line, which we want
    maxval =  np.amax(sub)
    # The values of x1, y1,x2,y2 at maxindex in simplelines list will be used to calculate the cropping area
    maxindex = np.where(sub == maxval)
    # cropping by y1:y2,x1:x2
    #crop_img = img[simplelines[maxindex][0][3]-padding:simplelines[maxindex][0][1]+padding, :simplelines[maxindex][0][2]]
    #cv.imwrite(os.path.join(destdir,filename+'.txt'),crop_img)
except:
    print("problem in file ",filename)




for line in lines:
    x1,y1,x2,y2 = line[0]
    cv.line(img,(x1,y1),(x2,y2),(0,255,0),2)

crop_img = img[240:, :1200]

#print(simplelines[maxindex][0])
cv.imwrite('houghlines5.png',crop_img)




#cv.imshow("cropped", img)

#cv.waitKey(0)


#136
#190
#893
#2244
