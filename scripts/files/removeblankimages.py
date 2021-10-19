import cv2 as cv
import numpy as np
import os



current_dir = os.path.dirname(os.path.realpath(__file__))

muwatta_dir = os.path.join(current_dir,'muwatta')

for file in os.listdir(muwatta_dir):
    file_path = os.path.join(muwatta_dir,file)


    img = cv.imread(file_path)

    if np.mean(img) > 254.5:
        #White image
        os.remove(file_path) 
        print('Deleted ',file_path)

