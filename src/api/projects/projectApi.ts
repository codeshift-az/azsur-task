import { createNewClientAPIInstance } from '@api/factory.ts';
// import axios from 'axios';

export const projectApi = createNewClientAPIInstance('/projects');
export const projectFetcher = (url: string) => projectApi.get(url).then(res => res?.data);
