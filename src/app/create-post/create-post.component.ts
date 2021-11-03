import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Post } from '../models/post.models';
@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  content: string="Hola mundo :3";
  texto: string="";
  posts: Post[]= [];
  constructor() { }

  ngOnInit(): void {
  }
  showText(){
      this.content=this.texto
  }
  addPost(form:NgForm){
    console.log(form.value.title);
    this.posts.push(form.value);
  }
}
