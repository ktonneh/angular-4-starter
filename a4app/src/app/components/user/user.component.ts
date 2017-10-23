import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name = 'The Commander';
  name : string;
  age: number;
  email: string;
  address:Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log('Constructor run!!');
  }
  ngOnInit() {
    console.log('ngOnInit run!!');
    this.name = 'The Commander!';
    this.age = 30;
    this.email= 'doe@gmail.com';
    this.address = {
      street: 'Jemimah Rd',
      city: 'Nairobi',
      state: 'Nairobi'
    };

    this.hobbies = ['swimming','football','Tennis'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

  }

  onClick(){
    alert('Hello '+this.name);
    this.hobbies.push('Coding manenos');
  }


  saveHobby(hobby){
    console.log(hobby);
    //this.hobbies.push(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (let i=0;i < this.hobbies.length; i++){
      if (hobby == this.hobbies[i]){
        this.hobbies.splice(i,1);
      }
    }

    return false;
  }

  toggleEdit(){
    this.isEdit =! this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  userid: number,
  title: string,
  body: string
}
