import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsView from '@/views/ProjectsView.vue'

describe('ProjectsView.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
