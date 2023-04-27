import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}
  private BaseURL = 'http://localhost:5000/users';
  /* Methods */

  getAllUsers() {
    return 'Getting All users';
  }
}
