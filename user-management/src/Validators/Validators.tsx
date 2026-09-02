export const NameValidator = {
    required:"Please enter your name"
}

export const SurnameValidator = {
    required: "Please enter your surname"
}

export const SalaryValidator = {
    required: "Please enter your salary",
    min:{value: 10000, message:"salary should be higher than 10000"},
    setValueAs: (value:string) => +value
}

export const ProfessionValidator = {
    required: "Please enter your profession"
}

export const GenderValidator = {
    required: "Select gender"
}