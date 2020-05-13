

var React = require('react');

const Layout = (props) => {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link href="css/bootstrap.css" rel="stylesheet" />
            </head>
            <body className="container">
                <hr />
                <h1>Todos app</h1>
                <hr />
                {props.children}
            </body>
        </html>
    );
};

module.exports = Layout