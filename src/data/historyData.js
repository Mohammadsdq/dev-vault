const historyData = [
    {
        id: crypto.randomUUID(),
        method: "GET",
        url: "https://localhost:300/api/users",
        status: 200,
        responseTime: 150,
        createdAt: new Date().toISOString(),
    },
    {
        id: crypto.randomUUID(),
        method: "GET",
        url: "https://localhost:300/api/products",
        status: 200,
        responseTime: 150,
        createdAt: new Date().toISOString(),
    },
    {
        id: crypto.randomUUID(),
        method: "GET",
        url: "https://localhost:300/api/kids",
        status: 200,
        responseTime: 150,
        createdAt: new Date().toISOString(),
    }
];