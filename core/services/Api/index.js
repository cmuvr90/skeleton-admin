import Fetcher from './Fetcher'
import Users from './Users'
import Brands from './Brands';
import Categories from './Categories';
import Collections from './Collections';
import Options from './Options';
import Products from './Products';
import Variants from './Variants';

export default class Api {
  constructor(credentials = {}) {
    const fetcher = new Fetcher({
      url: 'http://localhost:3000/api/v1',
      ...credentials
    });
    this.users = new Users(fetcher);
    this.brands = new Brands(fetcher);
    this.categories = new Categories(fetcher);
    this.collections = new Collections(fetcher);
    this.options = new Options(fetcher);
    this.products = new Products(fetcher);
    this.variants = new Variants(fetcher);
  }
}
