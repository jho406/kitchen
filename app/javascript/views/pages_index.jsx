import {Views} from '../components/view'
import {Tabs, Pane} from '../components/tabs'
import Notification from '../components/notification'
import ChartistGraph from 'react-chartist'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ItemModal from '../components/item_modal'
import Nav from '../components/nav'

Views.PagesIndex = (json) => {
  console.log(json)
  let products = json.products.list.map((item, index)=>{
    return (
      <ItemModal item={item} meta={json.meta} index={index} key={item.key}/>
    )
  })

  let pagination_snippet = {__html: json.products.meta.pagination_snippet}

  return (
    <div>
      <Notification message={json.header.alert}/>
      <Nav header={json.header} />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0">
            <Tabs>
              <Pane label='Products' >
                <p>First tab content.</p>
                <ul className="list-group">
                  <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeave={false}>
                    {products}
                  </CSSTransitionGroup>
                </ul>

                <nav className='circle5' dangerouslySetInnerHTML={pagination_snippet} />
              </Pane>
              <Pane label="Resources" href='?_breezy_filter=resource' data-bz-remote data-bz-push-state={false}>
                {
                  json.resource ?
                  json.resource.body :
                  (<img src={json.meta.loading_image_path} />)
                }
               </Pane>
            </Tabs>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="well circle6">
              {json.metrics.purchases ?
                ( <ChartistGraph data={json.metrics.purchases} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
              <a href="?_breezy_filter=metrics.purchases" data-bz-remote={true} data-bz-remote-async> click to refresh </a>
            </div>
            <div className="well circle7">
              {json.metrics.returns ?
                ( <ChartistGraph data={json.metrics.returns} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
              <a href="?_breezy_filter=metrics.returns" data-bz-remote={true} data-bz-remote-async> click to refresh </a>
            </div>
            <div className="well circle8">
              {json.metrics.cart ?
                ( <ChartistGraph data={json.metrics.cart} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

