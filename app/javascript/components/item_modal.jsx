import React from 'react';
import Modal from 'react-modal';

class ItemModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    const appElement = document.getElementById('app');
    Modal.setAppElement(appElement);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderComments(comments) {
    let all = comments.map((item)=> {
      return (<li>{item.body}</li>)
    })

    return (<ul> {all} </ul>)
  }

  render() {
    let item = this.props.item

    return (
      <li className="list-group-item" key={item.key}>
        <p>{item.name}</p>
        <a href={"/cart?id="+item.key} data-bz-remote='post' data-bz-silent>Add to Cart</a>
        <a href={"?_breezy_filter=products.list.id="+item.key} data-bz-remote='get'>update me</a>
        <div><span className="badge" style={{fontSize: 9}}>{item.quantity}</span></div>
        <a href={"?_breezy_filter=products.list.id="+item.key+'.comments'}  onClick={this.openModal} data-bz-remote data-bz-async>Show Comments</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
        {item.comments ? (
          this.renderComments(item.comments)
        ) : (
          <img src={this.props.meta.loading_image_path}/>
        )}
        </Modal>
    </li>
    );
  }
}

export default ItemModal
