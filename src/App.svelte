<script>
  // if you wrap in curlys it things its not a component
  import Nav from "./nav/Nav.svelte";
  import Blog from "./Blog-posts/Blog.svelte";
  import Git from "./git/Git.svelte";
  import "tailwindcss/tailwind.css";
  import Footer from "./footer/Footer.svelte";
</script>

<Nav />

<div class="grid grid-cols-2 grid-row-1 container mx-auto">
  <div> <Blog /> </div>
  <div> <Git /> </div>
</div>
<Footer />

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>
