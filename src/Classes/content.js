
export default class content {
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
  
    show() {
      console.log(`title ${this.title} and description ${this.description}`);
    }
  }
  