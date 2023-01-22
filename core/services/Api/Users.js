export default class Users {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/users'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
