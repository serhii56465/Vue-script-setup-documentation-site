<template>
    <p>
        Create project role without individual roles
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    role_project_create(
        where: {project: {id: $project_id}}
        data: {
            name: [{locale: "en-US" text_value:"1234"}]
            roles: "Create"
            users: "Full"
            billing: "Read"
            types: "Full"
            elements: "Full"
            groups: "Full"
            entries: "Full"
            files: "Read"
            can_publish_entries: true
        }
        ){
            id
        }
}
    </code></pre>
    <p>
        Create project role with individual roles
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    role_project_create(
        where: {project: {id: $project_id}}
        data: {
            name: [{locale: "en-US" text_value:"1234"}]
            roles: "Create"
            users: "Full"
            billing: "Read"
            types: "Full"
            elements: "Full"
            groups: "Full"
            entries: "Full"
            files: "Read"
            can_publish_entries: true
            individual_roles: {
                create: [
                    {
                        entity_id: "74d7d2fd-2ebc-413d-876e-55d159a1d32b"
                        entity_type: "elements"
                        permission_type: "Hide"
                    },
                    {
                        entity_id: "0a312864-675e-4af5-a7a9-1caadd684030"
                        entity_type: "elements"
                        permission_type: "Read"
                    }
                ]
            }
        }
        ){
            id
        }
}
    </code></pre>
</template>
