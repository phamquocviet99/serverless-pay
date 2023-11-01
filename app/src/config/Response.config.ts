import express from "express";
export function Ok(
  res: express.Response,
  data: Object,
  message = "Yêu cầu thành công !"
) {
  return res.status(200).json({
    success: true,
    code: 200,
    message: message,
    data: data,
  });
}

export function BadRequest(
  res: express.Response,
  message = "Request is bad !"
) {
  return res.status(400).json({
    success: false,
    code: 400,
    message: message,
  });
}
export function ConflictRequest(
  res: express.Response,
  message = "Request is conflict !"
) {
  return res.status(409).json({
    success: false,
    code: 409,
    message: message,
  });
}
export function ServerError(res: express.Response, error: String) {
  return res.status(500).json({
    success: false,
    code: 500,
    message: error,
  });
}
export function NotAuthentication(
  res: express.Response,
  message = "Not Authorization !"
) {
  return res.status(401).json({
    message: message,
    code: 401,
    success: false,
  });
}
export function NotContent(res: express.Response, message = "Successfully !") {
  return res.status(204).json({
    message: message,
    code: 204,
    success: true,
  });
}
