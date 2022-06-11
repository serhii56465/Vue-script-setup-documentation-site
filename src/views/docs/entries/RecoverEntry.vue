<template>
    <p>
        Recover entries from trash bin
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    entries_recover(
    where:
    {
        project:{id: *project id*}
        id__in: [
            "81fe5385-b9c1-4a2a-b7e0-3467f1c1df82",
            "3de66e15-c688-40ae-915b-3ffdb0593efc",
            "314294f0-750d-4c6f-9961-8f2fb4f76a31"
        ]
    }
    )
}
    </code></pre>
</template>
