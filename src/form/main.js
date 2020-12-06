import Form from './Form.svelte';

import mountComponent from '../mount-util';

export const COMPONENT_LOADER = {load: () => mountComponent(Form)};

window['form'] = COMPONENT_LOADER.load;