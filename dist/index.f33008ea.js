window.dom={create(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild},after(e,t){e.parentNode.insertBefore(t,e.nextSibling)},before(e,t){e.parentNode.insertBefore(t,e)},append(e,t){e.appendChild(t)},wrap(e,t){dom.before(e,t),dom.append(t,e)},remove:e=>(e.parentNode.removeChild(e),e),empty(e){const{childNodes:t}=e,n=[];let r=e.firstChild;for(;r;)n.push(dom.remove(e.firstChild)),r=e.firstChild;return n},attr(e,t,n){return 3===arguments.length?e.setAttribute(t,n):2===arguments.length?e.getAttribute(t):void 0},text(e,t){if(2===arguments.length)"textContent"in e?e.textContent=t:e.innerText=t;else if(1===arguments.length)return"textContent"in e?e.textContent:e.innerText},html(e,t){if(2===arguments.length)e.innerHTML=t;else if(1===arguments.length)return e.innerHTML},style(e,t,n){if(3===arguments.length)e.style[t]=n;else if(2===arguments.length){if("string"==typeof t)return e.style[t];if(t instanceof Object){const n=t;for(let t in n)e.style[t]=n[t]}}},class:{add(e,t){e.classList.add(t)},remove(e,t){e.classList.remove(t)},has:(e,t)=>e.classList.contains(t)},on(e,t,n){e.addEventListener(t,n)},off(e,t,n){e.removeEventListener(t,n)},find:(e,t)=>(t||document).querySelectorAll(e),parent:e=>e.parentNode,children:e=>e.children,siblings:e=>Array.from(e.parentNode.children).filter((t=>t!==e)),next(e){let t=e.nextSibling;for(;t&&1!==t.nodeType;)t=t.nextSibling;return t},previous(e){let t=e.previousSibling;for(;t&&1!==t.nodeType;)t=t.previousSibling;return t},each(e,t){for(let n=0;n<e.length;n++)t.call(null,e[n])},index(e){const t=dom.children(e.parentNode);for(let n=0;n<t.length;n++)if(t[n]===e)return n}};
//# sourceMappingURL=index.f33008ea.js.map