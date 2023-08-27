// In the models/category.model.ts file

export class Category {
  id: number;
  name: string;
  // Add other properties and methods as needed

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
