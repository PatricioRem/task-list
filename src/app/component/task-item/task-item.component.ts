import { Component, OnInit, Input, Output, EventEmitter, APP_ID } from '@angular/core';
import { Task } from '../../Task'
import { TASKS } from '../../mock-tasks'
import { faTrashCan, faBriefcase, faKitMedical, faBroom, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Categoria } from '../../categoria';

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})


export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS [0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  fatrashcan = faTrashCan;
  healthIcon = faKitMedical;
  briefcase = faBriefcase;
  broom = faBroom;
  educacionIcon = faGraduationCap;
  public ahora:any;
  

  constructor(private route:ActivatedRoute, private taskService:TaskService) { }


  ngOnInit(): void {
    function formatDate(date: Date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-') +
        'T' +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
        ].join(':')
      );
    }
    this.ahora = formatDate(new Date());
    
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

}

