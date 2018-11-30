import { Component, OnInit } from '@angular/core';
import isNilOrEmpty from 'src/utils/isNilOrEmpty';

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

  // Session Storage Strings
  storageStrings = {
    'active': 'activeTasks',
    'completed': 'completedTasks'
  };
  constructor() { }

  ngOnInit() {

    // Initializing Task Array
    this.activeTasks = [];
    this.completedTasks = [];

    // Getting task details from Session Storage
    const sessionActiveTask = sessionStorage.getItem(this.storageStrings.active);
    const sessionCompTask = sessionStorage.getItem(this.storageStrings.completed);

    if (!isNilOrEmpty(sessionActiveTask)) {
      this.activeTasks = JSON.parse(sessionStorage.getItem(this.storageStrings.active));
    }

    if (!isNilOrEmpty(sessionCompTask)) {
      this.completedTasks = JSON.parse(sessionStorage.getItem(this.storageStrings.completed));
    }

    this.showTasks = true;

  }


  addTask() {
    // upon pressing add Task Button

    // Validation
    if (isNilOrEmpty(this.inputTask)) {
      alert('Please Enter a Task!');
      return;
    }

    const taskObj = {
      'description': this.inputTask
      // 'status': 'Active'
    };

    this.activeTasks.push(taskObj);
    this.storeInSession(this.storageStrings.active, this.activeTasks);
    this.inputTask = '';
  }

  taskCompletion(index: number) {
    // upon pressing Complete Task Button

    this.modifyTask(this.activeTasks, this.completedTasks, this.storageStrings.active, this.storageStrings.completed, index);
  }

  repeatTask(index: number) {
    // upon pressing repeat Task Button
    this.modifyTask(this.completedTasks, this.activeTasks, this.storageStrings.completed, this.storageStrings.active, index);
  }

  removeActiveTask(index: number) {
    // upon pressing remove Task Button
    // Removing the task from Active task
    if (confirm('Remove Task?')) {
      this.modifyTask(this.activeTasks, [], this.storageStrings.active, '', index, 'remove');
    }
  }

  removeCompletedTask(index: number) {
    // upon pressing Complete Button
    // Removing the task from completed task
    if (confirm('Remove Task?')) {
      this.modifyTask(this.completedTasks, [], this.storageStrings.completed, '', index, 'remove');
    }
  }

  removeAllCompletedTasks() {

    if (isNilOrEmpty(this.completedTasks)) {
      return;
    }

    if (confirm('Remove All Tasks?')) {

      this.completedTasks = [];
      this.storeInSession(this.storageStrings.completed, this.completedTasks);

    }
  }

  // Used to Modify Tasks
  modifyTask(initalTask: object[], finalTask: object[], sessionInitialKey: string,
    sessionFinalKey: string, index: number, modificationType: string = 'modify') {

    // Validations For Initial Values
    if ([initalTask, sessionInitialKey, index].every(isNilOrEmpty)) {
      return console.log('Parameters are null or undefined in ModifyTask Function');
    }

    if (modificationType === 'modify') {
      // Validations for final values
      if ([finalTask, sessionFinalKey].every(isNilOrEmpty)) {
        return console.log('Parameters are null or undefined in ModifyTask Function');
      }

      // Adding it into Final Task
      finalTask.push(initalTask[index]);
      this.storeInSession(sessionFinalKey, finalTask);
    }

    // Removing the task from Inital task
    initalTask.splice(index, 1);
    this.storeInSession(sessionInitialKey, initalTask);

  }

  // Storing in Session
  storeInSession(sessionKey: string, sessionValue: object[]) {
    sessionStorage.setItem(sessionKey, JSON.stringify(sessionValue));
  }

}
