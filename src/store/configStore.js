/**
 * Created by zzh on 2018/10/14.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';


import rootReducer from '../reducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export function configureStore () {
    try{
        const store = createStoreWithMiddleware(rootReducer);
        return store;
    }catch(e){
        // alert(e);
        console.log(e);
    }
}

export const store=configureStore();
