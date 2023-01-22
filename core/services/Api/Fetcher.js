export default class Fetcher {

  /**
   *
   * @param credentials
   */
  constructor(credentials) {
    this.baseUrl = credentials.url;
  }

  /**
   *
   * @param url
   * @param query
   * @returns {Promise<*>}
   */
  async get(url, query) {
    return await this._fetch(url, query);
  }

  /**
   *
   * @param url
   * @param params
   * @returns {Promise<*>}
   */
  async post(url, params) {
    return await this._fetch(url, {}, params);
  }

  /**
   *
   * @param url
   * @param params
   * @returns {Promise<*>}
   */
  async put(url, params) {
    return await this._fetch(url, {}, params);
  }

  /**
   *
   * @param url
   * @param params
   * @returns {Promise<*>}
   */
  async delete(url, params) {
    return await this._fetch(url, {}, params);
  }

  /**
   *
   * @param url
   * @param query
   * @param params
   * @returns {Promise<any>}
   * @private
   */
  async _fetch(url = '/', query = {}, params = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${url}${this.prepareQuery(query)}`, params);

      if (response !== null && typeof response !== 'undefined' && response?.ok) {
        const responseData = await response.json();
        // console.log(`RESPONSE JSON: ${JSON.stringify(responseData, null, 2)}`);
        return responseData;
      }

    } catch (e) {
      throw new Error(`[FETCHER]${e.message || e}`);
    }
  }

  /**
   *
   * @param queries
   * @returns {string|string}
   */
  prepareQuery(queries) {
    let values = [];
    for (let key in queries) {
      if (queries.hasOwnProperty(key) && queries[key] !== null && queries[key] !== '') {
        values.push(`${key}=${queries[key]}`);
      }
    }
    return values.length > 0 ? '?' + values.join('&') : '';
  }
}
