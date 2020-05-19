import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface GlobalStoreState {
    greeting: string;
}

interface GlobalStoreType {
    namespace: string;
    state: GlobalStoreState;
    effects: {};
    reducers: {};
}

const globalStore: GlobalStoreType = {
    namespace: 'global',
    state: {
        greeting: '你好',
    },
    effects: {

    },
    reducers: {

    },
};

export default globalStore;
