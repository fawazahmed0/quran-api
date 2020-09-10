### Quran API                                                                                       
**In the name of God, who have guided me to do this work and I seek refuge in him from the evil of his creation**


This repo contains collection of Quran Translations and to allow development of websites, apps etc, it is structured in REST Architectural Style.
The purpose of this repo is to spread the word of God everywhere in the world

**Features:**
- Free & Blazing Fast response
- No Rate limits
- Latin/roman translation for many languages


**URL Structure:**

`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@{apiVersion}/{endpoint}`

**Formats:**

The Endpoints Supports HTTP GET Method and returns the data in  two formats:

`/{endpoint}.json`

`/{endpoint}.min.json`

**Endpoints:**

- `/editions`<br>
Lists all the available editions in prettified json format:<br>
 [https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json") <br>
Get a minified version of it:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json")

- `/editions/{editionName}`<br>
Get the whole quran/quran translation:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json") <br>
Get a latin(roman) script version of it by adding -la:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json")<br>
Get a latin(roman) script with diacritical marks by adding -lad:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json")

- `/editions/{editionName}/{ChapterNo}` <br>
Get the whole chapter 5:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json")


- `/editions/{editionName}/{ChapterNo}/{VerseNo}` <br>
Get Chapter 5 verse 10:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json")

- `/editions/{editionName}/juzs/{juzNo}` <br>
Get juz 3:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json")

Similarly:
- `/editions/{editionName}/rukus/{rukuNo}`
- `/editions/{editionName}/pages/{pageNo}`
- `/editions/{editionName}/manzils/{manzilNo}`
- `/editions/{editionName}/maqras/{maqraNo}`<br>

- `/info` <br>
Get all the details about quran such as number of juzs,sajdas, rukus etc in quran <br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")<br>

- `/fonts` <br>
List fonts available: <br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json")<br>

### Contribution:
Without your contribution, this repo won't survive, incase of any issues or problems, questions etc,<br> you can let me  [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know")
- Please help by adding new translations to this repo, you can share me the translation [here](https://github.com/fawazahmed0/quran-api/issues/new "here")

or
- Read [Contribute](https://github.com/fawazahmed0/quran-api/blob/1/CONTRIBUTING.md "Contribute") to add/update the translation directly to this repo


### Help Needed:

[Make Colored Tajweed Fonts](https://github.com/fawazahmed0/quran-api/issues/12 "Make Colored Tajweed Fonts")


### Download:[Here](https://github.com/fawazahmed0/quran-api/blob/1/download.md)

### Authenticity:
I have taken great care to not include any controversial authors, for example: 'Rashad Khalifa' , because there are chances that the translation may contain opinions of the author and not the meaning of the verse.
The Ahmaddiya community has done great work in translating the quran to many different languages of the world. May God reward them with guidance.
But I cannot take those translations also because the verses such as those talking about Jesus ([4:157](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad/4/157.json "4:157")) usually have opinions of the author of what actually happened to Jesus etc.

In case you find any translation whose authenticity could be questioned, please let me know at [here](https://github.com/fawazahmed0/quran-api/issues/new "here") .Only after verifying the claims, will I remove the translation

### Any Issues:

 [Raise here](https://github.com/fawazahmed0/quran-api/issues/new "Raise here")

### Donation:
Even though I worked very hard on this project, I will not ask donation for myself. I will take the reward from God in this world and the next

But what I ask you is to donate the authors and Islamic/dawah publishers who have worked so hard to make these translations, so that the word of God could spread around the world and people will know about the one who created them.
 Here is the [Editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "Editions") and [References](https://github.com/fawazahmed0/quran-api/blob/1/References.md "References") list, you might have to Google to get more details about them.

### References:
All the open source projects and dawah/Islamic organizations

Please see [Editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "Editions") and [References](https://github.com/fawazahmed0/quran-api/blob/1/References.md "References")

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/README.md)
