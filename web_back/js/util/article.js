var article = {
    // 作用：根据第curPage页，类型是type,状态是state的数据
    // 显示：
    show: function (curPage, type, state, callback) {
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        return $.get(APILIST.article_show, {
            page: curPage,
            type,
            state,
        });
    },
    // 添加
    
}