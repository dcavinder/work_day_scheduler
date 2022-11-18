var currentDay = moment().format("[Today's date is: ]'MMMM Do YYYY, h:mm:ss a'");
$("#currentDay").text(currentDay)

var timeBlocks = document.querySelector(".container")

var timeSlots = [
    {
        hour: '7',
        time: '07',
        period: 'am',
        task: ''
    },
    {
        hour: '8',
        time: '08',
        period: 'am',
        task: ''
    },
    {
        hour: '9',
        time: '09',
        period: 'am',
        task: ''
    },
    {
        hour: '10',
        time: '10',
        period: 'am',
        task: ''
    },
    {
        hour: '11',
        time: '11',
        period: 'am',
        task: ''
    },
    {
        hour: '12',
        time: '12',
        period: 'pm',
        task: ''
    },
    {
        hour: '1',
        time: '13',
        period: 'pm',
        task: ''
    },
    {
        hour: '2',
        time: '14',
        period: 'pm',
        task: ''
    },
    {
        hour: '3',
        time: '15',
        period: 'pm',
        task: ''
    },
    {
        hour: '4',
        time: '16',
        period: 'pm',
        task: ''
    },
    {
        hour: '5',
        time: '17',
        period: 'pm',
        task: ''
    },
    {
        hour: '6',
        time: '18',
        period: 'pm',
        task: ''
    },
    {
        hour: '7',
        time: '19',
        period: 'pm',
        task: ''
    },
    {
        hour: '8',
        time: '20',
        period: 'pm',
        task: ''
    }
]
