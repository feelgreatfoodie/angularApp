import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[]
  showExtended: boolean = false
  loaded: boolean = false
  enableAdd: boolean = true
  currentClasses: {}
  currentStyles: {}
 
  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Smith',
          age: 29,
          address: {
            street: '11503 34th St',
            city: 'New York',
            state: 'NY'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Joe',
          lastName: 'Blake',
          isActive: false
        },
        {
          firstName: 'Juliana',
          lastName: 'Crane',
          age: 29,
          address: {
            street: '503 Post St',
            city: 'San Francisco',
            state: 'CA'
          },
          isActive: true,
          registered: new Date('03/12/2018 16:10:00')
        }
      ]

      this.loaded = true    
  }

  addUser(user: User) {
    this.users.push(user)
  }

  fireEvent(e) {
    console.log(e.type)
  }

}
