<template>
    <p>
        File create
        <br>
        It multipart request.
        <a href="https://stackoverflow.com/questions/49594610/how-can-i-send-a-file-with-a-graphql-mutation-in-insomnia-rest">Example from Insomnia</a>
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
operations:
{
    "query": "
        mutation ($file: Upload! $project_id:String!){
            file_create(
                where: {project: {id:$project_id}}
                data: {file: $file}
            ){id}
        }
    ",
    "variables": {
        "file": null,
        "project_id":"7074ca49-5697-417e-9fe7-5c4395a34204"
    }
}

map:
{ "File": ["variables.file"] }

File: *file*
    </code></pre>
</template>
