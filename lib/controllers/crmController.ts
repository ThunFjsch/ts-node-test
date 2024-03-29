import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response, response } from 'express';
import { request } from 'http';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        })
    }

    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getContactWithId(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate(
            { _id: req.params.contactId },
            req.body,
            { new: true },
            (err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json(contact);
            });
    }

    public deleteContact(req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfullz deleted contact!' });
        });
    }
}
