<template>
    <p>
    Recover group with specified ID from trash bin
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    groups_recover(
        where:{
            project: {id: $project_id}
            group_type: "entry"
        }
    )
    }
    </code></pre>
</template>
