export interface IProductService<Product, ProductDTO> {
    getProducts({}): Product[];
    getProduct(productId: string): Product;
    createProduct(product: ProductDTO): Product;
    updateProduct(data: IUpdateProductArgs<ProductDTO>): Product;
}

interface IUpdateProductArgs<T> {
    productId: string;
    product: Partial<T>;
}