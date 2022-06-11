<template>
    <p>
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
{
    projects_get(
        where: {
            workspace: {id: *workspace id*}
            id: *project id*
        }
    )
    {
        projects{
            name
            entries{
            entry_types{
                name{
                    locale
                    text_value
                }
                id
            }
            }
        }
    }
    }
    </code></pre>
</template>
