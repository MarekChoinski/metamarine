const prefixImages = (image: string) => {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return prefix + image
}

export default prefixImages;