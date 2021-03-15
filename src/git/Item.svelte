<script>
  export let project_name;
  export let short_description;
  export let ref_to_project;
  export let avatar =
    "https://avatars.githubusercontent.com/u/58314490?s=460&u=87cdff912b74f95d5d5228b4dfaa951d6091163c&v=4";
  if (short_description.length > 100) {
    console.error(`short_descript is too long for ${project_name}`);
  }
</script>

<div class="relative pt-4 right-2 overflow-hidden">
  <div
    class="flex flex-col bg-unbleached-light max-w-lg px-6 py-4 mx-auto mr-2 mt-3 rounded-lg shadow-md"
  >
    <li class="flex items-center max-w-2 max-h-xl">
      <img
        src={avatar}
        alt="avatar"
        class="w-10 h-10 object-cover rounded-full mx-4"
      />
      <p>
        <a
          href={ref_to_project}
          class="text-xl text-gray-700 font-bold mx-1 hover:underline">{project_name}</a
        >
        <br />
        <!-- The style tag is to preserve new lines  -->
        <span
          style="white-space: pre-line;"
          class=" text-gray-700 text-lg font-light">{short_description}</span
        >
        <br />
        <br />
      </p>
    </li>
  </div>
</div>
