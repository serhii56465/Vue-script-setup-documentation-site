<template>
    <p>
        Create element with specified fields and attrs in specified project. 
        <br>
        Description is optional field.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    element_create(
    data:{
        project: {id: "ee69491d-ee55-4798-9c71-ea1576c7151e"}
        name: [{locale:"ru", text_value: "ru_name"}]
        attrs:{
        req_int:true
        optional: true
        }
        element_type: "Number"
        enabled:true
        description: "optional descr"
    }
    )
}

mutation{
    element_create(
    where: {
            project: {id: "ee69491d-ee55-4798-9c71-ea1576c7151e"}
    }
    data:{
        name: [{locale:"ru", text_value: "ru_name"}]
        element_type: "boolean"
        enabled:true
        attrs:{
        req_int:true
        optional: true
        default_value:true
        }
    }
    )
}
    </code></pre>
</template>
