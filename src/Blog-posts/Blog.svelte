<script>
	import Card from "./card/Card.svelte";
	import "tailwindcss/tailwind.css";
	const jacob = {
		date: "03/14/2021",
		title: "Jacob getting pegged",
		body: "Peggers got jacob in a strangle hoold and now he is screwed.",
		author: "MelkCheeks",
		tag: "pegged",
		author_picture: "https://metro.co.uk/wp-content/uploads/2019/03/XX-Men-on-what-its-like-to-be-pegged-f158.jpg?quality=90&strip=all&crop=0px%2C0px%2C2000px%2C1051px&resize=1200%2C630"
	}
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

</script>

<div class= "pt-4">


	<Card {...jacob}></Card>
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