import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TrainingService {

 private avaliableExercises: Exercise[] = [];

  constructor(private db: AngularFirestore) {}

  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();

  fetchAvailableExercies() {

    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data().name,
            duration: doc.payload.doc.data().duration,
            calories: doc.payload.doc.data().calories
          };
        });
      }
    )
    .subscribe((exercises: Exercise[]) => {
      this.avaliableExercises = exercises;
      this.exercisesChanged.next([...this.avaliableExercises]);
    });
  }

  startExercise(exerciseId: string) {
    this.runningExercise = this.avaliableExercises.find(ex => ex.id === exerciseId);
    this.exerciseChanged.next({ ...this.runningExercise});
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * progress / 100,
      calories: this.runningExercise.calories * progress / 100,
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchCompletedOrCancelledExercises() {
    this.db.collection('finishedExercises').valueChanges().subscribe(
      (exercises: Exercise[]) => this.finishedExercisesChanged.next(exercises)
    );
  }

  getRunningExercise(): Exercise {
    return { ...this.runningExercise};
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }

}
