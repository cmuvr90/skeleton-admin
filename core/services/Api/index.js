import Fetcher from './Fetcher'
import Users from './Users'

export default class Api {
  constructor(credentials = {}) {
    const fetcher = new Fetcher({
      url: 'http://localhost:3000/api/v1',
      ...credentials
    });
    this.users = new Users(fetcher);
  }
}
