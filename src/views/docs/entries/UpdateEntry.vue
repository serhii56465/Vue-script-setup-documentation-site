<template>
    <p>
        Edit entries that have been filtered
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    entries_update(
    where: {
        project: {id: *project_id*}
        *entry_filters*
    }
    data: {
        entry_types: {
        add: {
            *entry_types_filters*
        }
        remove: {
            *entry_types_filters*
        }
        }
        elements: [
            {
                where: {*element_filters*} # You can use any element filter, but prefer the id, or element_type
                value: {*element_value*}
            },
            {   where: {*other_element_filters*} # You can use any element filter, but prefer the id, or element_type
                value: {*other_element_value*}
            },
            # Boolean elements example
            {
                where: {element_type: "boolean"}
                value: {single_value: true}
            },
            # element by id example
            {
                where: {id: *number_element_id*}
                value: {single_value: 12}
            }
        ]
    }
    )
}
    </code></pre>
</template>
