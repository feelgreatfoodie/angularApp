import { Injectable } from '@angular/core';

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]

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

  getUsers(): User[] {
    console.log('Fetching users from service...')
    return this.users
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
}
