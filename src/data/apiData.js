export const apiData = [
    {
        id: crypto.randomUUID(),
        name: "C Users API",
        baseUrl: "https://localhost:300/api/users",
        description: "User management",
        category: "Dev",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "B Products API",
        baseUrl: "https://localhost:300/api/products",
        description: "Product management",
        category: "Product",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "A Kids API",
        baseUrl: "https://localhost:300/api/kids",
        description: "kid management",
        category: "Dev",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];