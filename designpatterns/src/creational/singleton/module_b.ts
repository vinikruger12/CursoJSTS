import { MyDatabaseModule } from "./db/my-database-module";
import './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({name: "Rogerio", age: 18});
myDatabaseClassic.show();