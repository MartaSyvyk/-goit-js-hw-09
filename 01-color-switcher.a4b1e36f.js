!function(){refs={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};var t=null;refs.startButton.addEventListener("click",(function(){t=setInterval((function(){refs.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),refs.startButton.setAttribute("disabled","true"),refs.stopButton.removeAttribute("disabled")})),refs.stopButton.addEventListener("click",(function(){clearInterval(t),refs.startButton.removeAttribute("disabled"),refs.stopButton.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.a4b1e36f.js.map
