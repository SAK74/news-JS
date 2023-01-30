import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'deefcabaa3e644bd931d87b6cc9e12b0', // get Your private key in https://newsapi.org/
        });
    }
}

export default AppLoader;
