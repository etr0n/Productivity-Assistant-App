// laikini duomenys iki duombazes sukurimo 

import colors from "./Colors";

export default tempData = [
    {
        id: 1,
        name: "PROJECT1",
        color: colors.darkgreyblue,
        tasks: [
            {
                title: "cp1",
                completed: true
            },
           {
                title: "cp11",
                completed: true
            },
            {
                title: "cp12",
                completed: true
            },
            {
                title: "cp13",
                completed: false
            } 
        ]
    },

    {
        id: 2,
        name: "PROJECT2",
        color: colors.darkgreyblue,
        tasks: [
            {
                title: "cp2",
                completed: true
            },
            {
                title: "cp21",
                completed: false
            },
            {
                title: "cp22",
                completed: true
            } 
        ]
    },

    {
        id: 3,
        name: "PROJECT3",
        color: colors.darkgreyblue,
        tasks: [
            {
                title: "cp3",
                completed: true
            },
            {
                title: "cp31",
                completed: false
            },
            {
                title: "cp32",
                completed: false
            },
            {
                title: "cp33",
                completed: false
            } 
        ]
    }
];