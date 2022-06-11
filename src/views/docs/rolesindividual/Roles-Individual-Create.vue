<template>
    <p>
        Create new individual role in existing global role
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation($project_id: String!){
    roles_project_update(
        where: {
            project: {id: $project_id}
            id: "5946bec8-e6c8-4cc8-82be-8528ad070322"
        }
        data: {
            individual_roles: {
                create: [
                    {
                        entity_id: "38cab903-44d0-4f80-9ff7-c13a87bfde46"
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
