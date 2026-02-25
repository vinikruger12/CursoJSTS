import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({name: "Vinicius", age: 18});
myDatabaseClassic.show();

export { myDatabaseClassic };