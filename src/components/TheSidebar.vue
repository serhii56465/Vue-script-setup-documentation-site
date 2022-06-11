<script setup>
import Dropdown from './Dropdown.vue';
import ListMenu from './ListMenu.vue';

import { ref } from 'vue'

const roleworkspaces = ref([
  {
    title: 'Get Role',
    link: '#'
  },
  {
    title: 'Create Role',
    link: '/docs/rolesworkspace/create'
  },
  {
    title: 'Update Role',
    link: '/docs/rolesworkspace/update'
  },
  {
    title: 'Delete Role',
    link: '/docs/rolesworkspace/delete'
  },
])
const basics = ref([
  {
    title: 'Authorization',
    link: '/docs/workspaces/basics/authorization',
  },
  {
    title: 'Errors',
    link: '/docs/workspaces/basics/errors',
  },
  {
    title: 'Webhooks',
    link: '/docs/workspaces/basics/webhooks',
  },
])
const workspaces = ref([
  {
    title: 'Get Workspace',
    link: '/docs/workspaces/get-workspace',
  },
  {
    title: 'Create Workspace',
    link: '/docs/workspaces/create-workspace',
  },
  {
    title: 'Update Workspace',
    link: '/docs/workspaces/update-workspace',
  },
  {
    title: 'Delete Workspace',
    link: '/docs/workspaces/delete-workspace',
  },
  {
    title: 'Filter Workspace',
    link: '/docs/workspaces/filter-workspace',
  },
])
const projects = ref([
  {title: 'Get Project',
  link: '/docs/projects/get-project',},
  {title: 'Create Project',
  link: '/docs/projects/create-project',},
  {title: 'Update Project',
  link: '/docs/projects/update-project',},
  {title: 'Delete Project',
  link: '/docs/projects/delete-project',},
  {title: 'Clone Project',
  link: '/docs/projects/clone-project',},
  {title: 'Recover Project',
  link: '/docs/projects/recover-project',},
])
const types = ref([
  {title: 'Get Type',
  link: '/docs/types/get-type',},
  {title: 'Create Type',
  link: '/docs/types/create-type',},
  {title: 'Update Type',
  link: '/docs/types/update-type',},
  {title: 'Delete Type',
  link: '/docs/types/delete-type',},
  {title: 'Upsert Type',
  link: '/docs/types/upsert-type',},
  {title: 'Recover Type',
  link: '/docs/types/recover-type',},
  {title: 'Filter Types',
  link: '/docs/types/filter-type',},
])
const elements = ref([
  {title: 'Types of Elements',
  link: '/docs/elements/type-element',},
  {title: 'Get Element',
  link: '/docs/elements/get-element',},
  {title: 'Create Element',
  link: '/docs/elements/create-element',},
  {title: 'Update Element',
  link: '/docs/elements/update-element',},
  {title: 'Delete Element',
  link: '/docs/elements/delete-element',},
  {title: 'Upsert Element',
  link: '/docs/elements/upsert-element',},
  {title: 'Recover Element',
  link: '/docs/elements/recover-element',},
  {title: 'Filter Elements',
  link: '/docs/elements/filter-element',},
])
const entries = ref([
  {title: 'Get Entry',
  link: '/docs/entries/get-entry',},
  {title: 'Create Entry',
  link: '/docs/entries/create-entry',},
  {title: 'Update Entry',
  link: '/docs/entries/update-entry',},
  {title: 'Delete Entry',
  link: '/docs/entries/delete-entry',},
  {title: 'Upsert Entry',
  link: '/docs/entries/upsert-entry',},
  {title: 'Recover Entry',
  link: '/docs/entries/recover-entry',},
  {title: 'Filter Entries',
  link: '/docs/entries/filter-entry',},
])
const groups = ref([
  {title: 'Get Group',
  link: '/docs/groups/get-group',},
  {title: 'Create Group',
  link: '/docs/groups/create-group',},
  {title: 'Update Group',
  link: '/docs/groups/update-group',},
  {title: 'Delete Group',
  link: '/docs/groups/delete-group',},
  {title: 'Upsert Group',
  link: '/docs/groups/upsert-group',},
  {title: 'Recover Group',
  link: '/docs/groups/recover-group',},
  {title: 'Filter Groups',
  link: '/docs/groups/filter-group',},
])
const files = ref([
  {title: 'Get File',
  link: '/docs/files/get-file',},
  {title: 'Create File',
  link: '/docs/files/create-file',},
  {title: 'Update File',
  link: '/docs/files/update-file',},
  {title: 'Delete File',
  link: '/docs/files/delete-file',},
  {title: 'Upsert File',
  link: '/docs/files/upsert-file',},
  {title: 'Recover File',
  link: '/docs/files/recover-file',},
  {title: 'Filter Files',
  link: '/docs/files/filter-file',},
])
const roleprojects = ref([
  {title: 'Get Role',
  link: '#'},
  {title: 'Create Role',
  link: '/docs/rolesproject/create'},
  {title: 'Update Role',
  link: '/docs/rolesproject/update'},
  {title: 'Delete Role',
  link: '/docs/rolesproject/delete'},
])
const roleindividuals = ref([
  {title: 'Get Role',
  link: '#',},
  {title: 'Create Role',
  link: '/docs/rolesindividual/create',},
  {title: 'Update Role',
  link: '/docs/rolesindividual/update',},
  {title: 'Delete Role',
  link: '/docs/rolesindividual/delete',},
])
const others = ref([
  {title: 'Ordering',
  link: '/docs/other/get-group',},
  {title: 'Pagination',
  link: '/docs/other/create-group',},
  {title: 'System Fields',
  link: '/docs/other/update-group',},
  {title: 'Content Stages',
  link: '/docs/other/delete-group',},
])
</script>

<template>
  <ul class="sidebar-nav list-group m-3">
    <ListMenu title="BASICS" :items="basics"/>
    <ListMenu title="WORKSPACES" :items="workspaces"/>
    <ListMenu title="PROJECTS" :items="projects"/>
    <ListMenu title="TYPES" :items="types"/>
    <ListMenu title="ELEMENTS" :items="elements"/>
    <ListMenu title="ENTRIES" :items="entries"/>
    <ListMenu title="GROUPS" :items="groups"/>
    <ListMenu title="FILES" :items="files"/>
    <li class="list-group-item">ROLES</li>
    <Dropdown title="Workspace" :items="roleworkspaces"/>
    <Dropdown title="Project" :items="roleprojects"/>
    <Dropdown title="Individual" :items="roleindividuals"/>
    <ListMenu title="OTHER" :items="others"/>
  </ul>
  <br><br><br><br><br>
</template>
