/**
 * Created by 12156 on 2017/2/20.
 */
var tipcolor = 'rgba(255,0,0,0.5)';//默认的tipcolor，可以设置，传入color值时则不走这个
//对layer alert方法的封装，会产生不同的icon图标与title,用于给用户提示操作的结果
//一般tab只用一此所以在此声明tab的属性也可以提前，如果在一页上出现很多个TAB时，可以复制几个分别用于不同的内容。
var tab = [
    {title: 'tab1', content: '这里放第一个tab内容'},
    {title: 'tab2', content: '这里放第二个tab内容'},
    {title: 'tab3', content: '这里放第三个tab内容'}
];
//次数设置tab的样式，可以单独赋值也可以分别复制一份然后赋值。
var area = ['600px', '600px'];
var putalert = {
    simple: function (massage) {
        layer.alert(massage);
    },
    warnning: function (massage) {
        layer.alert(massage, {icon: 0, title: '警告'});
    },
    success: function (massage) {
        layer.alert(massage, {icon: 1, title: '成功'});
    },
    error: function (massage) {
        layer.alert(massage, {icon: 2, title: '错误'})
    },
    ask: function (massage) {
        layer.alert(massage, {icon: 3, title: '询问'})
    },
    lock: function (massage) {
        layer.alert(massage, {icon: 4, title: '锁定'})
    },
    bad: function (massage) {
        layer.alert(massage, {icon: 5, title: '失败'})
    }
};
//对选择框进行封装，不同的icon对应不同的
var putconfirm = {
    simple: function (massage) {
        layer.confirm(massage);
    },
    warnning: function (massage) {
        layer.confirm(massage, {icon: 0, title: '警告'});
    },
    success: function (massage) {
        layer.confirm(massage, {icon: 1, title: '成功'});
    },
    error: function (massage) {
        layer.confirm(massage, {icon: 2, title: '错误'})
    },
    ask: function (massage) {
        layer.confirm(massage, {icon: 3, title: '询问'})
    },
    lock: function (massage) {
        layer.confirm(massage, {icon: 4, title: '锁定'})
    },
    bad: function (massage) {
        layer.confirm(massage, {icon: 5, title: '失败'})
    }
};
//简单提示，对用户操作进行提示,坚持不需要用户操作，无需任何操作即可自动关闭，只是提示一下而已
var putmsg = {
    simple: function (massage) {
        layer.msg(massage, {});
    },
    animal: function (massage) {
        layer.msg(massage, function () {

        });
    },
    warnning: function (massage) {
        layer.msg(massage, {icon: 0});
    },
    success: function (massage) {
        layer.msg(massage, {icon: 1});
    },
    error: function (massage) {
        layer.msg(massage, {icon: 2})
    },
    ask: function (massage) {
        layer.msg(massage, {icon: 3})
    },
    lock: function (massage) {
        layer.msg(massage, {icon: 4})
    },
    bad: function (massage) {
        layer.msg(massage, {icon: 5})
    }
};
//load控件通过ajax操作返回数据进行控制使其关闭，返回成功与否都会使其关闭并产生不同的操作
var putload = {
    icon1: function (func) {
        var index = layer.load();
        func(index);
    }
};
//设置AJAX返回》》》
function toAJAX(index) {
    //不管返回成功与否都会产生效果使其关闭
    //此方法放在ajaxcallback里面

    layer.close(index);
    //快捷关闭方法，快捷关闭load层的所有弹窗
    layer.closeAll('loading');
}

var puttip = {
    up: function (id, massage, color) {
        if (color == undefined) {
            color = tipcolor;
        }

        layer.tips(massage, id, {
            tips: [1, color]
        })
    },
    down: function (id, massage, color) {
        if (color == undefined) {
            color = tipcolor;
        }
        layer.tips(massage, id, {
            tips: [3, color]
        })
    },
    right: function (id, massage, color) {
        if (color == undefined) {
            color = tipcolor;
        }
        layer.tips(massage, id, {
            tips: [2, color]
        })
    },
    left: function (id, massage, color) {
        if (color == undefined) {
            color = tipcolor;
        }
        layer.tips(massage, id, {
            tips: [4, color]
        })
    }
};
function promptajax(value, index) {
    alert(value);//输入的表单值
    layer.close(index);//index用于关闭这个弹窗
}
var putprompt = {
    text: function (id, value, ajaxfunc) {
        layer.prompt(
            {
                formType: 0,
                value: value,
                title: '请输入：：',
                content: 'content'
            }, function (value, index, elem) {
                ajaxfunc(value, index);
                //proptaajax
            }
        );
    }
};
var puttab = function (tab, area) {
    layer.tab({
        area: area,
        tab: tab
    });
};
//先不封装了，感觉怪麻烦到时候再封装
var putphoto=function () {
}