export const emailValidator = (email: string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(email);
}

export const passwordValidator = (email: string) => {
    // const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // const expression: RegExp =  /^$/i/;
    return expression.test(email);
}