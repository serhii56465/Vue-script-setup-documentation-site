<template>
    <p>
        Delete project with specified ID.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    projects_delete(
        where: {
            workspace: {id: *workspace*}
            id: *project_id*
        }
        permanent_deletion: false  # True - project will be deleted. False - project will be moved to trash bin.
        )
    }
    </code></pre>
</template>
