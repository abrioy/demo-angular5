export class User {
  id: string = null;
  accessRights: any;
  routeRights: any;
}

export class Users {
  static RIGHTS = {
    admin: {
      id: 'admin',
      accessRights: {
        'EVERYONE': true,
        'AUTHENTICATED': true,
        'menu.settings': true,
        'food.create': true,
        'food.delete': true,
      },
      routeRights: [
        '.*'
      ]
    },
    user: {
      id: 'user',
      accessRights: {
        'EVERYONE': true,
        'AUTHENTICATED': true,
      },
      routeRights: [
        '^/logout$',
        '^/home$',
        '^/contact$',
        '^/menu/?.*$'
      ]
    },
    guest: {
      id: 'guest',
      accessRights: {
        'EVERYONE': true,
        'UNAUTHENTICATED': true,
      },
      routeRights: [
        '^/home$',
        '^/contact$',
        '^/menu/?.*$',
        '^/register$',
      ]
    }
  };
}


