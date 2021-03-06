import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit, OnDestroy {

  private exChangedSubscription: Subscription;
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

  dataSource = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) { }

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => this.dataSource.data = exercises
    );

    this.trainingService.fetchCompletedOrCancelledExercises();

    this.dataSource.filterPredicate = (data: Exercise, filter: string) => {
      console.log(data);
      console.log(data.name.toLowerCase().search(filter.trim().toLowerCase()));
      return data.name.toLowerCase().search(filter.trim().toLowerCase()) >= 0;
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void {
    this.exChangedSubscription.unsubscribe();
  }

  doFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
