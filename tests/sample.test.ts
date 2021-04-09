import { describe } from 'mocha';
import { expect } from 'chai';
import { Product, Supply } from '../src/app/data/models'

describe('Calculate amount', function() {
  it('product', function() {
    const product = new Product({name: 'samsung note 30', description: 'New Samsung cellphone', amount: 1000});
    const amount = (<any>product).getAmount(product)
    expect(amount).equal(1400);
  });

  it('supply', function() {
    const supply = new Supply({name: 'screen', description: 'New Samsung screen', amount: 1000});
    const amount = (<any>supply).getAmount(supply)
    expect(amount).equal(1200);
  });
});