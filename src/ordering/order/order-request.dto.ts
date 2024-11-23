import { Beverage } from '../../beverage.dto';

export class OrderRequest {
  order: Map<Beverage, number>;
}
