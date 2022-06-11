<template>
    <p>
        Upsert
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    entry_types_upsert(
        where:{
            project: {
                id: $project_id
            }
            name: {
                locale: "en"
                text_value__contains: "price"
            }
        }
    ){
        id
    }
}
    </code></pre>
</template>
