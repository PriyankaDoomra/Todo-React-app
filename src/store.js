import combinedreducer from "./reducer/index";
import {createStore} from "redux";

const store=createStore(combinedreducer);
export default store;