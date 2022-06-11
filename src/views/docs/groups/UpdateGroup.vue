<template>
    <p>
        Edit name of group with specified id. Also, it can add and delete entity in group. They must be of the same type as the group
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String){
    groups_update(
        where: {
            project: {id: $project_id}
            group_type: "type"
        }
        data: {
            entry_types: {
                add: {
                    elements{
                        element_type: "Boolean"
                    }
                }
            }
        }
    ){
        id
    }
}

mutation($project_id: String){
    groups_update(
        where: {
            project: {id: $project_id}
            group_type: "elements"
        }
        data: {
            elements: {
                add: {
                    element_type: "boolean"
                }
                remove: {element_type__not: "boolean"}
            }
        }
    ){
        id
    }
}
    </code></pre>
</template>
