import { nanoid } from 'nanoid';

const questions = [
    {
        id: nanoid(),
        question: "What is the relationship between resistivity r and conductivity s?",
        options: ["R = s^2", "R = s", "R = 1/s", "R > s" ],
        answer: "R = 1/s",
    },
    {
        id: nanoid(),
        question: "Which planet in our solar system is known as the Red Planet?",
        options: ["Earth", "Venus", "Saturn", "Mars" ],
        answer: "Mars",
    },
    {
        id: nanoid(),
        question: "How many hours are there in a day?",
        options: ["24 hours", "16 hours", "12 hours", "48 hours" ],
        answer: "24 hours",
    },
    {
        id:nanoid(),
        question: " 1 L is equal to how many mL?",
        options: ["100 ml", "50 ml", "1000 ml", "500 ml"],
        answer: "1000 ml",
    },
    {
        id: nanoid(),
        question: "Ordinary table salt is sodium chloride. What is baking soda?",
        options: ["Potassium chloride", "Potassium carbonate", "Potassium hydroxide", "Sodium bicarbonate" ],
        answer: "Sodium bicarbonate",
    },
    {
        id: nanoid(),
        question: "What is the name of the biggest planet in our solar system?",
        options: ["Saturn", "Mars", "Jupiter", "Earth" ],
        answer: "Jupiter",
    },
    {
        id: nanoid(),
        question: "Pollen grains in plants are produced in",
        options: ["roots", "leaves", "flower", "stem"],
        answer: "flower",
    },
    {
        id: nanoid(),
        question: "OS computer abbreviation usually means ?",
        options: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor" ],
        answer: "Operating System",
    },
    {
        id: nanoid(),
        question: "How many bits in a byte?",
        options: ["4", "8", "16", "32" ],
        answer: "8",
    },
    {
        id: nanoid(),
        question: "What does CPU stand for?",
        options: ["Common People United", "Commonwealth Press Union", "Computer Parts of USA", "Central Processing Unit" ],
        answer: "Central Processing Unit",
    },
    {
        id: nanoid(),
        question: "Electric bulb filament is made of",
        options: ["Copper", "Aluminum", "Lead", "Tungsten" ],
        answer: "Tungsten",
    }
];

export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));