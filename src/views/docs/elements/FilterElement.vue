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
input WhereElementInput{
    or: [WhereElementInput]

    project: WhereProjectData

    id: String
    id__not: String
    id__in: [String!]
    id__not_in: [String!]

    name: WhereLocaleTextSearchData
    description: WhereLocaleTextSearchData

    enabled: Boolean

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

    element_type: String
    element_type__not: String
    element_type__in: [String!]
    element_type__not_in: [String!]

    attributes:  WhereElementAttrsInput

    created_by: WhereUserInput

    updated_by: WhereUserInput

    is_deleted: Boolean

    value: WhereElementValueInput
}

input WhereElementAttrsInput{
    or: [WhereElementAttrsInput]

    optional: Boolean

    quantity_limit_min: Int
    quantity_limit_min__not: Int
    quantity_limit_min__in: [Int!]
    quantity_limit_min__not_in: [Int!]
    quantity_limit_min__mt: Int
    quantity_limit_min__lt: Int
    quantity_limit_min__met: Int
    quantity_limit_min__let: Int

    quantity_limit_max: Int
    quantity_limit_max__not: Int
    quantity_limit_max__in: [Int!]
    quantity_limit_max__not_in: [Int!]
    quantity_limit_max__mt: Int
    quantity_limit_max__lt: Int
    quantity_limit_max__met: Int
    quantity_limit_max__let: Int

    character_limit_min: Int
    character_limit_min__not: Int
    character_limit_min__in: [Int!]
    character_limit_min__not_in: [Int!]
    character_limit_min__mt: Int
    character_limit_min__lt: Int
    character_limit_min__met: Int
    character_limit_min__let: Int

    character_limit_max: Int
    character_limit_max__not: Int
    character_limit_max__in: [Int!]
    character_limit_max__not_in: [Int!]
    character_limit_max__mt: Int
    character_limit_max__lt: Int
    character_limit_max__met: Int
    character_limit_max__let: Int

    default_value: Boolean
    req_int: Boolean

    date_time_type: String
    date_time_type__not: String
    date_time_type__in: [String!]
    date_time_type__not_in: [String!]

    entry_types: WhereEntryTypeInput

    allowed_file_types: String
    allowed_file_types__not: String
    allowed_file_types__in:[String!]
    allowed_file_types__not_in: [String!]

    enable_3d_data: Boolean

    default_location: String
    default_location__not: String
    default_location__in: [String!]
    default_location__not_in: [String!]

    default_zoom_level: Int
    default_zoom_level__not: Int
    default_zoom_level__in: [Int!]
    default_zoom_level__not_in: [Int!]
    default_zoom_level__mt: Int
    default_zoom_level__lt: Int
    default_zoom_level__met: Int
    default_zoom_level__let: Int

    req_unique: Boolean

    option_mode: String
    option_mode__not: String
    option_mode__in: [String!]
    option_mode__not_in: [String!]

    options: WhereOptionInput

    text_editor_type: String
    text_editor_type__not: String
    text_editor_type__in: [String!]
    text_editor_type__not_in: [String!]

    text_format: String
    text_format__not: String
    text_format__in: [String!]
    text_format__not_in: [String!]
}

input WhereElementValueInput{
    or: [WhereElementValueInput]

    single_value: String
    single_value__not: String
    single_value__in: [String!]
    single_value__not_in: [String!]
    single_value__mt: String
    single_value__lt: String
    single_value__met: String
    single_value__let: String
    single_value__start_with: String
    single_value__not_start_with: String
    single_value__end_with: String
    single_value__not_end_with: String
    single_value__contains: String
    single_value__not_contains: String

    # General
    label: WhereLocaleTextSearchData
    country: WhereLocaleTextSearchData

    # DateTime
    date: String
    date__not: String
    date__in: [String!]
    date__not_in: [String!]
    date__mt: String
    date__lt: String
    date__met: String
    date__let: String

    time: String
    time__not: String
    time__in: [String!]
    time__not_in: [String!]
    time__mt: String
    time__lt: String
    time__met: String
    time__let: String

    #Embed
    url: WhereLocaleTextSearchData
    title: WhereLocaleTextSearchData
    description: WhereLocaleTextSearchData

    # Entry
    entry: WhereEntryInput

    # File
    file: WhereFileInput

    # Location
    address: WhereLocaleTextSearchData
    city: WhereLocaleTextSearchData
    state: WhereLocaleTextSearchData
    postcode: WhereLocaleTextSearchData
    coordinates: WhereLocaleTextSearchData

#     Option
    selected_options: WhereOptionInput

    # PhoneNumber
    number: WhereLocaleTextSearchData
    extension: WhereLocaleTextSearchData

    is_empty: Boolean
}
    </code></pre>
</template>
