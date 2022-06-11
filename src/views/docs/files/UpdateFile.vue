<template>
    <p>
        Edit title and description of file
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    files_update(
        where: {
            project: {id: *project id*}
            name__contains: "png"
        }
        data:{
        title: [{locale: "ru", text_value: "ru_title"}]
        description: [{locale: "ru", text_value: "ru_descr"}]
        }
    )
    }
    </code></pre>
</template>
