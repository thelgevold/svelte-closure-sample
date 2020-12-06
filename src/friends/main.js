import Friends from './Friends.svelte';

import mountComponent from '../mount-util';

export const COMPONENT_LOADER = {load: () => {mountComponent(Friends)}};

window['friends'] = COMPONENT_LOADER.load;