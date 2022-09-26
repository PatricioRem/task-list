import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  public lista:any = [];
  public ahora:any;
  
  constructor(private taskService: TaskService)
   { }  
  
  ngOnInit(): void {
    this.cargarData()
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
      
    ))
    
  }
  public cargarData(){
    this.taskService.get(`http://localhost:5001/tasks`).subscribe(respuesta =>{
      this.lista = respuesta;
    })
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    ))
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ))
  }

}
