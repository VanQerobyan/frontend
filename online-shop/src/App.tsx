import { useState } from "react";
import { Basket } from "./components/Basket";
import { Product } from "./components/Product";
import type { BasketItem, ProductItem } from "./types/Types";


export function App() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (items: ProductItem) => {
    setBasket((prevProducts) => {
      const existsProduct = prevProducts.find((item) => item.id === items.id);

      if (existsProduct) {
        return prevProducts.map((item) => {
          if (item.id === items.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
      } else {
        return [...prevProducts,{...items, quantity: 1}];
      }
    });
  };

  const quantityUp = (items: BasketItem) => {
    setBasket((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === items.id) {
          return {...product, quantity: items.quantity + 1};
        } else {
          return {...product};
        }
      });
    });
  };

  const quantityDown = (items: BasketItem) => {
    setBasket((prevProduct) => {
      return prevProduct
        .filter((product) =>!(product.id === items.id && product.quantity === 1))
        .map((product) => {
          if (product.id === items.id) {
            return {...product, quantity: product.quantity - 1};
          } else {
            return {...product};
          }
        });
    });
  };

  const deleteProduct = (items: BasketItem) => {
    setBasket((prevProduct) => {
      return prevProduct.filter((product) => product.id !== items.id);
    });
  };

  return (
    <main className="min-h-screen w-full bg-stone-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
      
        <section className="min-w-0">
          <Product addToBasket={addToBasket} />
        </section>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <Basket
            deleteProduct={deleteProduct}
            quantityDown={quantityDown}
            quantityUp={quantityUp}
            basket={basket}
          />
        </aside>
      </div>
    </main>
  );
}