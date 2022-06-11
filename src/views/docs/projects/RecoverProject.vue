<template>
    <p>
        Recover project with specified ID from trash bin
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    projects_recover(
        where: {
            workspace: {id: *workspace*}
            id: *project_id*
        }
    )
    }
    </code></pre>
</template>
