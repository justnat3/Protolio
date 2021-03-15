<script>
  import Item from "./Item.svelte";
    const tbsh  = {
        project_name: "Type-Bash-Shell",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus luctus tellus sed tincidunt. Pellentesque felis risus, accumsan sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus luctus tellus sed tincidunt. Pellentesque felis risus, accumsan sit amet. ",
        ref_to_project: "https://github.com/justnat3/tbsh",
    }

</script>

<div
  class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
>
  <ul class="-mx-4">
    <Item {...tbsh}></Item>
  </ul>
</div>
