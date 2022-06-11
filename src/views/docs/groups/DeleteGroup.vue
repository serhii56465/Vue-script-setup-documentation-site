<template>
    <p>
        Delete group with
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    groups_delete(
        where:{
            project: {id: $project_id}
            is_empty: True
        }
        permanent_deletion: false  # True - group will be deleted. False - group will be moved to trash bin.
    )
    }
    </code></pre>
</template>
