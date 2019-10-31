

function obj(event,rules,rounds, date, time, venue, entry, prize1,prize2) {
        this.event = event;
        this.rules = rules;
        this.round=rounds;
        this.date = date;
        this.time = time;
        this.venue = venue;
        this.Entry= entry;
        this.prize1 = prize1;
        this.prize2=prize2;
    }

var events=[{
    "event": "BEG BORROW STEAL",
    "rules": "A team will comprise of 2 players.All the teams will be provided with a list of items.Team members will have to complete the task within a time limit of 1 hour.Team can either beg, borrow or steal the items enlisted.Teams will be judged on first come first serve basis and also on the number of items and the relevance of the items collected.Organisers decision is final.",
    "rounds": [],
    "date": "9th",
    "time": "10 AM",
    "venue": "314",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "BLIND CODING",
    "rules": "This is a Team Event. Only ‘TWO’ candidates are allowed per team. Questions will be based on C LANGUAGE only as the compiler provided will be GCC C compiler on Ubuntu.Event will consist of two rounds.",
    "rounds": [
        "In the first round a simple code with syntax errors will be given. Participants have to correct the code and type the code with MONITOR SWITCHED OFF. Ten minutes will be given for correcting the errors and typing the code. The team which will be able to solve it in the given time will be qualified for the next round. Based on the results of first round the teams will be selected for second round.",
        "In the second round which is the final round only a problem statement will be given. The Team needs to write a code for the given problem statement by using C Language and type the code in GCC C compiler on Ubuntu with MONITORS SWITCHED OFF. Twenty minutes will be given to each team for completing this task. Winners will be announced based on the results of compilation and execution."
    ],
    "date": "9th",
    "time": "9:30AM",
    "venue": "DAA Lab",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "LOGIX",
    "rules": "This is an individual event consisting of two rounds. Participants will be asked questions based on Aptitude and Logical Reasoning. They need to answer them correctly and quickly within the given time.",
    "rounds": ["The participants will be given a set of questions which should be answered in a time span of 20 minutes.5 Participants with most number of correct answers will be selected for second round.",
        "The selected participants will begiven questions and they should be answered in a time span of 10mins.The participant with highest number of points will be declared as winner."
    ],
    "date": "9th",
    "time": "11 AM",
    "venue": "CN LAB",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "PAIR PROGRAMMING",
    "rules": "Team of two. There will be two rounds.",
    "rounds": [
        "The first round is for 30 minutes. The contestants will get their problem statement. Each team gets two problem statements.The solution to the problem can be done in any of the programming language.There should be no comments indicating the problem statement. If found, both of the contestants will be disqualified.After 15  minutes, the contestants will shift places with each other.The team that has both the solutions to the problem statements qualify to the next round.There will be no extra time given to solve.A piece of paper will be given to work out the problem. This sheet must not be exchanged with the other person. If done, it accounts to ground for disqualification.",
        "There will be only one problem statement for each team.The contestants of each team must decide who will go first.Only the first contestant in the team gets to know the problem statement.After 10 minutes, the second contestant is given the chance to figure out the problem and continue the solution.The second contestant has 10 minutes to do so.In the last 2 minutes both the contestants will be given a chance to work on the solution together."
    ],
    "date": "8th",
    "time": "12PM",
    "venue": "202",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "CODEATHON",
    "rules": "This is a solo event. Any Programming Language can be used. This Event consists of two rounds.",
    "rounds": [
        "Easy and Intermediate type of problem statements would be given, that should be solved within given time limit. 50% of total participants on the leaderboard after Round 1 would be entering Round 2 for the Final Phase of CodeAthon. In case of tie breakers , total execution time will be considered and promotion to Round 2 will be declared.",
        "In the Final Round of CodeAthon, Intermediate and Hard type of problem statements would be given, that should be solved within given time limit. Top 2 on the leaderboard would be declared as winners for CodeAthon. In case of tie breakers, same total execution time will be considered and winners would be declared."
    ],
    "date": "8th",
    "time": "2PM",
    "venue": "Networking Lab",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "UI DESIGNING",
    "rules": "This is a solo event. There will be one round. The participants will be given the requirements of the website on spot and they need to design the User Interface for it on Adobe XD. Participants are requested to get their own laptops with Adobe XD installed. The link for installation: https://www.adobe.com/go/dnld-xd .",
    "rounds": [],
    "date": "8th",
    "time": "12PM",
    "venue": "302",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "TECHNICAL QUIZ",
    "rules": "Each team must have 2 participants.Using any type of mobile devices or any kind of malpractice will lead to immediate disqualification.There will be 2 rounds. The team will be required to answer as many questions as possible within a given time frame. Wrong questions will merit negative marks. Unparliamentary language will not be entertained, resulting in immediate disqualification. Judges decision is final.",
    "rounds": [
        "Round one will be visual round, where the participants will be required to identify the given images and name them accordingly.",
        "Round two will be a rapid fire round consisting of general tech related questions."
    ],
    "date": "8th",
    "time": "1PM",
    "venue": "313",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "FAST TYPING",
    "rules": "This is a solo event. A paragraph will be given to type, the winner will be decided based on who finishes fast with accuracy.The given  paragraph must be typed as it is, keeping in mind: case sensitivity, punctuations and special characters.Once you finish the given task, inform the coordinator immediately .The event will be conducted in two rounds.The participants who qualify in first round will move to the second round.",
    "rounds": [],
    "date": "9th",
    "time": "11 AM",
    "venue": "DBMS Lab",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "QR HUNT",
    "rules": " Participants are to take part in the event as a team of two. Each team will be initially provided with a QR code, which contains a riddle about a location. A series of such QR codes are planted across various locations within the college premises, which lead from one location to another. The team which reaches the goal first is declared winner.",
    "rounds": [],
    "date": "8th",
    "time": "1:30 PM",
    "venue": "212",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "PUBG",
    "rules": "4 player squad,Battle Royal Erangle map.",
    "rounds": [],
    "date": "9th",
    "time": "10AM",
    "venue": "Seminar Hall 2",
    "Entry": "200",
    "prize1": "2000",
    "prize2": "1000"
},
{
    "event": "MOBILE PHOTOGRAPHY AND MEME MAKING",
    "rules": "This is a solo event. Certified amount of time will be given to the participants to click a picture and pick a theme for their meme within the college campus. The date when the picture was clicked will be checked prior to the commencement of the time for making the meme. Any mobile application can be used to create the meme and the participant can pick any theme. Stipulated amount of time will be given to all the participants to create the meme. The meme will be judged on basis of creativity. Use of a vulgar theme/language is prohibited. Organizers decision will be final.If found using any other device other than mobile to take pictures, he/she will be disqualified immediately and refund would not be made.",
    "rounds": [],
    "date": "9th",
    "time": "9:30 AM",
    "venue": "313",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "COUNTER STRIKE",
    "rules": "Counter Strike Source. It will be a 2v2 event, will be hosted on lan in one of the labs.Till finals all the rounds are race to 9 and the finals will be a competitive match for 30 rounds (overtime included) Map pools are Dust 2, Dust, Inferno, and Nuke Knife round decides start side and game starts with pistol round.",
    "rounds": [],
    "date": "8th",
    "time": "1 PM",
    "venue": "DBMS LAB",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "MINUTE TO WIN IT",
    "rules": "This is a solo event. There will be a total of 4 rounds. All the participants will be given a task to perform. The task has to be completed within 1 min (60 sec) in order to win that round and advance to the next round. Each round has a different challenge. ",
    "rounds": [
        "In the first 3 rounds participants have to finish the given task within 60 seconds. Whoever completes the task qualifies to the next round.",
        "In is the finale round where the person who finishes the task first is the winner."
    ],
    "date": "8th",
    "time": "12:30 PM",
    "venue": "314",
    "Entry": "50",
    "prize1": "500",
    "prize2": "200"
},
{
    "event": "TV SHOW QUIZ",
    "rules": "No use of mobile.Two members in a group.",
    "rounds": [
        "The participants will be given a set of questions which should be answered in 15 minutes. Participants who passes cut off will be selected for second round.",
        "Participants will be asked 10 questions. If they don’t answer it will pass on to the next team. Based on points winners will be declared."
    ],
    "date": "9th",
    "time": "10:30 AM",
    "venue": "304",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "DIZZY FOOTBALL",
    "rules": "This is a solo event. Organizers decision is final. Any such conflicts with the organisers will be disqualified.",
    "rounds": [
        "Each player gets three chances to take a shot at the goal, he/she has to spin around the ball(15 spins) kept at a distance from the goal, after 15 rounds shoot the ball towards the goal. If it passes then you are through to the next round.",
        "Obstacles will be kept in your way to make the competition more complicated. And the same is continued."
    ],
    "date": "8th",
    "time": "12PM",
    "venue": "Ground",
    "Entry": "80",
    "prize1": "800",
    "prize2": "400"
},
{
    "event": "MINI BASKETBALL",
    "rules": "Team of 3. The tournament proceeds depending upon the number of teams.3 players,1 substitute .Toss decides the starting team.Looser's ball  2 halves - 7mins each (14 playing minutes per match) .Team with the maximum points at the end of second half is the winner,cash price may subject to change without prior notice(will only increase).",
    "rounds": [],
    "date": "9th",
    "time": "9:30 AM",
    "venue": "Basketball Court",
    "Entry": "150",
    "prize1": "1500",
    "prize2": "800"
}
]


