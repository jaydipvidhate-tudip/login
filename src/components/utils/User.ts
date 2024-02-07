export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;


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