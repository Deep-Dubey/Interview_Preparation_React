import "./App.css";
import DebounceInput from "./components/DebounceInput";
import PostList from "./components/PostList";
import UserInfo from "./components/UserInfo";
import UseWindowHook from "./hooks/UseWindowHook";
// import UseImperativeHook from "./components/UseImperativeHook";
// import UseMemoAndCallBackHook from "./components/UseMemoAndCallBackHook";
// import Mapfilterreduce from "./components/Mapfilterreduce";
// import UseEffectHook from "./components/UseEffectHook";
// import UseState from "./components/useState";
// import UseRefHook from "./components/UseRefHook";
// import ThemedComponent from "./components/ThemedComponent";
// import ThemeContext from "./components/ThemeContext";
// import UseReducerHook from "./components/UseReducerHook";

function App() {
  // const {width,height} = UseWindowHook();
  return (
    <>
      {/* <Mapfilterreduce /> */}
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <ThemeContext>
        <ThemedComponent />
      </ThemeContext> */}
      {/* <UseReducerHook /> */}
      {/* <UseMemoAndCallBackHook /> */}
      {/* <UseImperativeHook /> */}
      {/* <p>Width: {width}</p>
      <p>Height: {height}</p> */}
      {/* <PostList /> */}
      {/* <DebounceInput /> */}
      <UserInfo />
    </>
  );
}

export default App;
