<template>
    <p>
        Creates an item if no item was found by filters, if at least one item was found, it updates the found items.
        <br>
        In the create and update fields you should specify the same data field as in the element_create and element_update queries, respectively
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code> 
mutation($project_id: String!){
    elements_upsert(
        where: {
            project: {
                id: $project_id
            }
            attributes: {
                default_value: false
            }
        }
        data: {
            create: {
                name: [{locale: "ru-RU", text_value: "entry_el"}]
                enabled: true,
                element_type: "boolean",
                attrs: {
                    default_value: false
                }
            }
            update: {
                attrs: {
                    default_value: true
                }
            }
        }
    ){
        id
    }
}
    </code></pre>
</template>
