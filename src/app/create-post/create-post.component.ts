import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  content: string="Hola mundo :3";
  texto: string="";
  constructor() { }

  ngOnInit(): void {
  }
  showText(){
      this.content=this.texto
  }
}
