<script>
    export let title;
    export let body;
    export let author_picture = "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80";
    export let reference_to_page = "#";
    export let tag;
    export let author;
    export let date;
</script>

<div class="max-w-4xl px-10 mt-6 py-6 bg-unbleached-light rounded-lg shadow-xl">
  <div class="flex justify-between items-center">
    <span class="font-light text-gray-600">{date}</span>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a
      href="#"
      class="px-2 py-1 bg-gray-800 text-unbleached-light font-bold rounded hover:bg-gray-500"
      >{tag}</a
    >
  </div>
  <div class="mt-2">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="text-2xl text-liver-dark font-bold hover:underline"
      >{title}</a
    >
    <p class="mt-2 text-liver-dark">
      {body}
    </p>
  </div>
  <div class="flex justify-between items-center mt-4">
    <a href="{reference_to_page}" class="text-rubine hover:no-underline">Read more</a>
    <div>
    <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="flex items-center"
        ><img
          src="{author_picture}"
          alt="avatar"
          class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
        />
        <h1 class="text-gray-700 font-bold hover:underline">{author}</h1>
      </a>
    </div>
  </div>
</div>
