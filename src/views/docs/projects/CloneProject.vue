<template>
    <p>
        Clone part or full project with id specified in data.id field. 
        <ul>
            <li>If target project is not specified it creates a new project.</li>
            <li>If entry_types fields is not specified it will copy all elements, entries and types.</li>
            <li>If entry_types field is empty list no types, entries and elements will be copied</li>
            <li>If groups field is not specified it will copy all groups.</li>
            <li>If groups field is empty list no groups will be copied if you do not specified it in groups_included</li>
            <li>If files field is not specified it will copy all files.</li>
            <li>If files field is empty list no files will be copied if you do not specify it in files_included</li>
        </ul>
    </p>
    Full copy in new project:
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    project_clone(
        data: {
            id: "8dbecccf-7a0f-45d1-8d0f-0a9a44ace681"  # Source project id
        }
    )
    {
        id  # Created target project id
    }
}
    </code></pre>
    Full copy in already created project:
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    project_clone(
        data: {
            id: "8dbecccf-7a0f-45d1-8d0f-0a9a44ace681"  # Source project id
        }
        target_project: {id: "13443"}  # target project id
    )
    {
        id  # Created target project id
    }
}
    </code></pre>
    Partial cloning of a project:
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    project_clone(
        data: {
            id: "8dbecccf-7a0f-45d1-8d0f-0a9a44ace681"  # Source project id
                entry_types: [
                    {
                        id: "9a7c3c7c-eabb-46d4-9e7c-cdec0e51397c"  # Entry type to copy
                        groups_included: false  # Copy groups that contain this entry type if true
                        entries_included: false  # Copy entry that based on this entry type if true
                    }
                ]
                groups: [
                    {id: "53231650-2207-474b-a1e0-6ac912b62baa"}  # Groups for copy
                ]
                files: {id:"51affa2d-23c0-4cf8-b5e3-dbeb85931aae"}  # Files for copy
        }
    )
    {
        id  # target project id
    }
}
    </code></pre>
</template>
