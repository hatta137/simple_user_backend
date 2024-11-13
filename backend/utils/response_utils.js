import { response } from "express";

export const ResponseCodes = {
    Success: 'SUCCESS',
    BadInput: 'BAD_INPUT',
    Forbidden: 'FORBIDDEN',
    InternalServerError: 'INTERNAL_SERVER_ERROR',
    NotFound: 'NOT_FOUND',
    CompanyNotFound: 'COMPANY_NOT_FOUND',
    AlreadyInCompany: 'ALREADY_IN_COMPANY',
    NotInCompany: 'NOT_IN_COMPANY',
    UserNotFound: 'USER_NOT_FOUND',
    UserAlreadyInCompany: 'USER_ALREADY_IN_COMPANY',
    OnlyCreatorCanDoThat: 'ONLY_CREATOR_CAN_DO_THAT',
    UserIsNotInYourCompany: 'USER_IS_NOT_IN_YOUR_COMPANY',
    WGIsFull: 'WG_IS_FULL',
    InvalidToken: 'INVALID_TOKEN',
    InvalidCredentials: 'INVALID_CREDENTIALS',
    UsernameOrEmailTaken: 'USERNAME_OR_EMAIL_TAKEN',
    CompanyNameTaken: 'COMPANY_NAME_TAKEN',
    ProvideCompanyName: 'PROVIDE_COMPANY_NAME',
    CustomerNotFound: 'CUSTOMER_NOT_FOUND',
    ResourceNotFound: 'RESOURCE_NOT_FOUND',
    AttachmentNotFound: 'ATTACHMENT_NOT_FOUND',
    CustomerNotFoundInCompany: 'CUSTOMER_NOT_FOUND_IN_COMPANY',
    NoFileUploaded: 'NO_FILE_UPLOADED',
    FileNotFound: 'FILE_NOT_FOUND',
};

/**
 * @memberof Response
 * @instance
 */
function success(data = null) {
    const json = {
        status: ResponseCodes.Success
    };

    if (data) {
        json.data = data;
    }

    this.status(200).json(json);
}
response.success = success;

/**
 * @memberof Response
 * @instance
 */
function badInput(status = null, data = null) {
    const json = {
        status: !status ? ResponseCodes.BadInput : status
    };

    if (data) {
        json.data = data;
    }

    this.status(400).json(json);
}
response.badInput = badInput;

/**
 * @memberof Response
 * @instance
 */
function notFound(status = null, data = null) {
    const json = {
        status: !status ? ResponseCodes.NotFound : status
    };

    if (data) {
        json.data = data;
    }

    this.status(404).json(json);
}
response.notFound = notFound;

/**
 * @memberof Response
 * @instance
 */
function forbidden(status = null, data = null) {
    const json = {
        status: !status ? ResponseCodes.Forbidden : status
    };

    if (data) {
        json.data = data;
    }

    this.status(403).json(json);
}
response.forbidden = forbidden;

/**
 * @memberof Response
 * @instance
 */
function internalError(data = null) {
    const json = {
        status: ResponseCodes.InternalServerError
    };

    if (data) {
        json.data = data;
    }

    this.status(500).json(json);
}
response.internalError = internalError;
