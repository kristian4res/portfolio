import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          Carousel: { template: '<div><slot /></div>' },
          PostCard: { template: '<div><slot /></div>' },
          PageSection: { template: '<div><slot /></div>' },
          ContentParagraph: { template: '<div><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
        },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
