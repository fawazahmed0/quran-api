import sys
import json
# Refer https://github.com/ssut/py-googletrans to see examples on how to use this package
from googletrans import Translator
translator = Translator()
# https://stackoverflow.com/a/52372390
# Not setting to utf-8 explicitly as python3 is utf-8 by default and it requires python 3.7+ to run the below command
#sys.stdout.reconfigure(encoding='utf-8')

# python command line args https://www.tutorialspoint.com/python/python_command_line_arguments.htm
args = sys.argv

# This script will take an array of text strings and return back  result the googletrans library gives in json format to stdout


# If the first argument is detect, then detect language
if args[1] == 'detect':
    sys.stdout.write(json.dumps(vars(translator.detect(args[2]))))
# else translate the languages in array, this library support 15k char at single array index
else:
    # Removing the script name from args
    args.pop(0)

    translations = translator.translate(args)
    sys.stdout.write('[')
    for translation in translations:
        sys.stdout.write(json.dumps(vars(translation)))
        sys.stdout.write(',')
    sys.stdout.write('""')
    sys.stdout.write(']')
# Last element in the array returned is empty string, you need to remove that before usage
