import {Layouts} from '../components/view'

Layouts.Default = function(view) {
   return (
      <div className='container'>
        {view}
      </div>
   );
}
