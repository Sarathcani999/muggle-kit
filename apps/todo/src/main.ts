import { createApp } from '@sarathcani999/mugglekit';
import { App } from './App';

const app = createApp({
  state: {},
  view: App
});

app.mount(document.getElementById('app')!); 