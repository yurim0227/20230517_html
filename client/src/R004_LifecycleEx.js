import { Component } from "react";

class R004_LifecycleEx extends Component{
    static getDeriver(){
        console.log("2. getDeriver");
        return {};
    }
    render(){
        console.log("3 rend R004 call");
        return (
            <h2>[This is Re-render Component]</h2>
        );
    }
}
export default R004_LifecycleEx;