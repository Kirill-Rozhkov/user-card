export function validator(data, config) {
    const errors = {}
    const year = new Date()
    function validate(validateMethord, data, config) {
        switch (validateMethord) {
            case "isRequied":
                if (data.trim() === "") return config.message
                break
            case "isUrl": {
                const urlRegEx = /https:\/\/github\.com\/[\w-]+(\/[\w-]+)?/
                if (!urlRegEx.test(data)) return config.message
                break
            }
            case "isSumbol": {
                const sumbolRegEx = /[^a-zA-Zа-яА-Я]/g
                if (sumbolRegEx.test(data)) return config.message
                break
            }
            case "isNotNumber": {
                const numberRegEx = /^\d+$/
                if (!numberRegEx.test(data)) return config.message
                break
            }
            case "isPast": {
                if (data.trim() > year.getFullYear()) return config.message
                break
            }
            default:
                break
        }
    }
    for (const fieldName in data) {
        for (const validateMethord in config[fieldName]) {
            const error = validate(
                validateMethord,
                data[fieldName],
                config[fieldName][validateMethord]
            )
            if (error) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}
