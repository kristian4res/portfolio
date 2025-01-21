<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { Divider, Button } from 'primevue'
</script>

<template>
  <template class="flex flex-col h-screen justify-center items-center">
    <main
      class="flex flex-col gap-8 p-4 h-screen max-w-screen-sm overflow-y-auto lg:self-center lg:h-1/2"
    >
      <section class="flex-col flex">
        <h1 class="font-bold text-2xl">About</h1>
        <Divider />
        <p class="text-lg">
          Hi there! My name is <b>Kristian, a software engineer</b> currently based in the United
          Kingdom. I'm currently working full time as a <b>DevSecOps engineer</b> within a
          cross-functional team for the <b>Office for National Statistics (ONS)</b>, the recognised
          national statistical institue of the UK.
          <br />
          <br />
          As a <b>lifelong learner</b>, I often spend my free time learning about new tech through
          personal projects and online courses to further hone my skills and knowledge. Aside from
          tech, I'm also a <b>food enthusiast</b> who enjoys trying out new recipes, in addition to
          being a <b>pet lover</b> (although I don't have a pet currently 🥲).
        </p>
      </section>
      <section class="flex-col flex">
        <h1 class="font-bold text-2xl">Recent posts</h1>
        <Divider />
        <!-- TODO: Make scalable; allow custom banners and image alt -->
        <div class="flex gap-4 p-2 overflow-x-auto">
          <PostCard
            postTitle="A big milestone to cap of 2024"
            postContent="I passed the GCP Associate Cloud Engineer certification exam at the end of 2024, which was another big milestone next to graduating university."
            buttonLink="https://www.linkedin.com/posts/kristian4res_associate-cloud-engineer-certification-was-activity-7280002842029961216-DqgX?utm_source=share&utm_medium=member_desktop"
          />
          <PostCard
            postTitle="How to pass the GCP Associate Cloud Engineer certification exam in a month"
            postContent="In December 2024, I studied and passed the GCP Associate Cloud Engineer certification exam. This is a step-by-step guide on how I did it."
            buttonLink="https://a-developers-journal.hashnode.dev/how-to-pass-the-gcp-associate-cloud-engineer-certification-exam-in-a-month"
          />
        </div>
      </section>
      <section class="flex-col flex">
        <h1 class="font-bold text-2xl">Contact</h1>
        <Divider />
        <div class="flex flex-col gap-4">
          <p class="text-lg">
            If you'd like to get in touch with me, feel free to reach out to me via my LinkedIn or
            my blog. I'm always open to new challenges and opportunities!
          </p>
          <div class="flex justify-evenly gap-4 xl:justify-start">
            <Button
              as="a"
              label="LinkedIn"
              href="https://www.linkedin.com/in/kristian4res/"
              target="_blank"
              rel="noopener"
            />
            <Button
              as="a"
              label="GitHub"
              href="https://www.github.com/kristian4res/"
              target="_blank"
              rel="noopener"
            />
            <Button
              as="a"
              label="Blog"
              href="https://a-developers-journal.hashnode.dev/?source=top_nav_blog_home"
              target="_blank"
              rel="noopener"
            />
          </div>
        </div>
      </section>
    </main>
  </template>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
