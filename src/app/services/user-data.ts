/*tslint:disable: */

/**
 * UserData Service
 */

export class UserData {
  public createDb(): any {
    const users: any[] = [
      {
        id: '1',
        name: 'Windstorm',
        password: '',
        username: '',
      }, {
        id: '2',
        name: 'Bombasto',
        password: '',
        username: '',
      }, {
        id: '3',
        name: 'Magneta',
        password: '',
        username: '',
      }, {
        id: '4',
        name: 'Tornado',
        password: '',
        username: '',
      },
    ];

    return {users};
  }
}
