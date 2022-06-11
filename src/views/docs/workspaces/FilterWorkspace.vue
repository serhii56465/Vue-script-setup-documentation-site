<template>
  <p>
      In this field, you need to describe the entity you want.
      You should always specify the parent entity with an id.
      For project entities - project, for workspace entities - workspace.
      <br>
      You can also specify any of the entity fields below.
      You can find out which fields you can use by looking at which filter is specified in the field you want in the
      inputs file. You can also use the <code>or</code> operator, which contains a list of filter objects of the type in which you
      specified <code>or</code>. 
      <br>
      You can also use fields <code>first</code>, <code>last</code> (only one at a time) and the <code>order_by</code> field: "field_name".
      These fields can only be used for where at the highest level, but they must be specified outside of where.
      Also in <code>order_by</code> you can use only fields of primitive types
      
      <code>lt</code> = less than
      <code>mt</code> = more than
      <code>let</code> = less or equal
      <code>met</code> = more or equal
      
      In <code>WhereLocaleTextSearchData</code> you can specify "locale" field, and text_value will be searched only in these locales.
      <br>
      If you will not specify locale fields, <code>text_value</code> will be searched in all locales
  </p>
  <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
  input WhereWorkspaceInput{
    id: String
}

input WhereRoleInput{
    or: [WhereRoleInput]

    workspace: WhereRoleWorkspaceInput
    project: WhereRoleProjectGlobalInput
}

input WhereRoleWorkspaceInput{
  or: [WhereRoleWorkspaceInput]

  name: WhereLocaleTextSearchData

  id: String
  id__not: String
  id__in: [String!]
  id__not_in: [String!]

  roles: String
  roles__not: String
  roles__in: [String!]
  roles__not_in: [String!]

  users: String
  users__not: String
  users__in: [String!]
  users__not_in: [String!]

  export_data: Boolean

  settings: String
  settings__not: String
  settings__in: [String!]
  settings__not_in: [String!]

  projects: String
  projects__not: String
  projects__in: [String!]
  projects__not_in: [String!]

  workspace: WhereWorkspaceInput
}
  </code></pre>
</template>
