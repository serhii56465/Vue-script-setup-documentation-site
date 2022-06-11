<template>
    <p>
        Create entry type with specified fields in project with specified ID. Description is optional field.
        <br>
        The user specified in user_id must have the role of editor or high in the specified project
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    entry_type_create(
        where: {project:{id: "403bdd72-fe7c-43db-b533-d98ed156be17"}}
        data:{
            name:[
                {locale:"ru", text_value: "ru_name"},
                {locale: "en", text_value: "en_name"}
            ]
            description: [{locale:"ru", text_value: "ru_descr"}]
            enabled:true
        }
    )
    {
        id
    }
}
    </code></pre>
    <p>
        Creating with elements
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation ($project_id: String) {
    entry_type_create(
        where: {project:{id: "403bdd72-fe7c-43db-b533-d98ed156be17"}}
        data: {
            enabled: false
            name: [{ locale: "ru-RU", text_value: "parent_type" }]
            elements: {
                add: {
                    id__in: ["element_id_1", "element_id_2"]
                }
            }
        }
    ) {
        id
    }
}
    </code></pre>
</template>
