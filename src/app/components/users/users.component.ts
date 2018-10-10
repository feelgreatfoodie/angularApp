import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  
  users: User[]
  showExtended: boolean = true
  loaded: boolean = false
  enableAdd: boolean = true
  showUsersForm: boolean = false
 
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
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Joe',
          lastName: 'Blake',
          isActive: false,
          registered: new Date('11/15/2016'),
          hide: true
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
          registered: new Date('03/12/2018 16:10:00'),
          hide: true
        }
      ]

      this.loaded = true    
  }

  addUser(user: User) {
    this.user.isActive = true
    this.user.registered = new Date()
    this.users.unshift(this.user)

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }

  toggleHide(user) {
    user.hide = !user.hide
  }

  onSubmit(e) {
    console.log('hola')
    e.preventDefault()
  }

  fireEvent(e) {
    console.log(e.target.value)
    console.log(e.type)
  }

}
