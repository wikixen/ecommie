<script lang="ts">
  import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-svelte";
</script>

<header>
  <h1>E-Commie</h1>
  <section>
    <a><SearchIcon /></a>
    <a><UserIcon /></a>
    <a href="/cart"><ShoppingCartIcon /></a>
  </section>
</header>


<style>
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  h1 {
    font-weight: bold;
  }
  section {
    display: flex;
    column-gap: .5rem;
  }
  a {
    color:black;
    padding: .25rem;
  }
  a:hover {
    background-color: rgb(196, 196, 196);
    border-radius: .25rem;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
</style>