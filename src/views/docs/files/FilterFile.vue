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
input WhereFileInput{
    or: [WhereFileInput]

    project: WhereProjectData

    id: String
    id__not: String
    id__in: [String!]
    id__not_in: [String!]

    name: String
    name__not: String
    name__in: [String!]
    name_not_in: [String!]
    name__start_with: String
    name__not_start_with: String
    name__end_with: String
    name__not_end_with: String
    name__contains: String
    name__not_contains: String

    title: WhereLocaleTextSearchData
    description: WhereLocaleTextSearchData

    type: String
    type__not: String
    type__in: [String!]
    type_not_in: [String!]
    type__start_with: String
    type__not_start_with: String
    type__end_with: String
    type__not_end_with: String
    type__contains: String
    type__not_contains: String

    size: Int
    size__not: Int
    size__in: [Int!]
    size__not_in: [Int!]
    size__mt: Int
    size__lt: Int
    size__met: Int
    size__let: Int

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

    created_by: WhereUserInput
    updated_by: WhereUserInput

    is_deleted: Boolean
}
    </code></pre>
</template>
