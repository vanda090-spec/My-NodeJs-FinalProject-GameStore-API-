
export const isValid = (req, res, next) => {
    try {
        const { body, method } = req;
        if (method != "GET" && method != "DELETE"
            && !body || body.length == 0
            && !Object.keys(body)) {
            throw { status: 400, message: "Data is needed" };
        }
        next();
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}