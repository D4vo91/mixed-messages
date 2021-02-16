const randomNum = num => {
    //generates a random number from 0 to (num-1)
    return Math.floor(Math.random()*num);
};

const messages = {
    positiveQuotes: ['What is now proved was once only imagined', 'Turn your obstacles into opportunities and your problems into possibilities', 
                'There is no good and evil, there is only power and those too weak to seek it', 'No act of kindness, no matter how small, is ever wasted', 
                'Stay strong, stay positive, and never give up','Never lose hope. Storms make people stronger and never last forever', 'Anything is possible. Anything can be', 
                'Nothing can disturb your peace of mind unless you allow it to', 'I\'m not going to limit myself just because people won\'t accept the fact that I can do something else.', 
                'With our thoughts we make the world'],
                //Roy T Bennett, J.K.Rowling, William Blake, Shel Silverstein, Dolly Parton, Buddha
    powerTasks: ['power task 1', 'power task 2', 'power task 3', 'power task 4', 'power task 5', 
                'power task 6', 'power task 7', 'power task 8', 'power task 9', 'power task 10'],
    affirmations: ['affirmation 1', 'affirmation 2', 'affirmation 3', 'affirmation 4', 'affirmation 5', 
                    'affirmation 6', 'affirmation 7', 'affirmation 8', 'affirmation 9', 'affirmation 10'],
};