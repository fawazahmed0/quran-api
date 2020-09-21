import subprocess


#cmd = 'C:\\msys64\\mingw64\\bin\\pdftotext.exe -x 0 -y '+str(simplelines[maxindex][0][3]-padding+)+' -W '+str(simplelines[maxindex][0][2])+' -H '+str(simplelines[maxindex][0][1])+' -f '+str(i)+' -l '+str(i)+' '+os.path.join(dirname,filename)+' 'os.path.join(destdir,filename)
subprocess.call(['C:\\msys64\\mingw64\\bin\\pdftotext.exe','-x',str(0),'-y',str(simplelines[maxindex][0][3]-padding+),'-W',str(simplelines[maxindex][0][2]),'-H',str(simplelines[maxindex][0][1]),'-f',str(i)'-l',str(i),os.path.join(dirname,filename),os.path.join(destdir,filename)])
#args = ("C:\\msys64\\mingw64\\bin\\pdftotext.exe")
#Or just:
#args = "bin/bar -c somefile.xml -d text.txt -r aString -f anotherString".split()
#popen = subprocess.Popen(args, stdout=subprocess.PIPE)
#popen.wait()
#output = popen.stdout.read()
#print(output)
