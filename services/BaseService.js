class BaseService {
    response({
                 success = true,
                 statusCode = 200,
                 data = {},
                 message = "",
                 validationError = {}
             }) {
        return {
            success,
            statusCode,
            data,
            message,
            validationError
        }
    }

    serverErrorResponse(error) {
        return {
            success: false,
            statusCode: 500,
            data: error,
            message: "Server Error",
            validationError: {}
        }
    }
}

module.exports = BaseService;
