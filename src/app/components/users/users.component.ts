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
          image: 'http://picsum.photos/200/200/?random',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Joe',
          lastName: 'Blake',
          image: 'http://picsum.photos/g/200/200/?random',
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
          image: 'http://picsum.photos/200/200/',
          isActive: true,
          balance: 420,
          registered: new Date('03/12/2018 16:10:00')
        }
      ]

      this.loaded = true
      this.setCurrentClasses()
      this.setCurrentStyles()
    
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

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
