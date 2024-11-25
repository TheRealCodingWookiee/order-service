import { Beverage } from '../business/beverage.dto';

export class OrderRequest {
  order: Map<Beverage, number>;
}
