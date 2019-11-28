import { Request, Response } from "express";

export class Routes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull!!!'
                })
            })

        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST request successfull!!!'
                })
            })
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'POST request successfull!!!'
                })
            })

        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Get contact info'
                })
            })
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Put request successfull!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE request successfull!!!'
                })
            })
    }
}