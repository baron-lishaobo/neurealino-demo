import {router} from '../index' ;

router.beforeEach((to,from,next)=>{
    console.log('router interception has executed...');
    const nearestWithTitle=to.matched.slice().reverse().find(r=>r.meta&&r.meta.title);
    if(nearestWithTitle){
        document.title = nearestWithTitle.meta.title;
    }
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el=>el.parentNode?.removeChild(el));
      // Skip rendering meta tags if there are none.
  if(!nearestWithTitle) return next();

      next();
})

export default router;