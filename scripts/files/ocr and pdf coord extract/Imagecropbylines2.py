import cv2 as cv
import numpy as np
import os
import subprocess



# Assign the values here

# direcotory containing tiff files
dirname = 'malticlean'
# Destination direcotory
destdir = 'maltiot'
# pdf filename
pdffilename = 'NOBLE-QURAN_malti.pdf'
# I got these values from Apache PDFBox , by opening the pdf in using
# java -jar pdfbox-app-2.0.*.jar PDFDebugger "InputFile" , values are located in cropBox/ MediaBox
# or I could get those values from pdfinfo from poppler using
# pdfinfo -box input.pdf         (use the Meidabox values)
# https://stackoverflow.com/a/55100730/2437224

# pad the image by this value, so as not to crop at the edges of text
padding = 0



# returns value of Vertical line of length between two given threshold, between a given x1 and x2 value of a given list
# ascending tells whether to sort in asending or descending order
def getVLineVal(templines, threshold_1, threshold_2, x1, x2, ascending):
    # Accessing the iths column in our case we want y1 and y2
    y1list = templines[:, 1]
    y2list = templines[:, 3]
    subListY = np.subtract(y1list, y2list)
    # append and Sort the list by 5th column i.e subListY
    templines = appendSortList(templines, subListY, ascending)

    for val, index in zip(templines, range(len(templines))):
        if  val[2] < x2 and val[0] > x1 and val[4] > threshold_1 and val[4] < threshold_2:
            return val[:4]


# Returns value of horizontal line of length between two given threshold, between a given y1 and y2 value of a given list
# ascending tells whether to sort in asending or descending order
def getHLineVal(templines, threshold_1, threshold_2, y1, y2, ascending):
    x1list = templines[:, 0]
    x2list = templines[:, 2]
    subListX = np.subtract(x2list, x1list)
    # append and Sort the list by 5th column i.e subListX
    templines = appendSortList(templines, subListX, ascending)

    for val, index in zip(templines, range(len(templines))):
        if  val[3] < y2 and val[1] > y1 and val[4] > threshold_1 and val[4] < threshold_2:
            return val[:4]

# Appends the a list and sorts it by the appended list in the ascending or descending order and return the sorted list
def appendSortList(listToSort, listToAppend, ascending):
    columnLength = len(listToSort[0])
    listToSort = np.append(listToSort, np.reshape(listToAppend, (-1, 1)), axis=1)
    # Sort the list by last appended column
    if ascending:
        listToSort = listToSort[listToSort[:,columnLength].argsort()]
    else:
        # Sort in descending order i.e big to small
        listToSort = listToSort[listToSort[:,columnLength].argsort()[::-1]]

    return listToSort



###########################

#pageno = 2
dirlist = os.listdir(dirname)
# pageno is the pageno of pdf
for filename,pageno in zip(dirlist, range(1,len(dirlist)+1)):

    #filename = 'NOBLE-QURAN_malti_Page_0318.tiff'
    img = cv.imread(cv.samples.findFile(os.path.join(dirname, filename)))

    imgheight, imgwidth = img.shape[:2]

    # Get the ratios and relation between them
    #heightratio = imgheight / pdfheight
    #widthratio = imgwidth / pdfwidth

    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    edges = cv.Canny(gray, 50, 150, apertureSize=3)
    lines = cv.HoughLinesP(edges, 1, np.pi / 180, 100,
                           minLineLength=50, maxLineGap=1)

    # Default values
    xcord = 170
    ycord = 170
    width = -130
    height = -180

    if lines is not None:
        # Initial dimensions/shape of returned lines are (n,1,4), converting to (n,4), where n is no of lines returns in array and 4 is x1,y1,x2,y2
        simplelines = lines[:, 0]
        xcordVal = getVLineVal(simplelines,350,10000,120,230, False)
        if xcordVal is not None:
            xcord = xcordVal[2] + padding

        ycordVal = getHLineVal(simplelines,300,10000,120,230, False)
        if ycordVal is not None:
            ycord = ycordVal[3] + padding

        widthVal = getVLineVal(simplelines,200,1050,600,800, False)
        if widthVal is not None:
            width = widthVal[0]- padding

        heightVal = getHLineVal(simplelines,70,10000, 600, 870, False)
        if heightVal is not None:
            height = heightVal[1] - 3

    cv.imwrite(os.path.join(destdir,filename),img[ycord:height, xcord:width])
    # call the pdftotext to extract the text from given coordinates
    #val = subprocess.list2cmdline(['C:\\msys64\\mingw64\\bin\\pdftotext.exe','-layout','-x',str(xcord),'-y',str(ycord),'-W',str(width),'-H',str(height),'-f',str(i),'-l',str(i),os.path.join(pdffilename),os.path.join(destdir,filename+'.txt')])
    # print(val)
