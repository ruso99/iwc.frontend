import { observable, action } from 'mobx';

export default class PictureStore {
  @observable number = 0;
  @observable selectedFile = null;

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}