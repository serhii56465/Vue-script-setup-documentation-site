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
input WhereProjectData{
    or: [WhereProjectData]
    workspace: WhereWorkspaceInput

    id: String
    id__not: String
    id__in: [String!]
    id__not_in: [String!]

    name: WhereLocaleTextSearchData

    created_at: String
    created_at__not: String
    created_at__in: [String!]
    created_at__not_in: [String!]
    created_at__mt: String
    created_at__lt: String
    created_at__met: String
    created_at__let: String

    updated_at: String
    updated_at__not: String
    updated_at__in: [String!]
    updated_at__not_in: [String!]
    updated_at__mt: String
    updated_at__lt: String
    updated_at__met: String
    updated_at__let: String

    elements: WhereElementInput
    entries_types: WhereEntryTypeInput
    entries: WhereEntryInput
    groups: WhereGroupInput
    files: WhereFileInput
    users: WhereUserInput
    created_by: WhereUserInput
    updated_by: WhereUserInput
    roles: WhereRoleProjectGlobalInput

    is_deleted: Boolean
}

input WhereRoleProjectGlobalInput{
    project: WhereProjectData

    or: [WhereRoleProjectGlobalInput]

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

    billing: String
    billing__not: String
    billing__in: [String!]
    billing__not_in: [String!]

    types: String
    types__not: String
    types__in: [String!]
    types__not_in: [String!]

    elements: String
    elements__not: String
    elements__in: [String!]
    elements__not_in: [String!]

    groups: String
    groups__not: String
    groups__in: [String!]
    groups__not_in: [String!]

    entries: String
    entries__not: String
    entries__in: [String!]
    entries__not_in: [String!]

    files: String
    files__not: String
    files__in: [String!]
    files__not_in: [String!]

    can_publish_entries: Boolean

    individual_roles: WhereRoleIndividualInput
}
    </code></pre>
</template>
