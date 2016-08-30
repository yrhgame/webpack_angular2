require('assets/css/style.css');
require('nm/rxjs/src/Rx.ts');
require('nm/angular2/bundles/angular2.dev');

import {bootstrap}    from 'nm/angular2/platform/browser'
import {AppComponent} from 'components/hello'

bootstrap(AppComponent);
