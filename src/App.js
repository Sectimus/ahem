import './App.scss';
import Ahemapi from './js/ahemlib'
import {useState} from 'react'
import ActionBar1 from './modules/ActionBar1';

function App() {
  const [model, setModel] = useState(Ahemapi.fromString("6 26 0 0 7 7 UIParent 0.0 45.0 1 ##$$%/&('%)#+# 0 1 6 0 MainMenuBar 0.0 5.0 1 ##$$%/&('%(#,$ 0 2 6 0 MultiBarBottomLeft 0.0 5.0 1 ##$$%/&('%(#,$ 0 3 2 0 MultiBarRight -5.0 0.0 1 #$$$%/&('%(#,$ 0 4 5 5 UIParent -5.0 -77.0 1 #$$$%/&('%(#,$ 0 10 6 0 MultiBarBottomRight 0.0 5.0 1 ##$$&('% 0 11 6 0 StanceBar 0.0 5.0 1 ##$$&('%,# 0 12 6 0 MainMenuBar 0.0 5.0 1 ##$$&('% 1 -1 4 4 UIParent -1.7 -89.5 0 ##$# 2 -1 2 2 UIParent 0.0 0.0 1 ## 3 0 4 4 UIParent -281.8 -219.2 0 $# 3 1 6 7 UIParent 300.0 250.0 1 %# 3 2 3 5 TargetFrame 10.0 0.0 1 %#&# 3 3 0 2 CompactRaidFrameManager 0.0 -7.0 1 '#(#)#-#.#/# 3 4 0 2 CompactRaidFrameManager 0.0 -5.0 1 ,#-#.#/#0#1#2( 3 5 5 5 UIParent 0.0 0.0 1 &#*$ 3 6 5 5 UIParent 0.0 0.0 1 &#*$ 4 -1 7 1 MainMenuBar 0.0 5.0 1 &#*$ 5 -1 6 0 MainMenuBar 0.0 5.0 1 &#*$ 6 0 2 0 MinimapCluster -10.0 -10.0 1 ##$#%#&+(()(*# 6 1 2 8 BuffFrame -13.0 -60.0 1 ##$#%#'+(()(*# 7 -1 6 0 MainMenuBar 0.0 5.0 1 ##$#%#'+(()(*# 8 -1 6 6 UIParent 35.0 50.0 1 #'$A%$&7 9 -1 6 0 MainMenuBar 0.0 5.0 1 #'$A%$&7 10 -1 0 0 UIParent 16.0 -116.0 1 #'$A%$&7 11 -1 8 8 UIParent -9.0 85.0 1 #'$A%$&7"));
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form className="card px-5 py-5">
          <p className="lead text-center">{model.sections[0].frame}</p>
          <ActionBar1
            model={model.sections[0]}
            onChange={(actionBar1Model)=>{
              model.sections[0] = actionBar1Model;
              setModel({...model})
            }}
          />
          </form>
        </div>
      </div>
      
      <div className="mt-5 border border-gray rounded p-5 bg-light">
        <div className="jumbotron">
            <h1 className="display-4 text-center">Import String</h1>
          <textarea
          className="form-control text-muted"
          id="importString"
          onFocus={e=>{e.target.select()}}
          rows="8"
          readOnly
          value={Ahemapi.toString(model)}
          />
        </div>
      </div>
    </div>
  );
}

  export default App;