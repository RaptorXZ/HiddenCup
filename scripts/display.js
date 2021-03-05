function showHC(cup) {
    document.querySelector(".bracket-hc").classList.add("show-hc-bracket");
    document.querySelector("#main-event-bracket").classList.add("show-bracket");
    document.querySelector(".main-countdown").classList.add("hide-content");
    document.querySelector("#bracket-mainevent-button").classList.add("bracket-nav-active");
    document.querySelector("#bracket-qualifiers-button").classList.remove("bracket-nav-active");
    document.querySelector("#hidden-cup-main-title").classList.add("show-bracket");
    document.querySelector("#qualifier-bracket").classList.remove("show-bracket");
    document.querySelector("#hidden-cup-qualifier-title").classList.remove("show-bracket");
    document.querySelector(".main-copyright").classList.add("hide-content");

    if (cup == 'hc1') {
        document.querySelector("#hidden-cup-main-title").innerHTML = "Hidden Cup 1 Main Event";
        document.querySelector("#hidden-cup-round").innerHTML = "Round of 12 - Best of 5";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 5";
        document.querySelector("#bracket-qualifiers-button").classList.add("hide-content");
        setPlayerNames('hc1');
        setPlayerScores('hc1');
        setMatchDates('hc1');
        setPlayerFlags('hc1');
    }
    else if (cup == 'hc2') {
        document.querySelector("#hidden-cup-main-title").innerHTML = "Hidden Cup 2 Main Event";
        document.querySelector("#hidden-cup-round").innerHTML = "Round of 16 - Best of 5";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 5";
        document.querySelector("#hidden-cup-qualifier-title").innerHTML = "Hidden Cup 2 Qualifiers";
        document.querySelector("#qualifier-round1-title").innerHTML = "Round of 16 - Best of 5";
        document.querySelector("#qualifier-round2-title").innerHTML = "Round of 8 - Best of 5";
        document.querySelector("#qualifier-round3-title").innerHTML = "Final Qualifiers - Best of 7";
        document.querySelector("#qualifier-round3").classList.remove("zero-opacity");
        document.querySelector("#bracket-qualifiers-button").classList.remove("hide-content");
        document.querySelector("#qualifier-round2").classList.remove("hide-after");
        setPlayerNames('hc2');
        setPlayerScores('hc2');
        setMatchDates('hc2');
        setPlayerFlags('hc2');
    }
    else if (cup == 'hc3') {
        document.querySelector("#hidden-cup-main-title").innerHTML = "Hidden Cup 3 Main Event";
        document.querySelector("#hidden-cup-round").innerHTML = "Round of 16 - Best of 5";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 7";
        document.querySelector("#hidden-cup-qualifier-title").innerHTML = "Hidden Cup 3 Qualifiers";
        document.querySelector("#qualifier-round1-title").innerHTML = "Round of 32 - Best of 5";
        document.querySelector("#qualifier-round2-title").innerHTML = "Final Qualifiers - Round of 16 - Best of 7";
        document.querySelector("#qualifier-round3").classList.add("zero-opacity");
        document.querySelector("#bracket-qualifiers-button").classList.remove("hide-content");
        document.querySelector("#qualifier-round2").classList.add("hide-after");
        setPlayerNames('hc3');
        setPlayerScores('hc3');
        setMatchDates('hc3');
        setPlayerFlags('hc3');
    }
    else if (cup == 'hc4') {
        document.querySelector("#hidden-cup-main-title").innerHTML = "Hidden Cup 4 Main Event";
        document.querySelector("#hidden-cup-round").innerHTML = "Round of 16 - Best of 5";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 7";
        document.querySelector("#hidden-cup-qualifier-title").innerHTML = "Hidden Cup 4 Qualifiers";
        document.querySelector("#qualifier-round1-title").innerHTML = "Round of 64 - Best of 5";
        document.querySelector("#qualifier-round2-title").innerHTML = "Round of 32 - Best of 5";
        document.querySelector("#qualifier-round3-title").innerHTML = "Final Qualifiers - Round of 16 - Best of 7";
        document.querySelector("#qualifier-round3").classList.remove("zero-opacity");
        document.querySelector("#bracket-qualifiers-button").classList.remove("hide-content");
        document.querySelector("#qualifier-round2").classList.remove("hide-after");
        setPlayerNames('hc4');
        setPlayerScores('hc4');
        setMatchDates('hc4');
        setPlayerFlags('hc4');
    }
}

function showAbout() {
    document.querySelector(".about-hc").classList.toggle("hide-content");
}

