export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;

  // static generate(name: string, email: string, password: string) {
  //   return {
  //     _id: new Realm.BSON.ObjectId(),
  //     name,
  //     email,
  //     password,
  //   };
  // }

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      email: 'string',
      password: 'string',
    },
  };
}