// var data = require('./api/data.js')

function login(res) {
    wx.navigateTo({
        url: 'plugin-private://twxc44210f342bb2758/pages/login/login?data=' + res,
        success: function (res) {
            console.log('res', res)
        },
        fail: function (e) {
            console.log('e:', e)
        }

    })
}

module.exports = {
    login
}