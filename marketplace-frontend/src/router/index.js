import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import AddProduct from '../components/AddProduct.vue';
import EditProduct from '../components/EditProduct.vue'; // Import EditProduct

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
    props: (route) => ({ products: route.params.products }) // Pass products as props if needed
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true // Enable passing route params as props
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true // Enable passing route params as props for editing
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
