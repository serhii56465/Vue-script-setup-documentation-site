<template>
    <p>
        Update existing individual roles in global role. You can change only permission type
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
                update: [
                    {
                        id: "7dce9920-cc0b-4543-ba2f-046de971d5d6"
                        permission_type: "Full"
                    }
                ]
            }
        }
        ){
            id
            individual_roles{
                permission_type
            }
        }
}
    </code></pre>
</template>
