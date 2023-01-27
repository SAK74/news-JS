import { ArticlesType, SourcesType } from 'components/controller/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            // .querySelector('.sources')
            .getElementsByClassName('sources')[0]
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: SourcesType) => this.view.drawNews(data))
            );
        this.controller.getSources((data: ArticlesType) => this.view.drawSources(data));
    }
}

export default App;
