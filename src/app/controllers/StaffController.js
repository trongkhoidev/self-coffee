class StaffController {
    // [GET] /staff
    index(req, res) {
        res.render('staff'); // Render trang nhân viên
    }

    // [POST] /staff/request
    request(req, res) {
        const { table, message } = req.body;
        res.send(`Yêu cầu gọi nhân viên cho bàn ${table}: ${message}`);
    }
}

module.exports = new StaffController();