function toggleBracket(display) {
    if (display == "mainevent")
    {
        document.querySelector("#bracket-mainevent-button").classList.add("bracket-nav-active");
        document.querySelector("#bracket-qualifiers-button").classList.remove("bracket-nav-active");
        document.querySelector("#main-event-bracket").classList.add("show-bracket");
        document.querySelector("#qualifier-bracket").classList.remove("show-bracket");
        document.querySelector("#hidden-cup-main-title").classList.add("show-bracket");
        document.querySelector("#hidden-cup-qualifier-title").classList.remove("show-bracket");
    }
    else if (display == "qualifiers")
    {
        document.querySelector("#bracket-mainevent-button").classList.remove("bracket-nav-active");
        document.querySelector("#bracket-qualifiers-button").classList.add("bracket-nav-active");
        document.querySelector("#main-event-bracket").classList.remove("show-bracket");
        document.querySelector("#qualifier-bracket").classList.add("show-bracket");
        document.querySelector("#hidden-cup-main-title").classList.remove("show-bracket");
        document.querySelector("#hidden-cup-qualifier-title").classList.add("show-bracket");
        // createQualifierBrackets();
    }
}

function toggleResults() {
    let matches = document.getElementsByClassName("spoiler-class");
    Array.from(matches).forEach(execToggleResults);
}

function execToggleResults(item, index) {
    item.classList.toggle("spoiler-filter");
}

function setPlayerNames(cup) {
    let players;
    if (cup == 'hc1') {
        players = ['','Liereyy','DauT','Miguel','','TheViper','Nicov','TaToH',
        '','MbL','Yo','RiuT','','Slam','F1Re','Vivi','Liereyy','Miguel','TheViper',
        'Nicov','MbL','RiuT','Slam','F1Re','Miguel','TheViper','MbL','Slam',
        'TheViper','MbL'];
    }
    else if (cup == 'hc2') {
        players = ['Mr_Yo','TaToH','TheMax','JorDan_23','dogao','Villese','ACCM',
        'Liereyy','MbL','DauT','BacT','Tim','TheViper','Nicov','Vivi','Hera',
        'Mr_Yo','TheMax','dogao','Liereyy','MbL','Tim','TheViper','Vivi','TheMax',
        'Liereyy','MbL','TheViper','TheMax','TheViper']
    }
    else if (cup == 'hc3') {
        players = ['Vivi','Liereyy','TaToh','Nicov','F1Re','DauT','Hera','LaaaaaN',
        'TheViper','ACCM','Mr_Yo','Villese','MbL','BacT','dogao','TheMax','Liereyy',
        'TaToH','DauT','Hera','TheViper','Mr_Yo','MbL','dogao','TaToH','Hera',
        'TheViper','dogao','Hera','TheViper'];
    }
    else if (cup == 'hc4') {
        players = ['TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD',
        'TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD',
        'TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD'];
    }

    const a = document.getElementsByClassName("bracket-name");
    const names = Array.from(a);
    for (let i = 0; i < players.length; i++) {
        names[i].innerHTML = players[i];
    }
}

function setPlayerScores(cup) {
    let scores;
    if (cup == 'hc1') {
        scores = ['N/A','N/A','1','3','N/A','N/A','3','1','N/A','N/A','2',
        '3','N/A','N/A','3','1','2','3','3','0','3','2','3','1','0','3','3','1',
        '4','2']; 
    }
    else if (cup == 'hc2') {
        scores = ['3','2','3','0','3','1','0','3','3','1','1','3','3','0','3',
        '1','1','3','2','3','3','0','3','0','3','1','1','3','3','4'];
    }
    else if (cup == 'hc3') {
        scores = ['0','3','3','1','1','3','3','1','3','0','3','2','3','0','3',
        '0','2','3','2','3','3','1','2','3','1','4','4','1','0','4'];
    }
    else if (cup == 'hc4') {
        scores = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
    }

    const a = document.getElementsByClassName("bracket-number");
    const score = Array.from(a);
    for (let i = 0; i < scores.length; i++) {
        score[i].innerHTML = scores[i];
    }
}

