import { useState } from "react";
import type { ProductItem } from "../types/Types";

type ProductProps = {
  addToBasket: (products: ProductItem) => void;
};

export const Product = (props: ProductProps) => {
  const [products] = useState<ProductItem[]>([
    { id: 1, name: "ASUS ROG Strix", price: 3500, color: ["Black", "White"], picture: "https://dlcdnwebimgs.asus.com/gain/36EB3407-3A9F-49BB-84BC-942642011B4A"},
    { id: 2, name: "Lenovo Legion 5", price: 2200, color: ["Black", "Gray"], picture: "https://www.smartbox.am/webroot/cropper.php?src=/webroot/myfiles/images/V15G52.jpg&w=800&h=800"},
    { id: 3, name: "Lenovo IdeaPad Slim 3", price: 950, color: ["Gray", "White"], picture: "https://p3-ofp.static.pub/fes/cms/2022/12/28/lnfmv13jwu5nb0xzzmczeytk58lh6e366455.png"},
    { id: 4, name: "Lenovo LOQ 17IRX10", price: 3500, color: ["Black", "White"], picture: "https://mtech.am/assets/images/ac/ac042b_3158-1.webp"},
    { id: 5, name: "HP Laptop 17", price: 800, color: ["Gray", "White", "Black"], picture: "https://images.openai.com/static-rsc-4/U__2w4aH-jMc0tdVoD0vZIX9Ho2FvFL4x5OxRUs3QX4pYjg2b7DiflX9KiG6voFkem0e3jDMkhA0NQi6HFZVh98N0rA2et_hvQ1GeXX3o6gJqw2I3s9jmLhOhqQd5hk3zuqwVyEUZSXs9z2Ksky-E0ayVRPU-rUaTAZ-wmAnHnIkjzq4pgw6_qdv1kFfGmTn?purpose=fullsize"},
    { id: 6, name: "ASUS Vivobook S16 Flip", price: 1200, color: ["Gray"], picture: "https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2026/07/ASUS-Vivobook-S16-M3607GA-SH157W.webp"},
    { id: 7, name: "HP OMEN MAX Gaming Laptop 16", price: 5500, color: ["Gray", "Black"], picture: "https://hyperx.com/cdn/shop/files/25c1_omen_16_shadow_20black_nt_hd_20cam_non_20fpr_b2_bd1_d2_rgb_valorant_20screen_core_20set_front_3552906.jpg?v=1787066296"},
    { id: 8, name: "HP ProBook 440 G10", price: 1000, color: ["Black", "Gray"], picture: "https://mtech.am/assets/images/98/98729e_HP-ProBook-440-G10-1.webp"},
    { id: 9, name: "Lenovo ThinkPad E16 Gen 2", price: 2800, color: ["Black"], picture: "https://mtech.am/assets/images/a7/a732a8_Lenovo-ThinkPad-E16-Gen-2-21MA002XRT-1.webp"}
  ]);

  return (
    <div className="w-full">
      <h2 className="mb-9 text-center text-3xl font-bold tracking-tight text-stone-800">Our Products</h2>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg">
            
<div className="flex h-60 w-full items-center justify-center overflow-hidden bg-stone-200 p-5">
  <img
    src={product.picture}
    alt={product.name}
    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"/>
</div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
              <h3 className="mb-4 min-h-12 text-lg font-semibold leading-6 text-stone-800">{product.name}</h3>

              <div className="mb-6 flex flex-col gap-3">
                <span className="text-xl font-bold text-blue-600 ">{product.price} USD</span>

                <span className="w-fit rounded-lg bg-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600">Color: {product.color.join(" ")}</span>
              </div>

              <button
                type="button"
                onClick={() => props.addToBasket(product)}
                className="mt-auto w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};