function create_node(v,k){
    var p1=document.createElement('p');
    var strong=document.createElement('strong');
    strong.innerHTML=v;
    p1.appendChild(strong);
    var text=document.createTextNode(k);
    p1.appendChild(text);
    return p1;
}


function cards(){
    for(var i=0;i<events.length;i++){
            eve(events[i]);
    }
}

    function eve(arr){
        var div=document.createElement("div");
        div.className=arr.event;
        div.classList.add("col");
        div.classList.add("col-lg-8");
        div.classList.add("col-des")
        var h3=document.createElement("h3");
        h3.innerText=arr.event; 
        div.appendChild(h3);
        var p1=create_node('Rules: ',arr.rules);
        div.appendChild(p1);
        if(arr.rounds[0]!==undefined){
        var p1=create_node('Round1: ',arr.rounds[0]);
        div.appendChild(p1);
    }
        if(arr.rounds[1]!==undefined){
        var p1=create_node('Round2: ',arr.rounds[1]);
        div.appendChild(p1);
    }
        var p1=create_node('Date: ',arr.date);
        div.appendChild(p1);
       
        var p1=create_node('Time: ',arr.time);
        div.appendChild(p1);
       
        var p1=create_node('Room: ',arr.venue);
        div.appendChild(p1);
    
        var p1=create_node('Entry Price: ₹',arr.Entry);
        div.appendChild(p1);
        
        var p1=create_node('Prize 1: ₹',arr.prize1);
        div.appendChild(p1);
        var p1=create_node('Prize 2: ₹',arr.prize2);
        div.appendChild(p1);
        var ma=document.getElementById("main-event");
        ma.appendChild(div);
    }

if(sessionStorage.getItem("Event")==undefined){
   cards();
}else{
    cards();
    var a=sessionStorage.getItem("Event");
    var a=document.getElementsByClassName(a)[0];
    a.scrollIntoView();
    sessionStorage.clear();
}