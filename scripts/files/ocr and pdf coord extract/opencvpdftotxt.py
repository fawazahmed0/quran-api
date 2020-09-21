import cv2 as cv
import numpy as np
import os
import subprocess
#img = cv.imread("images.jpg")

#crop_img = img[100:500, 200:300]

# pad the image by this value, so as not to crop at the edges of text
padding = 3
# direcotory containing tiff files
dirname = 'eng'
# Destination direcotory
destdir = 'engot'
# keeps track of pageno
i = 1
for filename in os.listdir(dirname):
    #filename = 'english_Page_0002.tiff'
    img = cv.imread(cv.samples.findFile(os.path.join(dirname,filename)))
    # I got these values from Apache PDFBox , by opening the pdf in using
    # java -jar pdfbox-app-2.0.*.jar PDFDebugger "InputFile" , values are located in cropBox
    # https://stackoverflow.com/a/55100730/2437224
    pdfwidth = 396.85
    pdfheight = 595.276
    imgheight, imgwidth = img.shape[:2]

    # Get the ratios and relation between them
    heightratio = imgheight/pdfheight
    widthratio = imgwidth/pdfwidth

    gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
    edges = cv.Canny(gray,50,150,apertureSize = 3)
    lines = cv.HoughLinesP(edges,1,np.pi/180,100,minLineLength=20,maxLineGap=1)
    #subprocess.call(['C:\\msys64\\mingw64\\bin\\pdftotext.exe',os.path.join('english(2).pdf'),os.path.join(destdir,filename+'.txt')])
    try:
        # Initial dimensions/shape of returned lines are (n,1,4), converting to (n,4), where n is no of lines returns in array and 4 is x1,y1,x2,y2
        simplelines = lines[:,0]
        #print("simplelines before, ", simplelines)
        # divide all the values with the height and width ratios, so that we can get proper pdf coordinates
        # divide y1 and y2 values with heightratio
        simplelines[:,1] = np.divide(simplelines[:,1], heightratio).astype(int)
        simplelines[:,3] = np.divide(simplelines[:,3], heightratio).astype(int)
        # divide x1 and x2 values with widthratio
        simplelines[:,0] = np.divide(simplelines[:,0], widthratio).astype(int)
        simplelines[:,2] = np.divide(simplelines[:,2], widthratio).astype(int)
        #print("val is ",val.astype(int))
        #print("simplelines after, ", simplelines)

        # Accessing the iths column in our case we want y1 and y2
        y1list = simplelines[:,1]
        y2list = simplelines[:,3]
        # subtract the columns
        sub = np.subtract(y1list, y2list)
        # Get max from subtraction result, i.e is the longest vertical line, which we want
        maxval =  np.amax(sub)
        # The values of x1, y1,x2,y2 at maxindex in simplelines list will be used to calculate the cropping area
        maxindex = np.where(sub == maxval)
        # Making command that will extract text from the given coordinates
        #print(simplelines[maxindex][0])
        # Setting the coordinates and width and height
        xcord = 0
        ycord = simplelines[maxindex][0][3]-padding
        width = simplelines[maxindex][0][2] - xcord
        height = simplelines[maxindex][0][1] - ycord+padding
        # call the pdftotext to extract the text from given coordinates
        subprocess.call(['C:\\msys64\\mingw64\\bin\\pdftotext.exe','-layout','-x',str(xcord),'-y',str(ycord),'-W',str(width),'-H',str(height),'-f',str(i),'-l',str(i),os.path.join('english.pdf'),os.path.join(destdir,filename+'.txt')])
        #subprocess.call(['C:\\msys64\\mingw64\\bin\\pdftotext.exe',os.path.join('english(2).pdf'),os.path.join(destdir,filename)])
        # Run the above command
        #os.system(cmd)
        # cropping by y1:y2,x1:x2
        #crop_img = img[simplelines[maxindex][0][3]-padding:simplelines[maxindex][0][1]+padding, :simplelines[maxindex][0][2]]
        #cv.imwrite(os.path.join(destdir,filename),crop_img)
    except:
        print("problem in file ",filename)
    # increment pageno
    i+=1



#for line in lines:
#    x1,y1,x2,y2 = line[0]
#    cv.line(img,(x1,y1),(x2,y2),(0,255,0),2)



#print(simplelines[maxindex][0])
#cv.imwrite('houghlines5.png',img)




#cv.imshow("cropped", crop_img)

#cv.waitKey(0)


#136
#190
#893
#2244
