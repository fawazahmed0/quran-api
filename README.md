<h1 align="center">Quran API</h1>

<p align="center">
  <img width="460" height="300" src="https://github.com/fawazahmed0/quran-api/raw/1/quran.jpg">
</p>

[![](https://data.jsdelivr.com/v1/package/gh/fawazahmed0/quran-api/badge)](https://www.jsdelivr.com/package/gh/fawazahmed0/quran-api)
[![](https://data.jsdelivr.com/v1/package/gh/fawazahmed0/quran-api/badge/rank)](https://www.jsdelivr.com/package/gh/fawazahmed0/quran-api)

-------------

**Note:** There is also API available for Hadiths at [here](https://github.com/fawazahmed0/hadith-api#readme)

-------------

**In the name of God, who has guided me to do this work**


This repo contains collection of Quran Translations and to allow development of websites, apps etc, it is structured in REST Architectural Style.
The purpose of this repo is to spread the word of God everywhere in the world

**Features:**
- Free & Blazing Fast response
- No Rate limits
- 90+ [languages](#languages-available) & 440+ Translations including Latin/roman translations


**URL Structure:**

`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@{apiVersion}/{endpoint}`

**Formats:**

The Endpoints Supports HTTP GET Method and returns the data in  two formats:

`/{endpoint}.json`

`/{endpoint}.min.json`

The above formats also work for fallback i.e if `.min.json` link fails, you can use `.json` link and vice versa

**Warning:** You should include fallback mechanism in your code, [to avoid issues](https://github.com/fawazahmed0/quran-api/issues/27)

**Endpoints:**

- `/editions`<br>
> Lists all the available editions in prettified json format:<br>
 [https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json") <br>

> Get a minified version of it:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json")

- `/editions/{editionName}`<br>
> Get the whole quran/quran translation:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json") <br>

> Get a latin(roman) script version of it by adding -la:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la.json")<br>

> Get a latin(roman) script with diacritical marks by adding -lad:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad.json")

- `/editions/{editionName}/{ChapterNo}` <br>
> Get the whole chapter 5:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.json")

> Get the whole chapter 5 in minified format:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.min.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.min.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/5.min.json")

- `/editions/{editionName}/{ChapterNo}/{VerseNo}` <br>
> Get Chapter 5 verse 10:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/5/10.json")

- `/editions/{editionName}/juzs/{juzNo}` <br>
> Get juz 3:<br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-lad/juzs/3.json")

Similarly:
- `/editions/{editionName}/rukus/{rukuNo}`
- `/editions/{editionName}/pages/{pageNo}`
- `/editions/{editionName}/manzils/{manzilNo}`
- `/editions/{editionName}/maqras/{maqraNo}`<br>

- `/info` <br>
> Get all the details about quran such as number of juzs,sajdas, rukus etc in quran <br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")<br>

- `/fonts` <br>
> Lists arabic fonts available: <br>
[https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json")<br>

### Displaying Text:
- Use [Arabic Fonts](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/fonts.json) to display the Quran text. In case the font shows few [tofu characters](https://english.stackexchange.com/questions/62524/what-do-you-call-the-phenomenon-where-a-rectangle-is-shown-because-a-font-lack), then use fonts with [-full suffix](https://github.com/fawazahmed0/quran-api/blob/1468ba338f744c8eec4208fe36808206febe4add/fonts.json#L195) which has complete Arabic Unicode Support.<br>
Refer [font-full](https://github.com/fawazahmed0/quran-api/blob/1/fontfull.md) to know more.

- Use [Google Noto Fonts](https://www.google.com/get/noto/) to display the translation. By default OS doesn't have font installed for every language. So you will have to use fonts for few languages such as [Burmese](https://www.google.com/get/noto/#serif-mymr) etc, to show properly. Otherwise you will end up with [tofu characters](https://english.stackexchange.com/questions/62524/what-do-you-call-the-phenomenon-where-a-rectangle-is-shown-because-a-font-lack).

### Languages Available:
By the mercy of God, there are [98 different language](https://github.com/fawazahmed0/quran-api/blob/1/Translations.md) translations available and a collection of  [440+ translations](https://github.com/fawazahmed0/quran-api/blob/1/editions.json).
Few of the translations were [OCRed](https://github.com/fawazahmed0/quran-api/blob/1/Translations.md#ocred) and may contain mistakes. Please do [report the mistakes](https://github.com/fawazahmed0/quran-api/issues/new).

- [List of Languages Available](https://github.com/fawazahmed0/quran-api/blob/1/Translations.md)
### Contribution:
Without your contribution, this repo won't survive, whenever you find any issue, don't just fix it at your end, please let me [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know"), so that I can also fix it and people can benefit from it, incase of any question, issue or problems etc<br> you can let me [Know](https://github.com/fawazahmed0/quran-api/issues/new "Know")

- Please help by adding new translations to this repo, you can share me the translation [here](https://github.com/fawazahmed0/quran-api/issues/new "here")

or
- Read [Contribute](https://github.com/fawazahmed0/quran-api/blob/1/CONTRIBUTING.md "Contribute") to add/update the translation directly to this repo


### Download: [Here](https://github.com/fawazahmed0/quran-api/blob/1/download.md)

### Authenticity:
I have taken care to not include any controversial authors, for example: 'Rashad Khalifa' , because there are chances that the translation may contain opinions of the author and not the meaning of the verse.
The Ahmaddiya community has done great work in translating the quran to many different languages of the world. May God reward them with guidance.
But I cannot take those translations also because the verses such as those talking about Jesus ([4:157](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad/4/157.json "4:157")) usually have opinions of the author of what actually happened to Jesus etc.

I might have mistakenly added a few of them. In case you find any translation whose authenticity could be questioned, please let me know at [here](https://github.com/fawazahmed0/quran-api/issues/new "here") .After verifying the claims, I remove the translation

### Any Issues: [Raise here](https://github.com/fawazahmed0/quran-api/issues/new "Raise here")

### Demo:
Projects using Quran API:
- [Quran](https://fawazahmed0.github.io/quran)
- [AskGod](https://fawazahmed0.github.io/askgod)
- [Quran Recitation Videos](https://github.com/fawazahmed0/quran-videos)
- [Quran Verse Detection](https://github.com/fawazahmed0/quran-verse-detection)
- [Quran Hadith Search Engine](https://fawazahmed0.github.io/quran-hadith-search/)

### Other Similar Projects:
- [Hadith-api](https://github.com/fawazahmed0/hadith-api)


### Share:
Please [Share](https://fawazahmed0.github.io/donate.html?mymsg=Thanks%20for%20using%20this%20API%2C%20I%20am%20Fawaz%20Ahmed%20(fawazahmed0)%20developer%20of%20this%20repo.%20I%20made%20this%20API%2C%20for%20three%20main%20reasons%3A%3Cbr%3E%3Cbr%3E%0A1.%20To%20spread%20the%20word%20of%20God%20around%20the%20world.%3Cbr%3E%3Cbr%3E%0A2.%20So%20the%20developers%20don't%20have%20to%20start%20from%20scratch.%3Cbr%3E%3Cbr%3E%0A3.%20To%20make%20a%20free%20unlimited%20service%2C%20which%20doesn't%20depend%20on%20any%20donation%20or%20any%20single%20person%20for%20it's%20future%20existence.%3Cbr%3EMy%20death%20won't%20have%20any%20effect%20on%20it%20by%20God's%20grace%2C%20as%20this%20API%20depends%20on%20the%20Free%20Open%20Source%20services%2C%20which%20todays%20internet%20infrastructure%20depends%20upon.%0A%3Cbr%3E%3Cbr%3E%3Cbr%3E%0AIf%20you%20like%20to%20be%20part%20of%20this%20ongoing%20charity%2C%20then%20please%20do%20share%20this%20API%20with%20your%20fellow%20mates&sharelink=https%3A%2F%2Fgithub.com%2Ffawazahmed0%2Fquran-api&smallsharetext=Free%20Quran%20API%20Service&largesharetext=Quran%20API%20Service%20with%2090%2B%20different%20languages%20and%20400%2B%20translations%20for%20Free&sharebtnmsg=Share%20the%20Quran%20API%20Service&nodonatebtn=yes) this repo with your fellow mates and Star this repo by clicking on [:star: button](#) above [:arrow_upper_right:](#)

### Donation:
Even though I worked very hard on this project, I will not ask donation for myself. I will take the reward from God in this world and the next, may God accept my work.

But what I ask you is to donate the authors and Islamic/dawah publishers who have worked so hard to make these translations, so that the word of God could spread around the world and people will know about the one who created them.
 Here is the [Editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "Editions") and [References](https://github.com/fawazahmed0/quran-api/blob/1/References.md "References") list, you might have to Google to get more details about them.

### References:
All the open source projects and dawah/Islamic organizations

Please see [Editions](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json "Editions") and [References](https://github.com/fawazahmed0/quran-api/blob/1/References.md "References")

<br>
<br>
<br>

[:pencil2:*Improve this page*](https://github.com/fawazahmed0/quran-api/edit/1/README.md)
