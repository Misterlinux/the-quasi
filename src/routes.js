import pagina from '@/components/Home.vue'
import gallery from '@/components/gallery.vue'
import services from '@/components/services'
import home from '@/components/final'
import Photo from '@/components/Photo.vue'
import Blogs from '@/statics/blogs'

import contact from '@/components/contact'
import into from '@/components/intro'
import micro from '@/components/microe'

const blogRoutes = Object.keys(Blogs).map(section => {
    const children = Blogs[section].map(child => ({
      path: child.id,
      name: child.id,
      component: () => import(`./markdowns/${section}/${child.id}.md`)
    }))
    return {
      path: `/${section}`,
      name: section,
      component: () => import('./components/bak.vue'),
      children
    }
  })

const routes= [
      {path: '/', name: 'first',component: pagina},
      {path: '/gallery', name: 'second',component: gallery},
      {path: '/gallery/:id', name: 'photo',component: Photo},     
      {path: '/services', name: 'third',component: services},
      {path: '/contact', name: 'altro', component: contact},
      {path: '/final', name: 'final',component: home},
      {path: '/microe', name: 'microeconomia', component: micro},
      {path: '/intro', name: 'introduzione', component: into},
      ...blogRoutes
]

export default routes;