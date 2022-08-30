export const validateName = (value: string) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(value)

export const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value)

export const validatePhone = (value: string) => /^\d{10}$/.test(value)
