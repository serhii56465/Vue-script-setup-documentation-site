<template>
    <p>
        Update workspace roles
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    roles_workspace_update(
        where: {
            workspace: {id: "e92bda1b-c9fa-4ee9-976a-49a37809534f"}
            id: "41460c62-6ecd-4eea-9a8f-cacec53e8959"
        }
        data: {
            users: "Hide"
        }
    ){
        id
    }
}
    </code></pre>
</template>
