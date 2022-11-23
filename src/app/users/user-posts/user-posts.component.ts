import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { UsersService } from 'src/app/common/services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts: Array<Post> | undefined

  constructor(private usersService: UsersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.usersService.getUserPosts(this.route.snapshot.params['id']).subscribe((data)=>{
      this.posts = data;
    })
  }

}
