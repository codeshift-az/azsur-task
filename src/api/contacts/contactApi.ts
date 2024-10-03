import { createNewClientAPIInstance } from '@api/factory.ts';
// import axios from 'axios';

export const contactApi = createNewClientAPIInstance('/contact');
export const contactFetcher = (url: string) => contactApi.get(url).then(res => res?.data);
