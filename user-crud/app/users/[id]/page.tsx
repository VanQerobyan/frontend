"use client"

import { AddedUser, User } from "@/app/(helpers)/types";
import { AboutValidator, AgeValidator, GenderValidator, LocationValidator, NameValidator, SalaryValidator, SurnameValidator } from "@/app/(helpers)/validators";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditUser() {

    const {id} = useParams();
    const [user, setUser] = useState<User>();
    const [error, setError] = useState("");
    const {register, handleSubmit, formState:{errors}, reset} = useForm<AddedUser>()

    useEffect(() => {
        axios
        .get<{user: User}>(`/api/route/${id}`)
        .then((response) => {
            setError("");
            setUser(response.data.user)
            reset(response.data.user)
        })
        .catch((err) => {
            if(axios.isAxiosError(err)) {
                setError(err.response?.data.message);
            }
        })
    },[])


    const handleEditUser = (data: AddedUser) => {

        axios
        .patch<{editedUser: User}>(`/api/route/${id}`, data)
        .then((response) => {
            setError("");
            setUser(response.data.editedUser)
        })
        .catch((err) => {
            if(axios.isAxiosError(err)) {
                setError(err.response?.data.message);
            }
        })
    } 

    return(
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%),#020617] px-6 py-12 text-white">

            <div className="mx-auto max-w-2xl">

                {error && (<p className="mt-1.5 text-xs font-medium text-red-400">{error}</p>)}

                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href={"/users"}
                        className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:bg-white/10 hover:text-white"
                    >
                        ← Home
                    </Link>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                        User #{id}
                    </div>
                </div>

                <form 
                    onSubmit={handleSubmit(handleEditUser)}
                    className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >

                    <div className="mb-8">
                        <p className="mb-1 text-sm font-medium text-indigo-300">
                            Edit profile
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            {user?.name} {user?.surname}
                        </h2>
                    </div>

                        {errors.name?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.name.message}</p>)}
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-300"
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

                    <label
                        htmlFor="surname"
                        className="mb-2 block text-sm font-medium text-slate-300"
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

                    <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                               {errors.age?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.age.message}</p>)}

                            <label
                                htmlFor="age"
                                className="mb-2 block text-sm font-medium text-slate-300"
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
                        </div>

                        <div>
                               {errors.salary?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.salary.message}</p>)}

                            <label
                                htmlFor="salary"
                                className="mb-2 block text-sm font-medium text-slate-300"
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
                        </div>

                    </div>

                    <div>
                           {errors.gender?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.gender.message}</p>)}

                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Gender
                        </label>

                        <select 
                            {...register("gender", GenderValidator)}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                        >
                            <option value="">Choose gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                   {errors.location?.message && (<p className="mt-1.5 text-xs font-medium text-red-400">{errors.location.message}</p>)}

                    <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-medium text-slate-300"
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

                    <label
                        htmlFor="about"
                        className="mb-2 block text-sm font-medium text-slate-300"
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

                    <button
                        type="submit"
                        className="mt-3 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 active:translate-y-0"
                    >
                        Save
                    </button>

                </form>

            </div>

        </div>
    )
}