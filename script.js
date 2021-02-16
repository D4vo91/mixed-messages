const randomNum = num => {
    //generates a random number from 0 to (num-1)
    return Math.floor(Math.random()*num);
};

const messagesComponents = {
    positiveQuotes: ['What is now proved was once only imagined', 'Turn your obstacles into opportunities and your problems into possibilities', 
                'There is no good and evil, there is only power and those too weak to seek it', 'No act of kindness, no matter how small, is ever wasted', 
                'Stay strong, stay positive, and never give up','Never lose hope. Storms make people stronger and never last forever', 'Anything is possible. Anything can be', 
                'Nothing can disturb your peace of mind unless you allow it to', 'I\'m not going to limit myself just because people won\'t accept the fact that I can do something else.', 
                'With our thoughts we make the world'],
                //Roy T Bennett, J.K.Rowling, William Blake, Shel Silverstein, Dolly Parton, Buddha
    powerTasks: ['Say out loud 10 things you are grateful for', 'Write 3 goals to complete today', 'Talk to a random person (Stranger)', 
                'Read 10 pages of a personal development book today', 'Make 5 more calls today', 'Call a friend', 'Call a family member to check on them', 
                'Use the stairs instead of the elevator', 'Listen to a business/personal development podcast', 'Do 1 minute high-plank and 1 minute low-plank'],
    affirmations: ['Money flows to me easily, frecuently and abundantly', 'Abundance is my birth right', 'I believe in my skills and abilities', 
                 'I am worthy of possitive cashflow', 'I am calm and cofindent because I am well prepared', 'The universe always provides for me',
                  'I am helthy welthy and happy', 'Everyday I am a better version of myself, specially today', 'People easily like, trust and wants to do business with me',
                   'My success is inevitable'],
};

const randomizeMessage = messages => {
    let randomMessage = [];
    for (let component in messages){
        randomMessage.push(messages[component][randomNum(messages[component].length)]);
    }
    return randomMessage;
    //returns an array with 3 elements which are randomly selected from the message components
};

function printMessage(arrayRandomMessage){
    const fullMessage = `\nInspirational quote of the Day: ${arrayRandomMessage[0]}.
Suggested Power Task: ${arrayRandomMessage[1]}.
Read this affirmation out loud for you: ${arrayRandomMessage[2]}. \n\n`;
    console.log(fullMessage);
};

let newMessage = randomizeMessage(messagesComponents);
printMessage(newMessage);