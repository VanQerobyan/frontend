import type { BasketItem } from "../types/Types";

type BasketProps = {
  basket: BasketItem[];
  quantityUp: (items: BasketItem) => void;
  quantityDown: (items: BasketItem) => void;
  deleteProduct: (items: BasketItem) => void;
};

export const Basket = (props: BasketProps) => {
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-200/80 p-4 shadow-sm">
      <h3 className="mb-4 text-center text-2xl font-bold text-stone-800">Basket</h3>

      {props.basket.length === 0 ? (
        <div className="rounded-2xl border-stone-400 px-3 py-8 text-center text-sm text-stone-500">Your basket is empty</div>) : (
        <div className="flex max-h-[calc(100vh-180px)] flex-col gap-2 overflow-y-auto pr-1">
          {props.basket.map((items) => (
            <div
              key={items.id}
              className="rounded-2xl border border-stone-300 bg-stone-300 p-3 shadow-sm transition-all duration-200 hover:border-stone-400 hover:shadow-md">
              
              <div className="mb-2 flex items-start justify-between gap-2">
                <h4 className="min-w-0 text-sm font-semibold leading-5 text-stone-800">{items.name}</h4>

                <span className="shrink-0 text-sm font-bold text-indigo-700">{items.price * items.quantity} USD</span>
              </div>

              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="min-w-0 truncate rounded-lg bg-stone-200 px-2 py-1 text-xs font-medium text-stone-600">{items.color.join(" ")}</span>

                <span className="shrink-0 rounded-lg bg-stone-200 px-2 py-1 text-xs font-semibold text-stone-600">x{items.quantity}</span>
              </div>

              <div className="flex items-center justify-end gap-1.5">
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 transition-colors duration-200 hover:bg-indigo-200"
                  onClick={() => props.quantityUp(items)}>+</button>

                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 transition-colors duration-200 hover:bg-indigo-200"
                  onClick={() => props.quantityDown(items)}>−</button>

                <button
                  type="button"
                  onClick={() => props.deleteProduct(items)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 transition-colors duration-200 hover:bg-red-200">X</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};