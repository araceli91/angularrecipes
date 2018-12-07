export class Recipe {
  public name: string;
  public description: string;
  public imagepath: string;
  public liked: boolean;

  constructor(name: string, desc: string, img: string, liked: boolean = false) {
    this.name = name;
    this.description = desc;
    this.imagepath = img;
    this.liked = liked;
  }
  // tslint:disable-next-line:eofline
}
