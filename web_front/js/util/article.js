var article = {
    // 页数：curPage，
    // 类型是curType, 
    // 状态是curStatus的数据
    // 显示：
    show: function (curPage, curType, curStatus, ) {
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        return $.get(APILIST.article_show, {
            "page": curPage,
            "type": curType,
            "state": curStatus,
        });
    },
    // 
    getById: function (id) {
        return $.get(APILIST.article_show, {
            "id": id,
        })
    },



}