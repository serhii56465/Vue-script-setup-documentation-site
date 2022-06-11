<template>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
{
    elements_get(
        where: {
            project: {id: *project id*}
            element_type: "boolean"
            attributes: {
                default_value: true
            }
        }
    ){
        elements{
            element_type
            name{
                locale
                text_value
            }
        }
        total
    }
    }
    </code></pre>
</template>
