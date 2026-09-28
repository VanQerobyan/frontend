"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AddedUser } from "../(helpers)/types";
import { AboutValidator, AgeValidator, GenderValidator, LocationValidator, NameValidator, SalaryValidator, SurnameValidator } from "../(helpers)/validators";
import axios from "axios";
import { useState } from "react";

export default function AddUser() {

    const {register, handleSubmit, formState:{errors}, reset} = useForm<AddedUser>()
    const [error, setError] = useState("");

    const handleAddUser = (data: AddedUser) => {
        axios
        .post("/api/route", data)
        .then(() => {
            setError("");
            reset();
        })
        .catch((err) => {
            if(axios.isAxiosError(err)) {
                setError(err.response?.data.message);
            }
        })
    }
return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_38%),linear-gradient(to_bottom,_#020617,_#0f172a)] px-6 py-10 text-white">

        <div className="mx-auto max-w-xl">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                        Add User
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        Create a new user profile
                    </p>
                </div>

                <Link
                    href={"/users"}
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07] hover:text-indigo-300"
                >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                    </span>
                    Home
                </Link>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">

                {error && (<p className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-400">{error}</p>)}

                <form
                    onSubmit={handleSubmit(handleAddUser)}
                    className="space-y-5"
                >

                    {errors.name?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.name.message}</p>)}

                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        {...register("name", NameValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    {errors.surname?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.surname.message}</p>)}

                    <label htmlFor="surname" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Surname
                    </label>

                    <input
                        id="surname"
                        type="text"
                        placeholder="Surname"
                        {...register("surname", SurnameValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    {errors.age?.message && (
                        <p className="mt-1.5 text-xs font-medium text-red-400">{errors.age.message}</p>)}

                    <label htmlFor="age" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Age
                    </label>

                    <input
                        id="age"
                        type="number"
                        placeholder="Age"
                        {...register("age", AgeValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    {errors.salary?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.salary.message}</p>)}

                    <label htmlFor="salary" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Salary
                    </label>

                    <input
                        id="salary"
                        type="number"
                        placeholder="Salary"
                        {...register("salary", SalaryValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    {errors.gender?.message && ( <p className="mt-1.5 text-xs font-medium text-red-400">{errors.gender.message}</p>)}

                    <select
                        {...register("gender", GenderValidator)}
                        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    >
                        <option value="">Choose gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    {errors.location?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.location.message}</p>)}

                    <label htmlFor="location" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Location
                    </label>

                    <input
                        id="location"
                        type="text"
                        placeholder="Location"
                        {...register("location", LocationValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    {errors.about?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.about.message}</p>)}

                    <label htmlFor="about" className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        About
                    </label>

                    <input
                        id="about"
                        type="text"
                        placeholder="About"
                        {...register("about", AboutValidator)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20"
                    >
                    </input>

                    <button type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 active:translate-y-0"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}