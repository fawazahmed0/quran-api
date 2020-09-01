### Prerequisites:

- [Python 3](https://www.python.org/downloads/ "Python 3")
- [Node.js](https://nodejs.org/en/ "Node.js")

`pip3 install googletrans`

`npm install -g -D playwright extract-zip `

To Create/Update/Delete/Search the editions, we will use [apiscript.js](https://github.com/fawazahmed0/quran-api/blob/1/apiscript.js "apiscript.js"). 

Never modify/add the files manually, for everything we will use [apiscript.js](https://github.com/fawazahmed0/quran-api/blob/1/apiscript.js "apiscript.js")

### Add new translations:
1. The translation should either be in 6236 lines(ignoring empty lines) or if it has more lines then it should at least have verse number at the beginning of each verse, It doesn't matter whether the chapter number is there or not.
The [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals") folder have different translations that were used as an input to apiscript.js, please refer those files to check your translation will work fine or not.

    [Example 1](https://raw.githubusercontent.com/fawazahmed0/quran-api/1/database/originals/quranromanurdu "Example 1")

    [Example 2](https://github.com/fawazahmed0/quran-api/blob/1/database/originals/en.itani.txt "Example 2")

    [Example 3](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/database/originals/ara-quranuthmani.txt "Example 3")

2.  Add JSON data at end of the file in following format:
    ```json
    {
    "author":"Name of the author",
    "language":"Name of the language",
    "source":"Specify source here if any",
    "comments":"Add any comments here"
    }
    ```  
    Please see [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals") , all the files have the json data at end of file.
When specifying the language, please use proper [iso name of language](https://github.com/fawazahmed0/quran-api/blob/1/isocodes/iso-codes.json "iso name of language")

    [Example 1](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/database/originals/en.sahih#L6238 "Example 1")
    
    [Example 2](https://github.com/fawazahmed0/quran-api/blob/af77602a92a2ea906b0dd970b4bfeb8bc79c0bc2/database/originals/zh.jian#L6239 "Example 2")
    
3. Copy and paste the translations to the [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory, you can paste any number of translations.

4. Run the following command:<br>
`node apiscript.js create`



    
If everything goes well, then the start directory will be empty and all your translations will move into [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals")
now push the changes to this repo

If you got stuck somewhere, Let me  [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know")

### Update translations:

Let say there is a spelling mistakes you want to correct in the translations:

1. Copy the translations to be updated from [database/chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "database/chapterverse") and paste it into start directory

2. Update the translation text, Please do not modify the JSON values which are stored at the end of file,specifically the name and language json values

3. And then, enter the following command:

    `node apiscript.js update`


### Searching Translation:

Lets say you what to know whether a translation exists in the database or not, or you want to find the edition which have a specific verse

1. Run the following command:

    `node apiscript.js search "String To be Searched"`
    
    It can take multiple arguments example:

    `node apiscript.js search "String To be Searched" "String2 To be Searched"`

    


### Deleting Translation:
1. Translations should not be deleted, otherwise it will break the api, but if there is a need, it can be done using:

    `node apiscript.js delete editionNameToDelete`
    
    It can take multiple arguments at single time example:
    
    `node apiscript.js delete editionNameToDelete editionName2ToDelete`
    



### Adding new font:
1. Copy and paste the fonts into [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory, you can paste any number of fonts in [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory

2. Run the following command:

    `node apiscript.js fontsgen`

### Updating a font:
1. Updating a font is a two step process,
2. First you have to [delete the font](#deleting-a-font) which needs to be updated
3. Then you have to [add the newly updated font](#adding-new-font)


###  Deleting a font:
1. Delete the font and all its formats specified in [fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "fonts.json") from [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory .

2. Run the following command:

    `node apiscript.js fontsgen`<br>
<br>

Facing any issue? [Let me Know](https://github.com/fawazahmed0/quran-api/issues/new "Let me Know ")

The above given details are enough to contribute to this repo, incase you want to know how the script works or want to add new features to the apiscript.js then see [Implementation details](https://github.com/fawazahmed0/quran-api/blob/1/Implementation.md "Implementation details")

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/CONTRIBUTING.md)
