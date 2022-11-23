import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    `should be able to make HTTP Get call`,

      () => {
        spyOn(service, 'getUserData').and.callThrough();
        service.getUserData();
        expect(service.getUserData).toHaveBeenCalledTimes(1);
      }
    )
});
