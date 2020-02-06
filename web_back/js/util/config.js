// 配置文件
// 把项目接口中所有用到的接口地址全放到这里

// 所有接口的基地址
var BASEURL = "http://192.168.1.6:8000"
// var BASEURL = "http://39.99.130.177:8000"
var APILIST = {
    user_login: BASEURL + "/admin/login",
    user_logout: BASEURL + "/admin/logout",
    user_getInfo: BASEURL + "/admin/getuser",

    // 类别显示
    category_show: BASEURL + "/admin/category_search",
    // 类别添加：
    category_add: BASEURL + "/admin/category_add",
    // 类别删除：
    category_del: BASEURL + "/admin/category_delete",
    // 类别编辑：
    category_edit: BASEURL + "/admin/category_edit",

    // 文章获取
    article_show: BASEURL + "/admin/search",
    // 文章删除
    article_del: BASEURL + "/admin/article_delete",
    // 文章添加
    article_add: BASEURL + "/admin/article_publish",
    // 保存文章编辑
    article_edit: BASEURL + "/admin/article_edit",

    // 添加评论
    comment_add: BASEURL + "/post_comment",
    // 获取评论
    comment_get: BASEURL + "/post_comments",

}