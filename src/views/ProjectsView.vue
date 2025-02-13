<script setup lang="ts">
import { Divider, Panel, Button } from 'primevue'
</script>

<template>
  <main class="flex flex-col gap-8 px-4 h-screen max-w-screen-sm overflow-y-auto">
    <h1 class="font-bold text-2xl">Projects</h1>
    <p class="text-lg">
      Here are some of the projects that I've worked on in the past. Feel free to check them out and
      let me know what you think!
    </p>
    <Divider />
    <div class="grid gap-4">
      <Panel header="Solstice" toggleable>
        <div class="flex flex-col w-full gap-4">
          <p class="text-lg">
            Solstice is a mock online travel booking platform, built using React (via CRA),
            React-Router, TailwindCSS and Firebase. Solstice was built as part of a course module,
            User Centred Web Development, which covered the importance of user experience and
            accessibility when designing a product. The development of this application followed the
            principles of Design Sprints, a methodology used to quickly validate ideas and solve
            challenges.
          </p>
          <Button
            as="a"
            label="View code"
            href="https://github.com/kristian4res/ucwd-solstice"
            target="_blank"
            rel="noopener"
            icon="pi pi-github"
          />
        </div>
      </Panel>
      <Panel header="Parcel Delivery Module" toggleable>
        <div class="flex flex-col w-full gap-4">
          <p class="text-lg">
            Created as part of a university module on large enterprise systems, I developed a
            microservices module that handles and manages the delivery of parcels for a fictional
            shoe company.
          </p>
          <Button
            as="a"
            label="View code"
            href="https://github.com/kristian4res/ucwd-solstice"
            target="_blank"
            rel="noopener"
            icon="pi pi-github"
          />
        </div>
      </Panel>
      <Panel header="Kore" toggleable>
        <div class="flex flex-col w-full gap-4">
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
        </div>
      </Panel>
      <Panel header="Kapsule" toggleable>
        <div class="flex flex-col w-full gap-4">
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <Button as="a" disabled label="Coming soon" href="#" rel="noopener" icon="pi pi-github" />
        </div>
      </Panel>
    </div>
  </main>
</template>
