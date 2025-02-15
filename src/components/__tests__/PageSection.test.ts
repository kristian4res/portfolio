import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PageSection from '../PageSection.vue'

describe('PageSection.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(PageSection, {
      props: {
        heading: 'Hello, world!',
      },
      slots: {
        default: 'This is a test slot content',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
