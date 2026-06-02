import type { CartItem } from "@/features/playground/components/StateChallenge";

interface ShoppingCartProps {
  item: CartItem;
  onQuantityChange: (itemId: number, delta: number) => void;
}

export function ShoppingCart({ item, onQuantityChange }: ShoppingCartProps) {
  const totalPrice = item.price * item.quantity;

  return (
    <div className="p-4 bg-gray-200 rounded-lg flex flex-col items-start gap-2">
      <p>Name: {item.name}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <div className="flex items-center gap-2">
        <button
          className={`px-4 py-1 rounded-md  text-white ${item.quantity === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
          onClick={() => onQuantityChange(item.id, -1)}
          disabled={item.quantity === 0}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          className="px-4 py-1 rounded-md bg-blue-500 text-white"
          onClick={() => onQuantityChange(item.id, 1)}
        >
          +
        </button>
      </div>
      <p className="bg-gray-100 p-2 rounded-md">
        Total Price: ${totalPrice.toFixed(2)}
      </p>
    </div>
  );
}
