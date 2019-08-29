import pagina from '@/components/Home.vue'
import blog from '@/components/blog'
import services from '@/components/services'
import forth from '@/components/details'

const routes= [
      {path: '/', name: 'first',component: pagina},
      {path: '/blog', name: 'second',component: blog},
      {path: '/services', name: 'third',component: services},
      {path: '/details/:Pid', name: 'details',component: forth}
    ]

export default routes;