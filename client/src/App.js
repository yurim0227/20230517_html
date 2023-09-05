import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
import R005_LifecycleEx from './R005_LifecycleEx';
import $ from 'jquery';
import PropsDatatype from './R018_PropsDatatype';

function App() {
  return (
    <div className="App">
      <ImportComponent></ImportComponent>
      <h1 >Hello React</h1>
      <LifecycleEx></LifecycleEx>
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <R005_LifecycleEx
        prop_value = 'FromApp.js'
      />
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohunderd:"200"}}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;
