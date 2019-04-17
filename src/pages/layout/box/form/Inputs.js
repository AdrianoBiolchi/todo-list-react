import React, { Fragment } from 'react';

// Components
import TextInput from '../../../../components/TextInput';

const Inputs = () => {
    return (
        <Fragment>
            <div className="field">
                <div className="control is-expanded is-task-title">
                    <TextInput
                        className="is-medium"
                        placeholder='Título da Task'
                        id="title"
                        autoFocus={true}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Details
                        <span className="has-text-weight-light">
                        - Optional
                        </span>
                </label>
                <div className="control">
                    <textarea
                        className="textarea is-shadowless"
                        id="details"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Remember me at
                        <span className="has-text-weight-light">
                        - Optional
                        </span>
                </label>
                <div className="control">
                    <input
                        className="input fit-content is-shadowless"
                        type="date"
                        id="remember_me_date"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Inputs;