function showHC(cup) {
    document.querySelector(".bracket-hc").classList.add("show-bracket");
    document.querySelector(".main-countdown").classList.add("hide-content");
    document.querySelector("#bracket-mainevent-button").classList.add("bracket-nav-active");
    document.querySelector("#bracket-qualifiers-button").classList.remove("bracket-nav-active");

    if (cup == 'hc1') {
        document.querySelector("#hidden-cup-title").innerHTML = "Hidden Cup 1 Main Event";
        document.querySelector("#hidden-cup-round").innerHTML = "Round of 12 - Best of 5";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 5";
        setPlayerNames('hc1');
        setPlayerScores('hc1');
        setMatchDates('hc1');
        setPlayerFlags('hc1');
    }
    else if (cup == 2) {
        document.querySelector("#hidden-cup-title").innerHTML = "Hidden Cup 2 Main Event";
        document.querySelector("#hidden-cup-sf").innerHTML = "Semifinals - Best of 5";
        /* Names */
        document.querySelector("#main-ro16-match1-player1").innerHTML = "Mr_Yo";
        document.querySelector("#main-ro16-match1-player2").innerHTML = "TaToH";
        document.querySelector("#main-ro16-match2-player1").innerHTML = "TheMax";
        document.querySelector("#main-ro16-match2-player2").innerHTML = "JorDan_23";
        document.querySelector("#main-ro16-match3-player1").innerHTML = "dogao";
        document.querySelector("#main-ro16-match3-player2").innerHTML = "Villese";
        document.querySelector("#main-ro16-match4-player1").innerHTML = "ACCM";
        document.querySelector("#main-ro16-match4-player2").innerHTML = "Liereyy";
        document.querySelector("#main-ro16-match5-player1").innerHTML = "MbL";
        document.querySelector("#main-ro16-match5-player2").innerHTML = "Daut";
        document.querySelector("#main-ro16-match6-player1").innerHTML = "BacT";
        document.querySelector("#main-ro16-match6-player2").innerHTML = "Tim";
        document.querySelector("#main-ro16-match7-player1").innerHTML = "TheViper";
        document.querySelector("#main-ro16-match7-player2").innerHTML = "Nicov";
        document.querySelector("#main-ro16-match8-player1").innerHTML = "Vivi";
        document.querySelector("#main-ro16-match8-player2").innerHTML = "Hera";
        document.querySelector("#main-qf-match1-player1").innerHTML = "Mr_Yo";
        document.querySelector("#main-qf-match1-player2").innerHTML = "TheMax";
        document.querySelector("#main-qf-match2-player1").innerHTML = "dogao";
        document.querySelector("#main-qf-match2-player2").innerHTML = "Liereyy";
        document.querySelector("#main-qf-match3-player1").innerHTML = "MbL";
        document.querySelector("#main-qf-match3-player2").innerHTML = "Tim";
        document.querySelector("#main-qf-match4-player1").innerHTML = "TheViper";
        document.querySelector("#main-qf-match4-player2").innerHTML = "Vivi";
        document.querySelector("#main-sf-match1-player1").innerHTML = "TheMax";
        document.querySelector("#main-sf-match1-player2").innerHTML = "Tim";
        document.querySelector("#main-sf-match2-player1").innerHTML = "MbL";
        document.querySelector("#main-sf-match2-player2").innerHTML = "TheViper";
        document.querySelector("#main-gf-match1-player1").innerHTML = "TheMax";
        document.querySelector("#main-gf-match1-player2").innerHTML = "TheViper";
        /* Scores */
        document.querySelector("#main-ro16-match1-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match1-score2").innerHTML = "2";
        document.querySelector("#main-ro16-match2-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match2-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match3-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match3-score2").innerHTML = "1";
        document.querySelector("#main-ro16-match4-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match4-score2").innerHTML = "3";
        document.querySelector("#main-ro16-match5-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match5-score2").innerHTML = "1";
        document.querySelector("#main-ro16-match6-score1").innerHTML = "1";
        document.querySelector("#main-ro16-match6-score2").innerHTML = "3";
        document.querySelector("#main-ro16-match7-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match7-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match8-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match8-score2").innerHTML = "1";
        document.querySelector("#main-qf-match1-score1").innerHTML = "1";
        document.querySelector("#main-qf-match1-score2").innerHTML = "3";
        document.querySelector("#main-qf-match2-score1").innerHTML = "2";
        document.querySelector("#main-qf-match2-score2").innerHTML = "3";
        document.querySelector("#main-qf-match3-score1").innerHTML = "3";
        document.querySelector("#main-qf-match3-score2").innerHTML = "0";
        document.querySelector("#main-qf-match4-score1").innerHTML = "3";
        document.querySelector("#main-qf-match4-score2").innerHTML = "0";
        document.querySelector("#main-sf-match1-score1").innerHTML = "3";
        document.querySelector("#main-sf-match1-score2").innerHTML = "1";
        document.querySelector("#main-sf-match2-score1").innerHTML = "1";
        document.querySelector("#main-sf-match2-score2").innerHTML = "3";
        document.querySelector("#main-gf-match1-score1").innerHTML = "3";
        document.querySelector("#main-gf-match1-score2").innerHTML = "4";
        /* Dates */
        document.querySelector("#main-ro16-match1-time").setAttribute("datetime", "2019-04-11");
        document.querySelector("#main-ro16-match1-time").innerHTML = "11 April 2019";
        document.querySelector("#main-ro16-match2-time").setAttribute("datetime", "2019-04-11");
        document.querySelector("#main-ro16-match2-time").innerHTML = "11 April 2019";
        document.querySelector("#main-ro16-match3-time").setAttribute("datetime", "2019-04-11");
        document.querySelector("#main-ro16-match3-time").innerHTML = "11 April 2019";
        document.querySelector("#main-ro16-match4-time").setAttribute("datetime", "2019-04-12");
        document.querySelector("#main-ro16-match4-time").innerHTML = "12 April 2019";
        document.querySelector("#main-ro16-match5-time").setAttribute("datetime", "2019-04-12");
        document.querySelector("#main-ro16-match5-time").innerHTML = "12 April 2019";
        document.querySelector("#main-ro16-match6-time").setAttribute("datetime", "2019-04-12");
        document.querySelector("#main-ro16-match6-time").innerHTML = "12 April 2019";
        document.querySelector("#main-ro16-match7-time").setAttribute("datetime", "2019-04-12");
        document.querySelector("#main-ro16-match7-time").innerHTML = "12 April 2019";
        document.querySelector("#main-ro16-match8-time").setAttribute("datetime", "2019-04-13");
        document.querySelector("#main-ro16-match8-time").innerHTML = "13 April 2019";
        document.querySelector("#main-qf-match1-time").setAttribute("datetime", "2019-04-13");
        document.querySelector("#main-qf-match1-time").innerHTML = "13 April 2019";
        document.querySelector("#main-qf-match2-time").setAttribute("datetime", "2019-04-13");
        document.querySelector("#main-qf-match2-time").innerHTML = "13 April 2019";
        document.querySelector("#main-qf-match3-time").setAttribute("datetime", "2019-04-13");
        document.querySelector("#main-qf-match3-time").innerHTML = "13 April 2019";
        document.querySelector("#main-qf-match4-time").setAttribute("datetime", "2019-04-14");
        document.querySelector("#main-qf-match4-time").innerHTML = "14 April 2019";
        document.querySelector("#main-sf-match1-time").setAttribute("datetime", "2019-04-14");
        document.querySelector("#main-sf-match1-time").innerHTML = "14 April 2019";
        document.querySelector("#main-sf-match2-time").setAttribute("datetime", "2019-04-14");
        document.querySelector("#main-sf-match2-time").innerHTML = "14 April 2019";
        document.querySelector("#main-gf-match1-time").setAttribute("datetime", "2019-05-01");
        document.querySelector("#main-gf-match1-time").innerHTML = "1 October 2019";
    }
    else if (cup == 3) {
        document.querySelector("#hidden-cup-title").innerHTML = "Hidden Cup 3 Main Event";
        /* Names */
        document.querySelector("#main-ro16-match1-player1").innerHTML = "Vivi";
        document.querySelector("#main-ro16-match1-player2").innerHTML = "Liereyy";
        document.querySelector("#main-ro16-match2-player1").innerHTML = "TaToh";
        document.querySelector("#main-ro16-match2-player2").innerHTML = "Nicov";
        document.querySelector("#main-ro16-match3-player1").innerHTML = "F1Re";
        document.querySelector("#main-ro16-match3-player2").innerHTML = "DauT";
        document.querySelector("#main-ro16-match4-player1").innerHTML = "Hera";
        document.querySelector("#main-ro16-match4-player2").innerHTML = "LaaaaaN";
        document.querySelector("#main-ro16-match5-player1").innerHTML = "TheViper";
        document.querySelector("#main-ro16-match5-player2").innerHTML = "ACCM";
        document.querySelector("#main-ro16-match6-player1").innerHTML = "Mr_Yo";
        document.querySelector("#main-ro16-match6-player2").innerHTML = "Villese";
        document.querySelector("#main-ro16-match7-player1").innerHTML = "MbL";
        document.querySelector("#main-ro16-match7-player2").innerHTML = "BacT";
        document.querySelector("#main-ro16-match8-player1").innerHTML = "dogao";
        document.querySelector("#main-ro16-match8-player2").innerHTML = "TheMax";
        document.querySelector("#main-qf-match1-player1").innerHTML = "Liereyy";
        document.querySelector("#main-qf-match1-player2").innerHTML = "TaToH";
        document.querySelector("#main-qf-match2-player1").innerHTML = "DauT";
        document.querySelector("#main-qf-match2-player2").innerHTML = "Hera";
        document.querySelector("#main-qf-match3-player1").innerHTML = "TheViper";
        document.querySelector("#main-qf-match3-player2").innerHTML = "Mr_Yo";
        document.querySelector("#main-qf-match4-player1").innerHTML = "MbL";
        document.querySelector("#main-qf-match4-player2").innerHTML = "dogao";
        document.querySelector("#main-sf-match1-player1").innerHTML = "TaToH";
        document.querySelector("#main-sf-match1-player2").innerHTML = "Hera";
        document.querySelector("#main-sf-match2-player1").innerHTML = "TheViper";
        document.querySelector("#main-sf-match2-player2").innerHTML = "dogao";
        document.querySelector("#main-gf-match1-player1").innerHTML = "Hera";
        document.querySelector("#main-gf-match1-player2").innerHTML = "TheViper";
        /* Scores */
        document.querySelector("#main-ro16-match1-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match1-score2").innerHTML = "3";
        document.querySelector("#main-ro16-match2-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match2-score2").innerHTML = "1";
        document.querySelector("#main-ro16-match3-score1").innerHTML = "1";
        document.querySelector("#main-ro16-match3-score2").innerHTML = "3";
        document.querySelector("#main-ro16-match4-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match4-score2").innerHTML = "1";
        document.querySelector("#main-ro16-match5-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match5-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match6-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match6-score2").innerHTML = "2";
        document.querySelector("#main-ro16-match7-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match7-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match8-score1").innerHTML = "3";
        document.querySelector("#main-ro16-match8-score2").innerHTML = "0";
        document.querySelector("#main-qf-match1-score1").innerHTML = "2";
        document.querySelector("#main-qf-match1-score2").innerHTML = "3";
        document.querySelector("#main-qf-match2-score1").innerHTML = "2";
        document.querySelector("#main-qf-match2-score2").innerHTML = "3";
        document.querySelector("#main-qf-match3-score1").innerHTML = "3";
        document.querySelector("#main-qf-match3-score2").innerHTML = "1";
        document.querySelector("#main-qf-match4-score1").innerHTML = "2";
        document.querySelector("#main-qf-match4-score2").innerHTML = "3";
        document.querySelector("#main-sf-match1-score1").innerHTML = "1";
        document.querySelector("#main-sf-match1-score2").innerHTML = "4";
        document.querySelector("#main-sf-match2-score1").innerHTML = "4";
        document.querySelector("#main-sf-match2-score2").innerHTML = "1";
        document.querySelector("#main-gf-match1-score1").innerHTML = "0";
        document.querySelector("#main-gf-match1-score2").innerHTML = "4";
        /* Dates */
        document.querySelector("#main-ro16-match1-time").setAttribute("datetime", "2020-03-19");
        document.querySelector("#main-ro16-match1-time").innerHTML = "19 March 2020";
        document.querySelector("#main-ro16-match2-time").setAttribute("datetime", "2020-03-19");
        document.querySelector("#main-ro16-match2-time").innerHTML = "19 March 2020";
        document.querySelector("#main-ro16-match3-time").setAttribute("datetime", "2020-03-19");
        document.querySelector("#main-ro16-match3-time").innerHTML = "19 March 2020";
        document.querySelector("#main-ro16-match4-time").setAttribute("datetime", "2020-03-19");
        document.querySelector("#main-ro16-match4-time").innerHTML = "19 March 2020";
        document.querySelector("#main-ro16-match5-time").setAttribute("datetime", "2020-03-20");
        document.querySelector("#main-ro16-match5-time").innerHTML = "20 March 2020";
        document.querySelector("#main-ro16-match6-time").setAttribute("datetime", "2020-03-20");
        document.querySelector("#main-ro16-match6-time").innerHTML = "20 March 2020";
        document.querySelector("#main-ro16-match7-time").setAttribute("datetime", "2020-03-20");
        document.querySelector("#main-ro16-match7-time").innerHTML = "20 March 2020";
        document.querySelector("#main-ro16-match8-time").setAttribute("datetime", "2020-03-20");
        document.querySelector("#main-ro16-match8-time").innerHTML = "20 March 2020";
        document.querySelector("#main-qf-match1-time").setAttribute("datetime", "2020-03-21");
        document.querySelector("#main-qf-match1-time").innerHTML = "21 March 2020";
        document.querySelector("#main-qf-match2-time").setAttribute("datetime", "2020-03-21");
        document.querySelector("#main-qf-match2-time").innerHTML = "21 March 2020";
        document.querySelector("#main-qf-match3-time").setAttribute("datetime", "2020-03-21");
        document.querySelector("#main-qf-match3-time").innerHTML = "21 March 2020";
        document.querySelector("#main-qf-match4-time").setAttribute("datetime", "2020-03-21");
        document.querySelector("#main-qf-match4-time").innerHTML = "21 March 2020";
        document.querySelector("#main-sf-match1-time").setAttribute("datetime", "2020-03-22");
        document.querySelector("#main-sf-match1-time").innerHTML = "22 March 2020";
        document.querySelector("#main-sf-match2-time").setAttribute("datetime", "2020-03-22");
        document.querySelector("#main-sf-match2-time").innerHTML = "22 March 2020";
        document.querySelector("#main-gf-match1-time").setAttribute("datetime", "2020-03-22");
        document.querySelector("#main-gf-match1-time").innerHTML = "22 March 2020";
    }
    else if (cup == 4) {
        document.querySelector("#hidden-cup-title").innerHTML = "Hidden Cup 4 Main Event";
        /* Names */
        document.querySelector("#main-ro16-match1-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match1-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match2-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match2-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match3-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match3-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match4-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match4-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match5-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match5-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match6-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match6-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match7-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match7-player2").innerHTML = "TBD";
        document.querySelector("#main-ro16-match8-player1").innerHTML = "TBD";
        document.querySelector("#main-ro16-match8-player2").innerHTML = "TBD";
        document.querySelector("#main-qf-match1-player1").innerHTML = "TBD";
        document.querySelector("#main-qf-match1-player2").innerHTML = "TBD";
        document.querySelector("#main-qf-match2-player1").innerHTML = "TBD";
        document.querySelector("#main-qf-match2-player2").innerHTML = "TBD";
        document.querySelector("#main-qf-match3-player1").innerHTML = "TBD";
        document.querySelector("#main-qf-match3-player2").innerHTML = "TBD";
        document.querySelector("#main-qf-match4-player1").innerHTML = "TBD";
        document.querySelector("#main-qf-match4-player2").innerHTML = "TBD";
        document.querySelector("#main-sf-match1-player1").innerHTML = "TBD";
        document.querySelector("#main-sf-match1-player2").innerHTML = "TBD";
        document.querySelector("#main-sf-match2-player1").innerHTML = "TBD";
        document.querySelector("#main-sf-match2-player2").innerHTML = "TBD";
        document.querySelector("#main-gf-match1-player1").innerHTML = "TBD";
        document.querySelector("#main-gf-match1-player2").innerHTML = "TBD";
        /* Scores */
        document.querySelector("#main-ro16-match1-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match1-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match2-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match2-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match3-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match3-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match4-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match4-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match5-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match5-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match6-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match6-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match7-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match7-score2").innerHTML = "0";
        document.querySelector("#main-ro16-match8-score1").innerHTML = "0";
        document.querySelector("#main-ro16-match8-score2").innerHTML = "0";
        document.querySelector("#main-qf-match1-score1").innerHTML = "0";
        document.querySelector("#main-qf-match1-score2").innerHTML = "0";
        document.querySelector("#main-qf-match2-score1").innerHTML = "0";
        document.querySelector("#main-qf-match2-score2").innerHTML = "0";
        document.querySelector("#main-qf-match3-score1").innerHTML = "0";
        document.querySelector("#main-qf-match3-score2").innerHTML = "0";
        document.querySelector("#main-qf-match4-score1").innerHTML = "0";
        document.querySelector("#main-qf-match4-score2").innerHTML = "0";
        document.querySelector("#main-sf-match1-score1").innerHTML = "0";
        document.querySelector("#main-sf-match1-score2").innerHTML = "0";
        document.querySelector("#main-sf-match2-score1").innerHTML = "0";
        document.querySelector("#main-sf-match2-score2").innerHTML = "0";
        document.querySelector("#main-gf-match1-score1").innerHTML = "0";
        document.querySelector("#main-gf-match1-score2").innerHTML = "0";
        /* Dates */
        document.querySelector("#main-ro16-match1-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match1-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match2-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match2-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match3-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match3-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match4-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match4-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match5-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match5-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match6-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match6-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match7-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match7-time").innerHTML = "18 March 2021";
        document.querySelector("#main-ro16-match8-time").setAttribute("datetime", "2021-03-18");
        document.querySelector("#main-ro16-match8-time").innerHTML = "18 March 2021";
        document.querySelector("#main-qf-match1-time").setAttribute("datetime", "2021-03-19");
        document.querySelector("#main-qf-match1-time").innerHTML = "19 March 2021";
        document.querySelector("#main-qf-match2-time").setAttribute("datetime", "2021-03-19");
        document.querySelector("#main-qf-match2-time").innerHTML = "19 March 2021";
        document.querySelector("#main-qf-match3-time").setAttribute("datetime", "2021-03-19");
        document.querySelector("#main-qf-match3-time").innerHTML = "19 March 2021";
        document.querySelector("#main-qf-match4-time").setAttribute("datetime", "2021-03-19");
        document.querySelector("#main-qf-match4-time").innerHTML = "19 March 2021";
        document.querySelector("#main-sf-match1-time").setAttribute("datetime", "2021-03-20");
        document.querySelector("#main-sf-match1-time").innerHTML = "20 March 2021";
        document.querySelector("#main-sf-match2-time").setAttribute("datetime", "2021-03-20");
        document.querySelector("#main-sf-match2-time").innerHTML = "20 March 2021";
        document.querySelector("#main-gf-match1-time").setAttribute("datetime", "2021-03-21");
        document.querySelector("#main-gf-match1-time").innerHTML = "21 March 2021";
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
    }
    else if (display == "qualifiers")
    {
        document.querySelector("#bracket-mainevent-button").classList.remove("bracket-nav-active");
        document.querySelector("#bracket-qualifiers-button").classList.add("bracket-nav-active");
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

    const a = document.getElementsByClassName("bracket-flag");
    const flag = Array.from(a);
    for (let i = 0; i < flags.length; i++) {
        flag[i].classList.remove("flag-icon-qm");
        flag[i].classList.add(flags[i]);
    }
}