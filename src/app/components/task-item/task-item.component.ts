import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: true };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    // console.log(task); // we can't get cur task if we output eventEmitter
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }
}
