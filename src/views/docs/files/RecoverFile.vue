<template>
  <p>
    Recover file with specified ID from trash bin
  </p>
  <pre class="bg-success p-2 text-dark bg-opacity-10"><code>
mutation {
    files_recover(
    where: {
        project: {id: *project id*}
    }
    )
}
  </code></pre>
</template>
