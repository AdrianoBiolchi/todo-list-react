import React from 'react';

// Components
import Tab from './menuTab/Tab';

const MenuTab = () => {
    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab
                    text="Incomplete"
                    quantity={1}
                    className={'is-active'}
                />

                <Tab
                    text="Completed"
                    quantity={0}
                    className={''}
                />
            </ul>
        </div>
    );
};

export default MenuTab;