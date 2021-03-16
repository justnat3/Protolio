<script>
	import Card from "./card/Card.svelte";
	import "tailwindcss/tailwind.css";
	const astro = {
		date: "11/20/1998",
		title: "Astro gets slammed by music",
		body: "Nate showed Astro some bangers, Astro got banged by music.",
		author: "NateCunt",
		tag: "banged",
		author_picture: "https://i1.sndcdn.com/artworks-000128745432-sxqzjt-t500x500.jpg"
	}
	const melkey = {
		date: "9/21/2020",
		title: "Melkey has become a gigachad",
		body: "Melkey got so swoleton from the constant action of picking heavy things up and putting heavy things back down. in turn made himself into a gigachad.",
		author: "A7tro",
		tag: "chad",
		author_picture: "https://i.cbc.ca/1.4477957.1515441883!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/chad-gaborieau.jpg"
	}

	const optimism = {
		date: "02/25/1822",
		title: "Walking w/ Optimism",
		body: "Optimism is almost like getting punched in the face and moonwalking with einstein at the same time",
		author: "Widabeast",
		tag: "chadbeast", // tag should be array of tags
		author_picture: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/55D5/production/_99337912_hi005100653.jpg"
	}

	

</script>
<h1 class="flex mb-0 mt-10 text-unbleached text-3xl">
  Blogs
</h1>
<div class= "pt-4">
	<Card {...optimism}></Card>
	<Card {...astro}></Card>
	<Card {...melkey}></Card>
</div>

<style global lang="postcss">

	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
  
	@tailwind utilities;
  
</style>