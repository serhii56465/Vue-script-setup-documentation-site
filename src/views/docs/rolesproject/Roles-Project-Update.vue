<template>
    <p>
        Update global project role
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    roles_project_update(
        where: {
            project: {id: $project_id}
            id: "5946bec8-e6c8-4cc8-82be-8528ad070322"
        }
        data: {
            billing: "Hide"
        }
        ){
            id
            billing
        }
}
    </code></pre>
</template>
