import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Buttons = ({ _id }) => {
    let deleteTaskButton =
        <button className="button is-danger" type="button">
            Delete Task
        </button>

    return (
        <Fragment>
            <div className="field">
                <div className="level">
                    <div className="level-left">
                        {_id ? deleteTaskButton : ''}
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <Link to='/' className="control">
                                <button className="button is-text" type="button">
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                        <div className="level-item">
                            <button type="submit" className="button is-link">
                                {_id ? 'Atualizar Task' : 'Salvar Task'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Buttons;