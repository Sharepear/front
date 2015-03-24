import {Component, Template, If} from 'angular2/angular2';

import {GadgetInput} from 'hello_app/byevents/GadgetInput';
import {GadgetList} from 'hello_app/byevents/GadgetList';

import {FriendsService} from 'hello_app/FriendsService';

import {FriendInput} from 'hello_app/byservice/FriendInput';
import {FriendList} from 'hello_app/byservice/FriendList';

import {PetList} from 'hello_app/byinjection/PetList';
import {PetInput} from 'hello_app/byinjection/PetInput';

import {Draggable} from 'hello_app/draggable/Draggable';


@Component({
  selector: 'hello',
  services: [FriendsService]
})
@Template({
  url: `hello_app/hello.html`,
  directives: [GadgetInput, GadgetList, FriendInput, FriendList, PetInput, PetList, Draggable]
})
export class Hello {

  constructor() {
  }

}
