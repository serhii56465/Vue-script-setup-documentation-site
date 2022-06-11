<template>
    <p>
        Edit entry type with specified ID field`s, add and delete elements with specified ID in elements_ids field
        <br>
        The user specified in user_id must have the role of editor or high in the specified project
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!) {
    entry_types_update(
        where: {
            project: {
                id: $project_id
            }
            id: "aee9413b-2bdc-4049-a62b-02b9033b1d49"
        }
        data: {
            elements: {
                add: {
                    or: [
                        {element_type: "boolean"},
                        {element_type: "text"}
                    ]
                }
            }
        }
    ){
        id
    }
}
    </code></pre>
</template>
