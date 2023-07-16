export const checkImageURL = (url: unknown) => {
    if (!url) return false
    if (typeof url !== "string") {
        return
    }
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
};