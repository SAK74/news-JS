import { ArticlesType, SourcesType } from 'components/controller/types';
import AppLoader from './appLoader';

export enum Endpoints {
    sources = 'sources',
    content = 'everything',
}

class AppController extends AppLoader {
    getSources(callback: (data: SourcesType) => void) {
        super.getResp<SourcesType>(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: ArticlesType) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') || '';
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ArticlesType>(
                        {
                            endpoint: Endpoints.content,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentElement) {
                target = target.parentElement;
            }
        }
    }
}

export default AppController;
