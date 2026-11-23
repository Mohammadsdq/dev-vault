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

export function remove(id) {
    const existingApi = apiData.find(api => api.id === id);

    if (!existingApi) return undefined;

    const apiIndex = apiData.findIndex(api => api.id === id);
    const deletedApiData = apiData[apiIndex];

    apiData.splice(apiIndex, 1)

    return deletedApiData;
};

export function search(keyword) {
    if (typeof keyword !== "string" || !keyword.trim()) {
        return [];
    };

    const normalizedKeyword = keyword.toLowerCase().trim();
    return apiData.filter(api => {
        const normalizedName = api.name.toLowerCase().trim();
        return normalizedName.includes(normalizedKeyword);
    });
};

export function filterByCategory(keyword) {
    if (typeof keyword !== "string" || !keyword.trim()) {
        return [];
    };

    const normalizedKeyword = keyword.toLowerCase().trim();
    return apiData.filter(api => {
        const normalizedCategory = api.category.toLowerCase().trim();
        return normalizedCategory.includes(normalizedKeyword);
    });
}

export function sortByName(order) {
    const sortedData = [...apiData];
    if (order == "asc") {
        return sortedData.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
    } else if (order == "desc") {
        return sortedData.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })
    } else {
        return [];
    }
}