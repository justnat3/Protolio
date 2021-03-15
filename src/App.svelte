<script>
  // if you wrap in curlys it things its not a component
  import Nav from "./nav/Nav.svelte";
  import Blog from "./Blog-posts/Blog.svelte";
  import Git from "./git/Git.svelte";
  import "tailwindcss/tailwind.css";
  import Footer from "./footer/Footer.svelte";
</script>

<Nav />
<div class=" absolute right-0">
  <Git />
</div>

<div>
  <Blog />
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
