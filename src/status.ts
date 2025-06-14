export const STATUS_CODES = {
  CONTINUE: {
    code: 100,
    message: "Continue",
    description:
      "The server has received the request headers and the client should proceed to send the request body.",
  },
  SWITCHING_PROTOCOLS: {
    code: 101,
    message: "Switching protocols",
    description: "The requester has asked the server to switch protocols.",
  },
  PROCESSING: {
    code: 102,
    message: "Processing",
    description:
      "The server has received and is processing the request, but no response is available yet.",
  },
  EARLY_HINTS: {
    code: 103,
    message: "Early hints",
    description:
      "The server is sending some headers before the final response.",
  },

  OK: {
    code: 200,
    message: "Ok",
    description:
      "The request was successful and the server returned the requested data.",
  },
  CREATED: {
    code: 201,
    message: "Created",
    description: "The request was successful and a new resource was created.",
  },
  ACCEPTED: {
    code: 202,
    message: "Accepted",
    description:
      "The request has been accepted for processing, but the processing is not complete.",
  },
  NON_AUTHORITATIVE_INFORMATION: {
    code: 203,
    message: "Non authoritative information",
    description:
      "The server successfully processed the request but is returning information from a third party.",
  },
  NO_CONTENT: {
    code: 204,
    message: "No content",
    description:
      "The server successfully processed the request, but is not returning any content.",
  },
  RESET_CONTENT: {
    code: 205,
    message: "Reset content",
    description:
      "The server successfully processed the request, instructing the client to reset the document view.",
  },
  PARTIAL_CONTENT: {
    code: 206,
    message: "Partial content",
    description:
      "The server is delivering only part of the resource due to a range header sent by the client.",
  },
  MULTI_STATUS: {
    code: 207,
    message: "Multi status",
    description:
      "The message body contains multiple status codes for multiple independent operations.",
  },
  ALREADY_REPORTED: {
    code: 208,
    message: "Already reported",
    description:
      "The members of a DAV binding have already been enumerated in a previous reply.",
  },
  IM_USED: {
    code: 226,
    message: "Im used",
    description:
      "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
  },

  MULTIPLE_CHOICES: {
    code: 300,
    message: "Multiple choices",
    description:
      "There are multiple options for the resource that the client may follow.",
  },
  MOVED_PERMANENTLY: {
    code: 301,
    message: "Moved permanently",
    description:
      "This and all future requests should be directed to the given URI.",
  },
  FOUND: {
    code: 302,
    message: "Found",
    description:
      "The resource was found but temporarily resides under a different URI.",
  },
  SEE_OTHER: {
    code: 303,
    message: "See other",
    description:
      "The response to the request can be found under a different URI and should be retrieved using a GET method.",
  },
  NOT_MODIFIED: {
    code: 304,
    message: "Not modified",
    description: "The resource has not been modified since the last request.",
  },
  USE_PROXY: {
    code: 305,
    message: "Use proxy",
    description: "The requested resource is available only through a proxy.",
  },
  TEMPORARY_REDIRECT: {
    code: 307,
    message: "Temporary redirect",
    description:
      "The request should be repeated with another URI, but future requests should still use the original URI.",
  },
  PERMANENT_REDIRECT: {
    code: 308,
    message: "Permanent redirect",
    description:
      "The request and all future requests should be repeated using another URI.",
  },

  BAD_REQUEST: {
    code: 400,
    message: "Bad request",
    description:
      "The server could not understand the request due to invalid syntax.",
  },
  UNAUTHORIZED: {
    code: 401,
    message: "Unauthorized",
    description:
      "Authentication is required and has failed or has not yet been provided.",
  },
  PAYMENT_REQUIRED: {
    code: 402,
    message: "Payment required",
    description: "Reserved for future use; indicates payment is required.",
  },
  FORBIDDEN: {
    code: 403,
    message: "Forbidden",
    description:
      "The server understood the request but refuses to authorize it.",
  },
  NOT_FOUND: {
    code: 404,
    message: "Not found",
    description: "The requested resource could not be found.",
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: "Method not allowed",
    description:
      "The request method is not allowed for the requested resource.",
  },
  NOT_ACCEPTABLE: {
    code: 406,
    message: "Not acceptable",
    description:
      "The requested resource is capable of generating only content not acceptable according to the Accept headers.",
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    code: 407,
    message: "Proxy authentication required",
    description: "Authentication with the proxy is required.",
  },
  REQUEST_TIMEOUT: {
    code: 408,
    message: "Request timeout",
    description: "The server timed out waiting for the request.",
  },
  CONFLICT: {
    code: 409,
    message: "Conflict",
    description:
      "The request could not be completed due to a conflict with the current state of the resource.",
  },
  GONE: {
    code: 410,
    message: "Gone",
    description:
      "The resource requested is no longer available and will not be available again.",
  },
  LENGTH_REQUIRED: {
    code: 411,
    message: "Length required",
    description:
      "The request did not specify the length of its content, which is required by the server.",
  },
  PRECONDITION_FAILED: {
    code: 412,
    message: "Precondition failed",
    description:
      "The server does not meet one of the preconditions that the requester put on the request.",
  },
  PAYLOAD_TOO_LARGE: {
    code: 413,
    message: "Payload too large",
    description:
      "The request is larger than the server is willing or able to process.",
  },
  URI_TOO_LONG: {
    code: 414,
    message: "Uri too long",
    description: "The URI provided was too long for the server to process.",
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    message: "Unsupported media type",
    description:
      "The request entity has a media type which the server or resource does not support.",
  },
  RANGE_NOT_SATISFIABLE: {
    code: 416,
    message: "Range not satisfiable",
    description:
      "The client has asked for a portion of the file, but the server cannot supply that portion.",
  },
  EXPECTATION_FAILED: {
    code: 417,
    message: "Expectation failed",
    description:
      "The server cannot meet the requirements of the Expect request-header field.",
  },
  IM_A_TEAPOT: {
    code: 418,
    message: "Im a teapot",
    description:
      "The server refuses to brew coffee because it is, permanently, a teapot.",
  },
  MISDIRECTED_REQUEST: {
    code: 421,
    message: "Misdirected request",
    description:
      "The request was directed at a server that is not able to produce a response.",
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    message: "Unprocessable entity",
    description:
      "The request was well-formed but was unable to be followed due to semantic errors.",
  },
  LOCKED: {
    code: 423,
    message: "Locked",
    description: "The resource that is being accessed is locked.",
  },
  FAILED_DEPENDENCY: {
    code: 424,
    message: "Failed dependency",
    description: "The request failed due to failure of a previous request.",
  },
  TOO_EARLY: {
    code: 425,
    message: "Too early",
    description:
      "Indicates that the server is unwilling to risk processing a request that might be replayed.",
  },
  UPGRADE_REQUIRED: {
    code: 426,
    message: "Upgrade required",
    description: "The client should switch to a different protocol.",
  },
  PRECONDITION_REQUIRED: {
    code: 428,
    message: "Precondition required",
    description: "The origin server requires the request to be conditional.",
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    message: "Too many requests",
    description:
      "The user has sent too many requests in a given amount of time.",
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    code: 431,
    message: "Request header fields too large",
    description:
      "The server is unwilling to process the request because its header fields are too large.",
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    code: 451,
    message: "Unavailable for legal reasons",
    description:
      "The user-agent requested a resource that cannot legally be provided.",
  },

  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: "Internal server error",
    description:
      "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  },
  NOT_IMPLEMENTED: {
    code: 501,
    message: "Not implemented",
    description:
      "The server does not support the functionality required to fulfill the request.",
  },
  BAD_GATEWAY: {
    code: 502,
    message: "Bad gateway",
    description:
      "The server received an invalid response from the upstream server.",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "Service unavailable",
    description:
      "The server is currently unable to handle the request due to temporary overload or maintenance.",
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: "Gateway timeout",
    description:
      "The server did not receive a timely response from the upstream server.",
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    code: 505,
    message: "Http version not supported",
    description:
      "The server does not support the HTTP protocol version used in the request.",
  },
  VARIANT_ALSO_NEGOTIATES: {
    code: 506,
    message: "Variant also negotiates",
    description:
      "The server has an internal configuration error: the chosen variant resource is itself configured to engage in content negotiation.",
  },
  INSUFFICIENT_STORAGE: {
    code: 507,
    message: "Insufficient storage",
    description:
      "The server is unable to store the representation needed to complete the request.",
  },
  LOOP_DETECTED: {
    code: 508,
    message: "Loop detected",
    description:
      "The server detected an infinite loop while processing the request.",
  },
  NOT_EXTENDED: {
    code: 510,
    message: "Not extended",
    description:
      "Further extensions to the request are required for the server to fulfill it.",
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    code: 511,
    message: "Network authentication required",
    description: "The client needs to authenticate to gain network access.",
  },
};
