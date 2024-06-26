import React from 'react';
import EmptyCart from './emptycart';

function CartPage({ cartItems }) {
  const cartfooter = {
    position: 'absolute',
    top: '85%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    size: '12px'
  };

  const counter = {
    display: 'flex',
    border: 'light',
    gap: '10px'
  };

  const incrdecr = {
    background: '#f0f0f0',
    border: 'none',
    padding: '8px 12px',
    height: "31px",
    cursor: 'pointer'
  };

  const [items, setItems] = React.useState(cartItems.map(item => ({ ...item, count: 1 })));

  const handleIncrement = (index) => {
    const newItems = [...items];
    newItems[index].count += 1;
    setItems(newItems);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 1) {
      newItems[index].count -= 1;
    } else {
      newItems.splice(index, 1);
    }
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };

  const getGSTAmount = () => {
    const GST_RATE = 0.18;
    return getTotalAmount() * GST_RATE;
  };

  const getTotalItemCount = () => {
    return items.reduce((total, item) => total + item.count, 0);
  };

  return (
    <div>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className='container mt-5'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-sm-7'>
                <div className='row'>
                  <div className='col-12'>
                    {items.map((item, idx) => (
                      <div className='row' key={idx}>
                        <div className='card border-light p-0'>
                          <div className='card-body cart-item-details p-0'> 
                            <div className='row'>
                              <div className='col-lg-5 col-xl-4 col-md-6 col-sm-12'>
                              <button className='d-block d-md-none offset-11' onClick={() => handleDelete(idx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path d="M18 6L6 18" />
                                      <path d="M6 6l12 12" />
                                    </svg>
                                  </button>
                                <img src={item.url} width="194" className='col-sm-12' height="140" style={{ borderRadius: "15px" }} alt={item.name} />
                              </div>
                              <div className='col-lg-7 col-xl-8 col-sm-6 col-sm-12'>
                                <div className='d-flex justify-content-between'>
                                  <h5>{item.name}</h5>
                                  <button className='d-none d-md-block' onClick={() => handleDelete(idx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path d="M18 6L6 18" />
                                      <path d="M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                                <div className='d-flex justify-content-between m-1'>
                                  <span className='text-primary'>{item.subname}</span>
                                  <span className={`badge ${item.type === 'veg' ? 'bg-success' : 'bg-danger'}`}>{item.type}</span>
                                </div>

                                <span>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                                    <defs>
                                      <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#21973B"></stop>
                                        <stop offset="1" stopColor="#128540"></stop>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <b><span> </span>{item.rating}</b>
                                </span>

                                <div className='w-100 p-3 cart-details' style={cartfooter}>
                                  <div className='w-100 d-flex justify-content-between'>
                                    <span className='price-tag'>${item.price}</span>
                                    <div className="counter" style={counter}>
                                      <button style={incrdecr} className='btn' onClick={() => handleDecrement(idx)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus mb-3" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <path d="M5 12h14" />
                                        </svg>
                                      </button>
                                      <span>{item.count}</span>
                                      <button style={incrdecr} className='btn' onClick={() => handleIncrement(idx)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus mb-3" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <path d="M12 5v14" />
                                          <path d="M5 12h14" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='p-2'></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-sm-5'>
                <div className='card'>
                  <div className='col-12'>
                    <div className='row'>
                      <h5 className='p-2'>Delivery Address</h5>
                      <div className='col-2 pt-2 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                      </div>
                      <div className='col-10 p-2'>
                        <h5>HOME</h5>
                        <span className='text-secondary'>
                          043 Franecki View, Edinburg, Florida 86134, <br /> United States
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-2'></div>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='pb-3'>Summary</h5>
                    <div className='d-flex justify-content-between'>
                      <span>Total Items:</span>
                      <p className="total-item-count">{getTotalItemCount()}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span>Total Amount:</span>
                      <p className="final-amt">${getTotalAmount().toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span>GST 18% Amount:</span>
                      <p className="gst-amt">${getGSTAmount().toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span>Delivery Fee:</span>
                      <p className="total-with-gst">$1.22</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span>Total with GST:</span>
                      <p className="total-with-gst">${(getTotalAmount() + 1.22 + getGSTAmount()).toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span><b>To Pay:</b></span>
                      <b className="total-with-gst">${(getTotalAmount() + 1.22 + getGSTAmount()).toFixed(2)}</b>
                    </div>
                    {/* You can add more summary details here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
