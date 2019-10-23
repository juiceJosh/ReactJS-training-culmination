import React from 'react'
import update from 'immutability-helper';
import MenuItem from '../menu-item'
import InputHeader from '../input-header'

import './module.style.scss'


class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
              {
                name: 'Cookie Monster',
                imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2016%2F11%2F12165139%2Fcookie-monster-1116.png&q=85',
                id: 1,
                description: 'Blue lovable, eats only cookies and nothing else.',
                price: 10000,
                quantity: 1
              },
              {
                name: 'PS4',
                imageUrl: 'https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/master/pass/PS4-Pro-SOURCE-Sony.jpg',
                id: 2,
                description: 'about to be obsolete due to the ps5. it came after the ps3',
                price: 18000,
                quantity: 9
              },
              {
                name: 'Airpods',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41qIPi7taiL._SX385_.jpg',
                id: 3,
                description: 'White, innovative, expensive. apple',
                price: 10000,
                quantity: 6
              },
              {
                name: 'Seaver',
                imageUrl: 'https://i1.rgstatic.net/ii/profile.image/595968948973568-1519101478171_Q512/Matthew_Seaver_Choy.jpg',
                id: 4,
                description: 'smort but his body is the best!',
                price: 10,
                quantity: 1
              }
                // {
                //     title: 'hats',
                //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                //     id: 1,
                //     linkUrl: 'shop/hats'
                //   },
            ],
          name: '',
          imageUrl: 'https://launchingsuccess.com/img/missing-product-image.jpg',
          description: '',
          price: '',
          quantity: ''
        }
    }
    handleChange = (e) => {
      this.setState(
          {[e.target.name]:e.target.value}
      )
    }
    
    submitProduct =(e) => {
      e.preventDefault()
      const addProd = this.state.sections
      const { name, description, price, quantity, imageUrl} = this.state
      const productAdd = {id: addProd.length + 1, name, description, price, quantity, imageUrl}
      this.setState({ sections: [...addProd, productAdd] })
      console.log(productAdd)
      console.log(addProd)
  }

  incrementCount= (id)=>{
    const index = id
    const addQuan = this.state.sections
    this.setState({
      sections: update(
        addQuan, {
          [index]: {
            quantity: {$apply: function(x) {return x + 1} } 
        }}
      )
    })
  }
  
  decrementCount= (id)=>{
    const index = id
    const delQuan = this.state.sections
    this.setState({
      sections: update(
        delQuan, {
          [index]: {
            quantity: {$apply: function(x) {return x - 1} } 
        }}
      )
    })
  }
    render() {
      // formula for adding
      let prodTotal = 0
      const totals = this.state.sections.map( ({price, quantity}) => (
        prodTotal += price * quantity
      ))
      console.log(totals)

        return (
            <div className='directory-menu'>
                {/* Input Header */}
                <div>
                  <InputHeader 
                    handleChange={this.handleChange} 
                    name={this.props.name}
                    description={this.props.description}
                    submitProduct={this.submitProduct}
                    img={this.state.imageUrl}
                    price={this.props.price}
                    quantity={this.props.quantity}
                  />
                </div>

                {/* Map of Shopping Cart */}
                <div>
                  {
                    this.state.sections.map( ({name, imageUrl, id, price, quantity, description }) => (
                        <MenuItem 
                          key={id} 
                          name={name} 
                          description={description} 
                          img={imageUrl} 
                          price={price}
                          quantity={quantity}
                          incrementCount={this.incrementCount.bind(this, id-1)}
                          decrementCount={this.decrementCount.bind(this, id-1)}
                          >
                        </MenuItem>
                    ))
                  }
                </div>

                {/* Totals */}
                <div className="col-3 offset-md-8 bg-primary text-white">
                  <div className="row d-flex justify-content-center align-items-center ">
                    <h4>Total</h4>
                    <div className="mr-5"></div>
                    <h4>$ {prodTotal}</h4>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Directory