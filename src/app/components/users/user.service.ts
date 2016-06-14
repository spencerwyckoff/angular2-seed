/*tslint:disable: */

/**
 * UserData Service
 */

export class UserService {
  public createDb(): any {
    const users: any[] = [
      {
        id: '1',
        name: 'Windstorm',
        password: 'windst0rm',
        username: 'windstorm',
      }, {
        id: '2',
        name: 'Bombasto',
        password: 'b0mbast0',
        username: 'bombasto',
      }, {
        id: '3',
        name: 'Magneta',
        password: 'm@gent@',
        username: 'magneta',
      }, {
        id: '4',
        name: 'Tornado',
        password: 't0rnad0',
        username: 'tornado',
      },
    ];

    return {users};
  }
}
