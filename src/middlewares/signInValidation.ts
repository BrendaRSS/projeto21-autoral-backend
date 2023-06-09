import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { signInSchema } from "../models/authSchema";
import { BodyLogin } from "../protocols";

export async function signInValidation(req: Request, res: Response, next: NextFunction) {
    const body = req.body as BodyLogin;

    const {error} = signInSchema.validate(body, {abortEarly: false});
    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }

    res.locals.body = body;
    next();
}
