export default class Products {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/products'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
