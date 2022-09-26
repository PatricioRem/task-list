import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from '../../categoria';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  datetime: any = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?:Subscription;
  categoria:any = Categoria;
  enumKeys: any = [];

  constructor(
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value );
    this.enumKeys = Object.keys(this.categoria)
    
     }

  ngOnInit(): void {

  }
 
  onSubmit() {
    if(this.text.length === 0){
      alert("Please add a task!");
      return
    } 
    const {text,datetime,reminder,categoria} = this
    const newTask = {text,datetime,reminder,categoria}
    
    this.onAddTask.emit(newTask);
  }
 
}
 