//add event to start button
var start = document.getElementById('start');
start.addEventListener('click', chooseTheme);
//all of the other buttons/divs
var game = document.getElementById('game');
var which = document.getElementById('which');
var person = document.getElementById('person');
var interviewPrompt = document.getElementById('interview');
var yesand = document.getElementById('yesand');
var leader = document.getElementById('leader');
var hr = document.getElementById('hr');
var netflix = document.getElementById('netflix');
yesand.addEventListener('click', chooseyesand);

leader.addEventListener('click', leaderButton);
hr.addEventListener('click', hrButton);
netflix.addEventListener('click', netflixButton);

//add functions for chosing a theme
function chooseTheme(){
    //Hide the 'start game' button and show the game
    start.style.display="none";
    which.style.display="block";
}
function chooseyesand(){
    if (window.confirm('This game was yesterday, cancel to stay here'))
   {
   window.open('https://yesandagency.github.io/oct-26-22/', '_blank');
   };
}

function leaderButton(){
    alert("We are still working on this one, check back next quarter!");
}

function hrButton(){
    theme = 'yesand';
    game.style.display = "block";
    startGame();
}

function netflixButton(){
    alert("Streaming not available");
}
function startInterviewProcess(){
    //choose a word and letters that are beneath
    var animal = prompt('What animal scares you most?')
    var name = prompt('What is your ideal name?');
    var occupation = prompt('What is our most important need right now? (role)');
    var vol = prompt('Do you volunteer to train this person?');
    var years =  prompt('A measurement of time?');
    var degree =  prompt('Highest-level of education achieved?');
    var team =  prompt('What team will this person join?');
    var pet = prompt('A pets name?');
    var vehicle = prompt('What vehicle do I drive?');
    var feeling = prompt('Give me a feeling?');
    var passions = prompt('What am I most passionate about?');
    var commsTool = prompt('How will this person prefer to communicate?');
    var hobby = prompt('What will this person enjoy doing on their free time?');
    var commute = prompt('Give me a measurement of distance.');
    var personality = prompt('An adjective describing my personality?');
    var mood = prompt('What is your current mood? (adj.)');
    

    var div = document.getElementById('details');
    div.style.display="block";
    div.innerHTML = '<p>Hello, my name is <strong> '+name+'</strong>.</p><p>I am <strong> '+mood+'</strong> with <strong> '+years+'</strong> experience as a <strong> '+occupation+'</strong> and am excited to be starting my position at Yes& as part of the <strong> '+team+'</strong> team!</p> <p>I wake up everyday thinking about <strong> '+hobby+'</strong>, but I won\'t hesitate to reach out via <strong> '+commsTool+'</strong> to talk turkey. What I am really passionate about is <strong> '+passions+'</strong> and I hope you feel <strong> '+feeling+'</strong> about it too. Don\'t worry, I am only <strong> '+commute+'</strong> from the office when I drive my <strong> '+vehicle+'</strong>.<p>I need to inform you that I require accommodations for my <strong> '+pet+'</strong>, my pet<strong> '+animal+'</strong>. I cannot work without them by my side so you\'ll likely see them on our video calls.</p><p>Did I mention am passionate about<strong> '+passions+'</strong>! You are cordially invited to join me at our next meet-up. </p><p>Sincerely,</br><strong> '+name+'</strong></p>';
    hirePerson();
}

function hirePerson(){
    person.style.display="inline";
    //document.write
}
//function that will start the game
function startGame(){
    //hide the theme buttons
    which.style.display="none";
    interviewPrompt.style.display="block";
    var startInterview = document.getElementById('startInterview');
    startInterview.addEventListener('click', startInterviewProcess);
}
