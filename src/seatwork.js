window.dom = {
    find (selector, scope) {   //获取scope中，所有id为selector的元素
        return (scope || document).querySelectorAll(selector);
    },
    style (node, name, value) {  //修改node中的style属性
        if(arguments.length === 3){
            node.style[name] = value;
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                const obj = name;
                for(let key in obj){
                    node.style[key] = obj[key];
                }
            }
        }
    },
    each (nodeList, fn) {   //遍历nodeList，用fn进行操作
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素