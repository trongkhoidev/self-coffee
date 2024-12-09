class ReviewController {
    // [GET] /review
    index(req, res) {
        res.render('review'); // Render trang đánh giá
    }

    // [POST] /review/submit
    submit(req, res) {
        const { name, rating, comment } = req.body;
        res.send(
            `Cảm ơn ${name}, bạn đã đánh giá ${rating} sao. Nhận xét: ${comment}`,
        );
    }
}

module.exports = new ReviewController();
