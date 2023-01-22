export default class Variants {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/variants'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
