import Friends from './Friends.svelte.js';

import mountComponent from '../mount-util';

export const COMPONENT_LOADER = {load: () => {mountComponent(Friends)}};

window['friends'] = COMPONENT_LOADER.load;