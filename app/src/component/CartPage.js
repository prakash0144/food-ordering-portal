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
              <div className='col-7'>
                <div className='row'>
                  <div className='col-12'>
                    {items.map((item, idx) => (
                      <div className='row' key={idx}>
                        <div className='card border-light p-0'>
                          <div className='card-body p-0'>
                            <div className='row'>
                              <div className='col-4'>
                                <img src={item.url} width="194" height="140" style={{ borderRadius: "15px" }} alt={item.name} />
                              </div>
                              <div className='col-8'>
                                <h5>{item.name}</h5>
                                <div className='d-flex justify-content-between m-1'>
                                  <span className='text-primary'>{item.subname}</span>
                                  <span className={`badge ${item.type === 'veg' ? 'bg-success' : 'bg-danger'}`}>{item.type}</span>
                                </div>
                                <div className='w-100 p-3' style={cartfooter}>
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
              <div className='col-5'>

                <div className='card'>
                  <div className='col-12'>
                    <div className='row'>
                    <h5 className='p-2'>Delivery Address</h5>
                      <div className='col-2 pt-2 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                      </div>

                      <div className='col-10 p-2'>
                        
                        <h5>HOME</h5>
                        <span className='text-secondary'>
                          043 Franecki View, Edinburg, Florida 86134, <br/> United States
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
                      <span>Delivery Fee :</span>
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
