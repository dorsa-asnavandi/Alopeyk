import React, { Component } from 'react';
import '../assets/css/style.scss';
import axios from 'axios';
import { faStar, faMapMarkerAlt, faTag, faPlus, faMinus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fillDataFromApi, addItem, removeItem } from '../redux/edible/edibleActions';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';



class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(dispatch) {
    axios.get(`http://www.mocky.io/v2/5b94cb4f32000036007a66ae`)
      .then(res => {
        this.props.fillEdibles(res.data);
        this.setState({
          loading: false
        });

      })
  }

  render() {


    return (

      <div className="full-screen">
        <div className="wrapper-960">
          <header className="header-design">
            <div className="logo header-detail">
              <img src={this.props.marketData.image} className="logo__img" />
            </div>
            <span className="titile-design header-detail">{this.props.marketData.name}</span>
            <div className="rate header-detail">
              <span className="rate-style">{this.props.marketData.rate_average}</span>
              <div className="stars-parent">
                <div className="stars-1">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div style={{
                  width: (this.props.marketData.rate_average / 5) * 100 + '%',
                  color: "#fdd835",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  display: "flex",
                  flexDirection: "row",
                  overflow: "hidden"
                }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

              </div>
              <span className="rate-style">{this.props.marketData.rate_count}</span>
            </div>
            <div className="location header-detail">
              <span className="location__txt">{this.props.marketData.address}</span>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location__icon" />
            </div>
          </header>

          <div className="products">
            {this.state.loading ?
              <Loader
                type="Oval"
                color="#19a4e1"
                height={40}
                width={40}
                style={{ margin: "0 auto" }}
              />
              :
              this.props.marketData.products.map(
                product =>
                  <div className="product" key={product.id}>
                    <img src={product.image} className="product-img" />
                    <div className="productname-parent">
                      <span className="product-name">{product.name}</span>
                    </div>
                    <br />
                    <div className="price">
                      <span className="price__unit">تومان</span>
                      <span className="price__detail">{product.price}</span>
                      <FontAwesomeIcon icon={faTag} className="price__tag" />
                    </div>
                    <div className="btn-parent">
                      <button className="plus-btn btn-child"
                        onClick={() => this.props.addItem(product)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>

                      <div className="count-number btn-child"><span>{product.quantity}</span></div>
                      <button className="minus-btn btn-child"
                        onClick={() => this.props.removeItem(product)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                    </div>

                  </div>
              )
            }

          </div>

        </div>
        <footer className="full-footer">
          <div className="wrapper-footer">
            <div className="footer-design">
              <div className="footer-detail total-txt">
                <span className="total-unit">تومان</span>
                <span className="total-detail">{this.props.price}</span>
              </div>
              <div className="footer-detail basket-txt">
                <span>سبد خرید</span>
              </div>
              <div className="footer-detail basket-parent">
                <FontAwesomeIcon icon={faShoppingBasket} className="basket-design" />
                <span className="total-count">{this.props.totalCount}</span>
              </div>
            </div>
          </div>

        </footer>
      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
    marketData: state.dataFromApi,
    itemsInBasket: state.itemsInBasket,
    totalCount: state.totalCount,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fillEdibles: items => dispatch(fillDataFromApi(items)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Market);
