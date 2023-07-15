const CheckSigninCredentials = (email: string, password: string) => {
    if (email === undefined || password === undefined) {
        return {title: "credential", error: "password and email are require"}
    } else if (email.trim().length < 4) {
        return {title: "email", error: "minimum length for email is 5"}
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return {title: "email", error: "email address format not valid"}

    } else if (password.trim().length < 7) {
        return {title: "email", error: "minimum length for email is 8"}
    }
    return null
}

export default CheckSigninCredentials