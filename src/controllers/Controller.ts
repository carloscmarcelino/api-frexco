import { Request, Response } from 'express';
import { products } from '../products';

export default class Controller {
  static async getFruits(req: Request, res: Response) {
    if (products.length !== 0) {
      res.status(200).json(products);
      return;
    } else {
      res.status(404).json({ mensage: 'Not found!' });
      return;
    }
  }

  static async getFruit(req: Request, res: Response) {
    const name = req.params.name;
    let nameDidSearch = { name: '' };
    products.map((item: any) => {
      if (item.name === name) {
        nameDidSearch = item;
      }
    });

    if (nameDidSearch.name !== '') {
      res.status(200).json({ nameDidSearch });
      return;
    }
    res.status(500).json({ mensage: 'Not found!' });
    return;
  }
}
