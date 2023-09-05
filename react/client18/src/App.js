import logo from './logo.svg';
import './App.css';
import PropsDatatype from './R018_PropsDatatype';
import PropsObjVal from './R020_PropsObjVal'
import PropsRequired from './R021_PropsRequired'
import PropsDefault from './R022_PropsDefault'
import PropsNode from './R023_PropsNode'
import ReactState from './R024_ReactState'
import SetState from './R025_SetState'
import ForceUpdate from './R026_ForceUpdate'
import ComponentClass from './R027_ComponentClass'
import PureComponentClass from './R028_PureComponentClass'
import ShallowEqual from './R029_ShallowEqual';
import FunctionComponent from './R030_FunctionComponent'
import ReactHook from './R031_ReactHook'
import Fragments from './R032_Fragments'
import ReturnMap from './R033_ReturnMap'

function App() {
  // DB 에서 데이터 읽어오기
  let bno = 35;
  let btitle = "글제목입니다.";
  let obj1 = {
    String:{btitle},
    Array:[0, 1, 8],
    n1:{bno},
    Boolean:true,
    o1:{react:"리액트", twohunderd:"200"},
    f1:console.log("FunctionProps: function!"),
    BooleanTrueFalse : true
  };
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype
        String="react"
        Array={1==1}
        n1={[0, 1, 8]}
        Boolean={200}
        o1={{react:"리액트", twohunderd:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse = {1!=1}
      />
      <PropsDatatype
        String={btitle}
        Array={1==1}
        n1={bno}
        Boolean={200}
        o1={{react:"리액트", twohunderd:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse = {true}
      />
      {/* <PropsDatatype
        Object Json={obj1}
      /> */}
      <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
      <PropsRequired ReactNumber={200}/>
      <PropsDefault ReactNumber={200}/>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
      <ReactState reactString={"react"}/>
      <SetState/>
      <ForceUpdate/>
      <ComponentClass/>
      <PureComponentClass/>
      <ShallowEqual/>
      <FunctionComponent contents="[ THIS IS FunctionComponent ]"/>
      <ReactHook/>
      <Fragments/>
      <ReturnMap/>
    </div>
  );
}

export default App;
