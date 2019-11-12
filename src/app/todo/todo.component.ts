import { Component } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { NgForm } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [
    {
      task: "fold clothes",
      completed: false
    },
    {
      task: "put clothes in dresser",
      completed: false
    },
    {
      task: "relax",
      completed: false
    }
  ];