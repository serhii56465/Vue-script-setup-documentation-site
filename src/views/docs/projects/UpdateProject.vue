<template>
    <p>
        Edit project`s name.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    projects_update(
        where: {workspace: {id: *workspace*}}
        data:{
        name: [{locale: "ru", text_value: "ru_proj_name"}]
        }
    )
    }
    </code></pre>
</template>
