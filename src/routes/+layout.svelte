<script lang="ts">
    import Header from "./Header.svelte";
    let {children} = $props();
</script>

<main>
  <Header />
  {@render children()}
</main>

<style>
  :global(body) {
    margin: 0;
  }
  main{
    padding-inline: 2rem;
    padding-block: 1rem;
  }
</style>