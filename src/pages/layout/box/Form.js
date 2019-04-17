import React, { Component, Fragment } from 'react'

// Components
import Inputs from './form/Inputs';
import Buttons from './form/Buttons';

class Form extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="title has-text-grey-dark">
                    Create Task
                </h1>
                <form>
                    <Inputs />
                    <Buttons />
                </form>
            </Fragment>
        );
    }
}

export default Form;