const React = require('react')

const Layout = (props) => {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="stylesheets/css/bootstrap.css" />
            </head>
            <body className="container">
                <hr />
                <h1>{props.title}</h1>
                <hr />
                {props.children}
            </body>
        </html>
    );
};

module.exports = Layout