import { SourcesType } from 'components/controller/types';
import './sources.css';

class Sources {
    draw(data: SourcesType['sources']) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.getElementById('sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.getElementsByClassName('sources')[0].append(fragment);
    }
}

export default Sources;
