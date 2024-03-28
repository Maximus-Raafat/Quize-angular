
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class DataHard {
    questions = [
        {
          "question": "In Big Hero 6, what were Baymax's motions modeled after?",
          "options": ["Baby ostriches", "Baby monkeys", "Baby bears", "Baby penguins"],
          "answer": "Baby ostriches",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 1
        },
        {
          "question": "According to 'Star Wars' lore, which planet does Obi-Wan Kenobi come from?",
          "options": ["Alderaan", "Naboo", "Stewjon", "Tatooine"],
          "answer": "Alderaan",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 2
        },
        {
          "question": "What was the first movie to ever use a Wilhelm Scream?",
          "options": ["Distant Drums", "Treasure of the Sierra Madre", "Indiana Jones", "The Charge at Feather River"],
          "answer": "Distant Drums",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 3
        },
        {
          "question": "In what year does Jurassic World open in the 'Jurassic Park' universe?",
          "options": ["2015", "2020", "2007", "2005"],
          "answer": "2015",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 4
        }
      ]
}