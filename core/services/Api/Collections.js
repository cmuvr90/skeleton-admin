export default class Collections {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/collections'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
