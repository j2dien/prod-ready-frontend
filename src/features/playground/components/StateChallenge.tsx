import { Card } from "@/components/Card";
import { ShoppingCart } from "@/components/ShoppingCart";
import { useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function StateChallenge() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
    { id: 2, name: "Headphone", price: 199.99, quantity: 1 },
  ]);

  const handleQuantityChange = (itemId: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + delta),
            }
          : item,
      ),
    );
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <Card title="Shopping Cart">
        <div className="flex items-center gap-2">
          {cartItems.map((item) => (
            <ShoppingCart
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
