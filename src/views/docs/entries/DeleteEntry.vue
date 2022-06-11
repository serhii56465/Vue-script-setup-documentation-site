<template>
    <p>
        Delete entries that have been filtered
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    entries_delete(
    where: {
        project: {id:*project_id*}
        status: "Archived"
    }
    permanent_deletion: false  # True - entries will be deleted. False - entries will be moved to trash bin.
    )
}
}
    </code></pre>
</template>
