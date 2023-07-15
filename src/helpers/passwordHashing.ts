import bcrypt from "bcrypt"

export const GenerateHashPassword = async (password: string): Promise<string> => {
    const salt = bcrypt.genSaltSync(12);
    return await bcrypt.hash(password.toString(), salt)
}