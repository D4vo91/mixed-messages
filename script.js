const randomNum = num => {
    //generates a random number from 0 to (num-1)
    return Math.floor(Math.random()*num);
};

const messages = {
    positiveQuotes: ['possitive quote 1', 'possitive quote 2', 'possitive quote 3', 'possitive quote 4', 'possitive quote 5',
                'possitive quote 6', 'possitive quote 7', 'possitive quote 8', 'possitive quote 9', 'possitive quote 10'],
    powerTasks: ['power task 1', 'power task 2', 'power task 3', 'power task 4', 'power task 5', 
                'power task 6', 'power task 7', 'power task 8', 'power task 9', 'power task 10'],
    affirmations: ['affirmation 1', 'affirmation 2', 'affirmation 3', 'affirmation 4', 'affirmation 5', 
                    'affirmation 6', 'affirmation 7', 'affirmation 8', 'affirmation 9', 'affirmation 10'],
};