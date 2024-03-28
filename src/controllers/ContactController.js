import Contact from '../models/Contact';
class ContactController {
    /* Lista os dados */
    static async home(req, res, next) {
        try {
            const contacts = await Contact.findAll({ attributes: ['id', 'name', 'lastname', 'email', 'tel', 'cell'] });

            res.status(200).json(contacts);
        } catch(e) {
            return res.status(404).json({
                errors: [e.errors[0].message]
            });
        }
    }

    /* Lista uma conta pelo ID */
    static async getContact(req, res, next) {
        const { id } = req.params;

        if(!id) {
            return res.status(404).json({
                errors: ['Não foi passado nenhum ID de identificação.']
            });
        }

        try {
            const contact = await Contact.findByPk(id);
            if(!contact) {
                return res.status(404).json({
                    errors: ['O contato não existe.']
                });
            }

            return res.status(200).json({
                id: contact.id,
                name: contact.name,
                lastname: contact.lastname,
                email: contact.email,
                tel: contact.tel,
                cell: contact.cell
            });

        } catch(e) {
            return res.status(404).json({
                errors: [e.errors[0].message]
            });
        }

    }

    /* Criação */
    static async register(req, res, next) {
        /* Desestruturação dos dados */
        const { name, lastname = '', email, tel, cell } = req.body;

        if(!name) {
            return res.status(200).json({
                errors: ['O campo name precisa se preenchido.']
            });
        }

        if(!email) {
            return res.status(200).json({
                errors: ['O campo email precisa se preenchido.']
            });
        }

        if(!tel) {
            return res.status(200).json({
                errors: ['O campo tel precisa se preenchido.']
            });
        }

        if(!cell) {
            return res.status(200).json({
                errors: ['O campo cell precisa se preenchido.']
            });
        }

        try {
            const body = { name, lastname, email, tel, cell };
            const contact = await Contact.create(body);

            return res.status(201).json({
                id: contact.id,
                name: contact.name,
                lastname: contact.lastname,
                email: contact.email,
                tel: contact.tel,
                cell: contact.cell
            });
        } catch(e) {
            console.log(e)
            return res.status(404).json({
                errors: [e.errors[0].message]
            });
        }

    }

    /* Atualização */
    static async update(req, res, next) {
        const { id } = req.params;

        if(!id) {
            return res.status(404).json({
                errors: ['Não foi passado nenhum ID de identificação.']
            });
        }

        try {
            const contact = await Contact.findByPk(id);
            if(!contact) {
                return res.status(404).json({
                    errors: ['O contato não existe.']
                });
            }

            const update = await contact.update(req.body);

            return res.status(200).json(update);
        } catch(e) {
            return res.status(404).json({
                errors: [e.errors[0].message]
            });
        }
    }

    /* Deletar */
    static async delete(req, res, next) {
        const { id } = req.params;

        if(!id) {
            return res.status(404).json({
                errors: ['Não foi passado nenhum ID de identificação.']
            });
        }

        try {
            const contact = await Contact.findByPk(id);
            if(!contact) {
                return res.status(404).json({
                    errors: ['O contato não existe.']
                });
            }

            await contact.destroy();
            return res.status(200).json({
                delete: true
            });
        } catch(e) {
            return res.status(404).json({
                errors: [e.errors[0].message]
            });
        }
    }
}

export default ContactController;
