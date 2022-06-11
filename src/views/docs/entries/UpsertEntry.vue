<template>
    <p>
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    entries_upsert(
        where: {
            project: {id: *project id*}
            status: "Draft"
        }
        create: {
            data:{
                name: [
                {locale: "ru" text_value: "ru_entry_name"}
                ]
                status: "Draft"
                entry_types:{
                or: [
                    {
                        id__in: [*type_id_1*, *type_id_2*]
                    },
                    {
                        elements: {element_type: "boolean"}
                    }
                ]
                }
            }
        }
        update: {
            status: "Archived"
        }
    )
}
    </code></pre>
</template>
