class PaymentController {
    // [GET] /payment
    index(req, res) {
        res.render('payment'); // Render trang thanh toán
    }

    // [POST] /payment/submit
    submit(req, res) {
        const { name, total } = req.body;
        res.send(`Cảm ơn ${name}, bạn đã thanh toán ${total} VNĐ.`);
    }
}

module.exports = new PaymentController();
