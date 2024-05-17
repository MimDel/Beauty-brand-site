const authenticate = (req, res, next) => {
    if(req.session.isAuthenticated) {
        next()
    } else {
        res.status(401).send('User not authenticated')
    }
}