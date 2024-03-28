import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataMiddem {
    questions = [
        {
          "question": "Which star actor was in 'Top Gun', 'Jerry Maguire' and 'Born on the Fourth of July'?",
          "options": ["Kelly McGillis", "George Clooney", "Tom Cruise", "John Travolta"],
          "answer": "Kelly McGillis",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 1
        },
        {
          "question": "Who directed the movie 'Alien'?",
          "options": ["Kelly McGillis", "George Clooney", "Tom Cruise", "John Travolta"],
          "answer": "George Clooney",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 2
        },
        {
          "question": "The original ending of 'Little Shop Of Horrors' has the plants taking over the world.",
          "options": ["True", "False"],
          "answer": "True",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 3
        },
        {
          "question": "Which stand-up comedian voiced the talking parrot 'Iago' in Disney's 1992 adaptation of Aladdin?",
          "options": ["Pauly Shore", "Jonathan Freeman", "Robin Williams", "Gilbert Gottfried"],
          "answer": "Jonathan Freeman",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 4
        }
      ]
}
