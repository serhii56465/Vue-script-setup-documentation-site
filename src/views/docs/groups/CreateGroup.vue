<template>
    <p>
        Create group with specified name and type in project with specified id.
        <br>
        The user specified in user_id must have the role of editor or high in the specified project
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    group_create(
        where: {project: {id: ee69491d-ee55-4798-9c71-ea1576c7151e"}}
        data:{
            name: [{locale: "ru", text_value: "ru_title"}]
            group_type: "element"
        }
    )
                      }
    </code></pre>
    Create with entities
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    group_create(
        where: {project: {id: ee69491d-ee55-4798-9c71-ea1576c7151e"}}
        data:{
            name: [{locale: "ru", text_value: "ru_title"}]
            group_type: "element"
            elements: {
                add: {
                    id__in: [*element_id_1*, *element_id_2*]
                }
            }
        }
    )
    }
    </code></pre>
</template>
