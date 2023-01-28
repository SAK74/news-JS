type Source = Record<'id' | 'name' | 'description' | 'url' | 'category' | 'language' | 'country', string>;

interface Article
    extends Record<'author' | 'content' | 'description' | 'publishedAt' | 'title' | 'url' | 'urlToImage', string> {
    source: Record<'id' | 'name', string>;
}

interface General {
    status: 'ok' | 'error';
}

export interface SourcesType extends General {
    sources: Source[];
}

export interface ArticlesType extends General {
    totalResults: number;
    articles: Article[];
}
