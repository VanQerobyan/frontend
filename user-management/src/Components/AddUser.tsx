import { useForm, type SubmitHandler } from "react-hook-form"
import type { User } from "../Type/Types";
import { GenderValidator, NameValidator, ProfessionValidator, SalaryValidator, SurnameValidator } from "../Validators/Validators";

export type AddUserProps = {
    addUser: (user: CreateUser) => void
}

export type CreateUser = Omit<User, "id">

export default function AddUser({addUser}: AddUserProps) {

    const {register, handleSubmit, formState:{errors}} = useForm<CreateUser>();

    const handleAdd:SubmitHandler<CreateUser> = (data) => {
        addUser(data)
    }

    return (
        
        <div className="flex items-center justify-center px-6 py-10">
            <form
                onSubmit={handleSubmit(handleAdd)}
                className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl"
            >
                <h2 className="mb-8 text-center text-3xl font-bold text-white">
                    Add User
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                        {errors.name && (
                            <p className="mb-2 text-sm text-red-400">
                                {errors.name.message}
                            </p>
                        )}

                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Name
                        </label>

                        <input 
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", NameValidator)}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                        />
                    </div>

                    <div>
                        {errors.surname && (
                            <p className="mb-2 text-sm text-red-400">
                                {errors.surname.message}
                            </p>
                        )}

                        <label
                            htmlFor="surname"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Surname
                        </label>

                        <input
                            id="surname"
                            type="text"
                            placeholder="Enter your surname"
                            {...register("surname", SurnameValidator)}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                        />
                    </div>

                    <div>
                        {errors.salary && (
                            <p className="mb-2 text-sm text-red-400">
                                {errors.salary.message}
                            </p>
                        )}

                        <label
                            htmlFor="salary"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Salary
                        </label>

                        <input
                            id="salary"
                            type="number"
                            placeholder="Your salary"
                            {...register("salary", SalaryValidator)}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                        />
                    </div>

                    <div>
                        {errors.profession && (
                            <p className="mb-2 text-sm text-red-400">
                                {errors.profession.message}
                            </p>
                        )}

                        <label
                            htmlFor="profession"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Profession
                        </label>

                        <input
                            id="profession"
                            type="text"
                            placeholder="Your profession"
                            {...register("profession", ProfessionValidator)}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        {errors.gender && (
                            <p className="mb-2 text-sm text-red-400">
                                {errors.gender.message}
                            </p>
                        )}

                        <label
                            htmlFor="gender"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Gender
                        </label>

                        <select
                            {...register("gender", GenderValidator)}
                            id="gender"
                            defaultValue=""
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                        >
                            <option value="" disabled>
                                Select gender
                            </option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>

                </div>

                <button
                    type="submit"
                    className="mt-7 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.99]"
                >
                    Save User
                </button>
            </form>
        </div>
    )
}