import React from 'react'

const Mcard = ({ menuData }) => {
    //console.log(menuData)
  return (
    <>
    {menuData.map((curElem)=>{
        return(
            <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle '>1</span>
                        <span className='card-author subtle'>Breakfast</span>
                        <h2 className='card-title'>Maggi</h2>
                        <span className='card-description subtle'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quis temporibus doloribus eveniet fuga facere assumenda totam, quisquam voluptatum tempore voluptate accusantium omnis mollitia maxime. Adipisci repellendus tenetur minus. Laboriosam?
                        </span>
                    <div className='card-read'>Read</div>
                </div>
                {/*<img src={image} alt='images' className='card-media' /> */}
                <span className='card-tag subtle'>Order</span>
            </div>
        </div>
        
            </>
    );
    })};
    </>
  );
};   

export default Mcard;
