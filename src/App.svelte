<script>
  // if you wrap in curlys it things its not a component
  import Nav from "./nav/Nav.svelte";
  import Blog from "./Blog-posts/Blog.svelte";
  import Git from "./git/Git.svelte";
  import "tailwindcss/tailwind.css";
  import Footer from "./footer/Footer.svelte";
  import Picture from "./jumbotron/Picture.svelte";
  import Jumbo from "./jumbotron/Jumbo.svelte";
</script>

<Nav />

<div class="grid grid-cols-3 grid-row-2 container mx-auto">
  <div class><Picture /></div>
  <div class="row-start-1 col-span-2"><Jumbo /></div>

  <div class="row-start-2 col-span-2"><Blog /></div>
  <div class="row-start-2 col-span-2"><Git /></div>
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
