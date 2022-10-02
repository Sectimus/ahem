import React, { useId } from 'react';
import useState from '../js/reactextentions.js';

const Checkbox = ({label, description, value, onChange}) => {
    const [_value, _setValue] = useState(value);
    const id = useId();

    return(
        <>
            <div className="form-check">
                <input
                type="checkbox"
                className="form-check-input"
                id={id}
                value={_value}
                defaultChecked={_value}
                onChange={e=>_setValue(e.target.checked, (_value)=>onChange(_value))}/>
                <div>
                    <label
                    htmlFor={id}
                    className="form-check-label">
                        {label}
                    </label>
                    <p className="text-muted"><small>{description}</small></p>
                </div>
                
            </div>
            
        </>
    )
}

const Dropdown = ({label, description, options, value, onChange}) => {
    const [_options, _setOptions] = useState(options);
    const [_value, _setValue] = useState(value);
    const id = useId();

    return(
        <>
            <div>
                <select
                className="form-select"
                id={id}
                onChange={e=>_setValue(e.target.value, (_value)=>onChange(_value))}
                >
                {_options.map(({key, value}) => {
                    return(
                        <option key={value} value={value}>{key}</option>
                        )
                })}
                </select>
                <div>
                    <label
                    htmlFor={id}
                    className="form-check-label">
                        {label}
                    </label>
                    <p className="text-muted"><small>{description}</small></p>
                </div>
            </div>
            
        </>
    )
}

export {Checkbox, Dropdown};