####  Quran API
**In the name of God, who have guided me to do this work and I seek refuge in him from the evil of his creation**


This repo contains collection of Quran Translations and to allow development of websites, apps etc, it is structured in REST Architectural Style.
The purpose of this repo is to spread the word of God everywhere in the world

**Features:**
- Free & Blazing Fast response
- No Rate limits
- Latin/roman translation for many languages


**URL Structure:** <br>
`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@{apiVersion}/{endpoint}`

**Formats:**
The Endpoints Supports HTTP GET Method and returns the data in  two formats:<br>
`/{endpoint}.min.json`<br>
`/{endpoint}.json`<br>

**Endpoints:**<br>
- `/editions`<br>

Lists all the available editions in prettified json format:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json")
Get a minified version of it:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json")

- `/editions/{editionName}`

Lists the whole quran/quran translation:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json")
Get a latin(roman) script version of it by adding -la:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json")

Get a latin(roman) script with diacritical marks by adding -lad:
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json")

- `/editions/{editionName}/{ChapterNo}`
Get the whole chapter 5:
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json")


- `/editions/{editionName}/{ChapterNo}/{VerseNo}`
Get Chapter 5 verse 10:
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json")

- `/editions/{editionName}/juzs/{juzNo}`
Get juz 3:
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json")

Similarly:
- `/editions/{editionName}/rukus/{rukuNo}`
- `/editions/{editionName}/pages/{pageNo}`
- `/editions/{editionName}/manzils/{manzilNo}`
- `/editions/{editionName}/maqras/{maqraNo}`
<br>
- `/info` <br>
Get all the details about quran such as number of juzs,sajdas, rukus etc in quran
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")

- `/fonts`
List fonts available:
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@v/fonts.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json")

**Contribution:**
Without your contribution, this repo won't survive, incase of any issues or problems, questions etc, you can let me  [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know")
- Please help by adding new translations to this repo, you can share me the translation [here](https://github.com/fawazahmed0/quran-api/issues/new "here")
or
- Read [Contribute](https://github.com/fawazahmed0/quran-api/blob/1/References.md "Contribute") to add the translation directly to this repo


**Help Needed:**
[Make Colored Tajweed Fonts](https://github.com/fawazahmed0/quran-api/issues/7 "Make Colored Tajweed Fonts")


**Download:**
- All the files are in [database](https://github.com/fawazahmed0/quran-api/tree/1/database "database") folder of this repo, there are two folders available, one is [linebyline](https://github.com/fawazahmed0/quran-api/tree/1/database/linebyline "linebyline") and other is [chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "chapterverse")
[linebyline](https://github.com/fawazahmed0/quran-api/tree/1/database/linebyline "linebyline") contains files having verses in 6236 lines and [chapterverse](https://github.com/fawazahmed0/quran-api/tree/1/database/chapterverse "chapterverse") contains files having each verse prepended with chapter and verse no. Just download or clone this repo to get those files

- You can also fork this repo as a backup for future

**Authenticity:**
I have taken great care to not include any controversial authors, for example: 'Rashad Khalifa' , because there are chances that the translation may contain opinions of the author and not the meaning of the verse.
The Ahmaddiya community has done great work in translating the quran to many different languages of the world. May God reward them with guidance.
But I cannot take those translations also because the verses such as those talking about Jesus ([4:157](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad/4/157.json "4:157")) usually have opinions of the author of what actually happened to Jesus etc.

In case you find any translation whose authenticity could be questioned, please let me know at [here](https://github.com/fawazahmed0/quran-api/issues/new "here") .Only after verifying the claims, will I remove the translation

**Any Issues:**
 [Raise here](https://github.com/fawazahmed0/quran-api/issues/new "Raise here")

 **Donation:**
 - Even though I worked very hard on this project, I will not ask donation for myself. I will take the reward from God in this world and the next
 - But what I ask you is to donate the authors and Islamic/dawah publishers who have worked so hard to make these translations, so that the word of God could spread around the world and people will know about the one who created them.
 Here is the [editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "editions") and [references](https://github.com/fawazahmed0/quran-api/blob/1/References.md "references") list, you might have to Google to get more details about them.

 ** References:**
All the open source projects and dawah/Islamic organizations
Please see [editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "editions") and [references](https://github.com/fawazahmed0/quran-api/blob/1/References.md "references")
