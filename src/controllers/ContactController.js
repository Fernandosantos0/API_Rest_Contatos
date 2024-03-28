class ContactController {
    static home(req, res, next) {
        res.status(200).json({
            todoCerto: true
        })
    }
}

export default ContactController;
