const setUpSessionMiddleware = function (req, res, next) {
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    }
    next();
};

// Customer Middleware
const checkCustomerMiddleware = function (req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};

// Admin Middleware
const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};

module.exports = {
    setUpSessionMiddleware,
    checkCustomerMiddleware,
    checkAdminMiddleware
};