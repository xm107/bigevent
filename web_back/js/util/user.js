// $.post(),$.get(),$.ajax()得到的都是一个对象
// 这个对象上有then方法，then（的功能是获取返回的数据；
// $.post().then(function(res){ res 就是接口得到的是返回的数据 })


var user = {
    login: function (name, password) {
        return $.post(APILIST.user_login, {
            "user_name": name,
            "password": password
        });
    },
    // 用户退出：
    logout: function () {
        return $.post(APILIST.user_logout);
    },
    // 获取信息：
    getInfo: function () {
        return $.get(APILIST.user_getInfo);
    },

}