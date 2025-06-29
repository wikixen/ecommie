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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;
    padding-block: 1rem;
  }
</style>