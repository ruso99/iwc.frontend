import { observable, action } from 'mobx';

export default class addStore {
  @observable number = 0;
  @observable illustFile = null;
  @observable descriptionInput = '';

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}