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
  enableAdd: boolean = true
 
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
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
          image: 'http://picsum.photos/200/200/?random'
        },
        {
          firstName: 'Joe',
          lastName: 'Blake',
          image: 'http://picsum.photos/g/200/200/?random'
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
          image: 'http://picsum.photos/200/200/'
        }
      ]

      this.loaded = true
    })
    
    // this.showExtended = false

    // this.addUser({
    //   firstName: 'Trade',
    //   lastName: 'Minister',
    //   age: 53,
    //   address: {
    //     street: '1400 Verdanne',
    //     city: 'San Francisco',
    //     state: 'CA'
    //   }
    // })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
