import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TrainingService {

  private avaliableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  constructor() { }

  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();

  getAvailableExercies() {
    return this.avaliableExercises.slice();
  }

  startExercise(exerciseId: string) {
    this.runningExercise = this.avaliableExercises.find(ex => ex.id === exerciseId);
    this.exerciseChanged.next({ ...this.runningExercise});
  }
}
