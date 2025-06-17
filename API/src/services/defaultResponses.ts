export const defaultSuccessMessage = (additionalIfo?: string) => {
    return `<html lang='en'><body><div>SUCCESS! ${additionalIfo}</div></body></html>`
}

export const defaultFailMessage = (reason?: string) => {
    return `<html lang='en'><body><div>FAIL ${reason ? `--REASON: ${reason}` : ""}</div></body></html>`
}