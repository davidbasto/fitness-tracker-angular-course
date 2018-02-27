import { Component, OnInit } from '@angular/core';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  form: FormGroup;

  exercises: Exercise[];

  constructor(private trainingService: TrainingService, private fb: FormBuilder) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercies();

    this.form = this.fb.group({
      exercise: ['', [Validators.required]]
    });
  }

  onStartTraining() {
    console.log(this.form.controls['exercise'].value);
    this.trainingService.startExercise(this.form.controls['exercise'].value);
  }
}
