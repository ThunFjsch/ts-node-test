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
            // getting all the existing Contacts
            .get(this.contactController.getContacts)
            // Creates a new Contact
            .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
            // gets a specific contact
            .get(this.contactController.getContactWithId)
            // Updates a contact
            .put(this.contactController.updateContact)
            // Deletes an contact
            .delete(this.contactController.deleteContact)
    }
}