<template>
    <p>
        Delete project role with all individual roles that it contains
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    roles_project_delete(
        where: {
            project: {id: $project_id}
            id: "2ac04081-fb6e-4370-abe2-c8837fa85a5e"
        }
        )
}
    </code></pre>
</template>
