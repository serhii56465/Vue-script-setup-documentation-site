<template>
    <p>
        Edit workspace`s name or email.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    workspace_update(
        data:{
            id:"d3d97f7c-fc43-4398-951f-95881d9c3ba8"
            name: [{locale: "ru", text_value: "ru_team_1"}]
            email: "new_email@mail.com"
        }
    )
    }
    </code></pre>
</template>>
