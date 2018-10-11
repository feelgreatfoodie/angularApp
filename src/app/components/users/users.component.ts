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
    email: ''
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
          email: 'john@gnr.de',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Joe',
          lastName: 'Blake',
          email: 'waffleJoe@gnr.de'
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

      this.loaded = true    
  }

  addUser(user: User) {
    this.user.isActive = true
    this.user.registered = new Date()
    this.users.unshift(this.user)

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  // onSubmit(e) {
  //   console.log('hola')
  //   e.preventDefault()
  // }


}
