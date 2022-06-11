import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},

    {path: '/docs/rolesworkspace/create', name: 'RolesWorkspaceCreate', component: ()=>import('@/views/docs/rolesworkspace/Roles-Workspace-Create.vue')},
    {path: '/docs/rolesworkspace/delete', name: 'RolesWorkspaceDelete', component: ()=>import('@/views/docs/rolesworkspace/Roles-Workspace-Delete.vue')},
    {path: '/docs/rolesworkspace/update', name: 'RolesWorkspaceUpdate', component: ()=>import('@/views/docs/rolesworkspace/Roles-Workspace-Update.vue')},

    {path: '/docs/rolesproject/create', name: 'RolesProjectCreate', component: ()=>import('@/views/docs/rolesproject/Roles-Project-Create.vue')},
    {path: '/docs/rolesproject/delete', name: 'RolesProjectDelete', component: ()=>import('@/views/docs/rolesproject/Roles-Project-Delete.vue')},
    {path: '/docs/rolesproject/update', name: 'RolesProjectUpdate', component: ()=>import('@/views/docs/rolesproject/Roles-Project-Update.vue')},

    {path: '/docs/rolesindividual/create', name: 'RolesIndividualCreate', component: ()=>import('@/views/docs/rolesindividual/Roles-Individual-Create.vue')},
    {path: '/docs/rolesindividual/delete', name: 'RolesIndividualDelete', component: ()=>import('@/views/docs/rolesindividual/Roles-Individual-Delete.vue')},
    {path: '/docs/rolesindividual/update', name: 'RolesIndividualUpdate', component: ()=>import('@/views/docs/rolesindividual/Roles-Individual-Update.vue')},

    {path: '/docs/workspaces/create-workspace', name: 'CreateWorkspace', component: ()=>import('@/views/docs/workspaces/CreateWorkspace.vue')},
    {path: '/docs/workspaces/update-workspace', name: 'UpdateWorkspace', component: ()=>import('@/views/docs/workspaces/UpdateWorkspace.vue')},
    {path: '/docs/workspaces/delete-workspace', name: 'DeleteWorkspace', component: ()=>import('@/views/docs/workspaces/DeleteWorkspace.vue')},
    {path: '/docs/workspaces/filter-workspace', name: 'FilterWorkspace', component: ()=>import('@/views/docs/workspaces/FilterWorkspace.vue')},

    {path: '/docs/types/create-type', name: 'CreateType', component: ()=>import('@/views/docs/types/CreateType.vue')},
    {path: '/docs/types/update-type', name: 'UpdateType', component: ()=>import('@/views/docs/types/UpdateType.vue')},
    {path: '/docs/types/delete-type', name: 'DeleteType', component: ()=>import('@/views/docs/types/DeleteType.vue')},
    {path: '/docs/types/filter-type', name: 'FilterType', component: ()=>import('@/views/docs/types/FilterType.vue')},
    {path: '/docs/types/recover-type', name: 'RecoverType', component: ()=>import('@/views/docs/types/RecoverType.vue')},
    {path: '/docs/types/upsert-type', name: 'UpsertType', component: ()=>import('@/views/docs/types/UpsertType.vue')},

    {path: '/docs/projects/create-project', name: 'CreateProject', component: ()=>import('@/views/docs/projects/CreateProject.vue')},
    {path: '/docs/projects/update-project', name: 'UpdateProject', component: ()=>import('@/views/docs/projects/UpdateProject.vue')},
    {path: '/docs/projects/delete-project', name: 'DeleteProject', component: ()=>import('@/views/docs/projects/DeleteProject.vue')},
    {path: '/docs/projects/filter-project', name: 'FilterProject', component: ()=>import('@/views/docs/projects/FilterProject.vue')},
    {path: '/docs/projects/recover-project', name: 'RecoverProject', component: ()=>import('@/views/docs/projects/RecoverProject.vue')},
    {path: '/docs/projects/get-project', name: 'GetProject', component: ()=>import('@/views/docs/projects/GetProject.vue')},
    {path: '/docs/projects/clone-project', name: 'CloneProject', component: ()=>import('@/views/docs/projects/CloneProject.vue')},

    {path: '/docs/groups/create-group', name: 'CreateGroup', component: ()=>import('@/views/docs/groups/CreateGroup.vue')},
    {path: '/docs/groups/update-group', name: 'UpdateGroup', component: ()=>import('@/views/docs/groups/UpdateGroup.vue')},
    {path: '/docs/groups/delete-group', name: 'DeleteGroup', component: ()=>import('@/views/docs/groups/DeleteGroup.vue')},
    {path: '/docs/groups/filter-group', name: 'FilterGroup', component: ()=>import('@/views/docs/groups/FilterGroup.vue')},
    {path: '/docs/groups/recover-group', name: 'RecoverGroup', component: ()=>import('@/views/docs/groups/RecoverGroup.vue')},
    {path: '/docs/groups/upsert-group', name: 'UpsertGroup', component: ()=>import('@/views/docs/groups/UpsertGroup.vue')},

    {path: '/docs/files/create-file', name: 'CreateFile', component: ()=>import('@/views/docs/files/CreateFile.vue')},
    {path: '/docs/files/update-file', name: 'UpdateFile', component: ()=>import('@/views/docs/files/UpdateFile.vue')},
    {path: '/docs/files/delete-file', name: 'DeleteFile', component: ()=>import('@/views/docs/files/DeleteFile.vue')},
    {path: '/docs/files/filter-file', name: 'FilterFile', component: ()=>import('@/views/docs/files/FilterFile.vue')},
    {path: '/docs/files/recover-file', name: 'RecoverFile', component: ()=>import('@/views/docs/files/RecoverFile.vue')},
    {path: '/docs/files/upsert-file', name: 'UpsertFile', component: ()=>import('@/views/docs/files/UpsertFile.vue')},

    {path: '/docs/entries/create-entry', name: 'CreateEntry', component: ()=>import('@/views/docs/entries/CreateEntry.vue')},
    {path: '/docs/entries/update-entry', name: 'UpdateEntry', component: ()=>import('@/views/docs/entries/UpdateEntry.vue')},
    {path: '/docs/entries/delete-entry', name: 'DeleteEntry', component: ()=>import('@/views/docs/entries/DeleteEntry.vue')},
    {path: '/docs/entries/filter-entry', name: 'FilterEntry', component: ()=>import('@/views/docs/entries/FilterEntry.vue')},
    {path: '/docs/entries/recover-entry', name: 'RecoverEntry', component: ()=>import('@/views/docs/entries/RecoverEntry.vue')},
    {path: '/docs/entries/upsert-entry', name: 'UpsertEntry', component: ()=>import('@/views/docs/entries/UpsertEntry.vue')},

    {path: '/docs/elements/create-element', name: 'CreateElement', component: ()=>import('@/views/docs/elements/CreateElement.vue')},
    {path: '/docs/elements/update-element', name: 'UpdateElement', component: ()=>import('@/views/docs/elements/UpdateElement.vue')},
    {path: '/docs/elements/delete-element', name: 'DeleteElement', component: ()=>import('@/views/docs/elements/DeleteElement.vue')},
    {path: '/docs/elements/filter-element', name: 'FilterElement', component: ()=>import('@/views/docs/elements/FilterElement.vue')},
    {path: '/docs/elements/recover-element', name: 'RecoverElement', component: ()=>import('@/views/docs/elements/RecoverElement.vue')},
    {path: '/docs/elements/get-element', name: 'GetElement', component: ()=>import('@/views/docs/elements/GetElement.vue')},
    {path: '/docs/elements/type-element', name: 'TypeElement', component: ()=>import('@/views/docs/elements/TypeElement.vue')},
    {path: '/docs/elements/upsert-element', name: 'UpsertElement', component: ()=>import('@/views/docs/elements/UpsertElement.vue')},

    {path: '/docs/basics/authorization', name: 'Authorization', component: ()=>import('@/views/docs/basics/Authorization.vue')},
    {path: '/docs/basics/errors', name: 'Errors', component: ()=>import('@/views/docs/basics/Errors.vue')},
    {path: '/docs/basics/webhooks', name: 'Webhooks', component: ()=>import('@/views/docs/basics/Webhooks.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
