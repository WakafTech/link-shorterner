export const fetchDestinationUrl = async (path: string) => {
    if (path === "impactbit") {
        return "https://impactbit.waktanjong.org"
    }
    return null;
}