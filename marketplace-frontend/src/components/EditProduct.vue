<template>
  <div class="add-product-form">
    <h2>Edit Product</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" placeholder="Enter product title" />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" placeholder="Enter product description"></textarea>
      </div>

      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="price" placeholder="0" />
      </div>

      <div class="form-group">
        <label for="sellerName">Seller Name:</label>
        <input type="text" id="sellerName" v-model="sellerName" placeholder="Enter seller name" />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" v-model="phoneNumber" placeholder="Enter phone number" />
      </div>

      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="image" placeholder="Image URL" />
      </div>

      <div class="button-container">
        <button class="back-button" @click.prevent="onBack">Back</button>
        <button type="submit">Edit Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const title = ref('');
    const description = ref('');
    const price = ref(0);
    const sellerName = ref('');
    const phoneNumber = ref('');
    const image = ref('');

    // Fetch product data on component mount
    onMounted(() => {
      fetchProduct(route.params.id);
    });

    // Fetch product details by ID
    const fetchProduct = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        const data = response.data;

        title.value = data.title;
        description.value = data.description;
        price.value = data.price;
        sellerName.value = data.sellerName;
        phoneNumber.value = data.phoneNumber;
        image.value = data.image || '';
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    // Handle form submission for updating the product
    const handleSubmit = async () => {
      try {
        const payload = {
          title: title.value,
          description: description.value,
          price: price.value,
          sellerName: sellerName.value,
          phoneNumber: phoneNumber.value,
          image: image.value,
        };

        // Update the product via API
        await axios.put(`http://localhost:3000/product/${route.params.id}`, payload);

        // Redirect to the product details page after successful update
        alert('Product updated successfully!');
        router.push(`/product/${route.params.id}`); // Redirect to details page
      } catch (error) {
        console.error('Error updating product:', error);
      }
    };

    // Navigate back to the previous page or home
    const onBack = () => {
      router.push('/');
    };

    return {
      title,
      description,
      price,
      sellerName,
      phoneNumber,
      image,
      handleSubmit,
      onBack
    };
  }
};
</script>

<style scoped>
.add-product-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.add-product-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
}

.form-group textarea {
  resize: vertical;
  height: 80px;
}

.button-container {
  display: flex;
  justify-content: space-between; /* Spread buttons evenly */
}

button[type='submit'] {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type='submit']:hover {
  background-color: #45a049;
}

.back-button {
  background-color: #888888; /* Grey background */
  color: white;
  padding: 10px 15px;
  border-radius: 5px; /* Rounded corners */
}
</style>
