import { ArticlesType, SourcesType } from './types';
import { Endpoints } from './controller';

type CBType<T> = (data: T) => void;

class Loader {
    constructor(private baseLink: string, private options: { [x: string]: string }) {
        // this.baseLink = baseLink;
        // this.options = options;
    }
    protected getResp<T extends SourcesType | ArticlesType>(
        {
            endpoint,
            options = {},
        }: {
            endpoint: Endpoints;
            options?: Partial<{
                sources: string;
            }>;
        },
        callback: CBType<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Record<string, string>, endpoint: Endpoints) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: RequestInit['method'], endpoint: Endpoints, callback: CBType<T>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<T>)
            .then((data) => {
                callback(data);
            })
            .catch((err) => console.error(err));
    }
}

export default Loader;
