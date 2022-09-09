/*
 * @Author: yuanhao
 * @Date: 2022-09-02 09:05:16
 * @LastEditTime: 2022-09-09 14:52:33
 * @LastEditors: yuanhao
 * @Description: 
 * @FilePath: \vuepress-starter\docs\.vuepress\public\side.js
 */
module.exports = {
    '/guide/': [
        {
            title: '须知',
            children: [
                '/guide/specification.html'
            ]
        }
    ],
    '/visualization/': [
        /* {
            title: '图表组件',
            children: [
                '/visualization/charts/barLine.md',
                '/visualization/charts/pie.md'
            ]
        },
        {
            title: '文本组件',
            children: [

            ]
        }, */
        {
            title: '表格组件',
            children: [
                '/visualization/table/table.md'
            ]
        },
        {
            title: '表单组件',
            children: [
                '/visualization/form/form.md'
            ]
        }
    ],
    '/app/': [
        {
            title: '测试',
            // collapsable: false,
            children: []
        }
    ],
    '/function/': [
        {
            title: '公共函数库',
            // collapsable: false,
            children: []
        }
    ]
}