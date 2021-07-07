const CUSTOMER_ENDPOINT = 'http://localhost:8080/customer';
const PRODUCTS_ENDPOINT = 'http://localhost:8080/products';

const getFetchOptions = (method, data) => ({
    method: method,
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data)
})

export const getCustomer = async () => {
    try {
        const resp = await fetch(CUSTOMER_ENDPOINT);
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const getProducts = async () => {
    try {
        const resp = await fetch(PRODUCTS_ENDPOINT);
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const createCustomer = async (customer) => {
    try {
        const resp = await fetch(CUSTOMER_ENDPOINT, getFetchOptions("POST", customer))
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const createProducts = async (products) => {
    try {
        const resp = await fetch(PRODUCTS_ENDPOINT, getFetchOptions("POST", products))
        return await resp.json();
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export const updateCustomer = async (_id) => {
    try {
        const resp = await fetch(CUSTOMER_ENDPOINT + "/" + _id, getFetchOptions("PUT", {text: _id.text }));
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const updateProducts = async (_id) => {
    try {
        const resp = await fetch(PRODUCTS_ENDPOINT + "/" + _id, getFetchOptions("PUT", {text: _id.text }));
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const deleteCustomer = async (_id) => {
    try {
        const resp = await fetch(CUSTOMER_ENDPOINT + "/" + _id, { method: "DELETE"})
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const deleteProducts = async (_id) => {
    try {
        const resp = await fetch(PRODUCTS_ENDPOINT + "/" + _id, { method: "DELETE"})
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}