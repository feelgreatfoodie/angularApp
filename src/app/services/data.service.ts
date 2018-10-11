import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]
  data: Observable<any>

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@gnr.de',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Joe',
        lastName: 'Blake',
        email: 'waffleJoe@gnr.de',
        isActive: false,
        registered: new Date('11/15/2016'),
        hide: true
      },
      {
        firstName: 'Juliana',
        lastName: 'Crane',
        email: 'juliana@theResistance.com',
        isActive: true,
        registered: new Date('03/12/2018 16:10:00'),
        hide: true
      }
    ]
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1000)
      setTimeout(() => {
        observer.next(2)
      }, 2000)
      setTimeout(() => {
        observer.next(3)
      }, 3000)
      setTimeout(() => {
        observer.next(4)
      }, 4000)
    })

    return this.data
  }

  getUsers(): Observable<User[]> {
    return of(this.users)
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
}
