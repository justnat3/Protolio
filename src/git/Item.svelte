<script>
    export let project_name;
    export let short_description;
    export let ref_to_project;
    export let link_name = "Project on Github";
    export let avatar = "https://avatars.githubusercontent.com/u/58314490?s=460&u=87cdff912b74f95d5d5228b4dfaa951d6091163c&v=4";
    if (short_description.length > 100) { console.error(`short_descript is too long for ${project_name}`); }
</script>

<li class="flex items-center max-w-2 max-h-xl">
  <img
    src="{avatar}"
    alt="avatar"
    class="w-10 h-10 object-cover rounded-full mx-4"
  />
  <p>
    <a href="{ref_to_project}" class="text-gray-700 font-bold mx-1 hover:underline"
      >{project_name}</a
    >
    <br>
    <span class="text-gray-700 text-sm font-light">{short_description}</span>
    <br>
    <br>
  </p>
</li>
