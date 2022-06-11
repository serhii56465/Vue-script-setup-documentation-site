<template>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    groups_upsert(
        where: {
            project: {id: project_id}
        }
        create: {
            name: [{locale: "ru", text_value: "ru_title"}]
            group_type: "element"
        }
        update: {
            elements: {
                add: {
                    element_type: "boolean"
                }
                remove: {element_type__not: "boolean"}
            }
        }

    )
}
    </code></pre>
</template>
