class Database {

  private static database: Database;

  private host: string;
  private user: string;
  private password: string;

  constructor(host: string, user: string, password: string){
    this.host = host;
    this.user = user;
    this.password = password;
  }

  connect():void{
    console.log("Conectado " + this.host + ", " + this.user + ', ' + this.password);
  }

  static getDatabase(host: string, user: string, password: string):Database{
    if(Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

}

const db = Database.getDatabase('localhost', 'root', '123456');
db.connect();
