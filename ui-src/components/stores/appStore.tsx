import {observable} from 'mobx';

export interface AppStoreProps{
    store?:{
        readonly file: string;
        setFile: (file:string) => string
    }
}

export default class AppStore{
    @observable file:string = '';
    setFile(file:string):string{
        return this.file = file;
    }
}