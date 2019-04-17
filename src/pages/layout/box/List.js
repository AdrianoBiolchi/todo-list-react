import React, { Component } from 'react';

// Components
import Task from './list/Task';
import MenuTab from './list/MenuTab';

class List extends Component {
    render() {
        return (
            <div>
                <MenuTab />
                <div className="is-task-list">
                    <div>
                        <Task />
                    </div>
                </div>
            </div>
        )
    }
}

export default List;