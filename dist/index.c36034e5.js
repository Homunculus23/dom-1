window.dom = {
    //增
    //所有操作的目的位置，无法位于html文件中，包含DOM.js和main.js的script之后
    create (string) {
        const container = document.createElement("template");
        //container:容器 
        //template标签 -> 可以容纳任意标签的容器标签，它不会显示在页面中。
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after (node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append (parent, node) {
        parent.appendChild(node); //该代码会将node从原来的位置上“移”到parent的子代
    },
    wrap (node, parent) {
        dom.before(node, parent);
        dom.append(parent, node); //利用了appendChild的特性
    },
    //删：删除，并将被删除的信息作为返回值
    remove (node) {
        node.parentNode.removeChild(node);
        return node; //返回node是为了保留节点的引用
    },
    empty (node) {
        const { childNodes  } = node;
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        /*失败案例：由于 childNodes 数组是实时变化的，因此下标i无法实时捕捉目标元素并清除
        for (let i = 0; i < childNodes.length; i++) {
            dom.remove(childNodes[i]);
            array.push(childNodes[i]);
        }
        */ return array //返回包含所有子元素的数组，包含回车、空格等元素在内
        ;
    },
    //改：有则改，无则增
    //attr使用了JS中的重载法，JS只能这样重载
    attr (node, name, value) {
        if (arguments.length === 3) return node.setAttribute(name, value);
        else if (arguments.length === 2) return node.getAttribute(name);
    },
    //text中应用了 版本适配 的思想，同时还应用了重载的思想
    text (node, string) {
        if (arguments.length === 2) {
            if ("textContent" in node) node.textContent = string; //支持IE新版本，和其他所有浏览器
            else node.innerText = string; //支持IE旧版本
        } else if (arguments.length === 1) {
            if ("textContent" in node) return node.textContent;
            else return node.innerText;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    //适应三种不同格式，重载3次
    style (node, name, value) {
        if (arguments.length === 3) node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") return node.style[name];
            else if (name instanceof Object) {
                const obj = name;
                for(let key in obj)node.style[key] = obj[key];
            }
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    //查
    find (selector, scope) {
        //  短路逻辑||：从左至右取第一个真值，或最后一个
        return (scope || document).querySelectorAll(selector);
    //当元素中的内容过多时，该方法获取的返回值是一个数组，获取该元素需要加上[0]
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        let array = Array.from(node.parentNode.children);
        return array.filter((n)=>n !== node);
    },
    next (node) {
        let x = node.nextSibling;
        //短路逻辑&&：取第一个假值，或最后一个。若x不存在，则不会进入循环
        while(x && x.nodeType !== 1)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType !== 1)x = x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    index (node) {
        const list = dom.children(node.parentNode);
        for(let i = 0; i < list.length; i++){
            if (list[i] === node) return i;
        }
    }
};

//# sourceMappingURL=index.c36034e5.js.map
