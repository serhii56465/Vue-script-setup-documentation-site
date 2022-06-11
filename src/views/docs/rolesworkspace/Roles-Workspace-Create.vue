<template>
    <p>
        Create workspace role
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    role_workspace_create(
        where: {workspace: {id: "e92bda1b-c9fa-4ee9-976a-49a37809534f"}}
        data: {
            export_data: true
            settings: "Read"
            projects: "Read",
            users: "Full",
            roles: "Full"
            name: [{locale: "en-US" text_value:"test_role"}]
        }
        ){
            id
        }
}
    </code></pre>
</template>
