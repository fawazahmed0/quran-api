## Contribute:

### Prerequisites:

- [Git](https://git-scm.com/downloads)


### Prerequisite Steps:
1.  Fork [quran-api](https://github.com/fawazahmed0/quran-api "quran-api") repo
2.  clone the forked repo:
```bash
git clone --filter=blob:none --no-checkout --depth 1  --sparse <YourFork.git>
cd quran-api
git sparse-checkout reapply --no-cone
git sparse-checkout add start/* command.txt
git checkout
```

### Add new translations:
1. The translation should either be in 6236 lines(ignoring empty lines) or if it has more lines then it should at least have verse number at the beginning of each verse, It doesn't matter whether the chapter number is there or not.
The [database/originals](https://github.com/fawazahmed0/quran-api/tree/1/database/originals "database/originals") folder have different translations that were used as an input to apiscript.js, please refer those files to check whether your translation file will work fine or not. You may want to [preprocess](https://github.com/fawazahmed0/quran-api/blob/1/Preprocessing.md) the file, if it is in other than text format(pdf, Images, docx, etc).

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

4. And then, enter the following command:<br>
`echo create > command.txt`

5. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request)


If you got stuck somewhere, Let me  [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know")

### Update translations:

Let say there is a spelling mistake in the edition and you would like to correct:

1. Run the following command:<br>
`git sparse-checkout add database/chapterverse/<editionNametoUpdate>.txt`<br>
For example if you want to update [eng-talalitani](https://github.com/fawazahmed0/quran-api/blob/1/database/chapterverse/eng-talalitani.txt) and  [ces-arnykl](https://github.com/fawazahmed0/quran-api/blob/1/database/chapterverse/ces-arnykl.txt) then run:<br>
`git sparse-checkout add database/chapterverse/eng-talalitani.txt database/chapterverse/ces-arnykl.txt`

2. Copy the translations to be updated, from [database/chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "database/chapterverse") directory and paste it into start directory

3. Update the translation text, Please do not modify the JSON values which are stored at the end of file,specifically the name and language json values

4. And then, run the following command:<br>
 `echo update > command.txt`

5. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request)

### Searching Translation:

Lets say you what to know whether a translation exists in the database or not, or you want to find the edition which have a specific verse

1. First Run the following command:<br>
`echo search > command.txt`<br>
And Now If you want to search single verse<br>
`echo "verse to be search" >> command.txt`<br>
If you want to search multiple verses in different editions<br>
`echo "verse to be searched1" "verse to be searched2" >> command.txt`

2. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request) ,and the result will be available at [Actions tab](https://github.com/fawazahmed0/quran-api/actions) in form of log file, after the PR is merged



### Deleting Translation:
1. Translations should not be deleted, otherwise it will break the api, but if there is a need, it can be done using:<br>
`echo delete > command.txt`<br>
And Now If you want to delete single edition<br>
`echo editionNameToDelete >> command.txt`<br>
And If you want to delete multiple editions<br>
`echo editionNameToDelete editionName2ToDelete >> command.txt`

2. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request)



### Adding new font:
1. Copy and paste the fonts into [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory, you can paste any number of fonts in [start](https://github.com/fawazahmed0/quran-api/tree/1/start "start") directory

2. Run the following command:<br>
`echo fontsgen > command.txt`

3. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request)



###  Deleting a font:
1. Delete the font and all its formats specified in [fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "fonts.json") from [fonts](https://github.com/fawazahmed0/quran-api/tree/1/fonts "fonts") directory .

2. Run the following command:<br>
`echo fontsgen > command.txt`

3. Now [Push the Changes and Create PR](#pushing-and-creating-pull-request)


###  Pushing and Creating Pull Request:
1. After you are done with your changes<br>
Run the following command:<br>
```bash
git add -A && git commit -m "Your commit message"
git push
```


2. Go to your forked repo and click on pull request

<br>

Facing any issue? [Let me Know](https://github.com/fawazahmed0/quran-api/issues/new "Let me Know ")

<br>

The above given details are enough to contribute to this repo, incase you want to know how the underlying things work or want to add new features to the repo then see [Local Contribute](https://github.com/fawazahmed0/quran-api/blob/1/CONTRIBUTING-LOCAL.md "Implementation details") and [Development details](https://github.com/fawazahmed0/quran-api/blob/1/dev.md "Development details")

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/CONTRIBUTING.md)
