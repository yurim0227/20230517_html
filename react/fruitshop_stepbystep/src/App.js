import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';

function App() {

  // 추가기능(input입력된 값)에서 사용할 저장공간
  const [newFruit, setNewFruit]  = useState(
    {
      name : "",
      price : "",
      amount : ""
    }
  );

  // 목록조회를 위한 저장공간
  const [fruitList, setFruitList] = useState(
    [
      {
        name : "수박",
        price : "10000",
        amount : "20"
      },
      {
        name : "참외",
        price : "3000",
        amount : "100"
      }
      // 이 부분에 추가 될 예정
    ]
  );


  const Home = ()=>{

    const arr1 = [10,20,30];
    arr1.push(40);
    const arr2 = arr1;  // 주소복사(얕은복사)
    arr2.push(50);
    console.log(arr1);
    console.log(arr2);

    const arr3 = []; // 깊은복사
    arr3[0] = arr1[0];
    arr3[1] = arr1[1];
    console.log(arr3);

    const arr4 = [arr1]; // 깊은복사- 아님 
    console.log(arr4);
    const arr5 = [arr1[0], arr1[1], arr2[2]]; // 깊은복사
    console.log(arr5);
    const arr6 = [...arr1]; // 깊은복사
    console.log(arr6);


    return (
      <>
        <h1>홈</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/insert">과일추가</Link></li>
          </ul>
        </nav>
      </>
    );
  }
  const List = ()=>{
    return (
      <>
        <h1>과일목록</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일추가</Link></li>
            <li><Link to="/">홈</Link></li>
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
              {  // return () 에서 js 문법 사용을 위해 중괄호 사용
                fruitList.map(
                  (fruit) => {
                    // return () 에서 render하고 싶은 내용을 작성
                    return (
                      <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.amount}</td>
                        <td><button onClick={ () => {console.log("aaa"); onClickDeleteHandler(fruit.name);}  }>삭제</button></td>
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

  const onClickDeleteHandler = (name) => {
    console.log(name);
    const filteredFruitListTest = fruitList.filter((fruit)=>fruit.name == name);
    console.log(filteredFruitListTest);
    const filteredFruitList = fruitList.filter((fruit)=>fruit.name != name);
    console.log(filteredFruitList);
    // 목록용 저장공간 fruitList
    setFruitList(filteredFruitList);
  }

  const onClickHandler = (event)=>{
    // 유효성검사 빈칸
    if(!newFruit.name || !newFruit.price || !newFruit.amount ){
      alert("모든값을 입력해주세요.")
      return;
    }
    // 유효성검사 - 같은 name 없도록
    const isExist = fruitList.some((fruit)=>fruit.name == newFruit.name || fruit.price == newFruit.price ||fruit.amount == newFruit.amount);
    if(isExist){
      alert("이미 등록된 과일이름입니다. 이름을 다시 입력해주세요.");
      // 이름 입력란을 공란으로 만들기
      setNewFruit({...newFruit, ["name"]:""});
      return;
    }

    console.log("꼭 확인 !!! 클릭");
    console.log(event.target); // js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함.!!!
    console.log("---------insert");
    console.log(newFruit);
    // 추가기능용 저장공간 newFruit 을 목록용 저장공간 fruitList 에 추가하기
    setFruitList([...fruitList, newFruit]);

    // 이름,가격,수량 입력란을 공란으로 만들기
    setNewFruit({ name : "",  price : "",   amount : ""  });
  }
  const onChangeHandler = (event)=>{
    console.log("꼭 확인 !!! 변경");
    console.log(event.target);  // js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함.!!!
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target;
    console.log(name);
    console.log(value);
    console.log("---------s");
    console.log(newFruit);
    // 추가기능용 저장공간 newFruit 에 값변경
    setNewFruit({...newFruit, [name]:value});
    console.log(newFruit);  // 변경됨 바로 확인 안됨!!
    console.log("---------e");
  }
  const Insert = ()=>{
    return (
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <div><span>이름</span><input onChange={onChangeHandler} name="name" value={newFruit.name}></input></div>
          <div><span>가격</span><input onChange={onChangeHandler} name="price" value={newFruit.price}></input></div>
          <div><span>수량</span><input onChange={onChangeHandler} name="amount" value={newFruit.amount}></input></div>
          <div><button onClick={onClickHandler} >등록</button></div>
        </div>
        <List></List>
      </>
    );
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