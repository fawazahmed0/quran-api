## Implementation:

### Flags:

**Warning**:<br>
Never change the values of the flags, changing it will introduce inconsistencies in the file structures and I cannot merge the PR, if the script was run with flag values changed.

### checkduplicate:
Setting [checkduplicate](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L3 "checkduplicate") to true will make the script check for duplicate translations and avoid adding new translations if a duplicate copy of it already exists
### jsonrequired:
Setting [jsonrequired](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L5 "jsonrequired") to true will make the JSON in the translation required and the script will fail if no json was found in the translation file
### generateLatin:
Setting [generateLatin](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L7 "generateLatin") to true will make the script auto generate the latin/roman script translation using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py") script


### Create argument:
It starts by reading the files inside [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory and [checks for json](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "checks for json") and also [validates and correct the translation](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L346 "validates and correct the translation") incase it's not in proper format, after the translation passes this step, it will check for any [duplicate](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L815 "duplicate") translation in the database to avoid adding duplicate translations.

Now the json is [added with other values](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L823 "added with other values") such as link etc, [language direction value](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L949 "language direction value") is detected using browser and incase the language was not specified properly, it is detected using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py"), but many time it returns wrong value, and that's the reason specifying language is required.

[editionname](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L874 "editionname") is auto generated using the json values to maintain standard naming. Now the files are [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L290 "generated") using [info.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json)

Now if the translation was in latin script with diacritical marks, then editionName-la version is [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L218 "generated") i.e edition without diacritical marks, it goes through the same process which the original translation went, i.e [JSON Validity checks](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "JSON Validity checks"), [language detection](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L837 "language detection"), but uses the editionName of the original translation and doesn't auto generate editionName this time, but only [adds '-la' to it](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L222 "adds '-la' to it")

Now if the translation was in other script such as chinese, then the latin version will be [generated](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L226 "generated") using [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.py "translate.py") script, it goes through the same process which the original translation went, i.e [JSON Validity checks](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L136 "JSON Validity checks"), [language detection](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L837 "language detection"), but uses the editionName of the original translation and doesn't auto generate editionName, only it [adds -la' or '-lad'](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L248 "adds -la' or '-lad'") depending on the generated translation

After everything is done, the files for which the create was successful will be moved to [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals") directory. The [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory will be empty, or it will have only those files for which the translation generation process was not successful.

After this the [editions.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "editions.json") is updated to reflect the directory changes
Incase, the [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory was not empty after running create commad, then you can run the create command again to see what errors that translation file is having.

### Update argument:
It goes through the same process as of [create](#create-argument), except that the json values from the newly updated file is given more [priority](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L208 "priority") and also a file with the same name [should exist](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L165 "should exist") in the database, and that's the reason we copy it from [database/chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "database/chapterverse") folder ,so that it can run smoothly

### Delete argument:
It [deletes](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L475 "deletes") the edition and regenerates the editions.json to reflect the directory changes

### Search argument:
[Searches](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L1127 "Searches") the database for a given string, it uses [regex](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L445 "regex") so commas, special symbols, double spaces etc all are ignored, so it's highly accurate

### fontsgen argument:
It first [renames](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L534 "renames") fontnames to standard names, removing all duplicate names etc, then generate the fonts using [fontsquirrel](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L687 "fontsquirrel"), then the generated fonts are moved [one by one](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L619 "one by one") to [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory

The original files from [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory will have [-org suffix](https://github.com/fawazahmed0/quran-api/blob/1/fonts/al-qalam-quran-majeed-1-org.ttf "-org suffix") added to it while it's moved to [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory. [fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "fonts.json") and [fonts.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.min.json "fonts.min.json") is generated using the fonts inside [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory, the [metadata](https://github.com/fawazahmed0/quran-api/blob/349fd2a2c5da1a74c479bcfc1fc824dd73121629/apiscript.js#L703) of fonts is added using [opentype.js](https://github.com/opentypejs/opentype.js)


### translate.py script:
It takes an [array of string](https://github.com/fawazahmed0/quran-api/blob/4d68518c8b4d831457999a1c281536fd8a5f004f/translate.py#L10 "array of string") and returns back the translation in json format. To detect language, the first string should be [detect](https://github.com/fawazahmed0/quran-api/blob/4d68518c8b4d831457999a1c281536fd8a5f004f/translate.py#L16 "detect") and next arg should be string of lang to detect

It uses [googletrans](https://github.com/ssut/py-googletrans "googletrans") python library which inturn uses google translate, to translate a given text, we will use it to only [get the latin script](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/apiscript.js#L1035 "get the latin script") of the input lanugage, we don't care about the translated text

In future it's possible that the [googletrans](https://github.com/ssut/py-googletrans "googletrans") might break, but we can still get the functionality using [browser](https://github.com/microsoft/playwright/ "browser") and get the latin script translations from [Google Translate](https://translate.google.com/ "Google Translate")

### actions script:
This repo using GitHub [Actions](https://github.com/features/actions) to perform all the operations automatically, the code is in [run.yml](https://github.com/fawazahmed0/quran-api/blob/1/.github/workflows/run.yml) file.
The workflow can triggered either by adding files in [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory and/or by editing the [command.txt](https://github.com/fawazahmed0/quran-api/blob/1/command.txt) file as shown [here](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L8). It can also be triggered [manually](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L12) from [Actions tab](https://github.com/fawazahmed0/quran-api/actions), the repo is then [partially cloned](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L34)
and then the [commands](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L43) get stored in environment variable from [command.txt](https://github.com/fawazahmed0/quran-api/blob/1/command.txt) or from [manually entered values](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L50) during [manually run](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L12).
[first line](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L47) in [command.txt](https://github.com/fawazahmed0/quran-api/blob/37ad6ba071aa287d308f7191fc0f01bc088eb6ab/command.txt#L1) is used as apiscript.js command and [second line](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L48) in [command.txt](https://github.com/fawazahmed0/quran-api/blob/37ad6ba071aa287d308f7191fc0f01bc088eb6ab/command.txt#L2) is used as argument for apiscript.js command
The sparse checkout arguments are [dynamically generated](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L61) depending upon the apiscript.js command


and then [pip & npm packages cache](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L102) data is used if exists to save resources. Then the dependencies are [installed](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L115) using [requirements.txt](https://github.com/fawazahmed0/quran-api/blob/1/requirements.txt) and [package-lock.json](https://github.com/fawazahmed0/quran-api/blob/1/package-lock.json). [package-lock.json](https://github.com/fawazahmed0/quran-api/blob/1/package-lock.json) was automatically generated using [package.json](https://github.com/fawazahmed0/quran-api/blob/1/package.json) during [installation phase](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L118).
Then the [apiscript.js](https://github.com/fawazahmed0/quran-api/blob/1/apiscript.js "apiscript.js") is [executed](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L121).
The [command.txt](https://github.com/fawazahmed0/quran-api/blob/1/command.txt) gets [emptied](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L125) and [log is saved](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L130)  and the changes are [commited and pushed](https://github.com/fawazahmed0/quran-api/blob/a009b7d06947628b4ad0dcfe9bf158313e1a5f36/.github/workflows/run.yml#L137)


In case you still have questions refer [apiscript.js](https://github.com/fawazahmed0/quran-api/blob/1/apiscript.js "apiscript.js"), [translate.py](https://github.com/fawazahmed0/quran-api/blob/1/translate.p "translate.py")
and also you can [ask me](https://github.com/fawazahmed0/quran-api/issues/new "ask me ")

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/Implementation.md)
