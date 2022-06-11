<template>
    <p>
        Edit elements that have been filtered
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    elements_update(
    where: {
        project: {
            id: ee69491d-ee55-4798-9c71-ea1576c7151e
        }
        *other element`s filters*
    }
    data:{
        name: [{locale:"ru", text_value: "ru_name"}]
        description: [{locale:"ru", text_value: "ru_descr"}]
        attrs:{
        default_value: true
        }
    }
    ){id}
}
    </code></pre>
        <br>
        How to add or delete options field in option element example

    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    elements_update(
        where: {
            project: {
                id: $project_id
            }
            element_type: "option"
        }
        data: {
            attrs: {
                options: [
                    {
                        name: "1",
                        order: 1
                        nested_options: [
                            {
                                name: "1.1",
                                order: 1
                            },
                            {
                                name: "1.2",
                                order: 2
                            }
                        ]
                    },
                    {
                        name: "2",
                        order: 2
                    }
                ]
            }

        }
    ){
        id
    }
}
    </code></pre>
</template>
