import express from "express";
import type { Router } from "express";
import AuthenticationControlller from "./controller";
import { restrictToAuthenticatedUser } from "./middleware/auth-middleware";

const authenticationController = new AuthenticationControlller()

export const authRouter:Router = express.Router();


authRouter.post('/sign-up',authenticationController.handleSignup.bind(authenticationController));
authRouter.post('/sign-in', authenticationController.handleSignin.bind(authenticationController));

authRouter.get('/me', restrictToAuthenticatedUser(), authenticationController.handleMe.bind(authenticationController));
