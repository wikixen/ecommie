<script lang="ts">
  const sample: Product[] = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  ]
</script>

<section>
  {#each sample as product}
    {@render ProductCard(product)}
  {/each}
</section>

{#snippet ProductCard(product: Product)}
  <article>
    <img src={product.image} alt={product.description}>
    <div>
      <p class="title">{product.title.length > 30 ? product.title.slice(0,30)+"..." : product.title}</p>
      <p class="price">{"$" + product.price}</p>
    </div>
  </article>
{/snippet}

<style>
  section{
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }
  article{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .75rem;
    border: 1px solid black;
    border-radius: .25rem;
    cursor: pointer;
  }
  img {
    width: 15rem;
  }
  p {
    margin: 0;
  }
  .title {
    font-size: large;
  }
</style>