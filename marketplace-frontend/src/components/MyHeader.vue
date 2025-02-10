<template>
  <header>
    <div class="header-content">
      <div class="marketplace-info">
        <div class="marketplace-name">MARKET PLACE</div>
        <div class="sell-junk">Sell you Junk</div>
      </div>
      <nav>
        <button @click="login">Log In</button>
        <button @click="register">Register</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    login() {
      alert('Login clicked'); // Replace with actual logic
    },
    register() {
      alert('Register clicked'); // Replace with actual logic
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  /* Removed background-color: #f0f0f0; */
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem; /* Added margin to create space */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.marketplace-info {
  text-align: center;
}

.marketplace-name {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.sell-junk {
  font-size: 1rem;
  color: #666;
}

nav button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  font-size: 1rem;
}

nav button:hover {
  background-color: #0056b3;
}
</style>
