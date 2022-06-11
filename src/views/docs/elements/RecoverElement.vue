<template>
    <p>
        Recover elements that have been filtered
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    elements_recover(
    where: {
        project:{id: *project_id*}
        is_deleted: True
        *other element`s filters*
    }
    last: 1
    order_by: "updated_at__desc"
    )
}
    </code></pre>
</template>
