// Why..?

function getResponse<T>(data: T[]) {
    return {
        success: true,
        status: 200,
        data,
    };
}

const numbers = getResponse([1, 2, 3]).data;
const strings = getResponse<string>([
    "Zigzagging",
    "Wrangling",
    "Finagling",
]).data;
const mix = getResponse([1, "Wrangling", true]).data;

// Generic Type
type APIResponse<T> = {
    data: T;
    isError: boolean;
};

type UserAPIResponse = APIResponse<{ name: string; age: number }>;

type BlogAPIResponse = APIResponse<{ title: string; views: number }>;

// Generic Interface
interface User {
    username: string;
}

interface Product {
    title: string;
}

interface Result<T> {
    data: T | null;
    errorMsg: string | null;
}

function fetch<T>(url: string): Result<T> {
    return { data: null, errorMsg: null };
}

// fetch User
let result = fetch<User>('../api/users');
let user = result.data;
if (user) {
    console.log(user.username);
}

// fetch Product
let result1 = fetch<Product>('../api/product');
let product = result1.data;
if (product) {
    console.log(product.title);
}

