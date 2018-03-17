import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  form: FormGroup;

  exercises: Exercise[];

  constructor(private trainingService: TrainingService, private fb: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.trainingService.exercisesChanged.subscribe(exercises => {
       this.exercises = exercises;
     });
    this.trainingService.fetchAvailableExercies();

    this.form = this.fb.group({
      exercise: ['', [Validators.required]]
    });
  }

  onStartTraining() {
    console.log(this.form.controls['exercise'].value);
    this.trainingService.startExercise(this.form.controls['exercise'].value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
