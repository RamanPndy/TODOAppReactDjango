export const toHumanReadableDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString()
}