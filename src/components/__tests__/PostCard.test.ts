import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PostCard from '../PostCard.vue'

describe('PostCard.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(PostCard, {
      props: {
        postTitle: 'Hello, world! This is a post card',
        buttonLink: 'https://google.com',
        buttonText: 'Google it!',
      },
      slots: {
        default: 'This is a test slot content',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
