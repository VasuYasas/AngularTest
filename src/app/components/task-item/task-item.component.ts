import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  onDelete(task){
    this.onDeleteTask.emit(task);
  }
  // @ts-ignore
  onToggle(task){
    this.onToggleReminder.emit(task);
  }

}
