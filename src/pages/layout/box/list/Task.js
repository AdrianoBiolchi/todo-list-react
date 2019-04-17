import React, { Component } from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './task/DoneButton';
import EditButton from './task/EditButton';

class Task extends Component {
    render() {
        return (
            <div className="box">
                <div className="columns is-mobile">

                    <div className="column is-1 is-centered">
                        <DoneButton />
                    </div>

                    <div className="column is-9">
                    <TextInput name="title" className="is-shadowless" value="Primeira Task de Teste"/>
                    </div>

                    <div className="column is-2 is-centered" >
                        <EditButton _id='1' />
                    </div>

                </div>
            </div>
        )
    }
}

export default Task;