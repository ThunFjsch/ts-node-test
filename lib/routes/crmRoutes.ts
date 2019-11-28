import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {
    public contactController: ContactController = new ContactController();

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
            .post(this.contactController.addNewContact);

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