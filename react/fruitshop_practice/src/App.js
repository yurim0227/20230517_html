import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react'

function App() {
  const [newFruit, setNewFruit] = useState(
    {
      name : "",
      price : "",
      amount : ""
    }
  );

  const [fruitList, setFruitList] = useState(
    [
      {
        name : "딸기",
        price : "10000",
        amount : "10"
      },
      {
        name : "바나나",
        price : "20000",
        amount : "20"
      }
    ]
  );

  const Home = ()=>{
    return(
      <>
        <h1>홈</h1>
        <nav>
          <ul>
            <li><Link to='/list'>과일목록</Link></li>
            <li><Link to='/insert'>과일추가</Link></li>
          </ul>
        </nav>
      </>
    );
  }

  const List = ()=>{
    return(
      <>
        <h1>과일목록</h1>
        <nav>
          <ul>
            <li><Link to='/'>홈</Link></li>
            <li><Link to='/insert'>과일추가</Link></li>
          </ul>
        </nav>
        <div>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {
                fruitList.map(
                  (fruit)=>{
                    return(
                      <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.amount}</td>
                        <td><button onClick={()=>{onClickDeleteHandler(fruit.name)}}>삭제</button></td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }

  const Insert = ()=>{
    return(
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to='/'>홈</Link></li>
            <li><Link to='/list'>과일목록</Link></li>
          </ul>
        </nav>
        <div>
          <div><span>이름</span><input onChange={onChangeHandler} name='name' value={newFruit.name}></input></div>
          <div><span>가격</span><input onChange={onChangeHandler} name='price' value={newFruit.price}></input></div>
          <div><span>수량</span><input onChange={onChangeHandler} name='amount' value={newFruit.amount}></input></div>
          <div><button onClick={onClickHandler}>등록</button></div>
        </div>
        <List></List>
      </>
    );
  }

  const onClickDeleteHandler = (name)=>{
    const FilteredFruitlist = fruitList.filter((fruit)=>fruit.name !== name);
    setFruitList(FilteredFruitlist);
  }

  const onChangeHandler = (event)=>{
    const {name, value} = event.target;
    setNewFruit({...newFruit, [name]:value});
  }

  const onClickHandler = ()=>{
    if(!newFruit.name || !newFruit.price || !newFruit.amount){
      alert("a");
      return;
    }

    const isExist = fruitList.some((fruit)=>fruit.name === newFruit.name || fruit.price == newFruit.price ||fruit.amount == newFruit.amount);
    if(isExist){
      alert("a");
      setNewFruit({...newFruit, ["name"]:""});
      return;
    }

    setFruitList([...fruitList, newFruit]);
    setNewFruit({name : "", price : "", amount : ""});
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/insert' element={<Insert></Insert>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
