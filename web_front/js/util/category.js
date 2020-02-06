//与文章分类有关的操作都只在这里


var category = {
    // 显示
    show: function () {
        return $.get(APILIST.category_show);
    },

}