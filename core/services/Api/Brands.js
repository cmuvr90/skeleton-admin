export default class Brands {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/brands'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
