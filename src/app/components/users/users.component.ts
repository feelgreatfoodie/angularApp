import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[]
  showExtended: boolean = true
  loaded: boolean = false
 
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Smith'
        },
        {
          firstName: 'Joe',
          lastName: 'Blake'
        },
        {
          firstName: 'Juliana',
          lastName: 'Crane',
          age: 29,
          address: {
            street: '503 Post St',
            city: 'San Francisco',
            state: 'CA'
          }
          }
      ]

      this.loaded = true
    }, 2000)
    
    // this.showExtended = false

    this.addUser({
      firstName: 'Trade',
      lastName: 'Minister',
      age: 53,
      address: {
        street: '1400 Verdanne',
        city: 'San Francisco',
        state: 'CA'
      }
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
