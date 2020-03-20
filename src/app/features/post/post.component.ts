import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.route.params.subscribe( obj => {
      console.log('obj', obj.id )
      this.employeesService.getPost(obj.id ).subscribe( (resp: Post) => {
        this.post = resp
      })
    })
  }

}
