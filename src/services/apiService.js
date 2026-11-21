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

export function update(id, updatedInfo) {
    const existingApi = apiData.find(api => api.id === id);

    if (!existingApi) return undefined;

    const updatedApi = {
        ...existingApi,
        ...updatedInfo,
        id: existingApi.id,
        createdAt: existingApi.createdAt,
        updatedAt: new Date().toISOString()
    };

    const apiIndex = apiData.findIndex(api => api.id === id);

    apiData.splice(apiIndex, 1, updatedApi);

    return updatedApi;
}