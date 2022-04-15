
class BaseService {

    handleErrors(request) {
        // todo handle the errors
    }

    response({
                 status = true,
                 statusCode = 200,
                 data = {},
                 message = "",
                 validationError = {}
             }) {
        return {
            status,
            statusCode,
            data,
            message,
            validationError
        }
    }

    serverErrorResponse(error) {
        return {
            status: false,
            statusCode: 500,
            data: error,
            message: "Server Error",
            validationError: {}
        }
    }
}

module.exports = BaseService;
