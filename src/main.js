let td = dom.create('<tr><td>hi</td></tr>');

let div2 = document.querySelector('#div2');

//console.log(td);

let test = dom.create('<div id = "test" title = "Hi!">test</div>');

div2.appendChild(test);//添加到body元素中

dom.after(test, td);

//创建作为父元素的div3
const div3 =  dom.create('<div id = "parent">parent</div>')

//将div3作为div2的父元素
dom.wrap(div2, div3)

//删除empty里的所有元素，并它们移到nodes中
const nodes = dom.empty(window.empty)
console.log(nodes)

//将id为test的元素中的title标签属性改为 'Hello, boy'
dom.attr(test, 'title', 'Hello, boy')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

//将id为test的元素中所有内容替换为新文本
dom.text(test, '你好，这是新加的内容')

//修改test的style属性(3个输入)
dom.style(test, {border: '1px solid red', color:'blue'});
//读取test的style属性
let testBorder = dom.style(test, 'border');
console.log(testBorder)
//修改test的style属性(2个输入)
dom.style(test, 'border', '1px solid red');

//给test分别添加名为red和blue的class
//此时html文件已经有 .red 背景色为红的 style ，可以辅助判断
dom.class.add(test, 'red')
dom.class.add(test, 'blue')
//移除test名为red的class
dom.class.remove(test, 'red')
//判断test中是否有名为blue的class
console.log(dom.class.has(test, 'blue'))

//创建鼠标点击时执行的函数
const fn = ()=>{
    console.log('点击test')
}
//为test添加监听事件
dom.on(test, 'click', fn)
//移除test的监听事件
dom.off(test, 'click', fn)

//获取id为test的第一个div
const testDiv = dom.find('#test')[0]
console.log(testDiv)
//获取testDiv元素里，class为red的元素
console.log(dom.find('.red', testDiv))

//获取test的父元素
console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
//获取s2的兄弟姐妹
console.log(dom.siblings(s2))
//获取s2的下一个节点
console.log(dom.next(s2))
//获取s2的上一个节点
console.log(dom.previous(s2))

//对id为travel的div遍历，使其style的color为red
const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red'))

//获取s2在兄弟姐妹中的下标
console.log(dom.index(s2))