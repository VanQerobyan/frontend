"use client"

import { useForm } from "react-hook-form"
import { AddedProduct } from "../../(lib)/types"
import { CategoryValidator, NameValidator, PriceValidator, StockValidator } from "../../(lib)/Validators"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"

export default function AddProducts() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddedProduct>()
    const [error, setError] = useState("");

    const handelAdd = (data: AddedProduct) => {
        axios
            .post("/api/products", data)
            .then(() => {
                setError("");
                reset();
            })
            .catch((err) => {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data.message);
                }
            })
    }

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-xl">

                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-400 transition hover:text-indigo-400"
                    >
                        ← Products
                    </Link>
                </div>

                <div className="mb-7">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Add Product
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        Add a new product to your catalog
                    </p>
                </div>

                {error && (
                    <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit(handelAdd)}
                    className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl"
                >

                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Product name"
                            {...register("name", NameValidator)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                        />
                        {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="desc" className="mb-2 block text-sm font-medium text-slate-300">
                            Description
                        </label>
                        <input
                            id="desc"
                            type="text"
                            placeholder="Short product description"
                            {...register("description")}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                        />
                        {errors.description && <p className="mt-1.5 text-sm text-red-400">{errors.description.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                        <div>
                            <label htmlFor="price" className="mb-2 block text-sm font-medium text-slate-300">
                                Price
                            </label>
                            <input
                                id="price"
                                type="text"
                                placeholder="0.00"
                                {...register("price", PriceValidator)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                            />
                            {errors.price && <p className="mt-1.5 text-sm text-red-400">{errors.price.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="stock" className="mb-2 block text-sm font-medium text-slate-300">
                                Stock
                            </label>
                            <input
                                id="stock"
                                type="number"
                                placeholder="0"
                                {...register("stock_quantity", StockValidator)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                            />
                            {errors.stock_quantity && <p className="mt-1.5 text-sm text-red-400">{errors.stock_quantity.message}</p>}
                        </div>

                    </div>

                    <div>
                        <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-300">
                            Category
                        </label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Electronics"
                            {...register("category", CategoryValidator)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                        />
                        {errors.category && <p className="mt-1.5 text-sm text-red-400">{errors.category.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="img" className="mb-2 block text-sm font-medium text-slate-300">
                            Image URL
                        </label>
                        <input
                            id="img"
                            type="text"
                            placeholder="https://..."
                            {...register("image_url")}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                        />
                        {errors.image_url && <p className="mt-1.5 text-sm text-red-400">{errors.image_url.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 active:scale-[0.99]"
                    >
                        Add Product
                    </button>

                </form>
            </div>
        </main>
    )
}