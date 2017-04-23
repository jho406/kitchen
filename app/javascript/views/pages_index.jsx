import {Views} from '../components/view'

Views.PagesIndex = (json) => {
  console.log(json)
  let products = json.products.map((item)=>{
    return (
      <li className="list-group-item" key={item.key}>
        <p>{item.name}</p>
        <div><span className="badge" style={{fontSize: 9}}>{item.quantity}</span></div>
      </li>
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
            <li role="presentation"><a href="#">Juice Cart (2)</a></li>
            <li role="presentation"><a href="#">Cart (8)</a></li>
            <li className="dropdown"><a data-toggle="dropdown" aria-expanded="false" href="#" className="dropdown-toggle">Notifications </a>
              <ul role="menu" className="dropdown-menu">
                <li role="presentation"><a href="#">First Item</a></li>
                <li role="presentation"><a href="#">Second Item</a></li>
                <li role="presentation"><a href="#">Third Item</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

  return (
    <div>
      <div>
        {nav}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-0 col-md-8 col-md-offset-0">
            <div>
              <ul className="nav nav-tabs">
                <li className="active"><a href="#tab-1" role="tab" data-toggle="tab">First Tab</a></li>
                <li><a href="#tab-2" role="tab" data-toggle="tab">Chat </a></li>
                <li><a href="#tab-3" role="tab" data-toggle="tab">LIVE SEARCH</a></li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="tab-1">
                  <p>First tab content.</p>
                  <ul className="list-group">
                    {products}
                  </ul>
                </div>
                <div role="tabpanel" className="tab-pane" id="tab-2">
                  <p>Second tab content.</p>
                </div>
                <div role="tabpanel" className="tab-pane" id="tab-3">
                  <p>Third tab content.</p>
                </div>
              </div>
            </div>
            <nav>
              <ul className="pagination">
                <li><a aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                <li><a>1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li><a>5</a></li>
                <li><a aria-label="Next"><span aria-hidden="true">»</span></a></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="well"><span>Text of the well</span></div>
            <div className="well"><span>Text of the well</span></div>
            <div className="well"><span>Text of the well</span></div>
            <div className="well"><span>Text of the well</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

