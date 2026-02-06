import { createStore } from "react-redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export default store;