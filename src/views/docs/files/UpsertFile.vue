<template>
    <p>
        Files upsert
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
{
    "query": "mutation ($file: Upload! $project_id:String!) {files_upsert(where: {project: {id:$project_id}, name__contains: \".js\"}, data: {create:{file: $file}, update: {description: [{locale: \"ru-RU\", text_value:\"desc\"}]}}){id}}",
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
