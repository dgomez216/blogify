import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  postUpdated= new Subject<Post[]>();

  constructor() { }
  addPost(post: Post){
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
    //Genera notificacion a los componentes suscritos a Subject

  }
  getPostsUpdateListener(){
   return this.postUpdated.asObservable;
  }
}
