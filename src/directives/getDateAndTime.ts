export const getDateAndTime = () => {
    const title = `Date: ${new Date().toLocaleDateString()} @ ${new Date().toLocaleTimeString()}`;
    return title;
};
