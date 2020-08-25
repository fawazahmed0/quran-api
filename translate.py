import sys
import json
# Refer https://github.com/ssut/py-googletrans to see examples on how to use this package
from googletrans import Translator
translator = Translator()
# https://stackoverflow.com/a/52372390
sys.stdout.reconfigure(encoding='utf-8')

# python command line args https://www.tutorialspoint.com/python/python_command_line_arguments.htm
args = sys.argv

# This script will take an array of text strings and return back  result the googletrans library gives in json format to stdout


# If the first argument is detect, then detect language
if args[1] == 'detect':
    json.dump(vars(translator.detect(args[2])), sys.stdout)
# else translate the languages in array, this library support 15k char at single array index
else:
    # Removing the script name from args
    args.pop(0)

    translations = translator.translate(args)
    print('[')
    for translation in translations:
        json.dump(vars(translation), sys.stdout)
        print(',')
    print('""')
    print(']')
# Last element in the array returned is empty string, you need to remove that before usage
