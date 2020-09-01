### Flags:

**Warning**:
Never change the values of the flags, changing it will introduce inconsistencies in the file structures and I cannot merge the PR, if the script was run with flag values changed.

### checkduplicate:
Setting [checkduplicate](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L3 "checkduplicate") to true will make the script check for duplicate translations and avoid adding new translations if a duplicate copy of it already exists
### jsonrequired:
Setting [jsonrequired](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L5 "jsonrequired") to true will make the JSON in the translation required and the script will fail if no json was found in the translation file
### generateLatin:
Setting [generateLatin](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L7 "generateLatin") to true will make the script auto generate the latin/roman script translation using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py") script


### Create argument:
It starts by reading the files inside in [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory and [checks for json](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "checks for json") and also [validates and correct the translation](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L346 "validates and correct the translation") incase it's not in proper format, after the translation passes this step, it will check for any [duplicate](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L815 "duplicate") translation in the database to avoid adding duplicate translations. 

Now the json is [added with other values](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L823 "added with other values") such as link etc, [language direction value](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L949 "language direction value") is detected using browser and incase the language was not specified properly, it is detected using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py"), but many time it return wrong value, and that's the reason specifying language is required.

[editionname](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L874 "editionname") is auto generated using the json values to maintain standard naming. Now the files are [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L290 "generated") using [info.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json)

Now if the translation was in latin script with diacritical marks, then editionName-la version is [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L218 "generated") i.e edition without diacritical marks, it goes through the same process which the original translation went, i.e [JSON Validity checks](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "JSON Validity checks"), [language detection](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L837 "language detection"), but uses the editionName of the original translation and doesn't auto generate editionName this time, but only [adds '-la' to it](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L222 "adds '-la' to it")

Now if the translation was in other script such as chinese, then the latin version will be [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L226 "generated") using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py") script, it goes through the same process which the original translation went, i.e [JSON Validity checks](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "JSON Validity checks"), [language detection](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L837 "language detection"), but uses the editionName of the original translation and doesn't auto generate editionName, only it [adds -la' or '-lad'](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L248 "adds -la' or '-lad'") depending on the generated translation

After everything is done, the files for which the create was successful will be moved to [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals") directory. The [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory will be empty, or it will have only those files for which the translation generation process was not successful.

You can run the create command again to see what errors that translation file is having.
After this the [editions.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "editions.json") is updated to reflect the directory changes

### Update argument:
It goes through the same process as of [create](#create-argument), except that the json values from the newly updated file is given more [priority](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L208 "priority") and also a file with the same name [should exist](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L165 "should exist") in the database, and that's the reason we copy it from [database/chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "database/chapterverse") folder ,so that it can run smoothly

### Delete argument:
It [deletes](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L475 "deletes") the edition and regenerates the editions.json to reflect the directory changes

### Search argument:
[Searches](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L1127 "Searches") the database for a given string, it uses [regex](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L445 "regex") so commas, special symbols, double spaces etc all are ignored, so it's highly accurate

### fontsgen argument:
It first [renames](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L534 "renames") fontnames to standard names, removing all duplicate names etc, then generate the fonts using [fontsquirrel](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L687 "fontsquirrel"), then the generated fonts are moved [one by one](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L619 "one by one") to [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory

The original files from [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory will have [-org suffix](https://github.com/fawazahmed0/quran-api/blob/1/fonts/al-qalam-quran-majeed-1-org.ttf "-org suffix") added to it and then [fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "fonts.json") and [fonts.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.min.json "fonts.min.json") is generated using the fonts inside [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory


### translate.py script:
It takes an [array of string](https://github.com/fawazahmed0/quran-api/blob/4d68518c8b4d831457999a1c281536fd8a5f004f/translate.py#L10 "array of string") and returns back the translation in json format. To detect language, the first string should be [detect](https://github.com/fawazahmed0/quran-api/blob/4d68518c8b4d831457999a1c281536fd8a5f004f/translate.py#L16 "detect") and next arg should be string of lang to detect

It uses [googletrans](https://github.com/ssut/py-googletrans "googletrans") python library which inturn uses google translate, to translate a given text, we will use it to only [get the latin script](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L1035 "get the latin script") of the input lanugage, we don't care about the translated text

In future it's possible that the [googletrans](https://github.com/ssut/py-googletrans "googletrans") might break, but we can still get the functionality using [browser](https://github.com/microsoft/playwright/ "browser") and get the latin script translations from [Google Translate](https://translate.google.com/ "Google Translate")




In case you still have questions refer [apiscript.js](https://github.com/fawazahmed0/quran-api/blob/1/apiscript.js "apiscript.js"), [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.p "translate.py") 
and also you can [ask me](https://github.com/fawazahmed0/quran-api/issues/new "ask me ")
