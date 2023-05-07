const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if(hr == 12) {
        speak("Good noon Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Chiki");
    speak("Going online");
    speak("Created by ashish");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hai') || message.includes('hello') || message.includes('ki re')) || message.includes('hi') {
        const finalText = "Hello sir I am Chiki Tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine how about you";
        speech.text = finalText;
    }
    else if(message.includes('who created you')) {
        const finalText = "created by Mr. Ashish ";
        speech.text = finalText;
    }


    else if(message.includes('what is your name')) {
        const finalText = "My name is Chiki";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Chiki is Opening The Google";
        speech.text = finalText;
    }
   
    else if(message.includes('connect') || message.includes('chat GPT')) {
        window.open(" https://chat.openai.com/", "_blank");
        const finalText = "Chiki is Calling The ChatGPT";
        speech.text = finalText;
    }


    else if(message.includes('play songs')|| message.includes('play song')|| message.includes('play radio')) {
        window.open("https://www.jango.com/", "_blank");
        const finalText = "Chiki is playing songs";
        speech.text = finalText;
    }

    else if(message.includes('play movies')|| message.includes('play movie')|| message.includes('my movies')|| message.includes('movies')) {
        window.open("https://moviesfather.com/", "_blank");
        const finalText = "Chiki is opening the movie list where you can find the latest movies";
        speech.text = finalText;
    }
    
    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Chiki is Opening The Instagram";
        speech.text = finalText;
    }

    else if(message.includes('open spotify')) {
        window.open("https://open.spotify.com/", "_blank");
        const finalText = "Chiki is Opening The Spotify to enjoy Millions Of Music";
        speech.text = finalText;
    }
    
    else if(message.includes('open Linkedin')) {
        window.open("https://in.linkedin.com", "_blank");
        const finalText = "Chiki is Opening The Linkedin";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Chiki is Opening The youtube";
        speech.text = finalText;
    }

    else if(message.includes('today weather')) {
        window.open("https://www.accuweather.com/en/in/ram-sagar/3188960/weather-forecast/3188960", "_blank");
        const finalText = "Chiki is Opening The Weather";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('open wikipedia')||message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on Wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric",second: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Chiki is Opening the Calculator";
        speech.text = finalText;
    }
    else if(message.includes('open notepad')) {
        window.open('Notepad:////')
        const finalText = "Chiki is opening the Notepad";
        speech.text = finalText;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.90;

    window.speechSynthesis.speak(speech);
}
