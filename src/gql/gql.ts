/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($cartId: ID!, $productId: String!) {\n  cartAddItem(id: $cartId, input: {item: {productId: $productId, quantity: 1}}) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "mutation ordersCreate($cartId: ID!, $email: String!) {\n  cartComplete(cartId: $cartId, userEmail: $email) {\n    id\n  }\n}": types.OrdersCreateDocument,
    "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      id\n      lines\n      status\n      totalAmount\n    }\n    meta {\n      count\n      total\n    }\n  }\n}": types.OrdersGetByEmailDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n  price\n  rating\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchInput($searchInput: String!) {\n  products(search: $searchInput) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetBySearchInputDocument,
    "query ProductsGetList($take: Int!, $skip: Int!, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($author: String!, $rating: Int!, $description: String!, $title: String!, $productId: ID!, $email: String!) {\n  reviewCreate(\n    author: $author\n    rating: $rating\n    description: $description\n    title: $title\n    productId: $productId\n    email: $email\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment Review on Review {\n  id\n  title\n  author\n  rating\n  description\n}": types.ReviewFragmentDoc,
    "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    id\n    rating\n    reviews {\n      id\n      author\n      rating\n      title\n      description\n    }\n  }\n}": types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartId: ID!, $productId: String!) {\n  cartAddItem(id: $cartId, input: {item: {productId: $productId, quantity: 1}}) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  cartFindOrCreate(input: {}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ordersCreate($cartId: ID!, $email: String!) {\n  cartComplete(cartId: $cartId, userEmail: $email) {\n    id\n  }\n}"): typeof import('./graphql').OrdersCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      id\n      lines\n      status\n      totalAmount\n    }\n    meta {\n      count\n      total\n    }\n  }\n}"): typeof import('./graphql').OrdersGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchInput($searchInput: String!) {\n  products(search: $searchInput) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetBySearchInputDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $rating: Int!, $description: String!, $title: String!, $productId: ID!, $email: String!) {\n  reviewCreate(\n    author: $author\n    rating: $rating\n    description: $description\n    title: $title\n    productId: $productId\n    email: $email\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Review on Review {\n  id\n  title\n  author\n  rating\n  description\n}"): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($id: ID!) {\n  product(id: $id) {\n    id\n    rating\n    reviews {\n      id\n      author\n      rating\n      title\n      description\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
