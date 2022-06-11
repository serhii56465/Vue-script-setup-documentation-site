<template>
    <p>
        Delete entry type with specified ID.
        <br>
        The user specified in user_id must have the role of editor or high in the specified project
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    entry_types_delete(
        where:{
            project: {
                id: $project_id
            }
        }
        permanent_deletion: false  # True - entry type will be deleted. False - entry type will be moved to trash bin.
    )
    }
    </code></pre>
</template>

