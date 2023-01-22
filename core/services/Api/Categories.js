export default class Categories {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/categories'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
