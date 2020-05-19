import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getGreeting } from '@/services/home';

// HomeStore的State接口模型
export interface HomeStoreState {
    greeting: string;
}

// HomeStore接口模型
interface HomeStoreType {
    namespace: string;
    state: HomeStoreState;
    effects: {
        getGreeting: Effect;
    };
    reducers: {
        setGreeting: Reducer;
    };
}

// HomeStore
const HomeStore: HomeStoreType = {
    namespace: 'home',
    state: {
        greeting: '1',
    },
    effects: {
        *getGreeting(_, { call, put }) {
            const { greeting } = yield call(getGreeting);
            yield put({ type: 'setGreeting', payload: { greeting } });
        },
    },
    reducers: {
        setGreeting(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};

export default HomeStore;
