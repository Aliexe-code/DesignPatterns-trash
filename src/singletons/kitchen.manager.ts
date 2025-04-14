class KitchenManager {
    private static instance: KitchenManager;
    private inventory: Record<string, number> = {};
    private orders: string[] = [];
  
    private constructor() {
      // Initialize with some stock
      this.inventory = {
        cheese: 10,
        chicken: 10,
        dough: 10,
        pepperoni: 10,
        basil: 10,
      };
    }
  
    // Returns the single instance of KitchenManager
    public static getInstance(): KitchenManager {
      if (!KitchenManager.instance) {
        KitchenManager.instance = new KitchenManager();
      }
      return KitchenManager.instance;
    }
  
    // Method to add inventory
    addInventory(item: string, quantity: number) {
        if (this.inventory[item] !== undefined) {
          // Item exists, so we can add to it
          this.inventory[item] += quantity;
        } else {
          // Item doesn't exist, so we create it
          this.inventory[item] = quantity;
        }
      }
  
    // Method to place an order
    placeOrder(pizzaName: string) {
      this.orders.push(pizzaName);
      console.log(`📝 Order placed for: ${pizzaName}`);
    }
  
    // Check if enough ingredients are in stock
    checkInventory(item: string, quantity: number): boolean {
      if (!this.inventory) return false;
      return (this.inventory[item] ?? 0) >= quantity;
    }
  
    // Serve order (simplified)
    serveOrder() {
      const order = this.orders.shift();
      console.log(`🍽️ Serving order: ${order}`);
    }
  
    // Display inventory
    displayInventory() {
      console.log("🛒 Current Inventory:", this.inventory);
    }
  }
  
  export { KitchenManager };
