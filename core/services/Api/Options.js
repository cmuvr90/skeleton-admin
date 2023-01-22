export default class Options {

  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  PREFIX = '/options'

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async list(query = {}) {
    return await this.fetcher.get(`${this.PREFIX}/list`, query)
  }
}
