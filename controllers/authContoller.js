// controller actions

module.exports.login_get = (req, res) => {
    res.send('login page')
}

module.exports.login_post = (req, res) => {
    res.send('post req to login_post')
}

module.exports.chatPage_get = (req, res) => {
    res.send('chat page')
}

module.exports.logout_post = (req, res) => {
    res.send('post req to logout');
}

module.exports.chat_get = (req,res) => {
    res.render('chat')
}
