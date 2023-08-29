// In the models/category.model.ts file

export class Category {
  id: number;
  name: string;
  imageUrl?: string;
  // Add other properties and methods as needed

  constructor(id: number, name: string, imageUrl?: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
