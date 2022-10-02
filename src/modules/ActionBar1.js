import { Checkbox, Dropdown, Slider } from '../components/Form'
import useState from '../js/reactextentions.js';

const ActionBar1 = ({model, onChange}) => {
    const [_model, _setModel] = useState(model);

    return(
        <>
            <Dropdown
                label="Orientation"
                description="Sets the orientation of the first action bar"
                options={[
                    {key: "Horizontal", value: '0'},
                    {key: "Vertical", value: '1'}
                ]}
                value={_model.settings['0']}
                onChange={(v)=>{
                    _model.settings['0'] = v
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Slider
                label="# of Rows"
                description="The number of rows to be displayed"
                options={
                    {min: '1', max: '4'}
                }
                value={_model.settings['1']}
                onChange={(v)=>{
                    _model.settings['1'] = v
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Slider
                label="# of Icons"
                description="The number of icons to be displayed"
                options={
                    {min: '6', max: '12'}
                }
                value={_model.settings['2']}
                onChange={(v)=>{
                    _model.settings['2'] = v
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Slider
                label="Icon Size"
                description="The size of the icons"
                options={
                    {min: '0', max: '15'}
                }
                value={_model.settings['3']}
                onChange={(v)=>{
                    _model.settings['3'] = v
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Slider
                label="Icon Padding"
                description="The amount of padding between each icon"
                options={
                    {min: '2', max: '10'}
                }
                value={_model.settings['4']}
                onChange={(v)=>{
                    _model.settings['4'] = v
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Checkbox
                label="Hide Bar Art"
                description="Hides the Gryphons on the first action bar"
                value={
                    _model.settings['6'] == '0'? false : true
                }
                onChange={(v)=>{
                    _model.settings['6'] = v ? '1' : '0'
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />
            <Checkbox
                label="Hide Bar Scrolling"
                description="Hides the bar switcher on the left of the actionbar"
                value={
                    _model.settings['8'] == '0'? false : true
                }
                onChange={(v)=>{
                    _model.settings['8'] = v ? '1' : '0'
                    _setModel({..._model}, (model)=>onChange(model));
                }}
            />    
        </>
    )
}

export default ActionBar1