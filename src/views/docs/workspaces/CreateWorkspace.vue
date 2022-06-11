<template>
    <p>
        Create workspace with specified name.
        <br>
        If no email is specified, the workspace will be created with the email of the user who sent the request
    </p>
    <p>
        Example with workspace creator email:
        <br>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    workspace_create(
        data:{
            name: [{locale: "ru", text_value: "ru_team_1"}]
        }
    )
    {
        id
    }
}
    </code></pre>

    </p>
    <p>
        Example with custom email:
        <br>
        <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    workspace_create(
        data:{
            name: [{locale: "ru", text_value: "ru_team_1"}]
            email: "custom_email@mail.com"
        }
    )
    {
        id
    }
}
        </code></pre>
    </p>
</template>