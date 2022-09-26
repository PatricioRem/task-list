import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public respuesta:any;
  constructor(private route:ActivatedRoute, private servicio:TaskService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      this.cargarData(params.variable)
  })
}

cargarData(id:string){
    this.servicio.get(`http://localhost:5001/tasks/${id}`).subscribe(respuesta => {
      this.respuesta = respuesta; 
    })
  }

}

