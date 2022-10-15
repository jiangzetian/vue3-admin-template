import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import Login from './login';

export function setupProdMockServer() {
    createProdMockServer([...Login]);
}
