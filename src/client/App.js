"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const App = () => {
    const [text, SetText] = React.useState();
    React.useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(res => SetText(res[0].login));
    }, []);
    return React.createElement("h1", null, text);
};
(0, react_dom_1.render)(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=App.js.map