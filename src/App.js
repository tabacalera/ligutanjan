import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import RouterManager from "./app/RouteManager";
import addressBooks from "./app/redux/AddressBook/AddressBook.reducers";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({ addressBooks });
const store = createStore(reducers, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <RouterManager />
    </Provider>
  );
}

export default App;
