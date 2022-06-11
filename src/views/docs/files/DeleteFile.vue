<template>
    <p>
        Delete file with specified id
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    files_delete(
        where: {
            project: {id: *project id*}
            name__start_with: "logo"
        }
        permanent_deletion: false  # True - file will be deleted. False - file will be moved to trash bin.
    )
}
    </code></pre>
</template>
