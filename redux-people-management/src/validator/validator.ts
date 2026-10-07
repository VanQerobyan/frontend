export const NameValidator = {
    required:"Please fill your name"
}

export const SurnameValidator = {
    required:"Please fill your surname"
}

export const AgeValidator = {
    required:"Please fill your age",
    setValueAs: ((str: string) => Number(str))
}

export const SalaryValidator = {
    required:"Please fill your salary",
    setValueAs:((str: string) => Number(str))
}