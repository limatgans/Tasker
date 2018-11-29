import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  inputTask: any;
  showTasks = false;
  activeTasks: object[];
  completedTasks: object[];
  constructor() { }

  ngOnInit() {

    // Initializing Task Array
    this.activeTasks = [];
    this.completedTasks = [];


    // Getting task details from Session Storage
    const sessionActiveTask = sessionStorage.getItem('activeTasks');
    const sessionCompTask = sessionStorage.getItem('completedTasks');

    if (!this.customIsNullOrUndefined(sessionActiveTask)) {
      this.activeTasks = JSON.parse(sessionStorage.getItem('activeTasks'));
    }

    if (!this.customIsNullOrUndefined(sessionCompTask)) {
      this.completedTasks = JSON.parse(sessionStorage.getItem('completedTasks'));
    }

    this.showTasks = true;

  }

  customIsNullOrUndefined = value => value === undefined || value === null;

  addTask() {

    // Validation
    if (this.customIsNullOrUndefined(this.inputTask)) {
      alert('Please Enter a Task!');
      return;
    }

    const taskObj = {
      'description': this.inputTask,
      'status': 'Active'
    };

    this.activeTasks.push(taskObj);
    sessionStorage.setItem('activeTasks', JSON.stringify(this.activeTasks));
  }

  taskCompletion(index: number) {
    // upon pressing Complete Task Button
    console.log('Index');
    console.log(index);

  }

  removeActiveTask(index: number) {
    // upon pressing remove Task Button
    console.log('Index');
    console.log(index);

  }

  repeatTask(index: number) {
    // upon pressing repeat Task Button
    console.log('Index');
    console.log(index);

  }

  removeCompletedTask(index: number) {
    // upon pressing Complete Button
    console.log('Index');
    console.log(index);

  }


}
