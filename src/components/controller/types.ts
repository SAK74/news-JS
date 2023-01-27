type Source = Record<'id' | 'NamedCurve' | 'RTCSessionDescription' | 'url' | 'category' | 'language', string>;

interface Article
    extends Record<'author' | 'content' | 'description' | 'publishedAt' | 'title' | 'url' | 'urlToImage', 'string'> {
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
