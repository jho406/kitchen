import {Views} from '../components/view'
import {Tabs, Pane} from '../components/tabs'
import Notification from '../components/notification'
import ChartistGraph from 'react-chartist'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ItemModal from '../components/item_modal'

Views.PagesIndex = (json) => {
  console.log(json)
  let products = json.products.list.map((item)=>{
    return (
      <ItemModal item={item} meta={json.meta}/>
    )
  })

  let nav = (
    <nav className="navbar navbar-default navigation-clean">
      <div className="container">
        <div className="navbar-header"><a href="#" className="navbar-brand navbar-link">Shopping </a>
          <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggle collapsed"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
        </div>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav navbar-right">
            <li role="presentation" className="active"><a href="#">Home </a></li>
            <li role="presentation"><a href="#">Juice Cart ({json.header.juice_cart})</a></li>
            <li role="presentation"><a href="#">Cart ({json.header.total_cart})</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )

  let pagination_snippet = {__html: json.products.meta.pagination_snippet}

  return (
    <div>
      <Notification message={json.header.alert}/>
      <div>
        {nav}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0">
            <Tabs>
              <Pane label='Products' >
                <p>First tab content.</p>
                <ul className="list-group">
                  {products}
                </ul>

                <nav dangerouslySetInnerHTML={pagination_snippet} />
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
            <div className="well">
              {json.metrics.purchases ?
                ( <ChartistGraph data={json.metrics.purchases} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
              <a href="?_breezy_filter=metrics.purchases" data-bz-remote={true} data-bz-async> click to refresh </a>
            </div>
            <div className="well">
              {json.metrics.returns ?
                ( <ChartistGraph data={json.metrics.returns} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
              <a href="?_breezy_filter=metrics.returns" data-bz-remote={true} data-bz-async> click to refresh </a>
            </div>
            <div className="well">
              {json.metrics.cart ?
                ( <ChartistGraph data={json.metrics.cart} type={'Line'} />) :
                (<img src={json.meta.loading_image_path} />)
              }
              <a href="?_breezy_filter=metrics.cart" data-bz-remote={true} data-bz-async> click to refresh </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

