export function GetAmount(hasGain: Boolean) {
  return function (constructor: Function) {
    constructor.prototype.getAmount = function (item) {
      const iva: number = 0.2
      let totalAmount: number = item.amount + item.amount * iva
      if (hasGain) {
        const gain: number = 0.2
        totalAmount = totalAmount + item.amount * gain
      }
      return totalAmount
    }
  }
}