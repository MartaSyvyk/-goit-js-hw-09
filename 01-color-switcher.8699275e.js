refs={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let t=null;refs.startButton.addEventListener("click",(function(){t=setInterval((()=>{refs.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),refs.startButton.setAttribute("disabled","true"),refs.stopButton.removeAttribute("disabled")})),refs.stopButton.addEventListener("click",(function(){clearInterval(t),refs.startButton.removeAttribute("disabled"),refs.stopButton.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.8699275e.js.map
