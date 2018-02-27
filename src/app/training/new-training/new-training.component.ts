import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  availableExercises;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.availableExercises = this.trainingService.avaliableExercises;
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
