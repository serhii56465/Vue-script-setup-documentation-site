<template>
    <p>
    </p>
    <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
type Element{
    id: String
    name: [TextLocale]
    description: [TextLocale]
    enabled: Boolean
    created_at: String
    updated_at: String
    element_type: String
    attributes:  ElementAttrsResult
    value: [ElementValueResult]
    created_by: User
    updated_by: User
    is_deleted: Boolean
}

type ElementAttrsResult{
        # General
    optional: Boolean
    quantity_limit_min: Int
    quantity_limit_max: Int
    character_limit_min: Int
    character_limit_max: Int


    # Boolean
    default_value: Boolean

    # Number
    req_int: Boolean

    # DateTime
    date_time_type: String

    # Entry
    entry_types: [EntryType]

    # File
    allowed_file_types: String

    # Geo
    enable_3d_data: Boolean
    default_location: String
    default_zoom_level: Int

    # ID
    req_unique: Boolean

    # Option
    option_mode: String
    options: [OptionsResult]

    # Text
    text_editor_type: String
    text_format: String
}

type ElementValueResult{
    single_value: String

    # General
    label: [TextLocale]
    country: [TextLocale]

    # DateTime
    date: String
    time: String

    #Embed
    url: [TextLocale]
    title: [TextLocale]
    description: [TextLocale]

    # Entry
    entry: Entry

    # File
    file: File

    # Location
    address: String
    city: String
    state: String
    postcode: String
    coordinates: String

    # Option
    selected_options: [OptionsResult]

    # PhoneNumber
    number: [TextLocale]
    extension: [TextLocale]
}
    </code></pre>
</template>
