import users from "./data/users.ts"
import inventoryItems from "./data/inventorys.ts"


const calculateInventoryValue = () => {
  return inventoryItems.reduce((total, item) => total + item.quantity * item.price, 0);
}

const outOfStockItems = () => {
  return inventoryItems.filter(item => item.quantity === 0);
}

console.log(calculateInventoryValue())
console.log(outOfStockItems())