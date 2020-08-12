import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onClickEditTodoDetail(id) {
    // this.router.navigate(['/todo-detail'], {queryParams:{id:id}});
  }

  onClickAddTodo() {
    // this.router.navigate(['/todo-detail']);
  }
  
  onClickTodoDelete(id) {
    // this.todoService.deleteTodoDetail(id);
    // this.loadAllTodoList();
  }

}
