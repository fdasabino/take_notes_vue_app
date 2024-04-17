export const getDateAndTime = () => {
    const date = `Date: ${new Date().toLocaleDateString()} @ ${new Date().toLocaleTimeString()}`;
    return date;
};
