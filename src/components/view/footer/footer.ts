import rsLogo from './logo-rsschool.svg';
import ghLogo from './gh-logo.png';

export default function footer() {
    (document.getElementById('rs-logo') as HTMLImageElement).src = rsLogo;
    (document.getElementById('gh-logo') as HTMLImageElement).src = ghLogo;
}
