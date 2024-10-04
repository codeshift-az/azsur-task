import { createNewClientAPIInstance } from '@api/factory.ts';

export const slideApi = createNewClientAPIInstance('/slides');
export const slideFetcher = (url: string) => slideApi.get(url).then(res => res?.data);
