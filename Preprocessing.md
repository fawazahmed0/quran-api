### Preprocessing the Files:

Preprocessing the files is something that can't be explained, as every file has to be preprocessed differently depending on its type and content. At the end of the day you just need a text file with verse number at the beginning of each verse, which can be added easily

I will share here few things that might help you in the process.

- [Poppler](https://poppler.freedesktop.org/):<br>
Poppler provides few binaries that helps in many pdf related tasks such as converting [text based pdf to text](https://manpages.debian.org/stretch/poppler-utils/pdftotext.1.en.html) file or converting [image based pdf to tiff](https://manpages.debian.org/testing/poppler-utils/pdftocairo.1.en.html) files or getting [pdf metadata](https://manpages.debian.org/testing/poppler-utils/pdftocairo.1.en.html), extracting the [text using pdf coordinates](https://manpages.debian.org/stretch/poppler-utils/pdftotext.1.en.html) and many more things.<br>
Windows users can install by performing [these steps](https://stackoverflow.com/a/63974921/2437224)

- [qpdf](https://github.com/qpdf/qpdf):<br>
Some pdf's are secured or encrypted, to remove restrictions, it can be decrypted by:<br>
`qdf --decrypt secured.pdf unsecured.pdf`

- [OpenCV](https://docs.opencv.org/master/d6/d00/tutorial_py_root.html):<br>
Incase you want to process tiff images, then you will have to preprocessing the images(cropping etc) before feeding to an [OCR software](https://github.com/tesseract-ocr/tesseract).
It can be installed for python using:<br>
`pip3 install opencv-python`

- [Tesseract](https://github.com/tesseract-ocr/tesseract):<br>
After you have got good quality tiff images, then those can be converted into text form using tesseract

- [Regular Expressions](https://regexone.com/):<br>
You have to be good in using regular expressions, this will help in solving some of the toughest problems which cannot be solved programmatically.

- [Github Desktop](https://desktop.github.com/):<br>
Create a new repo at github to store the files to be preprocessed and to the preprocessing take inside the git repo(i.e after every changes to the files, commit the changes), this will help you to go back to the initial file, incase you did some mistakes and also it will help you to see what things have been changed using Github Desktop gui

I have written few notes for myself and they are pretty unstructured, incase you want to have a look, you can see them [here](https://github.com/fawazahmed0/quran-api/blob/1/scripts/files/ocr%20and%20pdf%20coord%20extract/notes.txt)

You can always [ask me](https://github.com/fawazahmed0/quran-api/issues/new) ,incase you are stuck somewhere.

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/Preprocessing.md)
