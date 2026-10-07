"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import type { Product } from "./(lib)/types"
import Link from "next/link";

export default function Product() {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Product[]>("/api/products")
      .then((response) => {
        setError("");
        setProducts(response.data)
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message);
        }
      })
  }, [])

  const handelDelete = (id: number) => {
    axios
      .delete(`/api/${id}`)
      .then((response) => {
        setProducts(prevProducs => prevProducs.filter(product => product.id !== Number(id)));
      })
      .catch((err) => {
        if(axios.isAxiosError(err)) {
          setError(err.response?.data.message);
        }
      })
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Products
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Total products: {products.length}
            </p>
          </div>

          <Link
            href="/products/add"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            Add Product
          </Link>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Id</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {products.map(product =>
                  <tr
                    key={product.id}
                    className="transition hover:bg-white/[0.03]"
                  >
                    <th className="px-4 py-4 font-medium text-slate-400">
                      {product.id}
                    </th>

                    <th className="px-4 py-4 font-medium text-white">
                      {product.name}
                    </th>

                    <th className="max-w-[220px] px-4 py-4 font-normal text-slate-400">
                      {product.description}
                    </th>

                    <th className="px-4 py-4 font-medium text-emerald-400">
                      ${product.price}
                    </th>

                    <th className="px-4 py-4 font-normal text-slate-300">
                      <span className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs text-indigo-300">
                        {product.category}
                      </span>
                    </th>

                    <th className="px-4 py-4 font-normal text-slate-300">
                      {product.stock_quantity}
                    </th>

                    <td className="px-4 py-3">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-11 w-11 rounded-lg object-cover ring-1 ring-white/10"
                      />
                    </td>

                    <th className="whitespace-nowrap px-4 py-4 font-normal text-slate-400">
                      {new Date(product.created_at).toLocaleString()}
                    </th>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/products/${product.id}/update`}
                          className="rounded-md bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition hover:bg-indigo-500/20 hover:text-indigo-200"
                        >
                          Update
                        </Link>

                        <button
                          onClick={() => handelDelete(product.id)}
                          className="rounded-md bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}