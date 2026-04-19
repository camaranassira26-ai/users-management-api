const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.code === "P2002") {
        return res.status(409).json({
            message: "A record with this value already exists"
        });
    }

    if (err.code === "P2025") {
        return res.status(404).json({
            message: "Record not found"
        });
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        message
    });
};

export default errorHandler;