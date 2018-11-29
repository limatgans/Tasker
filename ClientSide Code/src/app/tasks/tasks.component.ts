import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  activeTasks: object[];
  completedTasks: object[];
  constructor() { }

  ngOnInit() {
    // Getting task details from Session Storage
    this.activeTasks = JSON.parse(sessionStorage.getItem('activeTasks'));
    this.completedTasks = JSON.parse(sessionStorage.getItem('completedTasks'));

  }

}
