<template>
    <p>
        Recover entry type with specified ID from trash bin
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    entry_types_recover(
        where:{
            project: {
                id: $project_id
            }
            id: "998cf87e-7e1c-4d1c-9711-7afc45e9d0b7"
        }
        first: 5
        order_by: "updated_at"
    )
}
    </code></pre>
</template>
