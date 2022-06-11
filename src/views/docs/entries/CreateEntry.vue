<template>
    <p>
        Create entry based on entry types specified in types_ids field in project with specified ID.
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
    entry_create(
        where: {
            project: {id: "403bdd72-fe7c-43db-b533-d98ed156be17"}
        }
        data:{
        name: [
            {locale: "ru" text_value: "ru_entry_name"}
        ]
        status: "Archived"
        entry_types:{
            or: [
                {
                    id__in: [*type_id_1*, *type_id_2*]
                },
                {
                    elements: {element_type: "boolean"}
                }
            ]
        }
        }
    ){
        id
    }
    }
    </code></pre>
    <p>
        Create with values
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation{
  entry_create(
    where: {
        project: {id: "403bdd72-fe7c-43db-b533-d98ed156be17"}
    }
    data:{
	  name: [
        {locale: "ru" text_value: "ru_entry_name"}
      ]
      status: "Archived"
      entry_types:{
        id: *entry_type_id*
      },
      elements: [
        {
            where: {id: *boolean_element_id*}
            value: [{single_value: "false"}]
        },
        {
            where: {id: *number_element_id*}
            value: [{single_value: "32"}]
        }
      ]
    }
  ){
    id
  }
}
    </code></pre>
</template>
