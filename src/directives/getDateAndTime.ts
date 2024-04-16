export const getDateAndTime = () => {
    const title = `Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
    return title;
};
