export const NameValidator = {
    required: "Please fill your name"
}

export const SurnameValidator = {
    required: "Please fill your surname"
}

export const AgeValidator = {
    required: "Please fill your age",
    setValueAs: ((str: string) => Number(str)),
    min: {
        value: 18,
        message: "Minimum age is 18"
    }
}

export const SalaryValidator = {
    required: "Please fill your salary",
    setValueAs: ((str:string) => Number(str)) 
}

export const GenderValidator = {
    required: "Please choose your gender"
}

export const LocationValidator = {
    required: "Please fill your location"
}

export const AboutValidator = {
    required: "Please write about yourself."
}