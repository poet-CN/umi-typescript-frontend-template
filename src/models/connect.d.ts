import { GlobalStoreState } from '@/models/global';
import { HomeStoreState } from '@/models/home/home';

interface Location {
    pathname: string;
    search: string;
    query: {
        [key: string]: string;
    };
}

interface History {
    push: (path: string) => void;
    replace: (path: string) => void;
    go: (num?: number) => void;
    back: (num?: number) => void;
}

interface Loading {
    global: boolean;
    models: {
        [key: string]: boolean;
    };
    effects: {
        [key: string]: boolean;
    };
}

export interface ConnectType {
    global: GlobalStoreState;
    loading: Loading;
    location: Location;
    history: History;
    home: HomeStoreState;
}
