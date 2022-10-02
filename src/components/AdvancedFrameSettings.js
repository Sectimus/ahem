import { Text } from './Form'
import useState from '../js/reactextentions.js';
import { memo } from 'react';
import isEqual from 'lodash.isequal';
import Ahemapi from '../js/ahemlib'
import { getTextLength } from '../js/tools.js'

const AdvancedFrameSettings = ({model, onChange}) => {
    const [_model, _setModel] = useState(model);
    console.log(_model)

    return(
        <>
            <div>
                <span>Anchor the </span>
                <select
                    className="badge fw-normal bg-gray text-dark border-0" style={{width: "auto"}}
                    onChange={e=>{
                        _model.point = e.target.value
                        _setModel({..._model}, (_model)=>onChange(_model))
                    }}
                    value={_model.point}
                >
                    {Object.keys(Ahemapi.ANCHORS).map(anchor => {
                        return(
                            <option key={anchor} value={anchor}>{Ahemapi.ANCHORS[anchor]}</option>
                        )
                    })}
                </select>
                <span> of </span>
                <span className="text-primary">{_model.frame}</span>
                <span> to the </span>
                <select
                    className="badge fw-normal bg-gray text-dark border-0" style={{width: "auto"}}
                    onChange={e=>{
                        _model.relativepoint = e.target.value
                        _setModel({..._model}, (_model)=>onChange(_model))
                    }}
                    value={_model.relativepoint}
                >
                    {Object.keys(Ahemapi.ANCHORS).map(anchor => {
                        return(
                            <option key={anchor} value={anchor}>{Ahemapi.ANCHORS[anchor]}</option>
                        )
                    })}
                </select>
                <span> of </span>
                {_model.parent}
                <span> offset by </span>
                <span className="input-group w-auto d-inline-flex">
                    <span className="input-group-text py-0 lh-1 ">x</span>
                    <input 
                        type="number" 
                        className='form-control py-0 lh-1'
                        value={_model.xoffset}
                        style={{
                            width: 41+getTextLength(_model.xoffset),
                            minWidth: 50,
                            lineHeight: 1
                        }}
                        onChange={(e)=>{
                            _model.xoffset = e.target.value;
                            _setModel({..._model}, (_model)=>onChange(_model));
                        }}
                    />
                </span>
                <span> and </span>
                <span className="input-group w-auto d-inline-flex">
                    <span className="input-group-text py-0 lh-1">y</span>
                    <input 
                        type="number" 
                        className='form-control py-0 lh-1'
                        value={_model.yoffset}
                        style={{
                            width: 41+getTextLength(_model.yoffset),
                            minWidth: 50,
                        }}
                        onChange={(e)=>{
                            _model.yoffset = e.target.value;
                            _setModel({..._model}, (_model)=>onChange(_model));
                        }}
                    />
                </span>
            </div>
        </>
    )
}

export default memo(AdvancedFrameSettings, (a, b)=>isEqual(a.model, b.model));