import { ArticlesType, SourcesType } from 'components/controller/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesType) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: SourcesType) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
