const MenuItem = require('../models/MenuItem'); // Thay đổi tên model
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose'); // Nhập khẩu các hàm chuyển đổi
class MenuController {
    // [GET] /menu
    index(req, res, next) {
        MenuItem.find({})
            .then((menuItems) => {
                res.render('menu', {
                    menuItems: multipleMongooseToObject(menuItems), // Sử dụng hàm chuyển đổi
                });
            })
            .catch(next);
    }

    // [GET] /menu/:slug
    show(req, res, next) {
        MenuItem.findOne({ slug: req.params.slug })
            .then((menuItem) => {
                if (!menuItem) {
                    return res.status(404).send('Menu item not found');
                }
                res.render('menuDetail', {
                    menuItem: mongooseToObject(menuItem),
                });
            })
            .catch(next);
    }
}

module.exports = new MenuController();
