import React from 'react'
import $ from 'jquery'


export default class App extends React.Component {

    componentDidMount() {
        $('<h1 />')
            .text('Hello world from jQuery')
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>

                <header>

                </header>

                <hr/>

                <div className="box">
                    <h2 className="box-title">box title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at dolores eligendi fuga
                        nobis placeat quae qui sapiente voluptatibus voluptatum. Consectetur deleniti molestiae nisi nostrum
                        provident quasi ratione rerum tenetur.
                    </p>
                </div>

            </React.Fragment>
        )
    }
}