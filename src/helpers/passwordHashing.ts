import bcrypt from "bcrypt"

export const GenerateHashPassword = async (password: string): Promise<string> => {
    const salt = bcrypt.genSaltSync(12);
    return await bcrypt.hash(password.toString(), salt)
}

export const ComparePasswordHash = async (rawPassword: string, hashPassword: string): Promise<boolean> => {
    return await bcrypt.compare(rawPassword.toString(), hashPassword)
}