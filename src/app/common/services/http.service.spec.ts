import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    `should be able to do HTTP Get`,
      () => {
        service.get('https://jsonplaceholder.typicode.com/users', {}).subscribe(data => {
          expect(data.count).toEqual(10);
        });

        const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
        request.flush({ count: 10 });
        httpTestingController.verify();
      }
  );

 
});
