<script lang="ts">
  import { HomeIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-svelte";
</script>

<header>
  <h1>E-Commie</h1>
  <form >
    <input type="search">
    <button type="submit"><SearchIcon /></button>
  </form>
  <nav>
    <a href="/"><HomeIcon /></a>
    <a href="/account"><UserIcon /></a>
    <a href="/cart"><ShoppingCartIcon /></a>
  </nav>
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
  form {
    display: flex;
  }
  input{
    width: 20rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }
  input:focus {
    outline: none;
  }
  button {
    background: none;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
  button:hover {
    cursor: pointer;
    background-color: rgb(196, 196, 196);
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
  nav {
    display: flex;
    column-gap: .5rem;
  }
  a {
    color:black;
    padding: .25rem;
  }
  a:hover {
    cursor: pointer;
    background-color: rgb(196, 196, 196);
    border-radius: .25rem;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
</style>