<template>
    <p>
        Delete elements that have been filtered
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    elements_delete(
    where: {
        project: {
            id: *project_id*
        }
        *element`s filters*
    }
    last: 1
    order_by: "updated_at"
    permanent_deletion: false  # True - element will be deleted. False - element will be moved to trash bin.
    )
}
    </code></pre>
</template>
