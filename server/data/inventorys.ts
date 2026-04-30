interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  ownerId: number;
}

const inventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: "Laptop",
    quantity: 5,
    price: 1200,
    ownerId: 1,
  },
  {
    id: 2,
    name: "Keyboard",
    quantity: 15,
    price: 80,
    ownerId: 2,
  },
  {
    id: 3,
    name: "Mouse",
    quantity: 25,
    price: 40,
    ownerId: 2,
  },
  {
    id: 4,
    name: "Monitor",
    quantity: 7,
    price: 300,
    ownerId: 1,
  },
];

export default inventoryItems