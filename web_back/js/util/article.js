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
    // 删除
    del: function (id) {
        return $.get(APILIST.article_del, {
            "id": id,
        });
    },
    // 添加
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: "post",
            data: fd,
            processData: false,
            contentType: false,
        });
    },



}