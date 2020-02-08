var article = {
    // 页数：curPage，
    // 类型是curType, 
    // 状态是curStatus的数据
    // 显示：
    show: function (page, type, status, ) {
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        return $.get(APILIST.article_show, {
            "page": page,
            "type": type,
            "state": status
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
    // 编辑
    /* 根据id去获取文章的详情 */
    getById: function (id) {
        return $.get(APILIST.article_show, {
            "id": id
        });
    },
    // 保存文章编辑的对象
    edit: function (fd) {
        return $.ajax({
            url: APILIST.article_edit,
            type: "post",
            data: fd,
            processData: false,
            contentType: false,
        });
    },

}