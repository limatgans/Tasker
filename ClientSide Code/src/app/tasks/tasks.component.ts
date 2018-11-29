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

  customIsNullOrUndefined = value => value === undefined || value === null || value.length === 0;

  addTask() {
    // upon pressing add Task Button

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
    this.storeInSession('activeTasks', this.activeTasks);
  }

  taskCompletion(index: number) {
    // upon pressing Complete Task Button

    this.modifyTask(this.activeTasks, this.completedTasks, 'activeTasks', 'completedTasks', index);
  }

  repeatTask(index: number) {
    // upon pressing repeat Task Button
   this.modifyTask(this.completedTasks, this.activeTasks, 'completedTasks', 'activeTasks', index);
  }

  removeActiveTask(index: number) {
    // upon pressing remove Task Button
    // Removing the task from Active task
    this.modifyTask(this.activeTasks, [], 'activeTasks', '', index, 'remove');
  }

  removeCompletedTask(index: number) {
    // upon pressing Complete Button
    // Removing the task from completed task
    this.modifyTask(this.completedTasks, [], 'completedTasks', '', index, 'remove');
  }

  // Used to Modify Tasks
  modifyTask(initalTask: object[], finalTask: object[], sessionInitialKey: string,
    sessionFinalKey: string, index: number, modificationType: string = 'modify') {

    // Validations For Initial Values
    if ([initalTask, sessionInitialKey, index].every(this.customIsNullOrUndefined)) {
      console.log('Parameters are null or undefined in ModifyTask Function');
      return;
    }

    if (modificationType === 'modify') {
      // Validations for final values
      if ([finalTask, sessionFinalKey].every(this.customIsNullOrUndefined)) {
        console.log('Parameters are null or undefined in ModifyTask Function');
        return;
      }

      // Adding it into Final Task
      finalTask.push(initalTask[index]);
      this.storeInSession(sessionFinalKey, finalTask);
    }

    // Removing the task from Inital task
    initalTask.splice(index);
    this.storeInSession(sessionInitialKey, initalTask);

  }

  // Storing in Session
  storeInSession(sessionKey: string, sessionValue: object[]) {
    sessionStorage.setItem(sessionKey, JSON.stringify(sessionValue));
  }



}
