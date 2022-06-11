<template>
    <p>
        Create project with specified name in workspace with specified ID.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    project_create(
        where: {workspace:{id: "f5549360-2f6c-4e7f-bd39-3c2e3a477353"}}
        data: {
            name: [{locale: "ru", text_value: "ru_proj_name"}]
        }
    )
    {
        id
    }
}
    </code></pre>
</template>
