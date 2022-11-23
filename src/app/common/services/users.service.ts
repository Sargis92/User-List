import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, map, Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../../models/posts.model';
import { User } from '../../models/users.model';
import { HttpService } from './http.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userData = new BehaviorSubject<Array<User>>([]);

  constructor(private httpService: HttpService,
     private utilService: UtilService,
     private router: Router,) { }

  setUserData(userData: Array<User>):void {
      this.userData.next(userData);
  }

  getUserPosts(id:number): Observable<Post[] | undefined> {
    return this.userData.pipe(
      map((data)=> data.find((item) => item.id == id) ),
      map((item)=> item?.posts)
    )   
  }

  getUserData() {
    this.utilService.setLoading(true);
    const users = this.httpService.get<User[]>(`${environment.END_POINTS.users}`);
    const posts = this.httpService.get<Post[]>(`${environment.END_POINTS.posts}`).pipe(
      map((data)=>data.reduce((current: any, item: any)=>{
        if (!current[item.userId]) {
          current[item.userId] = [item];
        } else {
          current[item.userId].push(item);
        }
        return current;
      },{}))
    );

   forkJoin([users, posts]).pipe(
      map(([users,posts]) => {
        users.map((el: any)=>{
          el.posts = posts[el.id]
          return el
        })
        return [...users]
      }),
      tap((data) => {
        this.router.navigate(['users']);
        this.setUserData(data);
        this.utilService.setLoading(false);

        if (this.router.routerState.snapshot.url == '/') {
          this.router.navigate(['users']);
        }
      })
    ).subscribe()
  }

  
}
