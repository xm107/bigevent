//与文章分类有关的操作都只在这里


var category = {
    // 显示
    show: function () {
        return $.get(APILIST.category_show);
    },
    // 增加
    add: function (name, slug, ) {
        return $.post(APILIST.category_add, {
            "name": name,
            "slug": slug,
        })
    },
    // 删除
    del: function (id) {
        return $.post(APILIST.category_del, { "id": id });
    },
    // 编辑
    edit: function (id, name, slug) {
        return $.post(APILIST.category_edit, {
            "id": id,
            "name": name,
            "slug": slug
        });
    },
}