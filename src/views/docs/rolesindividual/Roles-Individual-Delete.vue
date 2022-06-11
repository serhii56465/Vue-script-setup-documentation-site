<template>
    <p>
        Delete individual role
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
                delete:
                    {
                        id: "fb862c5d-0e52-47ca-8493-8fbdd7c4c19d"
                    }
            }
        }
        ){
            id
            billing
        }
}
    </code></pre>
</template>
