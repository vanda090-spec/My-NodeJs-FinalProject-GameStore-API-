
export const isValid = (req, res, next) => {
    try {
        const { body, method } = req;
        if (method !== "GET" && method !== "DELETE" && (!body || Object.keys(body).length === 0)) {
            throw { status: 400, message: "Data is needed" };
        }

        next();

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}
export default isValid;