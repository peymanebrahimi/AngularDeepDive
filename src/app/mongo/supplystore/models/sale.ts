export interface Sale {
    id: string;
    saleDate: Date | string;
    storeLocation: string;
    couponUsed: boolean;
    purchaseMethod: string;
    customer: Customer;
    items: Item[];
}

export interface Customer {
    gender: string;
    age: number;
    email: string;
    satisfaction: number;
}

export interface Item {
    name: string;
    tags: string[];
    price: number;
    quantity: number;
}