function setMatchDates(cup) {
    let dates;
    let datetimes;
    if (cup == 'hc1') {
        dates = ['N/A','28 September 2018','N/A','28 September 2018','N/A',
        '28 September 2018','N/A','29 September 2018','29 September 2018',
        '29 September 2018','29 September 2018','30 September 2018','30 September 2018',
        '30 September 2018','1 October 2018'];

        datetimes = ['N/A','2018-09-28','N/A','2018-09-28','N/A','2018-09-28',
        'N/A','2018-09-29','2018-09-29','2018-09-29','2018-09-29','2018-09-30',
        '2018-09-30','2018-09-30','2018-10-01'];
    }
    if (cup == 'hc2') {
        dates = ['11 April 2019','11 April 2019','11 April 2019','12 April 2019',
        '12 April 2019','12 April 2019','12 April 2019','13 April 2019',
        '13 April 2019','13 April 2019','13 April 2019','14 April 2019',
        '14 April 2019','14 April 2019','14 April 2019'];

        datetimes = ['2019-04-11','2019-04-11','2019-04-11','2019-04-12',
        '2019-04-12','2019-04-12','2019-04-12','2019-04-13','2019-04-13',
        '2019-04-13','2019-04-13','2019-04-14','2019-04-14','2019-04-14',
        '2019-04-14'];
    }
    if (cup == 'hc3') {
        dates = ['19 March 2020','19 March 2020','19 March 2020','19 March 2020',
        '20 March 2020','20 March 2020','20 March 2020','20 March 2020',
        '21 March 2020','21 March 2020','21 March 2020','21 March 2020',
        '22 March 2020','22 March 2020','22 March 2020'];

        datetimes = ['2020-03-19','2020-03-19','2020-03-19','2020-03-19',
        '2020-03-20','2020-03-20','2020-03-20','2020-03-20','2020-03-21',
        '2020-03-21','2020-03-21','2020-03-21','2020-03-22','2020-03-22',
        '2020-03-22'];
    }
    if (cup == 'hc4') {
        dates = ['18 March 2021','18 March 2021','18 March 2021','18 March 2021',
        '19 March 2021','19 March 2021','19 March 2021','19 March 2021',
        '20 March 2021','20 March 2021','20 March 2021','20 March 2021',
        '21 March 2021','21 March 2021','21 March 2021'];

        datetimes = ['2021-03-18','2021-03-18','2021-03-18','2021-03-18',
        '2021-03-19','2021-03-19','2021-03-19','2021-03-19','2021-03-20',
        '2021-03-20','2021-03-20','2021-03-20','2021-03-21','2021-03-21',
        '2021-03-21'];
    }

    const a = document.getElementsByClassName("bracket-date");
    const date = Array.from(a);
    for (let i = 0; i < dates.length; i++) {
        date[i].innerHTML = dates[i];
        date[i].setAttribute("datetime", datetimes[i]);
    }
}

