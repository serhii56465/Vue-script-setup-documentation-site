<template>
    <div class="home">
         <p>
            General query request format:
        </p>
        <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
{
  *entity_name*_get(
      where: {
          project: {id: *project id*} if you need to get entity in project
          workspace: {id: *workspace id*} if you need to get entity in workspace (Project or workspace role)
          id: *entity id* # or other filters
      }
  )
  {
      *entities*{...}  # You can find it  below
      total
  }
}

        </code></pre>
            <p>
            Examples:
            </p>
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

union Role = RoleWorkspace | RoleProjectGlobal

type TextLocale{
    locale: String!
    text_value: String!
}

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

type Entry{
    id: String
    name: [TextLocale]
    created_at: String
    updated_at: String
    entry_types(where: WhereEntryTypeInput): [EntryType]!
    elements(where: WhereElementInput): [Element]!
    created_by: User
    updated_by: User
    status: String
    is_deleted: Boolean
}

type EntryType{
    id: String
    name: [TextLocale]
    description: [TextLocale]
    enabled: Boolean
    created_at: String
    updated_at: String
    elements(where: WhereElementInput): [Element]!
    created_by: User
    updated_by: User
    is_deleted: Boolean
}

type File{
    id: String
    name: String
    title: [TextLocale]
    description: [TextLocale]
    type: String
    size: Int
    dimension: String
    path: String
    created_at: String
    updated_at: String
    created_by: User
    updated_by: User
    is_deleted: Boolean
}

type Group{
    id: String
    name: [TextLocale]
    description: [TextLocale]
    group_type: String
    created_at: String
    updated_at: String
    created_by: User
    updated_by: User
    entity_ids: [String]
    is_deleted: Boolean
}

type OptionsResult{
    id: String
    name: String
    order: Int
    parent_option: String

}

type Project{
    id: String
    name: [TextLocale]
    created_at: String
    elements(where: WhereElementInput): [Element]!
    entries_types(where: WhereEntryTypeInput): [EntryType]!
    entries(where: WhereEntryInput): [Entry]!
    groups(where: WhereGroupInput): [Group]!
    files(where: WhereFileInput): [File]!
    users(where: WhereUserInput): [User]!
    created_by: User
    updated_at: String
    updated_by: User
    is_deleted: Boolean
    roles(where: WhereRoleProjectGlobalInput): [RoleProjectGlobal]!
}

type Workspace{
    id: String
    name: [TextLocale]
    email: String
    created_at: String
    projects(where: WhereProjectData): [Project]!
    users(where: WhereUserInput): [User]!
    created_by: User
    updated_at: String
    updated_by: User
    roles(where: WhereRoleWorkspaceInput): [RoleWorkspace]
}

type User{
    id: String
    email: String
    first_name: String
    last_name: String
    created_at: String
    updated_at: String
    allowed_workspaces(where: WhereWorkspaceInput): [Workspace]
    allowed_projects(where: WhereProjectData): [Project]
    status: String
    role: Role
}

type RoleWorkspace{
    id: String
    name: [TextLocale]
    roles: String
    users: String
    export_data: Boolean
    settings: String
    projects: String
}

type RoleProjectIndividual{
    id: String
    entity_type: String
    entity_id: String
    permission_type: String
}

type RoleProjectGlobal{
    id: String
    name: [TextLocale]
    roles: String
    users: String
    billing: String
    types: String
    elements: String
    groups: String
    entries: String
    files: String
    can_publish_entries: Boolean
    individual_roles: [RoleProjectIndividual]
}

        </code></pre> 
        <p>
        If you want to download file you need to go to the link http://127.0.0.1:8000/download/?file_id=*file_id*
        </p>
    </div>
</template>
