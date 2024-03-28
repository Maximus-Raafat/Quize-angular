import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class DataExasy {
    questions = [
        {
          "question": "In computing, what does LAN stand for?",
          "options": ["Land Address Navigation", "Long Antenna Node", "Light Access Node", "Local Area Network"],
          "answer": "Long Antenna Node",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 1
        },
        {
          "question": "The Windows ME operating system was released in the year 2000.",
          "options": ["True", "Fasle"],
          "answer": "True",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 2
        },
        {
          "question": "In most programming languages, the operator ++ is equivalent to the statement '+= 1'",
          "options": ["True", "False"],
          "answer": "False",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 3
        },
        {
          "question": "What does the Prt Sc button do?",
          "options": ["Nothing", "Closes all windows", "Captures what's on the screen and copies it to your clipboard", "Saves a .png file of what's on the screen in your screenshots folder in photos"],
          "answer": "Nothing",
          "checked":false,
          "selected":"Don't have Answer",
          "id": 4
        }
      ]
    
}