import { ArticlesType, SourcesType } from 'components/controller/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import addFooter from '../view/footer/footer';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            // .querySelector('.sources')
            .getElementsByClassName('sources')[0]
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ArticlesType) => this.view.drawNews(data))
            );
        this.controller.getSources((data: SourcesType) => this.view.drawSources(data));
        addFooter();
    }
}

export default App;