function setPlayerFlags(cup) {
    let flags;
    if (cup == 'hc1') {
        flags = ['hide-content','flag-icon-at','flag-icon-rs','flag-icon-br',
        'hide-content','flag-icon-no','flag-icon-ar','flag-icon-es',
        'hide-content','flag-icon-no','flag-icon-cn','flag-icon-br',
        'hide-content','flag-icon-ca','flag-icon-br','flag-icon-cn',
        'flag-icon-at','flag-icon-br','flag-icon-no','flag-icon-ar',
        'flag-icon-no','flag-icon-br','flag-icon-ca','flag-icon-br',
        'flag-icon-br','flag-icon-no','flag-icon-no','flag-icon-ca',
        'flag-icon-no','flag-icon-no'];
    }
    else if (cup == 'hc2') {
        flags = ['flag-icon-cn','flag-icon-es','flag-icon-fi','flag-icon-de',
        'flag-icon-br','flag-icon-fi','flag-icon-vn','flag-icon-at',
        'flag-icon-no','flag-icon-rs','flag-icon-vn','flag-icon-cn',
        'flag-icon-no','flag-icon-ar','flag-icon-cn','flag-icon-ca',
        'flag-icon-cn','flag-icon-fi','flag-icon-br','flag-icon-at',
        'flag-icon-no','flag-icon-cn','flag-icon-no','flag-icon-cn',
        'flag-icon-fi','flag-icon-at','flag-icon-no','flag-icon-no',
        'flag-icon-fi','flag-icon-no'];
    }
    else if (cup == 'hc3') {
        flags = ['flag-icon-cn','flag-icon-at','flag-icon-es','flag-icon-ar',
        'flag-icon-br','flag-icon-rs','flag-icon-ca','flag-icon-es',
        'flag-icon-no','flag-icon-vn','flag-icon-cn','flag-icon-fi',
        'flag-icon-no','flag-icon-vn','flag-icon-br','flag-icon-fi',
        'flag-icon-at','flag-icon-es','flag-icon-rs','flag-icon-ca',
        'flag-icon-no','flag-icon-cn','flag-icon-no','flag-icon-br',
        'flag-icon-es','flag-icon-ca','flag-icon-no','flag-icon-br',
        'flag-icon-ca','flag-icon-no'];
    }
    else if (cup == 'hc4') {
        flags = ['flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm','flag-icon-qm',
        'flag-icon-qm'];
    }

    const a = document.getElementsByClassName("bracket-flag");
    const flag = Array.from(a);
    for (let i = 0; i < flags.length; i++) {
        flag[i].classList.remove("flag-icon-ar");
        flag[i].classList.remove("flag-icon-at");
        flag[i].classList.remove("flag-icon-be");
        flag[i].classList.remove("flag-icon-br");
        flag[i].classList.remove("flag-icon-ca");
        flag[i].classList.remove("flag-icon-cl");
        flag[i].classList.remove("flag-icon-cn");
        flag[i].classList.remove("flag-icon-cz");
        flag[i].classList.remove("flag-icon-de");
        flag[i].classList.remove("flag-icon-ee");
        flag[i].classList.remove("flag-icon-es");
        flag[i].classList.remove("flag-icon-fi");
        flag[i].classList.remove("flag-icon-fr");
        flag[i].classList.remove("flag-icon-gb");
        flag[i].classList.remove("flag-icon-hu");
        flag[i].classList.remove("flag-icon-ie");
        flag[i].classList.remove("flag-icon-il");
        flag[i].classList.remove("flag-icon-in");
        flag[i].classList.remove("flag-icon-it");
        flag[i].classList.remove("flag-icon-jp");
        flag[i].classList.remove("flag-icon-nl");
        flag[i].classList.remove("flag-icon-no");
        flag[i].classList.remove("flag-icon-pe");
        flag[i].classList.remove("flag-icon-pl");
        flag[i].classList.remove("flag-icon-rs");
        flag[i].classList.remove("flag-icon-ru");
        flag[i].classList.remove("flag-icon-se");
        flag[i].classList.remove("flag-icon-tr");
        flag[i].classList.remove("flag-icon-tw");
        flag[i].classList.remove("flag-icon-ua");
        flag[i].classList.remove("flag-icon-us");
        flag[i].classList.remove("flag-icon-vn");
        flag[i].classList.remove("flag-icon-qm");
        flag[i].classList.remove("hide-content");
        flag[i].classList.add(flags[i]);
    }
}

function showCopyright() {
    document.querySelector(".main-copyright").classList.remove("hide-content");
    document.querySelector(".main-countdown").classList.add("hide-content");
    /* Hide Brackets */
    document.querySelector(".bracket-hc").classList.remove("show-hc-bracket");
    document.querySelector("#main-event-bracket").classList.remove("show-bracket");
    document.querySelector("#hidden-cup-main-title").classList.remove("show-bracket");
    document.querySelector("#qualifier-bracket").classList.remove("show-bracket");
    document.querySelector("#hidden-cup-qualifier-title").classList.remove("show-bracket");
}

// function createQualifierBrackets() {
//     /* Create list item with class bracket-item */
//     const bracket = document.createElement("li");
//     bracket.classList.add("bracket-item");
//     document.querySelector("#qualifier-round2-list").appendChild(bracket);
//     /* Create div with class bracket-match */
//     const match = document.createElement("div");
//     match.classList.add("bracket-match");
//     bracket.appendChild(match);
//     /* Create table with class bracket-table */
//     const table = document.createElement("table");
//     table.classList.add("bracket-table");
//     match.appendChild(table);
//     /* Create caption with class bracket-caption */
//     const caption = document.createElement("caption");
//     caption.classList.add("bracket-caption");
//     table.appendChild(caption);
//     /* Create time with class bracket-date */
//     const time = document.createElement("time");
//     time.classList.add("bracket-date");
//     time.id = "qualifier-ro32-match2-time";
//     time.innerHTML = "18 March 2021";
//     time.setAttribute("datetime", "2021-03-18");
//     caption.appendChild(time);
    

//     const bracket2 = document.createElement("li");
//     bracket2.classList.add("bracket-item");
//     document.querySelector("#qualifier-round1-list").appendChild(bracket2);
//     const match2 = document.createElement("div");
//     match2.classList.add("bracket-match");
//     bracket2.appendChild(match2);

//     const bracket3 = document.createElement("li");
//     bracket3.classList.add("bracket-item");
//     document.querySelector("#qualifier-round1-list").appendChild(bracket3);
//     const match3 = document.createElement("div");
//     match3.classList.add("bracket-match");
//     bracket3.appendChild(match3);
// }