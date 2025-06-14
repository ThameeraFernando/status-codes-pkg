# https-status-handler

A lightweight and developer-friendly utility package to access HTTP status codes by name instead of remembering numbers.

---

## 📦 Installation

```bash
npm install https-status-handler
```

---

## 🚀 Usage

Import the `STATUS_CODES` object from the package and use the HTTP status codes in your responses.

### Using short messages

If you want to send a concise status message, use the `message` property:

```ts
import { STATUS_CODES } from "https-status-handler";

res.status(STATUS_CODES.BAD_GATEWAY.code).json({
  message: STATUS_CODES.BAD_GATEWAY.message,
});
```

### Using detailed descriptions

If you want to provide more descriptive information about the status code, use the `description` property:

```ts
import { STATUS_CODES } from "https-status-handler";

res.status(STATUS_CODES.BAD_GATEWAY.code).json({
  message: STATUS_CODES.BAD_GATEWAY.description,
});

---

## 🧠 Why Use This?

- No more Googling HTTP status codes.
- Code becomes more readable and self-documenting.
- Type-safe, easily accessible constants.

---

## 📄 Available Status Codes

| Status Name                     | Code | Message                         | Description                                                                                     |
| ------------------------------- | ---- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| CONTINUE                        | 100  | Continue                        | The server has received the request headers and the client should proceed to send the body.     |
| SWITCHING_PROTOCOLS             | 101  | Switching protocols             | The requester has asked the server to switch protocols.                                         |
| PROCESSING                      | 102  | Processing                      | The server is processing the request but no response is available yet.                          |
| EARLY_HINTS                     | 103  | Early hints                     | The server is sending some headers before the final response.                                   |
| OK                              | 200  | Ok                              | The request was successful and the server returned the requested data.                          |
| CREATED                         | 201  | Created                         | The request was successful and a new resource was created.                                      |
| ACCEPTED                        | 202  | Accepted                        | The request has been accepted for processing but is not complete.                               |
| NON_AUTHORITATIVE_INFORMATION   | 203  | Non authoritative information   | The server successfully processed the request but returns info from a third party.              |
| NO_CONTENT                      | 204  | No content                      | The server successfully processed the request but is not returning any content.                 |
| RESET_CONTENT                   | 205  | Reset content                   | The server successfully processed the request and instructs client to reset the view.           |
| PARTIAL_CONTENT                 | 206  | Partial content                 | The server is delivering part of the resource due to a range header.                            |
| MULTI_STATUS                    | 207  | Multi status                    | The message body contains multiple status codes for multiple independent operations.            |
| ALREADY_REPORTED                | 208  | Already reported                | The members of a DAV binding have already been enumerated in a previous reply.                  |
| IM_USED                         | 226  | Im used                         | The server fulfilled a GET request with instance-manipulations applied to the current instance. |
| MULTIPLE_CHOICES                | 300  | Multiple choices                | Multiple options for the resource that the client may follow.                                   |
| MOVED_PERMANENTLY               | 301  | Moved permanently               | This and all future requests should be directed to the given URI.                               |
| FOUND                           | 302  | Found                           | The resource was found but temporarily resides under a different URI.                           |
| SEE_OTHER                       | 303  | See other                       | Response can be found under a different URI and should be retrieved using GET.                  |
| NOT_MODIFIED                    | 304  | Not modified                    | The resource has not been modified since the last request.                                      |
| USE_PROXY                       | 305  | Use proxy                       | The requested resource is available only through a proxy.                                       |
| TEMPORARY_REDIRECT              | 307  | Temporary redirect              | The request should be repeated with another URI, but future requests should use original URI.   |
| PERMANENT_REDIRECT              | 308  | Permanent redirect              | The request and future requests should use another URI.                                         |
| BAD_REQUEST                     | 400  | Bad request                     | The server could not understand the request due to invalid syntax.                              |
| UNAUTHORIZED                    | 401  | Unauthorized                    | Authentication is required and has failed or not yet been provided.                             |
| PAYMENT_REQUIRED                | 402  | Payment required                | Reserved for future use; indicates payment is required.                                         |
| FORBIDDEN                       | 403  | Forbidden                       | The server refuses to authorize the request.                                                    |
| NOT_FOUND                       | 404  | Not found                       | The requested resource could not be found.                                                      |
| METHOD_NOT_ALLOWED              | 405  | Method not allowed              | The request method is not allowed for the resource.                                             |
| NOT_ACCEPTABLE                  | 406  | Not acceptable                  | The requested resource is only capable of generating content not acceptable by the client.      |
| PROXY_AUTHENTICATION_REQUIRED   | 407  | Proxy authentication required   | The client must authenticate itself with the proxy.                                             |
| REQUEST_TIMEOUT                 | 408  | Request timeout                 | The server timed out waiting for the request.                                                   |
| CONFLICT                        | 409  | Conflict                        | The request could not be completed due to a conflict with the current state of the resource.    |
| GONE                            | 410  | Gone                            | The resource is no longer available and will not be available again.                            |
| LENGTH_REQUIRED                 | 411  | Length required                 | The request did not specify the length of its content, which is required by the server.         |
| PRECONDITION_FAILED             | 412  | Precondition failed             | The server does not meet one of the preconditions that the requester put on the request.        |
| PAYLOAD_TOO_LARGE               | 413  | Payload too large               | The request is larger than the server is willing or able to process.                            |
| URI_TOO_LONG                    | 414  | URI too long                    | The URI provided was too long for the server to process.                                        |
| UNSUPPORTED_MEDIA_TYPE          | 415  | Unsupported media type          | The request entity has a media type which the server or resource does not support.              |
| RANGE_NOT_SATISFIABLE           | 416  | Range not satisfiable           | The client has asked for a portion of the file, but the server cannot supply that portion.      |
| EXPECTATION_FAILED              | 417  | Expectation failed              | The server cannot meet the requirements of the Expect request-header field.                     |
| IM_A_TEAPOT                     | 418  | I'm a teapot                    | Any attempt to brew coffee with a teapot should result in this error code.                      |
| MISDIRECTED_REQUEST             | 421  | Misdirected request             | The request was directed at a server that is not able to produce a response.                    |
| UNPROCESSABLE_ENTITY            | 422  | Unprocessable entity            | The request was well-formed but was unable to be followed due to semantic errors.               |
| LOCKED                          | 423  | Locked                          | The resource that is being accessed is locked.                                                  |
| FAILED_DEPENDENCY               | 424  | Failed dependency               | The request failed due to failure of a previous request.                                        |
| TOO_EARLY                       | 425  | Too early                       | Indicates that the server is unwilling to risk processing a request that might be replayed.     |
| UPGRADE_REQUIRED                | 426  | Upgrade required                | The client should switch to a different protocol.                                               |
| PRECONDITION_REQUIRED           | 428  | Precondition required           | The origin server requires the request to be conditional.                                       |
| TOO_MANY_REQUESTS               | 429  | Too many requests               | The user has sent too many requests in a given amount of time.                                  |
| REQUEST_HEADER_FIELDS_TOO_LARGE | 431  | Request header fields too large | The server is unwilling to process the request because its header fields are too large.         |
| UNAVAILABLE_FOR_LEGAL_REASONS   | 451  | Unavailable for legal reasons   | The resource requested is unavailable due to legal reasons.                                     |
| INTERNAL_SERVER_ERROR           | 500  | Internal server error           | The server encountered an unexpected condition which prevented it from fulfilling the request.  |
| NOT_IMPLEMENTED                 | 501  | Not implemented                 | The server does not support the functionality required to fulfill the request.                  |
| BAD_GATEWAY                     | 502  | Bad gateway                     | The server received an invalid response from the upstream server.                               |
| SERVICE_UNAVAILABLE             | 503  | Service unavailable             | The server is currently unable to handle the request due to maintenance or overload.            |
| GATEWAY_TIMEOUT                 | 504  | Gateway timeout                 | The server did not receive a timely response from the upstream server.                          |
| HTTP_VERSION_NOT_SUPPORTED      | 505  | HTTP version not supported      | The server does not support the HTTP protocol version used in the request.                      |
| VARIANT_ALSO_NEGOTIATES         | 506  | Variant also negotiates         | The server has an internal configuration error involving content negotiation.                   |
| INSUFFICIENT_STORAGE            | 507  | Insufficient storage            | The server is unable to store the representation needed to complete the request.                |
| LOOP_DETECTED                   | 508  | Loop detected                   | The server detected an infinite loop while processing the request.                              |
| NOT_EXTENDED                    | 510  | Not extended                    | Further extensions to the request are required for the server to fulfill it.                    |
| NETWORK_AUTHENTICATION_REQUIRED | 511  | Network authentication required | The client needs to authenticate to gain network access.                                        |
```
