import { apiData } from "../data/apiData.js";

export function getAll() {
    return apiData;
}

export function getById(id) {
    return apiData.find(api => api.id === id);
}

export function getByCategory(category) {
    return apiData.filter(api => api.category === category);
}

export function create(apiInfo) {
    if (!apiInfo) return;

    const newApi = {
        ...apiInfo,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    apiData.push(newApi)

    return newApi;
};