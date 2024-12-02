<<<<<<< HEAD
// import {NextFunction, Request, Response} from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import {JWT_PASSWORD } from  "./config";

// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const header = req.headers["authorization"];
//     const decoded = jwt.verify(header as string, JWT_PASSWORD)

//     if (decoded) {
//         if (decoded) {
//             if (typeof decoded === "string") {
//                 res.status(403).json({
//                     message: "You are not logged in"
//                 })
//                 return;
//             }
//         }
//         // @ts-ignore
//         req.userId = (decoded as JwtPayload);
//         next()
//     } else {
//         res.status(403).json({
//             message: "You are not logged in"
//         })
//     }
// }



// Override the types of the express request object


import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;    
        }
        //@ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
=======
// import {NextFunction, Request, Response} from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import {JWT_PASSWORD } from  "./config";

// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const header = req.headers["authorization"];
//     const decoded = jwt.verify(header as string, JWT_PASSWORD)

//     if (decoded) {
//         if (decoded) {
//             if (typeof decoded === "string") {
//                 res.status(403).json({
//                     message: "You are not logged in"
//                 })
//                 return;
//             }
//         }
//         // @ts-ignore
//         req.userId = (decoded as JwtPayload);
//         next()
//     } else {
//         res.status(403).json({
//             message: "You are not logged in"
//         })
//     }
// }



// Override the types of the express request object


import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;    
        }
        //@ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
>>>>>>> f95af7daa6dcc5e08c12c4a7f6fc1494973f5a33
}