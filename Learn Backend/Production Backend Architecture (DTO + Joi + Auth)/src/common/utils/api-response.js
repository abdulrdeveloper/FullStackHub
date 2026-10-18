class ApiResponse {
    static ok = (res, data = null, message) => {
        res.status(200).json({
            success: true,
            message,
            data
        });
    };

    static created = (res, data = null, message) => {
        res.status(201).json({
            success: true,
            message,
            data
        });
    };

    static noContent = (res) => {
        res.status(204).send();
    };
}

export default ApiResponse;
