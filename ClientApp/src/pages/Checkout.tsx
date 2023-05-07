import React, { useState } from "react";
import UnderConstruction from "../images/UnderConstruction.png";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Props = {
  products: Product[];
};

const CheckoutPage: React.FC<Props> = ({ products }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleAddToCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingCartItem && existingCartItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.product.id !== product.id));
    } else if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCompleteCheckout = () => {
    setCheckoutComplete(true);
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  return (
    <div className="container mx-auto my-8 ">
      <h1 className="mb-8 text-2xl font-bold">Checkout Page</h1>
      <img
        alt="Under Construction"
        src={UnderConstruction}
        className="h-[50px] w-[140px]"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="mb-4 text-xl font-bold">Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id} className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{product.name}</p>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Cart</h2>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((cartItem) => (
                  <li key={cartItem.product.id} className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{cartItem.product.name}</p>
                        <p className="text-gray-500">
                          ${cartItem.product.price.toFixed(2)} x{" "}
                          {cartItem.quantity}
                        </p>
                      </div>
                      <div>
                        <button
                          className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
                          onClick={() => handleRemoveFromCart(cartItem.product)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-bold">Total:</p>
                <p className="font-bold">${total.toFixed(2)}</p>
              </div>
              <button
                className="mt-4 rounded bg-green-500 px-2 py-1 font-bold text-white hover:bg-green-700"
                onClick={handleCompleteCheckout}
              >
                Complete Checkout
              </button>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      {checkoutComplete && (
        <div className="mt-8 rounded border border-green-500 bg-green-100 p-4">
          <p className="font-bold text-green-700">Checkout complete!</p>
          <p>Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
