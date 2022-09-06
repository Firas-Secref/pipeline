import {Component, ViewChild} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    let dev1 = {name: "firas", skills: { prim: 'full', sec: 'devops'}}

    // let dev2 = dev1 shallow copy
    // let dev2 = Object.assign({}, dev1) // shallow copy
    // let dev2 = {...dev1} shallow copy(deep copy until we have a nested object )
    // let dev2 = JSON.parse(JSON.stringify(dev1)) // shallow copy (deep copy if we have only strings )
    let dev2 = _.cloneDeep(dev1)
    dev2.name = "aazea"
    dev2.skills.prim = "one other"


    console.log(dev1)
    console.log(dev2)

    console.log("----------------------")
    const people = [{firstname: "dom", lastname: "azer", age: 35}, {firstname: "amy", lastname : "aiehkl", age: 26}, {firstname: "bruxe", lastname: "fdfgf", age: 55}]

    const names = people.map(person=>{
      return person.firstname
    })
    const name1 = people.filter(person=>{
      return person.age >=30
    }).map(p=>{
      return p.lastname
    })
    console.log(name1)

    const name3 = people.reduce((total, person) => {
      return total+person.age
    },3)
    console.log(name3)

    for (var i = 0; i < 5; i++) {
      console.log("Inside the loop:", i);
    }

    console.log("Outside the loop:", i);

    this.say("bonjour");
    this.testDots(12, 4, {name: 'firas'}, {name: "azgkj"})
    console.log(this.createMachine("firas", "secref"))

    let colors = ['red', 'green', 'blue']

    for (const c in colors){
      console.log(c)
    }
  }
  say(message="helo"){
    console.log(arguments.length)
    console.log(message)
  }



  testDots(a: any, b: any, ...args: any[]){
    console.log(a, " ..... ", b)
    for(const a of args){
      console.log(a.name+"..")
    }
    const names = args.map(a=>{
      console.log(a.name)
    })
  }

  createMachine(name: any, status: any) {
    return {
      name,
      status
    };
  }


}
